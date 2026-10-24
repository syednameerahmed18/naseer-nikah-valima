import { motion } from "motion/react";
import openScreenBg from "../assets/OpenScreen.png";
import openScreenBgMob from "../assets/OpenScreenMobile.png";
import Logo from "../assets/NA_logo.png";

function LandingScreen({ onNext }) {
    return (
        <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden bg-[#FCEEF1]">

            {/* Mobile Background */}
            <img
                src={openScreenBgMob}
                alt="Wedding Invitation"
                className="absolute inset-0 z-0 h-full w-full object-fill md:hidden"
            />

            {/* Tablet / PC Background */}
            <img
                src={openScreenBg}
                alt="Wedding Invitation"
                className="absolute inset-0 z-0 hidden h-full w-full object-fill md:block"
            />

            {/* Center Logo, Couple Names and Button */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">

                {/* Floral Logo Medallion */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: "easeOut",
                    }}
                    className="flex shrink-0 items-center justify-center"
                >
                    <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-[#B78391] bg-[#FFF8FA]/70 shadow-[0_0_35px_rgba(152,77,104,0.16)] sm:h-64 sm:w-64 md:h-80 md:w-80">

                        {/* Inner Circles */}
                        <div className="absolute inset-2 rounded-full border border-[#C99A8A]" />
                        <div className="absolute inset-4 rounded-full border border-[#B78391]/40" />

                        {/* Floral Decorations */}
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-3xl text-[#B78391]">
                            ❀
                        </span>
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-3xl text-[#B78391]">
                            ❀
                        </span>
                        <span className="absolute -left-3 top-1/2 -translate-y-1/2 text-3xl text-[#C99A8A]">
                            ❋
                        </span>
                        <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-3xl text-[#C99A8A]">
                            ❋
                        </span>

                        {/* Corner Ornaments */}
                        <span className="absolute left-8 top-8 text-xl text-[#B78391]">✧</span>
                        <span className="absolute right-8 top-8 text-xl text-[#B78391]">✧</span>
                        <span className="absolute bottom-8 left-8 text-xl text-[#B78391]">✧</span>
                        <span className="absolute bottom-8 right-8 text-xl text-[#B78391]">✧</span>

                        {/* Logo */}
                        <motion.img
                            src={Logo}
                            alt="NA monogram"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="relative z-10 h-32 w-32 object-contain sm:h-36 sm:w-36 md:h-48 md:w-48"
                        />
                    </div>
                </motion.div>

                {/* Couple Names - Outside the Circle */}
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mt-5 whitespace-nowrap text-center font-wedding text-4xl tracking-wide text-[#87435B] sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    Naseer <span className="italic text-[#B78391]">&</span> Ayesha
                </motion.p>

                {/* Tagline - Outside the Circle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="mt-2 text-center font-serif text-xs italic tracking-[0.25em] text-[#8E6673] sm:text-sm md:text-base"
                >
                    Together Forever
                </motion.p>

                {/* Open Invitation Button */}
                <motion.button
                    type="button"
                    onClick={onNext}
                    aria-label="Open the wedding invitation"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 1.3,
                        ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="
        group relative mt-6 inline-flex shrink-0
        items-center justify-center gap-3
        rounded-full border border-[#B76E79]
        bg-[#D9899C] px-7 py-3
        font-serif text-sm tracking-[0.12em] text-white
        shadow-[0_5px_18px_rgba(135,67,91,0.25)]
        transition-colors duration-300
        hover:bg-[#C9788D]
        focus-visible:outline-2 focus-visible:outline-offset-4
        focus-visible:outline-[#984D68]
        sm:mt-7 sm:px-9 sm:py-3.5 sm:text-base
    "
                >
                    {/* Envelope Icon */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                    >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m4 7 8 6 8-6" />
                    </svg>

                    <span>Open Invitation</span>

                    {/* Arrow Icon */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </motion.button>
            </div>
        </div>
    );
}

export default LandingScreen;