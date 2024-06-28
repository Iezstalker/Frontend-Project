import React from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import './FloatButton.css';

const FloatingButton = () => {

    const handleClick = () => {
        var href = 'https://wa.me/917020044091';
        window.open(href, '_blank');
    }

    return (
        <div>
            <FloatButton.BackTop className='btn-top' />

            <a href onClick={handleClick}><FloatButton
                icon={<WhatsAppOutlined/>}
                className='btn-whatsapp'
                style={{
                    left: 35,
            }}
            />
            </a>
        </div>
    )
}

export default FloatingButton