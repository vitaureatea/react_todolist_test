import React, { Component,Fragment } from 'react';

class TodoItem extends Component{

    handleClick() {
        this.props.handleDelete(this.props.index)
        //调用 父组件传过来的方法，并传值
    }
    render() {
        return (
            <Fragment>
                <li onClick={this.handleClick.bind(this)}>
                    {this.props.item}
                </li>
            </Fragment>
        )
    }
}

export default TodoItem;
