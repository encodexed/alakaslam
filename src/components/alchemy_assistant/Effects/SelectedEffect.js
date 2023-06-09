import Icon from "../UI/Icon";
import RemoveButton from "../UI/RemoveButton";
import EffectsData from "@/app_data/EffectsData";

export default function SelectedEffect(props) {
   const effect = EffectsData[props.effectID];
   const { id, name, src, summary } = effect;
   
   const deselectEffect = () => {
		props.deselectEffect(id);
	};

	return (
		<div className='flex border-b border-black bg-slate-100' >
			<div>
				<Icon src={src} />
			</div>
			<div className='flex-1 w-40 my-auto justify-content-center'>
				<h3 className='text-sm text-center sm:text-base'>{name}</h3>
			</div>
			<div className='my-auto flex-0'>
				<RemoveButton onClick={deselectEffect} />
			</div>
			<div className='flex-1 mx-2 my-auto'>
				<p className='text-xs leading-none text-center sm:text-sm text-slate-500'>
					{summary}
				</p>
			</div>
		</div>
	);
}
