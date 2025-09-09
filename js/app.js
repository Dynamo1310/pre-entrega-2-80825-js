// Datos base (proyectos estáticos)
const proyectos = [
  { titulo: 'Captain America: The First Avenger', anio: 2011, cronologico: 1, tipo: 'película' },
  { titulo: 'Captain Marvel', anio: 2019, cronologico: 2, tipo: 'película' },
  { titulo: 'Iron Man', anio: 2008, cronologico: 3, tipo: 'película' },
  { titulo: 'Iron Man 2', anio: 2010, cronologico: 4, tipo: 'película' },
  { titulo: 'The Incredible Hulk', anio: 2008, cronologico: 5, tipo: 'película' },
  { titulo: 'Thor', anio: 2011, cronologico: 6, tipo: 'película' },
  { titulo: 'The Avengers', anio: 2012, cronologico: 7, tipo: 'película' },
  { titulo: 'Iron Man 3', anio: 2013, cronologico: 8, tipo: 'película' },
  { titulo: 'Thor: The Dark World', anio: 2013, cronologico: 9, tipo: 'película' },
  { titulo: 'Captain America: The Winter Soldier', anio: 2014, cronologico: 10, tipo: 'película' },
  { titulo: 'Guardians of the Galaxy', anio: 2014, cronologico: 11, tipo: 'película' },
  { titulo: 'Guardians of the Galaxy Vol. 2', anio: 2017, cronologico: 12, tipo: 'película' },
  { titulo: 'Avengers: Age of Ultron', anio: 2015, cronologico: 13, tipo: 'película' },
  { titulo: 'Ant-Man', anio: 2015, cronologico: 14, tipo: 'película' },
  { titulo: 'Captain America: Civil War', anio: 2016, cronologico: 15, tipo: 'película' },
  { titulo: 'Black Widow', anio: 2021, cronologico: 16, tipo: 'película' },
  { titulo: 'Black Panther', anio: 2018, cronologico: 17, tipo: 'película' },
  { titulo: 'Spider-Man: Homecoming', anio: 2017, cronologico: 18, tipo: 'película' },
  { titulo: 'Doctor Strange', anio: 2016, cronologico: 19, tipo: 'película' },
  { titulo: 'Thor: Ragnarok', anio: 2017, cronologico: 20, tipo: 'película' },
  { titulo: 'Ant-Man and the Wasp', anio: 2018, cronologico: 21, tipo: 'película' },
  { titulo: 'Avengers: Infinity War', anio: 2018, cronologico: 22, tipo: 'película' },
  { titulo: 'Avengers: Endgame', anio: 2019, cronologico: 23, tipo: 'película' },
  { titulo: 'Loki', anio: 2021, cronologico: 24, tipo: 'serie', temporada: 1, episodios: 6 },
  { titulo: 'What If...?', anio: 2021, cronologico: 25, tipo: 'serie', temporada: 1, episodios: 9 },
  { titulo: 'WandaVision', anio: 2021, cronologico: 26, tipo: 'serie', episodios: 9 },
  { titulo: 'The Falcon and the Winter Soldier', anio: 2021, cronologico: 27, tipo: 'serie', episodios: 6 },
  { titulo: 'Shang-Chi y la leyenda de los Diez Anillos', anio: 2021, cronologico: 28, tipo: 'película' },
  { titulo: 'Eternals', anio: 2021, cronologico: 29, tipo: 'película' },
  { titulo: 'Spider-Man: Far From Home', anio: 2019, cronologico: 30, tipo: 'película' },
  { titulo: 'Spider-Man: No Way Home', anio: 2021, cronologico: 31, tipo: 'película' },
  { titulo: 'Doctor Strange en el multiverso de la locura', anio: 2022, cronologico: 32, tipo: 'película' },
  { titulo: 'Hawkeye', anio: 2021, cronologico: 33, tipo: 'serie', episodios: 6 },
  { titulo: 'Moon Knight', anio: 2022, cronologico: 34, tipo: 'serie', episodios: 6 },
  { titulo: 'Black Panther: Wakanda Forever', anio: 2022, cronologico: 35, tipo: 'película' },
  { titulo: 'She-Hulk: Attorney at Law', anio: 2022, cronologico: 36, tipo: 'serie', episodios: 9 },
  { titulo: 'Ms. Marvel', anio: 2022, cronologico: 37, tipo: 'serie', episodios: 6 },
  { titulo: 'Thor: Love and Thunder', anio: 2022, cronologico: 38, tipo: 'película' },
  { titulo: 'Ant-Man and the Wasp: Quantumania', anio: 2023, cronologico: 39, tipo: 'película' },
  { titulo: 'Guardianes de la Galaxia vol. 3', anio: 2023, cronologico: 40, tipo: 'película' },
  { titulo: 'Invasión secreta', anio: 2023, cronologico: 41, tipo: 'serie', episodios: 6 },
  { titulo: 'Loki', anio: 2023, cronologico: 42, tipo: 'serie', temporada: 2, episodios: 6 },
  { titulo: 'The Marvels', anio: 2023, cronologico: 43, tipo: 'película' },
  { titulo: 'What If...?', anio: 2023, cronologico: 44, tipo: 'serie', temporada: 2, episodios: 9 },
  { titulo: 'Echo', anio: 2024, cronologico: 45, tipo: 'serie', episodios: 5 },
  { titulo: 'Agatha All Along', anio: 2024, cronologico: 46, tipo: 'serie', episodios: 9 },
  { titulo: 'Deadpool & Wolverine', anio: 2024, cronologico: 47, tipo: 'película' },
  { titulo: 'What If...?', anio: 2024, cronologico: 48, tipo: 'serie', temporada: 3, episodios: 8 },
  { titulo: 'Your Friendly Neighborhood Spider-Man', anio: 2025, cronologico: 49, tipo: 'serie', episodios: 10 },
  { titulo: 'Daredevil: Born Again', anio: 2025, cronologico: 50, tipo: 'serie', episodios: 9 },
  { titulo: 'Captain America: Brave New World', anio: 2025, cronologico: 51, tipo: 'película' },
  { titulo: 'Thunderbolts', anio: 2025, cronologico: 52, tipo: 'película' },
  { titulo: 'Ironheart', anio: 2025, cronologico: 53, tipo: 'serie', episodios: 6 },
  { titulo: 'Los Cuatro Fantásticos: primeros pasos', anio: 2025, cronologico: 54, tipo: 'película' }
];

