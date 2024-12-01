import { EditOutlined, DeleteOutlined, EyeOutlined, PlayCircleOutlined, FolderViewOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import { ColumnsType } from "antd/es/table";

export const workTypeTableColunms = (
    onClickDelete: any,
    // onClickView: any,
    // updateClick: any,
    // viewRequestingNoteClick: any,
): ColumnsType => {
    return [
        {
            title: "ID",
            dataIndex: "typeId",
            width: 100,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Work Type",
            dataIndex: "type",
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






