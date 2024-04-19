import { Image } from 'antd'
import React from 'react'
import styles from "./styles.module.scss"
export default function InstaStory({img, name} : {img: any, name: string}) {
  return (
    <div className={styles.wrapper}>
            <div className={styles.imgWrap}>
                <Image src={img} preview={false} className={styles.img}/>
            </div>
            <p className={styles.name}>{name}</p>
    </div>
  )
}
