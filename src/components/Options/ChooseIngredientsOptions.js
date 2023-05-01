export default function ChooseIngredientsOptions(props) {
	return (
		<div className='sticky z-30 flex h-10 py-2 bg-white border-b-2 border-black top-[26px]'>
			<div className='flex-1 pl-2'>
				Filter:
				<input type='text' className='h-6 p-1 ml-1 border rounded-lg' placeholder='eg. Restore Health'/>
			</div>
         <div className='flex-1 pr-2 text-right'>
            Level 
            <select className='h-6 ml-1 text-sm border rounded-lg'>
               <option value="1" key="1">1</option>
               <option value="cp150" key="10" selected>CP150</option>
            </select>
			</div>
		</div>
	);
}