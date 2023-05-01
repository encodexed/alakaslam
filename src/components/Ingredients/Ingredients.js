import Ingredient from "./Ingredient";
import IngredientsData from "../../IngredientsData";
import SelectedIngredients from "./SelectedIngredients";
import { useState, useEffect } from "react";
import getCompatible from "@/functions/getCompatible";
import getEffects from "@/functions/getEffects";

export default function Ingredients(props) {
	// An array of IDs for ingredients that work with the user's selected ingredients
	const [compatibleIngredientsIDs, setCompatibleIngredientsIDs] = useState([]);
	// An array of effects in which the user selected ingredients can bond with in other ingredients.
	const [effects, setEffects] = useState([]);

	useEffect(() => {
		if (props.selectedIDs.length === 0) {
			// When no ingredients are selected by the user, display all ingredients
			let allIngredients = [];
			for (let i = 0; i < IngredientsData.length; i++) {
				allIngredients.push(i);
			}
			setCompatibleIngredientsIDs([...allIngredients]);
		} else {
			// Get ingredients that work with the user's selected ingredients
			const compatibles = getCompatible("ingredients", props.selectedIDs);
			setCompatibleIngredientsIDs(compatibles);
		}

		// Get all effects of chosen ingredients so that choices can be highlighted.
		let effects = getEffects(props.selectedIDs);
		effects.sort();
		setEffects(effects);
	}, [props.selectedIDs]);

	return (
		<>
			<div className='sticky z-10 top-[62px] xs:top-[66px]'>
				<SelectedIngredients
					selectedIDs={props.selectedIDs}
					deselectIngredient={props.deselectOne}
					matchesAndConflicts={props.matchesAndConflicts}
				/>
			</div>
			<div className='overflow-auto'>
				{IngredientsData.map((ingredient) => {
					if (
						!props.selectedIDs.includes(ingredient.id) &&
						compatibleIngredientsIDs.includes(ingredient.id)
					) {
						return (
							<Ingredient
								key={ingredient.id}
								selectIngredient={props.selectOne}
								id={ingredient.id}
								effects={effects}
								isDisabled={props.disableAddButtons}
							/>
						);
					}
				})}
			</div>
		</>
	);
}
// These are IDs
// const [incompatibleIngredients, setIncompatibleIngredients] = useState([]);
// const [effects, setEffects] = useState([]);

// if (props.selectedIDs.length >= 3) {
// 	setDisableAddButtons(true);
// } else {
// 	setDisableAddButtons(false);
// }

// const selectIngredient = (id) => {
// 	// The new ingredient's effects are retrieved
// 	let newEffects = [
// 		IngredientsData[id].effect1,
// 		IngredientsData[id].effect2,
// 		IngredientsData[id].effect3,
// 		IngredientsData[id].effect4,
// 	];
// 	// And if there's room, the ingredient and it's effects are updated in state
// 	if (selectedIngredients.length < 3) {
// 		setSelectedIngredients([...selectedIngredients, id]);
// 		const allEffects = [...effects, ...newEffects];
// 		setEffects(allEffects);
// 		setIncompatibleIngredients(getIncompability(allEffects));
// 	}

// 	// Upon adding final ingredient choice, disable the buttons.
// 	if (selectedIngredients.length === 2) {
// 		setDisableAddButtons(true);
// 	}
// };

// const deselectIngredient = (id) => {
// 	const ingredientIndex = selectedIngredients.indexOf(id);
// 	setSelectedIngredients(
// 		selectedIngredients.filter((ingredientID) => id !== ingredientID)
// 	);

// 	// Upon removing an ingredient to make way for another final choice...
// 	if (selectedIngredients.length === 3) {
// 		setDisableAddButtons(false);
// 	}

// 	if (
// 		selectedIngredients.length === 3 ||
// 		selectedIngredients.length === 2
// 	) {
// 		const start = ingredientIndex * 4;
// 		const updatedEffects = [...effects];
// 		updatedEffects.splice(start, 4); // .splice() RETURNS the removed effects, can be problematic.
// 		setEffects(updatedEffects);
// 		setIncompatibleIngredients(getIncompability(updatedEffects));
// 	}
// 	// Upon removing the final remaining ingredient, reset incompabitibility.
// 	if (selectedIngredients.length === 1) {
// 		setIncompatibleIngredients([]);
// 		setEffects([]);
// 	}
// };

// let displayIngredients = [];
// IngredientsData.forEach((ingredient) => {
// 	if (!incompatibleIngredients.includes(ingredient.id)) {
// 		displayIngredients.push(ingredient);
// 	}
// });
