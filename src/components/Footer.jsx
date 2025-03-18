import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-bold">Visit Pokhara</h2>
        <p className="text-sm mt-2">
          Experience the beauty of nature and adventure in Nepal’s paradise.
        </p>
        <div className="flex space-x-4 mt-3">
          <a href="#" className="text-white hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-xs mt-4">
          &copy; {new Date().getFullYear()} Visit Pokhara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
