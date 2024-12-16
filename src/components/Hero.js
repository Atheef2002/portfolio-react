import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import HeroImag from '../IMG/AYU_6668.JPG';

export default function Hero() {

    const config = {
        Subtitle:'Im a full-stack developer',
        Social:{
            Facbook:'https://www.facebook.com/',
            Linkedin:'https://lk.linkedin.com/',
            Twitter:'https://x.com/?lang=en',
            
        }
    };

    return (
        <section className="flex px-5 py-32 hero-section-bg text-6xl flex-col md:flex-row items-center justify-center">
            {/* Left Section: Text and Social Icons */}
            <div className="flex flex-col md:items-start md:w-1/2">
                <h1 className="font-hero-font whitespace-nowrap md:text-left">
                    Hi, <br /> I'm <span className="text-red-600">BR</span> <br /> Atheef Ahamath
                    <p className="text-2xl mt-4 whitespace-nowrap">{config.Subtitle}</p>
                </h1>
                <div className="flex space-x-4 mt-4 pb-5">
                    <a href={config.Social.Facbook} target="_blank">
                        <FaFacebookSquare className="text-white h-8 w-8 hover:text-gray-400" />
                    </a>
                    <a href={config.Social.Linkedin} target="_blank">
                        <FaLinkedin className="text-white h-8 w-8 hover:text-gray-400" />
                    </a>
                    <a href={config.Social.Twitter} target="_blank">
                        <FaTwitterSquare className="text-white h-8 w-8 hover:text-gray-400" />
                    </a>
                </div>
            </div>

            {/* Right Section: Centered Image */}
            <div className="flex justify-center items-center md:w-1/2">
                <img
                    className="custom-hero-image"
                    src={HeroImag}
                    alt="BR Atheef Ahamath"
                />
            </div>
        </section>
    );
}
