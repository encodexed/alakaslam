import Content from "@/components/Content";
import Info from "@/components/Info";
import { useState } from "react";

export default function Home() {
	const [showInfo, setShowInfo] = useState(false);

	const toggleShowInfo = () => {
		setShowInfo((prevState) => {
			return !prevState;
		});
	};
	
	return (
		<main className='h-screen font-pangolin bg-gradient-to-b from-sky-200 via-orange-200 to-indigo-200'>
			{showInfo && <Info toggleShowInfo={toggleShowInfo} />}
			<Content toggleShowInfo={toggleShowInfo} />
		</main>
	);
}
