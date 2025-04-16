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
      bio: "Me chamos Carlos Henrique mas pode me chamar de Caos, tenho 18 anos quase 19 e trabalho atualmente como técnico em informática. Sou amante da tecnologia tanto no software quanto no hardware e sou um Júnior Full-Stack, meus interesses são a ciência de dados, cybersecurity e desenvolver soluções para os problemas das pessoas. Alem disso sou um apaixonado pela velocidade e os roncos melódicos, sou músico e faminto pelo aprender. 👨‍💻",
      github: "https://github.com/CaosH360",
      linkedin: "https://www.linkedin.com/in/carlos-h-santiago-7411a52a8/",
    },
    {
      nome: "Elias Guideon Carneiro Barreto",
      semestre: "3º semestre",
      foto: "../assets/images/EliasGuideon.jpg",
      bio: " Sou Elias, em julho farei 20 anos, conclui o tecnico em adm aos 17, tenho gosto pelo ingles, mas do ensino medio pra cá tenho voltado meus estudos para a programacao, especialmente para a area de dados, a posicão que almejo alcancar é de analista de dados e talvez beeem depois cientista de dados",
      github: "https://www.linkedin.com/in/elias-guideon-barreto-b576922a9/",
      linkedin: "https://github.com/5VI73",
    },
    {
      nome: "Joalisson Pinto Maia",
      semestre: "3º semestre",
      foto: "../assets/images/Joalison.jpg",
      bio: "Prazer, pode me chamar de Joca, tenho 21 anos, sou muito conhecido pela minha paciência e por ser uma pessoa muito feliz e sorridente, sou formado em ADS, já possuo experiência na área, um ano como estagiário de Suporte Técnico, já tive o prazer de realizar um teste presencial na qual fiquei um mês e desenvolvi um mapa dinâmico estilo Ifood com VueJS além de fazer alterações numa plataforma com PHP e VueJS, participei de um Hackathon e conquistei o 3° lugar dentre 17 equipes. Se você curte a área de desenvolvimento web e mobile, ficarei muito feliz de te orientar nessa jornada, além das questões acadêmicas.",      
      github: "https://github.com/Namibo06",
      linkedin: "https://www.linkedin.com/in/joalisson-p-maia-5396b5232/",
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
        <p class="bio">${p.bio}</p>
        <a class="github" href="${p.github}">Github</a>
        <a class="linkedin" href="${p.linkedin}">Linkedin</a>
    </div>
    `;
  });

