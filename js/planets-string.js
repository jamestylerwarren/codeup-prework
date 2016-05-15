(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);



    // TODO: Convert planetsString to an array, save it to planetsArray.


    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    
    var planetsbacktostring = planetsArray.join(',');
    console.log(planetsbacktostring);



    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    var planetswithbreaks = "<br>Mercury</br><br>Venus</br><br>Earth</br><br>Mars</br><br>Jupiter</br><br>Saturn</br><br>Uranus</br><br>Neptune</br>"
    console.log(planetswithbreaks);

    var planetswithbreaksarray = planetswithbreaks.split('<br></br>');
    console.log(planetswithbreaksarray)


    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.


    var unorderedlistplanets = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";



})();