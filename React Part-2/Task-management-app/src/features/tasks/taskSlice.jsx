import {createSlice} from "@reduxjs/toolkit";

// Tasks => [], loading

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        list: [],
        loading: false,
    },
    reducers: {
        setTasks: (state, action) => {
            state.list = action.payload;
        },
        addTask: (state, action) => {
            // addTask({taskName: "Something", taskId: 2})
            // action.payload = {taskName: "Something", taskId: 2}
            state.list.push(action.payload)
        },
        updateTask: (state, action) => {
            const index = state.list.findIndex(task => task.id == action.payload.id)
            if(index !== -1){
                return (state.list[index] = action.payload)
            }
        },
        removeTask: (state, action) => {
            state.list = state.list.filter(task => task.id != action.payload)
        }
    }
})


export const {setTasks, addTask, updateTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;