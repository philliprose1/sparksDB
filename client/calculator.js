
var cdn = document.createElement('script');
cdn.setAttribute('src','https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js');
document.head.appendChild(cdn);
var pop = document.getElementById("popSound") 
function popSound() {
    pop.play();
}

//date for table
const y = new Date();
y.getFullYear();
document.getElementById('date').innerHTML = y

//Crystal calculator
function crystal5Gallon() {
    var baseACrystal = parseFloat(document.getElementById('baseACrystal').value);
    var baseBCrystal = 40
    var baseCCrystal = baseACrystal * baseBCrystal ;
   
   var rowACrystal = parseFloat(document.getElementById('baseACrystal').value);
    var rowBCrystal = 5
    var rowCCrystal = rowACrystal * rowBCrystal;

   var rackTotalCrystal = parseFloat(document.getElementById('baseACrystal').value);

    document.getElementById('baseCrystal').innerHTML = "You have " + baseCCrystal + " Crystal Fresh Bottles." ;
    document.getElementById('rowCrystal').innerHTML = "You have " + rowCCrystal + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotalCrystal').innerHTML = rackTotalCrystal;
    document.getElementById('crystalTotal').innerHTML = baseCCrystal;

} 
const clearCrystal = document.getElementById('clearCrystal');
clearCrystal.addEventListener('click', function handleClick(event){
    event.preventDefault();//<--- prevents page reload

    const c01 = document.getElementById('baseACrystal');
    const c03 = document.getElementById('baseCrystal').innerHTML = '';
    const c033 = document.getElementById('rowCrystal').innerHTML = '';

    c01.value = '';
    c03.value = '';
    c033.value = '';
});

//Primo calulator

function primo5Gallon() {
    var baseAPrimo = parseFloat(document.getElementById('baseAPrimo').value);
    var baseBPrimo = 40
    var baseCPrimo = baseAPrimo * baseBPrimo ;
  
   var rowAPrimo = parseFloat(document.getElementById('baseAPrimo').value);
    var rowBPrimo = 5
    var rowCPrimo = rowAPrimo * rowBPrimo;

   var rackTotalPrimo = parseFloat(document.getElementById('baseAPrimo').value);

    document.getElementById('basePrimo').innerHTML = "You have " + baseCPrimo + " Primo Bottles." ;
    document.getElementById('rowPrimo').innerHTML = "You have " + rowCPrimo + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotalPrimo').innerHTML = rackTotalPrimo;
    document.getElementById('primoTotal').innerHTML = baseCPrimo;

} 
const clearPrimo = document.getElementById('clearPrimo');
clearPrimo.addEventListener('click', function handleClick(e){
    e.preventDefault();//<--- prevents page reload

    const p01 = document.getElementById('baseAPrimo');
    const p03 = document.getElementById('basePrimo').innerHTML = '';
    const p033 = document.getElementById('rowPrimo').innerHTML = '';

    p01.value = '';
    p03.value = '';
    p033.value = '';
});

//spring
function spring5Gallon() {
    var baseASpring = parseFloat(document.getElementById('baseASpring').value);
    var baseBSpring = 40
    var baseCSpring = baseASpring * baseBSpring ;
  
   var rowASpring = parseFloat(document.getElementById('baseASpring').value);
    var rowBSpring = 5
    var rowCSpring = rowASpring * rowBSpring;

   var rackTotalSpring = parseFloat(document.getElementById('baseASpring').value);

    document.getElementById('baseSpring').innerHTML = "You have " + baseCSpring + " Spring Bottles." ;
    document.getElementById('rowSpring').innerHTML = "You have " + rowCSpring + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotalSpring').innerHTML = rackTotalSpring;
    document.getElementById('springTotal').innerHTML = baseCSpring;

} 
const clearSpring = document.getElementById('clearSpring');
clearSpring.addEventListener('click', function handleClick(e){
    e.preventDefault();//<--- prevents page reload

    const s01 = document.getElementById('baseASpring');
    const s03 = document.getElementById('baseSpring').innerHTML = '';
    const s033 = document.getElementById('rowSpring').innerHTML = '';

    s01.value = '';
    s03.value = '';
    s033.value = '';
});

