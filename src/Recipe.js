import React ,{Component} from "react";
import {connect} from "react-redux";
import * as actionTypes from "./components/actions/actionTypes";

class Recipe extends Component{
    componentWillUnmount(){
        if (this.refs.shipping.checked){
            this.props.subShipping();
        }
    }

    handleChecked=(params)=>{
        if (params.target.checked){
            this.props.addShipping();
        }
        else {
            this.props.subShipping();
        }
    }

    render() {
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" ref="shipping" onChange={this.handleChecked}/>
                            <span>Shipping(+6$)</span>
                        </label>
                    </li>
                    <li className="collection-item"><b>Total: {this.props.total}$</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn">CHECKOUT</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
  return{
      addedItems:state.addedItems,
      total:state.total
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
      addShipping:()=>{dispatch({type:actionTypes.ADD_SHIPPING})},
      subShipping:()=>{dispatch({type:actionTypes.SUN_SHIPING})}
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Recipe);