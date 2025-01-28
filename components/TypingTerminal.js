import { useState, useEffect } from "react";

const TypingTerminal = () => {
    const phrases = [
        "Welcome to my portfolio!",
        "I'm a web developer.",
        "Let's build something awesome.",
        "Check out my projects below.",
    ]; // Add the words or sentences you want to rotate through
    const [currentText, setCurrentText] = useState(""); // Current text being typed
    const [index, setIndex] = useState(0); // Index of the current phrase
    const [charIndex, setCharIndex] = useState(0); // Character index of the current phrase
    const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting

    useEffect(() => {
        const currentPhrase = phrases[index]; // Current phrase to display

        if (isDeleting) {
            // If deleting, remove characters
            if (charIndex > 0) {
                setTimeout(() => {
                    setCharIndex(charIndex - 1);
                    setCurrentText(currentPhrase.substring(0, charIndex - 1));
                }, 50); // Speed of deletion
            } else {
                // Finished deleting, move to the next phrase
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Loop to the next phrase
            }
        } else {
            // If typing, add characters
            if (charIndex < currentPhrase.length) {
                setTimeout(() => {
                    setCharIndex(charIndex + 1);
                    setCurrentText(currentPhrase.substring(0, charIndex + 1));
                }, 100); // Speed of typing
            } else {
                // Pause at the end of the phrase
                setTimeout(() => setIsDeleting(true), 1000);
            }
        }
    }, [charIndex, isDeleting, index, phrases]);

    return (
        <div className="text-green-500 font-mono p-4 rounded-lg shadow-md">
            <span>{currentText}</span>
            <span className="blinking-cursor">|</span>
            {/* Add a blinking cursor for effect */}
            <style jsx>{`
        .blinking-cursor {
            display: inline-block;
            width: 1px;
            height: 1em;
            background-color: green;
            animation: blink 1s step-start infinite;
        }

        @keyframes blink {
          50% {
            background-color: transparent;
          }
        }
      `}</style>
        </div>
    );
};

export default TypingTerminal;