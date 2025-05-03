import HeadingLogo from "../assets/svg/HeadingLogo.svg";

function Footer() {
  return (
    <div className="flex flex-col px-[calc((100vw-1520px)/2)] [@media(max-width:1520px)]:px-4 pt-[116px] pb-[54px] bg-white">
      <div className="flex flex-row flex-wrap justify-between [@media(max-width:1520px)]:w-[calc(100vw-32px)]">
        <div className="flex flex-col flex-grow">
          <img
            src={HeadingLogo}
            alt="Dexinerd"
            className="w-[355px] [@media(max-width:400px)]:w-full"
          />
          <p className="text-lg text-[#2F2F2F] font-medium leading-[191%] mt-[68px] mb-[50px] max-w-[688px]">
            With Dexinerd, design isn't just a craft — it's a journey of
            creativity, purpose, and meaningful connections
          </p>
          <p className="text-lg text-[#2F2F2F] font-medium leading-[191%] mt-[68px] mb-[50px]">
            Bengaluru, Karnataka, India
          </p>
        </div>
        <div className="flex flex-row gap-[144px] [@media(max-width:1520px)]:gap-20 [@media(max-width:1024px)]:gap-15">
          <div className="flex flex-col">
            <h3 className="text-2xl text-[#DD5D18] font-medium leading-[191%]">
              Navigation
            </h3>
            <div className="flex flex-col gap-2 mt-[50px] text-lg text-[#2F2F2F] font-medium leading-[191%]">
              <a href="/" className="inline-flex mr-auto">
                Home
              </a>
              <a href="/" className="inline-flex mr-auto">
                Exhibition
              </a>
              <a href="#aboutme" className="inline-flex mr-auto">
                About me
              </a>
              <a href="/" className="inline-flex mr-auto">
                Portfolio
              </a>
              <a href="#faqs" className="inline-flex mr-auto">
                FAQs
              </a>
              <a href="/" className="inline-flex mr-auto">
                Blogs
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl text-[#DD5D18] font-medium leading-[191%]">
              Contact
            </h3>
            <div className="flex flex-col gap-2 mt-[50px] text-lg text-[#2F2F2F] font-medium leading-[191%]">
              <a
                href="mailto:hisourav@dexinerd.com"
                target="_blank"
                className="inline-flex mr-auto"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/souravroutsr"
                target="_blank"
                className="inline-flex mr-auto"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/mr_souravsr"
                target="_blank"
                className="inline-flex mr-auto"
              >
                X
              </a>
              <a
                href="https://www.behance.net/souravrout"
                target="_blank"
                className="inline-flex mr-auto"
              >
                Behance
              </a>
              <a
                href="https://dribbble.com/souravrout"
                target="_blank"
                className="inline-flex mr-auto"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1520px] [@media(max-width:1520px)]:w-[calc(100vw-32px)] h-0.5 bg-black/17 my-12 mx-auto"></div>

      <div className="[@media(max-width:1520px)]:w-[calc(100vw-32px)] flex flex-row justify-between items-center text-lg text-[#2F2F2F] font-medium leading-[191%]">
        <h2>
          Copyright @ 2025 <span className="text-[#DD5D18]">Dexinerd</span>. All
          Rights Reserved.
        </h2>
        <h2>
          Designed by <span className="text-[#DD5D18]">Sourav Rout</span>
        </h2>
      </div>
    </div>
  );
}

export default Footer;
