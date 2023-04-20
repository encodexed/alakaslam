import { useState } from "react";
import PotionEffects from "./Effects/PotionEffects";
import Ingredients from "./Ingredients/Ingredients";
import Version from "./Version";
import SectionCard from "./UI/SectionCard";

export default function Content(props) {
	const [selectionMode, setSelectionMode] = useState("ingredients");

	const ingredientsClickHandler = () => {
		setSelectionMode("ingredients");
	};

	const effectsClickHandler = () => {
		setSelectionMode("effects");
	};

	const selectedHeader =
		selectionMode === "ingredients"
			? "Selected Ingredients"
			: "Selected Effects";

	return (
		<div className='h-full mx-auto'>
			<div className='mt-2'>
				<h1 className='my-4 text-3xl text-center underline'>
					ESO Alchemy Assistant
				</h1>
				<Version toggleShowInfo={props.toggleShowInfo} />
			</div>

			<SectionCard
				tab1={"Show Ingredients"}
				tabClick1={ingredientsClickHandler}
				tab2={"Show Effects"}
				tabClick2={effectsClickHandler}
			>
				{selectionMode === "effects" && (
					<PotionEffects
						selectionMode={selectionMode}
					/>
				)}
				{selectionMode === "ingredients" && (
					<Ingredients
						selectionMode={selectionMode}
					/>
				)}
			</SectionCard>
		</div>
	);
}
