import IngredientsData from "../../IngredientsData";
import SelectedIngredient from "./SelectedIngredient";
import { useState, useEffect } from "react";
import IngredientResults from "./IngredientResults";
import EffectsData from "../../EffectsData";
import SectionHeader from "../UI/SectionHeader";

export default function SelectedIngredients(props) {
	const [matchedEffects, setMatchedEffects] = useState([]);
	const [counterEffects, setCounterEffects] = useState([]);

	// useEffect(() => {
	// if (props.effects.length >= 8) {
	// 	const effects = [...props.effects];
	// 	// Determine if there are more than two of any effect, indicating a match.
	// 	const matches = effects.filter(
	// 		(item, index) => index !== effects.indexOf(item)
	// 	);
	// 	// Determine only unique matches.
	// 	const uniqueMatches = matches.filter(
	// 		(item, index) => index === matches.indexOf(item)
	// 	);
	// 	// Determine if any effects counter the effect of the matches
	// 	let cancelled = [];
	// 	uniqueMatches.forEach((match) => {
	// 		EffectsData.forEach((effectData) => {
	// 			if (effectData.name === match) {
	// 				effects.forEach((effect) => {
	// 					if (effectData.counterEffect === effect) {
	// 						cancelled.push({
	// 							effect: match,
	// 							counteredBy: effect,
	// 						});
	// 					}
	// 				});
	// 			}
	// 		});
	// 	});
	// 	// Remove countered effects, and mark counters for state update
	// 	let newCounterEffects = [];
	// 	cancelled.forEach((effect) => {
	// 		newCounterEffects.push(effect.counteredBy);
	// 		const index = uniqueMatches.indexOf(effect.effect);
	// 		uniqueMatches.splice(index, 1);
	// 	});
	// 	setCounterEffects([...newCounterEffects]);
	// 	setMatchedEffects([...uniqueMatches]);
	// } else {
	// 	setMatchedEffects([]);
	// 	setCounterEffects([]);
	// }
	// }, [props.effects]);

	const deselectHandler1 = () => {
		props.deselectIngredient(ingredient1.id);
	};

	const deselectHandler2 = () => {
		props.deselectIngredient(ingredient2.id);
	};

	const deselectHandler3 = () => {
		props.deselectIngredient(ingredient3.id);
	};

	const borderStyle = props.selectedIDs.length > 0 ? 'border-b-2 border-black' : '';
	const style = `flex flex-col w-full ${borderStyle}`;

	return (
		<>
			<div className={style}>
				{props.selectedIDs.length >= 1 && (
					<SelectedIngredient
						key={"a" + props.selectedIDs[0]}
						matchedEffects={matchedEffects}
						ingredientID={props.selectedIDs[0]}
						deselectHandler={deselectHandler1}
						counterEffects={counterEffects}
					/>
				)}

				{props.selectedIDs.length >= 2 && (
					<SelectedIngredient
						key={"a" + props.selectedIDs[1]}
						matchedEffects={matchedEffects}
						ingredientID={props.selectedIDs[1]}
						deselectHandler={deselectHandler2}
						counterEffects={counterEffects}
					/>
				)}

				{props.selectedIDs.length >= 3 && (
					<SelectedIngredient
						key={"a" + props.selectedIDs[2]}
						matchedEffects={matchedEffects}
						ingredientID={props.selectedIDs[2]}
						deselectHandler={deselectHandler3}
						counterEffects={counterEffects}
					/>
				)}
			</div>
			{/* <IngredientResults
				matchedEffects={matchedEffects}
				counterEffects={counterEffects}
				selectedCount={props.effects.length}
			/> */}
		</>
	);
}
