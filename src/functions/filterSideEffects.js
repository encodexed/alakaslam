// Takes an array of desired effects and an array of ingredient combinations (as arrays) and returns only combinations that combine to create the desired effects.
import removeDuplicates from "./removeDuplicates";
import IngredientsData from "@/IngredientsData";
import getIDsFromNames from "./getIDsFromNames";

export default function filterSideEffects(desiredEffects, combinations) {
   let strictCombinations = [];
   combinations.forEach((combination, index) => {
      // Get all of the effects of the ingredients involved in the combination.
      const allEffectsIDs = getIDsFromNames("effects", [
         ...IngredientsData[combination[0]].effects,
         ...IngredientsData[combination[1]].effects,
      ]);

      // Filter out the desired effects to leave only undesired effects.
      let undesiredEffects = [];
      allEffectsIDs.forEach((effectID) => {
         if (!desiredEffects.includes(effectID)) {
            undesiredEffects.push(effectID);
         }
      })

      // Shorten the array when there are matches...
      const removedDuplicates = removeDuplicates(undesiredEffects);
      // ...and compare the length of before and after.
      if (undesiredEffects.length === removedDuplicates.length) {
         // If nothing was removed, that means no side effects are present.
         strictCombinations.push(combination);
      }
   });
   return strictCombinations;
}