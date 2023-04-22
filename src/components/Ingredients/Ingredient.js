import AddButton from "../UI/AddButton";
import Icon from "../UI/Icon";
import IngredientsData from "../../IngredientsData";
import DisabledAddButton from "../UI/DisabledAddButton";
import { useState, useEffect } from "react";
import removeDuplicates from "@/functions/removeDuplicates";

const incompatibleStyle =
	"sm:text-sm leading-none sm:leading-none text-xs text-center text-slate-500";
const compatibleStyle =
	"sm:text-sm leading-none sm:leading-none text-xs text-center text-green-500";

export default function Ingredient(props) {
	const [styles, setStyles] = useState([]);
	const { name, effects, src } = IngredientsData[props.id];

	useEffect(() => {
		const uniqueEffects = removeDuplicates(props.effects);
		// Analyse what effects on this ingredient match effects of selected ingredients, and visualise them
		let newStyles = [];
		effects.forEach((effect) => {
			if (uniqueEffects.includes(effect)) {
				newStyles.push(compatibleStyle);
			} else {
				newStyles.push(incompatibleStyle);
			}
		});
		setStyles([...newStyles]);
	}, [props.effects, effects]);

	const addSelectionHandler = () => {
		props.selectIngredient(props.id);
	};

	return (
		<>
			{/* Output on small-large screens */}
			<div className='hidden px-2 border-b xs:flex'>
				<div>
					<Icon src={src} />
				</div>
				<div className='flex-1 w-40 my-auto justify-content-center'>
					<h3 className='text-sm text-center sm:text-base'>{name}</h3>
				</div>
				<div className='my-auto flex-0'>
					{!props.isDisabled && (
						<AddButton onClick={addSelectionHandler} />
					)}
					{props.isDisabled && <DisabledAddButton />}
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
			{/* Output on extra-small screens */}
			<div className='flex px-2 border-b xs:hidden'>
				<div>
					<Icon src={src} />
				</div>
				<div className='flex-1 my-auto justify-content-center'>
					<h3 className='text-sm text-center sm:text-base'>{name}</h3>
				</div>
				<div className='my-auto flex-0'>
					{!props.isDisabled && (
						<AddButton onClick={addSelectionHandler} />
					)}
					{props.isDisabled && <DisabledAddButton />}
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