// Heroes base (sobre este array trabajaremos y persistiremos)
const HEROES_STORAGE_KEY = 'ucm_heroes';

const heroesBase = [
  { nombre: 'Iron Man', proyectos: ['Iron Man','Iron Man 2','Iron Man 3','The Avengers','Avengers: Age of Ultron','Captain America: Civil War','Spider-Man: Homecoming','Avengers: Infinity War','Avengers: Endgame'] },
  { nombre: 'Captain America', proyectos: ['Captain America: The First Avenger','The Avengers','Captain America: The Winter Soldier','Avengers: Age of Ultron','Captain America: Civil War','Avengers: Infinity War','Avengers: Endgame'] },
  { nombre: 'Thor', proyectos: ['Thor','The Avengers','Thor: The Dark World','Avengers: Age of Ultron','Thor: Ragnarok','Avengers: Infinity War','Avengers: Endgame','Thor: Love and Thunder'] },
  { nombre: 'Hulk', proyectos: ['The Incredible Hulk','The Avengers','Avengers: Age of Ultron','Thor: Ragnarok','Avengers: Infinity War','Avengers: Endgame'] },
  { nombre: 'Black Widow', proyectos: ['Iron Man 2','The Avengers','Captain America: The Winter Soldier','Avengers: Age of Ultron','Captain America: Civil War','Avengers: Infinity War','Avengers: Endgame','Black Widow'] },
  { nombre: 'Hawkeye', proyectos: ['Thor','The Avengers','Avengers: Age of Ultron','Captain America: Civil War','Avengers: Endgame','Hawkeye'] },
  { nombre: 'War Machine', proyectos: ['Iron Man 2','Iron Man 3','Avengers: Age of Ultron','Captain America: Civil War','Avengers: Infinity War','Avengers: Endgame'] },
  { nombre: 'Falcon', proyectos: ['Captain America: The Winter Soldier','Avengers: Age of Ultron','Ant-Man','Captain America: Civil War','Avengers: Infinity War','Avengers: Endgame','The Falcon and the Winter Soldier'] },
  { nombre: 'Winter Soldier', proyectos: ['Captain America: The First Avenger','Captain America: The Winter Soldier','Captain America: Civil War','Black Panther','Avengers: Infinity War','Avengers: Endgame','The Falcon and the Winter Soldier'] },
  { nombre: 'Scarlet Witch', proyectos: ['Avengers: Age of Ultron','Captain America: Civil War','Avengers: Infinity War','Avengers: Endgame','WandaVision','Doctor Strange en el multiverso de la locura'] },
  { nombre: 'Vision', proyectos: ['Avengers: Age of Ultron','Captain America: Civil War','Avengers: Infinity War','WandaVision'] },
  { nombre: 'Doctor Strange', proyectos: ['Doctor Strange','Thor: Ragnarok','Avengers: Infinity War','Avengers: Endgame','Spider-Man: No Way Home','Doctor Strange en el multiverso de la locura'] },
  { nombre: 'Spider-Man', proyectos: ['Captain America: Civil War','Spider-Man: Homecoming','Avengers: Infinity War','Avengers: Endgame','Spider-Man: Far From Home','Spider-Man: No Way Home'] },
  { nombre: 'Black Panther', proyectos: ['Captain America: Civil War','Black Panther','Avengers: Infinity War','Avengers: Endgame'] },
  { nombre: 'Okoye', proyectos: ['Black Panther','Avengers: Infinity War','Avengers: Endgame','Black Panther: Wakanda Forever'] },
  { nombre: 'Shuri', proyectos: ['Black Panther','Avengers: Infinity War','Avengers: Endgame','Black Panther: Wakanda Forever'] },
  { nombre: 'Ant-Man', proyectos: ['Ant-Man','Captain America: Civil War','Ant-Man and the Wasp','Avengers: Endgame','Ant-Man and the Wasp: Quantumania'] },
  { nombre: 'Wasp', proyectos: ['Ant-Man and the Wasp','Avengers: Endgame','Ant-Man and the Wasp: Quantumania'] },
  { nombre: 'Star-Lord', proyectos: ['Guardians of the Galaxy','Guardians of the Galaxy Vol. 2','Avengers: Infinity War','Avengers: Endgame','Thor: Love and Thunder','Guardianes de la Galaxia vol. 3'] },
  { nombre: 'Gamora', proyectos: ['Guardians of the Galaxy','Guardians of the Galaxy Vol. 2','Avengers: Infinity War','Avengers: Endgame','Guardianes de la Galaxia vol. 3'] },
  { nombre: 'Drax', proyectos: ['Guardians of the Galaxy','Guardians of the Galaxy Vol. 2','Avengers: Infinity War','Avengers: Endgame','Thor: Love and Thunder','Guardianes de la Galaxia vol. 3'] },
  { nombre: 'Rocket Raccoon', proyectos: ['Guardians of the Galaxy','Guardians of the Galaxy Vol. 2','Avengers: Infinity War','Avengers: Endgame','Thor: Love and Thunder','Guardianes de la Galaxia vol. 3'] },
  { nombre: 'Groot', proyectos: ['Guardians of the Galaxy','Guardians of the Galaxy Vol. 2','Avengers: Infinity War','Avengers: Endgame','Thor: Love and Thunder','Guardianes de la Galaxia vol. 3'] },
  { nombre: 'Nebula', proyectos: ['Guardians of the Galaxy','Guardians of the Galaxy Vol. 2','Avengers: Infinity War','Avengers: Endgame','Thor: Love and Thunder','Guardianes de la Galaxia vol. 3'] },
  { nombre: 'Mantis', proyectos: ['Guardians of the Galaxy Vol. 2','Avengers: Infinity War','Avengers: Endgame','Thor: Love and Thunder','Guardianes de la Galaxia vol. 3'] },
  { nombre: 'Nick Fury', proyectos: ['Iron Man','Iron Man 2','Thor','The Avengers','Captain Marvel','Avengers: Age of Ultron','Avengers: Infinity War','Avengers: Endgame','Spider-Man: Far From Home','Invasión secreta'] },
  { nombre: 'Captain Marvel', proyectos: ['Captain Marvel','Avengers: Endgame','The Marvels'] },
  { nombre: 'Yelena Belova', proyectos: ['Black Widow'] },
  { nombre: 'Shang-Chi', proyectos: ['Shang-Chi y la leyenda de los Diez Anillos'] },
  { nombre: 'Ikaris', proyectos: ['Eternals'] },
  { nombre: 'Sersi', proyectos: ['Eternals'] },
  { nombre: 'Thena', proyectos: ['Eternals'] },
  { nombre: 'Gilgamesh', proyectos: ['Eternals'] },
  { nombre: 'Kingo', proyectos: ['Eternals'] },
  { nombre: 'Phastos', proyectos: ['Eternals'] },
  { nombre: 'Druig', proyectos: ['Eternals'] },
  { nombre: 'Makkari', proyectos: ['Eternals'] },
  { nombre: 'Sprite', proyectos: ['Eternals'] },
  { nombre: 'America Chavez', proyectos: ['Doctor Strange en el multiverso de la locura'] },
  { nombre: 'Jane Foster/Mighty Thor', proyectos: ['Thor: Love and Thunder'] },
  { nombre: 'Kate Bishop', proyectos: ['Hawkeye'] },
  { nombre: 'Ms. Marvel', proyectos: ['Ms. Marvel','The Marvels'] },
  { nombre: 'Moon Knight', proyectos: ['Moon Knight'] },
  { nombre: 'She-Hulk', proyectos: ['She-Hulk: Attorney at Law'] },
  { nombre: 'Loki', proyectos: ['Thor','The Avengers','Thor: The Dark World','Thor: Ragnarok','Avengers: Infinity War','Avengers: Endgame','Loki'] },
  { nombre: 'Monica Rambeau/Photon', proyectos: ['The Marvels'] },
  { nombre: 'Deadpool', proyectos: ['Deadpool & Wolverine'] },
  { nombre: 'Wolverine', proyectos: ['Deadpool & Wolverine'] },
  { nombre: 'Sam Wilson/Captain America', proyectos: ['Captain America: Brave New World','The Falcon and the Winter Soldier'] },
  { nombre: 'Echo', proyectos: ['Echo'] },
  { nombre: 'Agatha Harkness', proyectos: ['WandaVision','Agatha All Along'] },
  { nombre: 'Daredevil', proyectos: ['Daredevil: Born Again'] },
  { nombre: 'Ironheart', proyectos: ['Ironheart'] },
  { nombre: 'Mr. Fantastic', proyectos: ['Los Cuatro Fantásticos: primeros pasos'] },
  { nombre: 'Invisible Woman', proyectos: ['Los Cuatro Fantásticos: primeros pasos'] },
  { nombre: 'Human Torch', proyectos: ['Los Cuatro Fantásticos: primeros pasos'] },
  { nombre: 'The Thing', proyectos: ['Los Cuatro Fantásticos: primeros pasos'] }
];

