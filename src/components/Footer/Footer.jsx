import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const formattedDate = currentDateTime.toLocaleDateString(undefined, options);
    const formattedTime = currentDateTime.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <div className="footer-container">
            <div className="footer-content">
                <span>Christoph Pfrommer</span>
                <a href="https://www.linkedin.com/in/christoph-pfrommer/" target="_blank" rel="noopener noreferrer">
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/Pfrommer1982" target="_blank" rel="noopener noreferrer">
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" />
                </a>
            </div>
            <div className="datetime">
                {formattedDate} {formattedTime}
            </div>
        </div>
    );
};

export default Footer;
