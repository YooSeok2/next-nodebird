import React, { useCallback, useMemo } from 'react';
import { Card, Avatar, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { logoutAction } from 'reducers/user';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const { Meta } = Card;

const LogoutButton = styled(Button)`
    width:100%;
    border:none;
    padding:0;
    margin:0;
    box-shadow:none;
`;

const UserProfile = () => {
    const cardStyle = useMemo(() => ({ width: 300 }), []);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(logoutAction);
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

export default UserProfile;