import SelectedEffect from "./SelectedEffect";

export default function SelectedEffects(props) {
   const borderStyle = props.selectedIDs.length > 0 ? 'border-b-2 border-black' : '';
   const style = `flex flex-col w-full ${borderStyle}`;

	return (
		<>
			<div className={style}>
				{props.selectedIDs.length >= 1 && (
					<SelectedEffect
						key={"a" + props.selectedIDs[0]}
						effectID={props.selectedIDs[0]}
						deselectEffect={props.deselectEffect}
					/>
				)}

				{props.selectedIDs.length >= 2 && (
					<SelectedEffect
						key={"a" + props.selectedIDs[1]}
						effectID={props.selectedIDs[1]}
						deselectEffect={props.deselectEffect}
					/>
				)}

				{props.selectedIDs.length >= 3 && (
					<SelectedEffect
						key={"a" + props.selectedIDs[2]}
						effectID={props.selectedIDs[2]}
						deselectEffect={props.deselectEffect}
					/>
				)}
			</div>
      </>
   )
}