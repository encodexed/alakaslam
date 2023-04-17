export default function Card(props) {
	return (
		<div className='max-w-xl p-6 pb-2 m-6 bg-white border-2 border-black rounded-md shadow-md shadow-black/30'>
			{props.children}
		</div>
	);
}