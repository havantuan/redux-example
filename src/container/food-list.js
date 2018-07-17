import React, {Component} from "react";
import {connect} from "react-redux";
import {selectFood} from "../actions";
export  class FoodList extends Component {

    render(){
        const listItems = this.props.foods.map((number) =>
            <li key={number.id} onClick={()=> {this.props.selectFood(number)}}>{number.name}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

}
const mapStateToProps = (state) =>{
    return {
        foods: state.foods
    };
}

const mapDispatchToProps = dispatch => ({
    selectFood: id => dispatch(selectFood(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
