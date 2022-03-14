

var keyf = "30a1764a3a859610dfc23fae3f3ee4d9";

const convert_to_json = function (response) {
  console.log(response)
  return response.json();

}


const handle_data = function (res) {
  console.log(res)
  const user_arr = res;

  console.log(user_arr)

  const container = document.getElementById('list_container');
  container.innerText = ""
  const new_li_elem1 = document.createElement('h2');
  const new_li_elem2 = document.createElement('h1');
  const new_li_elem3 = document.createElement('span');
  const new_li_elem4 = document.createElement('span');
  const new_li_elem5 = document.createElement('h1');
  const new_li_elem6 = document.createElement('h1');
  const new_li_elem7 = document.createElement('h1');


  new_li_elem1.innerText = `Temp: ${parseInt(user_arr.main.temp) - 273} ℃`;
  new_li_elem2.innerText = `Country: ${user_arr.sys.country} `;
  new_li_elem3.innerText = `Max⬆ ${user_arr.main.temp_max)-273} ℃`;
  new_li_elem4.innerText = `Min ⬇ ${user_arr.main.temp_min)-273} ℃`;
  new_li_elem5.innerText = `${user_arr.weather[0].main}`;
  new_li_elem6.innerText = `City: ${user_arr.name}`;
  new_li_elem7.innerText = `Wind Speed:${user_arr.wind.speed}`
  container.appendChild(new_li_elem6);
  container.appendChild(new_li_elem2);
  container.appendChild(new_li_elem1);
  container.appendChild(new_li_elem3);
  container.appendChild(new_li_elem4);
  container.appendChild(new_li_elem5);
  container.appendChild(new_li_elem7);



}

const ip = document.getElementById("search_input");

const btn_search = function () {
  const parent_elem = document.getElementById("container");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ip.value}&appid=${keyf}`).then(convert_to_json).then(handle_data)


}

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=20.6833&lon=-76.5667&appid=${keyf}`).then(convert_to_json).then(handle_data)


var btn = document.getElementById("search_input_btn")
btn.addEventListener("click", btn_search);

