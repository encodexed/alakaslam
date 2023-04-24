// Returns an array of effects names that an array of ingredients IDs possesses, without filtering duplicates.
import IngredientsData from "@/IngredientsData";

export default function getEffects(ingredientsIDs) {
   let allEffects = [];
   ingredientsIDs.forEach((id) => {
      allEffects.push(...IngredientsData[id].effects);
   })
   return allEffects;
}