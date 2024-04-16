import { Button, Col, Image, Input, Popover, Row, Tooltip } from 'antd'
import Header from 'components/Header'
import  { FriendContact, GroupCard, ItemCard, ProfileCard, ShowLess, ShowMore, } from 'components/ItemCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {SmallDashOutlined} from "@ant-design/icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./styles.module.scss"
import StoryCard from 'components/StoryCard';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const content = (
    <div className={styles.reactIconWrap}>
         <Tooltip title="Thích">
            <div className={styles.iconImgWrap} >
                <Image src={require("../../assets/image/like_icon.png")} preview={false} className={styles.iconImg} />
            </div>
         </Tooltip>
         <Tooltip title="Yêu thích">
            <div className={styles.iconImgWrap} >
                <Image src={require("../../assets/image/love.png")} preview={false} className={styles.iconImg} />
            </div>
         </Tooltip>
         <Tooltip title="Thương thương">
            <div className={styles.iconImgWrap} >
                <Image src={require("../../assets/image/lovely.png")} preview={false} className={styles.iconImg} />
            </div>
         </Tooltip>
         <Tooltip title="Haha">
            <div className={styles.iconImgWrap} >
                <Image src={require("../../assets/image/smile.png")} preview={false} className={styles.iconImg} />
            </div>
         </Tooltip>
         <Tooltip title="Wow">
            <div className={styles.iconImgWrap} >
                <Image src={require("../../assets/image/wow.png")} preview={false} className={styles.iconImg} />
            </div>
         </Tooltip>
         <Tooltip title="Buồn">
            <div className={styles.iconImgWrap} >
                <Image src={require("../../assets/image/sad.png")} preview={false} className={styles.iconImg} />
            </div>
         </Tooltip>
         <Tooltip title="Phẫn nộ">
            <div className={styles.iconImgWrap} >
                <Image src={require("../../assets/image/angry.png")} preview={false} className={styles.iconImg} />
            </div>
         </Tooltip>
    </div>
);

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
                    <ProfileCard img={require("../../assets/image/iu.png")} name ="Lee Ji Eun" />
                    <ItemCard img={require("../../assets/image/user_group.png")} name ="Bạn bè" />
                    <ItemCard img={require("../../assets/image/watch.png")} name ="Video" />
                    <ItemCard img={require("../../assets/image/saved.png")} name ="Đã lưu" />
                    <ItemCard img={require("../../assets/image/mess.png")} name ="Messenger" />
                    {
                        !isOpenOption && (<ShowMore onClick={setIsOpenOption}/>) 
                    }
                   
                    {
                        isOpenOption && (
                            <div>
                                <ItemCard img={require("../../assets/image/clock.png")} name ="Kỉ niệm" />
                                <ItemCard img={require("../../assets/image/donate.png")} name ="Chiến dịch gây quỹ" />
                                <ItemCard img={require("../../assets/image/game.png")} name ="Chơi game" />
                                <ItemCard img={require("../../assets/image/home.png")} name ="Marketplace" />
                                <ItemCard img={require("../../assets/image/friends.png")} name ="Nhóm" />
                                <ShowLess onClick={setIsOpenOption}/>
                            </div>
                        )
                    }
                    </div>
                    <div className={styles.navWrapper}>
                        <p className={styles.title}>Lối tắt của bạn</p>
                            <GroupCard img={require("../../assets/image/group.png")} name ="Nhóm tìm và review anime siêu hay" />
                            <GroupCard img={require("../../assets/image/group1.png")} name ="Hội những người yêu thích Doraemon" />
                            <GroupCard img={require("../../assets/image/group2.png")} name ="Your Name group Fan" />
                            <GroupCard img={require("../../assets/image/group3.jpg")} name ="Group này toàn Kẹo của Ngọt" />
                            <GroupCard img={require("../../assets/image/group4.png")} name ="Cộng đồng Frontend Việt Nam" />
                            {
                                !isOpenGroupOption && (<ShowMore onClick={setIsOpenGroupOption}/>) 
                            }
                            {
                                isOpenGroupOption && (
                                    <div>
                                        <GroupCard img={require("../../assets/image/group5.png")} name ="ReactJS, React Native Việt Nam" />
                                        <GroupCard img={require("../../assets/image/group6.png")} name ="Nhóm tìm và review truyện ngôn tình" />
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
                                <Image src={require("../../assets/image/iu.png")} preview={false} className={styles.avatar} />
                                <Input placeholder='Bạn đang nghĩ gì thế?' className={styles.input}/>
                            </div>
                            <Row justify='space-between'  className={styles.postItemRow}>
                                <Col span={8}>
                                    <div className={styles.postItem}>
                                        <Image src={require("../../assets/image/livestream.png")} className={styles.postImg} preview={false}/>
                                        <p className={styles.postName}>Phát trực tiếp</p>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className={styles.postItem}>
                                        <Image src={require("../../assets/image/image.png")} className={styles.postImg} preview={false}/>
                                        <p className={styles.postName}>Ảnh/video</p>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div className={styles.postItem}>
                                        <Image src={require("../../assets/image/emoji.png")} className={styles.postImg} preview={false}/>
                                        <p className={styles.postName}>Cảm xúc/hoạt động</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {
                            Array(10).fill(null).map(() => {
                                return (
                                    <div className={styles.status}>
                                        <div className={styles.statusTop}>
                                            <div className={styles.statusAuthor}>
                                                <Image src={require("../../assets/image/iu.png")} preview={false} className={styles.authorImg} />
                                                <div className={styles.authorWrap}>
                                                    <p className={styles.authorName}>Lee Ji Eun</p>
                                                    <div className={styles.postTime}>15 phút</div>
                                                </div>
                                            </div>
                                            <div className={styles.statusAction}>
                                                <SmallDashOutlined className={styles.statusIcon}/>
                                                <FontAwesomeIcon icon={faXmark} className={styles.statusIcon}/>
                                            </div>
                                        </div>
                                        <div >
                                            <p className={styles.content}>Tiểu thuyết Khó dỗ dành của tác giả Trúc Dĩ đã được mua bản quyền và xuất bản vào tháng 12/2022</p>
                                            <div className={styles.contentImgWrap}>
                                                <Image src={require("../../assets/image/story.png")} preview={false} className={styles.contentImg}/>
                                            </div>
                                        </div>
                                        <div className={styles.statusReact}>
                                            <div className={styles.like}>
                                                <span>
                                                    <Image src={require("../../assets/image/like.png")} preview={false}  className={styles.reactImg} />
                                                    <Image src={require("../../assets/image/haha.png")} preview={false}  className={styles.reactImg} />
                                                </span>
                                                <span className={styles.count}>857</span>
                                            </div>
                                            <div className={styles.comment}>
                                                <span className={styles.count}>91 bình luận</span>
                                                <span className={styles.count}>18 lượt chia sẻ</span>
                                            </div>
                                        </div>
                                        <div className={styles.actions}>
                                            <Popover content={content} className={styles.popoverIcon}>
                                                <div className={styles.action}>
                                                    <Image src={require("../../assets/image/action_like.png")} preview={false} className={styles.actionIcon}/>
                                                    <span className={styles.actionName}>Thích</span>
                                                </div>
                                            </Popover>
                                            <div className={styles.action}>
                                                <Image src={require("../../assets/image/action_cmt.png")} preview={false} className={styles.actionIcon}/>
                                                <span className={styles.actionName}>Bình luận</span>
                                            </div>
                                            <div className={styles.action}>
                                                <Image src={require("../../assets/image/action_share.png")} preview={false} className={styles.actionIcon}/>
                                                <span className={styles.actionName}>Chia sẻ</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                        
                        
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
                            <Image src={require("../../assets/image/iu.png")} className={styles.friendImg} preview={false} />
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
                            <FriendContact img={require("../../assets/image/iu.png")} name="Lee Ji Eun" />
                            <FriendContact img={require("../../assets/image/messi.jpg")} name="Leo Messi" />
                            <FriendContact img={require("../../assets/image/jisoo.jpg")} name="Kim Jisoo" />
                            <FriendContact img={require("../../assets/image/lisa.jpg")} name="Lisa" />
                            <FriendContact img={require("../../assets/image/jennie.jpg")} name="Jennie Kim" />
                            <FriendContact img={require("../../assets/image/chaeyoung.jpg")} name="Park Chaeyoung" />
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}
