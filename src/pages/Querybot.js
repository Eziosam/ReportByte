import {
  Row,
  Col,
  Card,
  Input,
} from "antd";
import firebase from "../components/connection/firebase";
import React, { useState, useEffect } from "react";

const { Search } = Input;
const onSearch = value => console.log(value);

function QueryBot() {


  const information = [
    {
      title: "Oliver Liam",
      description: "Viking Burrito",
      address: "oliver@burrito.com",
      vat: "FRB1235476",
    },

  ];

  const [ans, setAns] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("querybotanswer");
  
  function getans() {
    setLoading(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setAns(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getans();
  }, []);

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col xs={24} md={16}>
          <Row gutter={[24, 0]}>
    
            <Col xs={24} className="mb-24">
              <Card
                className="header-solid h-full ant-card-p-0"
                title={
                  <>
                    <Row
                      gutter={[24, 0]}
                      className="ant-row-flex ant-row-flex-middle"
                    >
                      <Col xs={24} md={12}>
                        <h6 className="font-semibold m-0">Ask Your Questions Here</h6>
                      </Col>
                     
                    </Row>
                  </>
                }
              >
                <Row gutter={[24, 0]}>
                  <Col span={24} md={24}>
                    <Card className="payment-method-card">
                    <Search
                      placeholder="input your query"
                      allowClear
                      enterButton="Ask"
                      size="medium"
                      onSearch={onSearch}
                    />
                    </Card>
                  </Col>
        
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={24} md={16} className="mb-24">
          <Card
            className="header-solid h-full"
            bordered={false}
            title={[<h6 className="font-semibold m-0">Answer To Your Query</h6>]}
            bodyStyle={{ paddingTop: "0" }}
          >
            { ans &&
            <Row gutter={[24, 24]}>
              {information.map((i, index) => (
                <Col span={24} key={index}>
                  <Card className="card-billing-info" bordered="false">
                    <div className="col-info">
                  
                      {loading ? <h1>Loading...</h1> : null}
                      {ans.map((answer) => (
                              <div className="school" key={answer.id}>
                                <h2>{answer.ans}</h2>
                              </div>
                      ))}
                    </div>
                  
                  </Card>
                </Col>
              ))}
            </Row>
            }
          </Card>
        </Col>
       
      </Row>
     
    </>
  );
}

export default QueryBot;
