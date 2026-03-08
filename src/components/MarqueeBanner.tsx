import Marquee from "react-fast-marquee";
import Cross from "../assets/svg/Cross.svg";
import CrossOutlined from "../assets/svg/CrossOutlined.svg";

function MarqueeItem({ index }: { index: number }) {
	return (
		<>
			<div className="inline-block whitespace-nowrap px-2.5 py-2.5">
				<h3>{index % 2 === 0 ? "Life, by Design" : "Designs, by Sourav"}</h3>
			</div>
			<img
				src={index % 2 === 0 ? CrossOutlined : Cross}
				alt="cross"
				className="inline-block w-8.5 h-5 max-[768px]:w-6.5 max-[768px]:h-4"
			/>
		</>
	);
}

function MarqueeBanner() {
	return (
		<Marquee className="font-normal text-[50px] text-[#171717] max-[1440px]:text-[40px] max-[1232px]:text-[32px] max-[512px]:text-[24px]">
			{Array(6)
				.fill(null)
				.map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: This is a static list and won't change, so using index as key is acceptable here.
					<MarqueeItem key={index} index={index} />
				))}
		</Marquee>
	);
}
export default MarqueeBanner;

//
