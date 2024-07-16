import styles from "../styles/Home.module.css";

const PricingSection = () => (
  <section id="pricing" className={styles.pricing}>
    <div className={styles.container}>
      <h2>Pricing</h2>
      <div className={styles.pricingOptions}>
        <div className={styles.pricingOption}>
          <h3>Standard</h3>
          <p>$2,999</p>
          <p>Without unique design</p>
        </div>
        <div className={styles.pricingOption}>
          <h3>Premium</h3>
          <p>$9,999</p>
          <p>With unique design</p>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
