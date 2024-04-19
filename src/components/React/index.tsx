import { Image, Tooltip } from 'antd'
import React from 'react'
import styles from "./styles.module.scss"
export default function ReactIcon({title, img} : {title: string, img: any}) {
  return (
    <Tooltip title={title}>
        <div className={styles.iconImgWrap} >
            <Image src={img} preview={false} className={styles.iconImg} />
        </div>
    </Tooltip>
  )
}
