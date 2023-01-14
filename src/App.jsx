import React from 'react';
import Map from './components/Map';
import {  Col, Row } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Table from './components/Table';
function App() {
  return (
    <Row align={'middle'}>
      <Col span={10} style={{ textAlign: 'center' }}>
        <Table />
      </Col>
      
      <Col span={10} >
        <Map />
      </Col>
    </Row>
  );
}

export default App;
