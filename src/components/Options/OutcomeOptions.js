export default function OutcomeOptions() {
	return (
		<div className='sticky z-30 flex h-10 py-2 bg-white border-b-2 border-black top-[26px]'>
			<div className='flex-1 pr-2 text-right'>
				Level
				<select
					className='h-6 ml-1 text-sm border rounded-lg'
					defaultValue='cp150'
				>
					<option value='cp150' key='10'>
						CP150
					</option>
				</select>
			</div>
		</div>
	);
}
