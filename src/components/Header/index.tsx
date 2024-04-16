import React from 'react'
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faHouse, faTv, faStore, faUserGroup, faGamepad, faGrip, faBell } from '@fortawesome/free-solid-svg-icons';
import { Col, ConfigProvider, Image, Input, Row, Tabs } from 'antd';
import type { TabsProps } from 'antd';
const { TabPane } = Tabs;


export default function Header() {    
  return (
    <Row justify='space-between' className={styles.headerWrapper}>
        <Col span={6}>
            <div className={styles.headerStart}>
                <FontAwesomeIcon icon={faFacebook} className={styles.logo}/>
                <Input prefix={<FontAwesomeIcon className={styles.iconInput} icon={faMagnifyingGlass} />} className={styles.input} placeholder="Tìm kiếm trên Facebook" />
            </div>
        </Col>
        <Col span={12} >
            <div className={styles.headerCenter}>
                <ConfigProvider
                    
                >
                    <Tabs className={styles.tabHeader}>
                        <TabPane key="1" tab={(<FontAwesomeIcon className={styles.iconCenter} icon={faHouse} />)}></TabPane>
                        <TabPane key="2" tab={(<FontAwesomeIcon className={styles.iconCenter} icon={faTv} />)}></TabPane>
                        <TabPane key="3" tab={(<FontAwesomeIcon className={styles.iconCenter} icon={faStore} />)}></TabPane>
                        <TabPane key="4" tab={(<FontAwesomeIcon className={styles.iconCenter} icon={faUserGroup} />)}></TabPane>
                        <TabPane key="5" tab={(<FontAwesomeIcon className={styles.iconCenter} icon={faGamepad} />)}></TabPane>
                    </Tabs>
                </ConfigProvider>
                
            </div>
        </Col>
        <Col span={6}>
            <div className={styles.headerEnd}>
                <div className={styles.iconWrap}>
                    <FontAwesomeIcon className={styles.iconEnd} icon={faGrip} />
                </div>
                <div className={styles.iconWrap}>
                    <FontAwesomeIcon className={styles.iconEnd} icon={faFacebookMessenger} /> 
                </div>
                <div className={styles.iconWrap}>
                    <FontAwesomeIcon className={styles.iconEnd} icon={faBell} />
                </div>
                <Image src={require("../../assets/image/iu.png")} className={styles.avatar} preview={false} alt="avatar" />
            </div>
        </Col>
    </Row>
  )
}
