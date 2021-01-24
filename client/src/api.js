import axios from 'axios';
const base = "http://localhost:5000";

export const login = ({ username, password }) => (
    axios.post(`${base}/login`, { username, password }, {withCredentials:true})
    .then(({data:{content}})=> {
        return { content, error:false  }
    })
    .catch(({data})=> ({ content:data, error:true  }))
)

export const getTasks = () => (
    axios.get(`${base}/tasks`, {withCredentials:true})
    .then(({data:{content}})=> {
        return { content, error:false  }
    })
    .catch(({data})=> ({ content:data, error:true  }))
)

export const deleteTask = (id) => (
    axios.delete(`${base}/tasks?id=${id}`, {withCredentials:true})
    .then(({data:{content}})=> {
        return { content, error:false  }
    })
    .catch(({data})=> ({ content:data, error:true  }))
)

export const updateTask = (id) => (
    axios.patch(`${base}/tasks?id=${id}`, null, {withCredentials:true})
    .then(({data:{content}})=> {
        return { content, error:false  }
    })
    .catch(({data})=> ({ content:data, error:true  }))
)

export const addTask = ({name}) => (
    axios.post(`${base}/tasks`, {name}, {withCredentials:true})
    .then(({data:{content}})=> {
        return { content, error:false  }
    })
    .catch(({data})=> ({ content:data, error:true  }))
)