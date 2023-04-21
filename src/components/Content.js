import { use, useState } from "react";
import PotionEffects from "./Effects/PotionEffects";
import Ingredients from "./Ingredients/Ingredients";
import Version from "./Version";
import SectionCard from "./UI/SectionCard";

export default function Content(props) {
	// Controls which mode is being viewed, selected by clicking on tabs.
	const [selectionMode, setSelectionMode] = useState("ingredients");
	// Controls window height behaviour in the SectionCard component.
	const [sectionsShown, setSectionsShown] = useState(2);
	// An array of IDs relating to either ingredients or effects, as selected by the user. Maximum 3 selections.
	const [userSelections, setUserSelections] = useState([]);
	// If three ingredients/effects are selected, adding more is disabled.
	const [disableAddButtons, setDisableAddButtons] = useState(false);

	const selectOne = (id) => {
		if (userSelections.length === 2) {
			setDisableAddButtons(true);
		}
		if (userSelections.length < 3) {
			setUserSelections([...userSelections, id]);
		}
	};

	const deselectOne = (id) => {
		setDisableAddButtons(false);
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

			<SectionCard
				tab1={"Expected Results"}
				renderInfo={sectionsShown}
				renderControl={adjustSectionsShown}
			>
				<div>
					Results!
					<br />
					More results
					<br />
					Even more results{" "}
				</div>
			</SectionCard>

			<SectionCard
				tab1={"Show Ingredients"}
				tabClick1={ingredientsClickHandler}
				tab2={"Show Effects"}
				tabClick2={effectsClickHandler}
				renderInfo={sectionsShown}
				renderControl={adjustSectionsShown}
			>
				{selectionMode === "effects" && (
					<PotionEffects
						selectedIDs={userSelections}
						selectOne={selectOne}
						deselectOne={deselectOne}
						disableAddButtons={disableAddButtons}
					/>
				)}
				{selectionMode === "ingredients" && (
					<Ingredients
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
