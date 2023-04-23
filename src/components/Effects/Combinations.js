import { useState, useEffect } from "react";
// import IngredientsData from "../../IngredientsData";
// import EffectsData from "../../EffectsData";
import Combination from "./Combination";
import oneEffectCombinations from "@/functions/oneEffectCombinations";
import NoInput from "../NoInput";

export default function Combinations(props) {
	// An array that stores all the current possible combinations for making concoctions with the selected effects.
	const [combinations, setCombinations] = useState([]);

	useEffect(() => {
		if (props.selectedIDs.length === 1) {
			const newCombinations = oneEffectCombinations(props.selectedIDs, props.strictMode);
			setCombinations([...newCombinations]);
		}

		if (props.selectedIDs.length === 0) {
			setCombinations([]);
		}
	}, [props.selectedIDs, props.strictMode]);

	if (props.selectedIDs.length === 0) {
		return (
			<NoInput />
		)
	}

	return (
		<>
			<div className='overflow-scroll'>
				{combinations.map((combination) => {
					const thisKey = combination.toString();
					return (
						<Combination
							key={thisKey}
							thisKey={thisKey}
							ingredients={combination}
						/>
					);
				})}
			</div>
		</>
	);
}
// // An array of arrays that work together to make the desired concoction.
// const [possibleCombinations, setPossibleCombinations] = useState([]);

// // A boolean to indicate if desired concoctions don't exist by law.
// // Should implement a way to prevent user from ever selecting impossible mixtures.
// const [isImpossible, setIsImpossible] = useState(false);

// useEffect(() => {
// 	let isPossible = true;
// 	if (props.selectedEffectsIDs.length > 0) {
// 		// gather eligible ingredients
// 		let ingredientsIDs = [];
// 		// Gather selected effect's counter-effects
// 		let counterEffects = [];
// 		props.selectedEffectsIDs.forEach((effectID) => {
// 			const counterEffect = EffectsData[effectID - 100].counterEffect;
// 			counterEffects.push(counterEffect);
// 		});
// 		props.selectedEffectsIDs.forEach((effectID) => {
// 			// Gather data about the effect
// 			const effect = EffectsData[effectID - 100];
// 			// Gather data about the ingredients' effects
// 			IngredientsData.forEach((ingredient) => {
// 				const ingEffects = [
// 					ingredient.effect1,
// 					ingredient.effect2,
// 					ingredient.effect3,
// 					ingredient.effect4,
// 				];
// 				// Check for conflicts between effects
// 				let conflict = false;
// 				counterEffects.forEach((counterEffect) => {
// 					if (ingEffects.includes(counterEffect)) {
// 						conflict = true;
// 					}
// 				});
// 				// If everything's good, mark it eligible
// 				if (ingEffects.includes(effect.name) && !conflict) {
// 					ingredientsIDs.push(ingredient.id);
// 				}
// 			});
// 		});

// 		// For a potion with 2 effects to be posssible at all, it must have at least 1 ingredient mentioned twice in the eligibleIngredients array.
// 		// For this 2 effect potion, at least one ingredient MUST have both effects. There is no way around it.
// 		// For 2 effect potions, identify the critical ingredient(s). If there is none, gg. Once you have that, divide other ingredients by what they offer.
// 		// eg. Bugloss has restore health and magicka. Butterfly wing, crimson nirnroot luminous russula, mountain flower, water hyacinth restore health. Dragon rheum, lady's smock restore magicka.
// 		// You may need to check that your 2 effect potion combinations don't accidentally give a 3rd effect.
// 		// eg. Potion of Defile, Invisible. Spider Egg is critical ingredient. Adding Blue Entoloma for invisible, and Clam Gall for defile accidentally has created hindrance.
// 		// Perhaps every combination must be put to the test to see if there are unwanted side effects.
// 		// Side note, adding opposing effects eg. Ravage Health and Restore Health is silly so disable counter effects from being selected.
// 		ingredientsIDs.sort();

