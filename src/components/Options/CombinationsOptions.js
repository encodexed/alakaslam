import FilterInput from "../UI/FilterInput";
import Toggle from "../UI/Toggle";

export default function CombinationsOptions(props) {
	return (
		<>
			{/* Output on small-large screens */}
			<div className='hidden sticky z-30 xxs:flex h-10 py-2 bg-white border-b-2 border-black top-[26px]'>
				<FilterInput updateFilter={props.updateCombinationsFilter} />
				<div className='flex-1 pr-2 text-right'>
					<Toggle
						toggleStrictMode={props.toggleStrictMode}
						strictMode={props.strictMode}
					/>{" "}
					Strict Mode
				</div>
			</div>
			{/* Output on extra-small screens */}
			<div className='flex xxs:hidden sticky z-30 h-10 py-2 bg-white border-b-2 border-black top-[26px]'>
				<FilterInput updateFilter={props.updateCombinationsFilter} />
				<div className='pr-2 text-sm text-right xxs:flex-1'>
					<Toggle
						toggleStrictMode={props.toggleStrictMode}
						strictMode={props.strictMode}
					/>{" "}
					Strict Mode
				</div>
			</div>
		</>
	);
}
