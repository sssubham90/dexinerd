import HeadingLogo from "../assets/svg/HeadingLogo.svg";

function Footer() {
  return (
    <div className="bg-white pt-[116px] pb-[54px]">
      <div className="flex flex-col bg-white mx-auto max-w-[1521px] max-[1553px]:mx-4">
        <div className="flex flex-row flex-wrap justify-between max-[768px]:flex-col max-[768px]:items-start">
          <div className="flex flex-col flex-7 min-[406px]:min-w-[406px]">
            <img
              src={HeadingLogo}
              alt="Dexinerd"
              className="w-[355px] max-[1440px]:w-[300px] max-[400px]:w-full"
            />
            <p className="text-lg text-[#2F2F2F] font-medium leading-[191%] mt-[68px] mb-[50px] max-w-[688px] max-[1440px]:text-[16px]">
              With Dexinerd, design isn't just a craft - it's a journey of
              creativity, purpose, and meaningful connections
            </p>
            <p className="text-lg text-[#2F2F2F] font-medium leading-[191%] mb-[50px] max-[1440px]:text-[16px]">
              Bengaluru, Karnataka, India
            </p>
          </div>
          <div className="flex flex-row flex-3 min-w-[280px] gap-[144px] max-[1521px]:gap-20 max-[1024px]:gap-15 justify-center">
            <div className="flex flex-col">
              <h3 className="text-2xl text-[#DD5D18] font-medium leading-[191%]">
                Navigation
              </h3>
              <div className="flex flex-col gap-2 mt-[50px] text-lg text-[#2F2F2F] font-medium leading-[191%] max-[1440px]:text-[16px]">
                <a
                  href="/"
                  className="inline-flex mr-auto hover:text-[#8D58FF]"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Home
                </a>
                <a
                  href="#aboutme"
                  className="inline-flex mr-auto hover:text-[#8D58FF]"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top:
                        (document.getElementById("aboutme")?.offsetTop ?? 120) -
                        120,
                      behavior: "smooth",
                    });
                  }}
                >
                  About me
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex mr-auto hover:text-[#8D58FF]"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top:
                        (document.getElementById("portfolio")?.offsetTop ??
                          120) - 120,
                      behavior: "smooth",
                    });
                  }}
                >
                  Portfolio
                </a>
                <a
                  href="#faqs"
                  className="inline-flex mr-auto hover:text-[#8D58FF]"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top:
                        (document.getElementById("faqs")?.offsetTop ?? 120) -
                        120,
                      behavior: "smooth",
                    });
                  }}
                >
                  FAQs
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl text-[#DD5D18] font-medium leading-[191%]">
                Contact
              </h3>
              <div className="flex flex-col gap-2 mt-[50px] text-lg text-[#2F2F2F] font-medium leading-[191%] max-[1440px]:text-[16px]">
                <a
                  href="mailto:hisourav@dexinerd.com"
                  target="_blank"
                  className="inline-flex mr-auto hover:text-[#8D58FF]"
                >
                  Email
                </a>
                <a
                  href="https://www.instagram.com/dexinerd.life"
                  target="_blank"
                  className="inline-flex mr-auto hover:text-[#8D58FF]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/souravroutsr"
                  target="_blank"
                  className="inline-flex mr-auto hover:text-[#8D58FF]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/mr_souravsr"
                  target="_blank"
                  className="inline-flex mr-auto hover:text-[#8D58FF]"
                >
                  X
                </a>
                <a
                  href="https://www.behance.net/souravrout"
                  target="_blank"
                  className="inline-flex mr-auto hover:text-[#8D58FF]"
                >
                  Behance
                </a>
                <a
                  href="https://dribbble.com/souravrout"
                  target="_blank"
                  className="inline-flex mr-auto hover:text-[#8D58FF]"
                >
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1520px] max-[1520px]:w-[calc(100vw-32px)] h-0.5 bg-black/17 my-12 mx-auto"></div>

        <div className="max-[1520px]:w-[calc(100vw-32px)] flex flex-row gap-4 justify-between items-center text-lg text-[#2F2F2F] font-medium leading-[191%] max-[1440px]:text-[16px] max-[768px]:flex-col">
          <h2>
            Copyright @ 2025 <span className="text-[#DD5D18]">Dexinerd</span>.
            All Rights Reserved.
          </h2>
          <h2>
            Designed by <span className="text-[#DD5D18]">Sourav Rout</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
