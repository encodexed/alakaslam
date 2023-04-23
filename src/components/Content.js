import { useState, useEffect } from "react";
import PotionEffects from "./Effects/PotionEffects";
import Ingredients from "./Ingredients/Ingredients";
import Version from "./Version";
import SectionCard from "./UI/SectionCard";
import IngredientResults from "./Ingredients/IngredientResults";
import getMatchesAndConflicts from "@/functions/getMatchesAndConflicts";
import EffectsResults from "./Effects/EffectsResults";
import Combinations from "./Effects/Combinations";

export default function Content(props) {
	// Controls which mode is being viewed, selected by clicking on tabs.
	const [selectionMode, setSelectionMode] = useState("effects");
	// Controls window height behaviour in the SectionCard component.
	const [sectionsShown, setSectionsShown] = useState(2);
	// An array of IDs relating to either ingredients or effects, as selected by the user. Maximum 3 selections.
	const [userSelections, setUserSelections] = useState([]);
	// If three ingredients/effects are selected, adding more is disabled.
	const [disableAddButtons, setDisableAddButtons] = useState(false);
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
		// Disable buttons in maximum allowed user selections reached
		const maxChoices = userSelections.length >= 3;
		setDisableAddButtons(maxChoices);
		// Get new matches and conflicts of selected ingredients.
		if (selectionMode === "ingredients") {
			const matchesConflicts = getMatchesAndConflicts(userSelections);
			setMatchesAndConflicts({
				triples: matchesConflicts.triples,
				doubles: matchesConflicts.doubles,
				conflicts: matchesConflicts.conflicts,
			});
		}
	}, [selectionMode, userSelections]);

	const selectOne = (id) => {
		if (userSelections.length < 3) {
			setUserSelections([...userSelections, id]);
		}
	};

	const deselectOne = (id) => {
		const newSelections = userSelections.filter(
			(selection) => selection !== id
		);
		setUserSelections([...newSelections]);
	};

	const ingredientsClickHandler = () => {
		setSelectionMode("ingredients");
		setIsViewingOutcome(false);
		setUserSelections([]);
	};

	const effectsClickHandler = () => {
		setSelectionMode("effects");
		setUserSelections([]);
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
		})
	}

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
				>
					<IngredientResults
						selectedCount={userSelections.length}
						matchesAndConflicts={matchesAndConflicts}
					/>
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
					{isViewingOutcome && (
						<EffectsResults selectedIDs={userSelections} />
					)}
					{!isViewingOutcome && (
						<Combinations selectedIDs={userSelections} strictMode={strictMode} />
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
			>
				{selectionMode === "ingredients" && (
					<Ingredients
						selectedIDs={userSelections}
						matchesAndConflicts={matchesAndConflicts}
						selectOne={selectOne}
						deselectOne={deselectOne}
						disableAddButtons={disableAddButtons}
					/>
				)}
				{selectionMode === "effects" && (
					<PotionEffects
						selectedIDs={userSelections}
						selectOne={selectOne}
						deselectOne={deselectOne}
						disableAddButtons={disableAddButtons}
					/>
				)}
			</SectionCard>
		</div>
	);
}
