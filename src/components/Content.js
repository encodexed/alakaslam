import { useState } from "react";
import Card from "./UI/Card";
import PotionEffects from "./Effects/PotionEffects";
import Ingredients from "./Ingredients/Ingredients";
import Version from "./Version";

export default function Content(props) {
	const [selectionMode, setSelectionMode] = useState("effects");

	const ingredientsClickHandler = () => {
		setSelectionMode("ingredients");
	};

	const effectsClickHandler = () => {
		setSelectionMode("effects");
	};

	return (
		<div className='mx-auto grow'>
			<Card>
				{selectionMode === "effects" && (
					<PotionEffects
						selectionMode={selectionMode}
						ingredientsClickHandler={ingredientsClickHandler}
						effectsClickHandler={effectsClickHandler}
					/>
				)}
				{selectionMode === "ingredients" && (
					<Ingredients
						selectionMode={selectionMode}
						ingredientsClickHandler={ingredientsClickHandler}
						effectsClickHandler={effectsClickHandler}
					/>
				)}
				<div className='mt-2'>
					<Version toggleShowInfo={props.toggleShowInfo} />
				</div>
			</Card>
		</div>
	);
}
