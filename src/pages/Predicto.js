import {
  Row,
  Col,
  Card,
  Button,
  List,
  Avatar
} from "antd";

import firebase from "../components/connection/firebase";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import HashLoader from "react-spinners/HashLoader";
import { Typography } from "antd";

function Predicto() {
  let color = "#40A9FF";
  const {Paragraph,Title} = Typography;
  const [image, setImageURL] = useState([]);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(false);


  const ref = firebase.firestore().collection("predicto");
  
  function getImageURL() {
    setLoading(true);
    setImageURL([]);
    setRes(false)
    
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setTimeout(() =>{
      setImageURL(items);
      setLoading(false);
      setRes(true);
      },2000);
    });
   
  }



   
  const calender = [
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
        fill="#111827"
        className="fill-muted"
      ></path>
    </svg>,
  ];

  const newest = [
    {
      headding: <h6>NEWEST</h6>,
      avatar: <PlusOutlined style={{ fontSize: 10 }} />,
      title: "Monte Carlo",
      description: "A Monte Carlo simulation is a model used to predict the probability of different outcomes when the intervention of random variables is present.",
      amount: "- $2,500",
      textclass: "text-fill",
      amountcolor: "text-success",
    },
    {
      avatar: <PlusOutlined style={{ fontSize: 10 }} />,
      title: "ANN",
      description: "Artificial neural network",
      amount: "+ $2,000",
      textclass: "text-fill",
      amountcolor: "text-success",
    },
  ];
  const yesterday = [
    {
      avatar: <PlusOutlined style={{ fontSize: 10 }} />,
      title: "Regional Analysis",
      description: "Data analysis report from existing data",
      amount: "+ $750",
      textclass: "text-fill",
      amountcolor: "text-success",
    },
    {
      avatar: <PlusOutlined style={{ fontSize: 10 }} />,
      title: "Profit Analysis",
      description: "Predictive data analysis",
      amount: "+ $1,050",
      textclass: "text-fill",
      amountcolor: "text-success",
    },

  ];
    
  return (
    <>
    
      <Row gutter={[24, 0]}>
        <Col span={24} md={16} className="mb-24">
          <Card
            className="header-solid h-full"
            bordered={false}
            title={[<h6 className="font-semibold m-0">Run Monte Carlo Simulation for future sales Forecasting!</h6>]}
            bodyStyle={{ paddingTop: "0" }}
          >
            <Row gutter={[24, 24]}>
             <Col span={24} >
                <Card>
                  <Button  onClick={()=> getImageURL()} type="primary"> Run Monte Carlo Simulation</Button>
                  {     
                        loading ? <Card  className="card-billing-info"> <HashLoader color={color} loading={loading} size={30} /> </Card> : 
                        image.map((image) => (
                               
                                <Card className="school" style={{ marginTop: 24 }} >
                                  <h2> {image.title}</h2>
                                  <img src={image.url} alt="not found"  />
                                  <Paragraph className="lastweek" style={{ marginTop: 5 }}> {image.description}</Paragraph>
                                </Card> 
                  ))
                 
                  }
              

                </Card>

                {
                    res ? <Card  className="card-billing-info" style={{ marginTop: 14 }}> 
                    <div className="chart-vistior"> 
                    
                    <Title level={3}>Simulation Report</Title>
                   
                    <Paragraph className="lastweek"> It's highly likely that you sales will be between $530,931 and $678,475.
                    There's a 25% chance that sales will be less than 579,824. For instance, there is a 25% chance that sales will be below a particular amount. 
                    If the chance of this happening is too high, then it needs to be looked at.</Paragraph>
                    </div>
                    </Card> :  null
                }
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={24} md={8} className="mb-24">
          <Card
            bordered={false}
            bodyStyle={{ paddingTop: 0 }}
            className="header-solid h-full  ant-list-yes"
            title={<h6 className="font-semibold m-0"> Algorithms Used</h6>}
            extra={
              <p className="card-header-date">
                {calender}
                <span>Deep Learning</span>
              </p>
            }
          >
            <List
              header={<h6>Predictive Data Analysis</h6>}
              className="transactions-list ant-newest"
              itemLayout="horizontal"
              dataSource={newest}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar size="small" className={item.textclass}>
                        {item.avatar}
                      </Avatar>
                    }
                    title={item.title}
                    description={item.description}
                  />
               
                </List.Item>
              )}
            />

            <List
              className="yestday transactions-list"
              header={<h6>Sales Forecasting</h6>}
              itemLayout="horizontal"
              dataSource={yesterday}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar size="small" className={item.textclass}>
                        {item.avatar}
                      </Avatar>
                    }
                    title={item.title}
                    description={item.description}
                  />
               
                </List.Item>
              )}
            />
          </Card>
        </Col>
      
      </Row>
    </>
  );
}

export default Predicto;
