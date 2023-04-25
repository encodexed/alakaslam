import EffectsData from "../../EffectsData";
import AddButton from "../UI/AddButton";
import DisabledAddButton from "../UI/DisabledAddButton";
import Icon from "../UI/Icon";

export default function Effect(props) {
	const effect = EffectsData[props.id];
	const { id, name, src, summary } = effect;

	const selectEffect = () => {
		props.selectEffect(id);
	};

	return (
		<div className='flex border-b'>
			<div>
				<Icon src={src} />
			</div>
			<div className='flex-1 w-40 my-auto justify-content-center'>
				<h3 className='text-sm text-center sm:text-base'>{name}</h3>
			</div>
			<div className='my-auto flex-0'>
				{!props.isDisabled && (
					<AddButton onClick={selectEffect} />
				)}
				{props.isDisabled && <DisabledAddButton />}
			</div>
			<div className='flex-1 mx-2 my-auto'>
				<p className='text-xs leading-none text-center sm:text-sm text-slate-500'>
					{summary}
				</p>
			</div>
		</div>
	);
}