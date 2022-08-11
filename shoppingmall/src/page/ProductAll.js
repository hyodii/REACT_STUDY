import React, {useEffect, useState} from 'react'
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";

const ProductAll = () => {
  const [prodectList, setProdectList] = useState([]);
  const getProducts = async () => {
    let url = 'http://localhost:5001/products';
    let response = await fetch(url)
    let data = await response.json();
    // console.log(data);
    setProdectList(data)
  }
  useEffect(()=>{
    getProducts()
  }, [])
  return 	<div>
    <Container>   {/*Container 컴포넌트는 가운데로 자동 정렬해줌*/}
      <Row>
        {prodectList.map((menu)=>(
          <Col lg={3}><ProductCard item={menu}/></Col>
        ))}
      </Row>
    </Container>
  </div>
};

export default ProductAll