import Link from "next/link";

export default function Home() {
	return (
		<div className='mx-20 text-center'>
			<h1 className='mt-10 text-3xl underline'>Hello There</h1>
			<div className='flex flex-col mt-4 space-y-3'>
				<p>
					This is the future location of a portfolio page for the creator,
					Alakaslam (you may know him better as Robbie)
				</p>
				<p>
					Clearly, as you can see, I have not built this page. You must be
					thinking... &quot;but Robbie, isn&apos;t this the home page of
					your portfolio?&quot; Well yes it is. But I have prioritised
					making projects so that I have a portfolio to share. It would be
					unusual to have a portfolio page with nothing to display. But
					change is coming...
				</p>
				<p>
					<span className='text-red-600'>
						Were you looking for the ESO Alchemy Assistant?
					</span>{" "}
					Try{" "}
					<Link
						className='text-blue-500 underline'
						href='/alchemy_assistant'
					>
						here
					</Link>
					.
				</p>
			</div>
		</div>
	);
}
