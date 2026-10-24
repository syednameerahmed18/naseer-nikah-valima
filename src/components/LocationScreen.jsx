import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FallingFlowers from "./FallingFlowers";

import thirdScreen from "../assets/wedding_invitation_design_2.png";
import thirdScreenPCImage from "../assets/wedding_invitation_pc_design_2.png";

const venueName = "AMC GRAND";
const venueAddress =
    "16/4, Nagawara Main Rd, opposite to glass factory, Umar Nagar, Govindapura, Nagavara, Bengaluru, Karnataka 560045";

const nikahVenueName = "Aria Avenue Banquet Hall";
const nikahVenueAddress =
    "2nd floor, Azeem gold, 13, Mosque Rd, Cleveland Town, Fraser Town, Bengaluru, Karnataka 560005";

const events = [
    {
        id: "nikah",
        title: "MEHFIL-E-NIKAH",
        subtitle: "The Nikah Ceremony",
        date: "27th November 2026",
        time: "8:00 PM Onwards",
        details: ["Nikah After Asr", "Dinner 8:00 PM Onwards"],
        venue: nikahVenueName,
        address: nikahVenueAddress,
    },
    {
        id: "valima",
        title: "DAWAT-E-VALIMA",
        subtitle: "The Wedding Reception",
        date: "28th November 2026",
        time: "8:00 PM Onwards",
        venue: venueName,
        address: venueAddress,
    },
];

