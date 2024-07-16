import styles from "../styles/Home.module.css";

const ContactForm = () => (
  <section id="contact" className={styles.contact}>
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
