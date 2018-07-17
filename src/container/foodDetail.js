import React, {Component} from "react";
import {connect} from "react-redux";

export  class FoodDetail extends Component {

    render(){
        console.log("this.state.props",this.props.activefood)
        return(
            <h1>{this.props.activefood && this.props.activefood.id}</h1>
        )
    }

}
const mapStateToProps = (state) =>{
    return {
        activefood: state.activefood
    };
}

export default connect(mapStateToProps)(FoodDetail);
