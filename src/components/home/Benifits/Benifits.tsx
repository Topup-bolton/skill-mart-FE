// import React from 'react';
// import { Row, Col, Typography } from 'antd';
// import {
//     UserOutlined,
//     SolutionOutlined,
//     TeamOutlined,
// } from '@ant-design/icons';
// import './Benifits.css';

// const { Title, Text } = Typography;

// const Benefits: React.FC = () => {
//     return (
//         <section className="benefits-section">
           
//             <Row gutter={[16, 16]} justify="center" className="benefits-row">
//             <Title level={3} className="benefits-title">
//                 Be Smart to Use <span className="highlighted">SkillMart</span>
//             </Title>
//                 <Col span={12}>
//                     <Row className="benefit-item">
                        
//                         <UserOutlined className="benefit-icon" />
//                         <Title> Free Registration</Title>
//                         <Text className="benefit-text">Register for free</Text>
//                     </Row>
//                     <div className="benefit-item">
//                         <SolutionOutlined className="benefit-icon" />
//                         <Title> Trade Your Services</Title>
//                         <Text className="benefit-text">Trade with you good at and find the clients easily.</Text>
//                     </div>
//                     <div className="benefit-item">
//                         <TeamOutlined className="benefit-icon" />
//                         <Title>Contact the Best Service Providers </Title>
//                         <Text className="benefit-text">
                            
//                             Search, Select and Contact the Best Service Providers for your works
//                         </Text>
//                     </div>
//                 </Col>
//             </Row>
//         </section>
//     );
// };

// export default Benefits;



import React from 'react';
import { Row, Col, Typography } from 'antd';
import { UserOutlined, SolutionOutlined, TeamOutlined } from '@ant-design/icons';
import './Benifits.css';
import { MdDraw } from "react-icons/md";
import gearImage from '../../../assets/gear.png';

const { Title, Text } = Typography;

const Benefits: React.FC = () => {
    return (
        <section className="benefitsSection">
            
            <Row gutter={[16, 16]} justify="center" className="benefitsRow">
                <Col span={8}>
                    <Title level={3} className="benefitsTitle">
                        Be Smart to Use 
                    </Title>
                    <span className="benefitsTitle">SkillMart</span>
                    <div className="services-underline"></div>
                </Col>
                <Col span={15}>
                    <Row className="benefitItem">
                        <MdDraw className="benefitIcon" />
                        <div>
                            <Title level={4}>Free Registration</Title>
                            <Text className="benefitText">Register for free.</Text>
                        </div>
                    </Row>
                    <Row className="benefitItem">
                        <SolutionOutlined className="benefitIcon"/>
                        <div>
                            <Title level={4}>Trade Your Services</Title>
                            <Text className="benefitText">Trade what you are good at and find clients easily.</Text>
                        </div>
                    </Row>
                    <Row className="benefitItem">
                        <TeamOutlined className="benefitIcon" />
                        <div>
                            <Title level={4}>Contact the Best Service Providers</Title>
                            <Text className="benefitText">Search, select, and contact the best service providers for your works.</Text>
                        </div>
                    </Row>
                </Col>
                <Col span={1}>
                <img src={gearImage} alt="Settings" className="gear-img" />
                </Col>
            </Row>
        </section>
    );
};

export default Benefits;
