import EffectsData from "@/app_data/EffectsData";

export default function ConcoctionDescription(props) {
	if (props.concoctionType === 'potion') {
		return (
			<div className='mt-3'>
				<p
					dangerouslySetInnerHTML={{
						__html: EffectsData[props.effectID].potionEffect,
					}}
					className='text-sm leading-none'
				/>
			</div>
		);
	} else {
		return (
			<div className='mt-3'>
				<p
					dangerouslySetInnerHTML={{
						__html: EffectsData[props.effectID].poisonEffect,
					}}
					className='text-sm leading-none'
				/>
			</div>
		);
	}
}
