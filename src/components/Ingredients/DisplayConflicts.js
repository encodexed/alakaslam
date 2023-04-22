import EffectsData from "../../EffectsData";

export default function DisplayConflicts(props) {
	return (
		<div className='mt-2 text-xs text-center text-red-500 sm:text-sm'>
			{props.conflicts.map((conflict) => {
				const effectName = EffectsData[conflict.effectID].name;
				const counterName = EffectsData[conflict.counterID].name;
				const description = `The ${effectName} effect is being countered by the ${counterName} effect.`;
				return <p key={'conflict-' + conflict.effectID}>{description}</p>;
			})}
		</div>
	);
}
