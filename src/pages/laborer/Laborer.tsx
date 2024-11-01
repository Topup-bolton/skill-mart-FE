import React, { useState } from 'react';
import { Row, Col, Select, Card, Avatar, Typography, Button, Rate, Modal } from 'antd';
import { PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import './style/Laborer.css';
import UserHeader from '../../components/layout/header/user-header/UserHeader';
import Footer from '../../components/layout/footer/Footer';

const { Title, Text, Link } = Typography;
const { Option } = Select;

interface Laborer {
    name: string;
    position: string;
    rating: number;
    reviews: number;
    phone: string;
    website: string;
    imageUrl: string;
    description: string;
}

const serviceProviders: Laborer[] = [
    {
        name: 'John Doe',
        position: 'Plumber',
        rating: 4.5,
        reviews: 120,
        phone: '077 822 041',
        website: 'https://www.facebook.com',
        imageUrl: '/path/to/image.jpg',
        description: 'Experienced plumber with over 10 years in the field. Provides quality service...',

    },
    // Add more providers as needed
];

const Laborer: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<Laborer | null>(null);

    // return (
    //     <div className="service-provider-list-container">
    //         {/* Filter Section */}
    //         <div className="filter-section">
    //             <Select placeholder="Select Category" className="filter-select">
    //                 <Option value="plumber">Plumber</Option>
    //                 <Option value="electrician">Electrician</Option>
    //                 {/* Add more categories */}
    //             </Select>
    //             <Select placeholder="Select Area" className="filter-select">
    //                 <Option value="area1">Area 1</Option>
    //                 <Option value="area2">Area 2</Option>
    //                 {/* Add more areas */}
    //             </Select>
    //         </div>

    //         {/* Service Providers List */}
    //         <div className="service-providers-list">
    //             {serviceProviders.map((provider, index) => (
    //                 <Card key={index} className="provider-card">
    //                     <Row>
    //                         <Col span={4}>
    //                             <Avatar src={provider.imageUrl} size={64} />
    //                         </Col>
    //                         <Col span={20}>
    //                             <div className="provider-details">
    //                                 <Title level={5}>{provider.name}</Title>
    //                                 <Text className="position-text">{provider.position}</Text>
    //                                 <div className="rating-section">
    //                                     <Rate allowHalf value={provider.rating} disabled />
    //                                     <Text>({provider.reviews} Reviews)</Text>
    //                                 </div>
    //                                 <div className="contact-section">
    //                                     <PhoneOutlined /> {provider.phone}
    //                                     <Link href={provider.website} target="_blank">
    //                                         <GlobalOutlined /> Website
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         </Col>
    //                     </Row>
    //                 </Card>
    //             ))}
    //         </div>

    //         {/* Pagination */}
    //         <div className="pagination-section">
    //             {/* Replace with Ant Design Pagination component if needed */}
    //             <Button>Previous</Button>
    //             <Button>Next</Button>
    //         </div>
    //     </div>
    // );

    const showModal = (provider: Laborer) => {
        setSelectedProvider(provider);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedProvider(null);
    };

    return (
        <>
            <UserHeader />
            <div className="service-provider-list-container">
                <Row gutter={16}>
                    {/* Left Column: Filters */}
                    <Col span={6} className="filter-section">
                        <Select placeholder="Select Category" className="filter-select" style={{ width: '100%', marginBottom: '16px' }}>
                            <Option value="plumber">Plumber</Option>
                            <Option value="electrician">Electrician</Option>
                            {/* Add more categories */}
                        </Select>
                        <Select placeholder="Select Area" className="filter-select" style={{ width: '100%' }}>
                            <Option value="area1">Area 1</Option>
                            <Option value="area2">Area 2</Option>
                            {/* Add more areas */}
                        </Select>
                    </Col>

                    {/* Right Column: Service Providers List */}
                    <Col span={18} className="service-providers-list">
                        {serviceProviders.map((provider, index) => (
                            <Card key={index} className="provider-card" onClick={() => showModal(provider)}>
                                <Row>
                                    <Col span={4}>
                                        <Avatar src={provider.imageUrl} size={64} />
                                    </Col>
                                    <Col span={20}>
                                        <div className="provider-details">
                                            <Title level={5}>{provider.name}</Title>
                                            <Text className="position-text">{provider.position}</Text>
                                            <div className="rating-section">
                                                <Rate allowHalf value={provider.rating} disabled />
                                                <Text>({provider.reviews} Reviews)</Text>
                                            </div>
                                            <div className="contact-section">
                                                <PhoneOutlined /> {provider.phone}
                                                <Link href={provider.website} target="_blank">
                                                    <GlobalOutlined /> Website
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </Col>
                </Row>

                {/* Pagination */}
                <div className="pagination-section">
                    {/* Replace with Ant Design Pagination component if needed */}
                    <Button>Previous</Button>
                    <Button>Next</Button>
                </div>


                {/* Modal for Provider Details */}
                <Modal
                    title={selectedProvider?.name}
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="close" onClick={handleCancel}>
                            Close
                        </Button>,
                    ]}
                >
                    {selectedProvider && (
                        <div className="provider-modal-content">
                            <Avatar src={selectedProvider.imageUrl} size={80} style={{ marginBottom: 16 }} />
                            <Title level={5}>{selectedProvider.position}</Title>
                            <div className="rating-section">
                                <Rate allowHalf value={selectedProvider.rating} disabled />
                                <Text> ({selectedProvider.reviews} Reviews)</Text>
                            </div>
                            <Text>{selectedProvider.description}</Text>
                            <div className="contact-section" style={{ marginTop: 16 }}>
                                <p>
                                    <PhoneOutlined /> {selectedProvider.phone}
                                </p>
                                <p>
                                    <Link href={selectedProvider.website} target="_blank">
                                        <GlobalOutlined /> Website
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
            <Footer />
        </>
    );
};

export default Laborer;