let heroes = [];

function loadHeroesFromStorage() {
  const raw = localStorage.getItem(HEROES_STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(HEROES_STORAGE_KEY, JSON.stringify(heroesBase));
    heroes = [...heroesBase];
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      heroes = parsed;
    } else {
      heroes = [...heroesBase];
    }
  } catch {
    heroes = [...heroesBase];
  }
}

function saveHeroesToStorage() {
  localStorage.setItem(HEROES_STORAGE_KEY, JSON.stringify(heroes));
}

// Índice de títulos de proyectos (case-insensitive)
function buildProjectTitleIndex() {
  const index = new Map();
  proyectos.forEach(p => {
    index.set(p.titulo.trim().toLowerCase(), p.titulo);
  });
  return index;
}

// Helpers de render
function generarListaProyectos(lista) {
  let contenido = '';
  lista.forEach((p, index) => {
    if (p.tipo === 'película') {
      contenido += `<div class="pelicula">🎬 ${index + 1}. ${p.titulo} (${p.anio})</div>`;
    } else {
      const temporadaText = p.temporada ? ` - T${p.temporada}` : '';
      contenido += `<div class="pelicula">📺 ${index + 1}. ${p.titulo}${temporadaText} (${p.anio}) - ${p.episodios} ep.</div>`;
    }
  });
  return contenido;
}

