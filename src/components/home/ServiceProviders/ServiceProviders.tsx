// import React from 'react';
// import { Row, Col, Typography, Card } from 'antd';
// import './ServiceProviders.css';

// const { Title } = Typography;

// const ServiceProviders: React.FC = () => {
//     const providers = [
//         { name: 'John Doe', service: 'Beauty', img: '/path/to/provider1.jpg' },
//         { name: 'Jane Doe', service: 'Technician', img: '/path/to/provider2.jpg' },
//     ];

//     return (
//         <section className="service-providers-section">
//             <Title level={3}>Meet Our Best Service Providers</Title>
//             <Row gutter={16} justify="center">
//                 {providers.map((provider, index) => (
//                     <Col span={6} key={index}>
//                         <Card className="provider-card" hoverable>
//                             <img src={provider.img} alt={provider.name} className="provider-image" />
//                             <div className="provider-name">{provider.name}</div>
//                             <div className="provider-service">{provider.service}</div>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </section>
//     );
// };

// export default ServiceProviders;


import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import './ServiceProviders.css';

const { Title } = Typography;

const ServiceProviders: React.FC = () => { 
    const providers = [
        { name: 'John Doe', service: 'Beauty', img: '/path/to/provider1.jpg' },
        { name: 'Jane Doe', service: 'Technician', img: '/path/to/provider2.jpg' },
        { name: 'John Doe', service: 'Beauty', img: '/path/to/provider1.jpg' },
        { name: 'Jane Doe', service: 'Technician', img: '/path/to/provider2.jpg' },
    ];

    return (
        <section className="serviceProvidersSection">

            <Row gutter={16} justify="center">
                
                {providers.map((provider, index) => (
                    <Col span={4} key={index}>
                        <Card className="providerCard" hoverable>
                            <img src={provider.img} alt={provider.name} className="providerImage" />
                            <div className="providerName">{provider.name}</div>
                            <div className="providerService">{provider.service}</div>
                        </Card>
                    </Col>
                ))}
                

                <Col span={6}>
                    <Title level={3} className="benefitsTitle">
                    Meet Our Best Service
                    </Title>
                    <span className="providers-title-1"> provioders</span>
                    <div className="services-providers-underline"></div>
                </Col>
                
            </Row>
        </section>
    );
};

export default ServiceProviders;
