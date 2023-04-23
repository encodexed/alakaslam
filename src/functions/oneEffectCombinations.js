// Given an effect ID, this function will return an array of arrays of possible combinations of ingredients to achieve that effect.
// An extra parameter strictMode will help allow or disallow extra side effects that could be unwanted.
import EffectsData from "@/EffectsData";
import IngredientsData from "@/IngredientsData";
import removeDuplicates from "./removeDuplicates";

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
		combinations.forEach((combination, index) => {
			// Get all of the effects of the ingredients involved in the combination
			const allEffects = [
				...IngredientsData[combination[0]].effects,
				...IngredientsData[combination[1]].effects,
			];
			// Filter out the desired effect to leave only potentially undesired effects.
			const filteredEffects = allEffects.filter((item) => item !== effectID);
			const removedDuplicates = removeDuplicates(filteredEffects);
			// Compare length of two arrays after removing duplicates (matching effects)
			if (filteredEffects.length !== removedDuplicates.length) {
				combinations.splice(index, 1);
			}
		});
	}

	return combinations;
}

// if (props.selectedEffectsIDs.length === 1) {
// 	isPossible = true;
// 	// Every possible combination between eligible ingredients when only one effect is selected.
// 	let combinations = [];
// 	for (let i = 0; i < ingredientsIDs.length; i++) {
// 		for (let j = i + 1; j < ingredientsIDs.length; j++) {
// 			if (strictMode) {
// 				// Sometimes, eligible ingredients will produce an extra unwanted effect. Filter this out.
// 				let sideEffect = false;
// 				let selectedEffectsNames = [];
// 				// Get all names of the effects for comparison.
// 				props.selectedEffectsIDs.forEach((id) => {
// 					selectedEffectsNames.push(EffectsData[id - 100].name);
// 				});
// 				const iEffects = [
// 					IngredientsData[ingredientsIDs[i]].effect1,
// 					IngredientsData[ingredientsIDs[i]].effect2,
// 					IngredientsData[ingredientsIDs[i]].effect3,
// 					IngredientsData[ingredientsIDs[i]].effect4,
// 				];
// 				const jEffects = [
// 					IngredientsData[ingredientsIDs[j]].effect1,
// 					IngredientsData[ingredientsIDs[j]].effect2,
// 					IngredientsData[ingredientsIDs[j]].effect3,
// 					IngredientsData[ingredientsIDs[j]].effect4,
// 				];
// 				// A side effect is proven if present in both ingredients but not selected by the user.
// 				iEffects.forEach((iEffect) => {
// 					if (
// 						jEffects.includes(iEffect) &&
// 						!selectedEffectsNames.includes(iEffect)
// 					) {
// 						sideEffect = true;
// 					}
// 				});
// 				// Commit a side-effect free combination to state.
// 				if (!sideEffect) {
// 					combinations.push([
// 						ingredientsIDs[i],
// 						ingredientsIDs[j],
// 						"-1",
// 					]);
// 				}
// 			} else {
// 				combinations.push([
// 					ingredientsIDs[i],
// 					ingredientsIDs[j],
// 					"-1",
// 				]);
// 			}
// 		}
// 	}
// 	setPossibleCombinations([...combinations]);
// }
// setIsImpossible(!isPossible);