function generarListaSimple(items) {
  return items.map((texto, index) => `<div class="pelicula">${index + 1}. ${texto}</div>`).join('');
}

function mostrarEnPagina(contenido) {
  document.getElementById('resultado').innerHTML = contenido;
}

function limpiarResultado() {
  document.getElementById('resultado').innerHTML = '';
}

function mostrarProyectosCronologicos() {
  const ordenados = [...proyectos].sort((a, b) => a.cronologico - b.cronologico);
  let html = '<h2>📅 Orden cronológico (UCM Completo)</h2>';
  html += `<p><strong>Total de proyectos: ${ordenados.length}</strong></p>`;
  html += '<p><em>Incluye películas y series en orden cronológico correcto</em></p>';
  html += generarListaProyectos(ordenados);
  mostrarEnPagina(html);
}

function mostrarProyectosPorEstreno() {
  const ordenados = [...proyectos].sort((a, b) => a.anio - b.anio);
  let html = '<h2>🎬📺 Orden de estreno (UCM Completo)</h2>';
  html += `<p><strong>Total de proyectos: ${ordenados.length}</strong></p>`;
  html += '<p><em>Películas y series por fecha de estreno</em></p>';
  html += generarListaProyectos(ordenados);
  mostrarEnPagina(html);
}

function mostrarSoloPeliculas() {
  const peliculas = proyectos.filter(p => p.tipo === 'película').sort((a, b) => a.anio - b.anio);
  let html = '<h2>🎬 Solo Películas por estreno</h2>';
  html += `<p><strong>Total de películas: ${peliculas.length}</strong></p>`;
  html += generarListaProyectos(peliculas);
  mostrarEnPagina(html);
}

