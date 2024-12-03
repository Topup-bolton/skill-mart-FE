import React from 'react'
import AdminHeader from '../../components/layout/header/admin-header/AdminHeader'
import WorkType from './work-type/WorkType'
import { Card, Col, Row, Tabs } from 'antd'
import ServiceArea from './service-area/ServiceAra'
import TabPane from 'antd/es/tabs/TabPane'

function SettingPage() {
  return (
    <div style={{ padding: "0 80px 0 80px", marginTop: "70px" }}>
      <AdminHeader />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Manage Work Type" key="1">
                <WorkType />
              </TabPane>
              <TabPane tab="Manage Service Area" key="2">
                <ServiceArea />
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>

    </div>
  )
}

export default SettingPage