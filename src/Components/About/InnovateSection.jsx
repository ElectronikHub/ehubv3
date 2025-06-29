import React, { useEffect } from "react";

const InnovateSection = () => {
  useEffect(() => {
    // Load Facebook SDK if not already loaded
    if (!window.FB) {
      // Create fb-root div if not present
      if (!document.getElementById("fb-root")) {
        const fbRoot = document.createElement("div");
        fbRoot.id = "fb-root";
        document.body.appendChild(fbRoot);
      }

      // Load the Facebook SDK script asynchronously
      const script = document.createElement("script");
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.FB && window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    } else {
      // If SDK already loaded, parse XFBML to render plugin
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="text-center mt-10 mb-10 pb-6">
      <h2 className="text-3xl md:text-4xl text-secondary font-bold montserrat2-regular">
        Innovate, Connect, & Inspire
      </h2>
      <div className="flex justify-center mt-12 mb-20">
        <div className="w-full max-w-[650px] h-[350px] rounded-md shadow-md overflow-hidden">
          {/* Facebook Video Plugin */}
          <div
            className="fb-video"
            data-href="https://www.facebook.com/OfficialElectronikHUB/videos/593308119946909/"
            data-width="650"
            data-height="350"
            data-show-text="false"
          >
            <blockquote
              cite="https://www.facebook.com/OfficialElectronikHUB/videos/593308119946909/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/OfficialElectronikHUB/videos/593308119946909/">
                Facebook Video
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovateSection;
