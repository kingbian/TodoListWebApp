// test data
const testUserData = [{
    id: "221ed967-d6db-485b-99b9-541f84397677", date: "2020-02-02T06:11:11.000+00:00", user: {
        id: "9430bf7a-6573-4680-96b1-8339d0c85e6f", username: "king", password: "king",
    }, content: "wake up",
}, {
    id: "221ed967-d6db-485b-99b9-541f84397677", date: "2020-02-02T06:11:11.000+00:00", user: {
        id: "9430bf7a-6573-4680-96b1-8339d0c85e6f", username: "king", password: "king",
    }, content: "wake up",
}, {
    id: "221ed967-d6db-485b-99b9-541f84397677", date: "2020-02-02T06:11:11.000+00:00", user: {
        id: "9430bf7a-6573-4680-96b1-8339d0c85e6f", username: "king", password: "king",
    }, content: "wake up",
}, // Add more todo objects as needed...
];

function getID(event) {

    event.preventDefault()
    // grab the input from the user regarding todo id ??
    const input = document.getElementById("userIdInput")

    const id = input.value;
    loadTodos(id)
    console.log(id)

}

async function loadTodos(userId) {

    fetch("/todo/get?userId=" + userId, {
        method: 'GET', header: {
            'Content-Type': 'Application/Json'
        },
    })
         .then(response  => {
             if (response.status === 200) {
                 createTodoTable(response.json())

             } else if (response.status === 404) {
                 // User does not have any todos
                 // TODO implement prompt to add todos
                 alert("You do not have any todos")

             } else {
                 alert("Something went wrong while loading your todos, try again later.")
             }
         }
        )
}


function createTodoTable(todos) {

    todos.then(response  =>{
    const table = document.getElementById("myTable")

    // Clear table contents
    table.innerHTML = ""

    for (let i = 0; i < response.length; i++) {

        const row = `<tr>
                                <td>${response[i].user.username}</td>
                                <td> ${response[i].content}</td>
                                <td> ${formatDate(response[i].date)}</td>
                                <td> <input  type="checkbox"></td>
                          </tr> `;
        table.innerHTML += row

    }
    });

}

