import FilterInput from "../UI/FilterInput";
import Toggle from "../UI/Toggle";

export default function CombinationsOptions(props) {
	return (
		<div className='sticky z-30 flex h-10 py-2 bg-white border-b-2 border-black top-[26px]'>
			<FilterInput updateFilter={props.updateCombinationsFilter} />
			<div className='flex-1 pr-2 text-right'>
				<Toggle
					toggleStrictMode={props.toggleStrictMode}
					strictMode={props.strictMode}
				/>{" "}
				Strict Mode
			</div>
		</div>
	);
}
