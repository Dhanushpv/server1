
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


// function fetchData (){

//     return new Promise((resolve, reject) => {
//         fetch('http://localhost:3001/json')
//             .then((response) => {
//                 if (!response.ok) {
//                     // If the response status is not in the range 200-299
//                     reject('Failed to fetch data: ' + response);
//                 } else {
//                     resolve(response.json()); // Resolve with parsed JSON data
//                 }
//             })
//             .catch((error) => {
//                 reject('Network error: ' + error);
//             });
//     })
    
// }
// fetchData()


//     .then((datas) => {
//         console.log("Datas", datas);
        
       
        


//     })
//     .catch((error) => {
//         console.log("something went wrong: ", error);
//     });

   
async function Datafetch() {
    try {
        let datas = await fetch('http://localhost:3001/json');
        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }



        let parsed_datas= await datas.json();
        console.log("datas :",parsed_datas)

        // let  datacontainer= document.getElementById('datacontainer');
        // console.log("datacontainer :",datacontainer)

    }catch(error){
        console.log("error",error)

    }
}
Datafetch()







