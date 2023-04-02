import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer py-8 footer-center p-4 bg-neutral text-base-content">
      <div>
        <p className="pb-1">
            ©️ Copyright © {currentYear} - All right reserved by the developper
        </p>
        <p>
            Made with ❤️ by <strong><i><a href='https://github.com/yassinesebai'> Yassine Sebai</a></i></strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
