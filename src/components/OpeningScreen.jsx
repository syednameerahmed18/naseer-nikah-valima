import { motion } from "motion/react";
import FallingFlowers from "./FallingFlowers";
import OpenInvitationButton from "./OpenInvitationButton";
import openingScreen from "../assets/wedding_invitation_design_1.png";
import openingScreenPCImage from "../assets/wedding_invitation_pc_design_1.png";

function OpeningScreen({ onNext }) {
  return (
    <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden bg-[#FCEEF1]">
      {/* Mobile Background */}
      <img
        src={openingScreen}
        alt="Wedding Invitation"
        className="absolute inset-0 h-full w-full object-fill md:hidden"
      />

      {/* Tablet / PC Background */}
      <img
        src={openingScreenPCImage}
        alt="Wedding Invitation"
        className="absolute inset-0 hidden h-full w-full object-fill md:block"
      />

      {/* Falling Pink Flowers */}
      <FallingFlowers />

      {/* MOBILE LAYOUT - Screens Below 768px */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          absolute top-[15%] sm:top-[10%]
          left-0 w-full px-4 sm:px-8
          flex flex-col items-center text-center
          md:hidden
        "
      >
        {/* Arabic Bismillah */}
        <motion.p
          dir="rtl"
          lang="ar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4 text-xl text-[#87435B] sm:mb-4 sm:text-3xl"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        {/* English Translation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-sm leading-6 text-[#8E6673] sm:text-base sm:leading-7"
        >
          In the name of Allah,
          <br />
          the Most Gracious,
          <br />
          the Most Merciful
        </motion.p>

        {/* First Decorative Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="
            mt-3 mb-3 flex w-full max-w-[230px]
            items-center justify-center gap-2
            sm:mt-6 sm:mb-5 sm:max-w-sm sm:gap-3
          "
        >
          <div className="h-px flex-1 bg-[#C99A8A]" />

          <span className="text-base text-[#B78391] sm:text-xl">
            ♡ ❀ ♡
          </span>

          <div className="h-px flex-1 bg-[#C99A8A]" />
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-wedding text-4xl leading-tight text-[#984D68] sm:text-5xl">
            Dr. Syed Naseer Ahmed
          </h1>

          {/* Fancy Ampersand Separator */}
          <motion.div
            className="my-1 flex w-full max-w-[180px] items-center justify-center gap-3 sm:my-5 sm:max-w-sm sm:gap-5"
          >
            {/* Left Decorative Line */}
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C99A8A] to-[#B78391]" />

            {/* Ampersand */}
            <span className="font-wedding text-5xl italic leading-none text-[#B78391] sm:text-6xl md:text-7xl">
              &
            </span>

            {/* Right Decorative Line */}
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C99A8A] to-[#B78391]" />
          </motion.div>

          <h2 className="font-wedding text-4xl leading-tight text-[#984D68] sm:text-5xl">
            Dr. Ayesha Mohammadi
          </h2>
        </motion.div>

        {/* Separator Between Couple Names and Quranic Verse */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="my-2 flex w-full max-w-[200px] items-center justify-center gap-3 sm:my-3 sm:max-w-xs sm:gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C99A8A] to-[#B78391]" />

          <span className="text-lg text-[#B78391] sm:text-xl">
            ❀
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C99A8A] to-[#B78391]" />
        </motion.div>

        {/* Quranic Wedding Verse */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="mt-1 flex max-w-sm flex-col items-center gap-2 px-3 text-center sm:mt-4"
        >
          <p
            dir="rtl"
            className="font-serif text-xl leading-relaxed text-[#984D68] sm:text-3xl"
          >
            وَخَلَقْنَاكُمْ أَزْوَاجًا
          </p>

          <p className="font-serif text-sm italic leading-7 text-[#984D68] sm:text-base">
            “And We created you in pairs.”
          </p>

          <p className="text-xs tracking-widest text-[#B78391]">
            — Qur’an 78:8
          </p>
        </motion.div>

        <OpenInvitationButton
          onClick={onNext}
          className="mt-4 sm:mt-5"
          delay={3.5}
        />

      </motion.div>

      {/* TABLET / DESKTOP LAYOUT - 768px and Wider */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          absolute inset-0 hidden
          flex-col items-center
          px-6 pt-[16vh] pb-[16vh]
          md:flex lg:px-8 xl:px-12
        "
      >
        {/* Arabic Bismillah */}
        <motion.p
          dir="rtl"
          lang="ar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="
            shrink-0 text-xl text-[#87435B]
            md:text-2xl xl:text-3xl 2xl:text-4xl
          "
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        {/* Main Horizontal Row */}
        <div className="flex w-full flex-1 items-center justify-center">
          <div
            className="flex w-full max-w-[1500px] items-center justify-center gap-3 lg:gap-5 xl:gap-6 2xl:gap-8"
          >
            {/* English Translation */}
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="
                w-[17%] shrink-0 text-center
                font-serif text-xs italic leading-relaxed
                text-[#8E6673]
                md:text-sm lg:text-base
                xl:w-[18%] xl:text-lg
              "
            >
              In the name of Allah,
              <br />
              the Most Gracious,
              <br />
              the Most Merciful
            </motion.p>

            {/* First Vertical Floral Separator */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0.7 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              aria-hidden="true"
              className="
                flex h-36 w-6 shrink-0
                flex-col items-center justify-center
                gap-1 text-base text-[#B78391]
                md:h-44 md:w-7 md:gap-2 md:text-lg
                lg:h-52 lg:w-8 lg:text-xl
                xl:h-56 xl:w-10 xl:gap-3 xl:text-2xl
                2xl:h-64
              "
            >
              <div className="w-px flex-1 bg-[#C99A8A]" />

              <span>♡</span>
              <span>❀</span>
              <span>♡</span>

              <div className="w-px flex-1 bg-[#C99A8A]" />
            </motion.div>
            <motion.div className="flex flex-col">
              {/* Couple Names */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="
                flex min-w-0 flex-1
                flex-col items-center justify-center
                text-center
              "
              >
                <h1
                  className="
                  whitespace-nowrap font-wedding
                  text-xl leading-tight text-[#984D68]
                  md:text-2xl lg:text-3xl
                  xl:text-4xl 2xl:text-5xl
                "
                >
                  Dr. Syed Naseer Ahmed
                </h1>

                  <span className="font-wedding text-3xl italic leading-none text-[#B78391] sm:text-6xl md:text-5xl">&</span>
                  

                <h2
                  className="
                  whitespace-nowrap font-wedding
                  text-xl leading-tight text-[#984D68]
                  md:text-2xl lg:text-3xl
                  xl:text-4xl 2xl:text-5xl
                "
                >
                  Dr. Ayesha Mohammadi
                </h2>
              </motion.div>
            </motion.div>

            {/* Second Vertical Floral Separator */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0.7 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              aria-hidden="true"
              className="
                flex h-36 w-6 shrink-0
                flex-col items-center justify-center
                gap-1 text-base text-[#B78391]
                md:h-44 md:w-7 md:gap-2 md:text-lg
                lg:h-52 lg:w-8 lg:text-xl
                xl:h-56 xl:w-10 xl:gap-3 xl:text-2xl
                2xl:h-64
              "
            >
              <div className="w-px flex-1 bg-[#C99A8A]" />

              <span>♡</span>
              <span>❀</span>
              <span>♡</span>

              <div className="w-px flex-1 bg-[#C99A8A]" />
            </motion.div>


            {/* Quranic Wedding Verse - Right */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="w-[15%] shrink-0 flex flex-col items-center gap-2 text-center xl:w-[21%] "
            >
              <p
                dir="rtl"
                lang="ar"
                className="font-serif text-xl leading-relaxed text-[#984D68] lg:text-2xl xl:text-3xl"
              >
                وَخَلَقْنَاكُمْ أَزْوَاجًا
              </p>

              <p
                className="font-serif text-sm italic leading-7 text-[#984D68] lg:text-base"
              >
                “And We created you in pairs.”
              </p>

              <p className="text-xs tracking-widest text-[#B78391]">
                — Qur’an 78:8
              </p>
            </motion.div>

          </div>
        </div>


        <OpenInvitationButton
          onClick={onNext}
          className="mt-[-2vh]"
          delay={2}
        />


      </motion.div>
    </div>
  );
}

export default OpeningScreen;
