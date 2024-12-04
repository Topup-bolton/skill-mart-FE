import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Card, Avatar, Typography, Button, Rate, Modal } from 'antd';
import { PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import './style/Laborer.css';
import UserHeader from '../../components/layout/header/user-header/UserHeader';
import Footer from '../../components/layout/footer/Footer';
import { useLocation } from "react-router-dom";
import { findLaboreByName, getAllLaborers } from '../../service/laborer-management-service';

import worker1 from "../../assets/workers/download (1).jpg";
import worker2 from "../../assets/workers/download.jpg";
import worker3 from "../../assets/workers/images (1).jpg";
import worker4 from "../../assets/workers/images.jpg";
import { getAllServiceAreas } from '../../service/service-area';
import { getAllServiceTypes } from '../../service/service-type';


const { Title, Text, Link } = Typography;
const { Option } = Select;

interface Laborer {
    address: string;
    available: boolean;
    firstName: string;
    id: string;
    lastName: string;
    links: string;
    mobile: string;
    qualification: string;
    serviceArea: string;
    serviceType: string;
}

interface Category {
    typeId: number;
    type: string;
}
interface Area {
    areaId: number;
    areaName: string;
}


const Laborer: React.FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<Laborer | null>(null);
    const [serviceProviders, setServiceProviders] = useState<Laborer[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [areas, setAreas] = useState<Area[]>([]);
    const [selectedArea, setSelectedArea] = useState<string | null>(null);
    const images = [worker1, worker2, worker3, worker4];

    const location = useLocation();
    const { search } = location.state || {};

    console.log('====================================');
    console.log(search);
    console.log('====================================');

    useEffect(() => {
        const searchLaborer = async () => {
            const data = await findLaboreByName(search)

            console.log('===============  searched dta =====================');
            console.log(data.response);
            console.log('====================================');
            setServiceProviders(data.response);
        }
        searchLaborer();

    }, [search])

    useEffect(() => {
        // Fetch laborers and update the state
        const fetchLaborers = async () => {
            try {
                const laborers = await getAllLaborers();
                const all = laborers.response
                setServiceProviders(all)
            } catch (error) {
                console.error("Error fetching laborers:", error);
            }
        };

        fetchLaborers();
    }, []);

    useEffect(() => {
        getAllCategoryType();
    }, []);

    useEffect(() => {
        getAllServiceArea();
    }, []);

    const getAllServiceArea = async () => {
        const data = await getAllServiceAreas();
        setAreas(data.response);
    }

    const getAllCategoryType = async () => {
        const data = await getAllServiceTypes();
        setCategories(data.response);
    }


    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        console.log('Selected Category:', value);
    };

    const handleAreaChange = (value: string) => {
        setSelectedArea(value);
        console.log("Selected Area:", value);
    };





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
                        <Select onChange={handleCategoryChange} value={selectedCategory} placeholder="Select Category" className="filter-select" style={{ width: '100%', marginBottom: '16px' }}>
                            {categories.map((category, index) => (
                                <Option key={category.typeId} value={category.type}>
                                    {category.type.charAt(0).toUpperCase() + category.type.slice(1)}
                                </Option>
                            ))}
                        </Select>
                        <Select onChange={handleAreaChange} value={selectedArea} placeholder="Select Area" className="filter-select" style={{ width: '100%' }}>
                            {areas.map((area, index) => (
                                <Option key={area.areaId} value={area.areaName}>
                                    {area.areaName.charAt(0).toUpperCase() + area.areaName.slice(1)}
                                </Option>
                            ))}
                        </Select>
                    </Col>

                    {/* Right Column: Service Providers List */}
                    <Col span={18} className="service-providers-list">
                        {serviceProviders.map((provider, index) => (
                            <Card key={index} className="provider-card" onClick={() => showModal(provider)}>
                                <Row>
                                    <Col span={4}>
                                        <Avatar src={images[index % images.length]} size={104} />
                                    </Col>
                                    <Col span={20}>
                                        <div className="provider-details">
                                            <Title level={5}>{provider.firstName} <span>{provider.lastName}</span></Title>

                                            <Text className="position-text">{provider.serviceType}</Text>
                                            <div className="rating-section">
                                                {/* <Rate allowHalf value={provider.rating} disabled /> */}
                                                <Text>({provider.qualification} Reviews)</Text>
                                            </div>
                                            <div className="contact-section">
                                                <PhoneOutlined /> {provider.mobile}
                                                <Link href={provider.links} target="_blank">
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
                {/* <Modal
                    title={`${selectedProvider?.firstName || ''} ${selectedProvider?.lastName || ''}`}
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
                            <Title level={5}>{selectedProvider.serviceType}</Title>
                            <div className="rating-section">
                                <Rate allowHalf value={selectedProvider.rating} disabled />
                                <Text> ({selectedProvider.serviceArea} Reviews)</Text>
                            </div>
                            <Text>{selectedProvider.qualification}</Text>
                            <div className="contact-section" style={{ marginTop: 16 }}>
                                <p>
                                    <PhoneOutlined /> {selectedProvider.mobile}
                                </p>
                                <p>
                                    <Link href={selectedProvider.website} target="_blank">
                                        <GlobalOutlined /> Website
                                    </Link>
                                </p>
                            </div>
                        </div>
                    )}
                </Modal> */}


                <Modal
                    title={null}
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                    width={800}
                >
                    {selectedProvider && (
                        <div className="provider-modal-content">
                            {/* Header Section */}
                            <div className="modal-header">
                                {/* <Avatar src={} size={100} className="modal-avatar" /> */}
                                <div className="modal-header-details">
                                    <Title level={4}>{`${selectedProvider.firstName} ${selectedProvider.lastName}`}</Title>
                                    <Text>{selectedProvider.serviceType}</Text>
                                    <div className="rating-section">
                                        {/* <Rate allowHalf value={selectedProvider.rating} disabled /> */}
                                        {/* <Text className="rating-count">({selectedProvider.reviewsCount} Reviews)</Text> */}
                                        {/* <Text className="works-count">{selectedProvider.worksCount}+ Works</Text> */}
                                    </div>
                                </div>
                                <div className="modal-contact">
                                    <Text>
                                        <PhoneOutlined /> {selectedProvider.mobile}
                                    </Text>
                                    <Link href={selectedProvider.links} target="_blank">
                                        <GlobalOutlined /> Website
                                    </Link>
                                </div>
                            </div>

                            {/* Body Section */}
                            <div className="modal-body">
                                <Row gutter={[16, 16]}>
                                    <Col span={12}>
                                        <Title level={5}>Working Areas</Title>
                                        <Text>{selectedProvider.serviceArea}</Text>
                                    </Col>
                                    <Col span={12}>
                                        <Title level={5}>Experience/Qualifications</Title>
                                        <Text>{selectedProvider.qualification}</Text>
                                    </Col>
                                </Row>
                            </div>

                            {/* Reviews Section */}
                            <div className="modal-reviews">
                                <Title level={5}>Reviews</Title>
                                <Button type="primary" style={{ marginBottom: 16 }}>
                                    Rate/Review
                                </Button>
                                {/* {selectedProvider.reviews.map((review, index) => (
                                    <div key={index} className="review-item">
                                        <div className="review-header">
                                            <Text>{review.user}</Text>
                                            <Rate value={review.rating} disabled />
                                            <Text className="review-date">{review.date}</Text>
                                        </div>
                                        <Text className="review-comment">{review.comment}</Text>
                                    </div>
                                ))} */}
                                <div className="pagination-section">
                                    <Button>Previous</Button>
                                    <Button>Next</Button>
                                </div>
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
