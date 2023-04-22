// Takes an array of either ingredients/effects names, specified in parameters, and returns that IDs
import EffectsData from "@/EffectsData";
import IngredientsData from "@/IngredientsData";

export default function getIDsFromNames(type, array) {
   let returnIDs = [];
   if (type === 'ingredients') {
      array.forEach((item) => {
         for (let ingredient of IngredientsData) {
            if (ingredient.name === item) {
               returnIDs.push(ingredient.id);
               break;
            }
         }
      })
   } else {
      array.forEach((item) => {
         for (let effect of EffectsData) {
            if (effect.name === item) {
               returnIDs.push(effect.id);
               break;
            }
         }
      })
   }
   return returnIDs;
}