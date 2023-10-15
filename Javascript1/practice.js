
// var    (it is possible)
// let   (Identifier 'name' has already been declared) 
// constant   (Identifier 'x' has already been declared)
// boolean (true or false)

// var name="naveen"
// name="shyam"
// console.log(name)

// var name1="naveen"
// var name="shyam"
// total=(name1+" "+name)
// console.log(total)

// var name="naveen"
// var name="shyam"
// total=(name+" "+name)
// console.log(total)

// var number1=9696
// var number="naveen"
// total=(number1+"                "+    number)
// console.log(total)

// let

// let name="naveen"
// let name="shyam"
// total=(name+" "+name)
// console.log(total)

// constant

// const x=5
// const y=6
// total=x+y
// console.log(total)

// const x=5
// const y=6
// total=x+y
// console.log(total)

// const x=5
// const x=6
// total=x+x
// console.log(total)



// let x = 5;
// let y = 5;
// let z = (x+y)
// console.log(z)
// console.log(typeof(z))



// let x = "true";
// let y = "false";
// total=x+y
// console.log(typeof(total))

// empty value
// let x=""
// let y="0"
// console.log(x.typeof(x))
// console.log(y.typeof(y))

// single and double quotations

// var name="my name s.naveen working professional's"
// var name1='my name s.naveen working professional"s'
// console.log(name)
// console.log(name1)

// var name="my name s.naveen working 'professional's"
// var name1='my name s.naveen "working" professionals'
// var name2="my  "
// var name3="s naveen"
// console.log(name)
// console.log(name1)
// console.log(name.length)
// console.log(name2.length)
// console.log(name3.length)

// var name=("my name s.naveen working \'professional\'s")
// var name1='my name s.naveen \"working\" professionals'
// console.log(name)
// console.log(name.length)
// console.log(name1)


// back tick

// var name=`my name s.naveen working professionals`
// var name1=`my name s.naveen "working" professionals`
// console.log(name)
// console.log(typeof(name1))


// string length

// var name=("my name s.naveen working professionals")
// console.log(name.length)

// slice (it is comes from after given number)

// let text="Apple, banana, kiwi";
// let part=text.slice(4,15)
// let part=text.slice(-1)
// let part=text.slice(-4)
// console.log(part)

// sub string  (it is count from 1)
//  let str="naveen shyam raju"
//  let part=str.substring(7,15)
//  console.log(part)

// let str="naveen shyam raju"
// let part1=str.slice(5,15)
// let part2=str.substr(7,15)
// console.log(part1.part2)

// console.log(part1)
// console.log(part2)



// replace and replace all

// let text="i am a bad boy"
// const text2=text.replace("bad","good")
// console.log(text2)

// var name="naveen shyam shyam shyam shyam shyam"
// var name2=name.replaceAll("shyam","naveen")
// console.log(name2)

// var name="naveen shyam shyam shyam shyam shyam"
// var name2=name.replace(/shyam/g,"naveen")
// console.log(name2)



// i=case sensitive

// let text="i am a bad boy" 
// const text2=text.replace(/Bad/i,"good")
// console.log(text2)

// g=global

// let text="i am a bad boy bad boy bad boy bad boy" 
// const text2=text.replace(/bad/g,"good")
// console.log(text2)

//ig

// let text1="i am a bad boy bad boy bad boy bad boy" 
// const text3=text1.replace(/Bad/ig,"good")
// console.log(text3)

// uppercase and lowercase
// let text1="Hello World"
// let text2="HELLO WORLD"
// let text3=text1.toUpperCase();
// let text4=text2.toLowerCase();
// console.log((text3),text4)
// console.log(text4)

// concat (concat means adding)

// let text1="hello"
// let text2="world"
// let text3=text2.concat(" "+"i am naveen")
// console.log((text1),text3)

// let text4=text1+" "+"india"+" "+text2
// console.log(text4)


