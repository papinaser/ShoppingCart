import React, {Component} from "react";
import {connect} from "react-redux"
import {addToCart} from "./components/actions/cartActions";
import "./Home.css";
class Home extends Component{
    handelClick=(id)=>{
        this.props.addToCart(id);
    };
    render() {
        const itemList= this.props.items.map((item)=> {
            return (
                <div className="col s12 m4">
                    <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" onClick={()=>this.handelClick(item.id)} className="btn-floating halfway-fab waves-effect waves-light red">
                          <i className="material-icons">add</i>
                      </span>
                        </div>
                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <div className="container">
                <h3 className="center">Our Items</h3>
                <div className="row">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
  return{
      items:state.items,
  }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Home)