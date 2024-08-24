
// fetch('http://localhost:3000/json')


//     .then((user) => {
//         console.log("users", user);

//         user.json()
//             .then((parsed_datas) => {
//                 console.log("parsed_datas", parsed_datas);


                
//             })
//             .catch((error) => {
//                 console.log("something went wrong! ", error);
//             });
//     })
//     .catch((error) => {
//         console.log("Fetch error: ", error);
//     });


function fetchData (){

    return new Promise((resolve, reject) => {
        fetch('http://localhost:3001/json')
            .then((response) => {
                if (!response.ok) {
                    // If the response status is not in the range 200-299
                    reject('Failed to fetch data: ' + response);
                } else {
                    resolve(response.json()); // Resolve with parsed JSON data
                }
            })
            .catch((error) => {
                reject('Network error: ' + error);
            });
    })
    
}
fetchData()


    .then((datas) => {
        console.log("Datas", datas);
        let data = document.getElementById('datacontainer')
        parsed_datas.forEach((datass) => {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = `Name: ${datas.title}, Age: ${datas.price}`;
            data.appendChild(paragraph);
        });
        


    })
    .catch((error) => {
        console.log("something went wrong: ", error);
    });

   







