// Needs state to display which is currently selected

export default function SectionTabs(props) {
	const strictIndication = props.strictMode ? "strict: ON" : "strict: OFF";

	// Handlers
	const toggleShown = () => {
		props.toggleShown();
	};

	const toggleStrictMode = () => {
		props.toggleStrictMode();
	};

	// Styling
	const hover = props.tab2 ? "hover:bg-slate-400 cursor-pointer" : "";
	const style1 = `flex-1 truncate text-sm xs:text-base text-center ${hover}`;
	const style2 = `flex-1 truncate text-sm xs:text-base text-center border-l-2 border-black ${hover}`;
	const viewButton = props.shown ? "hide" : "show";
	const strictModeStyle = props.strictMode ? "bg-red-600 hover:bg-red-500" : "bg-green-600 hover:bg-green-500";
	const strictStyle = `${strictModeStyle} flex-shrink w-16 text-xs text-center border-r-2 border-black`;

	return (
		<div className='sticky top-0 z-30 flex overflow-hidden text-white border-b-2 border-black cursor-default bg-slate-600'>
			<button
				className='flex-shrink w-10 text-xs text-center border-r-2 border-black hover:bg-slate-400'
				onClick={toggleShown}
			>
				{viewButton}
			</button>
			{!props.isViewingOutcome && props.tab1 === "Combinations" && (
				<button className={strictStyle} onClick={toggleStrictMode}>
					{strictIndication}
				</button>
			)}
			<div className={style1} onClick={props.tabClick1}>
				{props.tab1}
			</div>

			{props.tab2 && (
				<div className={style2} onClick={props.tabClick2}>
					{props.tab2}
				</div>
			)}
		</div>
	);
}
