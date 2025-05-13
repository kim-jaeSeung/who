async function apiFunc(url, method = "GET", data = null) {
  method = method.toUpperCase();
  const apiFunc = await fetch(`./json/${url}.json`);
  const apiFuncJson = await apiFunc.json();
  console.log("데이터 확인", apiFuncJson);
  if (apiFuncJson) {
    return apiFuncJson;
  } else {
    console.log("데이터를 받아오는데 실패했습니다.");
  }
}

export default apiFunc;
//
