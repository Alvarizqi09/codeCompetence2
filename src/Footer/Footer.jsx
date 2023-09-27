import logo from "/src/assets/logo.png";
import facebook from "/src/assets/facebook.png";
import github from "/src/assets/github.png";
import linkedin from "/src/assets/linkedin.png";
import instagram from "/src/assets/instagram.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-600 to-gray-900 shadow-lg text-white w-full">
      <div className="container flex flex-wrap justify-between items-center p-1">
        <div className="image">
          <img
            className="logo w-60 h-20 my-4"
            src={logo}
            title="logo"
            alt="logo1"
          />
          <div className="socialmedia flex gap-2">
            <a
              href="https://www.facebook.com/faizada.alvarizqi/"
              title="facebook"
            >
              <img 
              src={facebook} 
              alt="facebook"
              className="w-20 h-20" />
            </a>
            <a href="https://instagram.com/alvarizqi__" title="instagram">
              <img src={instagram} alt="instagram" className="w-20 h-20" />
            </a>
            <a
              href="https://linkedin.com/in/alvarizqi-7a2169223"
              title="linkedln"
            >
              <img src={linkedin} alt="linkedln" className="w-20 h-20"/>
            </a>
            <a href="https://github.com/Alvarizqi09" title="github">
              <img src={github} alt="github" className="w-20 h-20"/>
            </a>
          </div>
        </div>
        <div className="footer-center justify-center items-center my-4">
          <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
          <div className="flex items-center mb-2">
            <i className="fas w-10 h-10 bg-gray-700 text-white text-center pt-2 rounded-full text-xl mr-2">
              <FontAwesomeIcon icon={faLocationDot} />
            </i>
            <a
              href="https://goo.gl/maps/YZ72dAiKACBDbDCu6"
              className="text-white"
            >
              <p>
                <span>Gunung Pati</span> Semarang, Indonesia
              </p>
            </a>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas w-10 h-10 bg-gray-700 text-white text-center pt-2 rounded-full text-xl mr-2">
              <FontAwesomeIcon icon={faPhone} />
            </i>            
            <a href="https://wa.me/6281327963181" className="text-white">
              <p>+62 81327963181</p>
            </a>
          </div>
          <div className="flex items-center">
            <i className="fas w-10 h-10 bg-gray-700 text-white text-center pt-2 rounded-full text-xl mr-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>            <p>
              <a href="mailto:alvarizki80@gmail.com" className="text-white">
                alvarizki80@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="help justify-end items-center">
          <h2 className="text-2xl font-semibold p-2">Anything else?</h2>
          <ul className="text-white py-1 space-y-6">
            <li>
              <a href="#" className="text-white p-2">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="text-white p-2">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-white p-2">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white p-2">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className='grid grid-row-2 gap-4 place-content-center text-center font-semibold place-content-center'>
        <p className="text-center text-gray-300 mt-5 text-xs">
          © 2021 Eventify. All rights reserved. Alvarizqi09
        </p>
      </section>
    </footer>
  );
}

export default Footer;
