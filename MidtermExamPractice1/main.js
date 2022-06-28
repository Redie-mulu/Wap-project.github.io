const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
  ];

const average = [];
// for(let i = 0; i < students.length; i++) {
//     if(students[i].courses.)
// }

function sum(arr){
    return arr.filter(item => item > 20)
    .reduce((accum, current, indeax, arr) => accum + current, 0);
}

// yeah I understand the question one lets do question two
const getNewArray = function (strArray) {
    return strArray.filter(item => item.length > 5 && item.includes('a'));
}