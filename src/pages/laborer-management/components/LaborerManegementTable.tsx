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
                        <Tooltip placement="topLeft" title={"Update"}>
                            {" "}
                            <Button
                                size="small"
                                // onClick={() => updateClick(record)}
                                // type="default"
                                // disabled={record.docStatus !== "DRAFT"}
                                // icon={<EditOutlined />}
                            >View</Button>
                        </Tooltip>
                        <Tooltip placement="topLeft" title={"Update"}>
                            {" "}
                            <Button
                                size="small"
                                // onClick={() => viewClick(record)}
                                type="default"
                                icon={<EyeOutlined />}
                            />{" "}
                        </Tooltip>
                        <Tooltip placement="topLeft" title={"View Card Issuing Note"}>
                            {" "}
                            <Button
                                size="small"
                                // onClick={() => viewRequestingNoteClick(record)}
                                disabled={record.cardRequestingNoteId === 0}
                                type="default"
                                icon={<FolderViewOutlined />}
                            />{" "}
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






