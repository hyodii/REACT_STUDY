import React, {useEffect, useState} from 'react'
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {
  const [prodectList, setProdectList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은?", searchQuery);
    // let url = `https://my-json-server.typicode.com/hyodii/REACT_STUDY/shoppingmall/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products?q=${searchQuery}`;
    let response = await fetch(url)
    let data = await response.json();
    // console.log(data);
    setProdectList(data)
  }
  useEffect(()=>{
    getProducts()
  }, [query])
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