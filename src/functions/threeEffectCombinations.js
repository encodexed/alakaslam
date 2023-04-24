// Given an array of desired effects, returns an array of arrays of possible combinations of ingredients to achieve those effects.
// An extra parameter strictMode will help allow or disallow extra side effects that could be unwanted.
import EffectsData from "@/EffectsData";
import IngredientsData from "@/IngredientsData";
import getOccurrences from "./getOccurrences";
import filterSideEffects from "./filterSideEffects";

export default function threeEffectCombinations(effectIDs, strictMode) {
	// Get all ingredients that have any of the effects
	let eligible = [];
	effectIDs.forEach((id) => {
		eligible.push(...EffectsData[id].reagents);
	});

	// Get the counter effects of selected effects
	let counterEffects = [];
	effectIDs.forEach((id) => {
		counterEffects.push(EffectsData[id].counterEffect);
	});

	// Remove ingredients that possess a counter effect
	eligible.forEach((reagent, index) => {
		counterEffects.forEach((counter) => {
			if (IngredientsData[reagent].effectsIDs.includes(counter)) {
				eligible.splice(index, 1);
			}
		});
	});

	// Split ingredients into arrays based on their occurrences
	const occurrences = getOccurrences(eligible);
	const triples = occurrences[0];
	const doubles = occurrences[1];
	const singles = occurrences[2];

	// For a potion with 3 effects to be possible at all, 
   // it must have at least 3 ingredients mentioned twice
   // OR 1 ingredient mentioned 3 times and 1 ingredient mentioned twice.
   if (doubles.length < 3 && triples.length === 0) {
      return [];
   }

   let group12 = [];
   let group13 = [];
   let group23 = [];
   let group1 = [];
   let group2 = [];
   let group3 = [];

   // To start, sort the doubles into what effects they possess.
   doubles.forEach((double) => {
      if (IngredientsData[double].effectsIDs.includes(effectIDs[0]) && IngredientsData[double].effectsIDs.includes(effectIDs[1])) {
			group12.push(double);
		} else if (IngredientsData[double].effectsIDs.includes(effectIDs[0]) && IngredientsData[double].effectsIDs.includes(effectIDs[2])) {
			group13.push(double);
      } else if (IngredientsData[double].effectsIDs.includes(effectIDs[1]) && IngredientsData[double].effectsIDs.includes(effectIDs[2])) {
         group23.push(double);
      }
   })

   // Sort the singles in what effect they possess.
   singles.forEach((single) => {
      if (IngredientsData[single].effectsIDs.includes(effectIDs[0])) {
         group1.push(single);
      } else if (IngredientsData[single].effectsIDs.includes(effectIDs[1])) {
         group2.push(single);
      } else if (IngredientsData[single].effectsIDs.includes(effectIDs[2])) {
         group3.push(single);
      }
   });

   let combinations = [];
   // If ZOS ever adds two incredibly similar ingredients
   if (triples.length > 1) {
      for (let i = 0; i < triples.length - 1; i++) {
			for (let j = i + 1; j < triples.length; j++) {
				combinations.push([triples[i], triples[j], -1]);
			}
		}
   }
   
   // Start combining 3 x doubles combinations
   group12.forEach((ing12) => {
		group13.forEach((ing13) => {
			group23.forEach((ing23) => {
				combinations.push([ing12, ing13, ing23]);
			});
		});
   });

   // Now combine a triple double and single
   triples.forEach((triple) => {
		group12.forEach((ing12) => {
			group3.forEach((ing3) => {
				combinations.push([triple, ing12, ing3]);
			});
		});
   });

   triples.forEach((triple) => {
		group13.forEach((ing13) => {
			group2.forEach((ing2) => {
				combinations.push([triple, ing13, ing2]);
			});
		});
   });

   triples.forEach((triple) => {
		group23.forEach((ing23) => {
			group1.forEach((ing1) => {
				combinations.push([triple, ing23, ing1]);
			});
		});
   });

   // Final combinations: the triples with some doubles
   triples.forEach((triple) => {
		group12.forEach((ing12) => {
			group23.forEach((ing23) => {
				combinations.push([triple, ing12, ing23]);
			});
		});
   });

   triples.forEach((triple) => {
		group13.forEach((ing13) => {
			group23.forEach((ing23) => {
				combinations.push([triple, ing13, ing23]);
			});
		});
   });

   triples.forEach((triple) => {
		group12.forEach((ing12) => {
			group13.forEach((ing13) => {
				combinations.push([triple, ing12, ing13]);
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
