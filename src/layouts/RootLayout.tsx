import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    GlobalOutlined,
    VideoCameraOutlined,
    BankOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import styles from './root-layout.module.css'
import {Space} from 'antd/lib';
import {NavLink, Outlet} from 'react-router-dom';
const {Header, Sider, Content} = Layout;

const RootLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer},
    } = theme.useToken();

    return(
        <Layout className={styles.container}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className={styles.logo}/>
                <Menu
                    theme="dark"
                    mode="inline"
                    items={[
                        {
                            key:'1',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/">Ingresos</NavLink>),

                        },
                        {
                            key:'2',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/profesores">Profesores</NavLink>),
                        },
                        {
                            key:'3',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/cursos">Cursos</NavLink>),
                        },
                        {
                            key:'4',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/materias">Materias</NavLink>),
                        },
                        {
                            key:'4',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/lista">Lista</NavLink>),
                        },

                    ]}
                    />
            </Sider>
            <Layout className={styles.siteLayout}>
                <Header style={{ padding: 0, background: colorBgContainer}}>
                    <Space>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: styles.trigger,
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <h1 className={styles.title} >TDAH</h1>
                    </Space>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        
                    }}>
                        <Outlet/>
                    </Content>
            </Layout>
        </Layout>
    );
};

export default RootLayout