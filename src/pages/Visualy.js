import {
    Row,
    Col,
    Card,
    Button,
    List,
    Avatar
  } from "antd";

  import firebase from "../components/connection/firebase";
  import React, { useState} from "react";
  import { PlusOutlined } from "@ant-design/icons";
  import HashLoader from "react-spinners/HashLoader";

  function Visualy() {
    let color = "#40A9FF";
    const [image, setImageURL] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const ref = firebase.firestore().collection("visualydata");
    
    function getImageURL() {
      setLoading(true);
      setImageURL([]);
      ref.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setImageURL(items);
        setLoading(false);
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
        title: "Apriori",
        description: "For market basket analysis.",
        amount: "- $2,500",
        textclass: "text-fill",
        amountcolor: "text-success",
      },
      {
        avatar: <PlusOutlined style={{ fontSize: 10 }} />,
        title: "K-Means",
        description: "For clustering purposes.",
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
              title={[<h6 className="font-semibold m-0">Visualize Your Data In A More Meaningful Way!</h6>]}
              bodyStyle={{ paddingTop: "0" }}
            >
              <Row gutter={[24, 24]}>
               <Col span={24} >
                  <Card>
                    <Button  onClick={()=> getImageURL()} type="primary"> Show Data Analysis Results</Button>
                    {     
                          loading ?  <Card  className="card-billing-info"> <HashLoader color={color} loading={loading} size={30} /> </Card>:
                          
                          image.map((image) => (
                                 
                                  <div className="school" style={{ marginTop: 24 }} >
                                    {/* <Button onClick={()=> setShow(!show)}> {image.title} </Button> */}
                                    <h2> {image.title}</h2>
                                    <img src={image.url} alt="not found"  />
                                  </div> 
                    ))  }
  
                  </Card>
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
                  <span>Machine Learning</span>
                </p>
              }
            >
              <List
                header={<h6>Data Mining</h6>}
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
                header={<h6>Sales Analysis</h6>}
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
  
  export default Visualy;
  