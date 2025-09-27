// Load news dynamically from news.json
fetch("news.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("news-container");
    data.forEach(news => {
      const card = document.createElement("div");
      card.classList.add("news-card");
      card.innerHTML = `
        <h3>${news.title}</h3>
        <small>${news.date}</small>
        <p>${news.content}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading news:", error));
