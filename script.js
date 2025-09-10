document.addEventListener("DOMContentLoaded", function() {

  let games = [
    {
      id: 1,
      title: "Hollow Knight: Silksong",
      description: "¡Descubre un vasto reino embrujado en Hollow Knight: Silksong! Explora, lucha y sobrevive mientras asciendes a la cima de un vasto reino gobernado por la seda y el canto.",
      genre: "2D con arte dibujado a mano, animaciones muy pulidas y una atmósfera que mezcla melancolía y dinamismo.",
      minReq: [
        "SO: Windows 10 version 21H1 (build 19043) or newer",
        "Procesador: Intel Core i3-3240, AMD FX-4300",
        "Memoria: 4 GB de RAM",
        "Gráficos: GeForce GTX 560 Ti (1GB), Radeon HD 7750 (1GB)",
        "DirectX: Versión 10",
        "Almacenamiento: 8 GB"
      ],
      recReq: [
        "SO: Windows 10 version 21H1 (build 19043) or newer",
        "Procesador: Intel Core i5-3470",
        "Memoria: 8 GB de RAM",
        "Gráficos: GeForce GTX 1050 (2GB), Radeon R9 380 (2GB)",
        "DirectX: Versión 10",
        "Almacenamiento: 8 GB"
      ],
      image: "Imagenes/640px-Silksong_cover.jpg",
      gallery: [
        "Imagenes/hollow-knight-silksong-es-compat.jpg",
        "Imagenes/copy-of-untitled-design-59.jpg"
      ],
      download: "https://www.mediafire.com/file/xmzci6lp66wfl27/Hollow_Knight_Silksong.rar/file",
      trailer: "https://www.youtube.com/embed/6XGeJwsUP9c"
    },
    {
      id: 2,
      title: "Hollow Knight",
      description: "Exploras Hallownest, un antiguo reino subterráneo en ruinas, lleno de insectos y criaturas corrompidas. Controlas al Caballero, un ser silencioso con espada en mano (llamada 'aguijón'), que se adentra en las profundidades para descubrir secretos, combatir jefes épicos y enfrentar un destino marcado por la infección que consume al reino.",
      genre: "Metroidvania, acción y aventura. 2D con arte dibujado a mano, atmósfera oscura y misteriosa.",
      minReq: [
        "SO: Windows 7 (64 bits)",
        "Procesador: Intel Core 2 Duo E5200",
        "Memoria RAM: 4 GB",
        "Gráficos: GeForce 9800GTX+ (1 GB VRAM)",
        "DirectX: Versión 10",
        "Espacio en Disco: 9 GB"
      ],
      recReq: [
        "SO: Windows 10 (64 bits)",
        "Procesador: Intel Core i5",
        "Memoria RAM: 8 GB",
        "Gráficos: GeForce GTX 560",
        "DirectX: Versión 11",
        "Espacio en Disco: 9 GB"
      ],
      image: "Imagenes/latest.jpg",
      gallery: [
        "Imagenes/hollow-night-review-gq-1.jpg",
        "Imagenes/hollow-knight-nintendo-switch-gd.jpg"
      ],
      download: "https://www.mediafire.com/file/14kc0zucuyahcf8/Ho1l00wKn11gh7.rar/file",
      trailer: "https://www.youtube.com/embed/UAO2urG23S4"
    },
{
  id: 3,
  title: "MiSide + Voces Latino",
  description: "Imaginemos que tienes un juego en el que te importa un personaje. ¿Te imaginas algún día adentrarte en él?",
  genre: "Aventura, Indie, Rol, Simuladores",
  minReq: [
    "SO *: Windows 7/8/10",
    "Procesador: Intel Core i5-2300 @ 2,80 GHz, AMD FX 8120 @ 3.1 GHz",
    "Memoria: 4 GB de RAM",
    "Gráficos: NVIDIA GT 630 / 650m, AMD Radeon HD6570 or equivalent",
    "DirectX: Versión 10",
    "Almacenamiento: 2 GB de espacio disponible",
    "Tarjeta de sonido: 100% DirectX 9.0c compatible sound card"
  ],
  recReq: [
    "SO *: Windows 7/8/10",
    "Procesador: Intel i7 920 @ 2.7 GHz, AMD Phenom II 945 @ 3.0 GHz",
    "Memoria: 8 GB de RAM",
    "Gráficos: NVIDIA GTX 1050",
    "DirectX: Versión 11",
    "Almacenamiento: 2 GB de espacio disponible",
    "Tarjeta de sonido: 100% DirectX 9.0c compatible sound card"
  ],
  image: "Imagenes/miside.jpg",
  gallery: [
    "Imagenes/MiSide-es-el-juego-de-terror-que.jpg",
    "Imagenes/v8zsxu.jpg"
  ],
  download: "https://www.mediafire.com/file/kwbt253nh0x0fe2/MiSide.rar/file",
  trailer: "https://www.youtube.com/embed/r-bgCU8a5CM"
},
{
  id: 4,
  title: "Doki Doki Literature Club Plus!",
  description: "¡Te damos la bienvenida a un mundo de poesía y romance! Escribe poemas para la persona que te gusta y borra los errores que cometas por el camino para conseguir el final perfecto. ¡Es el momento de descubrir por qué DDLC es uno de los juegos de terror psicológicos más queridos de la época!\n\nEres el personaje principal, quien se une a regañadientes al club de literatura en busca de un interés romántico. Con cada poema que escribes y con cada decisión que tomas, irás encandilando a la persona que te gusta y empezarán a desvelar los horrores del romance escolar. ¿Tienes lo que hay que tener para descifrar el código de los simuladores de citas y conseguir el final perfecto?\n\n¡Ahora, la rompedora experiencia original de DDLC se ve potenciada por montones de características nuevas y contenido exclusivo de Doki Doki Literature Club Plus!",
  genre: "Casual, Indie",
  minReq: [
    "SO *: Windows 7 or higher",
    "Procesador: 1.8 GHz Dual-Core CPU",
    "Memoria: 4 GB de RAM",
    "Gráficos: Integrated Graphics",
    "Almacenamiento: 3 GB de espacio disponible"
  ],
  recReq: [
    "Requiere un procesador y un sistema operativo de 64 bits"
  ],
  image: "Imagenes/doki-doki-literature-club-plus-d.jpg",
  gallery: [
    "Imagenes/cfef7634adfd013fc6429f00e0284dde.jpg",
    "Imagenes/image.jpg"
  ],
  download: "https://www.mediafire.com/file/eu4bxs264jm3s52/Doki.Doki.Literature.Club.Plus.rar/file",
  trailer: "https://www.youtube.com/embed/kB1663FTpzU"
},
   {
  id: 5,
  title: "Cuphead",
  description: "¡Bienvenido a Cuphead, el juego de acción y disparos que rinde homenaje a los dibujos animados de los años 30! Juega como Cuphead o Mugman en una aventura llena de jefes desafiantes y niveles llenos de acción. Con gráficos dibujados a mano, fondos pintados a mano y música de jazz original, Cuphead ofrece una experiencia única y desafiante.",
  genre: "Run and Gun, Acción, Aventura, Cooperativo Local",
  minReq: [
    "SO: Windows 7",
    "Procesador: Intel Core2 Duo E8400, 3.0GHz o AMD Athlon 64 X2 6000+, 3.0GHz o superior",
    "Memoria: 3 GB de RAM",
    "Gráficos: GeForce 9600 GT o AMD HD 3870 512MB o superior",
    "DirectX: Versión 11",
    "Almacenamiento: 4 GB de espacio disponible"
  ],
  recReq: [
    "SO: Windows 7",
    "Procesador: Intel Core2 Duo E8400, 3.0GHz o AMD Athlon 64 X2 6000+, 3.0GHz o superior",
    "Memoria: 3 GB de RAM",
    "Gráficos: GeForce 9600 GT o AMD HD 3870 512MB o superior",
    "DirectX: Versión 11",
    "Almacenamiento: 4 GB de espacio disponible"
  ],
  image: "Imagenes/lb-dmakDhvOzcyKZtbAYJbsdoYuMAsqH.jpg",
  gallery: [
    "Imagenes/Cuphead-jefes-generacion-xbox.jpg",
    "Imagenes/50160870708_71651ecbdc_k.jpg"
  ],
  download: "https://www.mediafire.com/file/mo1pl1jokfqo3y9/Cuphead.rar/file",
  trailer: "https://www.youtube.com/embed/NN-9SQXoi50",
  extras: [
    { name: "Fix Online", link: "https://www.mediafire.com/file_premium/33e81vpdiuiwohw/CupheD-fIXoNLY.v3.rar/file" },
    { name: "Update 1.3", link: "https://www.mediafire.com/file_premium/39wldnvn22mamsy/C8uph6eadD-Update1.3.4.rar/file" }
  ]
},
{
  id: 6,
  title: "The Evil Within",
  description: "The Evil Within es un juego de survival horror creado por Shinji Mikami, el padre de Resident Evil. Sumérgete en un mundo retorcido lleno de horrores inimaginables, criaturas grotescas y trampas mortales, donde la tensión y el suspenso nunca terminan.",
  genre: "Survival Horror, Terror, Acción",
  minReq: [
    "SO: Windows 7/8.1 de 64 bits",
    "Procesador: i7 con cuatro núcleos",
    "Memoria: 4 GB de RAM",
    "Gráficos: GTX 460 o equivalente con 1 GB de VRAM",
    "DirectX: Versión 11",
    "Almacenamiento: 50 GB de espacio disponible"
  ],
  recReq: [
    "SO: Windows 7/8.1 de 64 bits",
    "Procesador: i7 con cuatro núcleos",
    "Memoria: 4 GB de RAM",
    "Gráficos: GTX 670 o equivalente con 4 GB de VRAM",
    "DirectX: Versión 11",
    "Almacenamiento: 50 GB de espacio disponible"
  ],
  image: "Imagenes/2ElCvtK8Dpkn1IWD3LjNLOrB.jpg", // Principal
  gallery: [
    "Imagenes/TheEvilWithin-slide.jpg",  // Prueba 1
    "Imagenes/635504002481655910-The-Evil-With.jpg" // Prueba 2
  ],
  download: "https://www.mediafire.com/file/8uil2qmyu1bwr3l/3V1LWH1T1NG.torrent/file",
 trailer: "https://www.youtube.com/embed/PvR7-pZh_0M"
},
{
  id: 7,
  title: "Boris and the Dark Survival",
  description: "Juega como Boris el Lobo, el compañero de dibujos animados de Bendy, mientras exploras el estudio de animación en ruinas. Busca suministros, resuelve acertijos y sobrevive a la amenaza de la Ink Demon que acecha en cada esquina.",
  genre: "Survival, Horror, Aventura, Indie",
  minReq: [
    "SO: Windows 7 o superior",
    "Procesador: Intel Core i3",
    "Memoria: 4 GB de RAM",
    "Gráficos: Intel HD 4000",
    "DirectX: Versión 10",
    "Almacenamiento: 1 GB de espacio disponible"
  ],
  recReq: [
    "SO: Windows 10",
    "Procesador: Intel Core i5",
    "Memoria: 8 GB de RAM",
    "Gráficos: NVIDIA GTX 750 Ti o superior",
    "DirectX: Versión 11",
    "Almacenamiento: 1 GB de espacio disponible"
  ],
  image: "Imagenes/borisandthedarksurvival.jpg",
  gallery: [
    "Imagenes/450_1000.jpg",
    "Imagenes/m_img1.jpg"
  ],
  download: "https://www.mediafire.com/file/485nln9fjt4ed32/Boris.and.the.Dark.Survival.rar/file",
  trailer: "https://www.youtube.com/embed/fgO8GViQNMQ"
},
{
  id: 8,
  title: "Bendy and the Ink Machine",
  description: "Un juego de terror en primera persona con un estilo único inspirado en los dibujos animados de los años 30. Explora el antiguo estudio de animación, resuelve acertijos, descubre oscuros secretos y enfréntate a la criatura de tinta que acecha en las sombras.",
  genre: "Terror, Aventura, Indie, Misterio",
  minReq: [
    "SO: Windows 7 o superior",
    "Procesador: Intel Core i3",
    "Memoria: 4 GB de RAM",
    "Gráficos: NVIDIA GeForce GTX 460 / AMD Radeon HD 5850",
    "DirectX: Versión 11",
    "Almacenamiento: 2 GB de espacio disponible"
  ],
  recReq: [
    "SO: Windows 10",
    "Procesador: Intel Core i5",
    "Memoria: 8 GB de RAM",
    "Gráficos: NVIDIA GeForce GTX 770 / AMD Radeon R9 280",
    "DirectX: Versión 11",
    "Almacenamiento: 2 GB de espacio disponible"
  ],
  image: "Imagenes/7288998-bendy-and-the-ink-machin.jpg",
  gallery: [
    "Imagenes/28101377c698640c3b51f5b98dd85797.jpg",
    "Imagenes/ss_f8e224df47533aed9ef34127a6670.jpg"
  ],
  download: "https://www.mediafire.com/file/41mth4lok8m4gs2/Bendy.and.the.Ink.Machine.v1.5.1.2.rar/file",
  trailer: "https://www.youtube.com/embed/kU4w0WgUh18"
},
{
  id: 9,
  title: "Bendy and the Dark Revival",
  description: "La esperada secuela de Bendy and the Ink Machine. En esta aventura de terror en primera persona, encarnas a Audrey, atrapada en un estudio de animación retorcido por la tinta. Explora, resuelve acertijos, enfréntate a criaturas demoníacas y descubre la oscura verdad detrás del regreso de Bendy.",
  genre: "Terror, Aventura, Indie, Misterio",
  minReq: [
    "SO: Windows 10 de 64 bits",
    "Procesador: Intel Core i5-7500 / AMD Ryzen 5 1400",
    "Memoria: 8 GB de RAM",
    "Gráficos: NVIDIA GTX 1050 Ti / AMD Radeon RX 570",
    "DirectX: Versión 11",
    "Almacenamiento: 15 GB de espacio disponible"
  ],
  recReq: [
    "SO: Windows 10/11 de 64 bits",
    "Procesador: Intel Core i7-8700 / AMD Ryzen 7 2700X",
    "Memoria: 16 GB de RAM",
    "Gráficos: NVIDIA GTX 1660 Ti / AMD Radeon RX 590",
    "DirectX: Versión 11",
    "Almacenamiento: 15 GB de espacio disponible"
  ],
  image: "Imagenes/DarkRevival.jpg",
  gallery: [
    "Imagenes/Tk8QNaTu7LFyDrsh4sdCFfCC.jpg",
    "Imagenes/85af087d074fe757c84def4ce41614d1.jpg"
  ],
  download: "https://www.mediafire.com/file/602j4cqocfm9h2n/Bendy.and.the.Dark.Revival.v1.0.4.0332.rar/file",
  trailer: "https://www.youtube.com/embed/ZS4ZXBXhowY"
},
{
  id: 10,
  title: "Bendy: Lone Wolf",
  description: "Bendy: Lone Wolf es un spin-off de la saga Bendy. En esta entrega controlas a un lobo solitario que debe abrirse paso en un mundo retorcido de tinta y horrores. Explora nuevas áreas, enfrenta enemigos perturbadores y descubre más secretos del universo de Joey Drew Studios.",
  genre: "Terror, Aventura, Indie, Acción",
  minReq: [
    "SO: Windows 10 de 64 bits",
    "Procesador: Intel Core i5-2400 / AMD FX-6350",
    "Memoria: 8 GB de RAM",
    "Gráficos: NVIDIA GTX 760 / AMD Radeon R7 260x",
    "DirectX: Versión 11",
    "Almacenamiento: 10 GB de espacio disponible"
  ],
  recReq: [
    "SO: Windows 10/11 de 64 bits",
    "Procesador: Intel Core i7-3770 / AMD Ryzen 5 1600",
    "Memoria: 16 GB de RAM",
    "Gráficos: NVIDIA GTX 1060 / AMD Radeon RX 580",
    "DirectX: Versión 11",
    "Almacenamiento: 10 GB de espacio disponible"
  ],
  image: "Imagenes/bendy-lone-wolf-tag-page-cover-a.jpg",
  gallery: [
    "Imagenes/2e85e5f5c3c1eae6a20c04f8afc43480.jpg",
    "Imagenes/53a9c8e6d73f1c49c955e55fb7ddc284.jpg"
  ],
  download: "https://www.mediafire.com/file/m2xox7t3nzutq3m/Bendy_Lone_Wolf-FLT.rar/file",
  trailer: "https://www.youtube.com/embed/lJE1XQiCkF8"
},
{
  id: 11,
  title: "Phasmophobia + OnlineSteam",
  description: "Phasmophobia es un juego de terror cooperativo en línea para 4 jugadores. Tú y tu equipo de investigadores paranormales entrarán en lugares embrujados para reunir pruebas de actividad sobrenatural. Usa equipo especializado para detectar fantasmas, comunícate con ellos y sobrevive al terror.",
  genre: "Terror, Cooperativo, Multijugador Online",
  minReq: [
    "SO: Windows 10 64bit",
    "Procesador: Intel Core i5-4590 / AMD FX 8350",
    "Memoria: 8 GB de RAM",
    "Gráficos: NVIDIA GTX 970 / AMD Radeon R9 290",
    "DirectX: Versión 11",
    "Almacenamiento: 21 GB de espacio disponible",
    "Tarjeta de sonido: Compatible con DirectX"
  ],
  recReq: [
    "SO: Windows 10 64bit",
    "Procesador: Intel i5-10600 / AMD Ryzen 5 3600",
    "Memoria: 16 GB de RAM",
    "Gráficos: NVIDIA RTX 2060 / AMD RX 5700",
    "DirectX: Versión 12",
    "Almacenamiento: 21 GB de espacio disponible",
    "Tarjeta de sonido: Compatible con DirectX"
  ],
  image: "Imagenes/11265022.jpg",
  gallery: [
    "Imagenes/1124748-phasmophobia-la-chasse-a.jpg",
    "Imagenes/Phasmophobia-VCR-1200x675.jpg"
  ],
  download: "https://www.mediafire.com/file/qqbo9fdl0lzu9vs/Phasmophobia.zip/file",
  trailer: "https://www.youtube.com/embed/sRa9oeo5KiY"
},
{
  id: 12,
  title: "Dead Cells",
  description: "Dead Cells es un juego de acción y plataformas tipo rogue-lite con toques de metroidvania. Explora un castillo en constante cambio, desbloquea armas y habilidades, enfréntate a enemigos desafiantes y descubre secretos mientras intentas escapar en cada nueva partida.",
  genre: "Acción, Roguelike, Metroidvania",
  minReq: [
    "SO: Windows 7+",
    "Procesador: Intel i5",
    "Memoria: 2 GB de RAM",
    "Gráficos: Nvidia 450 GTS / Radeon HD 5750",
    "DirectX: Versión 9.1",
    "Almacenamiento: 500 MB de espacio disponible"
  ],
  recReq: [
    "SO: Windows 10",
    "Procesador: Intel i5+",
    "Memoria: 4 GB de RAM",
    "Gráficos: Nvidia GTX 460 / Radeon HD 7800 o superior",
    "DirectX: Versión 11",
    "Almacenamiento: 500 MB de espacio disponible"
  ],
  image: "Imagenes/250px-Dead_cells_cover_art.jpg",
  gallery: [
    "Imagenes/dead-cells-video-game-review-gq.jpg",
    "Imagenes/ss_b7cf2ca21fe3648c53f808b80393c.jpg"
  ],
  download: "https://www.mediafire.com/file/jp3rmvonlea372s/Dead.Cells.elamigos.torrent/file",
  trailer: "https://www.youtube.com/embed/RvGaSPTcTxc"
},
{
  id: 13,
  title: "Katana ZERO",
  description: "Katana ZERO es un juego de acción y plataformas con combate rápido, muertes instantáneas y una narrativa intensa llena de giros. Usa tu katana para abrirte paso a través de enemigos en niveles llenos de acción, ralentiza el tiempo para planear tus movimientos y descubre la verdad detrás de tu pasado.",
  genre: "Acción, Plataformas, Neo-noir",
  minReq: [
    "SO: Windows 7, 8, 8.1, 10 x64",
    "Procesador: Intel Core2 Duo E5200",
    "Memoria: 1 GB de RAM",
    "Gráficos: GeForce 7600 GT o equivalente",
    "DirectX: Versión 10",
    "Almacenamiento: 200 MB de espacio disponible"
  ],
  recReq: [
    "SO: Windows 10 x64",
    "Procesador: Intel Core i3",
    "Memoria: 2 GB de RAM",
    "Gráficos: GeForce 8800 GTS o superior",
    "DirectX: Versión 11",
    "Almacenamiento: 200 MB de espacio disponible"
  ],
  image: "Imagenes/Katana_Zero_cover.jpg",
  gallery: [
    "Imagenes/screenshot.jpg",
    "Imagenes/KZ_featured_Nook-1210x642.png.jpg"
  ],
  download: "https://www.mediafire.com/file/w4v3nf07yatqcv9/Katana+ZERO.rar/file",
  trailer: "https://www.youtube.com/embed/uo2FOBnt11o"
},
{
  id: 14,
  title: "Katana ZERO + KATANA HERO (Solo inglés)",
  description: "Esta versión incluye el DLC 'KATANA HERO', disponible únicamente en inglés. Katana ZERO es un juego de acción y plataformas con combate rápido, muertes instantáneas y una narrativa intensa. Usa tu katana para abrirte paso a través de enemigos en niveles llenos de acción, ralentiza el tiempo para planear tus movimientos y descubre la verdad detrás de tu pasado.",
  genre: "Acción, Plataformas, Neo-noir",
  minReq: [
    "SO: Windows 7, 8, 8.1, 10 x64",
    "Procesador: Intel Core2 Duo E5200",
    "Memoria: 1 GB de RAM",
    "Gráficos: GeForce 7600 GT o equivalente",
    "DirectX: Versión 10",
    "Almacenamiento: 200 MB de espacio disponible"
  ],
  recReq: [
    "SO: Windows 10 x64",
    "Procesador: Intel Core i3",
    "Memoria: 2 GB de RAM",
    "Gráficos: GeForce 8800 GTS o superior",
    "DirectX: Versión 11",
    "Almacenamiento: 200 MB de espacio disponible"
  ],
  image: "Imagenes/co9nm9.jpg",
  gallery: [
    "Imagenes/Katana-Zero-DLC.jpg",
    "Imagenes/kzdlc.jpg"
  ],
  download: "https://www.mediafire.com/file/78do5mj0jgjelwm/Katana.ZERO.v1.5.9.0.2.zip/file",
  trailer: "https://www.youtube.com/embed/eDq3kdMRPhY"
}
  ];
  const gamesGrid = document.getElementById("gamesGrid");
  const modal = document.getElementById("gameModal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalGenre = document.getElementById("modalGenre");
  const modalMinReq = document.getElementById("modalMinReq");
  const modalRecReq = document.getElementById("modalRecReq");
  const modalDownload = document.getElementById("modalDownload");
  const modalGallery = document.getElementById("modalGallery");
  const modalPreviewContainer = document.getElementById("modalPreviewContainer");
  const extrasLinks = document.getElementById("extrasLinks");

  function renderGames() {
    gamesGrid.innerHTML = "";
    games.forEach(game => {
      const card = document.createElement("div");
      card.className = "card";

      let shortDesc = game.description;
      if(shortDesc.length > 100){
        shortDesc = shortDesc.substring(0, 100) + "...";
      }

      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${shortDesc}</p>
      `;

      card.addEventListener("click", () => openModal(game));
      gamesGrid.appendChild(card);
    });
  }

  function openModal(game) {
    modal.classList.add("show");
    modalTitle.textContent = game.title;
    modalDescription.textContent = game.description;
    modalGenre.textContent = game.genre;
    modalImage.src = game.image;
    modalDownload.href = game.download;

    // Extras
const extrasSection = document.getElementById("modalExtras");
const extrasLinks = document.getElementById("extrasLinks");
extrasLinks.innerHTML = "";

if(game.extras && game.extras.length > 0){
  extrasSection.style.display = "block"; // Mostrar sección
  game.extras.forEach(extra => {
    let a = document.createElement("a");
    a.href = extra.link;
    a.target = "_blank";
    a.textContent = extra.name;
    extrasLinks.appendChild(a);
  });
} else {
  extrasSection.style.display = "none"; // Ocultar sección si no hay extras
}
    // Requisitos
    modalMinReq.innerHTML = "";
    modalRecReq.innerHTML = "";
    game.minReq.forEach(req => { let li = document.createElement("li"); li.textContent=req; modalMinReq.appendChild(li); });
    game.recReq.forEach(req => { let li = document.createElement("li"); li.textContent=req; modalRecReq.appendChild(li); });

    // Miniaturas
    modalGallery.innerHTML = "";
    if(game.trailer){
      let trailerThumb = document.createElement("img");
      let videoId = game.trailer.split("embed/")[1];
      trailerThumb.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      trailerThumb.className = "trailer-thumb";
      trailerThumb.addEventListener("click", () => {
        modalPreviewContainer.innerHTML=`<iframe src="${game.trailer}" allowfullscreen></iframe>`;
      });
      modalGallery.appendChild(trailerThumb);
    }
    game.gallery.forEach(img=>{
      let thumb = document.createElement("img");
      thumb.src=img;
      thumb.addEventListener("click", ()=>{modalPreviewContainer.innerHTML=`<img src="${img}">`;});
      modalGallery.appendChild(thumb);
    });

    // Preview inicial
    if(game.trailer){
      modalPreviewContainer.innerHTML=`<iframe src="${game.trailer}" allowfullscreen></iframe>`;
    } else if(game.gallery[0]){
      modalPreviewContainer.innerHTML=`<img src="${game.gallery[0]}">`;
    } else {
      modalPreviewContainer.innerHTML=`<img src="${game.image}">`;
    }
  }

  function closeGameModal() {
    modal.classList.remove("show");
    modalPreviewContainer.innerHTML = "";
  }

  closeModal.addEventListener("click", closeGameModal);
  window.addEventListener("click", e=>{
    if(e.target === modal) closeGameModal();
  });

  renderGames();
});
