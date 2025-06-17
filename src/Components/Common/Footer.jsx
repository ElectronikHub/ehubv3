import React from "react";

const Footer = () => (
  <footer className="bg-primary text-tertiary py-8 ">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6 px-4 border-t border-secondary w-11/12 mx-auto">
      <div className="mt-7 w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 uppercase">
          <img src="/Assets/Logo.png" alt="EHUB LOGO" className="w-12" />
          <span className="archivo-black-regular text-lg">
            Electronik <span className="text-secondary">Hub</span>
          </span>
        </div>
        <div className="text-center md:text-left">
          <div>
            <a
              href="https://www.google.com/maps?q=Electronik+Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary block hover:underline"
            >
              Lorenville Subdivision, Cabanatuan City
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/OfficialElectronikHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook/OfficialElectronikHUB
            </a>
          </div>
          <div>
            <a href="tel:09955508009" className="hover:underline">
              0995 550 8009
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <img src="/Assets/Logo.png" alt="Footer Visual 1" className="w-20" />
          <img src="/Assets/Logo.png" alt="Footer Visual 2" className="w-20" />
        </div>
      </div>
    </div>
    <div className="text-center text-xs mt-6 text-tertiary opacity-70">
      &copy; {new Date().getFullYear()} Electronik Hub. All rights reserved.
    </div>
  </footer>
);




export default Footer;
