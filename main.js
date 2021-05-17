var country = document.getElementById('country');
var active = document.getElementById('active');
var recovered = document.getElementById('recovered');
var death = document.getElementById('death');
var total = document.getElementById('total');
var lastupdate = document.getElementById('last-update');


const getCovidData = async () => {
    try {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        country.innerHTML = "INDIA"
        active.innerHTML = actualData.statewise[0].active;
        recovered.innerHTML = actualData.statewise[0].recovered;
        death.innerHTML = actualData.statewise[0].deaths;
        lastupdate.innerHTML = actualData.statewise[0].lastupdatedtime;
        total.innerHTML = actualData.statewise[0].confirmed;
    }
    catch (err) {
        console.log(err);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    getCovidData();
})
