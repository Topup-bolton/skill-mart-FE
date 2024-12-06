import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Card, Avatar, Typography, Button, Rate, Modal } from 'antd';
import { PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import { BsFacebook } from "react-icons/bs";
import './style/Laborer.css';
import UserHeader from '../../components/layout/header/user-header/UserHeader';
import Footer from '../../components/layout/footer/Footer';
import { useLocation } from "react-router-dom";
import { findLaboreByName, getAllLaborers, getAllLaborersByArea, getAllLaborersByType } from '../../service/laborer-management-service';

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
    stars: number;
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


    const [serviceProviders, setServiceProviders] = useState<Laborer[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [areas, setAreas] = useState<Area[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("-1");
    const [selectedArea, setSelectedArea] = useState<string>("-1");

    const images = [worker1, worker2, worker3, worker4];

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<Laborer | null>(null);

    const location = useLocation();
    const { search } = location.state || {};





    // useEffect(() => {
    //     const searchLaborer = async () => {
    //         const data = await findLaboreByName(search)
    //         console.log('===============  searched dta =====================');
    //         console.log(data.response);
    //         console.log('====================================');
    //         setServiceProviders(data.response);
    //     }
    //     searchLaborer();

    // }, [search])

    // useEffect(() => {
    //     // Fetch laborers and update the state
    //     const fetchLaborers = async () => {
    //         try {
    //             const laborers = await getAllLaborers();
    //             const all = laborers.response
    //             setServiceProviders(all)
    //         } catch (error) {
    //             console.error("Error fetching laborers:", error);
    //         }
    //     };

    //     fetchLaborers();
    // }, []);

    // useEffect(() => {
    //     getAllCategoryType();
    // }, []);

    // useEffect(() => {
    //     getAllServiceArea();
    // }, []);

    // useEffect(() => {
    //     const searchLaborerByArea = async () => {
    //         const data = await getAllLaborersByArea(selectedArea);

    //         console.log('===============  searched dta  for selected area =====================');
    //         console.log(data.response);
    //         console.log('====================================');
    //         setServiceProviders(data.response);
    //     }
    //     searchLaborerByArea();

    // }, [selectedArea]);

    // useEffect(() => {
    //     const searchLaborerByType = async () => {
    //         const data = await getAllLaborersByType(selectedCategory);

    //         console.log('===============  searched dta  for selected area =====================');
    //         console.log(data.response);
    //         console.log('====================================');
    //         setServiceProviders(data.response);
    //     }
    //     searchLaborerByType();

    // }, [selectedArea]);

    // const getAllServiceArea = async () => {
    //     const data = await getAllServiceAreas();
    //     setAreas(data.response);
    // }

    // const getAllCategoryType = async () => {
    //     const data = await getAllServiceTypes();
    //     setCategories(data.response);
    // }

    // const handleCategoryChange = (value: string) => {
    //     setSelectedCategory(value);
    //     console.log('Selected Category:', value);
    //     setSelectedArea("-1");

    // };

    // const handleAreaChange = (value: string) => {
    //     setSelectedArea(value);
    //     console.log("Selected Area:", value);
    //     setSelectedCategory("-1");
    // };

    const showModal = (provider: Laborer) => {
        setSelectedProvider(provider);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedProvider(null);
    };


    //===========================================================================================================


    // Fetch categories and areas on component mount
    useEffect(() => {
        const fetchInitialData = async () => {
            const [categoriesData, areasData] = await Promise.all([
                getAllServiceTypes(),
                getAllServiceAreas(),
            ]);
            setCategories(categoriesData.response);
            setAreas(areasData.response);
        };

        fetchInitialData();
    }, []);

    // Fetch laborers on component mount or based on filters/search
    useEffect(() => {
        const fetchLaborers = async () => {
            try {
                if (search) {
                    const searchResults = await findLaboreByName(search);
                    setServiceProviders(searchResults.response);
                } else if (selectedCategory !== '-1' && selectedArea !== '-1') {
                    const areaResults = await getAllLaborersByArea(selectedArea);
                    const filteredResults = areaResults.response.filter(
                        (laborer: Laborer) => laborer.serviceType === selectedCategory
                    );
                    setServiceProviders(filteredResults);
                } else if (selectedCategory !== '-1') {
                    const categoryResults = await getAllLaborersByType(selectedCategory);
                    setServiceProviders(categoryResults.response);
                } else if (selectedArea !== '-1') {
                    const areaResults = await getAllLaborersByArea(selectedArea);
                    setServiceProviders(areaResults.response);
                } else {
                    const allLaborers = await getAllLaborers();
                    setServiceProviders(allLaborers.response);
                }
            } catch (error) {
                console.error('Error fetching laborers:', error);
            }
        };

        fetchLaborers();
    }, [search, selectedCategory, selectedArea]);

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        if (value === '-1') setSelectedArea('-1'); // Reset area if category reset
    };

    const handleAreaChange = (value: string) => {
        setSelectedArea(value);
        if (value === '-1') setSelectedCategory('-1');
    };

    const ClickRatings =(id:string)=> {
        
    }

    return (
        <>
            <UserHeader />
            <div className="service-provider-list-container">
                <Row gutter={16}>
                    {/* Left Column: Filters */}
                    <Col span={6} className="filter-section">
                        <Select onChange={handleCategoryChange} value={selectedCategory} placeholder="Select Category" className="filter-select" style={{ width: '100%', marginBottom: '16px' }}>
                            <Option key="-1" value="-1">
                                --select--
                            </Option>
                            {categories.map((category, index) => (
                                <Option key={category.typeId} value={category.type}>
                                    {category.type.charAt(0).toUpperCase() + category.type.slice(1)}
                                </Option>
                            ))}
                        </Select>
                        <Select onChange={handleAreaChange} value={selectedArea} placeholder="Select Area" className="filter-select" style={{ width: '100%' }}>
                            <Option key="-1" value="-1">
                                --select--
                            </Option>
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
                                {/* <Row>
                                    <Col span={4}>
                                        <Avatar src={images[index % images.length]} size={164} />
                                    </Col>
                                    <Col span={20}>
                                        <div className="provider-details">
                                            <Title level={5}>{provider.firstName} <b>{provider.lastName}</b></Title>
                                            <Text className="position-text">{provider.serviceType}</Text>
                                            
                                            <div className="rating-section">
                                                <Rate allowHalf value={provider.stars} disabled />
                                                <Text>({provider.qualification} Reviews)</Text>
                                                <Text> Availability{provider.available} </Text>
                                            </div>
                                            <div className="contact-section">
                                                <div><PhoneOutlined /> {provider.mobile}</div>
                                                
                                                <Link href={provider.links} target="_blank">
                                                    <BsFacebook /> {provider.links}
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row> */}


<Row align="middle" gutter={16}>
                {/* Avatar Section */}
                <Col span={2}>
                    <Avatar
                        src={images[index % images.length]}
                        size={144}
                        style={{ border: '2px solid #d9d9d9' }}
                    />
                </Col>

                {/* Details Section */}
                <Col span={22}>
                    <div className="provider-details">
                        {/* Name and Service Type */}
                        <Title level={5} style={{ margin: 0 }}>
                            {provider.firstName} <b>{provider.lastName}</b>
                        </Title>
                        <Text className="position-text" style={{ display: 'block', color: '#888' }}>
                            {provider.serviceType}
                        </Text>

                        {/* Rating and Reviews */}
                        <div className="rating-section" style={{ marginTop: '8px' }}>
                            <Rate  allowHalf value={provider.stars} disabled style={{ fontSize: '18px' }} />
                            <Text style={{ marginLeft: '8px', color: '#555' }}>
                                ({provider.qualification} Reviews)
                            </Text>
                        </div>

                        {/* Contact Section */}
                        <div className="contact-section" style={{ marginTop: '12px' }}>
                            <div>
                                <PhoneOutlined style={{ marginRight: '8px' }} />
                                <Text>{provider.mobile}</Text>
                            </div>
                            <div style={{ marginTop: '4px' }}>
                                <Link href={provider.links} target="_blank">
                                    <BsFacebook style={{ marginRight: '8px' }} />
                                    <Text>{provider.links}</Text>
                                </Link>
                            </div>
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

                {/* view woker model */}
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
                                <Avatar src={worker1} size={200} className="modal-avatar" />
                                
                                <div className="modal-header-details">
                                    <Title level={4}>{`${selectedProvider.firstName} ${selectedProvider.lastName}`}</Title>
                                    <Text>{selectedProvider.serviceType}</Text>
                                    <br />
                                    <Rate allowHalf value={selectedProvider.stars} disabled />
                                    <div className="rating-section">
                                        
                                        {/* <Text className="rating-count">({selectedProvider.reviewsCount} Reviews)</Text> */}
                                        {/* <Text className="works-count">{selectedProvider.worksCount}+ Works</Text> */}
                                    </div>
                                    <Row gutter={[16, 16]}>
                                        {/* Working Areas Section */}
                                        <Col span={7}>
                                            
                                        </Col>
                                        <Col span={17}>
                                        
                                            <div className='title-area-main'>
                                                <span className='title-area'>Working Areas</span>
                                                <Text className='text-area'>{selectedProvider.serviceArea}</Text>
                                            </div>

                                            <div >
                                                <span className='title-area'>Experience/Qualifications</span>
                                                <Text className='text-area'>{selectedProvider.qualification}</Text>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="modal-contact">
                                    <Text>
                                        <PhoneOutlined /> {selectedProvider.mobile}
                                    </Text>
                                    <Link href={selectedProvider.links} target="_blank">
                                        <BsFacebook /> {selectedProvider.links}
                                    </Link>
                                </div>
                            </div>

                            {/* Reviews Section */}
                            <div className="modal-reviews">

                                <Button
                                    // onClick={clickRatings()}
                                    type="primary" style={{ marginBottom: 16 }}>
                                    Rate/Review
                                </Button>

                                <Title level={5}>Reviews</Title>
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
