import EffectsData from "../../../app_data/EffectsData";
import UnfilteredEffect from "./UnfilteredEffect";

export default function Effect(props) {
	const effect = EffectsData[props.id];
	const { name, summary } = effect;

	if (!props.filter) {
		return (
			<UnfilteredEffect id={props.id} selectEffect={props.selectEffect} />
		);
	} else {
		let filterThisEffect = true;
		let allContent = (name + "," + summary).toLowerCase();
		if (allContent.search(props.filter.toLowerCase()) >= 0) {
			filterThisEffect = false;
		}

		if (!filterThisEffect) {
			return (
				<UnfilteredEffect id={props.id} selectEffect={props.selectEffect} />
			);
		} else {
			return <></>;
		}
	}
}
