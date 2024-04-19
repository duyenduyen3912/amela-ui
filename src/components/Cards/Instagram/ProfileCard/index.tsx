import { Image } from "antd"
import styles from "./styles.module.scss"
import profileImg from "assets/image/jisoo.jpg"

export function ProfileCard() {
    return (
      <div className={styles.wrapper}>
          <Image src={profileImg} preview={false} className={styles.img}/>
          <p className={styles.name}>Profile</p>
      </div>
    )
  }