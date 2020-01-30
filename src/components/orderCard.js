import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';
const data = [
    {
      title: 'Vada Pav',
    },
    {
      title: 'Mix Bhel',
    },
    {
      title: 'Pani Puri',
    },
    {
      title: 'Papdi Chat',
    },
  ];



class Order extends React.Component{
    render(){
        return(
         <div className="order-page">
         <h1>Durgesh snacks Centre</h1>
         <List
       itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={
          <Avatar className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhQ1ZAnTBQWMkH_WTKsx5fCYscjPig3l7pkrDOetjA1zbCDEyH" />}
          title={item.title}

        />
      </List.Item>

      

      
    )}
  />,
 </div>
        );
    }
}

export default Order;