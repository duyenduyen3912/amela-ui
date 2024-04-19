import { Image, Popover } from 'antd'
import {SmallDashOutlined} from "@ant-design/icons"
import styles from "./styles.module.scss"
import profileImg from "assets/image/iu.png"
import contentImg from "assets/image/story.png"
import likeIcon from "assets/image/like.png"
import hahaIcon from "assets/image/haha.png"
import likeAction from "assets/image/action_like.png"
import cmtAction from "assets/image/action_cmt.png"
import shareAction from "assets/image/action_share.png"
import likeReactIcon from "assets/image/like_icon.png"
import loveReactIcon from "assets/image/love.png"
import lovelyReactIcon from "assets/image/lovely.png"
import smileReactIcon from "assets/image/smile.png"
import wowReactIcon from "assets/image/wow.png"
import sadReactIcon from "assets/image/sad.png"
import angryReactIcon from "assets/image/angry.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import ReactIcon from 'components/React'

const reactObj = [
    {
        title: "Thích",
        img: likeReactIcon,
    },
    {
        title: "Yêu thích",
        img: loveReactIcon,
    },
    {
        title: "Thương thương",
        img: lovelyReactIcon,
    },
    {
        title: "Haha",
        img: smileReactIcon,
    },
    {
        title: "Wow",
        img: wowReactIcon,
    },
    {
        title: "Buồn",
        img: sadReactIcon,
    },
    {
        title: "Phẫn nộ",
        img: angryReactIcon,
    },
]

const content = (
    <div className={styles.reactIconWrap}>
        {
            reactObj.map((item) => {
                return <ReactIcon title={item.title} img={item.img} />
            })
        }
    </div>
)

export default function Post() {
  return (
    <div className={styles.status}>
        <div className={styles.statusTop}>
            <div className={styles.statusAuthor}>
                <Image src={profileImg} preview={false} className={styles.authorImg} />
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
                <Image src={contentImg} preview={false} className={styles.contentImg}/>
            </div>
        </div>
        <div className={styles.statusReact}>
            <div className={styles.like}>
                <span>
                    <Image src={likeIcon} preview={false}  className={styles.reactImg} />
                    <Image src={hahaIcon} preview={false}  className={styles.reactImg} />
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
                    <Image src={likeAction} preview={false} className={styles.actionIcon}/>
                    <span className={styles.actionName}>Thích</span>
                </div>
            </Popover>
            <div className={styles.action}>
                <Image src={cmtAction} preview={false} className={styles.actionIcon}/>
                <span className={styles.actionName}>Bình luận</span>
            </div>
            <div className={styles.action}>
                <Image src={shareAction} preview={false} className={styles.actionIcon}/>
                <span className={styles.actionName}>Chia sẻ</span>
            </div>
        </div>
    </div>
  )
}
