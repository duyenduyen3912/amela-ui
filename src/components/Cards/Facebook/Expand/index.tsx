import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "./styles.module.scss"
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
