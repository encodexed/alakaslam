import { Switch } from "@headlessui/react";

export default function Toggle(props) {
   const toggleStrictMode = () => {
		props.toggleStrictMode();
	};

	return (
      <>
			<Switch
				checked={props.strictMode}
				onChange={toggleStrictMode}
				className={`${
					props.strictMode ? "bg-red-600" : "bg-slate-600 opacity-20"
				} relative inline-flex h-5 ml-1 w-10 items-center rounded-full`}
			>
				<span
					className={`${
						props.strictMode ? "translate-x-6" : "translate-x-1"
					} inline-block h-3 w-3 transform rounded-full bg-white transition`}
				/>
         </Switch>
		</>
	);
}