//distilled
function dis5Gallon() {
    var baseADis = parseFloat(document.getElementById('baseADis').value);
    var baseBDis = 40
    var baseCDis = baseADis * baseBDis ;
  
   var rowADis = parseFloat(document.getElementById('baseADis').value);
    var rowBDis = 5
    var rowCDis = rowADis * rowBDis;

   var rackTotalDis = parseFloat(document.getElementById('baseADis').value);

    document.getElementById('baseDis').innerHTML = "You have " + baseCDis + " Distilled Bottles." ;
    document.getElementById('rowDis').innerHTML = "You have " + rowCDis + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotalDis').innerHTML = rackTotalDis;
    document.getElementById('disTotal').innerHTML = baseCDis;

} 
const clearDis = document.getElementById('clearDis');
clearDis.addEventListener('click', function handleClick(e){
    e.preventDefault();//<--- prevents page reload

    const d01 = document.getElementById('baseADis');
    const d03 = document.getElementById('baseDis').innerHTML = '';
    const d033 = document.getElementById('rowDis').innerHTML = '';

    d01.value = '';
    d03.value = '';
    d033.value = '';
});
// clear all 5g
const clearAll5 = document.getElementById('clearAll5');
clearAll5.addEventListener('click' , function handleClick(e){
    e.preventDefault();

    const c1 = document.getElementById('baseACrystal');
    const c2 = document.getElementById('baseCrystal').innerHTML = '';
    const c3 = document.getElementById('rowCrystal').innerHTML = '';

    const p1 = document.getElementById('baseAPrimo');
    const p2 = document.getElementById('basePrimo').innerHTML = '';
    const p3 = document.getElementById('rowPrimo').innerHTML = '';

    const s1 = document.getElementById('baseASpring');
    const s2 = document.getElementById('baseSpring').innerHTML = '';
    const s3 = document.getElementById('rowSpring').innerHTML = '';

    const d1 = document.getElementById('baseADis');
    const d2 = document.getElementById('baseDis').innerHTML = '';
    const d3 = document.getElementById('rowDis').innerHTML = '';

c1.value = '';
c2.value = '';  
c3.value = '';

p1.value = '';
p2.value = '';  
p3.value = '';

s1.value = '';
s2.value = '';  
s3.value = '';

d1.value = '';
d2.value = '';  
d3.value = '';

});

//3 gallon crystal
function crystal3Gallon() {
    var baseA3 = parseFloat(document.getElementById('baseA3').value);
    var baseB3 = 60
    var baseC3 = baseA3 * baseB3 ;
   
   var rowA3 = parseFloat(document.getElementById('baseA3').value);
    var rowB3 = 5
    var rowC3 = rowA3 * rowB3;

   var rackTotal3 = parseFloat(document.getElementById('baseA3').value);

    document.getElementById('base3').innerHTML = "You have " + baseC3 + " Crystal Fresh 3g Bottles." ;
    document.getElementById('row3').innerHTML = "You have " + rowC3 + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotal3').innerHTML = rackTotal3;
    document.getElementById('3Total').innerHTML = baseC3;

} 
const clear3 = document.getElementById('clear3');
clear3.addEventListener('click', function handleClick(event){
    event.preventDefault();//<--- prevents page reload

    const c31 = document.getElementById('baseA3');
    const c33 = document.getElementById('base3').innerHTML = '';
    const c333 = document.getElementById('row3').innerHTML = '';

    c31.value = '';
    c33.value = '';
    c333.value = '';
});

//3 gallon primo
function primo3Gallon() {
    var baseA3P0 = parseFloat(document.getElementById('baseA3P0').value);
    var baseB3P0 = 60
    var baseC3P0 = baseA3P0 * baseB3P0 ;
   
   var rowA3P0 = parseFloat(document.getElementById('baseA3P0').value);
    var rowB3P0 = 5
    var rowC3P0 = rowA3P0 * rowB3P0;

   var rackTotal3P0 = parseFloat(document.getElementById('baseA3P0').value);

    document.getElementById('base3P0').innerHTML = "You have " + baseC3P0 + " Primo 3g Bottles." ;
    document.getElementById('row3P0').innerHTML = "You have " + rowC3P0 + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotal3P0').innerHTML = rackTotal3P0;
    document.getElementById('3P0Total').innerHTML = baseC3P0;

} 
const clear3P0 = document.getElementById('clear3P0');
clear3P0.addEventListener('click', function handleClick(event){
    event.preventDefault();//<--- prevents page reload

    const p31 = document.getElementById('baseA3P0');
    const p33 = document.getElementById('base3P0').innerHTML = '';
    const p333 = document.getElementById('row3P0').innerHTML = '';

    p31.value = '';
    p33.value = '';
    p333.value = '';
});

