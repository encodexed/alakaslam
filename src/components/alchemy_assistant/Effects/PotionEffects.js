import SelectedEffects from "./SelectedEffects";
import EffectsData from "../../../app_data/EffectsData";
import Effect from "./Effect";
import { useState, useEffect } from "react";
import getCompatible from "@/functions/getCompatible";

export default function PotionEffects(props) {
	// An array of IDs for effects that work with the user's selected effects
	const [compatibleEffectsIDs, setCompatibleEffectsIDs] = useState([]);

	useEffect(() => {
		if (props.selectedIDs.length === 0) {
			// When no effects are selected by the user, display all effects
			let allEffects = [];
			for (let i = 0; i < EffectsData.length; i++) {
				allEffects.push(i);
			}
			setCompatibleEffectsIDs([...allEffects]);
		} else {
			// Get effects that work with the user's selected effects
			const compatibles = getCompatible("effects", props.selectedIDs);
			setCompatibleEffectsIDs(compatibles);
		}
	}, [props.selectedIDs]);

	return (
		<>
			<div className='sticky z-10 top-[62px] xs:top-[66px]'>
				<SelectedEffects
					selectedIDs={props.selectedIDs}
					deselectEffect={props.deselectOne}
				/>
			</div>
			{EffectsData.map((effect) => {
				if (
					!props.selectedIDs.includes(effect.id) &&
					compatibleEffectsIDs.includes(effect.id)
				) {
					return (
						<Effect
							key={"z" + effect.id}
							id={effect.id}
							selectEffect={props.selectOne}
							isDisabled={props.disableAddButtons}
							filter={props.filter}
						/>
					);
				}
			})}
			{/* <Combinations selectedEffectsIDs={selectedEffectsIDs} />
			<EffectsResults selectedEffectsIDs={selectedEffectsIDs} /> */}
		</>
	);
}
