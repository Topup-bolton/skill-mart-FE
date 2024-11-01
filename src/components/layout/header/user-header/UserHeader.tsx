import React from 'react';
import {Link} from 'react-router-dom';
import './style/UserHeader.css';
import Logo from '../../../../assets/skill-mart-logo.png';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const UserHeader: React.FC = () => {
    return (
        <div className="header-container">
            <div className="header-logo">
                <img src={Logo} alt="SkillMart Logo" />
            </div>

            <div className="header-nav">
                <a href="/" className="nav-link"><Link to={'/'}>Home</Link></a>
                
                <a href="/find-laborer" className="nav-link active"><Link to={'/find-laborer'}>Find-Laborer</Link></a>
                <a href="/about" className="nav-link"><Link to={'/about'}>About</Link></a>
            </div>

            <div className="header-search">
                <Input 
                    placeholder="Search here" 
                    suffix={<SearchOutlined />} 
                    className="search-input"
                />
            </div>
        </div>
    );
};

export default UserHeader;
