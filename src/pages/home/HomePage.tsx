import React from 'react';
import { Row, Col, Typography, Input, Button, Card } from 'antd';
import {
    UserOutlined,
    SearchOutlined,
    SolutionOutlined,
    TeamOutlined,
    ToolOutlined,
} from '@ant-design/icons';
import './style/HomePage.css';
import UserHeader from '../../components/layout/header/user-header/UserHeader';
import Footer from '../../components/layout/footer/Footer';
import Gear from '../../assets/gear.png'
import heroImage from '../../assets/home-hero-image.png'

const { Title, Text } = Typography;

const HomePage: React.FC = () => {
    return (
        <>
            <img src={Gear} alt="Settings" className='gear-img' />
            <UserHeader />
            <div className="home-page-container">
                {/* Header Section */}
                <header className="header-section">
                    <Row justify="center" align="middle">
                        <Col span={12} className="header-content">
                            <Title level={2}>
                                Find the Perfect Match and <span className="highlighted">Get-It-Done</span>
                            </Title>
                            <Text>
                                Perfect way to find people to do your jobs. Easy Work - Any Time - Any Place
                            </Text>
                            <div className="search-bar-container">
                                <Input
                                    placeholder="Job Title or Key Word"
                                    prefix={<SearchOutlined />}
                                    className="search-bar"
                                />
                                <Button type="primary" className="search-button">Search</Button>
                            </div>
                        </Col>
                        <Col span={12} className="header-image">
                            <img src={heroImage} alt="Hero" className="hero-image" />
                            {/* <img src={heroImage} alt="Hero-1" className="hero-image" /> */}
                        </Col>
                    </Row>
                </header>

                {/* Services Section */}
                <section className="services-section">
                    <Title level={3}>Services</Title>
                    <Row gutter={[16, 16]} justify="center">
                        <Col span={4}>
                            <Card className="service-card" hoverable>
                                <UserOutlined style={{ fontSize: '2em' }} />
                                <Text>Beauty</Text>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card className="service-card" hoverable>
                                <ToolOutlined style={{ fontSize: '2em' }} />
                                <Text>Technician</Text>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card className="service-card" hoverable>
                                <SolutionOutlined style={{ fontSize: '2em' }} />
                                <Text>Automobile</Text>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card className="service-card" hoverable>
                                <TeamOutlined style={{ fontSize: '2em' }} />
                                <Text>Educational</Text>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* Featured Service Providers Section */}
                <section className="service-providers-section">
                    <Title level={3}>Meet Our Best Service Providers</Title>
                    <Row gutter={16} justify="center">
                        <Col span={6}>
                            <Card className="provider-card" hoverable>
                                <img src="/path/to/provider1.jpg" alt="Provider 1" className="provider-image" />
                                <Text>John Doe</Text>
                                <Text>Service Type</Text>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card className="provider-card" hoverable>
                                <img src="/path/to/provider2.jpg" alt="Provider 2" className="provider-image" />
                                <Text>Jane Doe</Text>
                                <Text>Service Type</Text>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* Benefits Section */}
                <section className="benefits-section">
                    <Title level={4}>Be Smart to Use SkillMart</Title>
                    <Row justify="center">
                        <Col span={8}>
                            <div className="benefit-item">
                                <UserOutlined className="benefit-icon" /> Free Registration
                            </div>
                            <div className="benefit-item">
                                <SolutionOutlined className="benefit-icon" /> Trade Your Services
                            </div>
                            <div className="benefit-item">
                                <TeamOutlined className="benefit-icon" /> Contact the Best Service Providers
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
