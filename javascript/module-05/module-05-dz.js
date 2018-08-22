const users = [
    {id: '001', name: 'Poly'},
    {id: '002', name: 'Max'},
    {id: '003', name: 'Chelsey'},

];

const callback = (acc , user) => {
    return{
        ...acc,
        [user.id]:user.name
    };
};
const sideBarInfo = users.reduce(callback,{});
console.log(sideBarInfo)