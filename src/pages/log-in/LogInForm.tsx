// import React from 'react';
// import { Form, Input, Checkbox, Button, Typography, Row, Col, notification } from 'antd';
// import Logo from '../../assets/skill-mart-logo.png'
// import Gear from '../../assets/gear.png'
// import './style/LogInForm.css'
// import Link from 'antd/es/typography/Link';
// import Footer from '../../components/layout/footer/Footer';
// import UserHeader from '../../components/layout/header/user-header/UserHeader';
// import { LoginModel } from '../../models/login-model';
// import { loginAdmin } from '../../service/login-management-service';

// const { Title, Text } = Typography;

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     nickname?: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
//     phoneNumber: string;
//     agreement: boolean;
// }

// const LoginForm: React.FC = () => {
//     // const onClose = () => {
//     //     setOpen(false);
//     //     formRef.resetFields();
//     //     setViewClick(false)
//     //     setSaveBtnText("SUBMIT")
//     // };


//     const onFinish = async (values: { email: string; password: string }) => {
//         console.log('Form Values:', values);


//         const reqBody: LoginModel = {
//             email: values.email,
//             password: values.password,

//         };
//         try {
//             const response = await loginAdmin(reqBody);
//             console.log('Login successful:', response);

//             if (response) {
//                 notification.open({
//                     type: "success",
//                     message: "Successfully.",
//                     description:
//                         "Admin Login successfully updated."
//                 });
//                 //onClose()
//             }



//         } catch (error) {
//             console.error('Login failed:', error);

//         }
//     };
//     return (
//         <>

//             <div className='container'>
//                 <img src={Logo} alt="Logo" className='logo-img' />

//                 <Title level={3} className='title'>
//                     Admin Log In
//                 </Title>

//                 <Form
//                     layout="vertical"
//                     onFinish={onFinish}
//                     requiredMark={false}
//                     className='fields'
//                 >
//                     <Row>
//                         <Col span={24}>
//                             <Form.Item
//                                 label={<span className='label'>Email</span>}
//                                 name="email"
//                                 rules={[
//                                     { required: true, message: 'Please enter a valid email' },
//                                     { type: 'email', message: 'Invalid email format' },
//                                 ]}
//                             >
//                                 <Input />
//                             </Form.Item>
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Col span={24}>
//                             <Form.Item
//                                 label={<span className='label'>Password</span>}
//                                 name="password"
//                                 rules={[{ required: true, message: 'Please enter your password' }]}
//                             >
//                                 <Input.Password />
//                             </Form.Item>
//                         </Col>
//                     </Row>

//                     <Form.Item>
//                         <div className='btn-div'>
//                             <Button
//                                 className='btn'
//                                 htmlType="submit"
//                             >
//                                 Log In
//                             </Button>
//                         </div>
//                     </Form.Item>


//                 </Form>
//             </div>
//             {/* <Footer /> */}
//         </>
//     );
// };

// export default LoginForm;




import React from 'react';
import { Form, Input, Button, Typography, Row, Col, notification } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Logo from '../../assets/skill-mart-logo.png';
import './style/LogInForm.css';
import { LoginModel } from '../../models/login-model';
import { loginAdmin } from '../../service/login-management-service';

const { Title } = Typography;

const LoginForm: React.FC = () => {
    const navigate = useNavigate(); // Initialize navigation hook

    const onFinish = async (values: { email: string; password: string }) => {
        console.log('Form Values:', values);

        const reqBody: LoginModel = {
            email: values.email,
            password: values.password,
        };

        try {
            const response = await loginAdmin(reqBody);
            console.log('Login successful:', response);

            if (response) {
                notification.success({
                    message: "Login Successful",
                    description: "Admin logged in successfully.",
                });

                // Navigate to admin-dashboard after successful login
                navigate('/admin-dashboard');
            }
        } catch (error) {
            console.error('Login failed:', error);
            notification.error({
                message: "Login Failed",
                description: "Invalid email or password. Please try again.",
            });
        }
    };

    return (
        <div className="container">
            <img src={Logo} alt="Logo" className="logo-img" />

            <Title level={3} className="title">
                Admin Log In
            </Title>

            <Form
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
                className="fields"
            >
                <Row>
                    <Col span={24}>
                        <Form.Item
                            label={<span className="label">Email</span>}
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
                            label={<span className="label">Password</span>}
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <div className="btn-div">
                        <Button
                            className="btn"
                            htmlType="submit"
                        >
                            Log In
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;


