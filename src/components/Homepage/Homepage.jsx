import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import './homepage.css'

import { useGetCryptosQuery} from '../../services/cryptoApi';
import { Currencies, News } from '../../components';
import Loader from '../Loader/Loader';
const { Title } = Typography;
const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats
    
    if(isFetching) return <Loader/>;

    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Crypto Currencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Top 10 Crypto Currencies</Title>
                <Title level={3} className='show-more'><Link to="/currencies">Show more</Link></Title>
            </div>
            {/* simplified returns 10 currencies vs 100 */}
            <Currencies simplified/>

            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Latest Crypto News</Title>
                <Title level={3} className='show-more'><Link to="/news">Show more</Link></Title>
            </div>
            {/* simplified returns 6 new articles vs 12 */}
            <News simplified/>
        </>
    )
}

export default Homepage
