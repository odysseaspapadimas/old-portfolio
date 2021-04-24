import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-4 text-white w-full m-auto flex flex-col items-center">
      <p>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by Odysseas Papadimas
      </p>
      <p>
        Contact me at{" "}
        <a href="mailto:odysseas.patra@gmail.com">
          <strong>odysseas.patra@gmail.com</strong>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
