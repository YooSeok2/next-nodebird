import React, { useMemo } from 'react';
import { Form, Input } from 'antd';

const NickNameEditForm = () => {
    const FormStyle = useMemo(() => ({ marginBottom: '28px', border: '1px solid #d9d9d9', padding: '20px' }), []);

    return (
        <Form style={FormStyle}>
            <Input.Search addonBefore="닉네임" enterButton="수정" />
        </Form>
    );
};

export default NickNameEditForm;