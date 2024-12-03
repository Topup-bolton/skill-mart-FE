import React from 'react';
import { Row, Col, Typography, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Header.css';
import heroImage from '../../../assets/home-hero-image.png';

const { Title, Text } = Typography;

const Header: React.FC = () => {
    return (
        <section className="header-section">
            <div className="header-background-ring"></div>
            <Row justify="center" align="middle" className="header-row">
                {/* Text Section */}
                <Col span={12} className="header-content">
                    <Title level={2} className="header-title">
                         Find the Perfect Match 
                        <h2>and <span className="highlighted">Get-It-Done</span></h2>
                    </Title>
                    <Text className="header-subtitle">
                        Perfect way to find people to do your jobs. Easy Work - Any Time - Any Place
                    </Text>
                    <div className="search-bar-container">
                        <Input
                            placeholder="Job Title or Key Word"
                            //prefix={}
                            className="search-bar"
                        />
                        <Button  className="search-button">
                        <SearchOutlined />
                        </Button>
                    </div>
                </Col>

                {/* Hero Image Section */}
                <Col span={12} className="header-image-container">
                    <img src={heroImage} alt="Hero" className="hero-image" />
                    <div className="service-callout">
                        <Text className="callout-text">Need a person for repair work at home?</Text>
                        <Button type="primary" className="callout-button">Obtain Service</Button>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Header;
