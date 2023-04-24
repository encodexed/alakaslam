export default function RemoveButton(props) {
	return (
		<button className='w-7 h-7 px-2.5 py-0 text-white bg-red-500 border border-gray-500 hover:bg-red-400 shadow-md' onClick={props.onClick}>
			-
		</button>
	);
}
