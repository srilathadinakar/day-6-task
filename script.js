//1. Movie
// a.
class Movie{
    constructor(title,studio,rating){
         this.title = title;
         this.studio = studio;
         this.rating = rating;
    }
 }
 const movie = new Movie("leo","7-screen","8");
 console.log(movie.title,movie.studio,movie.rating);

 //b.
 class Movie1{
    constructor(title,studio,rating="PG"){
         this.title = title;
         this.studio = studio;
         this.rating = rating;
    }
 }
 const movie1 = new Movie1("leo","7-screen");
 console.log(movie1.title,movie1.studio,movie1.rating);
 
 //d.
 class Movie2{
    constructor(title,studio,rating){
         this.name = title;
         this.studio = studio;
         this.rating = rating;
    }
 }
 const movie2 = new Movie2("Casino Royale","Eon Productions","PG­13");
 console.log("Title:"+movie2.name,"studio:"+movie2.studio,"rating:"+movie2.rating);

//c.
 const movie3 = new Movie("aaa","1-screen","PG12");
 const movie4 = new Movie("bbb","2-screen");
 const movie5 = new Movie("ccc","3-screen","Pg134");
 const movie6 = new Movie("ddd","4-screen");
 const movie7 = new Movie("eee","5-screen");
 


//2. Circle
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(n){
        this.radius=n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color=c;
    }
    get toString(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`;
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2);
    }
    get circumferencecir(){
        return 2*Math.PI*this.radius;
    }
}
let cir=new Circle(1.0,"red");
console.log(cir);
console.log(cir.radius,cir.color);

console.log(cir.toString);

console.log(cir.area);
console.log(cir.circumferencecir);

cir.Radius=3.5;
console.log(cir.Radius);
cir.Color="Pink";
console.log(cir.Color);

console.log(cir.area);
console.log(cir.circumferencecir);


//3. Person
class Person{
    constructor(name,education,age,gender,maritalstatus, contact,email){
        this.name = name;
        this.education=education;
        this.age = age;
        this.gender = gender;
        this.maritalstatus = maritalstatus;
        this.contact = contact;
        this.email = email;
    }
}
const perinfo=new Person("Srilatha","B.Tech",36,"F","Married",987654321,"abcd@gmail.com");
//console.log(perinfo);
console.log("Name:"+perinfo.name+" "+"Education:"+perinfo.education+" "+"Age:"+perinfo.age+" "+"Gender:"+perinfo.gender+" "+"Marital Status:"+perinfo.maritalstatus+" "+"Contact:"+perinfo.contact+" "+"email:"+perinfo.email);


//4.Uber
class Uber{
    constructor(kilometer,price){
         this.kilometer = kilometer;
         this.price = price;
    }    
    
    set KM(n){
        this.kilometer=n*this.price;
    }
    get KM(){
        return this.kilometer;
    }
    
}
 const uberprice=new Uber(1,50);
 console.log(uberprice);
 uberprice.KM=10;
 console.log(uberprice.KM);
