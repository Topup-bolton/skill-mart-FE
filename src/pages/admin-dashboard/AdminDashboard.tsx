import React from 'react'
import AdminHeader from '../../components/layout/header/admin-header/AdminHeader'
import { Card, Col, Row } from 'antd'
import AdminLabels from './components/AdminLabels'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Island-Wide', value: 30 },
    { name: 'Western', value: 20 },
    { name: 'Southern', value: 15 },
    { name: 'Central', value: 25 },
    { name: 'Other', value: 10 },
];

const COLORS = ['#8884d8', '#82ca9d', '#8dd1e1', '#a4de6c', '#d0ed57'];

function AdminDashboard() {
    return (
        <div>
            <AdminHeader />
            <Row gutter={16}>
                <Col span={12}>
                    <h3>Laborer</h3>
                    <Row gutter={16}>
                        <Col span={8}>
                            <AdminLabels name='Registered' count={10} />
                        </Col>
                        <Col span={8}>
                            <AdminLabels name='Carpenters' count={20} />
                        </Col>
                        <Col span={8}>
                            <AdminLabels name='Plumber' count={23} />
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <AdminLabels name='Cleaner' count={12} />
                        </Col>
                        <Col span={8}>
                            <AdminLabels name='Electrician' count={10} />
                        </Col>
                        <Col span={8}>
                            <AdminLabels name='Other' count={10} />
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <Card title="Working Area" style={{ width: 480, marginLeft: '50px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
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