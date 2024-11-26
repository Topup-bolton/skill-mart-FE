import React from 'react'
import AdminHeader from '../../components/layout/header/admin-header/AdminHeader'
import WorkType from './work-type/WorkType'
import { Card, Col, Row } from 'antd'
import ServiceArea from './service-area/ServiceAra'

function SettingPage() {
  return (
    <div style={{ padding: "0 80px 0 80px", marginTop: "70px" }}>
      <AdminHeader />
      <Row gutter={[16, 16]}>

        <Col
          span={12}>
          <Card >
            <WorkType />
          </Card>
        </Col>

        <Col
          span={12}>
          <Card >
            <ServiceArea />
          </Card>
        </Col>
      </Row>

    </div>
  )
}

export default SettingPage