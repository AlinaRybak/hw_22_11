function renderCountries (countries){
    if(document.querySelector('.countries-table')){
    document.querySelector('.countries-table').remove()};

    const renderTable = document.createElement('table');
    renderTable.className = 'mt-3 table table-striped table-bordered countries-table';
    const thead = `<thead><tr><td>Name</td><td>Population</td><td>Capital</td><td>Area</td></tr></thead>`;
    let htmlStr = countries.map(country =>`<tr>
        <td>${country.name}</td>
        <td>${country.population}</td>
        <td>${country.capital}</td>
        <td>${country.area}</td>
        </tr>`).join('');
        renderTable.innerHTML = thead + `<tbody>${htmlStr}</tbody>`;
        document.querySelector('.container').append(renderTable);
}

function getData(){
fetch ('https://restcountries.com/v2/all').then(res => res.json()).then(data => {
    console.log(data);
    renderCountries (data);
});
}

getData();

document.querySelector('#btn-search').onclick = e => {
   let searchValue = document.querySelector('#search').value;
   if (searchValue){
   fetch ('https://restcountries.com/v2/name/'+ searchValue).then(res => res.json()).then(data => {
    renderCountries(data);
});
   } else {
    getData();
   }
}

document.querySelector('#btn-clear').onclick = e => {
    document.querySelector('#search').value = '';
    getData();
}
