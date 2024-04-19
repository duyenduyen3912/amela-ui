import { Image } from 'antd'
import React from 'react'
import styles from "./styles.module.scss"

export function ItemCard({Icon, name} : {Icon: any, name: string}) {
    return (
      <div className={styles.wrapper}>
          {Icon}
          <p className={styles.name}>{name}</p>
      </div>
    )
}
