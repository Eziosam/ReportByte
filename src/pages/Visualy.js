import {
    Row,
    Col,
    Card,
    Button,
 
  } from "antd";


  import firebase from "../components/connection/firebase";
  import React, { useState, useEffect } from "react";

  

  
  function Visualy() {
    const [image, setImageURL] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show,setShow] = React.useState(false);
  
    const ref = firebase.firestore().collection("visualydata");
    
    function getImageURL() {
      setLoading(true);
      ref.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setImageURL(items);
        setLoading(false);
      });
    }
  
    useEffect(() => {
      getImageURL();
    }, []);
      
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
                    <Button  onClick={()=> setShow(!show)} type="primary"> Show Most Demanding Product</Button>
                    {     
                          loading ? <h1>Loading...</h1> : null}
                          {show && image.map((image) => (
                             
                                  
                                  <div className="school" >
                                    <h2> {image.title}</h2>
                                    <img src={image.url} alt="not found"  />
                                  </div> 
                    ))  }
  
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        
        </Row>
      </>
    );
  }
  
  export default Visualy;
  