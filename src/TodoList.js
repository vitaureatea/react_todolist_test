import React, { Component,Fragment } from 'react';
import TodoItem from "./TodoItem";


//继承了 Component 的就叫组件
class TodoList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            list: [...this.state.list,event.target.form[0].value],
            //这个。。。 代表目前state的list里已有的值
            inputValue: ''
        })
    }

    handleChang(event) {
        this.setState({
            inputValue: event.target.form[0].value
        })
    }

    handleDelete(event,index) {
        const list = [...this.state.list];
        list.splice(index,1); //删除列表里下标为index的值的元素 1个
        this.setState({
            list: list
        })
    }

    render() {

        return (
            <Fragment>
                <div>
                    <h1>todo list</h1>
                    <form>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleChang.bind(this)}
                    />
                    <button
                        onClick={this.handleClick.bind(this)} //不绑定一下，this就回为未定义
                    >提交</button>
                    </form>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {  //map 数组循环，一个元素，一个下标
                            return (
                                <Fragment>
                                {/*<li key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li> */}
                                {/*循环 还要不重复的key值*/}
                                <TodoItem item={item} index={index} handleDelete={this.handleDelete.bind(this)}/>
                                </Fragment>
                                // 把属性值 和 方法传递给子组件 就是 TodoItem,并且把方法的强制绑定到父组件，以免调用时，this被当成子组件的this
                            )
                            // bind 会把 index 传递给函数
                        })
                    }
                </ul>
            </Fragment>

        )
    }
}

//导出组件，外部才能引用
export default TodoList
