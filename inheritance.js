
class parent {
constructor(){
    this.fatherNamwe = "jamal uddin khan" ;  
}

}

class child extends parent{
   
   constructor(Cname){
       super()
       this.name = Cname;
   }
}

 const baby = new child("hasan");

console.log(baby)