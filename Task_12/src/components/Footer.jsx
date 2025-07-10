import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-14 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm text-gray-700">

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-10" />
          </div>
          <p>
            3755 St SE Salem, Corner with Sunny Boulevard,
            <br />
            37557, Australia
          </p>
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-blue-700" />
            (305) 555-4446
          </p>
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-700" />
            youremail@gmail.com
          </p>

          <div className="flex space-x-4 text-xl mt-2 text-blue-600">
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Explore</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/about">About Us</Link>
            <Link to="/projects">Our Projects</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/testimonials">Testimonial</Link>
            <Link to="/appointment">Appointment</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Links</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/buying">Home Buying</Link>
            <Link to="/selling">Home Selling</Link>
            <Link to="/real-estate">Real Estate</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">T&C</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/property-sale">Property on Sale</Link>
            <Link to="/about">About Us</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Subscribe</h3>
          <p className="mb-4">
            Sign up for our newsletter to get the latest updates and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-l-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              className="bg-[#254B86] text-white px-4 py-2 rounded-r-md hover:bg-blue-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
