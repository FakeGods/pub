import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/5 p-4 text-center text-surface dark:text-white">
      Copyright © {new Date().getFullYear()}. All rights are reserved
    </footer>
  );
};

export default Footer;
