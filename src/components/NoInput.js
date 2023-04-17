import Card from "./UI/Card";

export default function NoInput() {
	return (
		<div className='border'>
			<Card>
				<div className='flex flex-col space-y-6 leading-none'>
					<p className='text-pink-500'>
						<img
							className='inline w-5 h-5'
							src='/images/ingredients/Mountain_Flower.png'
							alt='Mountain Flower'
						/>
						Welcome to the ESO Alchemy Assistant. This tool aims to help
						you craft potions and poisons in the game Elder Scrolls
						Online.
					</p>
					<p className='text-sky-500'>
						<img
							className='inline w-5 h-5'
							src='/images/ingredients/Columbine.png'
							alt='Columbine'
						/>
						You can choose to select ingredients or effects to generate a
						potion/poison. Choosing effects will output a list of possible
						combinations for your desired potion.
					</p>
					<p className='text-lime-500'>
						<img
							className='inline w-5 h-5'
							src='/images/ingredients/Dragon_Rheum.png'
							alt='Dragon Rheum'
						/>
						The Alchemy Assistant is{" "}
						<span className='text-orange-400 underline'>
							not completely accurate
						</span>
						. It will only show an approximate effect but numbers may
						differ in game. It also doesn't take into account
						triple-effect concoctions and may name your concoctions
						incorrectly sometimes.
					</p>
				</div>
			</Card>
		</div>
	);
}
