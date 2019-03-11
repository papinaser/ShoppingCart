import React ,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {removeItem,addCount,subCount} from "./components/actions/cartActions";

class Cart extends Component{
    handelRemoveItem=(id)=>{
        this.props.removeItem(id);
    };
    handelAddCount(id){
        this.props.addCount(id);
    }
    handleSubCount(id){
        this.props.subCount(id);
    }

    render() {
        const addedItems = this.props.items.length?
            (
                this.props.items.map(item=>{
                  return(
                      <li className="collection-item avatar" key={item.id}>
                          <div className="item-img">
                              <img src={item.img} alt={item.title} className=""/>
                          </div>
                          <div className="item-desc">
                              <span className="title">{item.title}</span>
                              <p>{item.desc}</p>
                              <p><b>Price: {item.price}$</b></p>
                              <p>
                                  <b>Count: {item.count}</b>
                              </p>
                              <div className="add-remove">
                                  <Link to="/cart" onClick={()=>this.handelAddCount(item.id)}><i className="material-icons">arrow_drop_up</i></Link>
                                  <Link to="/cart" onClick={()=>this.handleSubCount(item.id)}><i className="material-icons">arrow_drop_down</i></Link>
                              </div>
                              <button className="waves-effect waves-light btn pink remove" onClick={()=>this.handelRemoveItem(item.id)}>Remove</button>
                          </div>
                      </li>
                  )
                })
            ):(
                <p>Nothing.</p>
            );
        return(
            <div className="container">
                <div className="cart">
                    <h5>You Have Ordered: </h5>
                    <p>Total is : {this.props.total}$</p>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        items:state.addedItems,
        total:state.total
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        removeItem:(id)=>{dispatch(removeItem(id))},
        addCount:(id)=>{dispatch(addCount(id))},
        subCount:(id)=>{dispatch(subCount(id))}
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Cart);