//clear all 3g
const clearAll3 = document.getElementById('clearAll3');
clearAll3.addEventListener('click' , function handleClick(e){
    e.preventDefault();

    const c3g1 = document.getElementById('baseA3');
    const c3g2 = document.getElementById('base3').innerHTML = '';
    const c3g3 = document.getElementById('row3').innerHTML = '';

    const p3g1 = document.getElementById('baseA3P0');
    const p3g2 = document.getElementById('base3P0').innerHTML = '';
    const p3g3 = document.getElementById('row3P0').innerHTML = '';

    c3g1.value = '';
    c3g2.value = '';  
    c3g3.value = '';
    
    p3g1.value = '';
    p3g2.value = '';  
    p3g3.value = '';

});

//glass 5g
function glass5G() {
    var baseAGlass = parseFloat(document.getElementById('baseAGlass').value);
    var baseBGlass = 30
    var baseCGlass = baseAGlass * baseBGlass ;
  
   var rowAGlass = parseFloat(document.getElementById('baseAGlass').value);
    var rowBGlass = 5
    var rowCGlass = rowAGlass * rowBGlass;

   var rackTotalGlass = parseFloat(document.getElementById('baseAGlass').value);

    document.getElementById('baseGlass').innerHTML = "You have " + baseCGlass + " Glass 5g Bottles." ;
    document.getElementById('rowGlass').innerHTML = "You have " + rowCGlass + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotalGlass').innerHTML = rackTotalGlass;
    document.getElementById('glassTotal').innerHTML = baseCGlass;

} 
const clearGlass = document.getElementById('clearGlass');
clearGlass.addEventListener('click', function handleClick(e){
    e.preventDefault();//<--- prevents page reload

    const g01 = document.getElementById('baseAGlass');
    const g03 = document.getElementById('baseGlass').innerHTML = '';
    const g033 = document.getElementById('rowGlass').innerHTML = '';

    g01.value = '';
    g03.value = '';
    g033.value = '';
});

//glass 2.5g glass full
function glass3G() {
    var baseAGlass3g = parseFloat(document.getElementById('baseAGlass3g').value);
    var baseBGlass3g = 45
    var baseCGlass3g = baseAGlass3g * baseBGlass3g ;
  
   var rowAGlass3g = parseFloat(document.getElementById('baseAGlass3g').value);
    var rowBGlass3g = 5
    var rowCGlass3g = rowAGlass3g * rowBGlass3g;

   var rackTotalGlass3g = parseFloat(document.getElementById('baseAGlass3g').value);

    document.getElementById('baseGlass3g').innerHTML = "You have " + baseCGlass3g + " Glass 2.5g Bottles." ;
    document.getElementById('rowGlass3g').innerHTML = "You have " + rowCGlass3g + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotalGlass3g').innerHTML = rackTotalGlass3g;
    document.getElementById('glassTotal3g').innerHTML = baseCGlass3g;

} 
const clearGlass3g = document.getElementById('clearGlass3g');
clearGlass3g.addEventListener('click', function handleClick(e){
    e.preventDefault();//<--- prevents page reload

    const g301 = document.getElementById('baseAGlass3g');
    const g303 = document.getElementById('baseGlass3g').innerHTML = '';
    const g3033 = document.getElementById('rowGlass3g').innerHTML = '';

    g301.value = '';
    g303.value = '';
    g3033.value = '';
});

