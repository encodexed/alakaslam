import EffectsData from "../../EffectsData";

export default function CounterEffect(props) {
	let problems = [];
	props.counterEffects.forEach((counterEffect) => {
		EffectsData.forEach((effect) => {
			if (effect.counterEffect === counterEffect) {
				problems.push({
					id: "s" + counterEffect,
					description: `The ${effect.name} effect is being countered by the ${counterEffect} effect.`
				});
			}
		});
	});

	return (
		<div className='mt-2 text-xs text-center text-red-500 sm:text-sm' style={{ textShadow: "red 0 0 0.5px" }}>
			{problems.map((problem) => {
				return <p key={problem.id}>{problem.description}</p>;
			})}
		</div>
	);
}
