import { motion } from "motion/react";

function OpenInvitationButton({ onClick, className = "", delay }) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            aria-label="Continue to the wedding invitation"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: `${delay}`, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
                group inline-flex shrink-0 items-center justify-center gap-2
                rounded-full border border-[#B76E79]
                bg-[#D9899C] px-4 py-2.5
                font-serif text-xs tracking-[0.06em] text-white
                shadow-[0_4px_14px_rgba(135,67,91,0.22)]
                transition-colors duration-300 hover:bg-[#C9788D]
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-[#984D68]
                sm:gap-3 sm:px-7 sm:py-3 sm:text-sm sm:tracking-[0.1em]
                md:px-9 md:py-3.5 md:text-base
                ${className}
            `}
        >
            {/* Heart icon */}
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                aria-hidden="true"
            >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
            </svg>

            <span>Continue to Invitation</span>

            {/* Arrow icon */}
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                aria-hidden="true"
            >
                <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
        </motion.button>
    );
}

export default OpenInvitationButton;