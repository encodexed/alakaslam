export default function Info(props) {
	const closeInfo = () => {
		props.toggleShowInfo();
	};

	return (
		<div
			className='fixed z-50 flex flex-col w-full h-full overflow-auto bg-black/80'
			onClick={closeInfo}
		>
			<div className='h-full max-w-2xl mx-8 my-8 overflow-auto font-sans leading-tight bg-white md:mx-auto'>
				<h1 className='mt-4 text-3xl font-bold text-center'>
					Welcome to the ESO Alchemy Assistant
				</h1>
				<p className='text-center text-red-500'>
					(Click anywhere to dismiss this window)
				</p>
				<h2 className='m-4 mb-1 text-xl font-semibold text-center'>
					How Alchemy in ESO works
				</h2>
				<p className='mx-4'>
					In Elder Scrolls Online, there is a system of using ingredients
					found in the wild to create potions and poisons that can be
					consumed or applied to weapons, respectively. An ingredient on
					its own will not be strong enough to provide a benefit, it must
					be mixed with other ingredients and that possess similar effects
					to create a substantial concoction. A solvent is also required.
				</p>
				<p className='m-4'>
					Unfortunately, you cannot just mix any ingredients together. Some
					will not react with each other. And some ingredients may even
					possess a counter-effect which could cancel out a reaction from
					other ingredients. To help you navigate Alchemy in ESO, this tool
					is here to help assist you in your potion-making adventures.
				</p>
				<h2 className='m-4 mb-1 text-xl font-semibold text-center'>
					How to use the Alchemy Assistant
				</h2>
				<p className='mx-4'>
					To craft a potion or poison from ingredients, click on the Choose
					Ingredients tab on the lower section and begin selecting
					ingredients to see what kind of reactions they possess. To choose
					from effects, try the Choose Effects tab and add what effects you
					would like your creation to have.
				</p>
				<p className='m-4'>
					To craft a potion or poison from effects, click on the Choose
					Ingredients tab on the lower section and begin selecting
					ingredients to see what kind of reactions they possess. You can
					preview the effects tooltips in the Outcome tab, or to find out
					how to create the concoction in-game, check the Combinations tab.
				</p>
				<h2 className='m-4 mb-1 text-xl font-semibold text-center'>
					Why do I need this?
				</h2>
				<p className='mx-4'>
					PC players may not need this assistant as there are mods which
					help with alchemy in-game, but you may not want to install mods,
					or you may be playing on a console. There are also other websites
					that do the same, but I personally did not love any of them and
					have sought to create my own with a user-friendly, clear and
					colourful interface. Other tools may also not be completely up to
					date. I will update this tool whenever the Alchemy system
					changes, for example, when new ingredients are introduced.
				</p>
				<p className='m-4'>
					The best thing you can do here is to use it to assist you in
					crafting Master Alchemy Writs or just Daily Alchemy Writs, or to
					even explore special mixtures tailored specifically to your
					build. For example, you may not need a tri-restoration potion if
					your Magicka Recovery is through the roof.
				</p>
				<h2 className='m-4 mb-1 text-xl font-semibold text-center'>
					How accurate is the assistant?
				</h2>
				<p className='mx-4'>
					Though I have not tested every possible combination of
					ingredients, the actual calculations should be 99.99% correct. If
					you find the 0.01%, please let me know by contacting me through
					any method below.
				</p>
				<p className='m-4'>
					HOWEVER, the potion and poison names, and the effects numbers
					listed in the concoction descriptions are likely to be incorrect.
					ESO has an unusual naming system which I have yet to crack, and
					the effects numbers are different for different characters. These
					are only approximations. It is best to check in-game as you
					create it yourself.
            </p>
            <h2 className='m-4 mb-1 text-xl font-semibold text-center'>
					How do I report a bug or contact you?
				</h2>
				<p className='mx-4'>
               Send any information about incorrect calculations or other bugs to me on Discord preferably. You may also request features:
            </p>
            <p className='m-4 text-sm'>
               <span className='font-semibold'>Discord:</span> Alakaslam#5357<br />
               <span className='font-semibold'>ESO:</span> PC, North American server, @Alakaslamm<br />
               <span className='font-semibold'>LinkedIn</span> (for hiring/jobs purposes): https://www.linkedin.com/in/robbie-gollan-b05684261/
            </p>
			</div>
		</div>
	);
}
