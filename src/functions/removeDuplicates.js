// Returns a new array with all duplicates removed, only unique values
export default function removeDuplicates(array) {
   return [...new Set(array)];
}