// 		if (props.selectedEffectsIDs.length === 2) {
// 			// Find critical ingredients based on how often they occur (how many traits they have that were selected by the user)
// 			let ingredientOccurences = [];
// 			for (let i = 0; i < ingredientsIDs.length; i++) {
// 				const thisIngredient = IngredientsData[ingredientsIDs[i]].name;
// 				let thisOccurences = 1;
// 				if (ingredientsIDs[i] === ingredientsIDs[i + 1]) {
// 					thisOccurences++;
// 					i++;
// 				}
// 				const thisEffects = [
// 					IngredientsData[ingredientsIDs[i]].effect1,
// 					IngredientsData[ingredientsIDs[i]].effect2,
// 					IngredientsData[ingredientsIDs[i]].effect3,
// 					IngredientsData[ingredientsIDs[i]].effect4,
// 				];
// 				ingredientOccurences.push({
// 					id: ingredientsIDs[i],
// 					name: thisIngredient,
// 					occurences: thisOccurences,
// 					effects: thisEffects,
// 				});
// 			}

// 			// Create arrays separating each ingredient by how often they occur.
// 			isPossible = false;
// 			let combinations = [];
// 			let doubleCriticals = [];
// 			let singleIngredients = [];
// 			ingredientOccurences.forEach((ingredient) => {
// 				if (ingredient.occurences === 2) {
// 					doubleCriticals.push(ingredient);
// 				} else {
// 					singleIngredients.push(ingredient);
// 				}
// 			});
// 			// Check if possible to create concoction using only two ingredients.
// 			if (doubleCriticals.length > 1) {
// 				isPossible = true;
// 				for (let i = 0; i < doubleCriticals.length; i++) {
// 					for (let j = i + 1; j < doubleCriticals.length; j++) {
// 						combinations.push([
// 							doubleCriticals[i].id,
// 							doubleCriticals[j].id,
// 							"-1",
// 						]);
// 					}
// 				}
// 			}

// 			// Get the effects' names that were selected by the user
// 			let selectedEffectsNames = [];
// 			props.selectedEffectsIDs.forEach((effectID) => {
// 				selectedEffectsNames.push(EffectsData[effectID - 100].name);
// 			});
// 			// Separate single-effect ingredients into what they can do.
// 			let group1 = [];
// 			let group2 = [];
// 			singleIngredients.forEach((ingredient) => {
// 				if (ingredient.effects.includes(selectedEffectsNames[0])) {
// 					group1.push(ingredient);
// 				} else {
// 					group2.push(ingredient);
// 				}
// 			});

// 			// Check if possible to create concoction using three ingredients.
// 			if (
// 				doubleCriticals.length > 0 &&
// 				group1.length > 0 &&
// 				group2.length > 0
// 			) {
// 				isPossible = true;
// 				doubleCriticals.forEach((double) => {
// 					group1.forEach((ing1) => {
// 						group2.forEach((ing2) => {
// 							if (strictMode) {
// 								// Sometimes, eligible ingredients will produce an extra unwanted effect. Filter this out.
// 								let sideEffect = false;
// 								// Get all effects mentioned once by the ingredients and sort them.
// 								let allEffects = [
// 									...double.effects,
// 									...ing1.effects,
// 									...ing2.effects,
// 								];
// 								allEffects.sort();
// 								for (let i = 0; i < allEffects.length - 1; i++) {
// 									// Find matches
// 									if (allEffects[i] === allEffects[i + 1]) {
// 										if (
// 											!selectedEffectsNames.includes(
// 												allEffects[i]
// 											)
// 										) {
// 											sideEffect = true;
// 										}
// 									}
// 								}

// 								// Commit a side-effect free combination to state.
// 								if (!sideEffect) {
// 									combinations.push([double.id, ing1.id, ing2.id]);
// 								}
// 							} else {
// 								combinations.push([double.id, ing1.id, ing2.id]);
// 							}
// 						});
// 					});
// 				});
// 			}
// 			if (combinations.length === 0) {
// 				isPossible = false;
// 			}
// 			setPossibleCombinations([...combinations]);
// 		}

