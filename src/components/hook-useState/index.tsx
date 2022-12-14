import React, { useState } from 'react';
import { Button, Space } from 'antd';
const HookUseState = () => {
    const [count, setCount] = useState(0);
    const handle = (temp: number) => {
        setCount(count + temp);
    };

    return (
        <div className="section">
            <h3>1. useState</h3>
            <Space>
                <Button
                    type="primary"
                    onClick={() => {
                        handle(1);
                    }}
                >
                    +
                </Button>
                <Button danger>{count}</Button>
                <Button
                    type="dashed"
                    onClick={() => {
                        handle(-1);
                    }}
                >
                    -
                </Button>
            </Space>
        </div>
    );
};
export default HookUseState;
