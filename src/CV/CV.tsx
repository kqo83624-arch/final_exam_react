import styles from "./CV.module.css";
import { CV_contact, CV_personal_skill, CV_expertise,CV_about_me,CV_education,CV_work_experience } from "./CV_props";
const CV = () => {
  return (
    <div className={styles.cv_layout}>
      <div className={styles.cv_left}>
        <h3>CONTACT</h3>
          <CV_contact />
        <h3>EXPERTISE</h3>
          <CV_expertise />
        <h3>PERSONAL SKILL</h3>
          <CV_personal_skill />
      </div>

      <div className={styles.cv_right}>
        <h3>ABOUT ME</h3>
          <CV_about_me />
        <h3>EDUCATION</h3>
          <CV_education />
        <h3>WORK EXPERIENCE</h3>
          <CV_work_experience />
      </div>
    </div>
  );
};

export default CV;