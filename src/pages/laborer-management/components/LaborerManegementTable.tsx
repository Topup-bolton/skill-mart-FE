import { EditOutlined, DeleteOutlined, EyeOutlined, PlayCircleOutlined, FolderViewOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import { ColumnsType } from "antd/es/table";

export const laborerManagementTableColunms = (
    // viewClick: any,
    // updateClick: any,
    // viewRequestingNoteClick: any,
): ColumnsType => {
    return [
        {
            title: "Laborer ID",
            dataIndex: "laborerId",
            width: 100,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Laborer Name",
            dataIndex: "laborerName",
            width: 250,
        },
        {
            title: "Laborer Type",
            dataIndex: "laborerType",
            width: 250,
        },
        {
            title: "Rating",
            dataIndex: "rating",
            width: 250,
        },

        {
            title: "Actions",
            dataIndex: "option",
            align: "center",
            width: 300,
            render: (text, record) => {
                return (
                    <div className="option-button-div">
                        <Tooltip placement="topLeft">
                            {" "}
                            <Button
                                style={{ backgroundColor: "transparent", borderColor: "transparent", color:'#33C596',fontWeight:'500'}}
                                size="small"
                                // onClick={() => updateClick(record)}
                            ><u>View</u></Button>
                        </Tooltip>
                        <Tooltip placement="topLeft" >
                            {" "}
                            <Button
                                style={{ backgroundColor: "transparent", borderColor: "transparent", color: '#3D8CA7', fontWeight: '500' }}
                                size="small"
                            // onClick={() => updateClick(record)}
                            ><u>Edit</u></Button>
                        </Tooltip>
                        <Tooltip placement="topLeft">
                            {" "}
                            <Button
                                style={{ backgroundColor: "transparent", borderColor: "transparent", color: '#D63C3F', fontWeight: '500' }}
                                size="small"
                            // onClick={() => updateClick(record)}
                            ><u>Delete</u></Button>
                        </Tooltip>
                        {/* <Tooltip placement="topLeft" title={'Delete'}>
                            <Button onClick={() => deleteClick(record)}
                                size="small"
                                icon={<DeleteOutlined />}
                                danger />
                        </Tooltip> */}

                    </div>
                );
            },
        },
    ];
};






