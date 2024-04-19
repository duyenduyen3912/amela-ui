import { Button, Col, Image, Input, Popover, Row, Tooltip } from 'antd'
import Header from 'components/Header'
import { ItemCard } from 'components/Cards/Facebook/ItemCard';
import { ShowLess, ShowMore } from 'components/Cards/Facebook/Expand';
import { FriendContact } from 'components/Cards/Facebook/FriendContact';
import { ProfileCard } from 'components/Cards/Facebook/ProfileCard';
import { GroupCard } from 'components/Cards/Facebook/GroupCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {SmallDashOutlined} from "@ant-design/icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profileImg from "assets/image/iu.png"
import userGroupImg from "assets/image/user_group.png"
import watchImg from "assets/image/watch.png"
import savedImg from "assets/image/saved.png"
import messImg from "assets/image/mess.png"
import clockImg from "assets/image/clock.png"
import donateImg from "assets/image/donate.png"
import gameImg from "assets/image/game.png"
import homeImg from "assets/image/home.png"
import friendImg from "assets/image/friends.png"
import groupImg from "assets/image/group.png"
import groupImg1 from "assets/image/group1.png"
import groupImg2 from "assets/image/group2.png"
import groupImg3 from "assets/image/group3.jpg"
import groupImg4 from "assets/image/group4.png"
import groupImg5 from "assets/image/group5.png"
import groupImg6 from "assets/image/group6.png"
import livestreamImg from "assets/image/livestream.png"
import imageIconImg from "assets/image/image.png"
import emojiImg from "assets/image/emoji.png"
import messiImg from "assets/image/messi.jpg"
import jisooImg from "assets/image/jisoo.jpg"
import lisaImg from "assets/image/lisa.jpg"
import jennieImg from "assets/image/jennie.jpg"
import chaeyoungImg from "assets/image/chaeyoung.jpg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./styles.module.scss"
import StoryCard from 'components/Story/FacebookStory';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Post from 'components/Posts/Facebook';

const itemObj = [
    {
        name: "Bạn bè",
        img: userGroupImg,
    },
    {
        name: "Video",
        img: watchImg,
    },
    {
        name: "Đã lưu",
        img: savedImg,
    },
    {
        name: "Messenger",
        img: messImg,
    },
    {
        name: "Kỉ niệm",
        img: clockImg,
    },
    {
        name: "Chiến dịch gây quỹ",
        img: donateImg,
    },
    {
        name: "Chơi game",
        img: gameImg,
    },
    {
        name: "Marketplace",
        img: homeImg,
    },
    {
        name: "Nhóm",
        img: friendImg,
    },
]

const groupObj = [
    {
        img: groupImg,
        name: "Nhóm tìm và review anime siêu hay"
    },
    {
        img: groupImg1,
        name: "Hội những người yêu thích Doraemon"
    },
    {
        img: groupImg2,
        name: "Your name group fan"
    },
    {
        img: groupImg3,
        name: "Group này toàn Kẹo của Ngọt"
    },
    {
        img: groupImg4,
        name: "Cộng đồng Frontend Việt Nam"
    },
    {
        img: groupImg5,
        name: "ReactJS, React Native Việt Nam"
    },
    {
        img: groupImg6,
        name: "Nhóm tìm và review truyện ngôn tình"
    },
]

const friendContactObj = [
    {
        img: profileImg,
        name: "Lee Ji Eun",
    },
    {
        img: messiImg,
        name: "Messi",
    },
    {
        img: jisooImg,
        name: "Kim Jisoo",
    },
    {
        img: lisaImg,
        name: "Lisa",
    },
    {
        img: jennieImg,
        name: "Jennie Kim",
    },
    {
        img: chaeyoungImg,
        name: "Park Chaeyoung",
    }
]

