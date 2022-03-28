import React, { useMemo } from 'react';
import { Button, Card, List } from 'antd';
import styled from 'styled-components';
import { StopOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const LoadMore = styled.div`
    textAlign: 'center';
    margin: '10px 0';
`;

const StyleList = styled(List)`
    marginBottom: 20px;
`;

const StyleListItem = styled(List.Item)`
    marginTop: 20px;
`;

const FollowList = ({ header, data }) => {
    const listGridOpt = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
    console.log(data);
    return (
        <StyleList
            grid={listGridOpt}
            size="small"
            header= {<div>{header}</div>}
            loadMore={<LoadMore><Button>더 보기</Button></LoadMore>}
            bordered
            dataSource={data}
            renderItem={(item) => (
                <StyleListItem>
                    <Card actions={[<StopOutlined key={stop} />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </StyleListItem>
            )}
        />
    );
};

FollowList.prototype = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};

export default FollowList;