function mostrarSoloSeries() {
  const series = proyectos
    .filter(p => p.tipo === 'serie')
    .sort((a, b) => a.anio - b.anio || (a.temporada || 1) - (b.temporada || 1));
  let html = '<h2>📺 Solo Series por estreno</h2>';
  html += `<p><strong>Total de series: ${series.length}</strong></p>`;
  html += generarListaProyectos(series);
  mostrarEnPagina(html);
}

function buscarHeroe() {
  // refrescar datos desde storage por si cambiaron
  loadHeroesFromStorage();
  const heroesOrdenados = [...heroes].sort((a, b) => a.nombre.localeCompare(b.nombre));

  let html = '<h2>🦸‍♂️ Seleccionar Superhéroe</h2>';
  html += '<p>Selecciona un superhéroe de la lista para ver sus apariciones:</p>';

  html += '<div style="margin: 20px 0;">';
  html += '<select id="heroeSelect" onchange="mostrarInformacionHeroeSeleccionado()" style="padding: 10px; font-size: 16px; border: 2px solid #2196f3; border-radius: 5px; background: white; width: 100%; max-width: 400px;">';
  html += '<option value="">-- Selecciona un superhéroe --</option>';

  heroesOrdenados.forEach(heroe => {
    html += `<option value="${heroe.nombre}">${heroe.nombre} (${heroe.proyectos.length} apariciones)</option>`;
  });

  html += '</select>';
  html += '</div>';

  html += '<button class="btn-secondary" onclick="agregarNuevoHeroe()" style="background: #4caf50; color: white; padding: 15px 30px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-top: 10px;">➕ Agregar Nuevo Héroe</button>';

  mostrarEnPagina(html);
}

function mostrarInformacionHeroeSeleccionado() {
  const select = document.getElementById('heroeSelect');
  const nombreHeroe = select.value;
  if (nombreHeroe) {
    mostrarInformacionHeroe(nombreHeroe);
  }
}

