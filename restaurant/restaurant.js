var links = [
    "soup.html",
    "lunch.html",
    "chicken.html",
    "shushi.html",
    "mutton.html",
    "vegie.html",
    "noodles.html",
    "desert.html"
];
anylink = function () {
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * links.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var link =  links[randIdx];
    // open it in a new window / tab (depends on browser setting)
    window.open(link);
};