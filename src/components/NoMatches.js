import Image from "next/image";

export default function NoMatches(props) {
	return (
		<div className='flex flex-col mx-4 mt-12 space-y-6 leading-none text-center text-red-500'>
			<h2 className='text-xl sm:text-2xl'>Oops..!</h2>
			<Image
				className='mx-auto rounded-full'
				src='/images/Oopsy.png'
				alt='Oopsy!'
				width={48}
				height={48}
			/>
			<p>
				These ingredients will <span className='underline'>not react</span>.
				<br />
				Did you accidentally remove a critical ingredient?
				<br />
				Could there be some conflicting effects in play?
			</p>
		</div>
	);
}
