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
      semestre: "4º semestre",
      foto: "../assets/images/CarlosHSSS.jpg",
      bio: "Me chamos Carlos Henrique mas pode me chamar de Caos, tenho 19 anos e trabalho atualmente como técnico em informática. Sou amante da tecnologia tanto no software quanto no hardware e sou um Júnior Full-Stack sei lidar com tecnologias como Angular | Laravel | Java entre outros, meus interesses são a ciência de dados, cybersecurity e desenvolver soluções para os problemas das pessoas. Alem disso sou um apaixonado pela velocidade e os roncos melódicos, sou músico e faminto pelo aprender. 👨‍💻",
      github: "https://github.com/CarlosH-Santiago",
      linkedin: "https://www.linkedin.com/in/carlos-h-santiago-7411a52a8/",
    },
    {
      nome: "Joalisson Pinto Maia",
      semestre: "4º semestre",
      foto: "../assets/images/Joalison.jpg",
      bio: "Prazer, pode me chamar de Joca, tenho 21 anos, sou muito conhecido pela minha paciência e por ser uma pessoa muito feliz e sorridente, sou formado em ADS, já possuo experiência na área, um ano como estagiário de Suporte Técnico, já tive o prazer de realizar um teste presencial na qual fiquei um mês e desenvolvi um mapa dinâmico estilo Ifood com VueJS além de fazer alterações numa plataforma com PHP e VueJS, participei de um Hackathon e conquistei o 3° lugar dentre 17 equipes. Se você curte a área de desenvolvimento web e mobile, ficarei muito feliz de te orientar nessa jornada, além das questões acadêmicas.",      
      github: "https://github.com/Namibo06",
      linkedin: "https://www.linkedin.com/in/joalisson-p-maia-5396b5232/",
    },
      {
        nome: "João Guilherme",
        semestre: "4º semestre",
        foto: "../assets/images/JoaoGui.jpeg",
        bio: "Meu nome é João Guilherme, mas pode me chamar de Gui, tenho 21 anos e atualmente trabalho no ramo imobiliário mas também presto serviço de criação de sites e sistemas. Amante de tecnologia, hoje sou Full-Stack porém minha especialidade é back-end. Além disso amo livros de todos os gêneros, animes, praticar esportes, carros e vontade absurda por aprendizado.",
        github: "https://github.com/joaopinn",
        linkedin: "www.linkedin.com/in/joaopinn20",
      },
      {
        nome: "Jadson Sobrinho",
        semestre: "4º semestre",
        foto: "../assets/images/Jadson.jpeg",
        bio: "Possuo conhecimento multidisciplinar nas áreas de back-end, front-end e dados. Mas meu foco principal é a área de dados, então quem está entrando agora no curso e tem curiosidade de conhecer na área, não hesite em entrar em contato. <br> PS: Não espere muito da área de front",
        github: "https://github.com/Jadson-Sobrinho/",
        linkedin: "https://www.linkedin.com/in/jadson-sobrinho-654998220",
      },
      {
        nome: "Mateus Queiroz",
        semestre: "4º semestre",
        foto: "../assets/images/matheus.jpeg",
        bio: "Sou Mateus Queiroz, estudante de Sistemas de Informação e Administração, além de técnico em Desenvolvimento de Sistemas pelo SENAI. Tenho experiência em gestão administrativa, financeira e atendimento, com forte interesse em gestão de projetos e empreendedorismo. Possuo conhecimentos em HTML, CSS, SQL, Python e Java, aplicados no desenvolvimento de soluções inovadoras. Já participei de projetos acadêmicos e sociais como sistemas para banco de sangue e leite materno, plataforma de voluntariado educacional e ferramentas para descarte correto de resíduos, entre outras iniciativas voltadas à transformação social. Busco unir tecnologia e gestão para criar soluções que gerem impacto positivo em pessoas e organizações.",
        github: "https://github.com/Mateus-tech",
        linkedin: "https://www.linkedin.com/in/mateus-queiroz-00a470340",
      },
            {
      nome: "Henrique Estrela",
      semestre: "6º semestre",
      foto: "../assets/images/Estrela.jpeg",
      bio: "Oi, eu sou Henrique Estrela! Tenho 21 anos, sou técnico em ADS pelo SENAI, freelancer na área web e estudante de Sistemas de Informação na UNEX. Sou conhecido pelo meu jeito alegre, paciente e curioso. Minha paixão é criar produtos que unem UX, usabilidade e inovação, tornando a tecnologia mais intuitiva e significativa. Na prática, já acumulei experiências com desenvolvimento web (Angular, React, Vue.js, Firebase, Node, API e etc), apps (Kotlin, Flutter), UX Design e análise de dados. Desenvolvi alguns projetos como Projetos em 3D, RevistaAlternativa, DJConsultoria , Tô na rota, Sustentabilidade Gamificada e outos ai , tenho facilidade em ensinar e compartilhar conhecimento de forma colaborativa. Se você se interessa por desenvolvimento web e afins, vou adorar te orientar nessa jornada.",
      github: "https://github.com/Henrique-Estrela",
      linkedin: "https://www.linkedin.com/in/henrique-estrela-21163921a/",
    },
      /*
      {
      nome: "",
      semestre: "3º semestre",
      foto: "../assets/images/default.jpg",
      bio: "",
      github: "https://",
      linkedin: "https://",
    },
    */
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

