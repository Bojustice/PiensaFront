import React, {useEffect} from 'react';
import useSWRMutation from 'swr/mutation';
import {Button, Col, Drawer, Form, FormInstance, Input, Row} from 'antd';
type DrawerType = {
    open: Boolean;
    setopen: any;
    fields?: any;
};
