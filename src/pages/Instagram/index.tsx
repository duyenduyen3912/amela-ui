import Nav from 'components/Nav'
import React from 'react'
import styles from "./styles.module.scss"
import Grid from '@mui/material/Grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import messiImg from "assets/image/messi.jpg"
import jisooImg from "assets/image/jisoo.jpg"
import lisaImg from "assets/image/lisa.jpg"
import jennieImg from "assets/image/jennie.jpg"
import chaeyoungImg from "assets/image/chaeyoung.jpg"
import iuImg from "assets/image/iu.png"
import InstaStory from 'components/Story/InstaStory';
import Post from 'components/Posts/Insta';
import { FriendCard } from 'components/Cards/Instagram/FriendCard';
const storyObj = [
  {
      img: jisooImg,
      name: 'sooyaaaa__',
  },
  {
    img: jennieImg,
    name: 'jennierubyjane',
  },
  {
    img: chaeyoungImg,
    name: 'roses_are_rosie',
  },
  {
    img: lisaImg,
    name: 'lalalalisa_m',
  },
  {
    img: messiImg,
    name: 'leomessi',
  },
  {
    img: iuImg,
    name: 'dlwlrma',
  },
  {
    img: jisooImg,
    name: 'sooyaaa__',
  },
  {
    img: jisooImg,
    name: 'sooyaaa__',
  },
  {
    img: jisooImg,
    name: 'sooyaaa__',
  },
  {
    img: jisooImg,
    name: 'sooyaaa__',
  },
]

const friends = [
  {
    img: jennieImg,
    name: "jennierubyjane",
    nickname: "J",
    action: "Follow"
  },
  {
    img: lisaImg,
    name: "lalalalisa_m",
    nickname: "Lisa",
    action: "Follow"
  },
  {
    img: chaeyoungImg,
    name: "roses_are_rosie",
    nickname: "ROSÉ",
    action: "Follow"
  },
  {
    img: iuImg,
    name: "dlwalrm",
    nickname: "IU",
    action: "Follow"
  },
  {
    img: messiImg,
    name: "leomessi",
    nickname: "Messi",
    action: "Follow"
  },
]
export default function Instagram() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrap}>
        <Nav />
      </div>
       <div className={styles.containerWrap}>
            <Grid container justifyContent={"center"}>
                <Grid item xl={5}>
                  <div className={styles.container}>
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={16}
                      slidesPerView={8}
                      navigation
                      className={styles.swiper}
                    >
                      {
                        storyObj.map((item) => {
                          return <SwiperSlide><InstaStory img={item.img} name={item.name}/></SwiperSlide>
                        })
                      }
                    </Swiper>
                    <div className={styles.posts}>
                      <Post />
                      <Post />
                      <Post />
                    </div>
                  </div>
                </Grid>
                <Grid item xl={3}>
                      <div className={styles.friends}>
                          <FriendCard img={jisooImg} name='sooyaaa__' nickname='Jisoo' action='Switch'/>
                          <div className={styles.suggested}>
                                <span className={styles.title}>Suggested for you</span>
                                <span className={styles.action}>See All</span>
                          </div>
                          {
                            friends.map((item) => {
                              return <FriendCard img={item.img} name={item.name} nickname={item.nickname} action={item.action} />
                            })
                          }
                      </div>
                </Grid>
            </Grid>
       </div>
    </div>
  )
}
