import React from 'react'
import AdminHeader from '../../components/layout/header/admin-header/AdminHeader'
import { Card, Col, Row, Table } from 'antd'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { laborerManagementTableColunms } from './components/LaborerManegementTable';

const data = [
    { laborerId: '1', laborerName: 'Laborer 1', laborerType: 'Test Type', rating: '5.0' },
    
]


const LaborerManagement = () => {
    return (
        <div>
            <AdminHeader />
            <Table
                size="small"
                columns={laborerManagementTableColunms(
                    // viewClick,
                    // updateClick,
                    // viewRequestingNoteClick,

                )}
                // onChange={tableChangeHandler}
                dataSource={data}
                rowKey={"id"}
                // pagination={{
                //     total: tablePagination.totalRecords,
                //     current: tablePagination.currentPage,
                //     pageSize: tablePagination.itemPerPage,
                //     pageSizeOptions: [10, 25, 50],
                //     showSizeChanger: true,
                // }}
            />
        </div>



    )
}

export default LaborerManagement