import { useState, useEffect } from "react";
import PotionEffects from "./Effects/PotionEffects";
import Ingredients from "./Ingredients/Ingredients";
import Version from "./Version";
import SectionCard from "./UI/SectionCard";
import IngredientResults from "./Ingredients/IngredientResults";
import getMatchesAndConflicts from "@/functions/getMatchesAndConflicts";

export default function Content(props) {
	// Controls which mode is being viewed, selected by clicking on tabs.
	const [selectionMode, setSelectionMode] = useState("ingredients");
	// Controls window height behaviour in the SectionCard component.
	const [sectionsShown, setSectionsShown] = useState(2);
	// An array of IDs relating to either ingredients or effects, as selected by the user. Maximum 3 selections.
	const [userSelections, setUserSelections] = useState([]);
	// If three ingredients/effects are selected, adding more is disabled.
	const [disableAddButtons, setDisableAddButtons] = useState(false);
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
		setUserSelections([]);
	};

	const effectsClickHandler = () => {
		setSelectionMode("effects");
		setUserSelections([]);
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
				>
					<IngredientResults
						selectedCount={userSelections.length}
						matchesAndConflicts={matchesAndConflicts}
					/>
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
