// Needs state to display which is currently selected

import Image from "next/image";

export default function SectionTabs(props) {
	const strictIndication = props.strictMode ? "strict ON" : "strict OFF";

	// Handlers
	const toggleShown = () => {
		props.toggleShown();
	};

	const toggleStrictMode = () => {
		props.toggleStrictMode();
	};

	// Styling

	const hover = props.tab2 ? "hover:bg-slate-400 cursor-pointer" : "";
	const basicStyle = "flex-1 truncate text-sm xs:text-base text-center";

	const tabSelectedStyle =
		"bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700";
	const tabUnselectedStyle = "bg-slate-600 hover:bg-slate-500";
	const topLeftTabStyle = props.isViewingOutcome
		? tabUnselectedStyle
		: tabSelectedStyle;
	const topRightTabStyle = !props.isViewingOutcome
		? tabUnselectedStyle
		: tabSelectedStyle;
	const bottomLeftTabStyle =
		props.selectionMode === "ingredients"
			? tabSelectedStyle
			: tabUnselectedStyle;
	const bottomRightTabStyle =
		props.selectionMode === "effects" ? tabSelectedStyle : tabUnselectedStyle;

	const styleTopLeft = `${basicStyle} ${topLeftTabStyle} ${hover}`;
	const styleTopRight = `${basicStyle} ${topRightTabStyle} ${hover} border-l-2 border-black`;
	const styleBottomLeft = `${basicStyle} ${bottomLeftTabStyle} ${hover}`;
	const styleBottomRight = `${basicStyle} ${bottomRightTabStyle} ${hover} border-l-2 border-black`;

	const viewButton = props.shown ? "hide" : "show";

	const strictModeStyle = props.strictMode
		? "bg-red-600 hover:bg-red-500"
		: "bg-green-600 hover:bg-green-500";
	const strictStyle = `${strictModeStyle} flex-shrink w-16 text-xs text-center border-l-2 border-black`;

	return (
		<div className='sticky top-0 z-30 flex overflow-hidden text-white border-b-2 border-black cursor-default'>
			<button
				className='flex-shrink w-6 text-xs text-center border-r-2 border-black bg-slate-600 hover:bg-slate-500'
				onClick={toggleShown}
			>
				{props.shown && (
					<Image
						src={"/images/hide.svg"}
						alt='Minimise window'
						width={24}
						height={24}
					/>
				)}
				{!props.shown && (
					<Image
						src={"/images/show.svg"}
						alt='Expand window'
						width={24}
						height={24}
					/>
				)}
			</button>
			{props.tab1 === "Combinations" && (
				<div className={styleTopLeft} onClick={props.tabClick1}>
					{props.tab1}
				</div>
			)}
			{props.tab1 === "Outcome" && (
				<div className={styleTopLeft} onClick={props.tabClick1}>
					{props.tab1}
				</div>
			)}
			{props.tab1 === "Choose Ingredients" && (
				<div className={styleBottomLeft} onClick={props.tabClick1}>
					{props.tab1}
				</div>
			)}
			{props.tab2 === "Outcome" && (
				<div className={styleTopRight} onClick={props.tabClick2}>
					{props.tab2}
				</div>
			)}
			{props.tab2 === "Choose Effects" && (
				<div className={styleBottomRight} onClick={props.tabClick2}>
					{props.tab2}
				</div>
			)}
			{!props.isViewingOutcome && props.tab1 === "Combinations" && (
				<button className={strictStyle} onClick={toggleStrictMode}>
					{strictIndication}
				</button>
			)}
		</div>
	);
}
