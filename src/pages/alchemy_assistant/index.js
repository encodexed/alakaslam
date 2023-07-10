import Content from "@/components/alchemy_assistant/Content";
import Info from "@/components/alchemy_assistant/Info";
import { useState } from "react";

export default function Home() {
	const [showInfo, setShowInfo] = useState(true);

	const toggleShowInfo = () => {
		setShowInfo((prevState) => {
			return !prevState;
		});
	};
	
	return (
		<main className='h-screen min-h-780 font-pangolin bg-gradient-to-b from-sky-200 via-orange-200 to-indigo-200'>
			{showInfo && <Info toggleShowInfo={toggleShowInfo} />}
			<Content toggleShowInfo={toggleShowInfo} />
		</main>
	);
}
