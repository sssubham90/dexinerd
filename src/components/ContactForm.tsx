import axios from "axios";
import { useState } from "react";
import Behance from "../assets/svg/Behance.svg";
import Dribble from "../assets/svg/Dribble.svg";
import Linkedin from "../assets/svg/Linkedin.svg";
import Mail from "../assets/svg/Mail.svg";
import Marker from "../assets/svg/Marker.svg";
import { useAlert } from "../hooks/useAlert";

function Form() {
	const alert = useAlert();
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		axios
			.post("https://api.dexinerd.com", formData)
			.then(() => {
				alert(
					"Response shared successfully. We will contact you soon.",
					"success",
				);
			})
			.catch((error) => {
				alert("Unable to share your response.", "error");
				console.error("Error submitting form:", error);
			});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full min-w-[360px] max-[425px]:min-w-[0px]"
		>
			<div className="mb-6">
				<label
					htmlFor="fullName"
					className="block text-lg font-normal mb-1 max-[1440px]:text-[16px]"
				>
					Full Name <span className="text-red-500">*</span>
				</label>
				<input
					type="text"
					id="fullName"
					name="fullName"
					autoComplete="name"
					required
					value={formData.fullName}
					onChange={handleChange}
					className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gray-500 max-[1440px]:text-[16px]"
				/>
			</div>

			<div className="mb-6">
				<label
					htmlFor="email"
					className="block text-lg font-normal mb-1 max-[1440px]:text-[16px]"
				>
					Email address <span className="text-red-500">*</span>
				</label>
				<input
					type="email"
					id="email"
					name="email"
					autoComplete="email"
					required
					value={formData.email}
					onChange={handleChange}
					className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gray-500 max-[1440px]:text-[16px]"
				/>
			</div>

			<div className="mb-6">
				<label
					htmlFor="phone"
					className="block text-lg font-normal mb-1 max-[1440px]:text-[16px]"
				>
					Phone number <span className="text-red-500">*</span>
				</label>
				<input
					type="tel"
					id="phone"
					name="phone"
					autoComplete="mobile"
					required
					value={formData.phone}
					onChange={handleChange}
					className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gray-500 max-[1440px]:text-[16px]"
				/>
			</div>

			<div className="mb-8">
				<label
					htmlFor="message"
					className="block text-lg font-normal mb-1 max-[1440px]:text-[16px]"
				>
					Message <span className="text-red-500">*</span>
				</label>
				<textarea
					id="message"
					name="message"
					required
					value={formData.message}
					onChange={handleChange}
					rows={4}
					className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gray-500 resize-none max-[1440px]:text-[16px]"
				/>
			</div>

			<button
				type="submit"
				className="border-2 text-lg border-[#DD5D18] bg-[#DD5D18] hover:bg-[#8D58FF] text-white font-normal py-3 px-6 rounded-[32px] cursor-pointer max-[1440px]:text-[16px]"
			>
				Connect now
			</button>
		</form>
	);
}

function ContactForm() {
	return (
		<div
			id="contact"
			className="scroll-mt-30 mt-20 mb-40 py-32 px-[59px] max-w-[1521px] mx-auto bg-white rounded-2xl flex flex-row justify-between items-center gap-y-18 max-[1553px]:mx-4 max-[1553px]:mb-20 max-[1440px]:py-24 max-[1207px]:px-4 max-[768px]:flex-col max-[768px]:items-start gap-4"
		>
			<div className="flex flex-1 flex-col justify-between items-start gap-18">
				<div className="w-full max-w-[622px]">
					<h3 className="font-medium text-lg text-[#DD5D18] leading-[191%] max-[1440px]:text-[16px]">
						Get in Touch
					</h3>
					<p className="font-normal text-4xl text-black leading-[156%] mb-6.5 max-[1440px]:text-[20px]">
						Would love to <br />
						Connect and Collaborate
					</p>
					<p className="font-normal text-lg text-[#2F2F2F] leading-[191%] max-[760px]:w-full max-[1440px]:text-[16px]">
						I'm always open to new ideas and collaborations. Fill in your
						details, and you can expect a response from me to talk more about
						design and exchange ideas.
					</p>
				</div>
				<div className="flex flex-col gap-2 justify-center items-start max-[375px]:flex-row max-[375px]:justify-between max-[375px]:items-center">
					<div className="flex flex-row justify-start items-center gap-4">
						<img src={Mail} alt="Mail" className="w-[22.5px] h-[17.5px]" />
						<p className="font-normal text-lg text-black leading-[191%] max-[1440px]:text-[16px] max-[375px]:hidden">
							hisourav@dexinerd.com
						</p>
					</div>
					<div className="flex flex-row justify-start items-center gap-4">
						<img
							src={Marker}
							alt="Marker"
							className="w-[18px] h-[23px] mx-0.5"
						/>
						<p className="font-normal text-lg text-black leading-[191%] max-[1440px]:text-[16px]  max-[375px]:hidden">
							Bengaluru, Karnataka, India
						</p>
					</div>
				</div>
				<div className="flex flex-row justify-start items-center gap-6">
					<img
						src={Linkedin}
						onClick={() =>
							window.open("https://www.linkedin.com/in/souravroutsr", "_blank")
						}
						alt="Linkedin"
						className="w-[28.31px] h-[28.31px] cursor-pointer"
					/>
					<img
						src={Behance}
						onClick={() =>
							window.open("https://www.behance.net/souravrout", "_blank")
						}
						alt="Behance"
						className="w-[30.88px] h-[30.88px] cursor-pointer"
					/>
					<img
						src={Dribble}
						onClick={() =>
							window.open("https://dribbble.com/souravrout", "_blank")
						}
						alt="Dribble"
						className="w-[28.42px] h-[28.42px] cursor-pointer"
					/>
				</div>
			</div>
			<div className="flex flex-1 flex-col px-20 max-[1340px]:px-4 w-full">
				<Form />
			</div>
		</div>
	);
}

export default ContactForm;
