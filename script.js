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

  function renderGames() {
    gamesGrid.innerHTML = "";
    games.forEach(game => {
      const card = document.createElement("div");
      card.className = "card";

      // Mostrar solo los primeros 100 caracteres + "..." en el resumen
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

    // Requisitos
    modalMinReq.innerHTML = "";
    modalRecReq.innerHTML = "";
    game.minReq.forEach(req => { let li = document.createElement("li"); li.textContent=req; modalMinReq.appendChild(li); });
    game.recReq.forEach(req => { let li = document.createElement("li"); li.textContent=req; modalRecReq.appendChild(li); });

    // Miniaturas
    modalGallery.innerHTML = "";
    if(game.trailer){
      let trailerThumb = document.createElement("img");
      // Extraer miniatura de YT
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

    // Inicial preview: trailer si existe
    if(game.trailer){
      modalPreviewContainer.innerHTML=`<iframe src="${game.trailer}" allowfullscreen></iframe>`;
    } else if(game.gallery[0]){
      modalPreviewContainer.innerHTML=`<img src="${game.gallery[0]}">`;
    } else {
      modalPreviewContainer.innerHTML=`<img src="${game.image}">`;
    }
  }

  // Cierre del modal y detener trailer
  function closeGameModal() {
    modal.classList.remove("show");
    modalPreviewContainer.innerHTML = ""; // Esto detiene el trailer
  }

  closeModal.addEventListener("click", closeGameModal);
  window.addEventListener("click", e=>{
    if(e.target === modal) closeGameModal();
  });

  renderGames();
});
