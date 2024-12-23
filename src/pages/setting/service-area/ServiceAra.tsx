import { SearchOutlined, ClearOutlined, PlusOutlined, ExclamationCircleFilled } from '@ant-design/icons'
import { Row, Col, Input, Button, Form, Table, Space, Drawer, notification, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { serviceAreaColunms } from './components/ServiceAreaTable';
import { createServiceArea, deleteServiceArea, getAllServiceAreas } from '../../../service/service-area';
import { ServiceAreaModel } from '../../../models/service-area';

function ServiceArea() {
    const [open, setOpen] = useState(false);
    const [tableDataFiltered, setTableDataFiltered] = useState<
        ServiceAreaModel[]
    >([]);
    const [formRef] = Form.useForm()

    const { confirm } = Modal;

    useEffect(() => {
        getAllServiceArea()
    }, [])
    

    const showDrawer = () => {
        setOpen(true);
        
    };

    const onClose = () => {
        setOpen(false);
        formRef.resetFields();
    };

    const getAllServiceArea = async () => {
        const data = await getAllServiceAreas()
        setTableDataFiltered(data.response);
    }


    const onClickSave = async () => {
        const serviceArea = formRef.getFieldValue('srviceArea');
        const response = await createServiceArea(serviceArea);

        if (response) {
            notification.open({
                type: "success",
                message: "Successfully.",
                description:
                    "Service Area successfully created."
            });
            onClose()
            getAllServiceArea()

        }
    }

    const onClickDelete = (record: ServiceAreaModel) => {
        confirm({
            title: 'Delete Service Area',
            icon: <ExclamationCircleFilled />,
            content: 'Do you want to delete this Service Area ?',
            async onOk() {
                await deleteServiceArea(Number(record.areaId!));
                notification.open({
                    type: "success",
                    message: "Delete Successfully.",
                    description: "Service Area deleted successfully."
                });
                getAllServiceArea()
            },
            onCancel() {
            },
        });
    };

    return (

        <Row gutter={16} align="middle" justify="space-between" style={{ marginBottom: '30px' }}>
            <Col>
                {/* <h3>Manage Area</h3> */}
            </Col>

            <Col>
                <Row gutter={8} align="middle">
                    {/* <Form
                        layout='inline'
                    //   form={searchFormRef}
                    //   onFinish={searchLaborer}
                    >
                        <Col>
                            <Form.Item
                                name="searchInput"

                            >
                                <Input
                                    placeholder="Search"
                                    style={{
                                        width: 140,
                                        borderRadius: '30px'
                                    }}
                                //   onChange={onChangeSearch}
                                />
                            </Form.Item>

                        </Col>
                    </Form>
                    <Col>
                        <Button
                            style={{
                                backgroundColor: '#61C6E8',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '30px'
                            }}
                            icon={<SearchOutlined />}
                        //   onClick={searchLaborer}
                        >

                        </Button>
                    </Col>
                    <Col>
                        <Button
                            style={{
                                backgroundColor: '#61C6E8',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '30px'
                            }}
                            icon={<ClearOutlined />}
                        //   onClick={clearSearch}
                        >

                        </Button>
                    </Col> */}

                    <Col>
                        <Button

                            style={{
                                backgroundColor: '#61C6E8',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '30px',
                                marginBottom: '10px',
                            }}
                            icon={<PlusOutlined />}
                            onClick={showDrawer}
                        >
                            Add Service Area
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Table
                style={{ width: "100%" }}
                size="small"
                columns={serviceAreaColunms(
                      onClickDelete,
                    //   onClickView,
                    //   updateClick,
                )}
                  dataSource={tableDataFiltered}
                rowKey={"id"}
            />
            <Drawer
                width={400}
                title={<span style={{ color: '#3D8CA7', fontWeight: '700' }}>Add Service Area</span>}
                placement="right"
                onClose={onClose}
                open={open}
            >
                <Form
                    layout="vertical"
                    form={formRef}
                    requiredMark={false}
                    initialValues={{
                        agreement: false,
                    }}
                >
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label={<span className='label'>Service Area</span>}
                                name="srviceArea"
                                rules={[{ required: true, message: 'Please enter Service Area' }]}

                            >
                                <Input />
                            </Form.Item>

                        </Col>


                    </Row>
                    <Form.Item>
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            <Space>
                                <Button
                                    className='btn'
                                >
                                    CANCEL
                                </Button>
                                <Button
                                    className='btn'
                                    htmlType="submit"
                                    onClick={onClickSave}
                                >
                                    SAVE
                                </Button>
                            </Space>
                        </div>
                    </Form.Item>
                </Form>
            </Drawer>

        </Row>
    )
}

export default ServiceArea