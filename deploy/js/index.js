import apiFunc from "./api.js";
import { travelProjectBtn, travelProjectBtnClose, travelProjectbackClose, } from "../js/modal.js";
// import { CareerEntry } from "../js/interface.js";
// console.log(apiFunc);
//* 경력
Promise.all([
    apiFunc("career"),
    apiFunc("careerInfo"),
]).then(([careerApiData, careerInfoApiData]) => {
    console.log("경력", careerApiData);
    console.log("경력기술서", careerInfoApiData);
    const careerData = document.getElementById("career");
    careerData.innerHTML = `
        <div>
          <h2>경력</h2>
          <div class="careerWrap">
            <div class="commonTextWrap">
              <h4>
                ${careerApiData.experience[0].company}
              </h4>
              <p> ${careerApiData.experience[0].department} ${careerApiData.experience[0].position} ${careerApiData.experience[0].role}  </p>
              <p>${careerApiData.experience[0].start_date} ~ ${careerApiData.experience[0].start_date} ${careerApiData.experience[0].duration}</p>
            </div>
            <div class="careerInfo">
             ${careerInfoApiData.map((item) => `<p>${item.name}</p>`).join("")}
            </div>
          </div>
        </div>
      `;
});
// apiFunc<carrerInfo>("careerInfoApiData").then((data) => {
//   console.log("경력기술서", data);
// });
// apiFunc<certificateData>("certificate").then((data) => {
//   console.log("자격증", data);
// });
// apiFunc<introduce>("introduce").then((data) => {
//   console.log("자소서", data);
// });
apiFunc("portfolio").then((data) => {
    console.log("포트폴리오", data);
});
apiFunc("training").then((trainingApiData) => {
    const trainingData = document.getElementById("training");
    console.log("경력이수", trainingApiData);
    trainingData.innerHTML = `
        <div>
          <h2>교육 이수</h2>
          
          ${trainingApiData.education
        .map((item) => `
            <div class="commonTextWrap"> 
            <h4>
              ${item.institution}
            </h4>
            <p>${item.course}</p>
            <p>${item.start_date} ~ ${item.end_date}</p>
            </div>
            `)
        .join("")}
        </div>`;
});
// const mainElement = document.querySelector("main"); // main 태그
// const sections = document.querySelectorAll("section[id]"); // id가 있는 모든 section
// const navLinks = document.querySelectorAll("nav ul li a"); // 모든 a 태그
// if (mainElement) {
//   // main 태그에서 클릭 이벤트
//   mainElement.addEventListener("click", () => {
//     let currentSection = "";
//     // 현재 스크롤 위치와 각 섹션의 위치를 비교
//     sections.forEach((section) => {
//       const sectionElement = section as HTMLElement;
//       const sectionTop = sectionElement.offsetTop - mainElement.offsetTop; // main 위치
//       const sectionHeight = sectionElement.offsetHeight;
//       if (mainElement.scrollTop >= sectionTop - sectionHeight / 3) {
//         currentSection = sectionElement.getAttribute("id") || "";
//       }
//     });
//     // 현재 섹션에 해당하는 a 태그에 스타일 적용
//     navLinks.forEach((link) => {
//       link.classList.remove("active");
//       if (link.getAttribute("href") === `#${currentSection}`) {
//         link.classList.add("active");
//       }
//     });
//   });
// }
// 포트폴리오 모달창 함수 선언
window.travelProjectBtn = travelProjectBtn;
window.travelProjectBtnClose = travelProjectBtnClose;
window.travelProjectbackClose = travelProjectbackClose;
