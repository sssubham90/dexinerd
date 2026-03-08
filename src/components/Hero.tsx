import { Content, Portal, Root, Trigger } from "@radix-ui/react-hover-card";
import OrangeArrowDown from "../assets/svg/OrangeArrowDown.svg?react";
import HeroImage from "../assets/webp/Hero.webp";

function Hero() {
	return (
		<div className="px-14.75 pt-19.75 my-4 mx-auto max-w-380.25 flex flex-row justify-between bg-white rounded-2xl max-[1553px]:mx-4 max-[955px]:px-4 max-[850px]:flex-col max-[850px]:pt-8">
			<div className="flex-1 flex flex-col justify-items-start">
				<div className="size-26 rounded-full bg-linear-to-br from-0%-100% from-[#F8F8F8] to-[#E7E7E7] p-5 mb-28 max-[1440px]:mb-20 max-[850px]:hidden max-[1440px]:size-19 max-[1440px]:p-4">
					<Root openDelay={0} closeDelay={0}>
						<Trigger asChild>
							<div>
								<OrangeArrowDown
									className="size-16 rounded-full cursor-pointer fill-[#DD5D18] hover:fill-[#8D58FF] max-[1440px]:size-11"
									onClick={() =>
										window.scrollTo({
											top:
												(document.getElementById("portfolio")?.offsetTop ??
													120) - 120,
											behavior: "smooth",
										})
									}
								/>
							</div>
						</Trigger>
						<Portal>
							<Content side="right" sideOffset={36}>
								<p className="font-normal text-lg">
									Take me to the Projects now!
								</p>
							</Content>
						</Portal>
					</Root>
				</div>
				<button
					type="button"
					className="flex flex-row mx-auto items-center justify-between min-w-52 p-1.5 my-6 border border-[#2F2F2F] rounded-4xl select-none min-[850px]:hidden bg-transparent cursor-pointer hover:border-[#DD5D18] transition-colors"
					onClick={() =>
						window.scrollTo({
							top:
								(document.getElementById("portfolio")?.offsetTop ?? 120) - 120,
							behavior: "smooth",
						})
					}
				>
					<div className="w-9 h-9 rounded-full bg-linear-to-br from-0%-100% from-[#F8F8F8] to-[#E7E7E7] p-1.5">
						<OrangeArrowDown className="w-6 h-6 rounded-full cursor-pointer fill-[#DD5D18] hover:fill-[#8D58FF]" />
					</div>
					<p className="font-normal text-xs px-2.5">
						Take me to the Projects now!
					</p>
				</button>
				<div className="w-full pb-5.5 max-[850px]:text-center">
					<h2 className="text-[#DD5D18] text-lg font-medium my-1 max-[1232px]:text-[16px]">
						Namaste!
					</h2>
					<h1 className="text-[#171717] text-[50px] font-semibold max-[1440px]:text-[40px] max-[1232px]:text-[32px] max-[512px]:text-[24px]">
						I’m Sourav Rout,
					</h1>
					<h1 className="text-[#171717] text-[50px] font-semibold mb-0.5 max-[1440px]:text-[40px] max-[1232px]:text-[32px] max-[512px]:text-[24px]">
						a U<span className="text-[#DD5D18]">X</span>/U
						<span className="text-[#DD5D18]">I</span> Designer from India.
					</h1>
					<p className="text-[#2F2F2F] text-lg font-normal leading-[191%] my-6 max-[1232px]:text-[16px]">
						I see design as a bridge between ideas and emotions, connecting
						needs with aspirations. Every detail contributes to a larger story -
						one that resonates, elevates, and speaks without words.
					</p>
					<button
						type="button"
						className="border-2 border-[#DD5D18] bg-[#DD5D18] hover:bg-[#8D58FF] text-white text-lg font-normal py-3 px-6 rounded-full my-2 cursor-pointer max-[1232px]:text-[16px]"
						onClick={() =>
							window.open("https://www.instagram.com/dexinerd.life", "_blank")
						}
					>
						My Design Ideas
					</button>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center">
				<div className="mt-auto">
					<img src={HeroImage} alt="Hero" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
