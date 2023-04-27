import { useState } from "react";
import SectionTabs from "./SectionTabs";

export default function SectionCard(props) {
   const [isSectionShown, setIsSectionShown] = useState(true);

	const toggleSectionShown = () => {
		const num = isSectionShown ? -1 : 1;
		props.renderControl(num);
		setIsSectionShown((prevState) => {
			return !prevState;
		})
	}
	
	let showStyle = 'overflow-scroll';
	let height = 'min-h-[320px]';
	if (!isSectionShown) {
		height = 'min-h-[24px] max-h-6 xs:min-h-[28px] xs:max-h-7';
		showStyle = 'overflow-hidden'
	} else if (props.renderInfo > 1 && isSectionShown) {
		height = 'min-h-[320px] max-h-[600px]';
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
				strictMode={props.strictMode}
				toggleStrictMode={props.toggleStrictMode}
				isViewingOutcome={props.isViewingOutcome}
				selectionMode={props.selectionMode}
			/>
			{props.children}
		</div>
	);
}
