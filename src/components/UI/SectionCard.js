import { useState } from "react";
import SectionTabs from "./SectionTabs";

export default function SectionCard(props) {
   const [isSectionShown, setIsSectionShown] = useState(true);

   const toggleSectionShown = () => {
		setIsSectionShown((prevState) => {
			return !prevState;
		})
   }
   
   const showStyle = isSectionShown ? 'h-96 overflow-scroll' : 'h-7 overflow-hidden';
   const style = `${showStyle} max-w-xl pt-0 m-6 bg-white border-2 border-black rounded-md shadow-md shadow-black/30`;

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
