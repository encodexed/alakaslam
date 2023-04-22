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
	
	let height = 'min-h-[320px]';
	if (!isSectionShown) {
		height = 'min-h-[28px] max-h-7';
	}

   const showStyle = isSectionShown ? 'overflow-scroll' : 'overflow-hidden';
   const style = `${height} ${showStyle} flex-1 pt-0 mx-6 my-2 bg-white border-2 border-black rounded-md shadow-md shadow-black/30`;

	return (
		<div className={style}>
			<SectionTabs
				tab1={props.tab1}
				tabClick1={props.tabClick1}
				tab2={props.tab2}
				tabClick2={props.tabClick2}
				shown={isSectionShown}
				toggleShown={toggleSectionShown}
			/>
			{props.children}
		</div>
	);
}
