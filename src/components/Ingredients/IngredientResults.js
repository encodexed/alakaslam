import { useState, useEffect } from "react";
import getConcoctionName from "@/functions/getConcoctionName";
import ConcoctionCard from "../UI/ConcoctionCard";
import ConcoctionDescription from "../ConcoctionDescription";
import DisplayConflicts from "./DisplayConflicts";
import Image from "next/image";

export default function IngredientResults(props) {
	const [potionName, setPotionName] = useState("Unnamed Potion");
	const [poisonName, setPoisonName] = useState("Unnamed Poison");
	// An array of IDs of matched effects.
	const [effectsIDs, setEffectsIDs] = useState([]);
	const [isConflicted, setIsConflicted] = useState(false);

	// ISSUE: getConcoctionName() is being called before props.matchesAndConflicts has properly been populated.
	// Temporary fix in getConcoctionName()
	useEffect(() => {
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
			setPotionName("Unnamed Potion");
			setPoisonName("Unnamed Poison");
			setEffectsIDs([]);
		}
	}, [props.matchesAndConflicts, props.selectedCount]);

	return (
		<>
			<div className='p-2'>
				<DisplayConflicts conflicts={props.matchesAndConflicts.conflicts} />
				<div className='flex flex-col xxs:flex-row'>
					<div className='flex-1'>
						<ConcoctionCard>
							<div className='flex flex-col text-center'>
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
							</div>
						</ConcoctionCard>
					</div>
					<div className='flex-shrink my-auto text-center'>OR</div>
					<div className='flex-1'>
						<ConcoctionCard>
							<div className='flex flex-col text-center'>
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
							</div>
						</ConcoctionCard>
					</div>
				</div>
			</div>
		</>
	);
}
