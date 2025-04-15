import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import KatyImage from "../About_Katy/katy.png";
import Delmar from "../About_Katy/logo.png"
import Sentinal from "../About_Katy/hogo.png"
import National from "../About_Katy/mogo.png"
const TheCard = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row max-w-5xl w-full shadow-xl rounded-2xl overflow-hidden">
        <div className="md:w-1/2 bg-yellow-400 flex items-center justify-center p-4">
          <img
            src={KatyImage}
            alt="Kathryn Murphy"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 text-gray-700">
          <p className="uppercase text-sm font-semibold tracking-wider text-gray-500">Speaker</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Kathryn Murphy</h2>
          <p className="text-lg text-gray-600 mb-4">Analyst and Marketing specialist in IT company</p>
          <p className="text-sm leading-relaxed">
            Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate
            venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi
            odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra.
            Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique
            sollicitudin interdum quam.
          </p>
          <div className="flex items-center space-x-6 mt-6">
            <Facebook className="text-gray-600 hover:text-blue-600 cursor-pointer w-5 h-5" />
            <Instagram className="text-gray-600 hover:text-pink-500 cursor-pointer w-5 h-5" />
            <Twitter className="text-gray-600 hover:text-sky-400 cursor-pointer w-5 h-5" />
            <Linkedin className="text-red-600 hover:text-blue-700 cursor-pointer w-5 h-5" />
          </div>
          <div className="flex items-center gap-6 mt-8 opacity-60">
            <img src={Delmar} alt="Del Mar" width={100} height={24} />
            <img src={Sentinal} alt="Sentinal" width={100} height={24} />
            <img src={National} alt="National" width={100} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCard;
