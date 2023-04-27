import { useState, useEffect } from "react";
import PotionEffects from "./Effects/PotionEffects";
import Ingredients from "./Ingredients/Ingredients";
import Version from "./Version";
import SectionCard from "./UI/SectionCard";
import IngredientResults from "./Ingredients/IngredientResults";
import getMatchesAndConflicts from "@/functions/getMatchesAndConflicts";
import EffectsResults from "./Effects/EffectsResults";
import Combinations from "./Effects/Combinations";
import Images from "../Images";
import Loading from "./Loading";

function preloadImages(array) {
	if (!preloadImages.list) {
		preloadImages.list = [];
	}
	let list = preloadImages.list;
	for (let i = 0; i < array.length; i++) {
		let img = new Image();
		img.onload = function() {
			let index = list.indexOf(this);
			if (index !== -1) {
				// remove image from the array once it's loaded
				// for memory consumption reasons
				list.splice(index, 1);
			}
		};
		list.push(img);
		img.src = array[i];
	}
}

export default function Content(props) {
	// When first loading the page, display a loading symbol and pre-cache the images.
	const [isPreloadingImages, setIsPreloadingImages] = useState(true);
	// Controls which mode is being viewed, selected by clicking on tabs.
	const [selectionMode, setSelectionMode] = useState("effects");
	// Controls window height behaviour in the SectionCard component.
	const [sectionsShown, setSectionsShown] = useState(2);
	// An array of ingredient IDs as selected by the user. Maximum 3 selections.
	const [userIngredientSelections, setUserIngredientSelections] = useState([]);
	// An array of effects IDs as selected by the user. Maximum 3 selections.
	const [userEffectSelections, setUserEffectSelections] = useState([]);
	// If three effects are selected, adding more is disabled.
	const [disableAddEffects, setDisableAddEffects] = useState(false);
	// If three ingredients are selected, adding more is disabled.
	const [disableAddIngredients, setDisableAddIngredients] = useState(false);
	// Controls if outcome or combinations are being viewed on effects tab.
	const [isViewingOutcome, setIsViewingOutcome] = useState(false);
	// When enabled, strict search prevents showing concoctions with side effects the user didn't specify.
	// However, some effects cannot exist on their own, as in the case of Cowardice.
	const [strictMode, setStrictMode] = useState(true);
	// Store matches and conflicts for helping display logic on ingredients tab.
	const [matchesAndConflicts, setMatchesAndConflicts] = useState({
		triples: [],
		doubles: [],
		conflicts: [],
	});

	useEffect(() => {
		preloadImages(Images);
		setIsPreloadingImages(false);
	}, []);

	useEffect(() => {
		// Disable buttons in maximum allowed user selections reached
		const maxEffectChoices = userEffectSelections.length >= 3;
		const maxIngredientChoices = userIngredientSelections.length >= 3;
		setDisableAddEffects(maxEffectChoices);
		setDisableAddIngredients(maxIngredientChoices);
		// Get new matches and conflicts of selected ingredients.
		if (selectionMode === "ingredients") {
			const matchesConflicts = getMatchesAndConflicts(
				userIngredientSelections
			);
			setMatchesAndConflicts({
				triples: matchesConflicts.triples,
				doubles: matchesConflicts.doubles,
				conflicts: matchesConflicts.conflicts,
			});
		}
	}, [selectionMode, userIngredientSelections, userEffectSelections]);

	const selectEffect = (id) => {
		if (userEffectSelections.length < 3) {
			setUserEffectSelections([...userEffectSelections, id]);
		}
	};

	const deselectEffect = (id) => {
		const newSelections = userEffectSelections.filter(
			(selection) => selection !== id
		);
		setUserEffectSelections([...newSelections]);
	};

	const selectIngredient = (id) => {
		if (userIngredientSelections.length < 3) {
			setUserIngredientSelections([...userIngredientSelections, id]);
		}
	};

	const deselectIngredient = (id) => {
		const newSelections = userIngredientSelections.filter(
			(selection) => selection !== id
		);
		setUserIngredientSelections([...newSelections]);
	};

	const ingredientsClickHandler = () => {
		setSelectionMode("ingredients");
		setIsViewingOutcome(false);
	};

	const effectsClickHandler = () => {
		setSelectionMode("effects");
	};

	const combinationsClickHandler = () => {
		setIsViewingOutcome(false);
	};

	const outcomeClickHandler = () => {
		setIsViewingOutcome(true);
	};

	const toggleStrictModeHandler = () => {
		setStrictMode((prevState) => {
			return !prevState;
		});
	};

	// Called from the SectionCard component.
	const adjustSectionsShown = (num) => {
		setSectionsShown((prevState) => {
			return prevState + num;
		});
	};

	return (
		<div className='flex flex-col max-w-3xl max-h-screen mx-auto'>
			<div className='mt-2'>
				<Version toggleShowInfo={props.toggleShowInfo} />
			</div>
			{selectionMode === "ingredients" && (
				<SectionCard
					tab1={"Outcome"}
					renderInfo={sectionsShown}
					renderControl={adjustSectionsShown}
					isViewingOutcome={isViewingOutcome}
				>
					{isPreloadingImages && <Loading />}
					{!isPreloadingImages && (
						<IngredientResults
							selectedCount={userIngredientSelections.length}
							matchesAndConflicts={matchesAndConflicts}
						/>
					)}
				</SectionCard>
			)}
			{selectionMode === "effects" && (
				<SectionCard
					tab1={"Combinations"}
					tabClick1={combinationsClickHandler}
					tab2={"Outcome"}
					tabClick2={outcomeClickHandler}
					renderInfo={sectionsShown}
					renderControl={adjustSectionsShown}
					strictMode={strictMode}
					toggleStrictMode={toggleStrictModeHandler}
					isViewingOutcome={isViewingOutcome}
				>
					{isPreloadingImages && <Loading />}
					{!isPreloadingImages && isViewingOutcome && (
						<EffectsResults selectedIDs={userEffectSelections} />
					)}
					{!isPreloadingImages && !isViewingOutcome && (
						<Combinations
							selectedIDs={userEffectSelections}
							strictMode={strictMode}
						/>
					)}
				</SectionCard>
			)}

			<SectionCard
				tab1={"Choose Ingredients"}
				tabClick1={ingredientsClickHandler}
				tab2={"Choose Effects"}
				tabClick2={effectsClickHandler}
				renderInfo={sectionsShown}
				renderControl={adjustSectionsShown}
				selectionMode={selectionMode}
			>
				{isPreloadingImages && <Loading />}
				{!isPreloadingImages && selectionMode === "ingredients" && (
					<Ingredients
						selectedIDs={userIngredientSelections}
						matchesAndConflicts={matchesAndConflicts}
						selectOne={selectIngredient}
						deselectOne={deselectIngredient}
						disableAddButtons={disableAddIngredients}
					/>
				)}
				{!isPreloadingImages && selectionMode === "effects" && (
					<PotionEffects
						selectedIDs={userEffectSelections}
						selectOne={selectEffect}
						deselectOne={deselectEffect}
						disableAddButtons={disableAddEffects}
					/>
				)}
			</SectionCard>
		</div>
	);
}
