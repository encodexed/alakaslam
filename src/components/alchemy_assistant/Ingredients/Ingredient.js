import IngredientsData from "../../../app_data/IngredientsData";
import UnfilteredIngredient from "./UnfilteredIngredient";

export default function Ingredient(props) {
	const ingredient = IngredientsData[props.id];
	const { name, effects } = ingredient;

	if (!props.filter) {
		return (
			<UnfilteredIngredient
				id={props.id}
				selectIngredient={props.selectIngredient}
				effects={props.effects}
			/>
		);
	} else {
		let filterThisIngredient = true;
		let allContent = (name + "," + effects.toString()).toLowerCase();
		if (allContent.search(props.filter.toLowerCase()) >= 0) {
			filterThisIngredient = false;
		}

		if (!filterThisIngredient) {
			return (
				<UnfilteredIngredient
					id={props.id}
					selectIngredient={props.selectIngredient}
					effects={props.effects}
				/>
			);
		} else {
			return <></>;
		}
	}
}
