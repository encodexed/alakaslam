// Returns an array of effects that an array of ingredients possesses
import IngredientsData from "@/IngredientsData";

export default function getEffects(ingredientsIDs) {
   let allEffects = [];
   ingredientsIDs.forEach((id) => {
      allEffects.push(...IngredientsData[id].effects);
   })
   return allEffects;
}