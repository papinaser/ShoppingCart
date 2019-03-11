import * as actionTypes from "./actionTypes";
export const addToCart=(id)=>{
  return{
      type:actionTypes.ADD_TO_CART,
      id:id
  }
};

export const removeItem=(id)=>{
  return{
      type: actionTypes.REMOVE_FROM_CART,
      id:id
  }
};
export const addCount=(id)=>{
    return{
        type:actionTypes.ADD_COUNT,
        id:id
    }
};
export const subCount=(id)=>{
    return{
        type:actionTypes.SUB_COUNT,
        id:id
    }
};