function mostrarInformacionHeroe(nombreHeroe) {
  const heroe = heroes.find(h => h.nombre === nombreHeroe);
  if (!heroe) return;

  let html = `<h2>🦸‍♂️ ${heroe.nombre}</h2>`;
  html += `<p><strong>Total de apariciones: ${heroe.proyectos.length}</strong></p>`;
  html += '<div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 10px 0;">';
  html += generarListaSimple(heroe.proyectos);
  html += '</div>';
  html += '<button onclick="buscarHeroe()" style="background: #2196f3; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px;">⬅️ Volver a la lista</button>';
  mostrarEnPagina(html);
}

function agregarNuevoHeroe() {
  const html = `
    <h2>➕ Agregar nuevo héroe</h2>
    <div class="form-card">
      <form id="formAgregarHeroe" onsubmit="return guardarNuevoHeroe(event)">
        <div class="form-row">
          <label for="nombreHeroe">Nombre del héroe</label>
          <input type="text" id="nombreHeroe" name="nombreHeroe" placeholder="Ej: Daredevil" required />
        </div>
        <div class="form-row">
          <label for="proyectosHeroe">Apariciones (separadas por coma)</label>
          <input type="text" id="proyectosHeroe" name="proyectosHeroe" placeholder="Ej: Daredevil: Born Again, Spider-Man: No Way Home" required />
        </div>
        <button type="submit">Guardar héroe</button>
        <button type="button" style="margin-left:8px; background:#6c757d" onclick="buscarHeroe()">Cancelar</button>
        <div id="mensajeForm" class="message" style="display:none;"></div>
      </form>
    </div>
  `;
  mostrarEnPagina(html);
}

function guardarNuevoHeroe(event) {
  event.preventDefault();
  const nombreInput = document.getElementById('nombreHeroe');
  const proyectosInput = document.getElementById('proyectosHeroe');
  const mensaje = document.getElementById('mensajeForm');

  const nombre = nombreInput.value.trim();
  const proyectosTexto = proyectosInput.value.trim();

  if (!nombre || !proyectosTexto) {
    mensaje.textContent = 'Por favor completa todos los campos.';
    mensaje.className = 'message error';
    mensaje.style.display = 'block';
    return false;
  }

  // Validación de duplicado (case-insensitive)
  const yaExiste = heroes.some(h => h.nombre.toLowerCase() === nombre.toLowerCase());
  if (yaExiste) {
    mensaje.textContent = 'Ese héroe ya existe.';
    mensaje.className = 'message error';
    mensaje.style.display = 'block';
    return false;
  }

  const index = buildProjectTitleIndex();
  const entradas = proyectosTexto
    .split(',')
    .map(x => x.trim())
    .filter(x => x.length > 0);

  if (entradas.length === 0) {
    mensaje.textContent = 'Debes ingresar al menos una aparición.';
    mensaje.className = 'message error';
    mensaje.style.display = 'block';
    return false;
  }

  const desconocidos = [];
  const oficiales = [];
  const vistos = new Set();

  entradas.forEach(tituloIngresado => {
    const key = tituloIngresado.toLowerCase();
    if (!index.has(key)) {
      desconocidos.push(tituloIngresado);
      return;
    }
    const oficial = index.get(key);
    if (!vistos.has(oficial)) {
      vistos.add(oficial);
      oficiales.push(oficial);
    }
  });

  if (desconocidos.length > 0) {
    mensaje.innerHTML = `Los siguientes títulos no existen en el listado de proyectos:<br>- ${desconocidos.join('<br>- ')}`;
    mensaje.className = 'message error';
    mensaje.style.display = 'block';
    return false;
  }

  heroes.push({ nombre, proyectos: oficiales });
  saveHeroesToStorage();

  mostrarEnPagina(`
    <h2>✅ Héroe agregado</h2>
    <p>Se agregó <strong>${nombre}</strong> a la base de datos.</p>
    <button onclick="buscarHeroe()" style="background: #2196f3; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px;">⬅️ Ver lista completa</button>
  `);
  return false;
}

// Inicializar datos al cargar
document.addEventListener('DOMContentLoaded', () => {
  loadHeroesFromStorage();
});


