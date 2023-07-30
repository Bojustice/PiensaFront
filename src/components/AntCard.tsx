import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Card} from 'antd';

const {Meta}= Card;

type CardType = {
    nombre:string,
    apellido?: string,
    telefono?: number,
    email?: string,
    image?:string
    
}

const AntCard:React.FC<CardType> = ({nombre, apellido, telefono, email, image}:CardType)=>(
    <Card
        style={{width: 200}}
        cover={
            <img
                alt="Imagen"
                src={image}
            />
        }
        actions={[
            <SettingOutlined key="setting"/>,
            <EditOutlined key="edit"/>,
            <EllipsisOutlined key="ellipsis"/>,
        ]}
    >
        <Meta
            title={nombre}
            description={telefono}
        />
    </Card>
);

export default AntCard;