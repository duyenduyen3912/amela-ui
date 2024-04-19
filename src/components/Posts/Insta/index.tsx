import React from 'react'
import styles from "./styles.module.scss"
import messiImg from "assets/image/messi.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Image, Input } from 'antd'
import { BookmarkBorderOutlined, FavoriteBorderOutlined, MoreHorizOutlined, SendOutlined, SentimentSatisfiedAltOutlined } from '@mui/icons-material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
export default function Post() {
  return (
    <div className={styles.post}>
        <div className={styles.postTop}>
            <div className={styles.postAuthor}>
                <Image src={messiImg} preview={false} className={styles.authorImg}/>
                <p className={styles.authorName}>leomessi</p>
                <span className={styles.time}>3d</span>
            </div>
            <MoreHorizOutlined className={styles.icon}/>
        </div>
        <div className={styles.postContent}>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                pagination
                className={styles.swiper}
            >
                <SwiperSlide><Image src={messiImg} className={styles.image} preview={false}/></SwiperSlide>
                <SwiperSlide><Image src={messiImg} className={styles.image} preview={false}/></SwiperSlide>
                <SwiperSlide><Image src={messiImg} className={styles.image} preview={false}/></SwiperSlide>
            </Swiper>
        </div>
        <div className={styles.postReact}>
            <div className={styles.reactIconWrap}>
                <FavoriteBorderOutlined className={styles.reactIcon}/>
                <FontAwesomeIcon icon={faComment} className={styles.reactIcon}/>
                <SendOutlined className={styles.reactIcon} />
            </div>
                <BookmarkBorderOutlined className={styles.reactIcon} />
        </div>
        <p className={styles.count}>75,000,000 likes</p>
        <div className={styles.statusWrap}>
            <p className={styles.authorName}>leomessi</p>  
            <div>CAMPEONES DEL MUNDO!!!!!!! 🌎🏆</div>
        </div>
        <p className={styles.comment}>View all 20,000,000 comments</p>
        <Input placeholder='Add a comment...' size='large' suffix={<SentimentSatisfiedAltOutlined className={styles.inputIcon}/>} className={styles.input}/>
    </div>
  )
}