//glass EMT 5g
function glassEMT5G() {
    var baseAGlassMt5 = parseFloat(document.getElementById('baseAGlassMt5').value);
    var baseBGlassMt5 = 42
    var baseCGlassMt5 = baseAGlassMt5 * baseBGlassMt5 ;
  
   var rowAGlassMt5 = parseFloat(document.getElementById('baseAGlassMt5').value);
    var rowBGlassMt5 = 7
    var rowCGlassMt5 = rowAGlassMt5 * rowBGlassMt5;

   var rackTotalGlassMt5 = parseFloat(document.getElementById('baseAGlassMt5').value);

    document.getElementById('baseGlassMt5').innerHTML = "You have " + baseCGlassMt5 + " Glass 5g EMT Bottles." ;
    document.getElementById('rowGlassMt5').innerHTML = "You have " + rowCGlassMt5 + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotalGlassMt5').innerHTML = rackTotalGlassMt5;
    document.getElementById('glassTotalMt5').innerHTML = baseCGlassMt5;

} 
const clearGlassMt5 = document.getElementById('clearGlassMt5');
clearGlassMt5.addEventListener('click', function handleClick(e){
    e.preventDefault();//<--- prevents page reload

    const gm01 = document.getElementById('baseAGlassMt5');
    const gm03 = document.getElementById('baseGlassMt5').innerHTML = '';
    const gm033 = document.getElementById('rowGlassMt5').innerHTML = '';

    gm01.value = '';
    gm03.value = '';
    gm033.value = '';
});
// 2.5 glass empty
function glassEMT3G() {
    var baseAGlassMt3 = parseFloat(document.getElementById('baseAGlassMt3').value);
    var baseBGlassMt3 = 63
    var baseCGlassMt3 = baseAGlassMt3 * baseBGlassMt3 ;
  
   var rowAGlassMt3 = parseFloat(document.getElementById('baseAGlassMt3').value);
    var rowBGlassMt3 = 7
    var rowCGlassMt3 = rowAGlassMt3 * rowBGlassMt3;

   var rackTotalGlassMt3 = parseFloat(document.getElementById('baseAGlassMt3').value);

    document.getElementById('baseGlassMt3').innerHTML = "You have " + baseCGlassMt3 + " Glass 2.5g EMT Bottles." ;
    document.getElementById('rowGlassMt3').innerHTML = "You have " + rowCGlassMt3 + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotalGlassMt3').innerHTML = rackTotalGlassMt3;
    document.getElementById('glassTotalMt3').innerHTML = baseCGlassMt3;

} 
const clearGlassMt3 = document.getElementById('clearGlassMt3');
clearGlassMt3.addEventListener('click', function handleClick(e){
    e.preventDefault();//<--- prevents page reload

    const gm301 = document.getElementById('baseAGlassMt3');
    const gm303 = document.getElementById('baseGlassMt3').innerHTML = '';
    const gm3033 = document.getElementById('rowGlassMt3').innerHTML = '';

    gm301.value = '';
    gm303.value = '';
    gm3033.value = '';
});

// half liters 
function count16Pet() {
    var baseA16 = parseFloat(document.getElementById('baseA16').value);
    var baseB16 = 84
    var baseC16 = baseA16 * baseB16;

    var bottleTotal16 = baseC16 * 24
  
   var rowA16 = parseFloat(document.getElementById('baseA16').value);
    var rowB16 = 6
    var rowC16 = rowA16 * rowB16;

   var rackTotal16 = parseFloat(document.getElementById('baseA16').value);

    document.getElementById('base16').innerHTML = "You have " + baseC16 + " PET Half Liter Cases" ;
    document.getElementById('row16').innerHTML = "You have " + rowC16 + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotal16').innerHTML = rackTotal16;
    document.getElementById('total16').innerHTML = baseC16;
    document.getElementById('bottle16').innerHTML = bottleTotal16

} 
const clear16 = document.getElementById('clear16');
clear16.addEventListener('click', function handleClick(e){
    e.preventDefault();//<--- prevents page reload

    const pet16a = document.getElementById('baseA16');
    const pet16b = document.getElementById('base16').innerHTML = '';
    const pet16c = document.getElementById('row16').innerHTML = '';

pet16a.value = '';
pet16b.value = '';
    pet16c.value = '';
});

