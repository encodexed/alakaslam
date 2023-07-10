// Given an effect ID, this function will return an array of arrays of possible combinations of ingredients to achieve that effect.
// An extra parameter strictMode will help allow or disallow extra side effects that could be unwanted.
import EffectsData from "@/app_data/EffectsData";
import filterSideEffects from "./filterSideEffects";

// Filtering out counter-effects will not be necessary for one-effect concoctions with two ingredients :)
export default function oneEffectCombinations(effectID, strictMode) {
	const eligible = EffectsData[effectID].reagents;
	// Combine ingredients from the array of eligible ingredients into combinations.
	let combinations = [];
	for (let i = 0; i < eligible.length - 1; i++) {
		for (let j = i + 1; j < eligible.length; j++) {
			combinations.push([eligible[i], eligible[j], -1]);
		}
	}
	// If strict mode is enabled, filter out combinations that provide unwanted effects.
	if (strictMode) {
		const strictCombinations = filterSideEffects([effectID], combinations);
		return strictCombinations;
	}

	return combinations;
}
