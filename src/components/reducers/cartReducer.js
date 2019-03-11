import React from  "react"

import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg"
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import * as actionTypes from "../actions/actionTypes"

const initialState={
    items:[
        {id:1,title:'Winter body',desc:'lorem dsds sdvsf sfs fsdfs sfsdfkj iuwyiwe ,ext.', price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
        ],
    addedItems:[],
    total:0
};
const addToCart=(state,action)=>{
  const addedItem = state.items.find(item=>item.id===action.id);
  const existItem = state.addedItems.find(item=>item.id===addedItem.id);
  if (existItem){
      existItem.count++;
      return{
          ...state,
          total:state.total+addedItem.price
      }
  }
  else{
      const newItem = Object.assign({},addedItem);
      newItem.count=1;
      const newTotal= state.total+newItem.price;
      return {
          ...state,
          addedItems:[...state.addedItems,newItem],
          total:newTotal
      }
    }
};
const removeFromCart=(state,action)=>{
    const updateAddedItem= [...state.addedItems];
    const index= updateAddedItem.findIndex(item=>item.id===action.id);
    const newTotal = state.total - (updateAddedItem[index].count * updateAddedItem[index].price);
    updateAddedItem.splice(index,1);
    return{
        ...state,
        addedItems:updateAddedItem,
        total:newTotal
    }
};

const addCount=(state,action)=>{
    const itemForUpdateCount = state.addedItems.find(item=>item.id==action.id);
    itemForUpdateCount.count++;
    const newTotal= state.total+ itemForUpdateCount.price;
    return{
        ...state,
        total:newTotal
    }
};

const subCount=(state,action)=>{
    const itemForUpdateCount = state.addedItems.find(item=>item.id==action.id);
    if (itemForUpdateCount.count===1){
        return state;
    }
    itemForUpdateCount.count--;
    const newTotal= state.total- itemForUpdateCount.price;
    return{
        ...state,
        total:newTotal
    }
};
const addShipping=(state,action)=>{
  return{
      ...state,
      total:state.total+6
  }
};
const subShipping=(state,action)=>{
    return{
        ...state,
        total:state.total-6
    }
};
const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return addToCart(state,action);
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state,action);
        case actionTypes.ADD_COUNT:
            return addCount(state,action);
        case actionTypes.SUB_COUNT:
            return subCount(state,action);
        case actionTypes.ADD_SHIPPING:
            return addShipping(state,action);
        case actionTypes.SUN_SHIPING:
            return subShipping(state,action);
        default:
            return state;
    }
};
export default cartReducer;