




/**
 * Start array of all the members of a club
 */



const member = [

    [ 'Mizan Rahman', 31, 'LFWF' ],

    [ 'Rahim', 17, 'LFWF' ],

    [ 'Masud Rana', 30, 'LFWF' ],

    [ 'Karim', 45, 'LFWF' ],

    [ 'Khalilur Rahman', 35, 'LFWF' ],

    [ 'Alamin', 15, 'LFWF' ],

    [ 'Jubaier', 38, 'LFWF' ],

    [ 'Monjurul Islam', 27, 'LFWF' ],

    [ 'Jahirul', 300, 'LFWF' ],

    [ 'Ismeail', 34, 'LFWF' ]

]




/**
 * Greeting message
 */



for( let i = 0 ; i < member.length; i++ ){


    if( member[i][1] >= 18 && member[i][1] <= 40 ){
        console.log(`

        Name    : ${ member[i][0] }
        Age     : ${ member[i][1] } years
        Dig     : ${ member[i][2] }
        
        Welcome to lfwf Academy !!!
        --------------------
        
        `);


    }else{
        console.log(`
        
        Name    : ${ member[i][0] }
        Age     : ${ member[i][1] } years
        Dig     : ${ member[i][2] }

        
        Sorry, please wait 18 years old !!!
        --------------------
        `);
    }
}




