const btn = document.getElementById("toggle-theme");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  btn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Modo claro"
    : "🌙 Modo escuro";
});



const padrinhos = [
    {
      nome: "Carlos Henrique de S S Santiago",
      semestre: "3º semestre",
      foto: "../assets/images/CarlosHSSS.jpg",
      bio: "Me chamos Carlos Henrique mas pode me chamar de Caos. Trabalho atualmente como técnico em informática. Sou amante da tecnologia tanto no software quanto no hardware e sou um Júnior Full-Stack, meus interesses são a ciência de dados, cybersecurity e desenvolver soluções para os problemas das pessoas. Alem disso sou um apaixonado pela velocidade e os roncos melódicos, sou músico e faminto pelo aprender. 👨‍💻",
      github: "https://",
      linkedin: "https://",
    },
    {
      nome: "Elias Guideon Carneiro Barreto",
      semestre: "3º semestre",
      foto: "../assets/images/EliasGuideon.jpg",
      bio: " Sou Elias, em julho farei 20 anos, conclui o tecnico em adm aos 17, tenho gosto pelo ingles, mas do ensino medio pra cá tenho voltado meus estudos para a programacao, especialmente para a area de dados, a posicão que almejo alcancar é de analista de dados e talvez beeem depois cientista de dados",
      github: "https://",
      linkedin: "https://",
    },
    {
      nome: "",
      semestre: "3º semestre",
      foto: "../assets/images/",
      bio: "",
      github: "https://",
      linkedin: "https://",
    },
  ];

  const container = document.getElementById('cards-container');

  padrinhos.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.foto}" alt="Foto de ${p.nome}">
        <h3>${p.nome}</h3>
        <p><strong>${p.semestre}</strong></p>
        <p>${p.bio}</p>
        <a class="github" href="${p.github}">Github</a>
        <a class="linkedin" href="${p.linkedin}">Linkedin</a>
    </div>
    `;
  });

