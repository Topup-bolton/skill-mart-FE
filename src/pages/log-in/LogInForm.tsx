import React from 'react';
import { Form, Input, Checkbox, Button, Typography, Row, Col } from 'antd';
import Logo from '../../assets/skill-mart-logo.png'
import Gear from '../../assets/gear.png'
import './style/LogInForm.css'
import Link from 'antd/es/typography/Link';
import Footer from '../../components/layout/footer/Footer';
import UserHeader from '../../components/layout/header/user-header/UserHeader';

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

const LoginForm: React.FC = () => {
    const onFinish = (values: FormValues) => {
        console.log('Form Values:', values);
    };

    // return (
    //     <div className='container'>
    //         <img src={Logo} alt="Logo" className='logo-img' />
    //         <img src={Gear} alt="Settings" className='gear-img' />

    //         <Title level={3} className='title'>
    //             <span className='sign-up-txt'>Sign Up</span>  to Find Work
    //         </Title>

    //         <Form
    //             layout="vertical"
    //             onFinish={onFinish}
    //             requiredMark={false}
    //             initialValues={{
    //                 agreement: false,
    //             }}
    //             className='fields'
    //         >


    //             <Row gutter={16} >
    //                 <Col span={16} >
    //                     <Form.Item
    //                         label={<span className='label'>Email</span>}
    //                         name="email"
    //                         rules={[
    //                             { required: true, message: 'Please enter a valid email' },
    //                             { type: 'email', message: 'Invalid email format' },
    //                         ]}
    //                     >
    //                         <Input />
    //                     </Form.Item>
    //                 </Col>

    //             </Row>

    //             <Row gutter={16}>

    //                 <Col span={20}>
    //                     <Form.Item
    //                         label={<span className='label'>Password</span>}
    //                         name="password"
    //                         dependencies={['password']}
    //                         rules={[
    //                             { required: true, message: 'Please Enter your password' },
    //                             ({ getFieldValue }) => ({
    //                                 validator(_, value) {
    //                                     if (!value || getFieldValue('password') === value) {
    //                                         return Promise.resolve();
    //                                     }
    //                                     return Promise.reject(new Error('Passwords do not match!'));
    //                                 },
    //                             }),
    //                         ]}
    //                     >
    //                         <Input.Password />
    //                     </Form.Item>
    //                 </Col>

    //             </Row>


    //             <Form.Item>
    //                 <div className='btn-div'>
    //                     <Button
    //                         className='btn'
    //                         htmlType="submit"
    //                     >
    //                         Log In
    //                     </Button>
    //                 </div>
    //             </Form.Item>

    //             <Text type="secondary" className='txt'>
    //                 Dont have an account? <Link className='log-in-txt' >Sign Up</Link>
    //             </Text>
    //         </Form>
    //     </div>
    // );



    return (
        <>
            <UserHeader/>
            <div className='container'>
                <img src={Logo} alt="Logo" className='logo-img' />

                <Title level={3} className='title'>
                    Admin Log In
                </Title>

                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                    className='fields'
                >
                    <Row>
                        <Col span={24}>
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

                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label={<span className='label'>Password</span>}
                                name="password"
                                rules={[{ required: true, message: 'Please enter your password' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item>
                        <div className='btn-div'>
                            <Button
                                className='btn'
                                htmlType="submit"
                            >
                                Log In
                            </Button>
                        </div>
                    </Form.Item>

                    <Text type="secondary" className='txt'>
                        Don't have an Account? <Link className='sign-up-link'>Sign Up</Link>
                    </Text>
                </Form>
            </div>
            <Footer />
        </>
    );
};

export default LoginForm;
