// Insert the backend URL given by Vercel in this variable

fetch("https://whatyearisit-backend-asdrey06.vercel.app/year")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.year;
  });
