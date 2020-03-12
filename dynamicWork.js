function WorkObject(href, imgsrc, logoPresent, logoSource, name, description, tags) {
    this.href = href; 
    this.imgsrc = imgsrc;
    this.logoPresent = logoPresent;
    this.logoSource = logoSource; 
    this.name = name;
    this.description = description; 
    this.tags = tags; 
}


function addWorkListing(object) {
    const container = document.body.querySelector(".Work-container")

    var div = document.createElement("div");
    div.setAttribute("class", "Work-Listing"); 
    var a = document.createElement("a");
    a.setAttribute("href", object.href);
    var img = document.createElement("img");
    img.setAttribute("class", "Work-image");
    img.setAttribute("src", object.imgsrc);
    a.appendChild(img);
    var div2 = document.createElement("div");
    div2.setAttribute("class", "Listing-contents");
    var name = document.createElement("h1");
    var nameText = document.createTextNode(object.name); 
    name.appendChild(nameText);
    div2.appendChild(name);
    var description = document.createElement("p"); 
    var descriptionText = document.createTextNode(object.description);
    description.appendChild(descriptionText);
    div2.appendChild(description); 
    for (var i = 0; i < object.tags.length; i++) {
        var span = document.createElement("span")
        var tagText = document.createTextNode(object.tags[i])
        span.appendChild(tagText);
        div2.appendChild(span);
    }
    a.appendChild(div2);
    div.appendChild(a);
    

    container.appendChild(div);
}
/*
function addWorkListingReact(object) {
    const container = document.body.querySelector(".Work-container")
    ReactDOM.render(
        React.createElement("h1", { style: { "color": "red" }, { "font-size": 100px }}, "hello");


      //  React.createElement("div", { className: "Work-Listing" },
        //    React.createElement("img", { src: object.imgsrc }, null))
}
*/

function addTagSelector(objects) {
    var tagDict = []; 
    const container = document.querySelector("#tagSelector"); 
    console.log(container)

    for (var i = 0; i < objects.length; i++) {
        var tags = objects[i].tags; 
        for (var j = 0; j < tags.length; j++) {
            //tagDict.tags[j] == undefined ? tagDict.tags[j] = 1 : tagDict.tags[j]++;
           
            tagDict.push(tags[j]);
       
        }

    }
    console.log(tagDict.length)

    for (var i = 0; i < tagDict.length; i++) {
        var span = document.createElement("span");
        var spanText = document.createTextNode(tagDict[i]);
        span.appendChild(spanText); 
        container.appendChild(span);
    }
    


}
var workObjects = [];
var solo = new WorkObject("work_1.html", "images/Solo/final.jpg", true, "images/Solo/logo.png", "Polysand", "Designing cost effective building materials using local waste with the charity WasteAid.", ["Sustainable Design",  "Circular Economy" , "Optimisation"])
workObjects.push(solo)





addWorkListing(solo);
addTagSelector(workObjects)