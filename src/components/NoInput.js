import Card from "./UI/Card";
import Image from "next/image";

export default function NoInput() {
	return (
		<div className='border'>
			<Card>
				<div className='flex flex-col space-y-6 leading-none'>
					<p className='text-sm text-pink-500 sm:text-base'>
						<Image
							priority={true}
							className='inline'
							src='/images/ingredients/Mountain_Flower.png'
							alt='Mountain Flower'
							width={20}
							height={20}
						/>
						Welcome to the ESO Alchemy Assistant. This tool aims to help
						you craft potions and poisons in the game Elder Scrolls
						Online.
					</p>
					<p className='text-sm sm:text-base text-sky-500'>
						<Image
							priority={true}
							className='inline'
							src='/images/ingredients/Columbine.png'
							alt='Columbine'
							width={20}
							height={20}
						/>
						You can choose to select ingredients or effects to generate a
						potion/poison. Choosing effects will output a list of possible
						combinations for your desired potion.
					</p>
					<p className='pb-2 text-sm sm:text-base text-lime-500'>
						<Image
							priority={true}
							className='inline'
							src='/images/ingredients/Dragon_Rheum.png'
							alt='Dragon Rheum'
							width={20}
							height={20}
						/>
						The Alchemy Assistant is{" "}
						<span className='text-orange-400 underline'>
							not completely accurate
						</span>
						. It will only show an approximate effect but numbers may
						differ in game. It also doesn&apos;t take into account
						triple-effect concoctions and may name your concoctions
						incorrectly sometimes.
					</p>
				</div>
			</Card>
		</div>
	);
}
