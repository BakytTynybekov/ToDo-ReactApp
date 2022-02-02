import { Component } from "react";

import "./tasksList.scss";


function TasksList({ data, onDelete }) {
  return (
    <div className="tasksList">
      {data.map((item, index) => (
        <div className="tasksList__item" id={index + 1} key={index}>
          <label>
            <input type="checkbox" className="checkbox" />
            {item.task}
          </label>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/OOjs_UI_icon_clear-destructive.svg/1200px-OOjs_UI_icon_clear-destructive.svg.png"
            alt=""
            onClick={() => onDelete(item.id)}
          />
        </div>
      ))}
    </div>
  )
export default TasksList;

// class TasksList extends Component {
//   render() {
//     const { data, onDelete } = this.props;
//     return (
//       <div className="tasksList">
//         {data.map((item) => (
//           <div className="tasksList__item" id={item.id}>
//             <label>
//               <input type="checkbox" className="checkbox" />
//               {item.task}
//             </label>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/OOjs_UI_icon_clear-destructive.svg/1200px-OOjs_UI_icon_clear-destructive.svg.png"
//               alt=""
//               onClick={() => onDelete(item.id)}
//             />
//           </div>
//         ))}
//       </div>
//     );
//   }

// }

