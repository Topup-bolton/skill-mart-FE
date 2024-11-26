import { SearchOutlined, ClearOutlined, PlusOutlined } from '@ant-design/icons'
import { Row, Col, Input, Button, Form, Table, Space, Drawer } from 'antd'
import React, { useState } from 'react'
import { workTypeTableColunms } from './components/WorkTypeTable'

function WorkType() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (

        <Row gutter={16} align="middle" justify="space-between" style={{ marginBottom: '30px' }}>
            <Col>
                <h3>Manage Type</h3>
            </Col>

            <Col>
                <Row gutter={8} align="middle">
                    <Form
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
                    </Col>

                    <Col>
                        <Button

                            style={{
                                backgroundColor: '#61C6E8',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '30px'
                            }}
                            icon={<PlusOutlined />}
                            onClick={showDrawer}
                        >
                            Add Type
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Table
                style={{ width: "100%" }}
                size="small"
                columns={workTypeTableColunms(
                    //   onClickDelete,
                    //   onClickView,
                    //   updateClick,
                )}
                //   dataSource={tableDataFiltered}
                rowKey={"id"}
            />
            <Drawer
                width={400}
                title={<span style={{ color: '#3D8CA7', fontWeight: '700' }}>Add Work Type</span>}
                placement="right"
                onClose={onClose}
                open={open}
            >
                <Form
                    layout="vertical"
                    //   form={formRef}
                    requiredMark={false}
                    initialValues={{
                        agreement: false,
                    }}
                >
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label={<span className='label'>Work Type</span>}
                                name="workType"
                                rules={[{ required: true, message: 'Please enter work type' }]}

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
                                //   onClick={onClickSave}
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

export default WorkType