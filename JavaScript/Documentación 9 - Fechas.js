//Fechas.
//Saber los días y otros datos.
//Guarda que está en formato month-day-year, como en USA.
const dia = new Date('1-5-2000');

//Fecha actual.
const dia = new Date();
//Obtener años y meses (enero es el mes 0), horas y minutos.
dia.getFullYear();
dia.getMonth();
dia.getHours();
dia.getMinutes();
dia.getDay(); //El 0 es el domingo.


//Modificar la fecha.
dia.setFullYear(2010);


//MomentJS.
//Formato más amigable que el new Date().
//Fechas en español.
moment.locale('es');
console.log(moment().format('MMMM Do YYYY h:mm:ss a'));