import RemoveButton from "../UI/RemoveButton";
import Icon from "../UI/Icon";
import DisabledRemoveButton from "../UI/DisabledRemoveButton";
import IngredientsData from "@/IngredientsData";

export default function SelectedIngredient(props) {
	const unmatchedStyle =
		"sm:text-sm text-xs leading-none sm:leading-none text-center text-slate-500";
	const matchedStyle =
		"sm:text-sm text-xs leading-none sm:leading-none text-center text-purple-500";
	const counterEffectStyle =
		"sm:text-sm text-xs leading-none sm:leading-none text-center text-red-500";
	const matchedShadowStyle = { textShadow: "purple 0 0 0.5px" };
	const counterEffectShadowStyle = { textShadow: "red 0 0 0.5px" };

	const { id, name, effect1, effect2, effect3, effect4, src } =
		IngredientsData[props.ingredientID];

	let shadow1, shadow2, shadow3, shadow4;
	let style1 = unmatchedStyle;
	let style2 = unmatchedStyle;
	let style3 = unmatchedStyle;
	let style4 = unmatchedStyle;

	// Display matching effects
	if (props.matchedEffects.includes(effect1)) {
		style1 = matchedStyle;
		shadow1 = matchedShadowStyle;
	}
	if (props.matchedEffects.includes(effect2)) {
		style2 = matchedStyle;
		shadow2 = matchedShadowStyle;
	}
	if (props.matchedEffects.includes(effect3)) {
		style3 = matchedStyle;
		shadow3 = matchedShadowStyle;
	}
	if (props.matchedEffects.includes(effect4)) {
		style4 = matchedStyle;
		shadow4 = matchedShadowStyle;
	}
	// Change style for counter effects
	if (props.counterEffects.includes(effect1)) {
		style1 = counterEffectStyle;
		shadow1 = counterEffectShadowStyle;
	}
	if (props.counterEffects.includes(effect2)) {
		style2 = counterEffectStyle;
		shadow2 = counterEffectShadowStyle;
	}
	if (props.counterEffects.includes(effect3)) {
		style3 = counterEffectStyle;
		shadow3 = counterEffectShadowStyle;
	}
	if (props.counterEffects.includes(effect4)) {
		style4 = counterEffectStyle;
		shadow4 = counterEffectShadowStyle;
	}

	return (
		<div className='flex px-2 border-b border-black bg-slate-100'>
			<div>
				<Icon src={src} />
			</div>
			<div className='flex-1 w-40 my-auto justify-content-center'>
				<h3 className='text-sm text-center sm:text-base'>{name}</h3>
			</div>
			<div className='my-auto flex-0'>
				<RemoveButton onClick={props.deselectHandler} />
			</div>
			<div className='flex-1 my-auto ml-2'>
				<p className={style1} style={shadow1}>
					{effect1}
				</p>
				<p className={style2} style={shadow2}>
					{effect2}
				</p>
			</div>
			<div className='flex-1 my-auto'>
				<p className={style3} style={shadow3}>
					{effect3}
				</p>
				<p className={style4} style={shadow4}>
					{effect4}
				</p>
			</div>
		</div>
	);
}