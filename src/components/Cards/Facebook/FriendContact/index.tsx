import { Image } from 'antd'
import React from 'react'
import styles from "./styles.module.scss"

export function FriendContact({img, name} : {img: string, name: string}) {
    return (
      <div className={`${styles.wrapper} ${styles.friendContactWrapper}`}>
          <Image src={img} alt="avatar" className={styles.avatarContact} preview={false} />
          <p className={styles.name}>{name}</p>
      </div>
    )
  }