// trim  (remove the spaces)
// let email="            sdsdjfjnlnjjjj@gmail.com"
// newEmail1=email.trimStart()
// newEmail2=email.trimEnd()
// console.log(email)
// console.log(newEmail1)
// console.log(newEmail2)

// padding (it is making a zero's or cross(x))

// let number = 1225;
// let text=number.toString()
// let padded = text.padStart(5,"0");
// console.log(padded)

// let AccountNo="8882282889393"
// Starts=AccountNo.padStart(15,"x")
// console.log(Starts)

// let AccountNo="93"
// Starts=AccountNo.padStart(15,"x")
// console.log(Starts)


// output=laptopxxxxxxxx@gmail.com  this is task

// let name1="laptop";
// let name2="@gmail.com";
// name3=name2.padStart(18,"*")
// let num4=name1.concat(name3)
// console.log(num4)
// console.log(name1+name3)

// let name1="laptop";
// let name2="@gmail.com";
// name3=name1.concat(name2.padStart(18,"*"))
// console.log(name3)




// let numb = 5;
// let text1 = numb.toString();
// let padded = text1.padStart(4,"0");
// console.log(padded)

// index of  (index is a position particular name in only one string) start from zero

// let name=("naveen" ,"shyam" ,"raju")--no output in particular string
// let name=("naveen,shyam,raju")---this is shows the output due all names are in one string
// let name=("naveen,shyam,raju")
// console.log(name[6])
// console.log(name[7])

// array start from zero particular string

// let name=["naveen" ,"shyam" ,"raju"]
// let name=("naveen" ,"shyam" ,"raju")
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(typeof(name))

// push adding the last element 

// let allnames=["naveen","shyam","raju"]
// allnames.push("sandhyarani")
// console.log(allnames)

// let allnames1=[]
// let allnames2=[]
// console.log(allnames1)
// console.log(allnames2)

// let allnames1=["Apple ,mango, banana, Pineapple"]
// allnames1.push("juice,fruite,orange")
// console.log(allnames1)

// let allnames1=["Apple ,mango, banana, Pineapple"]
// allnames1.pop()
// allnames1.pop()
// console.log(allnames1)

// pop remove the last element--wrote the names in string
// const allNames=["Apple" ,"mango", "banana", "Pineapple"];
// allNames.pop();
// console.log(allNames)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits)

// unshift adding the first element

// var allNames=("mango,apple,banana")
// console.log(allNames[7])

// let name=("naveen,shyam,raju")
// console.log(name[6])
// console.log(name[7])



// allNames.unshift("laptop")
// console.log(allNames)

// shift remove the last element

// var allNames=["mango","apple","banana"]
// allNames.shift()
// allNames.shift()
// console.log(allNames)


// if and else conditions
// 8>12 or 8<12

// let hours=8
// if (hours<12){
//     console.log("half day")
// }else{
//     console.log("good day")
// }

// 24>12 or 24<12
// 24>12
// var hours1=24
// 12>8 
// var hours=12

// if (hours1>12)
//       {
//     console.log("one day")

// }else if (hours>8){
//     console.log('half day')
// }else{
//     console.log("false")
// }

// let hour=25
// hour=26
// hour=49

// if (hour<12){
//     console.log("good morning")
// } else if(hour<24) {
//     console.log("good afternoon")
// } else if(hour<48){
//     console.log("good evening")

// }else{
//     console.log("good night")
// }
 

// conditional statements  if , else if, else

// if (hour<12){
//     console.log("good morning")
// } else if(hour<24) {
//     console.log("good afternoon")
// } else if(hour<48){
//     console.log("good evening")

// }else{
//     console.log("good night")
// }


// curly brackets in between is called the scope
// curly bracket is available on for, for loop,if , else if, else,function..,

// this is scope-----var is no scope//let have scope//cost also have 

// let x="Naveen"
// if (true){
//     let x="shyam"
//     console.log("block",x)
// }
// console.log("global",x)

// var name="naveen"

