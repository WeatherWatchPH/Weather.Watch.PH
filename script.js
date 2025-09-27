// Toggle sidebar
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
hamburger.addEventListener("click", () => {
  sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
});

// Load news from JSON
fetch("news.json")
  .then(res => res.json())
  .then(data => {
    const sections = ["cyclone-news","outlook-news","advisory-news"];
    sections.forEach(section => document.getElementById(section).innerHTML = "");
    data.forEach(post => {
      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `
        ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ""}
        <h3>${post.title}</h3>
        <small>${post.date}</small>
        <p>${post.content}</p>
      `;
      if(post.section === "cyclone") document.getElementById("cyclone-news").appendChild(card);
      else if(post.section === "outlook") document.getElementById("outlook-news").appendChild(card);
      else if(post.section === "advisory") document.getElementById("advisory-news").appendChild(card);
    });
  })
  .catch(err => console.error("Failed to load news:", err));
