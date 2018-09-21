'use strict';

// const input = document.querySelector("input");
// const submitBtn = document.querySelector(".js-submit");
// const result = document.querySelector(".js-result");
// const apiUrl = "https://restcountries.eu/rest/v2/name/";

// submitBtn.addEventListener("click", fetchCountryData);

// function fetchCountryData(evt) {
//   evt.preventDefault();
//   const inputVal = input.value;
//   const newUrl = apiUrl+inputVal;
//   fetch(newUrl)
//     .then(response => {
//         if(response.ok) return response.json();
//         throw new Error('Error'+ response.statusText)
//     })
//     .then(data => {
//         const noParse = JSON.stringify(data);
//         const parse = JSON.parse(noParse);
//         const resObj = parse[0];
        
//         result.textContent = `
//             Country name: ${resObj.name}
//             Capital: ${resObj.capital}
//             Main currency: ${resObj.currencies[0].name}
//             Flag: ${resObj.flag}`;
//     })
//     .catch(err => console.log(err));
// }

// const input = document.querySelector("input");
// const submitBtn = document.querySelector("#js-submit");
// const result = document.querySelector(".result");
// const apiUrl = "https://api.github.com/users/";

// submitBtn.addEventListener("click", fetchUserData);

// function fetchUserData(evt) {
//     evt.preventDefault();
//   const inputVal = input.value;
//   const newUrl = apiUrl+inputVal;
//   fetch(newUrl)
//     .then(response => {
//         if(response.ok) return response.json();
//         throw new Error('Error'+ response.statusText)
//     })
//     .then(data => {
//         const noParse = JSON.stringify(data);
//         const parse = JSON.parse(noParse);
//         result.textContent = 
//         `   Avatar: ${parse.avatar_url}
//             Username: ${parse.login}
//             Bio: ${parse.bio}
//             Public repos: ${parse.public_repos}`;
//     })
//     .catch(err => console.log(err));
// }


// const getBtn = document.querySelector(".js-get");
// const result = document.querySelector(".result");
// const apiUrl = "https://test-users-api.herokuapp.com/users/"
// getBtn.addEventListener("click", fetchUsers);

// function fetchUsers(evt) {
//     evt.preventDefault();
//     fetch(apiUrl)
//         .then(response => {
//             if(response.ok) return response.json();
//             throw new Error('Error'+ response.statusText)
//         })
//         .then(data => {
//             data.data.reduce((acc, item) => {
//                 acc = ` ${item.id}|${item.name}|${item.age} `;
//                 result.textContent = result.textContent+ acc;
//             }, '')
//         })
//         .catch(err => console.log(err));
// }

const input = document.querySelector("input");
const postBtn = document.querySelector(".js-post");
const result = document.querySelector(".result");
const apiUrl = "https://test-users-api.herokuapp.com/users/";

postBtn.addEventListener("click", getUserByName);

function getUserByName(evt) {
    evt.preventDefault();
    fetch(apiUrl)
        .then(response => {
            if(response.ok) return response.json();
            throw new Error('Error' + response.statusText);
        })
        .then(data => {
            const val = input.value;
            const find = data.data.find(item => item.name === val);
            if(!find){
                console.log('Такого пользователя в списке нет!');
            }else{
                console.log(`${find.id}|${find.name}|${find.age} `);
            }
        })
        .catch(err => console.log(err));
}

