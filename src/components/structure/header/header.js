import React, { Component } from 'react';
import { Row, Col, Breadcrumb, Button } from 'antd';

import "./header.css";

class HeaderComponent extends Component {
  render() {
    return (
      <div>
         <Row>
          <Col span={3} offset={3}></Col>
          <Col span={11} className="course">
              <small className="small-tag">COURSE NAME</small>
              <br/>
              <Breadcrumb separator=">">
                <Breadcrumb.Item>CUSTOMER</Breadcrumb.Item>
                <Breadcrumb.Item href="">CATEGORY</Breadcrumb.Item>
                <Breadcrumb.Item href="">SUBCATEGORY</Breadcrumb.Item>
                <Breadcrumb.Item><b>COURSE NAME</b></Breadcrumb.Item>
              </Breadcrumb>
          </Col>
          <Col span={2}>
              <Button type="primary" shape="round" size="large" className="preview-button">Preview</Button>
          </Col>
          <Col span={2}>
              <b>EXPORT</b>
          </Col>
          <Col span={2}>
              <b>TRANSLATE</b>
          </Col>
         </Row>
      </div>
    );
  }
}
export default HeaderComponent;