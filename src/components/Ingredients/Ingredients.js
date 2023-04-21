import Ingredient from "./Ingredient";
import IngredientsData from "../../IngredientsData";
import SelectedIngredients from "./SelectedIngredients";
import { useState } from "react";

function getIncompability(effects) {
	let incompatible = [];
	IngredientsData.forEach((ingredient) => {
		if (
			!effects.includes(ingredient.effect1) &&
			!effects.includes(ingredient.effect2) &&
			!effects.includes(ingredient.effect3) &&
			!effects.includes(ingredient.effect4)
		) {
			incompatible.push(ingredient.id);
		}
	});
	return incompatible;
}

export default function Ingredients(props) {
	const [disableAddButtons, setDisableAddButtons] = useState(false);



	return (
		<>
			<div className='sticky z-10 top-[22px] xs:top-[26px]'>
				<SelectedIngredients selectedIDs={props.selectedIDs} deselectIngredient={props.deselectOne} />
			</div>
			<div className='overflow-scroll'>
				{IngredientsData.map((ingredient) => {
					let isSelected = false;
					if (props.selectedIDs.includes(ingredient.id)) {
						isSelected = true;
					}

					if (!isSelected) {
						return (
							<Ingredient
								key={ingredient.id}
								selectIngredient={props.selectOne}
								id={ingredient.id}
								// effects={effects}
								isDisabled={disableAddButtons}
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