// 10oz PET 
function count10Pet() {
    var baseA10 = parseFloat(document.getElementById('baseA10').value);
    var baseB10 = 120
    var baseC10 = baseA10 * baseB10

    var bottleTotal10 = baseC10 * 24
  
   var rowA10 = parseFloat(document.getElementById('baseA10').value);
    var rowB10 = 8
    var rowC10 = rowA10 * rowB10;

   var rackTotal10 = parseFloat(document.getElementById('baseA10').value);

    document.getElementById('base10').innerHTML = "You have " + baseC10 + " PET 10oz Cases" ;
    document.getElementById('row10').innerHTML = "You have " + rowC10 + " Layers.";
    //total racks and bottles in table
    document.getElementById('rackTotal10').innerHTML = rackTotal10;
    document.getElementById('total10').innerHTML = baseC10;
    document.getElementById('bottle10').innerHTML = bottleTotal10

} 
const clear10 = document.getElementById('clear10');
clear10.addEventListener('click', function handleClick(e){
    e.preventDefault();//<--- prevents page reload

    const pet10a = document.getElementById('baseA10');
    const pet10b = document.getElementById('base10').innerHTML = '';
    const pet10c = document.getElementById('row10').innerHTML = '';

pet10a.value = '';
pet10b.value = '';
pet10c.value = '';
});

//update textbox with click event so new value can be copied to clipboard.
const updateC = document.getElementById('countC');
updateC.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseCCrystal = document.getElementById('crystalTotal').innerHTML
    baseCCrystal = baseCCrystal;
    
    var rackTotalCrystal =  document.getElementById('rackTotalCrystal').innerHTML 
    rackTotalCrystal = rackTotalCrystal;

    document.getElementById('textBoxC').value = ' 5g CFD full racks: ' + rackTotalCrystal  + ' -- 5g CFD full bottles: ' +  baseCCrystal + ' --';

});
function copyC(){

    var val = document.getElementById('textBoxC');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};
//update textbox with click event so new value can be copied to clipboard.
const updateP = document.getElementById('countP');
updateP.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseCPrimo = document.getElementById('primoTotal').innerHTML
    baseCPrimo = baseCPrimo;
    
    var rackTotalPrimo =  document.getElementById('rackTotalPrimo').innerHTML 
    rackTotalPrimo = rackTotalPrimo;

    document.getElementById('textBoxP').value = ' 5g primo full racks: ' + rackTotalPrimo  + ' -- 5g primo full bottles: ' +  baseCPrimo + ' --';

});
function copyP(){

    var val = document.getElementById('textBoxP');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};
//update textbox with click event so new value can be copied to clipboard.
const updateS = document.getElementById('countS');
updateS.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseCSpring = document.getElementById('springTotal').innerHTML
    baseCSpring = baseCSpring;
    
    var rackTotalSpring =  document.getElementById('rackTotalSpring').innerHTML 
    rackTotalSpring = rackTotalSpring

    document.getElementById('textBoxS').value = ' 5g spring full racks: ' + rackTotalSpring  + ' -- 5g spring full bottles: ' +  baseCSpring + ' --';

});
function copyS(){

    var val = document.getElementById('textBoxS');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};
//update textbox with click event so new value can be copied to clipboard.
const updateD = document.getElementById('countD');
updateD.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseCDis = document.getElementById('disTotal').innerHTML
    baseCDis = baseCDis;
    
    var rackTotalDis =  document.getElementById('rackTotalDis').innerHTML 
    rackTotalDis = rackTotalDis

    document.getElementById('textBoxD').value = ' 5g distilled full racks: ' + rackTotalDis  + ' -- 5g distilled full bottles: ' +  baseCDis + ' --';

});
function copyD(){

    var val = document.getElementById('textBoxD');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};
//update textbox with click event so new value can be copied to clipboard.
const update3 = document.getElementById('count3');
update3.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseC3 = document.getElementById('3Total').innerHTML
    baseC3 = baseC3;
    
    var rackTotal3 =  document.getElementById('rackTotal3').innerHTML 
    rackTotal3 = rackTotal3 

    document.getElementById('textBox3').value = ' 3g CFD full racks: ' + rackTotal3  + ' -- 3g CFD full bottles: ' +  baseC3 + ' --';

});
function copy3(){

    var val = document.getElementById('textBox3');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};
