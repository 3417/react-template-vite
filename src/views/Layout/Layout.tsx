import React, { useEffect, useState,Suspense } from 'react';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar,Spin } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';
import { Outlet,Link,useNavigate,useLocation } from 'react-router-dom'
const Home = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const [selectedKeys,setSelectedKeys] = useState([]);
    const navigate = useNavigate();
    const router = useLocation()
    const handleMenuClick = ({itemKey, event, isOpen}) =>{
        navigate(`${itemKey}`);
    }
    const handleSelect = (selected) =>{
        setSelectedKeys([...selected.selectedKeys])
    }
    useEffect(()=>{
        setSelectedKeys([router.pathname])
    },[])
    return (
        <Layout style={{ height: 'inherit' }}>
            <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <div>
                    <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
                        <Nav.Header>
                            <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />
                        </Nav.Header>
                        <span>semi Design</span>
                        <Nav.Footer>
                            <Button
                                theme="borderless"
                                icon={<IconBell size="large" />}
                                style={{
                                    color: 'var(--semi-color-text-2)',
                                    marginRight: '12px',
                                }}
                            />
                            <Button
                                theme="borderless"
                                icon={<IconHelpCircle size="large" />}
                                style={{
                                    color: 'var(--semi-color-text-2)',
                                    marginRight: '12px',
                                }}
                            />
                            <Avatar color="orange" size="small">
                                YJ
                            </Avatar>
                        </Nav.Footer>
                    </Nav>
                </div>
            </Header>
            <Layout>
                <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                    <Nav
                        style={{ maxWidth: 220, height: '100%' }}
                        defaultSelectedKeys={['/home']}
                        selectedKeys={selectedKeys}
                        items={[
                            { itemKey: '/home', text: '首页', icon: <IconHome size="large" /> },
                            { itemKey: '/workbench', text: '基础数据', icon: <IconHistogram size="large" /> },
                            { itemKey: '/table', text: 'table数据', icon: <IconLive size="large" /> },
                            { itemKey: '/setting', text: '设置', icon: <IconSetting size="large" /> },
                        ]}
                        onClick={handleMenuClick}
                        onSelect={handleSelect}
                        footer={{
                            collapseButton: true,
                        }}
                    />
                </Sider>
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                    }}
                >
                    {/* <Breadcrumb
                        style={{
                            marginBottom: '24px',
                        }}
                        routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
                    /> */}
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            height: '376px',
                            padding: '32px',
                        }}
                    >

                        <Suspense fallback={<div><Spin /></div>}>
                            <Outlet />
                        </Suspense>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}


export default Home

