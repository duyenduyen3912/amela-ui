import { Image } from 'antd'
import styles from "./styles.module.scss"
import profileImg from "assets/image/iu.png"
import image from "assets/image/story.png"

export default function StoryCard() {
  return (
    <div style={{backgroundImage: `url(${image})`}} className={styles.wrapper}>
        <div className={styles.storyWrap} >
            <div className={styles.avatarWrap}>
                <Image src={profileImg} className={styles.avatar} preview={false}/>
            </div>
            <div className={styles.nameWrap}>
                <p className={styles.name}>Lee Ji Eun</p>
            </div>
        </div>
    </div>
  )
}