export default function Facebook() {
    const [isOpenOption, setIsOpenOption] = useState(false)
    const [isOpenGroupOption, setIsOpenGroupOption] = useState(false)
  return (
    <div className={styles.wrapper}>
        <Header />
        <Row gutter={16} justify='space-between' className={styles.row}>
            <Col span={6} className='gutter-row' >
                <div className={styles.colLeft}>
                    <div className={styles.navWrapper}>
                        <ProfileCard img={profileImg} name ="Lee Ji Eun" />
                        <>
                            {
                                itemObj.slice(0, -5).map((item) => {
                                    return <ItemCard img={item.img} name={item.name} />
                                })
                            }
                            {
                                !isOpenOption && (<ShowMore onClick={setIsOpenOption}/>) 
                            }
                        
                            {
                                isOpenOption && (
                                    <div>
                                        <>
                                        {
                                            itemObj.slice(-5).map((item) => {
                                                return <ItemCard img={item.img} name={item.name} />
                                            })
                                        }
                                        </>
                                        <ShowLess onClick={setIsOpenOption}/>
                                    </div>
                                )
                            }
                        </>
                    </div>
                    <div className={styles.navWrapper}>
                        <p className={styles.title}>Lối tắt của bạn</p>
                            {
                                groupObj.slice(0, -2).map((item) => {
                                    return <GroupCard img={item.img} name={item.name} />
                                })
                            }
                            {
                                !isOpenGroupOption && (<ShowMore onClick={setIsOpenGroupOption}/>) 
                            }
                            {
                                isOpenGroupOption && (
                                    <div>
                                        {
                                             groupObj.slice(-2).map((item) => {
                                                return <GroupCard img={item.img} name={item.name} />
                                            })
                                        }
                                        <ShowLess onClick={setIsOpenGroupOption}/>
                                    </div>
                                )
                            }
                    </div>
                </div>
            </Col>
            <Col span={12}>
                <div className={styles.colCenter}>
                    <div className={styles.storiesWrap}>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={3.8}
                            navigation
                        >
                            <SwiperSlide className={styles.swiper}><StoryCard /></SwiperSlide>
                            <SwiperSlide className={styles.swiper}><StoryCard /></SwiperSlide>
                            <SwiperSlide className={styles.swiper}><StoryCard /></SwiperSlide>
                            <SwiperSlide className={styles.swiper}><StoryCard /></SwiperSlide>
                            <SwiperSlide className={styles.swiper}><StoryCard /></SwiperSlide>
                            <SwiperSlide className={styles.swiper}><StoryCard /></SwiperSlide>
                            <SwiperSlide className={styles.swiper}><StoryCard /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={styles.postWrap}>
                        <div className={styles.post}>
                            <div className={styles.postInput}>
                                <Image src={profileImg} preview={false} className={styles.avatar} />
                                <Input placeholder='Bạn đang nghĩ gì thế?' className={styles.input}/>
                            </div>
                            <Row justify='space-between'  className={styles.postItemRow}>
                                <Col span={8}>
                                    <div className={styles.postItem}>
                                        <Image src={livestreamImg} className={styles.postImg} preview={false}/>
                                        <p className={styles.postName}>Phát trực tiếp</p>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className={styles.postItem}>
                                        <Image src={imageIconImg} className={styles.postImg} preview={false}/>
                                        <p className={styles.postName}>Ảnh/video</p>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className={styles.postItem}>
                                        <Image src={emojiImg} className={styles.postImg} preview={false}/>
                                        <p className={styles.postName}>Cảm xúc/hoạt động</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Post />
                        <Post />
                    </div>
                    
                </div>
            </Col>
            <Col span={6} className={styles.colEndWrap}>
                <div className={styles.colEnd}>
                    <div className={styles.friendRequest}>
                        <div className={styles.friendRequestTop}>
                            <p className={styles.title}>Lời mời kết bạn</p>
                            <span className={styles.viewAll}>Xem tất cả</span>
                        </div>
                        <div className={styles.friendInfoWrap}>
                            <Image src={profileImg} className={styles.friendImg} preview={false} />
                            <div className={styles.friendInfo}>
                                <div>
                                    <span className={styles.friendName}>Lee Ji Eun</span>
                                    <span className={styles.timeRequest}>6 ngày</span>
                                </div>
                                <div className={styles.friendRequestAction}>
                                    <Button type='primary' className={styles.btn}>Xác nhận</Button>
                                    <Button className={`${styles.btn} ${styles.refuseBtn}`}>Xoá</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.friendContactWrap}>
                        <div className={styles.friendContactTop}>
                            <p className={styles.title}>Người liên hệ</p>
                            <div className={styles.friendContactIcon}>
                                <div className={styles.iconWrap}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
                                </div>
                                <div className={styles.iconWrap}>
                                    <SmallDashOutlined className={styles.icon}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.friendContact}>
                            {
                                friendContactObj.map((item) => {
                                    return <FriendContact img={item.img} name={item.name} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}
