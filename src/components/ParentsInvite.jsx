import { motion } from "motion/react";
import FallingFlowers from "./FallingFlowers";

import parentInvScreenBg from "../assets/wedding_invitation_design_2.png";
import parentInvScreenBgPC from "../assets/wedding_invitation_pc_design_2.png";

function ParentsInvite({ onNext }) {
    return (
        <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden bg-[#FCEEF1]">

            {/* Mobile Background */}
            <motion.img
                src={parentInvScreenBg}
                alt="Wedding invitation background"
                className="absolute inset-0 h-full w-full object-fill min-[760px]:hidden"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    opacity: { duration: 1 },
                    scale: {
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                    },
                }}
            />

            {/* Desktop Background */}
            <motion.img
                src={parentInvScreenBgPC}
                alt="Wedding invitation background"
                className="absolute inset-0 hidden h-full w-full object-fill min-[760px]:block"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    opacity: { duration: 1 },
                    scale: {
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                    },
                }}
            />

            {/* Soft Romantic Overlay */}
            <div
                className="pointer-events-none absolute inset-0 z-10
                bg-gradient-to-b from-[#FFF8FA]/30 via-transparent to-[#E8C4CF]/20"
            />

            {/* Falling Flowers */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.3 }}
            >
                <FallingFlowers />
            </motion.div>

            {/* Content Wrapper: No Scrolling on Mobile */}
            <div
                className="absolute inset-0 z-30 flex items-center justify-center
    overflow-hidden px-4 py-2
    min-[400px]:px-5
    min-[760px]:overflow-y-auto min-[760px]:px-8 min-[760px]:py-6"
            >
                {/* Invitation Card */}
                <motion.div
                    className="relative my-auto w-full max-w-3xl
                    overflow-hidden rounded-2xl
                    border border-[#D9AAB8]/75
                    bg-[#FFF8FA]/75
                    px-3 py-3
                    text-center text-[#805C68]
                    shadow-[0_12px_45px_rgba(135,67,91,0.16)]
                    backdrop-blur-[3px]
                    min-[400px]:px-4 min-[400px]:py-4
                    sm:rounded-[2rem] sm:px-8 sm:py-7
                    min-[760px]:max-w-5xl min-[760px]:px-9 min-[760px]:py-7"
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.25,
                        ease: "easeOut",
                    }}
                >
                    {/* Inner Decorative Border */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-1
                        rounded-xl border border-[#D9AAB8]/40
                        sm:inset-2 sm:rounded-[1.5rem]"
                    />

                    {/* Content Above Border */}
                    <div className="relative z-10">

                        {/* Opening Gratitude */}
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <p
                                className="mx-auto max-w-2xl font-serif
                                text-[10px] italic leading-4
                                min-[400px]:text-[11px]
                                sm:text-sm sm:leading-7
                                min-[760px]:text-base"
                            >
                                With hearts filled with gratitude to
                                Almighty Allah for His countless blessings,
                                we thank Him for bringing our families
                                together on this beautiful occasion.
                            </p>

                            {/* First Divider */}
                            <div
                                className="mx-auto mt-1.5 mb-2 flex
                                items-center justify-center gap-2
                                sm:mt-3 sm:mb-4
                                min-[760px]:mt-4 min-[760px]:mb-5"
                            >
                                <span className="h-px w-8 bg-[#B78391] sm:w-16" />
                                <span className="text-sm text-[#B78391] sm:text-lg">
                                    ❀
                                </span>
                                <span className="h-px w-8 bg-[#B78391] sm:w-16" />
                            </div>
                        </motion.div>

                        {/* Main Layout: Vertical on Mobile, Horizontal on Desktop */}
                        <div
                            className="grid grid-cols-1 items-center gap-2
                            min-[760px]:grid-cols-2 min-[760px]:gap-8
                            min-[760px]:text-center"
                        >
                            {/* LEFT SIDE: Parents' Names */}
                            <motion.section
                                className="flex flex-col items-center
                                justify-center
                                min-[760px]:border-r
                                min-[760px]:border-[#D9AAB8]/60
                                min-[760px]:pr-7"
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.55 }}
                            >
                                <p
                                    className="mb-1 font-serif text-[9px]
                                    uppercase tracking-[0.16em]
                                    text-[#984D68]
                                    min-[400px]:text-[10px]
                                    sm:text-xs sm:mb-3
                                    min-[760px]:mb-5"
                                >
                                    Together with our families
                                </p>

                                {/* Groom's Parents */}
                                <h2
                                    className="font-wedding text-2xl
                                    leading-tight text-[#87435B]
                                    min-[400px]:text-[26px]
                                    sm:text-4xl
                                    min-[760px]:text-4xl lg:text-5xl"
                                >
                                    Mrs. &amp; Mr.
                                    <span className="mt-0.5 block">
                                        Syed Noor Ahmed
                                    </span>
                                </h2>

                                {/* Ampersand */}
                                <div
                                    className="my-0.5 font-wedding
                                    text-xl text-[#B78391]
                                    sm:my-2 sm:text-3xl
                                    min-[760px]:my-3"
                                >
                                    &amp;
                                </div>

                                {/* Bride's Parents */}
                                <h2
                                    className="font-wedding text-2xl
                                    leading-tight text-[#87435B]
                                    min-[400px]:text-[26px]
                                    sm:text-4xl
                                    min-[760px]:text-4xl lg:text-5xl"
                                >
                                    Mrs. &amp; Mr.
                                    <span className="mt-0.5 block">
                                        Abdullah
                                    </span>
                                </h2>

                                {/* Desktop Ornament */}
                                <div
                                    className="mt-4 hidden items-center
                                    justify-center gap-3
                                    min-[760px]:flex"
                                >
                                    <span className="h-px w-8 bg-[#B78391]" />
                                    <span className="text-[#B78391]">❦</span>
                                    <span className="h-px w-8 bg-[#B78391]" />
                                </div>
                            </motion.section>

                            {/* RIGHT SIDE: Event Invitation */}
                            <motion.section
                                className="flex flex-col items-center
                                justify-center
                                min-[760px]:pl-2"
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                <p
                                    className="mx-auto max-w-md font-serif
                                    text-[10px] leading-4
                                    min-[400px]:text-[11px]
                                    sm:text-sm sm:leading-7
                                    min-[760px]:text-sm"
                                >
                                    Humbly seek your gracious presence
                                    and blessings as we celebrate the
                                    joyous occasions of the
                                </p>

                                {/* Event Names */}
                                <h1
                                    className="mt-1 font-wedding
                                    text-3xl leading-tight
                                    text-[#87435B]
                                    min-[400px]:text-4xl
                                    sm:mt-3 sm:text-5xl
                                    min-[760px]:text-5xl lg:text-6xl"
                                >
                                    Nikah
                                    <span className="mx-1 text-[#B78391] sm:mx-2">
                                        &amp;
                                    </span>
                                    <span className="mt-0.5 block">
                                        Dawat-e-Valima
                                    </span>
                                </h1>

                                {/* Beloved Children */}
                                <p
                                    className="mt-1 font-serif text-[9px]
                                    uppercase tracking-[0.15em]
                                    text-[#984D68]
                                    min-[400px]:text-[10px]
                                    sm:mt-3 sm:text-xs"
                                >
                                    Of our beloved children
                                </p>

                                {/* Couple's Names */}
                                <h2
                                    className="mt-0.5 font-wedding
                                    text-3xl text-[#87435B]
                                    min-[400px]:text-4xl
                                    sm:text-5xl
                                    min-[760px]:text-5xl lg:text-6xl"
                                >
                                    Naseer &amp; Ayesha
                                </h2>

                                {/* Small Ornament */}
                                <div
                                    className="mt-1.5 flex items-center
                                    justify-center gap-2 sm:mt-3"
                                >
                                    <span className="h-px w-7 bg-[#B78391]" />
                                    <span className="text-sm text-[#B78391] sm:text-lg">
                                        ❀
                                    </span>
                                    <span className="h-px w-7 bg-[#B78391]" />
                                </div>
                            </motion.section>
                        </div>

                        {/* Closing Message */}
                        <motion.div
                            className="mx-auto mt-2 max-w-2xl
                            sm:mt-4 min-[760px]:mt-5"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            <p
                                className="font-serif text-[10px] italic
                                leading-4 text-[#805C68]
                                min-[400px]:text-[11px]
                                sm:text-sm sm:leading-7"
                            >
                                Your presence will be our greatest joy,
                                and your heartfelt prayers will be a
                                cherished blessing as our children begin
                                this beautiful journey together.
                            </p>
                        </motion.div>

                        {/* Continue Button */}
                        <motion.button
                            type="button"
                            onClick={onNext}
                            aria-label="Continue to the next wedding invitation page"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                            whileTap={{ scale: 0.97 }}
                            className="group mt-2 inline-flex items-center justify-center
    gap-2 rounded-full border border-[#B76E79]
    bg-[#D9899C] px-5 py-2 font-serif text-xs
    tracking-[0.06em] text-white
    shadow-[0_4px_12px_rgba(152,77,104,0.2)]
    transition-colors duration-300 hover:bg-[#C9788D]
    sm:mt-5 sm:px-8 sm:py-3 sm:text-sm
    min-[760px]:mt-4"
                        >
                            Count Down With Us

                            <motion.span
                                aria-hidden="true"
                                className="inline-block"
                                animate={{ x: [0, 3, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                →
                            </motion.span>
                        </motion.button>

                        {/* Final Ornament */}
                        <div
                            className="mt-1 text-[10px] tracking-[0.3em]
                            text-[#B78391]
                            sm:mt-3 sm:text-sm
                            min-[760px]:mt-2"
                        >
                            ❀ ❦ ❀
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default ParentsInvite;