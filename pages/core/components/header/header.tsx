import styles from "./header.module.scss";
import Link from "next/link";
import { useState } from "react";
import Navigation from "../navigation/navigation";
import  IconLogo from "../../images/icon-logo"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLight, setIsOpenLight] = useState(false);
  const [bgHeader, setBgHeader] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <style jsx>{`
      header {
        background:${isOpen ? "#fff": "transparent" };
      }
        .menu_mobile span {
          display: block;
          width: 33px;
          height: 4px;
          margin-bottom: 5px;
          position: relative;
          background: #cdcdcd;
          border-radius: 3px;
          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease,
            -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
        }
        .h-7 {
          height: 1.75rem;
          width: auto;
        }
        .fill-\[\#24221B\] {
          fill: #24221b;
        }
      `}</style>
      <Link href="/" className="flex items-center">
        {/* Lenodev */}
        {!isOpen &&<IconLogo />}

      </Link>
      <Navigation type="desktop" />
      <div className="navigate-mobile block lg:hidden flex-1">
      {isOpen ?<Navigation type="mobile" />:null }
      </div>
      <nav className="block lg:hidden">
        <div className="cursor-pointer menu_mobile" onClick={handleToggleMenu}>
          <span className={isOpen ? "openTop" : ""}></span>
          <span className={isOpen ? "openMiddle" : ""}></span>
          <span className={isOpen ? "openBottom" : ""}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
