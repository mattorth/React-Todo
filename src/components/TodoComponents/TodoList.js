// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo"

const TodoList = props => {
    return (
        <div>
            {props.todo.map(listItem => (
                <Todo
                    key={listItem.id}
                    listItem={listItem}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
        </div>
    )
}

export default TodoList;