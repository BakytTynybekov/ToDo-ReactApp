import { Component } from "react";

import "./tasksList.scss";

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { task: "Сходить в магазин", id: 1 },
        { task: "Read a book", id: 2 },
      ],
    };
    this.maxId = 3;
  }

  render() {
    return (
      <div className="tasksList">
        {this.state.data.map((item) => (
          <label>
            <input type="checkbox" id={item.id} />
            {item.task}
          </label>
        ))}
      </div>
    );
  }
}

export default TasksList;
