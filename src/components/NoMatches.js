import CounterEffect from "./Ingredients/CounterEffect";
import Card from "./UI/Card";

export default function NoMatches(props) {
	if (!props.conflicts) {
		return (
			<div className='border'>
				<Card>
					<div className='flex flex-col space-y-6 leading-none text-center text-red-500'>
						<h2 className='text-2xl'>Oops..!</h2>
						<img
							className='w-20 h-20 mx-auto rounded-full'
							src='/images/Oopsy.png'
							alt='Oopsy!'
						/>
						<p>
							The ingredients will not react.
							<br />
							Did you accidentally remove a critical ingredient?
						</p>
					</div>
				</Card>
			</div>
		);
	}

	return (
		<div className='border'>
			<Card>
				<div className='flex flex-col space-y-6 leading-none text-center text-red-500'>
					<h2 className='text-2xl'>Oops..!</h2>
					<img
						className='w-20 h-20 mx-auto rounded-full'
						src='/images/Oopsy.png'
						alt='Oopsy!'
					/>
					<p>
						Looks like there may have been some conflicting effects in
						your concoction.
					</p>
					<CounterEffect counterEffects={props.counterEffects} />
				</div>
			</Card>
		</div>
	);
}
