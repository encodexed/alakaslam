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
								filter={props.filter}
							/>
						);
					}
				})}
			</div>
		</>
	);
}