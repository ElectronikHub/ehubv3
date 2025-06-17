import { useEffect, useState } from "react";

function ServiceCard({ service }) {
    return (
        <div id="trainings-seminars-section" className="relative min-h-screen bg-primary">
            <div
                className="absolute inset-0 bg-left bg-no-repeat bg-ao "
                style={{
                    backgroundImage: "url('./Assets/TnS.png')",
                    backgroundSize: 'auto 300px',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }}
            >
                <div className="relative z-10 container mx-auto">
                    <div className='flex justify-center pt-11'>
                        <span className='px-1 archivo-black-regular pt-3 text-3xl text-tertiary'>
                            TRAININGS AND SEMINARS
                        </span>
                    </div>
                    <div className='flex justify-center pt-11'>
                        <span className='pt-3 text-sm text-tertiary'>
                            Empower students with tech skills through our hands-on training and
                            seminars.<br />
                            From robotics and IoT to web development and data analytics, our
                            interactive<br />
                            programs build real-world <br />
                            knowledge and confidence to thrive in today’s digital world. AND
                            SEMINARS
                        </span>
                    </div>
                    <div className='flex justify-center pt-14'>
                        <img src='./Assets/10.png' alt='EHUB LOGO' className='w-28' />
                    </div>
                    <div className='flex justify-center pt-12 mr-52 pr-10'>
                        <p className="text-white montserrat-regular mt-1 text-center max-w-3xl ml-52">
                            <button className="text-center archivo-black-regular ml-9 mb-1 mt-2 bg-secondary text-tertiary text-sm px-4 py-2 rounded-full hover:bg-[#d1741f] transition">
                                <a
                                    href="https://www.google.com/maps?q=Electronik+Hub"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-tertiary block hover:underline"
                                >
                                    Contact Us
                                </a>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Custom animation keyframes in Tailwind config or via style tag */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default TrainingsAndSeminars;
