import AntCarousel from "../components/AntCarousel";

export const Cursos = () => {
    return(
        <>
        <h1>Lista</h1>
        <AntCarousel></AntCarousel>
        </>
    )
}
/* import React, {useEffect} from 'react';
import useSWRMutation from 'swr/mutation';
import {
    createApi,
    profesor,
    getApi,
    updateApi,
} from '../services/Back'
import { ProfesorData } from '../pages/Cursos';
import {Button, Col, Drawer, Form, FormInstance, Input, Row} from 'antd';
import { toHaveFormValues } from '@testing-library/jest-dom/matchers';

type DrawerType = {
    open: boolean;
    setOpen: any;
    fields?: ProfesorData;
};

export const AntDrawer: React.FC<DrawerType> = ({open, setOpen, fields}: DrawerType) => {
    const [form] =Form.useForm();
    const onClose = () => {
        form.resetFields();
        setOpen(false);
    };
    const onFinish = async (values: ProfesorData)=> {
        values.nombres = String(values.nombres);
        
        onClose();
    };

    useEffect(()=>{
        form.setFieldsValue(fields);
    },[fields,form]);
  
    const {trigger, isMutating} = useSWRMutation(
        fields ? `${profesor}/${fields.id}`: profesor,
        fields ? updateApi : createApi
    );
    return (
        <Drawer
        title="Profesores"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{paddingBottom: 80}}
        >
            <FormSection form={form} loading={isMutating} onFinish={onFinish}/>
        </Drawer>
    );

    
};


type FormType = {
    form:FormInstance;
    loading:boolean;
    onFinish:any
}
const FormSection: React.FC<FormType>=({form, loading, onFinish}) => (
    <Form
    layout="vertical"
    hideRequiredMark
    onFinish={onFinish}
    form={form}
    >
        <Row gutter={16}>
            <Col span={12}>
                <Form.Item
                name="description"
                label="description"
                rules={[{required:true, message:'description'}]}
                >
                    <Input placeholder="description"/>
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Save
                </Button>
            </Col>
        </Row>
    </Form>
) */