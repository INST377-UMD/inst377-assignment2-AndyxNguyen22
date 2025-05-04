if (annyang) {
    const commands = {
      'Hello': () => { alert('Hello world!'); },
      'Change the color to <color>': colorChange,
      'Navigate to <page>': pageNavigate
    };
    
    function colorChange(color){
        const body = document.getElementById("body")
        body.style.backgroundColor = color
    }

    function pageNavigate(url){
        window.location.href = url

    }
  
    // Add our commands to annyang
    annyang.addCommands(commands);

    annyang.start();

}