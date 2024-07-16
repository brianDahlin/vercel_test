import Link from "next/link";
import styles from "../styles/Home.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src="https://uspto.report/TM/90082160/mark.png"
          alt="YuVi Technologies"
          className={styles.logo}
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="#testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
