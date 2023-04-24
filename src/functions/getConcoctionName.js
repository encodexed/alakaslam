// Given an array of effects that have been matched, return an array of two strings, reflecting the most likely name used based on the hierarchy stat of each effect.
import EffectsData from "@/EffectsData";

export default function getConcoctionName(effects) {
	// If React is still updating state
	// Something will need to be re-done to prevent getConcoctionName() being called in IngredientsResults without a proper data set ready.
	if (effects.length === 0) {
		return ["Something", "Something"];
	}

	let strongestID = effects[0];
	for (let i = 1; i < effects.length; i++) {
		if (
			EffectsData[effects[i]].hierarchy < EffectsData[strongestID].hierarchy
		) {
			strongestID = effects[i];
		}
	}

	return [
		EffectsData[strongestID].potionName,
		EffectsData[strongestID].poisonName,
	];
}
