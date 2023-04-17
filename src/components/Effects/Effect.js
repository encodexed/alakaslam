import EffectsData from "../../EffectsData";
import AddButton from "../UI/AddButton";
import DisabledAddButton from "../UI/DisabledAddButton";
import Icon from "../UI/Icon";
import RemoveButton from "../UI/RemoveButton";

export default function Effect(props) {
	const effect = EffectsData[props.id - 100];
	const { id, name, src, summary } = effect;

	const selectEffect = () => {
		props.selectEffect(id);
	};

	const deselectEffect = () => {
		props.deselectEffect(id);
	};

	return (
		<div className='flex'>
			<div>
				<Icon src={src} />
			</div>
			<div className='flex-1 w-40 my-auto justify-content-center'>
				<h3 className='text-center'>{name}</h3>
			</div>
			<div className='my-auto flex-0'>
				{props.isSelected && <RemoveButton onClick={deselectEffect} />}
				{!props.isSelected && !props.isDisabled && (
					<AddButton onClick={selectEffect} />
				)}
				{!props.isSelected && props.isDisabled && <DisabledAddButton />}
			</div>
			<div className='flex-1 mx-2 my-auto'>
				<p className='text-sm leading-none text-center text-slate-500'>
					{summary}
				</p>
			</div>
		</div>
	);
}