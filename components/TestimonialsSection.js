import styles from "../styles/Home.module.css";

const TestimonialsSection = () => (
  <section id="testimonials" className={styles.testimonials}>
    <div className={styles.container}>
      <h2>Testimonials</h2>
      <div className={styles.testimonial}>
        <p>
          "YuVi Technologies helped us launch our bot in no time. The process
          was seamless and the support was fantastic!"
        </p>
        <cite>- Satisfied Customer</cite>
      </div>
      <div className={styles.testimonial}>
        <p>
          "The AI-generated design was amazing. Our bot looks great and performs
          even better."
        </p>
        <cite>- Happy Client</cite>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
