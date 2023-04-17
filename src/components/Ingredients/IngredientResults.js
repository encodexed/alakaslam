import NoInput from "../NoInput";
import ConcoctionCard from "../UI/ConcoctionCard";
import SectionHeader from "../UI/SectionHeader";
import ConcoctionDescription from "../ConcoctionDescription";
import { useState, useEffect } from "react";
import EffectsData from "../../EffectsData";
import NoMatches from "../NoMatches";
import CounterEffect from "./CounterEffect";
import Image from "next/image";

export default function IngredientResults(props) {
	const [potionName, setPotionName] = useState("Unnamed Potion");
	const [poisonName, setPoisonName] = useState("Unnamed Poison");
	const [effects, setEffects] = useState([]); // for holding effect objects

	useEffect(() => {
		// Converting effects back into their objects. Was it necessary to split it in the first place? Will check later.
		let effectInfo = [];
		props.matchedEffects.forEach((effect) => {
			for (let i = 0; i < EffectsData.length; i++) {
				if (EffectsData[i].name === effect) {
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
	}, [props.matchedEffects]);

	if (props.matchedEffects.length === 0) {
		if (props.selectedCount > 4) {
			if (props.counterEffects.length > 0) {
				return (
					<>
						<SectionHeader title='Results' linkContent='(CP 150)'/>
						<NoMatches
							conflicts={true}
							counterEffects={props.counterEffects}
						/>
					</>
				);
			}
			return (
				<>
					<SectionHeader title='Results' linkContent='(CP 150)'/>
					<NoMatches conflicts={false} />
				</>
			);
		}
		if (props.counterEffects.length > 0) {
			return (
				<>
					<SectionHeader title='Results' linkContent='(CP 150)'/>
					<NoMatches
						conflicts={true}
						counterEffects={props.counterEffects}
					/>
				</>
			);
		} else {
			return (
				<>
					<SectionHeader title='Need Help?' />
					<NoInput />
				</>
			);
		}
	}

	return (
		<>
			<SectionHeader title='Results' linkContent='(CP 150)' />
			<div className='border'>
				<CounterEffect counterEffects={props.counterEffects} />
				<div className='flex'>
					<div className='flex-1'>
						<ConcoctionCard>
							<div className='flex flex-col text-center'>
								<h2 className='text-lg leading-none sm:text-xl'>{potionName}</h2>
								<div>
									<Image
										priority={true}
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
								<h2 className='text-lg leading-none sm:text-xl'>{poisonName}</h2>
								<div>
									<Image
										priority={true}
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
