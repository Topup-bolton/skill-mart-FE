import { ClearOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Row, Col, Card, Avatar, Rate, Form, Button, Input, DatePicker } from 'antd'
import React from 'react'
import AdminHeader from '../../components/layout/header/admin-header/AdminHeader';
import worker1 from "../../assets/workers/download (1).jpg";
import worker2 from "../../assets/workers/download.jpg";
import worker3 from "../../assets/workers/images (1).jpg";
import worker4 from "../../assets/workers/images.jpg";
const { RangePicker } = DatePicker;


const ReportPage = () => {

    const reviews = [
        {
            user: "Piumika Dilshan",
            role: "Plumber",
            reviewer: "Chathumal Jayasinghe",
            rating: 5,
            time: "10/12/2024 11:04 PM",
            comment: "Friendly Person. Works on time. Completed the job within 2 hours. Highly Recommended.",
        },
        {
            user: "Shevoni Madushika",
            role: "Carpainter",
            reviewer: "Dilusha Ekanayake",
            rating: 4,
            time: "09/12/2024 04:04 PM",
            comment: "Friendly Person. Works on time. Completed the job within 2 hours. Highly Recommended.",
        },
    ];


    const images = [worker1, worker2, worker3, worker4];
    return (
        <div>
            <AdminHeader />
            <Row gutter={16} align="middle" justify="space-between" style={{ marginTop: '50px', padding: "0 100px 0 100px" }}>
                <Col>
                    <h3>Report</h3>
                </Col>

                <Col>
                    <Row gutter={8} align="middle">
                        <Form
                            layout='inline'
                            colon={false}

                            // form={searchFormRef}
                            // onFinish={searchLaborer}
                        >
                            <Col>
                                <Card style={{ height: '80px'}}>
                                    <Form.Item
                                        name="searchInput"
                                        label={<span style={{ color:"#8e7d7d",fontWeight:"bold"}}>Select Range</span>}

                                    >
                                        {/* <Input
                                        placeholder="Enter name and search"
                                        style={{
                                            width: 200,
                                            borderRadius: '30px'
                                        }}
                                        // onChange={onChangeSearch}
                                    /> */}
                                        <RangePicker
                                        
                                        />
                                    </Form.Item>
                           </Card>

                                    
                                

                            </Col>
                        </Form>
                        <Col>
                            <Button
                                style={{
                                    backgroundColor: '#61C6E8',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '30px'
                                }}
                                icon={<SearchOutlined />}
                                // onClick={searchLaborer}
                            >

                            </Button>
                        </Col>
                        <Col>
                            <Button
                                style={{
                                    backgroundColor: '#61C6E8',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '30px'
                                }}
                                icon={<ClearOutlined />}
                                // onClick={clearSearch}
                            >

                            </Button>
                        </Col>

                        <Col>
                            {/* <Button

                                style={{
                                    backgroundColor: '#61C6E8',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '30px'
                                }}
                                icon={<PlusOutlined />}
                                onClick={showDrawer}
                            >
                                Add Labourer
                            </Button> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: '30px' }}>
                {reviews.map((review, index) => (
                    <Col span={24} key={index} style={{ padding: "0 100px 0 100px" }}>
                        <Card bordered={false} style={{ borderBottom: "1px solid #bebebe" }}>
                            <Row>
                                <Col span={8} style={{ textAlign: "center" }}>
                                    <Row>
                                        <Col span={6}>
                                            <Avatar
                                                size={64}
                                                icon={<UserOutlined />}
                                                src={images[index % images.length]} /></Col>
                                                <Col span={12} style={{marginTop:"10px"}}>
                                            <Row>
                                                <div>
                                                    <strong>{review.user}</strong>
                                                </div>
                                            </Row>
                                            <Row>
                                                <div style={{ color:'#7d7d7d'}}>{review.role}</div>
                                            </Row>
                                                </Col>
                                       
                                       


                                    </Row>

                                </Col>
                                <Col span={16} >
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div style={{ marginBottom: "10px" }}>
                                            <strong>{review.reviewer}</strong>
                                        </div>
                                        <div style={{ color: "#489ebb", backgroundColor: '#d0eef8', padding: '3px 15px 3px 15px', borderRadius: '10px' }}>{review.time}</div>
                                    </div>
                                    <Rate style={{ color: "#61C6E8", marginLeft: '-1px' }} disabled defaultValue={review.rating} />
                                    <p style={{ marginTop: "10px", color: '#7d7d7d' }}>{review.comment}</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>

    )
}

export default ReportPage