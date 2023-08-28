

var Name; //string
var today=new Date().getDay()

var number; //num
var variable,c; //num,str
c=23 + 12
Name='salam';
number=1;
//for writing in console//
console.log(Name);
//for writing in docs//
var salam = document.write('salam');
document.write('<br>')
// br tag(html) is used for breaking to a new line//
document.write(c)
// message top of the screen//
window.alert('the site wants an access');
// 'string'--> str //
// 12 --> type=int//
// objects in js are like dictionaries in python//
delete salam;
//var ---- = {key:value}
var object = {age : 13, name : 'mohamad'} //obj
var isequal;

var num2 = 2;
isequal = (number==num2); //bulian
document.write(isequal)
//for writing bulians say name of var after name the var and (var(conditional)var);
// then say document.write(name of var)
var names=[12,13,42]; //array
var ages=new Array('ali','shayan'); //array
names.shift(); //deleting the first array index
ages.unshift(12); //adding a new index to array
names.pop();
names.push('ali');
var Newnames = ages.slice(); //getting a copy from ages
ages.indexOf('ali',0); //index of ali starting from index 0
console.log(names);
// '&' is used for and 
// '|' is used for or
if(1==2 & 3==2)
{
    var salam;
    salam='s';
}
else
{
    document.write('<br><br><br>');
    document.write('false');
} //if and else
today = today-1
switch(today)
{
    case 0:
        today='Monday';
        break;
    case 1:
        today='Tuesday';
        break;
    case 2:
        today='Wednesday';
        break;
    case 3:
        today='Thursday';
        break;
    case 4:
        today='Friday';
        break;
    case 5:
        today='Saturday' ;
        break;  
    case 6:
        today='Sunday';
        break;
    default:
        today='error'
        break;
} 
document.write('<br><br><br>');
document.write('today is:'+today)
var salam=document.write('<input type="text" value="salam" name="title">');



//cheking the day
//'case's are if and elif and defualt is else


//named function

function myfunc(first,second)
{
    var result;
    switch(first,second){
        case first>second:
            result=first;
            break;
        case second>first:
            result=second;
            break;
        case first==second:
            result='equal';
            break;
    }

    return result;
    
}

console.log(myfunc(190,120));
//object constractor
function Person(hair,weight,name,height)
{
    this.hair=hair;
    this.weight=weight;
    this.name=name;
    this.height=height;
}
let per1=new Person('blond',75,'samet',2);
let per2=new Person('black',57,'milad',1.5);
document.write('<br><br>')
document.write(per1.hair)
//for 

//dom
function getinput():
    let getmyid = document.getElementById('#12');
    let myvalue = getmyid.value();
    document.write(myvalue);