// 		// For a potion with 3 effects to be possible at all, it must have at least 3 ingredients mentioned twice in the eligibleIngredients array OR 1 ingredient mentioned 3 times and 1 ingredient mentioned twice.
// 		if (props.selectedEffectsIDs.length === 3) {
// 			// check if possible
// 			let ingredientOccurences = [];
// 			for (let i = 0; i < ingredientsIDs.length; i++) {
// 				const thisIngredient = IngredientsData[ingredientsIDs[i]].name;
// 				let thisOccurences = 1;
// 				if (ingredientsIDs[i] === ingredientsIDs[i + 1]) {
// 					thisOccurences++;
// 					i++;
// 					if (i + 1 < ingredientsIDs.length) {
// 						if (ingredientsIDs[i] === ingredientsIDs[i + 1]) {
// 							thisOccurences++;
// 							i++;
// 						}
// 					}
// 				}
// 				const thisEffects = [
// 					IngredientsData[ingredientsIDs[i]].effect1,
// 					IngredientsData[ingredientsIDs[i]].effect2,
// 					IngredientsData[ingredientsIDs[i]].effect3,
// 					IngredientsData[ingredientsIDs[i]].effect4,
// 				];
// 				ingredientOccurences.push({
// 					id: ingredientsIDs[i],
// 					name: thisIngredient,
// 					occurences: thisOccurences,
// 					effects: thisEffects,
// 				});
// 			}

// 			isPossible = false;
// 			let doubles = 0;
// 			let triples = 0;
// 			// Add ingredients to arrays
// 			let tripleCriticals = [];
// 			let doubleCriticals = [];
// 			let singleIngredients = [];
// 			ingredientOccurences.forEach((ingredient) => {
// 				if (ingredient.occurences === 3) {
// 					triples++;
// 					tripleCriticals.push(ingredient);
// 				} else if (ingredient.occurences === 2) {
// 					doubles++;
// 					doubleCriticals.push(ingredient);
// 				} else {
// 					singleIngredients.push(ingredient);
// 				}
// 				// Check overall possibility of this combination.
// 				if ((triples > 0 && doubles > 0) || doubles > 2) {
// 					isPossible = true;
// 				}
// 			});

// 			let combinations = [];
// 			if (isPossible) {
// 				if (triples > 0 && doubles > 0) {
// 					tripleCriticals.forEach((triple) => {
// 						doubleCriticals.forEach((double) => {
// 							singleIngredients.forEach((single) => {
// 								// Get all of the effects mentioned at least once in the three ingredients
// 								let allEffects = [
// 									...triple.effects,
// 									...double.effects,
// 									...single.effects,
// 								];
// 								allEffects.sort();
// 								// Reduce effects down into only those that occur twice
// 								let matchedEffects = [];
// 								for (let i = 0; i < allEffects.length; i++) {
// 									if (allEffects[i] === allEffects[i + 1]) {
// 										matchedEffects.push(allEffects[i]);
// 										i++;
// 										if (i < allEffects.length) {
// 											if (allEffects[i] === allEffects[i + 1]) {
// 												i++;
// 											}
// 										}
// 									}
// 								}
// 								// Get the effects' names that were selected by the user
// 								let selectedEffects = [];
// 								props.selectedEffectsIDs.forEach((effectID) => {
// 									selectedEffects.push(
// 										EffectsData[effectID - 100].name
// 									);
// 								});
// 								selectedEffects.sort();
// 								// Compare and push to possible combinations
// 								if (
// 									matchedEffects.toString() ===
// 									selectedEffects.toString()
// 								) {
// 									combinations.push([
// 										triple.id,
// 										double.id,
// 										single.id,
// 									]);
// 								}
// 							});
// 						});
// 					});
// 				}

// 				if (doubles > 2 || (triples > 0 && doubles > 1)) {
// 					// Get the effects' names that were selected by the user
// 					let selectedEffects = [];
// 					props.selectedEffectsIDs.forEach((effectID) => {
// 						selectedEffects.push(EffectsData[effectID - 100].name);
// 					});

