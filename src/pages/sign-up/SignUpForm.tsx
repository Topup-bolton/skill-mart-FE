import React from 'react';
import { Form, Input, Checkbox, Button, Typography, Row, Col, Select, Space } from 'antd';
import Logo from '../../assets/skill-mart-logo.png'
import Gear from '../../assets/gear.png'
import './style/SignUpForm.css'
import TextArea from 'antd/es/input/TextArea';

const { Title, Text } = Typography;

interface FormValues {
    firstName: string;
    lastName: string;
    nickname?: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    agreement: boolean;
}

const SignupForm: React.FC = () => {
    const onFinish = (values: FormValues) => {
        console.log('Form Values:', values);
    };

    return (
        <div className='container'>
            <img src={Logo} alt="Logo" className='logo-img' />
            <img src={Gear} alt="Settings" className='gear-img' />

            <Title level={3} className='title'>
                Worker Registration
            </Title>

            <Form
                layout="vertical"
                onFinish={onFinish}
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
                            name="AvailabilityAria"
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
                            <TextArea  />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <div className='btn-div'>
                        <Space>
                            <Button
                                className='cancel-btn'
                            >
                                Cancel
                            </Button>
                            <Button
                                className='btn'
                                htmlType="submit"
                            >
                                Submit
                            </Button>
                        </Space>
                        
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SignupForm;
