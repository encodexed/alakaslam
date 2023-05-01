import { useState } from "react";
import SectionTabs from "./SectionTabs";
import CombinationsOptions from "../Options/CombinationsOptions";

export default function SectionCard(props) {
	const [isSectionShown, setIsSectionShown] = useState(true);

	const toggleSectionShown = () => {
		const num = isSectionShown ? -1 : 1;
		props.renderControl(num);
		setIsSectionShown((prevState) => {
			return !prevState;
		});
	};

	let showStyle = "overflow-scroll";
	let height = "min-h-[320px]";
	if (!isSectionShown) {
		height = "min-h-[24px] max-h-6 xs:min-h-[28px] xs:max-h-7";
		showStyle = "overflow-hidden";
	} else if (props.renderInfo > 1 && isSectionShown) {
		height = "min-h-[320px] max-h-[600px]";
	}

	const style = `${height} ${showStyle} flex-1 pt-0 mx-2 xs:mx-6 my-2 bg-white border-2 border-black rounded-md shadow-md shadow-black/30`;

	return (
		<div className={style}>
			<SectionTabs
				tab1={props.tab1}
				tabClick1={props.tabClick1}
				tab2={props.tab2}
				tabClick2={props.tabClick2}
				shown={isSectionShown}
				toggleShown={toggleSectionShown}
				isViewingOutcome={props.isViewingOutcome}
				selectionMode={props.selectionMode}
			/>
			{/* {props.tab1 === "Choose Ingredients" &&
				props.selectionMode === "ingredients" && (
					<div className='border-b-2 border-black h-7'>
						Selecting Ingredients
					</div>
				)}
			{props.tab1 === "Choose Ingredients" &&
				props.selectionMode === "effects" && (
					<div className='border-b-2 border-black h-7'>
						Selecting Effects
					</div>
				)} */}
			{props.tab1 === "Combinations" && !props.isViewingOutcome && (
				<CombinationsOptions
					toggleStrictMode={props.toggleStrictMode}
					strictMode={props.strictMode}
				/>
			)}
			{/* {props.tab1 === "Combinations" && props.isViewingOutcome && (
				<div className='border-b-2 border-black h-7'>
					Viewing Effects Outcome
				</div>
			)}
			{props.tab1 === "Outcome" && (
				<div className='border-b-2 border-black h-7'>
					Viewing Ingredients Outcome
				</div>
			)} */}
			{props.children}
		</div>
	);
}
