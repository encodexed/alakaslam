import { useState, useEffect, useRef } from "react";

export default function FilterInput(props) {
	const searchTermRef = useRef("");
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		// If 'Clear Filter' button is clicked or no input is detected, immediately show all results again.
		if (searchTerm === "") {
			props.updateFilter(searchTerm);
		}

		// Delays filter so it doesn't apply on each keystroke
		const typingTimer = setTimeout(() => {
			props.updateFilter(searchTerm);
		}, 300);

		return () => {
			// Clean Up - Resets timer with each keystroke
			clearTimeout(typingTimer);
		};
	}, [props, searchTerm]);

	const updateSearchTerm = (e) => {
		setSearchTerm(e.target.value);
	};

	const clearSearchTerm = (e) => {
		setSearchTerm("");
		searchTermRef.current.focus();
	};

	const buttonStyle = "border rounded-lg ml-2 px-1";
	const clearFilterStyle = searchTerm
		? `${buttonStyle} text-white bg-red-600 shadow-sm`
		: `hidden`;

	return (
		<div className='flex-1 pl-2'>
			<input
				ref={searchTermRef}
				type='text'
				onChange={updateSearchTerm}
				value={searchTerm}
				className='h-6 p-1 ml-1 border rounded-lg'
				placeholder='Filter'
			/>
			<button onClick={clearSearchTerm} className={clearFilterStyle}>
				Clear Filter
			</button>
		</div>
	);
}
