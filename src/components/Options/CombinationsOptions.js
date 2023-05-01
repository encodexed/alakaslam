import Toggle from "../UI/Toggle";

export default function CombinationsOptions(props) {
	return (
		<div className='sticky z-30 flex h-10 py-2 bg-white border-b-2 border-black top-[26px]'>
			<div className='flex-1 pl-2'>
				Filter:
				<input type='text' className='h-6 p-1 ml-1 border rounded-lg' placeholder='eg. Columbine'/>
			</div>
			<div className='flex-1 pr-2 text-right'>
            <Toggle toggleStrictMode={props.toggleStrictMode} strictMode={props.strictMode} /> Strict Mode
			</div>
		</div>
	);
}
