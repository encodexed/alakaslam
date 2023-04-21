// Returns an array of ingredients/effects' IDs that are compatible with user selected ingredients/effects, accepted as an array in parameters
import IngredientsData from "@/IngredientsData";
import EffectsData from "@/EffectsData";
import getEffects from "./getEffects";
import removeDuplicates from "./removeDuplicates";

export default function getCompatible(type, selectedIDs) {
   if (type === 'ingredients') {
      // Retrieve effects available to match with from the user selected ingredients
      const allEffects = getEffects(selectedIDs);
      const uniqueEffects = removeDuplicates(allEffects);
      // Get compatible ingredients by comparing every ingredient's effects with effects from user selected ingredients' effects
      let compatibleIngredients = [];
      IngredientsData.forEach((ingredient) => {
         const { effects } = ingredient;
         effects.forEach((effect) => {
            if (uniqueEffects.includes(effect)) {
               compatibleIngredients.push(ingredient.id);
            }
         })
      })
      return removeDuplicates(compatibleIngredients);
   } else {
      // Retrieve all compatible effects with user selected effects
      let allEffects = [];
      selectedIDs.forEach((id) => {
         allEffects.push(...EffectsData[id].compatibleEffects);
      })
      return removeDuplicates(allEffects);
   }
}