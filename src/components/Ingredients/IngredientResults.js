import { useState, useEffect } from "react";
import getConcoctionName from "@/functions/getConcoctionName";
import ConcoctionCard from "../UI/ConcoctionCard";
import ConcoctionDescription from "../ConcoctionDescription";
import DisplayConflicts from "./DisplayConflicts";
import Image from "next/image";
import NoMatches from "../NoMatches";
import NoInput from "../NoInput";

export default function IngredientResults(props) {
	const [potionName, setPotionName] = useState("");
	const [poisonName, setPoisonName] = useState("");
	// An array of IDs of matched effects.
	const [effectsIDs, setEffectsIDs] = useState([]);

	useEffect(() => {
		// ISSUE: getConcoctionName() is being called before props.matchesAndConflicts has properly been populated.
		// Temporary fix in getConcoctionName()
		// Determining the names based on hierarchical data for the concoctions.
		if (props.selectedCount > 1) {
			const allMatches = [
				...props.matchesAndConflicts.triples,
				...props.matchesAndConflicts.doubles,
			];
			const concoctionNames = getConcoctionName(allMatches);
			setPotionName(concoctionNames[0]);
			setPoisonName(concoctionNames[1]);
			setEffectsIDs([...allMatches]);
		} else {
			setPotionName("");
			setPoisonName("");
			setEffectsIDs([]);
		}
	}, [props.matchesAndConflicts, props.selectedCount]);

	if (props.selectedCount < 2) {
		return <NoInput />;
	}

	if (props.selectedCount > 1 && effectsIDs.length === 0) {
		return <NoMatches />;
	}

	return (
		<div className='p-2'>
			<DisplayConflicts conflicts={props.matchesAndConflicts.conflicts} />
			<div className='flex flex-col xxs:flex-row'>
				<div className='flex-1'>
					<ConcoctionCard>
						<h2 className='text-lg leading-none sm:text-xl'>
							{potionName}
						</h2>
						<Image
							className='mx-auto'
							src='/images/potions/Increase_Armor.png'
							alt='A potion!'
							width={48}
							height={48}
						/>
						<div className='flex flex-col text-center'>
							{effectsIDs.map((effectID) => {
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
							src='/images/poisons/Red_Poison.png'
							alt='A poison!'
							width={48}
							height={48}
						/>
						<div className='flex flex-col text-center'>
							{effectsIDs.map((effectID) => {
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
