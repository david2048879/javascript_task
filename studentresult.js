const student={

 david:{
       
    java:{
        points:68,
        teacher:'abc'
    },
    javascript:{
        points:60,
        teacher:'abc'
    }
},
jackson:{
    java:{
        points:75,
        teacher:'abc'
    },
    javascript:{
        points:40,
        teacher:'abc'
    }

}

}

const subject={
    java:{
        passRate: 70,
    },
    javascript:{
        passRate:55,
    }

}



  
var result=(stud,subj)=>{
       
    /**/ if(student[stud]==undefined) {
        console.log('student'+" "+stud +" "+` not found`);
        } else {
            if (subject[subj]==undefined){
                console.log(subj+ ' :'+`this subject not found`);
            }else{
                var st=student[stud];
                if(st[subj].points<subject[subj].passRate){
                    console.log(stud +' your are fail'+" "+ subj);
                }else{console.log(stud +" " + 'your are pass' + " "+ subj);}
                

            }
           
        }
        console.log('')
}
//console.log(getstudent('davi'));
console.log(result('jackson','javasc'));