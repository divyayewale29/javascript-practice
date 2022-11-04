    const studentsmarks={
        "Akanksha": '90%', 
        "Priya" : '80%',
        "Sakshi" : '70%',
        "Neha" : '92%',
        "pihu" : '88%'
    }
    console.log(studentsmarks)
    console.log(studentsmarks["Neha"])



    const data=[ {

        name : "Arnav",
        Age : '20',
        Rollno  :'54'
        
    },
    {

        name : "Pratik",
        Age : '18',
        Rollno  :'29'
        
    },
    {

        name : "Yash",
        Age : '20',
        Rollno  :'30'
        
    }, 
    {

        name : "Viraj",
        Age : '17',
        Rollno  :'55'
        
    }]
     console.log(data[1])
     console.log(data[0]["name"])



     data.map((Data)=>{
        if(Data['Rollno']%2==0){
            console.log("RollNo" + ` ${Data['Rollno']} is passed `);
        }
        else{
            console.log("RollNo" + ` ${Data['Rollno']} is failed`);
        }

     })


    