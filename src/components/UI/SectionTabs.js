// Needs state to display which is currently selected

export default function SectionTabs(props) {
	const toggleShown = () => {
		props.toggleShown();
	};

	const hover = props.tab2 ? 'hover:bg-slate-400 cursor-pointer' : '';
	const style1 = `flex-1 text-center ${hover}`;
	const style2 = `flex-1 text-center border-l-2 border-black ${hover}`

	const button = props.shown ? "hide" : "show";

	return (
		<div className='sticky top-0 z-30 flex overflow-hidden text-white border-b-2 border-black cursor-default bg-slate-600'>
			<button
				className='flex-shrink w-10 text-xs text-center border-r-2 border-black hover:bg-slate-400'
				onClick={toggleShown}
			>
				{button}
			</button>
			<div
				className={style1}
				onClick={props.tabClick1}
			>
				{props.tab1}
			</div>
			{props.tab2 && (
				<div
					className={style2}
					onClick={props.tabClick2}
				>
					{props.tab2}
				</div>
			)}
		</div>
	);
}
