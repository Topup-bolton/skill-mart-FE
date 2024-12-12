import React, { useState } from 'react';
import { Row, Col, Typography, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Header.css';
import heroImage from '../../../assets/home-hero-image.png';
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const Header: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const searchLaborer = async () => {
        navigate("/find-laborer", { state: { search: searchValue } }
        );
    }

    return (
        <section className="header-section">
            <div className="header-background-ring"></div>
            <Row justify="center" align="middle" className="header-row">
                {/* Text Section */}
                <Col span={12} className="header-content">
                    <Title  className="header-title">
                        Find the Perfect Match <br />
                        <span>and<span className="highlighted">  Get-It-Done</span></span>
                    </Title>
                    <Text className="header-subtitle">
                        Perfect way to find people to do your jobs. Any Work - Any Time - Any Where
                    </Text>
                    <div className="search-bar-container">
                        <Input
                            placeholder="Search by Worker type"
                            //prefix={}
                            className="search-bar"
                            onChange={(e) => setSearchValue(e.target.value)} // Update state
                            onPressEnter={searchLaborer}
                        />
                        <Button onClick={searchLaborer} className="search-button">
                            <SearchOutlined />
                        </Button>
                    </div>
                </Col>

                {/* Hero Image Section */}
                <Col span={12} className="header-image-container">
                    <img src={heroImage} alt="Hero" className="hero-image" />
                    {/* <div className="service-callout">
                        <Text className="callout-text">Need a person for repair work at home?</Text>
                        <Button type="primary" className="callout-button">Obtain Service</Button>
                    </div> */}
                </Col>
            </Row>
        </section>
    );
};

export default Header;
