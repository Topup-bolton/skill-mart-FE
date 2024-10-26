import React from 'react';
import { Form, Input, Checkbox, Button, Typography, Row, Col } from 'antd';
import Logo from '../../assets/skill-mart-logo.png'
import Gear from '../../assets/gear.png'
import './style/SignUpForm.css'

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
                <span className='sign-up-txt'>Sign Up</span>  to Find Work
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

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label={<span className='label'>Nick Name (Optional)</span>}
                            name="nickname">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={<span className='label'>Email</span>}
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter a valid email' },
                                { type: 'email', message: 'Invalid email format' },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label={<span className='label'>Password</span>}
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label={<span className='label'>Confirm Password</span>}
                            name="confirmPassword"
                            dependencies={['password']}
                            rules={[
                                { required: true, message: 'Please confirm your password' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Passwords do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
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
                </Row>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value
                                    ? Promise.resolve()
                                    : Promise.reject(new Error('Please accept the terms and conditions')),
                        },
                    ]}
                >
                    <Checkbox >
                        <span className='label'>By signing up, I agree to SkillMart's</span>
                        <a href="#"> Terms & Conditions</a> <span className='label'>and </span>
                        <a href="#">Privacy Policy.</a>
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <div className='btn-div'>
                        <Button
                            className='btn'
                            htmlType="submit"
                        >
                            Create My Account
                        </Button>
                    </div>
                </Form.Item>

                <Text type="secondary" className='txt'>
                    Already have an account? <a className='log-in-txt' href="#">Log In</a>
                </Text>
            </Form>
        </div>
    );
};

export default SignupForm;
