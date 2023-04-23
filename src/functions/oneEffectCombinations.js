// Given an effect ID, this function will return an array of arrays of possible combinations of ingredients to achieve that effect.
// An extra parameter strictMode will help allow or disallow extra side effects that could be unwanted.
import EffectsData from "@/EffectsData";
import IngredientsData from "@/IngredientsData";
import removeDuplicates from "./removeDuplicates";
import getIDsFromNames from "./getIDsFromNames";

export default function oneEffectCombinations(effectID, strictMode) {
	const eligible = EffectsData[effectID].reagents;
	// Filtering out counter-effects will not be necessary for one-effect concoctions with two ingredients :)

	// Combine ingredients from the array of eligible ingredients into combinations.
	let combinations = [];
	for (let i = 0; i < eligible.length - 1; i++) {
		for (let j = i + 1; j < eligible.length; j++) {
			combinations.push([eligible[i], eligible[j], -1]);
		}
	}
	// If strict mode is enabled, filter out combinations that provide unwanted effects.
	if (strictMode) {
		let strictCombinations = [];
		combinations.forEach((combination, index) => {
			// Get all of the effects of the ingredients involved in the combination.
			const allEffectsIDs = getIDsFromNames("effects", [
				...IngredientsData[combination[0]].effects,
				...IngredientsData[combination[1]].effects,
			]);
			// Filter out the desired effect to leave only potentially undesired effects.
			const filteredEffects = allEffectsIDs.filter(id => id != effectID); // This needs to not be a loose comparison because javascript is weird.
			const removedDuplicates = removeDuplicates(filteredEffects);
			// Compare length of two arrays after removing duplicates (matching effects).
			if (filteredEffects.length === removedDuplicates.length) {
				strictCombinations.push(combination);
			}
		});
		return strictCombinations;
	}

	return combinations;
}
