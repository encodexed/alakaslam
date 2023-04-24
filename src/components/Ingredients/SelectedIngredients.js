import SelectedIngredient from "./SelectedIngredient";

export default function SelectedIngredients(props) {
	const borderStyle =
		props.selectedIDs.length > 0 ? "border-b-2 border-black" : "";
	const style = `flex flex-col w-full ${borderStyle}`;

	return (
		<div className={style}>
			{props.selectedIDs.map((id) => {
				return (
					<SelectedIngredient
						key={"a" + id}
						ingredientID={id}
						deselectIngredient={props.deselectIngredient}
						matchesAndConflicts={props.matchesAndConflicts}
					/>
				);
			})}
		</div>
	);
}
