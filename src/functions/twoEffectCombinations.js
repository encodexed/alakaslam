// Given an array of desired effects, returns an array of arrays of possible combinations of ingredients to achieve those effects.
// An extra parameter strictMode will help allow or disallow extra side effects that could be unwanted.
import EffectsData from "@/app_data/EffectsData";
import IngredientsData from "@/app_data/IngredientsData";
import getOccurrences from "./getOccurrences";
import filterSideEffects from "./filterSideEffects";

export default function twoEffectCombinations(effectIDs, strictMode) {
	// Get all ingredients that have any of the effects
	let eligible = [];
	effectIDs.forEach((id) => {
		eligible.push(...EffectsData[id].reagents);
	});

	// Get the counter effects of selected effects
	let counterEffects = [];
	effectIDs.forEach((id) => {
		counterEffects.push(EffectsData[id].counterEffect);
	})

	// Remove ingredients that possess a counter effect
	eligible.forEach((reagent, index) => {
		counterEffects.forEach((counter) => {
			if (IngredientsData[reagent].effectsIDs.includes(counter)) {
				eligible.splice(index, 1);
			}
		})
	})

	// Find any ingredients that show up twice
	const occurrences = getOccurrences(eligible);
	const doubles = occurrences[1];
	const singles = occurrences[2];

	// There must be at least one ingredient with both effects for the combinations to be possible.
	if (doubles.length === 0) {
		return [];
	}

	// Separate singles into what they can do.
	let group1 = [];
	let group2 = [];
	singles.forEach((single) => {
		if (IngredientsData[single].effectsIDs.includes(effectIDs[0])) {
			group1.push(single);
		} else if (IngredientsData[single].effectsIDs.includes(effectIDs[1])) {
			group2.push(single);
		}
	});

	let combinations = [];
	// To start, combine doubles with other doubles, if possible.
	if (doubles.length > 1) {
		for (let i = 0; i < doubles.length - 1; i++) {
			for (let j = i + 1; j < doubles.length; j++) {
				combinations.push([doubles[i], doubles[j], -1]);
			}
		}
	}

	// Then match the singles with the doubles.
	doubles.forEach((double) => {
		group1.forEach((ing1) => {
			group2.forEach((ing2) => {
				combinations.push([double, ing1, ing2]);
			});
		});
   });
   
   // If strict mode is enabled, filter out combinations that provide unwanted effects.
   if (strictMode) {
      const strictCombinations = filterSideEffects(effectIDs, combinations);
      return strictCombinations;
   }

	return combinations;
}
