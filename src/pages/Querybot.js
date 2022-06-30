import {
  Row,
  Col,
  Card,
  Input,
} from "antd";
import firebase from "../components/connection/firebase";
import React, { useState} from "react";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

const { Search } = Input;


const override = css`
  dislay:flex;
  justify-content: center;
  align-items:center;
`;

function QueryBot() {

  let color = "#40A9FF";
  const [ans, setAns] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("querybotanswer");
  
  function getans() {
    setLoading(true);
    setAns([]);
    setTimeout(() => {
      ref.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setAns(items);
        setLoading(false);
      });
    }, 2000);
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //   getans();
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

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
                      onSearch={getans}
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
          
                <Col span={24} >
                  <Card className="card-billing-info" bordered="false">
                    <div className="col-info">
                  
                      { loading ?  <Row className="ant-row-flex ant-row-flex-middle"> <HashLoader color={color} loading={loading} css={override} size={30} /> </Row>: null}

                      {ans.map((answer) => (
                              <div className="school" key={answer.id}>
                                <h2>{answer.ans}</h2>
                              </div>
                      ))}
                    </div>
                  
                  </Card>
                </Col>
            
            </Row>
            }
          </Card>
        </Col>
       
      </Row>
     
    </>
  );
}

export default QueryBot;