// if (true){
//     var name="ramesh"
//     console.log(name)
// }
// console.log(name)

// var name="naveen"
// x=10
// if (x>15){
//     var name="ramesh"
//     console.log(name)
// }
// console.log(name)

// const nam="naveen"
// if(true){
//     const nam="suresh"
//     console.log(nam)
// }
// console.log(nam)

//          scope(scope means curly brackets)
// var     no
// let     yes
// const   yes

// function

// const sum1=(name1)=>{
//     console.log(name1)
// }
// const name1="raju"
// sum1(name1)

// const sum1=(a,b)=>{
//     console.log("addinf",a+b)
// }
// const sum2=(a,b)=>{
//     console.log("sunb",a-b)
// }
// const sum3=(a,b)=>{
//     console.log("multiply",a*b)
// }
// const sum4=(a,b)=>{
//     console.log("division",a/b)
// }
// sum1(5,2)
// sum2(5,3)
// sum3(5,4)
// sum4(5,5)


// const output=(num1,num2,op)=>{
//    if (op=="+"){
//     console.log(num1+num2)
//    }else if (op=="-"){
//     console.log(num1-num2)
//    }else if (op=="*"){
//     console.log(num1*num2)
//    }else if (op=="/"){
//     console.log(num1/num2)
//    }else{
//     console.log("no result")
//    }
// }

// output(5,2,"-")
// output(5,4,"-")
// output(5,2,"*")
// output(10,2,"/")


// let cal=(num1,num2,opp)=>{
//     if (opp=="+"){
//     console.log(num1+num2)
//     }else if (opp=="-"){
//     console.log(num1-num2)
//     }else if (opp=="*"){
//     console.log(num1*num2)
//     }else if (opp=="/"){
//     console.log(num1/num2)
//     }else{
//     console.log("No Results")
//    }
// }


// cal(5,2,"+")
// cal(5,2,"-")
// cal(5,2,"*")
// cal(5,2,"/")


// concatenating array(two string value added only one string)

// const fruites=['Apple','orange']
// const juicenames=['pineapplejuic','mangojuice','orangejuice']
// const totalname=fruites.concat(juicenames)
// console.log(totalname)

// inside scope and outside scope
// let name="shyam"
// x=10
// if(x>11){
//     let name="naveen"
//     console.log("name1",name)
// }
// console.log("name2",name)

// var name="shyam"
// x=10
// if(x>9){
//     var name="naveen"
//     console.log("name1",name)
// }
// console.log("name2",name)

// const name="shyam"
// x=10
// if(x>9){
//     const name="naveen"
//     console.log("name1",name)
// }
// console.log("name2",name)


// console.log("rakesh")
// function first(){
//     console.log("suman")
// function second(){
//     console.log("shyam")
// function third(){
//         console.log("naveen")
//     }
// console.log("rekha")
// third();
// console.log("sneha")
// }
// console.log("varsha")
// second();
// console.log("dikksha")
// }    
// console.log("saraswathi")
// first();
// console.log("sourabh")
// console.log("naveen")

// console.log("apple")
// function first(){
//     console.log("mango")
// function second(){
//     console.log("orange")
// function third(){
//     console.log("pineapple")
//      }
// console.log("bluecolor")
// third();
// console.log("whitecolor")
// }
// console.log("orangecolor")
// second();
// console.log("greencolor")
// }
// console.log("violetcolor")
// first();
// console.log("blackcolor")
 
// september 29 class
// let n=100
// if(n>95){
//     console.log("naveen")
// }if (n>111){
//     console.log("shyam")
// }else{
//     console.log("laptop")
// }

// terinary operator

n=100

n>99?n>95?console.log("yes n is greater then 100"):console.log("yes n is less then 100"):console.log("no")
n>99?n>111?console.log("yes n is greater then 100"):console.log("yes n is less then 100"):console.log("no")
n>101?n>95?console.log("yes n is greater then 100"):console.log("yes n is less then 100"):console.log("no")







