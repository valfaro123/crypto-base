import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import icon from '../../images/cryptocurrency.png'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className='logo'>
                    <Link to="/">CryptoBase</Link>
                </Typography.Title>
            </div>
            <Menu defaultSelectedKeys={['home']} className='ant-menu' theme='dark'>
                <Menu.Item key={'home'} icon={<HomeOutlined/>}>
                    <Link to='/crypto-base'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <Link to='/currencies'>Currencies</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
