import "../styles/catalog.css";
import axios from "axios";
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import inc_arrow from "../images/inc_arrow.png";
import dec_arrow from "../images/dec_arrow.png";

  
  var itemList = [];
  
  export const CatalogEntry = (props) => {
      const addBtn = () => {
          itemList.push(
              <CartItem 
                  name={props.name}
                  price={props.price}
              />
          );
      }
      
      return (
          <div class="catalogEntry">
              <h2>{props.name}</h2>
              <hr />
              <h3>{props.price}</h3>
              <p>{props.description}</p>
              <button class="catalogBtn" onMouseDown={addBtn}>Add to Cart</button>
          </div>
      )
  }
  
  export const Catalog = () => {
      const [styleCart, setStyleCart] = useState("cartHide");
      const [styleShadow, setStyleShadow] = useState("shadowHide");
      const [styleToCartBtn, setStyleToCartBtn] = useState("toCartBtnShow");
      const [items, setItems] = useState(itemList);
      
      const mouseDownToCartBtn = () => {
          setStyleCart("cartShow");
          setStyleShadow("shadowShow");
          setStyleToCartBtn("toCartBtnHide");
          setItems(itemList);
      }
      
      const mouseDownShadow = () => {
          setStyleCart("cartHide");
          setStyleShadow("shadowHide");
          setStyleToCartBtn("toCartBtnShow");
      }
      
      const mouseDownPurchaseBtn = () => {
          itemList = [];
          setItems([]);
      }
      
      var tempEntryNum = 22;
      var list = [];
      
      for (var i = 0; i < tempEntryNum; i++) {
          list.push(
              <CatalogEntry
                  name="tempName"
                  price="tempPrice"
                  description="tempDescription"
               />
          );
      }
      
      return (
          <div class="catalog">
              <div class={styleShadow} onMouseDown={mouseDownShadow}></div>
              <div class={styleCart}>
                  <h1>Your Cart</h1>
                  <hr />
                  <CartList list={items} />
                  <hr />
                  <button class="purchaseBtn" onMouseDown={mouseDownPurchaseBtn}>Purchase Items</button>
              </div>
              <div class={styleToCartBtn} onMouseDown={mouseDownToCartBtn}>
                  Cart
              </div>
              {list}
          </div>
      )
  }
  
  const CartItem = (props) => {    
      return (
          <div class="CartItem">
              <p>{props.name + " | Price: " + props.price}</p>
          </div>
      )
  }
  
  const CartList = (props) => {
      return (
          <div class="cartList">
              {props.list}
          </div>
      )
  }
  

  /*state = { details: [], }
  componentDidMount()
  {
    let data;
    axios.get("http://localhost:8000").then(res =>
    {
      data = res.data;
      this.setState(
        {
          details: data
        }
      );
    }).catch(err => {})
  }
  return (
    <div>
        <header>Catalog</header>
        {this.state.details.map((output, id) => (
            <div key={id}>
                <div>
                    <h2>Name: {output.name}</h2>
                    <h2>Price: {output.price}</h2>
                    <h1>Description: {output.description}</h1>
                    <h1>Availability: {output.availability}</h1>
                </div>
            </div>
        ))}
    </div>
  );
  */
 