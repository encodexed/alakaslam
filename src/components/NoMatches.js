import CounterEffect from "./Ingredients/CounterEffect";
import Card from "./UI/Card";
import Image from "next/image";

export default function NoMatches(props) {
	if (!props.conflicts) {
		return (
			<div className='border'>
				<Card>
					<div className='flex flex-col space-y-6 leading-none text-center text-red-500'>
						<h2 className='text-2xl'>Oops..!</h2>
						<Image
							className='mx-auto rounded-full'
							src='/images/Oopsy.png'
							alt='Oopsy!'
							width={48}
							height={48}
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
					<Image
						className='mx-auto rounded-full'
						src='/images/Oopsy.png'
						alt='Oopsy!'
						width={48}
						height={48}
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