//update textbox with click event so new value can be copied to clipboard.
const updateP3 = document.getElementById('countP3');
updateP3.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseC3P0 = document.getElementById('3P0Total').innerHTML
    baseC3P0 = baseC3P0;
    
    var rackTotal3P0 =  document.getElementById('rackTotal3P0').innerHTML 
    rackTotal3P0 = rackTotal3P0 

    document.getElementById('textBoxP3').value = ' 3g Primo+ full racks: ' + rackTotal3P0  + ' -- 3g Primo+ full bottles: ' +  baseC3P0 + ' --';

});
function copyP3(){

    var val = document.getElementById('textBoxP3');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};

//update textbox with click event so new value can be copied to clipboard.
const update5F = document.getElementById('count5F');
update5F.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseCGlass5g = document.getElementById('glassTotal').innerHTML
    baseCGlass5g = baseCGlass5g
    
    var rackTotalGlass5g =  document.getElementById('rackTotalGlass').innerHTML 
    rackTotalGlass5g = rackTotalGlass5g  

    document.getElementById('textBox5F').value = ' 5g glass spring full racks: ' + rackTotalGlass5g  + ' -- 5g glass spring full bottles: ' +  baseCGlass5g + ' --';

});
function copy5F(){

    var val = document.getElementById('textBox5F');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};

//update textbox with click event so new value can be copied to clipboard.
const update25F = document.getElementById('count25F');
update25F.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseCGlass3g = document.getElementById('glassTotal3g').innerHTML
    baseCGlass3g = baseCGlass3g;
    
    var rackTotalGlass3g =  document.getElementById('rackTotalGlass3g').innerHTML 
    rackTotalGlass3g =  rackTotalGlass3g; 

    document.getElementById('textBox25F').value = ' 2.5g glass spring full racks: ' + rackTotalGlass3g  + ' -- 2.5g glass spring full bottles: ' +  baseCGlass3g + ' --';

});
function copy25F(){

    var val = document.getElementById('textBox25F');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};

//update textbox with click event so new value can be copied to clipboard.
const update5M = document.getElementById('count5M');
update5M.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseCGlassMt5 = document.getElementById('glassTotalMt5').innerHTML
    baseCGlassMt5 = baseCGlassMt5
    
    var rackTotalGlassMt5 =  document.getElementById('rackTotalGlassMt5').innerHTML 
    rackTotalGlassMt5 = rackTotalGlassMt5  

    document.getElementById('textBox5M').value = ' 5g glass empty racks: ' + rackTotalGlassMt5  + ' -- 5g glass empty bottles: ' +  baseCGlassMt5 + ' --';

});
function copy5M(){

    var val = document.getElementById('textBox5M');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};

//update textbox with click event so new value can be copied to clipboard.
const update25M = document.getElementById('count25M');
update25M.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseCGlassMt3 = document.getElementById('glassTotalMt3').innerHTML;
    baseCGlassMt3 = baseCGlassMt3
    
    var rackTotalGlassMt3 =  document.getElementById('rackTotalGlassMt3').innerHTML; 
    rackTotalGlassMt3 = rackTotalGlassMt3   

    document.getElementById('textBox25M').value = ' 2.5g glass empty racks: ' + rackTotalGlassMt3  + ' -- 2.5g glass empty bottles: ' +  baseCGlassMt3 + ' --';

});
function copy25M(){

    var val = document.getElementById('textBox25M');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};
//update textbox with click event so new value can be copied to clipboard.
const update16 = document.getElementById('count16Pet');
update16.addEventListener('click',function handleClick(e){
    e.preventDefault();

    var baseC16 = document.getElementById('total16').innerHTML
    baseC16 = baseC16
    
    var rackTotal16 =  document.getElementById('rackTotal16').innerHTML 
    rackTotal16 = rackTotal16    

    document.getElementById('textBox16').value = ' 1/2 liter pallets: ' + rackTotal16  + ' -- 1/2 liters: ' +  baseC16 + ' --';

});
function copy16(){

    var val = document.getElementById('textBox16');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};
