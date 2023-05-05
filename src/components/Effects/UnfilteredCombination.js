import Ingredient from "./Ingredient";

export default function UnfilteredCombination(props) {
	return (
		<div className='flex text-center'>
			{props.ingredients.map((ingredientID) => {
				return (
					<Ingredient
						key={props.thisKey + "x" + ingredientID}
						id={ingredientID}
					/>
				);
			})}
		</div>
	);
}
