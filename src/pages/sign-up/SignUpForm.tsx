import React from 'react';
import { Form, Input, Checkbox, Button, Typography, Row, Col } from 'antd';

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
        <div style={{ maxWidth: '500px', margin: 'auto' }}>
            <Title level={3} style={{ textAlign: 'center', color: '#1890ff' }}>
                Sign Up to Find Work
            </Title>

            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    agreement: false,
                }}
            >

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[{ required: true, message: 'Please enter your first name' }]}
                        >
                            <Input placeholder="First Name" />
                        </Form.Item>

                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{ required: true, message: 'Please enter your last name' }]}
                        >
                            <Input placeholder="Last Name" />
                        </Form.Item>
                    </Col>
                    
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Nick Name (Optional)" name="nickname">
                            <Input placeholder="Nick Name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please enter a valid email' },
                                { type: 'email', message: 'Invalid email format' },
                            ]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                    </Col>

                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password' }]}
                        >
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Confirm Password"
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
                            <Input.Password placeholder="Confirm Password" />
                        </Form.Item>
                    </Col>

                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Phone Number"
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please enter your phone number' }]}
                        >
                            <Input placeholder="+94" addonBefore="+94" />
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
                    <Checkbox>
                        By signing up, I agree to SkillMart's <a href="#">Terms & Conditions</a> and{' '}
                        <a href="#">Privacy Policy</a>.
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Create My Account
                    </Button>
                </Form.Item>

                <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginTop: '0px' }}>
                    Already have an account? <a href="#">Log In</a>
                </Text>
            </Form>
        </div>
    );
};

export default SignupForm;