function EventCard({ event, flipped, onFlip }) {
    const isValima = event.id === "valima";

    const colors = isValima
        ? {
            border: "#C58B9C",
            innerBorder: "#DDB0BE",
            accent: "#A85D78",
            front: "from-[#EFB3C7] via-[#F7D1DE] to-[#FFF0F5]",
            back: "bg-[#F8E7ED]/[0.97]",
            button: "from-[#A85D78] to-[#85415B]",
            buttonHover: "hover:bg-[#EAC4D2]",
            iconBg: "bg-[#F2D5DF]",
            pill: "border-[#C58B9C] bg-gradient-to-r from-[#F8E7ED] via-[#EAC4D2] to-[#D9A5B7] text-[#85415B]",
        }
        : {
            border: "#DDB0BE",
            innerBorder: "#E8C4CF",
            accent: "#B78391",
            front: "from-[#F7E0E8] via-[#FCEEF1] to-[#FFF9FB]",
            back: "bg-[#FFF8FA]/95",
            button: "from-[#B78391] to-[#984D68]",
            buttonHover: "hover:bg-[#FCEEF1]",
            iconBg: "bg-[#FCEEF1]",
            pill: "border-[#DDB0BE] bg-gradient-to-r from-[#FFF9FB] via-[#FCEEF1] to-[#F2DCE4] text-[#984D68]",
        };

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        event.address
    )}&travelmode=driving`;

    return (
        <div className="w-full [perspective:1400px]">
            <motion.div
                className="relative h-[440px] w-full cursor-pointer sm:h-[460px] min-[760px]:h-[400px] lg:h-[420px] [transform-style:preserve-3d]"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                }}
                onClick={onFlip}
                role="button"
                tabIndex={0}
                aria-label={`${event.title}. ${flipped ? "Show card cover" : "Reveal event details"
                    }`}
                aria-pressed={flipped}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onFlip();
                    }
                }}
            >
                {/* FRONT OF CARD */}
                <div
                    // className={`absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border bg-gradient-to-br p-6 text-center shadow-[0_18px_45px_rgba(152,77,104,0.18)] [backface-visibility:hidden] ${colors.front}`}
                    className={`absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border bg-gradient-to-br p-6 text-center shadow-[0_18px_45px_rgba(152,77,104,0.18)] [backface-visibility:hidden] ${colors.front}`}
                    style={{ borderColor: colors.border }}
                >
                    {/* Decorative inner borders */}
                    <div
                        className="pointer-events-none absolute inset-3 rounded-[1.3rem] border"
                        style={{
                            borderColor: `${colors.innerBorder}B3`,
                        }}
                    />
                    <div
                        className="pointer-events-none absolute inset-[18px] rounded-[1.1rem] border"
                        style={{
                            borderColor: `${colors.innerBorder}99`,
                        }}
                    />

                    <motion.p
                        className="mb-5 text-2xl tracking-[0.35em]"
                        style={{ color: colors.accent }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        ❀ ♡ ❀
                    </motion.p>

                    <p
                        className="mb-3 text-[10px] uppercase tracking-[0.4em] sm:text-xs"
                        style={{ color: colors.accent }}
                    >
                        You are invited to
                    </p>

                    <h2 className="max-w-full font-wedding text-3xl leading-relaxed text-[#984D68] sm:text-4xl lg:text-3xl xl:text-4xl">
                        {event.title}
                    </h2>

                    <div className="my-5 flex w-full max-w-[190px] items-center gap-3">
                        <div
                            className="h-px flex-1"
                            style={{ backgroundColor: colors.border }}
                        />
                        <span
                            className="text-sm"
                            style={{ color: colors.accent }}
                        >
                            ♡
                        </span>
                        <div
                            className="h-px flex-1"
                            style={{ backgroundColor: colors.border }}
                        />
                    </div>

                    <p className="text-sm italic text-[#805665]">
                        {event.subtitle}
                    </p>

                    <motion.div
                        className={`mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold tracking-wide shadow-md backdrop-blur-sm ${colors.pill}`}
                        animate={{
                            y: [0, -3, 0],
                            boxShadow: [
                                "0 3px 10px rgba(152,77,104,0.10)",
                                "0 6px 18px rgba(152,77,104,0.22)",
                                "0 3px 10px rgba(152,77,104,0.10)",
                            ],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <span className="text-sm">✧</span>
                        <span>Tap to Reveal</span>
                        <span className="text-sm">✧</span>
                    </motion.div>

                    <p
                        className="mt-6 text-sm tracking-[0.3em]"
                        style={{ color: colors.accent }}
                    >
                        ♡ ❀ ♡
                    </p>
                </div>

                {/* BACK OF CARD */}
                <div
                    className={`event-card-scroll absolute inset-0 flex flex-col items-center overflow-y-auto rounded-[1.75rem] border px-5 py-6 text-center shadow-[0_18px_45px_rgba(152,77,104,0.18)] sm:px-7 [transform:rotateY(180deg)] [backface-visibility:hidden] ${colors.back}`}
                    style={{ borderColor: colors.border }}
                >
                    <div
                        className="mb-2 text-xl tracking-[0.3em]"
                        style={{ color: colors.accent }}
                    >
                        ❀ ♡ ❀
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#B78391]">
                        {event.subtitle}
                    </p>

                    <h2 className="mt-2 font-wedding text-2xl leading-relaxed text-[#984D68] sm:text-3xl">
                        {event.title}
                    </h2>

                    <div
                        className="my-3 h-px w-20 shrink-0"
                        style={{ backgroundColor: colors.border }}
                    />

                    {/* Date and event timings */}
                    <div className="space-y-2">
                        <p className="text-sm font-semibold tracking-wide text-[#984D68]">
                            {event.date}
                        </p>

                        {event.details ? (
                            <div className="mt-3 space-y-2">
                                {event.details.map((detail, index) => (
                                    <p
                                        key={index}
                                        className="text-sm font-medium text-[#805665]"
                                    >
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-[#805665]">
                                {event.time}
                            </p>
                        )}
                    </div>

                    {/* Location icon */}
                    <div
                        className={`mt-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${colors.iconBg}`}
                        style={{ borderColor: colors.innerBorder }}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-5 w-5"
                            style={{ color: colors.accent }}
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                            />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>
                    </div>

                    <h3 className="mt-2 text-lg font-semibold text-[#984D68]">
                        {event.venue}
                    </h3>

                    <p className="mt-1 max-w-sm text-xs leading-5 text-[#805665]">
                        {event.address}
                    </p>

                    {/* View Location button */}
                    <motion.a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className={`mt-4 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md transition-shadow duration-300 hover:shadow-lg ${colors.button}`}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                            />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>
                        View Location ↗
                    </motion.a>

                    {/* Turn Card Back button */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onFlip();
                        }}
                        className={`mt-3 shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium text-[#984D68] transition-colors ${colors.buttonHover}`}
                        style={{ borderColor: colors.border }}
                    >
                        ↻ Turn Card Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

function LocationScreen({ onBack }) {
    const [flippedCards, setFlippedCards] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);

    const isValimaActive = events[activeIndex].id === "valima";

    const toggleCard = (id) => {
        setFlippedCards((previous) => ({
            ...previous,
            [id]: !previous[id],
        }));
    };

    const changeCard = (direction) => {
        setActiveIndex((current) =>
            (current + direction + events.length) % events.length
        );
        setFlippedCards({});
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStart === null) return;

        const difference = e.changedTouches[0].clientX - touchStart;

        if (Math.abs(difference) > 45) {
            changeCard(difference < 0 ? 1 : -1);
        }

        setTouchStart(null);
    };

    // Colors for carousel navigation adapt to the selected event.
    const arrowButtonColors = isValimaActive
        ? "border-[#C58B9C] bg-[#B66F87] text-white hover:bg-[#984D68]"
        : "border-[#DDB0BE] bg-[#FFF8FA]/90 text-[#984D68] hover:bg-[#FCEEF1]";

    const backButtonColors = isValimaActive
        ? "border-[#A85D78] bg-[#A85D78] hover:bg-[#85415B]"
        : "border-[#B76E79] bg-[#D9899C] hover:bg-[#C9788D]";

    return (
        <div className="fixed inset-0 h-[100dvh] w-full overflow-hidden bg-[#FCEEF1]">
            {/* Mobile background */}
            <motion.img
                src={thirdScreen}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-fill min-[760px]:hidden"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Desktop background */}
            <motion.img
                src={thirdScreenPCImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 hidden h-full w-full object-fill min-[760px]:block"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Falling Flowers */}
            <div className="pointer-events-none absolute inset-0 z-10">
                <FallingFlowers />
            </div>

            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/10 via-transparent to-pink-100/20" />

            {/* MOBILE: STACKED CARD CAROUSEL */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 min-[760px]:hidden">
                <div className="mb-5 text-center">
                    <h1 className="font-wedding text-3xl text-[#984D68]">
                        Our Celebrations
                    </h1>
                    <motion.div
                        className="mt-3 mb-2 flex items-center justify-center gap-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        {/* Highlighted instruction */}
                        <div className="flex items-center gap-2 rounded-full border border-[#DDB0BE] bg-[#FFF8FA]/90 px-4 py-2 shadow-[0_4px_14px_rgba(152,77,104,0.12)]">
                            <motion.span
                                className="text-base"
                                animate={{ x: [0, 7, 0] }}
                                transition={{
                                    duration: 1.4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                👆🏻
                            </motion.span>

                            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#984D68]">
                                Swipe on the card to Discover
                            </span>
                        </div>
                    </motion.div>

                </div>

                {/* Card stack */}
                <div
                    className="relative w-full max-w-[300px] [touch-action:pan-y]"
                    style={{
                        height: "min(58dvh, 360px)",
                        minHeight: "300px",
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Cards behind the active card */}
                    {events.map((event, index) => {
                        if (index === activeIndex) return null;

                        const isValima = event.id === "valima";

                        return (
                            <div
                                key={event.id}
                                className={`pointer-events-none absolute inset-0 rounded-[1.75rem] border bg-gradient-to-br shadow-lg ${isValima
                                    ? "from-[#F7E0E8] to-[#EAC4D2] border-[#C58B9C]"
                                    : "from-[#FFF9FB] to-[#F2DCE4] border-[#DDB0BE]"
                                    }`}
                                style={{
                                    transform: `translateX(${index > activeIndex ? 25 : -25
                                        }px) translateY(10px) rotate(${index > activeIndex ? 5 : -5
                                        }deg) scale(0.92)`,
                                    zIndex: 0,
                                }}
                            >
                                <div
                                    className="absolute inset-3 rounded-[1.3rem] border"
                                    style={{
                                        borderColor: isValima
                                            ? "#DDB0BE"
                                            : "#DDB0BEB3",
                                    }}
                                />
                            </div>
                        );
                    })}

                    {/* Active card */}
                    <motion.div
                        key={events[activeIndex].id}
                        className="absolute inset-0 z-10"
                        initial={{
                            opacity: 0,
                            x: 35,
                            rotate: 3,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            rotate: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <EventCard
                            event={events[activeIndex]}
                            flipped={Boolean(
                                flippedCards[events[activeIndex].id]
                            )}
                            onFlip={() =>
                                toggleCard(events[activeIndex].id)
                            }
                        />
                    </motion.div>
                </div>

                {/* Mobile carousel controls */}
                <div className="mt-5 flex items-center justify-center gap-5">
                    <button
                        type="button"
                        onClick={() => changeCard(-1)}
                        aria-label="Previous invitation"
                        className={`flex h-10 w-10 items-center justify-center rounded-full border text-xl shadow-sm transition-colors active:scale-95 ${arrowButtonColors}`}
                    >
                        ‹
                    </button>

                    <div className="flex items-center gap-2">
                        {events.map((event, index) => (
                            <button
                                key={event.id}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show ${event.title}`}
                                aria-current={
                                    activeIndex === index ? "true" : undefined
                                }
                                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? isValimaActive
                                        ? "w-7 bg-[#A85D78]"
                                        : "w-7 bg-[#984D68]"
                                    : "w-2 bg-[#DDB0BE]"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => changeCard(1)}
                        aria-label="Next invitation"
                        className={`flex h-10 w-10 items-center justify-center rounded-full border text-xl shadow-sm transition-colors active:scale-95 ${arrowButtonColors}`}
                    >
                        ›
                    </button>
                </div>

                <p className="mt-2 text-[10px] tracking-wide text-[#805665]">
                    {activeIndex + 1} of {events.length} invitations
                </p>

                {/* Mobile Back button */}
                <button
                    type="button"
                    onClick={onBack}
                    className={`mt-5 inline-flex min-h-[40px] items-center justify-center whitespace-nowrap rounded-full border px-6 py-2 text-xs font-medium text-white shadow-[0_4px_12px_rgba(152,77,104,0.2)] transition-all duration-300 hover:shadow-[0_8px_22px_rgba(152,77,104,0.28)] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#984D68] focus-visible:ring-offset-2 sm:px-8 sm:py-2.5 sm:text-sm ${backButtonColors}`}
                >
                    ← Back to Invitation
                </button>
            </div>

            {/* DESKTOP: STACKED CARD CAROUSEL */}
            <div className="absolute inset-0 z-20 hidden min-[760px]:flex flex-col items-center justify-center overflow-hidden px-8 py-5">
                {/* Heading */}
                <motion.div
                    className="mb-5 text-center lg:mb-6"
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="font-wedding text-4xl text-[#984D68] lg:text-5xl">
                        Our Celebrations
                    </h1>

                    <p className="mt-2 text-sm tracking-wide text-[#805665]">
                        Swipe to discover your invitation
                    </p>
                </motion.div>

                {/* Wide stacked card */}
                <div
                    className="relative w-full max-w-[570px] [perspective:1600px] lg:max-w-[640px]"
                    style={{
                        height: "min(52dvh, 390px)",
                        minHeight: "300px",
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Background card */}
                    {events.map((event, index) => {
                        if (index === activeIndex) return null;

                        const isValima = event.id === "valima";

                        return (
                            <motion.div
                                key={event.id}
                                className={`pointer-events-none absolute inset-0 rounded-[2rem] border bg-gradient-to-br shadow-xl ${isValima
                                    ? "from-[#F7E0E8] to-[#EAC4D2] border-[#C58B9C]"
                                    : "from-[#FFF9FB] to-[#F2DCE4] border-[#DDB0BE]"
                                    }`}
                                initial={false}
                                animate={{
                                    x: index > activeIndex ? 38 : -38,
                                    y: 12,
                                    rotate: index > activeIndex ? 5 : -5,
                                    scale: 0.93,
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <div
                                    className="absolute inset-4 rounded-[1.5rem] border"
                                    style={{
                                        borderColor: isValima
                                            ? "#DDB0BE"
                                            : "#DDB0BEB3",
                                    }}
                                />
                            </motion.div>
                        );
                    })}

                    {/* Active card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={events[activeIndex].id}
                            className="absolute inset-0 z-10"
                            initial={{
                                opacity: 0,
                                x: 55,
                                rotate: 4,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                rotate: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                x: -55,
                                rotate: -4,
                                scale: 0.96,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <EventCard
                                event={events[activeIndex]}
                                flipped={Boolean(
                                    flippedCards[events[activeIndex].id]
                                )}
                                onFlip={() =>
                                    toggleCard(events[activeIndex].id)
                                }
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Desktop carousel controls */}
                <div className="mt-10 flex items-center justify-center gap-6">
                    <button
                        type="button"
                        onClick={() => changeCard(-1)}
                        aria-label="Previous invitation"
                        className={`flex h-11 w-11 items-center justify-center rounded-full border text-2xl shadow-sm transition-colors active:scale-95 ${arrowButtonColors}`}
                    >
                        ‹
                    </button>

                    <div className="min-w-[180px] text-center">
                        <p
                            className={`text-sm font-medium tracking-wide ${isValimaActive
                                ? "text-[#A85D78]"
                                : "text-[#984D68]"
                                }`}
                        >
                            {events[activeIndex].title}
                        </p>

                        <div className="mt-2 flex justify-center gap-2">
                            {events.map((event, index) => (
                                <button
                                    key={event.id}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Show ${event.title}`}
                                    aria-current={
                                        activeIndex === index
                                            ? "true"
                                            : undefined
                                    }
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                        ? isValimaActive
                                            ? "w-8 bg-[#A85D78]"
                                            : "w-8 bg-[#984D68]"
                                        : "w-2 bg-[#DDB0BE] hover:bg-[#B78391]"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => changeCard(1)}
                        aria-label="Next invitation"
                        className={`flex h-11 w-11 items-center justify-center rounded-full border text-2xl shadow-sm transition-colors active:scale-95 ${arrowButtonColors}`}
                    >
                        ›
                    </button>
                </div>

                {/* Desktop Back button */}
                <motion.button
                    type="button"
                    onClick={onBack}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`mt-5 rounded-full border px-6 py-2.5 text-sm font-medium text-white shadow-[0_4px_12px_rgba(152,77,104,0.2)] transition-all duration-300 hover:shadow-[0_8px_22px_rgba(152,77,104,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#984D68] focus-visible:ring-offset-2 ${backButtonColors}`}
                >
                    ← Back to Invitation
                </motion.button>
            </div>
        </div>
    );
}

export default LocationScreen;