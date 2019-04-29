const fetch = require("node-fetch");
const TASKS_URL = 'http://localhost:3000/api/tasks';
const TAGS_URL = 'http://localhost:3000/api/tags';


const addTask = (task) => {
    fetch(TASKS_URL, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}

const editTask = (task) => {
    fetch(TASKS_URL, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}

const addTag = (task) => {
    fetch(TAGS_URL, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}

const editTag = (task) => {
    fetch(TAGS_URL, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}

// addTag({
//     title: 'tag_title',
//     color: 'blue',
//     tasks: []
// })