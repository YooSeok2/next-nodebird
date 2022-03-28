import { Form, Input, Button } from 'antd';
import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import PropTypes from 'prop-types';
import useInput from 'hooks/useInput';

const StyledForm = styled(Form)`
    margin-top: 20px;
`;

const StyledButton = styled(Button)`
    width: 100%
`;

const LoginForm = ({ setIsLogined }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const iconStyle = useMemo(() => ({ color: '#999' }), []);

    const onSubmitForm = useCallback(() => {
        setIsLogined(true);
    }, [id, password]);

    return (
        <StyledForm onFinish={onSubmitForm}>
            <Form.Item
                name='userId'
                rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
            >
                <Input prefix={<UserOutlined style={iconStyle} />} value={id} onChange={onChangeId} />
            </Form.Item>
            <Form.Item
                name='userPassword'
                rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
            >
                <Input.Password
                    prefix={<LockOutlined style={iconStyle} />}
                    value={password}
                    onChange={onChangePassword}
                />
            </Form.Item>
            <Form.Item >
                <StyledButton type="primary" htmlType="submit">
                     로그인
                </StyledButton>
            </Form.Item>
            <Form.Item >
                <Link href="/signup"><a><StyledButton htmlType="button">회원가입</StyledButton></a></Link>
            </Form.Item>
        </StyledForm>
    );
};

LoginForm.prototype = {
    setIsLogined: PropTypes.func
};

export default LoginForm;