import RemoveButton from "../UI/RemoveButton";
import Icon from "../UI/Icon";
import IngredientsData from "@/IngredientsData";
import { useState, useEffect } from "react";
import getIDsFromNames from "@/functions/getIDsFromNames";

const unmatchedStyle =
	"xxs:text-sm text-xs leading-none xxs:leading-none text-center text-slate-400";
const matchedStyle =
	"xxs:text-sm text-xs leading-none xxs:leading-none text-center text-purple-500";
const counterEffectStyle =
	"xxs:text-sm text-xs leading-none xxs:leading-none text-center text-red-500";

export default function SelectedIngredient(props) {
	const [styles, setStyles] = useState([]);
	const { id, name, effects, src } = IngredientsData[props.ingredientID];

	useEffect(() => {
		// Display a visualisation of matching effects between ingredients, or conflicting effects.
		let newStyles = [];
		const effectsIDs = getIDsFromNames(effects);

		effectsIDs.forEach((id) => {
			if (
				props.matchesAndConflicts.triples.includes(id) ||
				props.matchesAndConflicts.doubles.includes(id)
			) {
				newStyles.push(matchedStyle);
			} else {
				let conflicted = false;
				for (let conflict of props.matchesAndConflicts.conflicts) {
					if (conflict.counterID === id) {
						newStyles.push(counterEffectStyle);
						conflicted = true;
						break;
					}
				}
				if (!conflicted) {
					newStyles.push(unmatchedStyle);
				}
			}
		});

		setStyles([...newStyles]);
	}, [props.matchesAndConflicts, effects]);

	const deselectHandler = () => {
		props.deselectIngredient(id);
	};

	return (
		<>
			<div className='hidden px-2 border-b border-black xs:flex bg-slate-100'>
				<div>
					<Icon src={src} />
				</div>
				<div className='flex-1 w-40 my-auto justify-content-center'>
					<h3 className='text-sm text-center sm:text-base'>{name}</h3>
				</div>
				<div className='my-auto flex-0'>
					<RemoveButton onClick={deselectHandler} />
				</div>
				<div className='flex-1 my-auto ml-2'>
					<p className={styles[0]}>{effects[0]}</p>
					<p className={styles[1]}>{effects[1]}</p>
				</div>
				<div className='flex-1 my-auto'>
					<p className={styles[2]}>{effects[2]}</p>
					<p className={styles[3]}>{effects[3]}</p>
				</div>
			</div>
			<div className='flex px-2 border-b border-black bg-slate-100 xs:hidden'>
				<div>
					<Icon src={src} />
				</div>
				<div className='flex-1 my-auto justify-content-center'>
					<h3 className='text-sm text-center sm:text-base'>{name}</h3>
				</div>
				<div className='my-auto flex-0'>
					<RemoveButton onClick={deselectHandler} />
				</div>
				<div className='flex-1 my-1 ml-1 truncate'>
					<p className={styles[0]}>{effects[0]}</p>
					<p className={styles[1]}>{effects[1]}</p>
					<p className={styles[2]}>{effects[2]}</p>
					<p className={styles[3]}>{effects[3]}</p>
				</div>
			</div>
		</>
	);
}
