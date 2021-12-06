





/**
 * Publish CGPA and final grade in the final result
 */


const std =[

    [ 101, 'Mizan Rahman', 'Mofizaul Islam', 'Bibi kawchara', 'Noakhali', 70, 75, 80, 85, 90, 60 ],

    [ 102, 'Rahim', 'Shofique', 'Fatema', 'chittagong', 70, 75, 80, 85, 90, 60 ],

    [ 103, 'Masud Rana', 'Mostafizaur', 'Monena Begum', 'Dhaka', 70, 75, 80, 85, 90, 60 ],

    [ 104, 'Karim', 'Kamal', 'Chittagong', 'Noakhali', 70, 75, 80, 85, 90, 60 ],

    [ 105, 'Khalilur Rahman', 'Khorshed Alom', 'Khadija', 'Dhaka', 70, 75, 80, 85, 90, 60 ],

    [ 106, 'Alamin', 'Shikder', 'Rekha', 'Dhaka', 70, 75, 80, 85, 90, 60 ],

    [ 107, 'Jubaier', 'Neamot Ullah', 'Sahana', 'Chittagong', 70, 75, 80, 85, 90, 60 ],

    [ 108, 'Monjurul Islam', 'Monirul islam', 'Monora', 'Noakhali', 70, 75, 80, 85, 90, 60 ],

    [ 109, 'Jahirul', 'Iqbal', 'Momana', 'Dhaka', 70, 75, 80, 85, 90, 60 ],

    [ 110, 'Ismeail', 'Siraj', 'Johura', 'Noakhali', 70, 75, 80, 85, 90, 60 ],

]



/**
 * Publish CGPA and final grade
 */


for( let i = 0; i < std.length; i++ ){

    let bn  = std[i][5];
    let en  = std[i][6];
    let mt  = std[i][7];
    let s   = std[i][8];
    let ss  = std[i][9];
    let rel = std[i][10];

    let total_mark = ( bn+en+mt+s+ss+rel );

    let result = new Result();

    console.log(`

    Roll    :  ${std[i][0]}
    Name    :  ${std[i][1]}
    Name    :  ${std[i][2]}
    Name    :  ${std[i][3]}
    Name    :  ${std[i][4]}
    

    -------------------------------

      SUBJECT                    Marks                      GPA                             GRADE
       
       Bangla                    ${bn}                  ${result.gpa(bn)}                ${result.grade(bn)}  
       English                   ${en}                  ${result.gpa(en)}                ${result.grade(en)}
       Math                      ${mt}                  ${result.gpa(mt)}                ${result.grade(mt)}
       Science                   ${s}                   ${result.gpa(s)}                 ${result.grade(s)}
       Social Science            ${ss}                  ${result.gpa(ss)}                ${result.grade(ss)}
       Religion                  ${rel}                 ${result.gpa(rel)}               ${result.grade(rel)}

     -------------------------------------------------------------------------------------------------------------  

         Your Total Mark : ${total_mark} & ${result.cgpa(result.gpa(bn),result.gpa(en),result.gpa(mt),result.gpa(s),result.gpa(ss),result.gpa(rel))}

    `);
    
   
};




