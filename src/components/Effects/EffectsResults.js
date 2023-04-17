import SectionHeader from "../UI/SectionHeader";
import ConcoctionCard from "../UI/ConcoctionCard";
import ConcoctionDescription from "../ConcoctionDescription";
import EffectsData from "../../EffectsData";
import { useState, useEffect } from "react";
import NoInput from "../NoInput";
import Image from "next/image";

export default function EffectsResults(props) {
	const [potionName, setPotionName] = useState("Unnamed potion");
	const [poisonName, setPoisonName] = useState("Unnamed poison");
	const [effects, setEffects] = useState([]); // for holding effect objects

	useEffect(() => {
		// Converting effects back into their objects. Was it necessary to split it in the first place? Will check later.
		let effectInfo = [];
		props.selectedEffectsIDs.forEach((effect) => {
			for (let i = 0; i < EffectsData.length; i++) {
				if (EffectsData[i].id === effect) {
					effectInfo.push(EffectsData[i]);
				}
			}
		});
		setEffects(effectInfo);

		// Determining the names based on hierarchical data for the concoctions.
		let strength = [];
		effectInfo.forEach((effect) => {
			strength.push(effect.hierarchy);
		});
		const strongest = Math.min(...strength);
		effectInfo.forEach((effect) => {
			if (effect.hierarchy === strongest.toString()) {
				setPotionName(effect.potionName);
				setPoisonName(effect.poisonName);
			}
		});
	}, [props.selectedEffectsIDs]);

	if (props.selectedEffectsIDs.length === 0) {
		return (
			<>
				<SectionHeader title='Need Help?' />
				<NoInput />
			</>
		);
	}

	return (
		<>
			<SectionHeader title='Results' linkContent='(CP 150)' />
			<div className='border'>
				<div className='flex'>
					<div className='flex-1'>
						<ConcoctionCard>
							<div className='flex flex-col text-center'>
								<h2 className='text-xl leading-none'>{potionName}</h2>
								<div>
								<Image
										className='mx-auto'
										src='/images/potions/Increase_Armor.png'
										alt='A potion!'
										width={48}
										height={48}
									/>
								</div>
								<div className='flex flex-col text-center'>
									{effects.map((effect) => {
										return (
											<ConcoctionDescription
												key={"potion" + effect.name}
												concoctionType='potion'
												effect={effect}
											/>
										);
									})}
								</div>
							</div>
						</ConcoctionCard>
					</div>
					<div className='flex-shrink my-auto'>OR</div>
					<div className='flex-1'>
						<ConcoctionCard>
							<div className='flex flex-col text-center'>
								<h2 className='text-xl leading-none'>{poisonName}</h2>
								<div>
								<Image
										className='mx-auto'
										src='/images/poisons/Red_Poison.png'
										alt='A poison!'
										width={48}
										height={48}
									/>
								</div>
								<div className='flex flex-col text-center'>
									{effects.map((effect) => {
										return (
											<ConcoctionDescription
												key={"poison" + effect.name}
												concoctionType='poison'
												effect={effect}
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
