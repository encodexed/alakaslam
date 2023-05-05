import IngredientsData from "@/IngredientsData";
import UnfilteredCombination from "./UnfilteredCombination";

export default function Combination(props) {
	if (!props.filter) {
		return (
			<UnfilteredCombination
				ingredients={props.ingredients}
				thisKey={props.thisKey}
			/>
		);
	} else {
		let filterThisCombination = true;
		let allContent = "";
		props.ingredients.forEach((ingredientID) => {
			if (ingredientID >= 0) {
				allContent +=
					IngredientsData[ingredientID].name.toLowerCase() + ",";
			}
		});
		if (allContent.search(props.filter.toLowerCase()) >= 0) {
			filterThisCombination = false;
		}

		if (!filterThisCombination) {
			return (
				<UnfilteredCombination
					ingredients={props.ingredients}
					thisKey={props.thisKey}
				/>
			);
		} else {
			return <></>;
		}
	}
}
