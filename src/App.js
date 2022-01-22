import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, CryptoDetails, Currencies, News } from './components'
import './App.css';

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar/>
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path="/crypto-base" element={<Homepage/>}/>
                            <Route path="/currencies" element={<Currencies/>}/>
                            <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
                            <Route path="/news" element={<News/>}/>
                        </Routes>
                    </div>
                </Layout>
                

                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
                    <Link to="/">
                        Cryptoverse Inc.
                    </Link> <br />
                    All Rights Reserved.
                    </Typography.Title>
                    <Space>
                    <Link to="/">Home</Link>
                    <Link to="/currencies">Currencies</Link>
                    <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
