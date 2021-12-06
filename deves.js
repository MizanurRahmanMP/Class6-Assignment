



/**
 * Data for Developer
 */


 const devs = [
    [ 'Ashraful Hoque', 30, 'MERN stack Developer', 'Dhaka', 1200 ],

    [ 'Maruful Hoque', 'age: 27 years old', 'Laravel stack Developer', 'Chittagong', 1500],

    [ 'Jillur Rahman', 25, 'Django stack Developer', 'Dinajpur', 1000 ],

    [ 'Mizanur Rahman', 31, 'MERN stack Developer', 'Noakhali', 2000 ],

    [ 'Nazmul Huda', 40, 'java Developer', 'Dhaka', 800 ],

    [ 'Sheik shihab shahariar Somrat ', 29, 'GoLang Developer', 'Chittagong', 1200 ],

    [ 'Sabbir Hossain', 23, 'WordPress Developer', 'Rongpur', 2000 ],

    [ 'Naimul Hasan', 25, 'GoLang Developer', 'Kustia', 1500 ],

    [ 'Rezwan Ahmed ', 40, 'java Developer', 'Comilla', 1400 ],

    [ 'Mohammad Sujon ', 31, 'WordPress Developer', 'Jashor', 2000 ],


 ]






/**
 * Find specific students
 */

let total = 0;

for( let i = 0; i < devs.length; i++ ){

    console.log(`
    
    Name        :  ${ devs[i][0] };
    Age         :  ${ devs[i][1] } yers old.
    Skill       :  ${ devs[i][2] };
    Address     :  ${ devs[i][3] };
    salarry     :  ${ devs[i][4] } Dolar.
    
    `);

    total = total + devs[i][4];
    
}



/**
 * Total income
 */



console.log(` Every Developer per month salary is $${total} Dolar. `);






