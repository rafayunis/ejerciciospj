import basededatos from './basededatos.js';


/**
* Devuelve el promedio de anios de estreno de todas las peliculas de la base de datos.
*/
export const promedioAnioEstreno = () => {
    // Ejemplo de como accedo a datos dentro de la base de datos
    // console.log(basededatos.peliculas);
    var sum = 0;
    basededatos.peliculas.forEach( (item) => { sum+=item.anio; });
    return [parseInt(sum/basededatos.peliculas.length)];
};

/**
* Devuelve la lista de peliculas con promedio de critica mayor al numero que llega
* por parametro.
* @param {number} promedio
  */
export const pelicuasConCriticaPromedioMayorA = (promedio) => {
    var promedios=[];
    var sumas = basededatos.peliculas.map(
                        pel => basededatos.calificaciones.filter(
                            cal => cal.pelicula==pel.id).reduce(
                                (retro,item,itera) => ({id:item.pelicula,pelicula:pel.nombre,suma:retro.suma+item.puntuacion,cant:itera+1})
                                ,{id:pel.id,pelicula:pel.nombre,suma:0,cant:1})
                    );
    promedios = sumas.map(p => ({id:p.id,nombre:p.pelicula,promedio:(p.suma/p.cant).toFixed(2)})).filter(p => p.promedio > promedio);
    return promedios;
};
/** Solucion alternativa mas "tradicional" 
 * 
*/
export const pelicuasConCriticaPromedioMayorA2 = (promedio) => {
    var promedios = [];
    var calificaciones = [];
    var peliculas = [];
    calificaciones = basededatos.calificaciones.map((x) => x);
    calificaciones.sort((a, b) => parseInt(a.pelicula) - parseFloat(b.pelicula));

    basededatos.peliculas.forEach( (pelicula) => {
        var sum = 0;
        var cant = 0;
        calificaciones.forEach( (calificacion) => {
            if (calificacion.pelicula == pelicula.id) {
                sum+=calificacion.puntuacion;
                cant+=1;
            }
        });
        if (  sum/cant > 5 ) {
            promedios.push({id:pelicula.id,prom: (sum/cant).toFixed(2),pelicula:pelicula.nombre})
        }    
    });
    return promedios;
};

/**
* Devuelve la lista de peliculas de un director
* @param {string} nombreDirector
*/
export const peliculasDeUnDirector = (nombreDirector) => {
    return [];
};

/**
* Devuelve el promdedio de critica segun el id de la pelicula.
* @param {number} peliculaId
*/
export const promedioDeCriticaBypeliculaId = (peliculaId) => {
    return [];
};

/**
 * Obtiene la lista de peliculas con alguna critica con
 * puntuacion excelente (critica >= 9).
 * En caso de no existir el criticas que cumplan, devolver un array vacio [].
 * Ejemplo del formato del resultado: 
 *  [
        {
            id: 1,
            nombre: 'Back to the Future',
            anio: 1985,
            direccionSetFilmacion: {
                calle: 'Av. Siempre viva',
                numero: 2043,
                pais: 'Colombia',
            },
            directores: [1],
            generos: [1, 2, 6]
        },
        {
            id: 2,
            nombre: 'Matrix',
            anio: 1999,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Argentina'
            },
            directores: [2, 3],
            generos: [1, 2]
        },
    ],
 */
export const obtenerPeliculasConPuntuacionExcelente = () => {
    // Ejemplo de como accedo a datos dentro de la base de datos
    // console.log(basededatos.peliculas);
    return [];
};

/**
 * Devuelve informacion ampliada sobre una pelicula.
 * Si no existe la pelicula con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto pelicula,
 * agregar la lista de criticas recibidas, junto con los datos del critico y su pais.
 * Tambien agrega informacion de los directores y generos a los que pertenece.
 * Ejemplo de formato del resultado para 'Indiana Jones y los cazadores del arca perdida':
 * {
            id: 3,
            nombre: 'Indiana Jones y los cazadores del arca perdida',
            anio: 2012,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Camboya'
            },
            directores: [
                { id: 5, nombre: 'Steven Spielberg' },
                { id: 6, nombre: 'George Lucas' },
            ],
            generos: [
                { id: 2, nombre: 'Accion' },
                { id: 6, nombre: 'Aventura' },
            ],
            criticas: [
                { critico: 
                    { 
                        id: 3, 
                        nombre: 'Suzana Mendez',
                        edad: 33,
                        pais: 'Argentina'
                    }, 
                    puntuacion: 5 
                },
                { critico: 
                    { 
                        id: 2, 
                        nombre: 'Alina Robles',
                        edad: 21,
                        pais: 'Argentina'
                    }, 
                    puntuacion: 7
                },
            ]
        },
 * @param {string} nombrePelicula
 */
export const expandirInformacionPelicula = (nombrePelicula) => {
    return {};
};
