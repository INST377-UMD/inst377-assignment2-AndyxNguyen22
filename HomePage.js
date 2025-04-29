fetch ('https://zenquotes.io/api/random')
    .then(response => response.json())
    .then(data => {
        const quote = data[0].q;
        const author = data[0].a;
        document.getElementById('quote-text').innerText = `"${quote}" - ${author}`;
    })
    .catch (error => {
        document.getElementById('quote-text').innerText = "Failed to Load";
        console.error ("Error fetching quote", error);
    });