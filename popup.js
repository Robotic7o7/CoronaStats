fetch('https://corona.lmao.ninja/v2/countries/India')
.then(response=>{
    return response.json()
})
.then(data=>{
    document.getElementById('totalcases').textContent += data.cases
    document.getElementById('totaldeaths').textContent += data.deaths
    document.getElementById('new').textContent += data.todayCases
    document.getElementById('rec').textContent += data.recovered
})