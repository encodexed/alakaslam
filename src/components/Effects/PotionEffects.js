import SelectedEffects from "./SelectedEffects";
import EffectsData from "../../EffectsData";
import Effect from "./Effect";
import { useState } from "react";
import EffectsResults from "./EffectsResults";
import Combinations from "./Combinations";

export default function PotionEffects(props) {
	const [selectedEffectsIDs, setSelectedEffectsIDs] = useState([]);
	const [disableAddButtons, setDisableAddButtons] = useState(false);

	const selectEffect = (id) => {
		if (selectedEffectsIDs.length < 3) {
			setSelectedEffectsIDs([...selectedEffectsIDs, id]);
		}

		if (selectedEffectsIDs.length === 2) {
			setDisableAddButtons(true);
		}
	};

	const deselectEffect = (id) => {
		setSelectedEffectsIDs(
			selectedEffectsIDs.filter((effectID) => id !== effectID)
		);

		if (selectedEffectsIDs.length === 3) {
			setDisableAddButtons(false);
		}
	};

	return (
		<>
			<div className='sticky z-10 top-[22px] xs:top-[26px]'>
				<SelectedEffects selectedIDs={props.selectedIDs} deselectEffect={props.deselectOne} />
			</div>
			{EffectsData.map((effect) => {
				if (!props.selectedIDs.includes(effect.id)) {
					return (
						<Effect
							key={"z" + effect.id}
							id={effect.id}
							selectEffect={props.selectOne}
							isDisabled={disableAddButtons}
						/>
					);
				}
			})}
			{/* <Combinations selectedEffectsIDs={selectedEffectsIDs} />
			<EffectsResults selectedEffectsIDs={selectedEffectsIDs} /> */}
		</>
	);
}
