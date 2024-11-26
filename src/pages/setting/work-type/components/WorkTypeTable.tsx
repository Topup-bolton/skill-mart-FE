import { EditOutlined, DeleteOutlined, EyeOutlined, PlayCircleOutlined, FolderViewOutlined } from "@ant-design/icons";
import { Tooltip, Button } from "antd";
import { ColumnsType } from "antd/es/table";

export const workTypeTableColunms = (
    // onClickDelete: any,
    // onClickView: any,
    // updateClick: any,
    // viewRequestingNoteClick: any,
): ColumnsType => {
    return [
        {
            title: "ID",
            dataIndex: "id",
            width: 100,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Work Type",
            dataIndex: "firstName",
            width: 250,
        },
    ];
};






