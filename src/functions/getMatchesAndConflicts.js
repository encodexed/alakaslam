// Given an array of ingredients IDs, will return an object with three arrays: triple matches, double matches and conflicts objects.
import getEffects from "./getEffects";
import EffectsData from "@/EffectsData";
import getIDsFromNames from "./getIDsFromNames";
import removeDuplicates from "./removeDuplicates";

export default function getMatchesAndConflicts(ingredientsIDs) {
   // Get all effects of user selected ingredients
	let allEffects = getEffects(ingredientsIDs);
   allEffects.sort();
   const allIDs = getIDsFromNames('effects', allEffects);

	// Count occurrences of each element in the array
   const count = {};
	allIDs.forEach((item) => {
		count[item] = count[item] ? count[item] + 1 : 1;
   });

	// Iterate through the count object and add items to respective arrays
   let doubles = [];
   let triples = [];
   for (let item in count) {
		if (count[item] === 2) {
			doubles.push(parseInt(item));
		} else if (count[item] === 3) {
			triples.push(parseInt(item));
		}
   }


   // Mark conflicts for the user
   let conflicts = [];
   const uniqueAllIDs = removeDuplicates(allIDs);
   for (let i = 0; i < triples.length; i++) {
      if (uniqueAllIDs.includes(EffectsData[triples[i]].counterEffect)) {
         conflicts.push({
            effectID: triples[i],
            counterID: EffectsData[triples[i]].counterEffect
         })
         // Delete the match
         triples.splice(i, 1);
      }
   }
   for (let i = 0; i < doubles.length; i++) {
      if (uniqueAllIDs.includes(EffectsData[doubles[i]].counterEffect)) {
         conflicts.push({
            effectID: doubles[i],
            counterID: EffectsData[doubles[i]].counterEffect
         })
         // Delete the match
         doubles.splice(i, 1);
      }
   }

   return {
      triples,
      doubles,
      conflicts
   };
}
