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

/*function getstudent(stud,subj){
    let get=student[stud];
    if (get== !object && get[subj] !=='object'){
        return' not found';
    }else{
        return student[stud];
    }
}
   */ 

  
    function result(stud,subj){
       
        /*if (subject[subj]==undefined)*/ if(student[stud]==undefined) {
            console.log(`your research not found`);
            } else {
                var st=student[stud];
                if(st[subj].points<subject[subj].passRate){
                    console.log(stud +' your are fail');
                }else{console.log(stud +" " + 'your are pass');}
                
            }
            console.log('')
    }
//console.log(getstudent('davi'));
console.log(result('david','java'));