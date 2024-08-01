// Función constructora "Libro"
function Libro(titulo, autor, anio, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio ?? 'Año no proporcionado';
    this.genero = genero;
}

// Método para formatear y mostrar la información detallada del libro
Libro.prototype.mostrarInfo = function() {
    const tituloFormateado = this.titulo.replaceAll(' ', '_');
    return `Título: ${tituloFormateado}, Autor: ${this.autor}, Año: ${this.anio}, Género: ${this.genero}`;
};

// Método para editar la información del libro
Libro.prototype.editarInfo = function(nuevoTitulo, nuevoAutor, nuevoAnio, nuevoGenero) {
    this.titulo = nuevoTitulo ?? this.titulo;
    this.autor = nuevoAutor ?? this.autor;
    this.anio = nuevoAnio ?? this.anio;
    this.genero = nuevoGenero ?? this.genero;
};

// Arreglo de libros
const libros = [
    new Libro('Cien años de soledad', 'Gabriel García Márquez', 1967, 'Novela'),
    new Libro('El amor en los tiempos del cólera', 'Gabriel García Márquez', 1985, 'Novela'),
    new Libro('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, 'Novela'),
    new Libro('La casa de los espíritus', 'Isabel Allende', 1982, 'Novela')
];

// Función para buscar libros por nombre de autor
function buscarPorAutor() {
    const autor = document.getElementById('busquedaAutor').value;
    const resultados = libros.filter(libro => libro.autor.toLowerCase().includes(autor.toLowerCase()));
    mostrarResultadosBusqueda(resultados);
    console.log(`Resultados de búsqueda para autor "${autor}":`);
    resultados.forEach(libro => console.log(libro.mostrarInfo()));
}

// Función para agregar un nuevo libro
function agregarLibro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const anio = document.getElementById('anio').value;
    const genero = document.getElementById('genero').value;

    const nuevoLibro = new Libro(titulo, autor, anio, genero);
    libros.push(nuevoLibro);
    mostrarTodosLosLibros();
    console.log(`Libro agregado: ${nuevoLibro.mostrarInfo()}`);
}

// Función para mostrar información de todos los libros
function mostrarTodosLosLibros() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    libros.forEach(libro => {
        const div = document.createElement('div');
        div.className = 'book-item';
        div.textContent = libro.mostrarInfo();
        bookList.appendChild(div);
    });
    console.log('Lista de todos los libros:');
    libros.forEach(libro => console.log(libro.mostrarInfo()));
}

// Función para mostrar resultados de búsqueda
function mostrarResultadosBusqueda(resultados) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    resultados.forEach(libro => {
        const div = document.createElement('div');
        div.className = 'search-item';
        div.textContent = libro.mostrarInfo();
        searchResults.appendChild(div);
    });
}

// Inicializar la lista de libros al cargar la página
window.onload = mostrarTodosLosLibros;
