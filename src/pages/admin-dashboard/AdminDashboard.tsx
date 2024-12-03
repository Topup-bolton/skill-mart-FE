import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/layout/header/admin-header/AdminHeader'
import { Card, Col, Row } from 'antd'
import AdminLabels from './components/AdminLabels'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { findLaboreByName, findLaboreByServiceArea, getAllLaborers } from '../../service/laborer-management-service';

const data = [
    { name: 'Island-Wide', value: 30 },
    { name: 'Western', value: 20 },
    { name: 'Southern', value: 15 },
    { name: 'Central', value: 25 },
    { name: 'Other', value: 10 },
];

const COLORS = ['#8884d8', '#82ca9d', '#8dd1e1', '#a4de6c', '#d0ed57'];

const AdminDashboard = () => {
    const [carpentersCount, setCarpentersCount] = useState(0)
    const [plunbersCount, setPlunbersCount] = useState(0)
    const [cleanersCount, setCleanersCount] = useState(0)
    const [electriciansCount, setElectriciansCount] = useState(0)
    const [laboresCount, setLaboresCount] = useState(0)

    useEffect(() => {
        getCarpentersCount()
        getPlumbersCount()
        getCleanersCount()
        getElectriciansCount()
        getRegCount()
    }, [])

    const getCarpentersCount = async () => {
        const data = await findLaboreByServiceArea("Carpenter")
        setCarpentersCount(data.response.length);
    }

    const getPlumbersCount = async () => {
        const data = await findLaboreByServiceArea("Plumber")
        setPlunbersCount(data.response.length);
    }

    const getCleanersCount = async () => {
        const data = await findLaboreByServiceArea("Cleaner")
        setCleanersCount(data.response.length);
    }

    const getElectriciansCount = async () => {
        const data = await findLaboreByServiceArea("Electrician")
        setElectriciansCount(data.response.length);
    }

    const getRegCount = async () => {
        const data = await getAllLaborers()
        setLaboresCount(data.response.length);
    }
    return (
        <div style={{ padding: "0 80px 0 80px", marginTop: "70px" }}>
            <AdminHeader />
            <Row gutter={16}>
                <Col span={12}>
                    <h3>Laborer</h3>
                    <Row gutter={16}>
                        <Col span={8}>
                        {/* @ts-ignore */}
                            <AdminLabels name='Registered' count={laboresCount < 10 ? "0" + laboresCount : laboresCount} />
                        </Col>
                        <Col span={8}>
                            {/* @ts-ignore */}
                            <AdminLabels name='Carpenters' count={carpentersCount < 10 ? "0" + carpentersCount : carpentersCount} />
                        </Col>
                        <Col span={8}>
                            {/* @ts-ignore */}
                            <AdminLabels name='Plumber' count={plunbersCount < 10 ? "0" + plunbersCount : plunbersCount} />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            {/* @ts-ignore */}
                            <AdminLabels name='Cleaner' count={cleanersCount < 10 ? "0" + cleanersCount : cleanersCount} />
                        </Col>
                        <Col span={8}>
                            {/* @ts-ignore */}
                            <AdminLabels name='Electrician' count={electriciansCount < 10 ? "0" + electriciansCount : electriciansCount} />
                        </Col>
                        <Col span={8}>
                            <AdminLabels name='Other' count={10} />
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Card title="Working Area" style={{
                        width: 480,
                        marginLeft: '50px',
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
                    }}>
                        <ResponsiveContainer width="100%" height={195}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
            </Row>
            <h3>Ratings and Reviews</h3>
            <Row gutter={[16, 16]}>

                <Col span={4}>
                    <AdminLabels name='Total Reviews' count={10} />
                </Col>
                <Col span={4}>
                    <AdminLabels name='Total Ratings' count={20} />
                </Col>
                <Col span={4}>
                    <AdminLabels name='5 start Ratings' count={23} />
                </Col>
                <Col span={4}>
                    <AdminLabels name='4 Star Ratings' count={23} />
                </Col>
                <Col span={4}>
                    <AdminLabels name='3 Star Ratings' count={23} />
                </Col>
                <Col span={4}>
                    <AdminLabels name='2 start Ratings' count={23} />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>

                <Col span={4}>
                    <AdminLabels name='1 start Ratings' count={10} />
                </Col>

            </Row>
        </div>




    )
}

export default AdminDashboard