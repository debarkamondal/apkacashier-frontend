import React from "react";

const Header = () => {
	return (
		<div className="p-5 flex flex-col h-44 justify-end">
			<h1 className="text-4xl font-medium">Hi!</h1>
			<h2 className="text-3xl font-semibold text-peach-400">Dezire</h2>
			<p>
				Welcome to{" "}
				<span className="font-semibold">
					Apka<span className="text-peach-400">Cashier</span>
				</span>
			</p>
		</div>
	);
};

export default Header;