// 					let allCriticalIngredients = [];
// 					let group123 = [];
// 					let group12 = [];
// 					let group23 = [];
// 					let group13 = [];
// 					tripleCriticals.forEach((ingredient) => {
// 						allCriticalIngredients.push(ingredient);
// 					});
// 					doubleCriticals.forEach((ingredient) => {
// 						allCriticalIngredients.push(ingredient);
// 					});

// 					allCriticalIngredients.forEach((ingredient) => {
// 						if (
// 							ingredient.effects.includes(selectedEffects[0]) &&
// 							ingredient.effects.includes(selectedEffects[1]) &&
// 							ingredient.effects.includes(selectedEffects[2])
// 						) {
// 							group123.push(ingredient);
// 						} else if (
// 							ingredient.effects.includes(selectedEffects[0]) &&
// 							ingredient.effects.includes(selectedEffects[1])
// 						) {
// 							group12.push(ingredient);
// 						} else if (
// 							ingredient.effects.includes(selectedEffects[1]) &&
// 							ingredient.effects.includes(selectedEffects[2])
// 						) {
// 							group23.push(ingredient);
// 						} else if (
// 							ingredient.effects.includes(selectedEffects[0]) &&
// 							ingredient.effects.includes(selectedEffects[2])
// 						) {
// 							group13.push(ingredient);
// 						}
// 					});

// 					group123.forEach((ing123) => {
// 						group12.forEach((ing12) => {
// 							group23.forEach((ing23) => {
// 								combinations.push([ing123.id, ing12.id, ing23.id]);
// 							});
// 						});
// 					});

// 					group123.forEach((ing123) => {
// 						group23.forEach((ing23) => {
// 							group13.forEach((ing13) => {
// 								combinations.push([ing123.id, ing23.id, ing13.id]);
// 							});
// 						});
// 					});

// 					group123.forEach((ing123) => {
// 						group12.forEach((ing12) => {
// 							group13.forEach((ing13) => {
// 								combinations.push([ing123.id, ing12.id, ing13.id]);
// 							});
// 						});
// 					});

// 					group12.forEach((ing12) => {
// 						group23.forEach((ing23) => {
// 							group13.forEach((ing13) => {
// 								combinations.push([ing12.id, ing23.id, ing13.id]);
// 							});
// 						});
// 					});
// 				}
// 			}
// 			if (combinations.length === 0) {
// 				isPossible = false;
// 			}
// 			setPossibleCombinations([...combinations]);
// 		}

// 		if (props.selectedEffectsIDs.length === 1) {
// 			isPossible = true;
// 			// Every possible combination between eligible ingredients when only one effect is selected.
// 			let combinations = [];
// 			for (let i = 0; i < ingredientsIDs.length; i++) {
// 				for (let j = i + 1; j < ingredientsIDs.length; j++) {
// 					if (strictMode) {
// 						// Sometimes, eligible ingredients will produce an extra unwanted effect. Filter this out.
// 						let sideEffect = false;
// 						let selectedEffectsNames = [];
// 						// Get all names of the effects for comparison.
// 						props.selectedEffectsIDs.forEach((id) => {
// 							selectedEffectsNames.push(EffectsData[id - 100].name);
// 						});
// 						const iEffects = [
// 							IngredientsData[ingredientsIDs[i]].effect1,
// 							IngredientsData[ingredientsIDs[i]].effect2,
// 							IngredientsData[ingredientsIDs[i]].effect3,
// 							IngredientsData[ingredientsIDs[i]].effect4,
// 						];
// 						const jEffects = [
// 							IngredientsData[ingredientsIDs[j]].effect1,
// 							IngredientsData[ingredientsIDs[j]].effect2,
// 							IngredientsData[ingredientsIDs[j]].effect3,
// 							IngredientsData[ingredientsIDs[j]].effect4,
// 						];
// 						// A side effect is proven if present in both ingredients but not selected by the user.
// 						iEffects.forEach((iEffect) => {
// 							if (
// 								jEffects.includes(iEffect) &&
// 								!selectedEffectsNames.includes(iEffect)
// 							) {
// 								sideEffect = true;
// 							}
// 						});
// 						// Commit a side-effect free combination to state.
// 						if (!sideEffect) {
// 							combinations.push([
// 								ingredientsIDs[i],
// 								ingredientsIDs[j],
// 								"-1",
// 							]);
// 						}
// 					} else {
// 						combinations.push([
// 							ingredientsIDs[i],
// 							ingredientsIDs[j],
// 							"-1",
// 						]);
// 					}
// 				}
// 			}
// 			setPossibleCombinations([...combinations]);
// 		}
// 		setIsImpossible(!isPossible);
// 	} else {
// 		// Reset.
// 		setPossibleCombinations([]);
// 		setIsImpossible(false);
// 	}
// }, [props.selectedEffectsIDs, strictMode]);

