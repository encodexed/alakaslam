import AddButton from "../UI/AddButton";
import Icon from "../UI/Icon";
import IngredientsData from "../../IngredientsData";
import DisabledAddButton from "../UI/DisabledAddButton";

export default function Ingredient(props) {
	const { name, effects, src } =
		IngredientsData[props.id];

	const addSelectionHandler = () => {
		props.selectIngredient(props.id);
	};

	const incompatibleStyle =
		"sm:text-sm leading-none sm:leading-none text-xs text-center text-slate-500";
	let style1 = incompatibleStyle;
	let style2 = incompatibleStyle;
	let style3 = incompatibleStyle;
	let style4 = incompatibleStyle;

	return (
		<>
			<div className='hidden px-2 border-b xs:flex'>
				<div>
					<Icon src={src} />
				</div>
				<div className='flex-1 w-40 my-auto justify-content-center'>
					<h3 className='text-sm text-center sm:text-base'>{name}</h3>
				</div>
				<div className='my-auto flex-0'>
					{!props.isDisabled && (
						<AddButton onClick={addSelectionHandler} />
					)}
					{props.isDisabled && <DisabledAddButton />}
				</div>
				<div className='flex-1 my-auto ml-2'>
					<p className={style1}>{effects[0]}</p>
					<p className={style2}>{effects[1]}</p>
				</div>
				<div className='flex-1 my-auto'>
					<p className={style3}>{effects[2]}</p>
					<p className={style4}>{effects[3]}</p>
				</div>
			</div>
			<div className='flex px-2 border-b xs:hidden'>
				<div>
					<Icon src={src} />
				</div>
				<div className='flex-1 my-auto justify-content-center'>
					<h3 className='text-sm text-center sm:text-base'>{name}</h3>
				</div>
				<div className='my-auto flex-0'>
					{!props.isDisabled && (
						<AddButton onClick={addSelectionHandler} />
					)}
					{props.isDisabled && <DisabledAddButton />}
				</div>
				<div className='flex-1 my-1 ml-1 truncate'>
					<p className={style1}>{effects[0]}</p>
					<p className={style2}>{effects[1]}</p>
					<p className={style3}>{effects[2]}</p>
					<p className={style4}>{effects[3]}</p>
				</div>
			</div>
		</>
	);
}


// const compatibleStyle =
// "sm:text-sm leading-none sm:leading-none text-xs text-center text-blue-500";

	// if (props.effects.includes(effect1)) {
	// 	style1 = compatibleStyle;
	// }
	// if (props.effects.includes(effect2)) {
	// 	style2 = compatibleStyle;
	// }
	// if (props.effects.includes(effect3)) {
	// 	style3 = compatibleStyle;
	// }
	// if (props.effects.includes(effect4)) {
	// 	style4 = compatibleStyle;
	// }