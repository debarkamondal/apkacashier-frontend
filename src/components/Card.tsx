import { cn } from "@/lib/utils";
import React, { ClassAttributes } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
	return (
		<div className={cn("rounded-md drop-shadow-md p-4", className)}>
			{children}
		</div>
	);
};

export default Card;
