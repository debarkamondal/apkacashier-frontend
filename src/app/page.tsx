import Header from "@/components/Header";
import home from "./home.module.css";

export default function Home() {
	return (
		<div className="bg-gradient-to-br from-peach-200 to-peach-50 to-40% h-full">
			<Header />
			<h2 className="text-center text-2xl font-bold">
				Dash<span className="text-peach-400">board</span>
			</h2>
			<section className="grid grid-cols-2 gap-3 mx-5 my-2">
				<div className="bg-peach-400 h-48 flex flex-col justify-center items-center p-2 font-bold text-peach-50 text-lg">
					<h3>Tables</h3>
					<meter value="5" min="0" max="10" className={home.meter}>
						5/10
					</meter>
					<p className="text-xs font-medium">5/10</p>
					<p className="text-xs font-medium">occupied</p>
				</div>
				<div className="bg-peach-400">
					<meter value="5" min="0" max="10">
						5/10
					</meter>
				</div>
			</section>
		</div>
	);
}
