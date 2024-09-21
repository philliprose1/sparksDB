// Get Top Scores from database
fetch('https://sparks-db.vercel.app/blogs/outages')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data.blogs);
    console.log(data.blogs)

    if (data.blogs.length < 1) {
        document.getElementById('checkText').innerHTML = 'No Outages Found...'
    } else {
        console.log('text found')
    }
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementById("blog");
for (var i = 0; i < data.length; i++) {
    var section = document.createElement("section");
    section.innerHTML = 'Product/Equipment: ' + data[i].title +  ' | ETA: ' + data[i].snippet; // + ' | Message: ' + data[i].body;
    mainContainer.appendChild(section);  
  }
};

const elements = document.getElementsByTagName('section');
console.log(elements)

function doIt() {

    var basea = parseFloat(document.getElementById('basea').value);
    var baseb = 40
    var basec = basea * baseb ;

   // var rowa = parseFloat(document.getElementById('rowa').value);
   var rowa = parseFloat(document.getElementById('basea').value);
    var rowb = 5
    var rowc = rowa * rowb;

    document.getElementById('base').innerHTML = "You have " + basec + " Bottles." ;
    document.getElementById('row').innerHTML = "You have " + rowc + " Layers." ;
} 

const clear = document.getElementById('clear');
clear.addEventListener('click', function handleClick(event){
    event.preventDefault();//<--- prevents page reload

  
    const per01 = document.getElementById('basea');

    const per03 = document.getElementById('base').innerHTML = '';
   
    const per033 = document.getElementById('row').innerHTML = '';

    per01.value = '';
 
    per03.value = '';
 
    per033.value = '';
});
