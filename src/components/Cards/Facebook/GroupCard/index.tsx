import { Image } from 'antd'
import React from 'react'
import styles from "./styles.module.scss"
export function GroupCard({img, name} : {img: string, name: string}) {
    return (
      <div className={styles.wrapper}>
          <Image src={img} alt="avatar" className={styles.group} preview={false} />
          <p className={styles.name}>{name}</p>
      </div>
    )
  }