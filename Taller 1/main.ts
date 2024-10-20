import { series } from './data.js';

console.log("Cargando series...");

function renderSeriesInTable(): void {
  const tableBody = document.getElementById('series-table') as HTMLElement;
  
  // Verifica que las series se están cargando
  console.log(series);

  let totalSeasons = 0;  // Variable para sumar las temporadas
  const seriesCount = series.length;  // Cantidad de series
  
  // Renderizar cada serie en una fila de la tabla
  series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    tableBody.appendChild(row);

    // Sumar temporadas
    totalSeasons += serie.seasons;
  });

  // Calcular el promedio de temporadas
  const averageSeasons = totalSeasons / seriesCount;

  // Mostrar el promedio de temporadas al final de la tabla
  const averageRow = document.createElement('tr');
  averageRow.innerHTML = `
    <td colspan="4" style="text-align: center; font-weight: bold;">
      Seasons average: ${averageSeasons.toFixed(2)}
    </td>
  `;
  tableBody.appendChild(averageRow);
}

renderSeriesInTable();
