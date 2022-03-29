import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const InputSearch = styled(Input.Search)`
    verticalAlign: 'middle';
`;

const AppLayout = ({ children }) => {
    const { isLogined } = useSelector((state) => state.user);

    return (
        <div>
            <div>
                <Menu mode="horizontal" >
                    <Menu.Item key="home">
                        <Link href={'/'}><a>노드버드</a></Link>
                    </Menu.Item>
                    <Menu.Item key="profile">
                        <Link href={'/profile'}><a>프로필</a></Link>
                    </Menu.Item>
                    <Menu.Item key="enter">
                        <InputSearch enterButton></InputSearch>
                    </Menu.Item>
                    <Menu.Item key="signup">
                        <Link href={'/signup'}><a>회원가입</a></Link>
                    </Menu.Item>
                </Menu>
                <Row gutter={8}>
                    <Col xs={24} md={4}></Col>
                    {isLogined ?
                        <UserProfile />
                        :
                        <LoginForm />}
                    <Col xs={24} md={12}>
                    </Col>
                </Row>
                {children}
            </div>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string
};

export default AppLayout;

