import { EditOutlined, DeleteOutlined, EyeOutlined, PlayCircleOutlined, FolderViewOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import { ColumnsType } from "antd/es/table";

export const laborerManagementTableColunms = (
    onClickDelete: any,
    onClickView: any,
    updateClick: any,
    // viewRequestingNoteClick: any,
): ColumnsType => {
    return [
        {
            title: "Laborer ID",
            dataIndex: "id",
            width: 100,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Laborer Name",
            dataIndex: "firstName",
            width: 250,
        },
        {
            
            title: "Work Type",
            dataIndex: "serviceType",
            width: 250,
        },
        {
            title: "Service Area",
            dataIndex: "serviceArea",
            width: 250,
        },
        {
            title: "Qualifications",
            dataIndex: "qualification",
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
                                style={{ backgroundColor: "transparent", borderColor: "transparent", color: '#33C596', fontWeight: '500' }}
                                size="small"
                                onClick={() => onClickView(record)}
                            ><u>View</u></Button>
                        </Tooltip>
                        <Tooltip placement="topLeft" >
                            {" "}
                            <Button
                                style={{ backgroundColor: "transparent", borderColor: "transparent", color: '#3D8CA7', fontWeight: '500' }}
                                size="small"
                                onClick={() => updateClick(record)}
                            ><u>Edit</u></Button>
                        </Tooltip>
                        <Tooltip placement="topLeft">
                            {" "}
                            <Button
                                style={{ backgroundColor: "transparent", borderColor: "transparent", color: '#D63C3F', fontWeight: '500' }}
                                size="small"
                                onClick={() => onClickDelete(record)}
                            ><u>Delete</u></Button>
                        </Tooltip>
                    </div>
                );
            },
        },
    ];
};






