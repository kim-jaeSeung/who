import apiFunc from "./api/apits.js";
// console.log(apiFunc);
//* 경력
apiFunc("career").then((data) => {
    console.log("경력", data);
});
apiFunc("careerInfo").then((data) => {
    console.log("경력기술서", data);
});
apiFunc("certificate").then((data) => {
    console.log("자격증", data);
});
apiFunc("introduce").then((data) => {
    console.log("자소서", data);
});
apiFunc("portfolio").then((data) => {
    console.log("포트폴리오", data);
});
apiFunc("training").then((data) => {
    console.log("경력이수", data);
});
