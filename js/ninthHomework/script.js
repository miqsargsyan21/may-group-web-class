fetch('https://jsonplaceholder.typicode.com/users')
.then((r) => r.json())
.then((data) =>{
    for (let i = 0; i < data.length; i++) {
        document.querySelector("tbody").innerHTML += `
            <tr>
                <th scope="row">${data[i].id}</th>
                <td>${data[i].name}</td>
                <td>${data[i].username}</td>
                <td>${data[i].email}</td>
                <td>${data[i].website}</td>
            </tr>
        `;
    }
})