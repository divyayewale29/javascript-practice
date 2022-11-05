async function student1(){
    console.log("My name is Divya")
}
async function student2(){
   console.log("My name is Swaraj")
}

student1();
student2();





async function student1(){
    return "My name is Divya"
}
async function student2(){
   return  "My name is Swaraj"
}

const st1=  student1()
console.log(st1)

const st2=  student2()
console.log(st2)







async function student1(){
    return "My name is Divya"
}
async function student2(){
   return  "My name is Swaraj"
}


async function main(){

const st1=  await student1()
console.log(st1)

const st2= await  student2()
console.log(st2)
}
main();









