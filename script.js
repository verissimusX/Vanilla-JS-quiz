//Maybe use a modal window to pop up once the quiz is complete with the score and a few options-> return to quiz or return to homepage

function submitAnswers() {
    let total = 5;
    let score = 0;

    //Get user input
    let selection1 = document.forms["quizForm"]["radio_one"].value
    let selection2 = document.forms["quizForm"]["radio_two"].value
    let selection3 = document.forms["quizForm"]["radio_three"].value
    let selection4 = document.forms["quizForm"]["radio_four"].value
    let selection5 = document.forms["quizForm"]["radio_five"].value

    //Validation

        //TRIED TO DO A LOOP BUT ONLY SOLUTION I COULD FIND IS EVAL() AND THIS IS NOT RECOMMENDED SO I WILL STICK WITH THE LONG WAY.
        // for (i = 1; i <= total; i++) {
        //     if(eval("selection" + i) === null || eval("selection" + i) === "") {
        //         alert(`Please select an answer for question ${i}`)
        //         return false;
        //     }
        // };


        //THE LONG WAY TO CHECK IF EACH QUESTION IS ANSWERED. NOT THE MOST ELEGANT BUT IT IS MUCH SAFER THAN TRYING TO USE .EVAL()
        if(selection1 === null || selection1 === "") {
            alert("Please select an answer for question 1")
            return false;
        }
        if(selection2 === null || selection2 === "") {
            alert("Please select an answer for question 2")
            return false;
        }
        if(selection3 === null || selection3 === "") {
            alert("Please select an answer for question 3")
            return false;
        }
        if(selection4 === null || selection4 === "") {
            alert("Please select an answer for question 4")
            return false;
        }
        if(selection5 === null || selection5 === "") {
            alert("Please select an answer for question 5")
            return false;
        }

        //Setting correct submitAnswers
        const answers = ["option1", "option1", "option1", "option1", "option1",] //need to give these correct names


        //checking answers

        //SAME THING AS ABOVE WITH THE EVAL(). I WANT TO LOOP THROUGH THESE BUT THE SOLUTION I CAME UP WITH IS EVAL() AND IT CAN BE DANGEROUS TO USE SO I AM LEAVING IT OUT.

        // for (i = 1; i <= total; i++) {
        //     if(eval("selection" + i === answers[i - 1])) {
        //         score++;
        //     }
        // }

        if(selection1 === answers[0]) {
            score++;
        }
        if(selection2 === answers[1]) {
            score++;
        }
        if(selection3 === answers[2]) {
            score++;
        }
        if(selection4 === answers[3]) {
            score++;
        }
        if(selection5 === answers[4]) {
            score++;
        }

        // alert(`You scored ${score} out of ${total}`)

        //insert results onto page
        const results = document.getElementById("results");
        results.innerHTML = `You scored ${score} out of ${total}`
        // document.getElementById("results").innerHTML =

return false;
}
