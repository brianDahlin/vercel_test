import styles from "../styles/Home.module.css";

const HeroSection = () => (
  <section className={styles.hero}>
    <div className={styles.container}>
      <h1>Welcome to YuVi Technologies</h1>
      <p>
        Create your own Telegram clicker bot in no time with our no-code
        solution.
      </p>
      <a href="#pricing" className={styles.btn}>
        Get Started
      </a>
    </div>
  </section>
);

export default HeroSection;
