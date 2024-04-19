import { Image } from 'antd'
import React from 'react'
import styles from "./styles.module.scss"

export function ProfileCard({img, name} : {img: string, name: string}) {
    return (
      <div className={styles.wrapper}>
          <Image src={img} alt="avatar" className={styles.avatar} preview={false} />
          <p className={styles.name}>{name}</p>
      </div>
    )
  }
