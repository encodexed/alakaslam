export default function ConcoctionCard(props) {
	return (
		<div className='px-2 py-4 m-2 mt-0 overflow-scroll bg-white border-2 border-black rounded-md shadow-md shadow-black/30'>
			{props.children}
		</div>
	);
}
