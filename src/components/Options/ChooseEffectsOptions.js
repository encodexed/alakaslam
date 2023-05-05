import FilterInput from "../UI/FilterInput";

export default function ChooseEffectsOptions(props) {
	return (
		<div className='sticky z-30 flex h-10 py-2 bg-white border-b-2 border-black top-[26px]'>
			<FilterInput updateFilter={props.updateEffectsFilter} />
		</div>
	);
}
