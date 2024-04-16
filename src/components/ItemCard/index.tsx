import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

export function ItemCard({img, name} : {img: string, name: string}) {
  return (
    <div className={styles.wrapper}>
        <Image src={img} alt="avatar" className={styles.img} preview={false} />
        <p className={styles.name}>{name}</p>
    </div>
  )
}

export function GroupCard({img, name} : {img: string, name: string}) {
  return (
    <div className={styles.wrapper}>
        <Image src={img} alt="avatar" className={styles.group} preview={false} />
        <p className={styles.name}>{name}</p>
    </div>
  )
}

export function ShowMore({onClick} : {onClick: any}) {
  const handleShow = () => {
    onClick(true)
  }
  return (
    <div className={styles.wrapper} onClick={handleShow}>
      <div className={styles.iconWrap}>
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon}/>
      </div>
        <p className={styles.name}>Xem thêm</p>
    </div>
  )
}

export function ShowLess({onClick} : {onClick: any}) {
  const handleHiden = () => {
    onClick(false)
  }
  return (
    <div className={styles.wrapper} onClick={handleHiden}>
      <div className={styles.iconWrap}>
          <FontAwesomeIcon icon={faChevronUp} className={styles.icon}/>
      </div>
        <p className={styles.name}>Ẩn bớt</p>
    </div>
  )
}

export function FriendContact({img, name} : {img: string, name: string}) {
  return (
    <div className={`${styles.wrapper} ${styles.friendContactWrapper}`}>
        <Image src={img} alt="avatar" className={styles.avatarContact} preview={false} />
        <p className={styles.name}>{name}</p>
    </div>
  )
}