import EffectsData from "@/EffectsData";

export default function ConcoctionDescription(props) {
	if (props.concoctionType === 'potion') {
		return (
			<div className='mt-3'>
				<p
					dangerouslySetInnerHTML={{
						__html: EffectsData[props.effectID].potionEffect,
					}}
					className='text-xs leading-none sm:text-sm sm:leading-none'
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
					className='text-xs leading-none sm:text-sm sm:leading-none'
				/>
			</div>
		);
	}
}
