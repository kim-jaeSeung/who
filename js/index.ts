import apiFunc from "./api/api.js";
// console.log(apiFunc);

//* 경력
apiFunc("career").then((data) => {
  console.log(data);
});
