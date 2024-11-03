import React from 'react';
import { Layout, Menu, Avatar, Typography, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import Logo from '../../../../assets/skill-mart-logo.png'
import './style/AdminHeader.css';

const { Header } = Layout;
const { Text } = Typography;

const AdminHeader: React.FC = () => {
    // Define the dropdown menu for user actions
    const menu = (
        <Menu>
            <Menu.Item key="0">Profile</Menu.Item>
            <Menu.Item key="1">Settings</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">Logout</Menu.Item>
        </Menu>
    );

    return (
        <div className="admin-header">
            <div className="logo">
                <a href='/'><img src={Logo} alt="Logo" className="logo-text" /></a>
                {/* <Text className="logo-text">SkillMart</Text>
                <Text className="logo-subtext">Admin Panel</Text> */}
            </div>

            <Menu theme="light" mode="horizontal"  className="header-menu">
                <a href='/admin-dashboard'  key="1">Dashboard</a>
                <a href='/laborer-manegemnt' key="2"> Labor Management</a>
                <Menu.Item key="4">Reports</Menu.Item>
            </Menu>

            <div className="user-profile">
                <Avatar size="large" icon={<UserOutlined />} />
                <Dropdown overlay={menu} trigger={['click']}>
                    <Text className="username" onClick={(e) => e.preventDefault()}>
                        Administrator <DownOutlined />
                    </Text>
                </Dropdown>
            </div>
        </div>
    );
};

export default AdminHeader;
