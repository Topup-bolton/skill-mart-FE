import React from 'react';
import './styles/About.css'; // Create a CSS file for styling your About page
import UserHeader from '../../components/layout/header/user-header/UserHeader';
import Footer from '../../components/layout/footer/Footer';
import Gear from '../../assets/gear.png'


const About: React.FC = () => {
    return (
        <>
            <UserHeader />
            <img src={Gear} alt="Settings" className='gear-img' />
        <div className="about-container">
            <h1>About SkillMart</h1>
            <p>
                SkillMart is your one-stop platform for enhancing your skills and knowledge.
                We offer a wide range of courses and resources designed to help you learn 
                and grow in your career. Our mission is to empower individuals through 
                education and training, making learning accessible and engaging for everyone.
            </p>
            <h2>Our Vision</h2>
            <p>
                To create a world where anyone can learn anything, anytime, anywhere.
            </p>
            <h2>Our Values</h2>
            <ul>
                <li>Integrity: We believe in being honest and transparent in all our dealings.</li>
                <li>Innovation: We strive to offer the latest and most effective learning methods.</li>
                <li>Inclusivity: We aim to provide an accessible platform for all learners.</li>
                <li>Excellence: We are committed to delivering high-quality content and support.</li>
            </ul>
            <h2>Meet the Team</h2>
            <p>
                Our team is comprised of industry experts and educators who are passionate 
                about sharing their knowledge and helping others succeed. Together, we work 
                tirelessly to develop engaging content that meets the needs of our learners.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions or feedback, feel free to reach out to us at 
                support@skillmart.com.
            </p>
            </div>
            <Footer/>
            </>
    );
};

export default About;
