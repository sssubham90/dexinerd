import Goto from "../assets/svg/Goto.svg?react";

function Portfolio() {
	return (
		<div
			id="portfolio"
			className="scroll-mt-30 my-27 mx-40 flex flex-row justify-between items-center bg-[#F8F8F8] max-[1120px]:mx-4 max-[1120px]:my-25 max-[840px]:my-10"
		>
			<div className="grow-527"></div>

			<div className="w-253">
				<h2 className="font-medium text-2xl text-[#DD5D18] max-[1440px]:text-[20px]">
					Portfolio
				</h2>
				<h3 className="font-medium text-2xl text-[#2F2F2F] mt-0.5 mb-14 max-[1440px]:text-[20px]">
					What do I have in store?
				</h3>
				<div className="font-normal text-[33px] leading-[174%] max-[1440px]:text-[24px]">
					<button
						type="button"
						className="flex flex-row justify-start items-center w-full border-b border-black/20 cursor-pointer fill-[#DD5D18] hover:text-[#8D58FF] hover:fill-[#8D58FF] bg-transparent border-none p-0 text-left"
						onClick={() =>
							window.open("https://souravrout.myportfolio.com/uiux", "_blank")
						}
					>
						<p className="p-2.5">UI/UX Designs</p>
						<Goto className="w-4 h-9 inline-block" />
					</button>
					<button
						type="button"
						className="flex flex-row justify-start items-center w-full border-b border-black/20 cursor-pointer fill-[#DD5D18] hover:text-[#8D58FF] hover:fill-[#8D58FF] bg-transparent border-none p-0 text-left"
						onClick={() =>
							window.open(
								"https://souravrout.myportfolio.com/casestudy",
								"_blank",
							)
						}
					>
						<p className="p-2.5">Case Studies</p>
						<Goto className="w-4 h-9 inline-block" />
					</button>
					<button
						type="button"
						className="flex flex-row justify-start items-center w-full border-b border-black/20 cursor-pointer fill-[#DD5D18] hover:text-[#8D58FF] hover:fill-[#8D58FF] bg-transparent border-none p-0 text-left"
						onClick={() =>
							window.open(
								"https://souravrout.myportfolio.com/graphic",
								"_blank",
							)
						}
					>
						<p className="p-2.5">Graphic Designs</p>
						<Goto className="w-4 h-9 inline-block" />
					</button>
					<button
						type="button"
						className="flex flex-row justify-start items-center w-full border-b border-black/20 cursor-pointer fill-[#DD5D18] hover:text-[#8D58FF] hover:fill-[#8D58FF] bg-transparent border-none p-0 text-left"
						onClick={() =>
							window.open("https://souravrout.myportfolio.com/reels", "_blank")
						}
					>
						<p className="p-2.5">Reels</p>
						<Goto className="w-4 h-9 inline-block" />
					</button>
				</div>
			</div>

			<div className="grow-328"></div>
		</div>
	);
}

export default Portfolio;
