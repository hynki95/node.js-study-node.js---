
var numarr = [1,23,43];
var numarr1 = numarr.join('=');
var numarr2 = numarr.join('+');

var stringarr = ["a","vdsav","df"];
var stringarr1 = stringarr.join('=');
var stringarr2 = stringarr.join('+');

var numarr3 =  numarr.map(([k, vs,...l]) =>[k,vs,l.join('=')] )
// var stringarr3 = stringarr.map(([k, vs, ...l]) => [k,vs.join('='),l.join('=')]);


console.log(numarr1 +"\n"+ stringarr1)
console.log(numarr2 +"\n"+ stringarr2)
console.log(numarr3 )


