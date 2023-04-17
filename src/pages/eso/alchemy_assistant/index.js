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
		<main className='flex flex-col min-h-screen font-pangolin bg-gradient-to-b from-sky-500 via-orange-600 to-indigo-800'>
			{showInfo && <Info toggleShowInfo={toggleShowInfo} />}
			<Content toggleShowInfo={toggleShowInfo} />
		</main>
	);
}
