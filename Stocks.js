fetch ('https://tradestie.com/api/v1/apps/reddit?date=2022-04-03')
    .then(response => response.json())
    .then(data => {
        console.log("data:", data);

        const stocks = data.slice(0,5);
        const table = document.getElementById("topStocks");

        stocks.forEach(topstocks =>{
            const row = document.createElement("tr");

            row.innerHTML = `
                <td><a href = "https://finance.yahoo.com/quote/${topstocks.ticker}" target = "_blank"> 
                ${topstocks.ticker}
                                                </a></td>

                <td>${topstocks.no_of_comments}</td>

                <td>${topstocks.sentiment === "Bullish"
                    ? "<img src = Bullish.png alt = Bullish >"
                    : "<img src = bearish.png alt = Bearish >"
                                                }</td>
            `;

            table.appendChild(row);
        }); 

    })