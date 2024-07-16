import styles from "../styles/Home.module.css";

const TestimonialsSection = () => (
  <section id="testimonials" className={styles.testimonials}>
    <div className={styles.container}>
      <h2>Testimonials</h2>
      <div className={styles.testimonial}>
        <p>
          &quot;YuVi Technologies helped us launch our bot in no time. The
          process was seamless and the support was fantastic!&quot;
        </p>
        <cite>- Satisfied Customer</cite>
      </div>
      <div className={styles.testimonial}>
        <p>
          &quot;The AI-generated design was amazing. Our bot looks great and
          performs even better.&quot;
        </p>
        <cite>- Happy Client</cite>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
