export default function ConcoctionDescription(props) {
	if (props.concoctionType === 'potion') {
		return (
			<div className='mt-3'>
				<p
					dangerouslySetInnerHTML={{
						__html: props.effect.potionEffect,
					}}
					className='text-xs leading-none sm:text-sm'
				/>
			</div>
		);
	} else {
		return (
			<div className='mt-3'>
				<p
					dangerouslySetInnerHTML={{
						__html: props.effect.poisonEffect,
					}}
					className='text-xs leading-none sm:text-sm'
				/>
			</div>
		);
	}
}
