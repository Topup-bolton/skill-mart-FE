import React from 'react';
import { Layout, Menu, Avatar, Typography, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import './AdminHeader.css';

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
        <Header className="admin-header">
            <div className="logo">
                <Text className="logo-text">SkillMart</Text>
                <Text className="logo-subtext">Admin Panel</Text>
            </div>

            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className="header-menu">
                <Menu.Item key="1">Dashboard</Menu.Item>
                <Menu.Item key="2">User Management</Menu.Item>
                <Menu.Item key="3">Forms</Menu.Item>
                <Menu.Item key="4">Reports</Menu.Item>
            </Menu>

            <div className="user-profile">
                <Avatar size="large" icon={<UserOutlined />} />
                <Dropdown overlay={menu} trigger={['click']}>
                    <Text className="username" onClick={(e) => e.preventDefault()}>
                        AdminUser <DownOutlined />
                    </Text>
                </Dropdown>
            </div>
        </Header>
    );
};

export default AdminHeader;
