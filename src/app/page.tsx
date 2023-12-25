import Header from "@/components/Header";
import home from "./home.module.css";
import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
	return (
		<div className="sticky top-0 bg-peach-50 rounded-t-xl">
			<h2 className="text-center text-2xl font-bold">
				Dash<span className="text-peach-400">board</span>
			</h2>
			<section className="grid grid-cols-2 gap-3 mx-5 my-2">
				<Card className="bg-peach-400 h-40 text-center font-bold text-peach-50 text-lg">
					<h3>Tables</h3>
					<div className="text-center pt-4 w-full">
						<meter
							value="5"
							min="0"
							max="10"
							className={`${home.meter} h-12 w-2/3`}
						>
							5/10
						</meter>
						<p className="text-xs font-medium">5/10</p>
						<p className="text-xs font-medium">occupied</p>
					</div>
				</Card>
				<Card className="bg-peach-100 h-40 text-center font-bold text-peach-400 text-lg">
					<h3>Staff</h3>
					<div className="text-center pt-4 w-full">
						<meter
							value="5"
							min="0"
							max="10"
							className={`${home.meter} h-12 w-2/3`}
						>
							5/10
						</meter>
						<p className="text-xs font-medium">5/10</p>
						<p className="text-xs font-medium">present</p>
					</div>
				</Card>
			</section>
			<Card className="text-peach-950 font-bold bg-peach-50 mx-5 mt-3">
				<h3 className="-mb-1">
					Last <span className="text-peach-400">Order</span>
				</h3>
				<span className="text-peach-400 text-[0.6rem] font-normal opacity-40">
					Order Id:{" "}
					<span className="text-peach-950">
						OID-01HHYP1YCK8002WTCYZ53AVSEZ-1702910601876
					</span>
				</span>
				<div className="flex justify-between">
					<ol className="text-xs font-semibold list-disc ml-3 grow">
						<li>
							Chicken Pakora<span className="text-peach-400 ml-2">x2</span>
						</li>
						<li>
							Chicken Pakora<span className="text-peach-400 ml-2">x2</span>
						</li>
						<li>
							Chicken Pakora<span className="text-peach-400 ml-2">x2</span>
						</li>
						<li>
							Chicken Pakora<span className="text-peach-400 ml-2">x2</span>
						</li>
						<li>
							Chicken Pakora<span className="text-peach-400 ml-2">x2</span>
						</li>
					</ol>
					<ol className="text-xs font-semibold list-disc ml-3 grow">
						<li>Dezire</li>
						<li>+91 1234 567890</li>
						<li>
							Table<span className="text-peach-400 ml-2">1</span>
						</li>
						<li>
							Status:<span className="text-peach-400 ml-2">Pending</span>
						</li>
						<li>
							Chicken Pakora<span className="text-peach-400 ml-2">x2</span>
						</li>
					</ol>
				</div>
			</Card>
			<Card className="text-peach-950 font-bold bg-peach-50 mx-5 mt-3">
				<h3 className="-mb-1">
					Last <span className="text-peach-400">Session</span>
				</h3>
				<span className="text-peach-400 text-[0.6rem] font-normal opacity-40">
					Session Id:{" "}
					<span className="text-peach-950">
						SID-01HHYP1YCK8002WTCYZ53AVSEZ-1702910601876
					</span>
				</span>
				<div className="flex justify-between">
					<div>
						<ol className="text-xs font-semibold list-disc ml-3 grow">
							<li>Test User 2</li>
							<li>Table 2</li>
							<li>+91 1234 567890</li>
							<li>
								Mode: <span className="text-peach-400">UPI/Cash</span>
							</li>
						</ol>
						<p className="text-sm mt-2">
							Amount: <span className="text-peach-400">Rs. 400</span>
						</p>
					</div>
					<Image
						src={"/sample-qr.png"}
						height={300}
						width={300}
						alt="sample-qr"
						className="w-24 h-24"
					/>
				</div>
			</Card>
		</div>
	);
}
