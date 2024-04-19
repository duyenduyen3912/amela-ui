import { Image } from 'antd'
import {Home, Search, ExploreOutlined, MovieOutlined, SendOutlined, FavoriteBorderOutlined, AddBoxOutlined, MenuOutlined} from '@mui/icons-material';
import React from 'react'
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThreads } from '@fortawesome/free-brands-svg-icons';
import { ItemCard } from 'components/Cards/Instagram/ItemCard';
import { ProfileCard } from 'components/Cards/Instagram/ProfileCard';


const objNavItem = [
  {
    Icon: <Home />,
    name: "Home"
  },
  {
    Icon: <Search />,
    name: "Search"
  },
  {
    Icon: <ExploreOutlined />,
    name: "Explore"
  },
  {
    Icon: <MovieOutlined />,
    name: "Reels"
  },
  {
    Icon: <SendOutlined />,
    name: "Reels"
  },
  {
    Icon: <FavoriteBorderOutlined />,
    name: "Notifications"
  },
  {
    Icon: <AddBoxOutlined />,
    name: "Create"
  },
  {
    Icon: <FontAwesomeIcon icon={faThreads} />,
    name: "Threads"
  },
  {
    Icon: <MenuOutlined />,
    name: "More"
  },
]


export default function Nav() {
  document.title = "Instagram"
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.logoWrap}>
              <Image src={require("../../assets/image/insta.png")} preview={false} className={styles.logo}/>
          </div>
          <div className={styles.nav}>
              {
                objNavItem.slice(0, -2).map((item) => {
                  return <ItemCard Icon={item.Icon} name={item.name} />
                })
              }
              <ProfileCard />
          </div>
      </div>
      <div>
              {
                objNavItem.slice(-2).map((item) => {
                  return <ItemCard Icon={item.Icon} name={item.name} />
                })
              }
      </div>
    </div>
  )
}
