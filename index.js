//Excercise 1
function saturdayFun(activity ='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

//Exercise 2
 mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

//Exercise 3
function wrapAdjective(flair = '*'){
    return function(adjective = 'special'){
        return `You are ${flair}${adjective}${flair}!`;
    };
}
