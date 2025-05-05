if (annyang) {
    const commands = {
      'Hello': () => { alert('Hello world!'); },
      'Change the color to *color': colorChange,
      'Navigate to *page': pageNavigate,
      'Lookup *stock': audioStock,
      'Load *dogName': audioDog
    };
    
    function colorChange(color){
        const body = document.getElementById("body");
        body.style.backgroundColor = color;
    }

    function pageNavigate(url){
        url += ".html";
        window.location.href = url;
    }

    function audioStock(stock) {
        const stocks = document.getElementById("stocks");
        const date = document.getElementById("date");

        stocks.value = stock;   
        date.value = "30Days";

        fetchStock();
    }

    function audioDog(dogName) {

        const dogBreed = dogData.breeds.find(b => b.attributes.name.toLowerCase() === dogName.toLowerCase());
        const dogDescriptions = document.getElementById("dogDescription");

        const name = dogBreed.attributes.name;
        const description = dogBreed.attributes.description;
        const min = dogBreed.attributes.life.min;
        const max = dogBreed.attributes.life.max;

        dogDescriptions.innerHTML = `
        <h2> Name: ${name} <br> </h2>
        <p>
        <b> Description:  ${description} </b> <br>
        <b> Min Life: ${min} </b> <br>
        <b> Max Life: ${max} </b> <br>
        </p>
        `;
        dogDescriptions.style.display = "block";
        
    }

  
    // Add our commands to annyang
    annyang.addCommands(commands);

    annyang.start();

}