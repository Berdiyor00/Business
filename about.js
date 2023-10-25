async function fun(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.articles);
    } catch (error) {
        console.error(error);
    }
}


const urls = [
    'https://newsapi.org/v2/everything?q=business&from=2023-09-24&sortBy=publishedAt&apiKey=02d816bcbb5647e49628f22852207df4',

];

const itemsPerPage = 5;
let currentPage = 11;

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result.articles;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const bigWrapper = document.querySelector('.news__about__big__wrapper')
async function renderPage(page) {
    const resultDiv = document.getElementById('articleContainer');
    resultDiv.innerHTML = '';

    const articles = await fetchData(urls[0]); // URLni o'zgartiring kerak bo'lgan API uchun

    const startIndex = (page - 11) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const articlesToDisplay = articles.slice(startIndex, endIndex);

    articlesToDisplay.forEach(article => {
        bigWrapper.innerHTML = `
        <div class="img__ortitlewrapper">
        <div>
<a href ="https://www.emerce.nl/wire/aon-cyber-resilience-report-helft-cybercriminaliteit-2025-veroorzaakt-door-menselijke-fouten-kwaadwillige-acties"><img class="BIgWrapper__class" src="${article.urlToImage}" alt="Imgs"></a><p>${article.publishedAt}</p></div>

<div class="BigWrapper__Titla"></div>
<h2>${article.title}</h2>
</div>


<div class="img__ortitlewrapper">
<div>
<a href ="https://www.emerce.nl/wire/aon-cyber-resilience-report-helft-cybercriminaliteit-2025-veroorzaakt-door-menselijke-fouten-kwaadwillige-acties"><img class="BIgWrapper__class" src="${article.urlToImage}" alt="Imgs"></a><p>${article.publishedAt}</p></div>

<div class="BigWrapper__Titla"></div>
<h2>${article.title}</h2>
</div>
<div class="img__ortitlewrapper">
<div>
<a href ="https://www.emerce.nl/wire/aon-cyber-resilience-report-helft-cybercriminaliteit-2025-veroorzaakt-door-menselijke-fouten-kwaadwillige-acties"><img class="BIgWrapper__class" src="${article.urlToImage}" alt="Imgs"></a><p>${article.publishedAt}</p></div>

<div class="BigWrapper__Titla"></div>
<h2>${article.title}</h2>
</div>
<div class="img__ortitlewrapper">
<div>
<a href ="https://www.emerce.nl/wire/aon-cyber-resilience-report-helft-cybercriminaliteit-2025-veroorzaakt-door-menselijke-fouten-kwaadwillige-acties"><img class="BIgWrapper__class" src="${article.urlToImage}" alt="Imgs"></a><p>${article.publishedAt}</p></div>

<div class="BigWrapper__Titla"></div>
<h2>${article.title}</h2>
</div>
<div class="img__ortitlewrapper">
<div>
<a href ="https://www.emerce.nl/wire/aon-cyber-resilience-report-helft-cybercriminaliteit-2025-veroorzaakt-door-menselijke-fouten-kwaadwillige-acties"><img class="BIgWrapper__class" src="${article.urlToImage}" alt="Imgs"></a><p>${article.publishedAt}</p></div>

<div class="BigWrapper__Titla"></div>
<h2>${article.title}</h2>
</div>
`
    });

}



renderPage(currentPage);
const url = 'https://instagram-data1.p.rapidapi.com/hashtag/feed/reels?hashtag=summer';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9f573245e8msh98d8b92209920b4p1e9989jsn8c93d213ff4f',
        'X-RapidAPI-Host': 'instagram-data1.p.rapidapi.com'
    }
};

async function MyApi(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
MyApi(url);