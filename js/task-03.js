const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Варіант 1

// const list = document.querySelector(".gallery")
// const fragment = document.createDocumentFragment()

// images.forEach(({ url, alt }) => { 
// const itemEl = document.createElement("li");
// const imageEl = document.createElement("img");
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = "500";
//   imageEl.height = "500";

//   itemEl.appendChild(imageEl);
//   fragment.appendChild(itemEl)

// })

// list.appendChild(fragment);

// Варіант 2

const list = document.querySelector(".gallery");

const imageEl = images.map(({ url, alt }) => `<li> <img> src = "${url}" alt = "${alt}" </img> </li>`).join(" ");

console.log(imageEl);

list.insertAdjacentHTML("afterbegin", imageEl);








