import { cn } from "@/lib/utils";
import React from "react";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<div
			className={cn(
				"p-5 flex flex-col h-44 justify-end bg-gradient-to-br from-peach-200 to-peach-50 to-40%",
				className
			)}
		>
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
