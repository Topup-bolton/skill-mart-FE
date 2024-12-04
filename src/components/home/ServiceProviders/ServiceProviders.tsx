
import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Card, Rate, } from 'antd';
import './ServiceProviders.css';
import { getAllLaborersByRating } from '../../../service/laborer-management-service';
import worker1 from "../../../assets/workers/download (1).jpg";
import worker2 from "../../../assets/workers/download.jpg";
import worker3 from "../../../assets/workers/images (1).jpg";
import worker4 from "../../../assets/workers/images.jpg";

const { Title } = Typography;
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
    stars: any,
}

const ServiceProviders: React.FC = () => {
    const [providers, setProviders] = useState<Laborer[]>([]);
    const images = [worker1, worker2, worker3, worker4];
    useEffect(() => {
        // Fetch laborers and update the state
        const fetchBestLaborers = async () => {
            try {
                const laborers = await getAllLaborersByRating();
                const limitedLaborers = laborers.response.slice(0, 4);
                setProviders(limitedLaborers)
            } catch (error) {
                console.error("Error fetching laborers:", error);
            }
        };

        fetchBestLaborers();
    }, []);

    return (
        <section className="serviceProvidersSection">

            <Row gutter={16} justify="center">


                {providers.map((provider, index) => (
                    <Col span={4} key={index} className={`providerCol ${index % 2 === 0 ? "up" : "down"}`}>
                        <Card className="providerCard" hoverable>
                            <div className="cardContent">
                                {/* Circular image with border */}
                                <div className="imageContainer">
                                    <img src={images[index % images.length]} alt={provider.firstName} className="providerImage" />
                                </div>
                                {/* Provider details */}
                                <div className="providerDetails">
                                    <div className="providerName">{provider.firstName} {provider.lastName}</div>
                                    <div className="providerService">{provider.serviceType}</div>
                                    <div className="providerRating">
                                        <Rate allowHalf value={provider.stars} disabled />
                                    </div>
                                    {/* <div className="providerWorks">{provider.works}+ Works</div> */}
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
                <Col span={6} className="service-content">
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
