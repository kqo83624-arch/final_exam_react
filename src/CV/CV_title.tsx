import styles from "./CV.module.css";
const CV_title = ({
  title,
  color = "#111",
}: {
  title: string;
  color: string;
}) => {
  return (
    <h2
      style={{
        color: color,
      }}
      className={styles.cv_title}
    >
      {title}
    </h2>
  );
};

export default CV_title;