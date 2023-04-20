export default function SectionHeader(props) {
	return (
		<div className='flex px-2 mt-2 text-white bg-indigo-800'>
			<div className='flex-grow my-auto text-left'>
				<h2 className='text-lg text-semibold'>{props.title}</h2>
			</div>
			<div className='my-auto text-right'>
				<button className='text-xs underline' onClick={props.link}>
					{props.linkContent}
				</button>
			</div>
		</div>
	);
}
