import Icon from "../UI/Icon";
import IngredientsData from "../../../app_data/IngredientsData";

export default function Ingredient(props) {
	if (props.id === -1) {
		return <div className='flex flex-1 border-b'></div>;
	}

	return (
		<div className='flex flex-1 text-left border-b'>
			<Icon src={IngredientsData[props.id].src} />
			<p className='my-auto text-xs sm:text-sm'>{IngredientsData[props.id].name}</p>
		</div>
	);
}
