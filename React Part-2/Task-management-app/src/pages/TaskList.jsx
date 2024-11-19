import { useSelector } from "react-redux";
import TaskCard from "../components/Taks/TaskCard";


const TaskList = () => {
    const tasks = useSelector((state)=> state.tasks.list)


    return (
        <div>
          {
            tasks.length . 0?
            tasks.map((taks) => <TaskCard key={tasks.id} task={task}</TaskCard>)
          }  
        </div>
    );
};

export default TaskList;