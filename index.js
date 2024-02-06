const $template = document.getElementById("template").content;
const $fragment = document.createDocumentFragment();
const $array = document.getElementById("array");
const url = "https://reqres.in/api/users?per_page=12";
document.addEventListener("DOMContentLoaded", async (e) => {
  const res = await fetch(url);
  const json = await res.json();
  console.log(json);
  representarObjetosArray(json.data);
});

const representarObjetosArray = (data) => {
  data.forEach((el) => {
    $template.querySelector(".template-img").src = el.avatar;
    let fullName = `${el.first_name} ${el.last_name}`;

    $template.querySelector(".template-name").textContent = fullName;
    $template.querySelector(".template-description").textContent = el.email;
    $template.querySelector(".template-buttonFollow").textContent =
      "Add friend";
    const $clone = $template.cloneNode(true);
    $fragment.append($clone);
  });

  $array.append($fragment);
};
