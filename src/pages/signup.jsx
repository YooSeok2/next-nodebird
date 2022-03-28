import React, { useCallback } from 'react';
import AppLayout from 'components/AppLayout';
import Head from 'next/head';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import useInput from 'hooks/useInput';

const StyledButton = styled(Button)`
    width: 100%
`;

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [confirmPassword, onChangeConfirmPassword] = useInput('');

    const getFormRules = useCallback((msg, validate) => {
        const rules = [];
        rules.push({
            required: true,
            message: msg
        });
        if (validate) {
            rules.push(({ getFieldValue }) => ({
                validator (_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('비밀번호와 일치하지 않습니다.'));
                }
            }));
        }
        return rules;
    }, []);

    const onSubmit = useCallback(() => {
        console.log('submit');
    }, []) ;

    return (
        <>
            <Head>
                <title>회원가입 || NodeBird</title>
            </Head>
            <AppLayout>
                <Form onFinish={onSubmit} layout="vertical">
                    <Form.Item
                        label="아이디"
                        name="id"
                        tooltip={{ title: '필수', icon: <InfoCircleOutlined /> }}
                        rules={getFormRules('아이디는 필수 입력 칸입니다.', false)}
                    >
                        <Input value={id} onChange={onChangeId} />
                    </Form.Item>
                    <Form.Item
                        label="닉네임"
                        name="nickname"
                        tooltip={{ title: '필수', icon: <InfoCircleOutlined /> }}
                        rules={getFormRules('닉네임은 필수 입력 칸입니다.', false)}
                    >
                        <Input name='user-nickname' value={nickname} onChange={onChangeNickname} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="비밀번호"
                        hasFeedback
                        tooltip={{ title: '필수', icon: <InfoCircleOutlined /> }}
                        rules={getFormRules('비밀번호는 필수 입력 칸입니다.', false)}
                    >
                        <Input.Password value={password} onChange={onChangePassword} />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="비밀번호 확인"
                        dependencies={['password']}
                        hasFeedback
                        tooltip={{ title: '필수', icon: <InfoCircleOutlined /> }}
                        rules={getFormRules('비밀번호와 똑같이 입력해주세요.', true)}
                    >
                        <Input.Password
                            value={confirmPassword}
                            onChange={onChangeConfirmPassword}
                        />
                    </Form.Item>
                    <Form.Item >
                        <StyledButton type="primary" htmlType="submit">
                            회원가입
                        </StyledButton>
                    </Form.Item>
                </Form>
            </AppLayout>
        </>

    );
};

export default Signup;