// 10oz
const update10 = document.getElementById('count10Pet');
update10.addEventListener('click',function handleClick(e){
    e.preventDefault();
  
var baseC10 = document.getElementById('total10').innerHTML
baseC10 = baseC10

var rackTotal10 =  document.getElementById('rackTotal10').innerHTML;
rackTotal10 = rackTotal10

document.getElementById('textBox10').value = '10oz pallets: ' + rackTotal10 + ' -- 10oz cases: ' + baseC10 + ' --';

});

//copy clipboard so user can send in an email or what ever they need it copied for...
function copy10(){

    var val = document.getElementById('textBox10');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
};



const updateTextBox = document.getElementById('updateTextBox');
updateTextBox.addEventListener('click',function handleClick(e){
    e.preventDefault();

var rc5 = document.getElementById('rackTotalCrystal').innerHTML 
var tc5 = document.getElementById('crystalTotal').innerHTML

var rp5 = document.getElementById('rackTotalPrimo').innerHTML //primo 5g    
var tp5 = document.getElementById('primoTotal').innerHTML

var rs5 =  document.getElementById('rackTotalSpring').innerHTML // spring 5g
var ts5 = document.getElementById('springTotal').innerHTML

var rd5 = document.getElementById('rackTotalDis').innerHTML // distilled 5g  
var td5 = document.getElementById('disTotal').innerHTML

var r3c = document.getElementById('rackTotal3').innerHTML //3g cfd
var t3c =  document.getElementById('3Total').innerHTML

var r3p0 =  document.getElementById('rackTotal3P0').innerHTML // 3g primo
var t3p0 = document.getElementById('3P0Total').innerHTML

var rgf5 = document.getElementById('rackTotalGlass').innerHTML //glass 5g
var tgf5 = document.getElementById('glassTotal').innerHTML

var rgf25 = document.getElementById('rackTotalGlass3g').innerHTML // 2.5 glass
var tgf25 = document.getElementById('glassTotal3g').innerHTML

var rgm5 = document.getElementById('rackTotalGlassMt5').innerHTML //glass empty 5g
var tgm5 =  document.getElementById('glassTotalMt5').innerHTML

var rgm25 = document.getElementById('rackTotalGlassMt3').innerHTML // glass empty 2.5g
var tgm25 = document.getElementById('glassTotalMt3').innerHTML

var r16 = document.getElementById('rackTotal16').innerHTML;  //16oz 
var t16 = document.getElementById('total16').innerHTML;

var r10 = document.getElementById('rackTotal10').innerHTML; //10oz
var t10 = document.getElementById('total10').innerHTML;


document.getElementById('textBox').value = ' Ground Total Date: ' + y + ' --- 5g CFD full racks: ' + rc5 + ' --- 5g CFD full bottles: ' + tc5 + ' --- 5g Primo full racks: ' + rp5 + ' --- 5g Primo full bottles: ' + tp5 + ' --- 5g Spring full racks: ' + rs5 + ' --- 5g Spring full bottles: ' + ts5 + ' --- 5g Distilled racks: ' + rd5 + ' --- 5g Distilled full bottles: ' + td5 + ' --- 3g CFD racks: ' + r3c + ' --- 3g CFD full bottles: ' + t3c + ' --- 3g Primo racks: ' + r3p0 + ' --- 3g Primo full bottles: ' + t3p0 + ' --- 5g Glass racks: ' + rgf5 + ' --- 5g Glass full bottles: ' + tgf5 + ' --- 2.5g Glass racks: ' + rgf25 + ' --- 2.5g Glass full bottles: ' + tgf25 + ' --- 5g Glass empty racks: ' + rgm5 + ' --- 5g Glass empty bottles: ' + tgm5 + ' --- 2.5g Glass empty racks: ' + rgm25 + ' --- 2.5g Glass empty bottles: ' + tgm25 + ' --- .5L cases chep pallets: ' + r16 + ' --- .5L CFD total cases: ' + t16 + ' --- 10z cases chep pallets: ' + r10 + ' --- 10oz CFD total cases: ' +  t10;

});


function copyTable(){

    var val = document.getElementById('textBox');

    val.select()

    navigator.clipboard.writeText(val.value)
    document.getElementById('clipboard').innerHTML = val.value;
    popSound();
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      }); 
}