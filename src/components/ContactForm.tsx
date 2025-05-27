import { useState } from "react";
import axios from "axios";
import Mail from "../assets/svg/Mail.svg";
import Marker from "../assets/svg/Marker.svg";
import Linkedin from "../assets/svg/Linkedin.svg";
import Behance from "../assets/svg/Behance.svg";
import Dribble from "../assets/svg/Dribble.svg";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      axios
        .post("https://api.dexinerd.com", formData)
        .then(() => {
          alert("Form submitted successfully!");
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-6">
        <label htmlFor="fullName" className="block text-lg font-normal mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gray-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-normal mb-1">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gray-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-lg font-normal mb-1">
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gray-500"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-lg font-normal mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-gray-500 resize-none"
        />
      </div>

      <button
        type="submit"
        className="border-2 border-[#DD5D18] bg-[#DD5D18] hover:bg-[#8D58FF] text-white font-normal py-3 px-6 rounded-[32px] cursor-pointer"
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
      className="scroll-mt-30 mt-20 mb-40 py-32 px-17.5 max-w-[1520px] mx-auto bg-white rounded-2xl flex flex-row flex-wrap justify-between items-center gap-y-18 [@media(max-width:1553px)]:mx-4 [@media(max-width:1553px)]:mb-20 [@media(max-width:1207px)]:px-4 [@media(max-width:686px)]:flex-col"
    >
      <div className="flex-6 flex flex-col justify-between items-start gap-18 [@media(min-width:686px)]:min-w-[622px] [@media(max-width:686px)]:w-full">
        <div className="w-full max-w-[622px]">
          <h3 className="font-medium text-lg text-[#DD5D18] leading-[191%]">
            Get in Touch
          </h3>
          <p className="font-normal text-4xl text-black leading-[156%] mb-6.5">
            Would love to <br />
            Connect and Collaborate
          </p>
          <p className="font-normal text-lg text-[#2F2F2F] leading-[191%] [@media(max-width:760px)]:w-full">
            I'm always open to new ideas and collaborations. Fill in your
            details, and you can expect a response from me to talk more about
            design and exchange ideas.
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-start [@media(max-width:375px)]:flex-row [@media(max-width:375px)]:justify-between [@media(max-width:375px)]:items-center">
          <div className="flex flex-row justify-start items-center gap-4">
            <img src={Mail} alt="Mail" className="w-[22.5px] h-[17.5px]" />
            <p className="font-normal text-lg text-black leading-[191%] [@media(max-width:375px)]:hidden">
              hisourav@dexinerd.com
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <img
              src={Marker}
              alt="Marker"
              className="w-[18px] h-[23px] mx-0.5"
            />
            <p className="font-normal text-lg text-black leading-[191%] [@media(max-width:375px)]:hidden">
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
      <div className="flex-4 px-20 [@media(max-width:1340px)]:px-4 [@media(min-width:478px)]:min-w-[414px] [@media(max-width:478px)]:w-full">
        <Form />
      </div>
    </div>
  );
}

export default ContactForm;
