import { useState, useEffect } from "react";
// import IngredientsData from "../../IngredientsData";
// import EffectsData from "../../EffectsData";
import Combination from "./Combination";
import oneEffectCombinations from "@/functions/oneEffectCombinations";
import twoEffectCombinations from "@/functions/twoEffectCombinations";
import threeEffectCombinations from "@/functions/threeEffectCombinations";
import NoInput from "../NoInput";
import NoStrictResults from "./NoStrictResults";
import NoLooseResults from "./NoLooseResults";

export default function Combinations(props) {
	// An array that stores all the current possible combinations for making concoctions with the selected effects.
	const [combinations, setCombinations] = useState([]);

	useEffect(() => {
		let newCombinations = [];
		switch (props.selectedIDs.length) {
			case 0:
				setCombinations([]);
				break;
			case 1:
				newCombinations = oneEffectCombinations(
					props.selectedIDs[0],
					props.strictMode
				);
				setCombinations([...newCombinations]);
				break;
			case 2:
				newCombinations = twoEffectCombinations(
					props.selectedIDs,
					props.strictMode
				);
				setCombinations([...newCombinations]);
				break;
			case 3:
				newCombinations = threeEffectCombinations(
					props.selectedIDs,
					props.strictMode
				);
				setCombinations([...newCombinations]);
				break;
			default:
				setCombinations([]);
				break;
		}
	}, [props.selectedIDs, props.strictMode]);

	if (props.selectedIDs.length === 0) {
		return <NoInput />;
	}

	if (props.selectedIDs.length > 0 && combinations.length === 0 && props.strictMode) {
		return <NoStrictResults />;
	}

	if (props.selectedIDs.length > 0 && combinations.length === 0 && !props.strictMode) {
		return <NoLooseResults />;
	}

	return (
		<>
			<div className='overflow-auto'>
				{combinations.map((combination) => {
					const thisKey = combination.toString();
					return (
						<Combination
							key={thisKey}
							thisKey={thisKey}
							ingredients={combination}
						/>
					);
				})}
			</div>
		</>
	);
}
