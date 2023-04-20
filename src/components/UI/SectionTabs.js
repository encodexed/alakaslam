// Needs state to display which is currently selected

export default function SectionTabs(props) {
	const toggleShown = () => {
		props.toggleShown();
	};

	const button = props.shown ? "-" : "+";

	return (
		<div className='sticky top-0 z-30 flex overflow-hidden text-white border-b-2 border-black cursor-pointer bg-slate-600'>
			<button
				className='flex-shrink w-5 text-center border-r-2 border-black hover:bg-slate-400'
				onClick={toggleShown}
			>
				{button}
			</button>
			<div
				className='flex-1 text-center hover:bg-slate-400'
				onClick={props.tabClick1}
			>
				{props.tab1}
			</div>
			{props.tab2 && (
				<div
					className='flex-1 text-center border-l-2 border-black hover:bg-slate-400'
					onClick={props.tabClick2}
				>
					{props.tab2}
				</div>
			)}
		</div>
	);
}
