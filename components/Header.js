import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src="https://uspto.report/TM/90082160/mark.png"
          alt="YuVi Technologies"
          className={styles.logo}
          width={100}
          height={50}
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