// const toggleStrictMode = () => {
// 	setStrictMode((prevState) => {
// 		return !prevState;
// 	});
// };

// const disableStrictMode = () => {
// 	setStrictMode(false);
// };

// // For when Cowardice or other effects that cannot exist on their own are selected
// let strictSetting = strictMode
// 	? "disable strict mode"
// 	: "enable strict mode";
// if (
// 	props.selectedEffectsIDs.length === 1 &&
// 	possibleCombinations.length === 0
// ) {
// 	return (
// 		<>
// 			<SectionHeader
// 				title={"Possible Combinations"}
// 				link={toggleStrictMode}
// 				linkContent={strictSetting}
// 			/>
// 			<div className='flex flex-col h-48 text-sm text-center border sm:text-base'>
// 				<p className='px-4 my-auto'>
// 					Unfortunately, concoctions with this effect alone do not
// 					exist. Consider{" "}
// 					<span
// 						className='text-indigo-800 underline cursor-pointer'
// 						onClick={disableStrictMode}
// 					>
// 						disabling strict mode
// 					</span>
// 					. This will allow the assistant to show you potions that may
// 					contain side effects.
// 				</p>
// 			</div>
// 		</>
// 	);
// }

// // Initial state
// if (props.selectedEffectsIDs.length === 0) {
// 	return (
// 		<>
// 			<SectionHeader
// 				title={"Possible Combinations"}
// 				link={toggleStrictMode}
// 				linkContent={strictSetting}
// 			/>
// 			<div className='flex flex-col h-48 text-sm text-center border sm:text-base'>
// 				<p className='px-4 my-auto'>
// 					Add effects from above to start seeing results.
// 					<br />
// 					<span
// 						className='text-indigo-800 underline cursor-pointer'
// 						onClick={disableStrictMode}
// 					>
// 						Disable strict mode
// 					</span>{" "}
// 					to allow combinations with unselected side effects.
// 				</p>
// 			</div>
// 		</>
// 	);
// }

// if (isImpossible && strictMode) {
// 	return (
// 		<>
// 			<SectionHeader
// 				title={"Possible Combinations"}
// 				link={toggleStrictMode}
// 				linkContent={strictSetting}
// 			/>
// 			<div className='flex flex-col h-48 text-sm text-center border sm:text-base'>
// 				<p className='px-4 my-auto'>
// 					Unfortunately, this combination of effects does not exist in
// 					ESO. Consider{" "}
// 					<span
// 						className='text-indigo-800 underline cursor-pointer'
// 						onClick={disableStrictMode}
// 					>
// 						disabling strict mode
// 					</span>
// 					. This will allow the assistant to show you potions that may
// 					contain side effects.
// 				</p>
// 			</div>
// 		</>
// 	);
// }

// if (isImpossible && !strictMode) {
// 	return (
// 		<>
// 			<SectionHeader
// 				title={"Possible Combinations"}
// 				link={toggleStrictMode}
// 				linkContent={strictSetting}
// 			/>
// 			<div className='flex flex-col h-48 text-sm text-center border sm:text-base'>
// 				<p className='px-4 my-auto'>
// 					Unfortunately, this combination of effects does not exist in
// 					ESO, even with potential side effects considered.
// 				</p>
// 			</div>
// 		</>
// 	);
// }
// }
