fetch("../view/header.html") 
    .then(res => res.text())
    .then(data => {
        document.getElementById("header-container").innerHTML = data;})
    .catch(err => console.error("Erro ao carregar o header:", err));

    fetch("../view/footer.html") 
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;})
    .catch(err => console.error("Erro ao carregar o header:", err));