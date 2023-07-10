export default function NoStrictResults() {
	return (
		<div className='mx-12 mt-20 leading-none text-center text-red-600 xxs:m-28'>
			<p>
				Unfortunately, no ingredient combinations for those selected effects
				exist without side effects. To show ingredient combinations with
				unselected side effects, <span className='underline'>disable strict mode</span> above.
			</p>
		</div>
	);
}
