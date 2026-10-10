import styles from "./profile.module.css";
export default function Profile() {
  return (
    <>
        <ul>
          <li className={styles.red}>
            Họ tên: Nguyễn Văn A
          </li>
          <li>
            Nghề nghiệp: Frontend Developer
          </li>
          <li className={styles.blue}>
            Thành phố: Đà Nẵng
          </li>
        </ul>
    </>
    )
}