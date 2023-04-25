import ConcoctionCard from "../UI/ConcoctionCard";
import ConcoctionDescription from "../ConcoctionDescription";
import { useState, useEffect } from "react";
import NoInput from "../NoInput";
import Image from "next/image";
import getConcoctionName from "@/functions/getConcoctionName";
import potionImage from "../../../public/images/potions/Increase_Armor.png";
import poisonImage from "../../../public/images/poisons/Red_Poison.png";

export default function EffectsResults(props) {
	const [potionName, setPotionName] = useState("");
	const [poisonName, setPoisonName] = useState("");

	useEffect(() => {
		const concoctionNames = getConcoctionName(props.selectedIDs);
		setPotionName(concoctionNames[0]);
		setPoisonName(concoctionNames[1]);
	}, [props.selectedIDs]);

	if (props.selectedIDs.length === 0) {
		return <NoInput />;
	}

	return (
		<div className='p-2'>
			<div className='flex flex-col xxs:flex-row'>
				<div className='flex-1'>
					<ConcoctionCard>
						<h2 className='text-lg leading-none sm:text-xl'>
							{potionName}
						</h2>
						<Image
							className='mx-auto'
							src={potionImage}
							alt='A potion!'
						/>
						<div className='flex flex-col text-center'>
							{props.selectedIDs.map((effectID) => {
								return (
									<ConcoctionDescription
										key={"potion" + effectID}
										concoctionType='potion'
										effectID={effectID}
									/>
								);
							})}
						</div>
					</ConcoctionCard>
				</div>
				<div className='flex-shrink my-auto text-center'>OR</div>
				<div className='flex-1'>
					<ConcoctionCard>
						<h2 className='text-lg leading-none sm:text-xl'>
							{poisonName}
						</h2>
						<Image
							className='mx-auto'
							src={poisonImage}
							alt='A poison!'
						/>
						<div className='flex flex-col text-center'>
							{props.selectedIDs.map((effectID) => {
								return (
									<ConcoctionDescription
										key={"poison" + effectID}
										concoctionType='poison'
										effectID={effectID}
									/>
								);
							})}
						</div>
					</ConcoctionCard>
				</div>
			</div>
		</div>
	);
}
