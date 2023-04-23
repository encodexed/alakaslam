export default function getOccurrences(array) {
   // Count occurrences of each element in the array
   const count = {};
	array.forEach((item) => {
		count[item] = count[item] ? count[item] + 1 : 1;
   });

	// Iterate through the count object and add items to respective arrays
   let singles = [];
   let doubles = [];
   let triples = [];
   for (let item in count) {
		if (count[item] === 3) {
			triples.push(parseInt(item));
		} else if (count[item] === 2) {
			doubles.push(parseInt(item));
      } else if (count[item] === 1) {
         singles.push(parseInt(item));
      } else {
         console.log("Error in occurrences");
         return [[], [], []];
      }
   }

   return [triples, doubles, singles];
}