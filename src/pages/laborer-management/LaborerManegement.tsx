import React, { useEffect, useState } from 'react'
import AdminHeader from '../../components/layout/header/admin-header/AdminHeader'
import { Button, Col, Drawer, Form, Input, Modal, notification, Row, Select, Space, Table } from 'antd'
import { laborerManagementTableColunms } from './components/LaborerManegementTable';
import { ClearOutlined, ExclamationCircleFilled, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { createNewLaborer, deleteLaborer, findLaboreByName, findLaboreByServiceArea, getAllLaborers, updateLaborer } from '../../service/laborer-management-service';
import { GetLaborerModel, LaborerModel } from '../../models/laboror-model';
import { getAllServiceAreas } from '../../service/service-area';
import { ServiceAreaModel } from '../../models/service-area';
import { getAllServiceTypes } from '../../service/service-type';
import { ServiceTypeModel } from '../../models/service-type';


const LaborerManagement = () => {
    const [open, setOpen] = useState(false);
    const [tableDataFiltered, setTableDataFiltered] = useState<
        GetLaborerModel[]
    >([]);
    const [serviceAreas, setServiceAreas] = useState<
        ServiceAreaModel[]
    >([]);
    const [serviceTypes, setServiceTypes] = useState<
        ServiceTypeModel[]
    >([]);
    const [viewClick, setViewClick] = useState(false)
    const [saveBtnText, setSaveBtnText] = useState("SUBMIT")
    const [updateObj, setupdateObj] = useState<LaborerModel | undefined>()
    const [searchValue, setSearchValue] = useState("")
    const [formRef] = Form.useForm();
    const [searchFormRef] = Form.useForm();

    const { confirm } = Modal;


    useEffect(() => {
        getLaborers()
        getAllServiceArea()
        getAllServiceType()
    }, [])

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        formRef.resetFields();
        setViewClick(false)
        setSaveBtnText("SUBMIT")
    };

    const loadDataForFields = (record: LaborerModel) => {
        formRef.setFieldsValue({
            firstName: record.firstName,
            lastName: record.lastName,
            address: record.address,
            phoneNumber: record.mobile,
            fbLink: record.links,
            typeOfWork: record.serviceType,
            serviceArea: record.serviceArea,
            qualifications: record.qualification
        });
    }

    const onClickView = (record: LaborerModel) => {
        setViewClick(true)
        loadDataForFields(record);
        showDrawer();
    }

    const updateClick = (record: LaborerModel) => {
        setupdateObj(record);
        loadDataForFields(record);
        setSaveBtnText("UPDATE")
        showDrawer();
    }

    const getLaborers = async () => {
        const data = await getAllLaborers()
        setTableDataFiltered(data.response);
    }

    const onClickSave = async () => {
        const reqBody = {
            firstName: formRef.getFieldValue('firstName'),
            lastName: formRef.getFieldValue('lastName'),
            address: formRef.getFieldValue('address'),
            mobile: formRef.getFieldValue('phoneNumber'),
            links: formRef.getFieldValue('fbLink'),
            serviceType: formRef.getFieldValue('typeOfWork'),
            serviceArea: formRef.getFieldValue('serviceArea'),
            qualification: formRef.getFieldValue('qualifications'),
            available: true,
        }
        let response;
        if (saveBtnText == "SUBMIT") {
            response = await createNewLaborer(reqBody);
        } else {
            response = await updateLaborer(updateObj?.id, reqBody);
        }

        if (response) {
            notification.open({
                type: "success",
                message: "Successfully.",
                description: saveBtnText == "SUBMIT" ?
                    "Laborer successfully created." :
                    "Laborer successfully updated."
            });
            onClose()
            getLaborers()
            setupdateObj(undefined)
        }
    }

    const onClickDelete = (record: LaborerModel) => {
        confirm({
            title: 'Delete Laborer',
            icon: <ExclamationCircleFilled />,
            content: 'Do you want to delete this Laborer ?',
            async onOk() {
                await deleteLaborer(Number(record.id!));
                notification.open({
                    type: "success",
                    message: "Delete Successfully.",
                    description: "Laborer deleted successfully."
                });
                getLaborers()
            },
            onCancel() {
            },
        });
    };

    const getAllServiceArea = async () => {
        const data = await getAllServiceAreas()
        setServiceAreas(data.response);
    }

    const getAllServiceType = async () => {
        const data = await getAllServiceTypes()
        setServiceTypes(data.response);
    }

    const onChangeSearch = (e: any) => {
        setSearchValue(e.target.value);
    }

    const searchLaborer = async () => {
        const data = await findLaboreByServiceArea(searchValue)
        setTableDataFiltered(data.response);
    }

    const clearSearch = () => {
        searchFormRef.resetFields();
        getLaborers()
    }

    return (
        <div style={{ padding: "0 80px 0 80px", marginTop: "70px" }}>
            <AdminHeader />
            <Row gutter={16} align="middle" justify="space-between" style={{ marginBottom: '30px' }}>
                <Col>
                    <h3>Laborer Management</h3>
                </Col>

                <Col>
                    <Row gutter={8} align="middle">
                        <Form
                            layout='inline'
                            form={searchFormRef}
                            onFinish={searchLaborer}
                        >
                            <Col>
                                <Form.Item
                                    name="searchInput"

                                >
                                    <Input
                                        placeholder="Enter name and search"
                                        style={{
                                            width: 200,
                                            borderRadius: '30px'
                                        }}
                                        onChange={onChangeSearch}
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
                                onClick={searchLaborer}
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
                                onClick={clearSearch}
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
                                Add Laborer
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Table
                size="small"
                columns={laborerManagementTableColunms(
                    onClickDelete,
                    onClickView,
                    updateClick,
                )}
                dataSource={tableDataFiltered}
                rowKey={"id"}
            />

            <Drawer
                width={600}
                title={<span style={{ color: '#3D8CA7', fontWeight: '700' }}>Worker Registration</span>}
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
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>First Name</span>}
                                name="firstName"
                                rules={[{ required: true, message: 'Please enter your first name' }]}

                            >
                                <Input readOnly={viewClick} />
                            </Form.Item>

                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>Last Name</span>}
                                name="lastName"
                                rules={[{ required: true, message: 'Please enter your last name' }]}
                            >
                                <Input readOnly={viewClick} />
                            </Form.Item>
                        </Col>

                    </Row>

                    <Row >
                        <Col span={24}>
                            <Form.Item
                                label={<span className='label'>Address</span>}
                                name="address"
                                rules={[{ required: true, message: 'Please enter your address' }]}
                            >
                                <Input readOnly={viewClick} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>Phone Number</span>}
                                name="phoneNumber"
                                rules={[
                                    { required: true, message: 'Please enter your phone number' },
                                    {
                                        pattern: /^07[0-9]{8}$/,
                                        message: 'Please enter a valid mobile number (e.g., 0712345678)',
                                    },
                                ]}
                            >
                                <Input readOnly={viewClick} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>Facebook Profile Link(Optional) </span>}
                                name="fbLink"
                            >
                                <Input readOnly={viewClick} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>Type of Work</span>}
                                name="typeOfWork"
                                rules={[{ required: true, message: 'Please enter your work type' }]}
                            >
                                {
                                    viewClick ? (<Input readOnly />) : (
                                        <Select>
                                            {serviceTypes?.map((service) => (
                                                <Select.Option key={service.typeId} value={service.type}>
                                                    {service.type}
                                                </Select.Option>
                                            ))}
                                        </Select>)
                                }
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label={<span className='label'>Availability Area</span>}
                                name="serviceArea"
                                rules={[{ required: true, message: 'Please enter your availability area' }]}
                            >
                                {
                                    viewClick ? (<Input readOnly />) : (
                                        <Select>
                                            {serviceAreas?.map((service) => (
                                                <Select.Option key={service.areaId} value={service.areaName}>
                                                    {service.areaName}
                                                </Select.Option>
                                            ))}
                                        </Select>)
                                }

                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>

                            <Form.Item
                                label={<span className='label'>Qualifications/ Experience </span>}
                                name="qualifications"
                                rules={[{ required: true, message: 'Please enter your qualifications' }]}
                            >
                                <TextArea readOnly={viewClick} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item>
                        <div style={{ display: 'flex', justifyContent: 'end' }}>
                            {viewClick ? (null) : (
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
                                        {saveBtnText}
                                    </Button>
                                </Space>
                            )}
                        </div>
                    </Form.Item>
                </Form>
            </Drawer>
        </div>





    )
}

export default LaborerManagement