import {
    Row,
    Col,
    Card,
   
    Button,
    Input,
  } from "antd";


  import React, { useState } from 'react';
  import { ReactExcel, readFile} from '@ramonak/react-excel';
  
  const Dashboard = () => {
    
    const [initialData, setInitialData] = useState(undefined);

    const handleUpload = (event) => {
        const file = event.target.files[0];

        readFile(file)
        .then((readedData) => setInitialData(readedData))
        .catch((error) => console.error(error));
    };
 


    return (
      <>
    
        <Row gutter={[24, 0]}>
          <Col span={24} md={16} className="mb-24">
   
            <Card
              className="header-solid h-full"
              bordered={false}
              title={[<h6 className="font-semibold m-0">Upload Your Data </h6>]}
              bodyStyle={{ paddingTop: "0" }}
            >
              <Row gutter={[24, 24]}>
                <Col span={24}>
             
                    <Input type="file" onChange={handleUpload} />
                    <Card
                        className="header-solid h-full"
                        bordered={false}
                        title={[<h6 className="font-semibold m-0">Your Data </h6>]}
                        bodyStyle={{ paddingTop: "0" }}
                    >
                    <ReactExcel
                        initialData={initialData}
                        activeSheetClassName='active-sheet'
                        reactExcelClassName='react-excel'
                    />

                    {
                        initialData && <Button type="primary" block >
                          Update
                        </Button>
                    }
                    </Card>
                     
                </Col>
     
              </Row>
            </Card>
          </Col>
         
        </Row>
      </>
    );
  }
  
  export default Dashboard;
  