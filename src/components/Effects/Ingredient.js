import Icon from "../UI/Icon";
import IngredientsData from "../../IngredientsData";

export default function Ingredient(props) {
	if (props.id === "-1") {
		return <div className='flex flex-1 text-center border-b'></div>;
	}

	return (
		<div className='flex flex-1 border-b'>
			<Icon src={IngredientsData[props.id].src} />
			<p className='my-auto text-sm'>{IngredientsData[props.id].name}</p>
		</div>
	);
}
