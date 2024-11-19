import apiClient from "./apiClient";


const fetchTasks = async () => {
    const response = await apiClient.get('/todos');
    return response.data
}


const createTask = async (task) => {
    const response = await apiClient.post('/todos');
    return response.data
}

