import React, { useCallback, useMemo } from 'react';
import { Card, Avatar, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const { Meta } = Card;

const LogoutButton = styled(Button)`
    width:100%;
    border:none;
    padding:0;
    margin:0;
    box-shadow:none;
`;

const UserProfile = ({ setIsLogined }) => {
    const cardStyle = useMemo(() => ({ width: 300 }), []);

    const onLogout = useCallback(() => {
        setIsLogined(false);
    }, []);

    return (
        <Card
            style={cardStyle}
            actions={[
                <LogoutButton onClick={onLogout} key="logout">
                    <LoginOutlined/>
                </LogoutButton>

            ]}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="yooggu"
                description="This is the description"
            />
        </Card>
    );
};

UserProfile.prototype = {
    setIsLogined: PropTypes.func
};

export default UserProfile;