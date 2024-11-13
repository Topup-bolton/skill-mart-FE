import React, { useState } from 'react'
import AdminHeader from '../../components/layout/header/admin-header/AdminHeader'
import { Button, Card, Col, Drawer, Form, Input, notification, Row, Select, Space, Table } from 'antd'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { laborerManagementTableColunms } from './components/LaborerManegementTable';
import { PlusCircleFilled, PlusCircleOutlined, PlusOutlined, SearchOutlined, UserAddOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { createNewLaboror } from '../../service/laborer-management-service';

const data = [
    { laborerId: '1', laborerName: 'Laborer 1', laborerType: 'Test Type', rating: '5.0' },

]


const LaborerManagement = () => {
    const [open, setOpen] = useState(false);

    const[formRef] = Form.useForm();


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        formRef.resetFields();
    };

    const onClickSave = async () => {
        const reqBody = {
            firstName: formRef.getFieldValue('firstName'),
            lastName: formRef.getFieldValue('lastName'),
            address: formRef.getFieldValue('address'),
            mobile: formRef.getFieldValue('phoneNumber'),
            links: formRef.getFieldValue('fbLink'),
            serviceType: formRef.getFieldValue('typeOfWork'),
            serviceArea: formRef.getFieldValue('serviceArea'),
            remark: formRef.getFieldValue('qualifications'),
            available:true,
            type:"Test"
        }

        const response = await createNewLaboror(reqBody);

        if (response) {
            notification.open({
                type: "success",
                message: "Successfully.",
                description:"Laboror successfully created."
                        
            });
           onClose()
        }

    }
    return (
        <div style={{ padding: "0 80px 0 80px", marginTop: "70px" }}>
            <AdminHeader />
            <Row gutter={16} align="middle" justify="space-between" style={{marginBottom:'30px'}}>
                <Col>
                    <h3>Laborer Management</h3>
                </Col>

                <Col>
                    <Row gutter={8} align="middle">


                        <Col>
                            <Input
                                placeholder="Search here"
                                style={{ 
                                    width: 200, 
                                    borderRadius: '30px' 
                                }}
                            />
                        </Col>
                        <Col>
                            <Button
                                style={{ 
                                    backgroundColor: '#61C6E8', 
                                    color: '#FFFFFF', 
                                    border: 'none', 
                                    borderRadius: '30px' 
                                }}
                                icon={<SearchOutlined />}
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
                                icon={<PlusOutlined />}
                                onClick={showDrawer}
                            >
                                Add Laborer
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Table
                size="small"
                columns={laborerManagementTableColunms(
                    // viewClick,
                    // updateClick,
                    // viewRequestingNoteClick,

                )}
                // onChange={tableChangeHandler}
                dataSource={data}
                rowKey={"id"}
            // pagination={{
            //     total: tablePagination.totalRecords,
            //     current: tablePagination.currentPage,
            //     pageSize: tablePagination.itemPerPage,
            //     pageSizeOptions: [10, 25, 50],
            //     showSizeChanger: true,
            // }}
            />

            <Drawer
                width={600}
                title={<span style={{ color: '#3D8CA7',fontWeight:'700' }}>Worker Registration</span>}
                placement="right"
                onClose={onClose}
                open={open}
            >
                <Form
                    layout="vertical"
                    form={formRef}
                    // onFinish={onFinish}
                    requiredMark={false}
                    initialValues={{
                        agreement: false,
                    }}
                >

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>First Name</span>}
                                name="firstName"
                                rules={[{ required: true, message: 'Please enter your first name' }]}
                            >
                                <Input />
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>Last Name</span>}
                                name="lastName"
                                rules={[{ required: true, message: 'Please enter your last name' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                    </Row>

                    <Row >
                        <Col span={24}>
                            <Form.Item
                                label={<span className='label'>Address</span>}
                                name="address"
                                rules={[{ required: true, message: 'Please enter your address' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>Phone Number</span>}
                                name="phoneNumber"
                                rules={[{ required: true, message: 'Please enter your phone number' }]}
                            >
                                <Input addonBefore="+94" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>Facebook Profile Link(Optional) </span>}
                                name="fbLink"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>Type of Work</span>}
                                name="typeOfWork"
                                rules={[{ required: true, message: 'Please enter your work type' }]}
                            >
                                <Select>
                                    <Select.Option value="1">Test 1</Select.Option>
                                    <Select.Option value="2">Test 2</Select.Option>

                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>Availability Area</span>}
                                name="serviceArea"
                                rules={[{ required: true, message: 'Please enter your availability area' }]}
                            >
                                <Select>
                                    <Select.Option value="1">Test 1</Select.Option>
                                    <Select.Option value="2">Test 2</Select.Option>

                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label={<span className='label'>Qualifications/ Experience </span>}
                                name="qualifications"
                                rules={[{ required: true, message: 'Please enter your qualifications' }]}
                            >
                                <TextArea />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <div style={{display:'flex',justifyContent:'end'}}>
                            <Space>
                                <Button
                                    className='btn'
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className='btn'
                                    htmlType="submit"
                                    onClick={onClickSave}
                                >
                                    Submit
                                </Button>
                            </Space>

                        </div>
                    </Form.Item>
                </Form>
            </Drawer>
        </div>

        



    )
}

export default LaborerManagement