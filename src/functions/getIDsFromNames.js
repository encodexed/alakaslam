// Takes an array of effects names, specified in parameters, and returns that IDs
import EffectsData from "@/app_data/EffectsData";

export default function getIDsFromNames(array) {
	let returnIDs = [];
	array.forEach((item) => {
		for (let effect of EffectsData) {
			if (effect.name === item) {
				returnIDs.push(effect.id);
				break;
			}
		}
	});
	return returnIDs;
}
