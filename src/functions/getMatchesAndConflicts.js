// Given an array of ingredients IDs, will return an object with three arrays: triple matches, double matches and conflicts objects.
import getEffects from "./getEffects";
import EffectsData from "@/EffectsData";
import getIDsFromNames from "./getIDsFromNames";
import removeDuplicates from "./removeDuplicates";
import getOccurrences from "./getOccurrences";

export default function getMatchesAndConflicts(ingredientsIDs) {
   // Get all effects of user selected ingredients
	let allEffects = getEffects(ingredientsIDs);
   allEffects.sort();
   const allIDs = getIDsFromNames(allEffects);

   const occurrences = getOccurrences(allIDs);
   const triples = occurrences[0];
   const doubles = occurrences[1];

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
