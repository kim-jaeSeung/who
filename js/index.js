import apiFunc from "./api/api.js";
// console.log(apiFunc);
apiFunc("career").then((data) => {
    console.log(data);
});
