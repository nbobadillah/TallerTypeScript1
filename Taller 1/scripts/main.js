import { series } from './data.js';
console.log("Cargando series...");
function renderSeriesInTable() {
    var tableBody = document.getElementById('series-table');
    // Verifica que las series se están cargando
    console.log(series);
    var totalSeasons = 0; // Variable para sumar las temporadas
    var seriesCount = series.length; // Cantidad de series
    // Renderizar cada serie en una fila de la tabla
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        tableBody.appendChild(row);
        // Sumar temporadas
        totalSeasons += serie.seasons;
    });
    // Calcular el promedio de temporadas
    var averageSeasons = totalSeasons / seriesCount;
    // Mostrar el promedio de temporadas al final de la tabla
    var averageRow = document.createElement('tr');
    averageRow.innerHTML = "\n    <td colspan=\"4\" style=\"text-align: center; font-weight: bold;\">\n      Seasons average: ".concat(averageSeasons.toFixed(2), "\n    </td>\n  ");
    tableBody.appendChild(averageRow);
}
renderSeriesInTable();
