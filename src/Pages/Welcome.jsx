import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Footer from "../componets/Footer/Footer";

import WelcomePageImage1 from "../images/WelcomePageImage1.png";
import WelcomePageImage2 from "../images/WelcomePageImage2.png";
import WelcomePageImage3 from "../images/WelcomePageImage3.png";
import WelcomePageImage4 from "../images/WelcomePageImage4.png";
import WelcomePageBanner from "../images/WelcomePageBanner.jpg";

import { Link } from "react-router-dom";

function Welcome() {
  useEffect(() => {
    const image1 = WelcomePageImage1;
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          background: `linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%),url(${WelcomePageBanner})`,
        }}
        className="h-[32rem] w-full sm:h-[65vh] xl:h-[80vh] bg-slate-800 relative"
      >
        <div className="grid content-center justify-center h-full justify-items-center">
          <div className="w-10/12 text-center sm:w-11/12 md:w-40rem">
            <motion.div
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
            >
              <h1 className="mb-3 text-3xl font-semibold text-center text-white sm:text-4xl md:text-6xl">
                Unlimited movies, TV shows and more.
              </h1>
              <h1 className="mb-4 text-xl text-center text-stone-400 font-light sm:text-2xl">
                Watch anywhere. Cancel anytime.
              </h1>
              <h1 className="mb-2 text-center text-stone-400 font-light sm:text-xl sm:mb-8">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h1>
              <div>
                <input
                  placeholder="Email Address"
                  className="w-full p-2 py-3 rounded-sm sm:py-4 md:py-5 md:w-3/4"
                />
                <Link to={"/signup"}>
                  <button className="px-4 py-2 mt-3 font-medium text-white bg-red-700 rounded-sm sm:py-4 md:mt-0 md:pb-5 md:text-xl md:w-1/4">
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <section className="bg-black border-y-8 border-y-zinc-800">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center md:py-8">
            <div className="lg:flex lg:items-center lg:w-9/12">
              <div>
                <h1 className="mt-2 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Enjoy on your TV.
                </h1>
                <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
                </h1>
              </div>
              <div className="flex justify-center">
                <img src={WelcomePageImage1} alt="TV" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 3 */}
      <section className="bg-black">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:w-9/12">
              <div className="flex justify-center">
                <img src={WelcomePageImage2} alt="Download" />
              </div>
              <div>
                <h1 className="mx-4 mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Download your shows to watch offline.
                </h1>
                <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Save your favourites easily and always have something to
                  watch.
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 4 */}
      <section className="bg-black border-y-8 border-y-zinc-800">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center md:py-8">
            <div className="lg:flex lg:items-center lg:w-9/12">
              <div>
                <h1 className="mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Watch everywhere.
                </h1>
                <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </h1>
              </div>
              <div className="flex justify-center">
                <img src={WelcomePageImage3} alt="Watch everywhere" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 5 */}
      <section className="bg-black">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:w-9/12">
              <div className="flex justify-center">
                <img src={WelcomePageImage4} alt="Kids profile" />
              </div>
              <div>
                <h1 className="mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                  Create profiles for children.
                </h1>
                <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                  Send children on adventures with their favourite characters in
                  a space made just for them—free with your membership.
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Welcome;
