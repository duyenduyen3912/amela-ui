import { Image } from 'antd'
import React from 'react'
import styles from "./styles.module.scss"

export function FriendCard({img, name, nickname, action} : {img: any, name: string, nickname: string, action: string}) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.profileWrap}>
            <Image src={img} preview={false} className={styles.img}/>
            <div className={styles.profile}>
                <p className={styles.name}>{name}</p>
                <p className={styles.nickname}>{nickname}</p>
            </div>
        </div>
        <div className={styles.action}>{action}</div>
      </div>
    )
  }