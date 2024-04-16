import { Image } from 'antd'
import styles from "./styles.module.scss"

export default function StoryCard() {
  return (
    <div style={{backgroundImage: `url(${require("../../assets/image/story.png")})`}} className={styles.wrapper}>
        <div className={styles.storyWrap} >
            <div className={styles.avatarWrap}>
                <Image src={require("../../assets/image/iu.png")} className={styles.avatar} preview={false}/>
            </div>
            <div className={styles.nameWrap}>
                <p className={styles.name}>Lee Ji Eun</p>
            </div>
        </div>
    </div>
  )
}
