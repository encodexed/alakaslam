import { useState } from "react";
import PotionEffects from "./Effects/PotionEffects";
import Ingredients from "./Ingredients/Ingredients";
import Version from "./Version";
import SectionCard from "./UI/SectionCard";

export default function Content(props) {
	const [selectionMode, setSelectionMode] = useState("effects");
	const [sectionsShown, setSectionsShown] = useState(2);

	const ingredientsClickHandler = () => {
		setSelectionMode("ingredients");
	};

	const effectsClickHandler = () => {
		setSelectionMode("effects");
	};

	const adjustSectionsShown = (num) => {
		setSectionsShown((prevState) => {
			return prevState + num;
		});
	};

	const selectedHeader =
		selectionMode === "ingredients"
			? "Selected Ingredients"
			: "Selected Effects";

	return (
		<div className='flex flex-col max-w-3xl max-h-screen mx-auto'>
			<div className='mt-2'>
				<h1 className='my-4 text-3xl text-center underline'>
					ESO Alchemy Assistant
				</h1>
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
					<PotionEffects selectionMode={selectionMode} />
				)}
				{selectionMode === "ingredients" && (
					<Ingredients selectionMode={selectionMode} />
				)}
			</SectionCard>
		</div>
	);
}
