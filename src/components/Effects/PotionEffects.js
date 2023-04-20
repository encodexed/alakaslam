import SectionHeader from "../UI/SectionHeader";
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
			{EffectsData.map((effect) => {
				let isSelected = false;
				if (selectedEffectsIDs.includes(effect.id)) {
					isSelected = true;
				}
				return (
					<Effect
						key={"z" + effect.id}
						id={effect.id}
						selectEffect={selectEffect}
						deselectEffect={deselectEffect}
						isDisabled={disableAddButtons}
						isSelected={isSelected}
					/>
				);
			})}
			<Combinations selectedEffectsIDs={selectedEffectsIDs} />
			<EffectsResults selectedEffectsIDs={selectedEffectsIDs} />
		</>
	);
}
