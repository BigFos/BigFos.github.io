$(document).ready(function() {
    // hides everything other than the title, timer and start button on the page.
    function hide() {
        $("#q").hide();
        $("#o1").hide();
        $("#o2").hide();
        $("#o3").hide();
        $("#ans").hide();
        $("#a1").hide();
        $("#a2").hide();
        $("#a3").hide();
        $("#aq").hide();
        $("#r").hide();
        $("#cr").hide();
        $("#rd").hide();        
    }
    // Runs the hide function
    hide();
    setTimeout(q, 1000 * 3);
    function q(){
        $("#q").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(o1, 1000 * 2);
        // setTimeout(timer, 1000 * 7);
    }
    function o1(){
        $("#o1").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(o2, 1000 * 2);
        // setTimeout(timer, 1000 * 7);
    }
    function o2(){
        $("#o2").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(o3, 1000 * 2);
        // setTimeout(timer, 1000 * 7);
    }
    function o3(){
        $("#o3").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(hideq, 1000 * 2);
        // setTimeout(timer, 1000 * 7);
    }
    function hideq(){
        $("#christmas").hide();
        $("#q").hide();
        $("#o1").hide();
        $("#o2").hide();
        $("#o3").hide();
        // setTimeout(hide, 1000 * 7);
        setTimeout(ans, 1000 * 2);
        // setTimeout(timer, 1000 * 7);
    }
    function ans(){
        $("#ans").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(a1, 1000 * 3);
        // setTimeout(timer, 1000 * 7);
    }
    function a1(){
        $("#a1").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(a2, 1000 * 3);
        // setTimeout(timer, 1000 * 7);
    }
    function a2(){
        $("#a2").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(a3, 1000 * 3);
        // setTimeout(timer, 1000 * 7);
    }
    function a3(){
        $("#a3").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(aq, 1000 * 3);
        // setTimeout(timer, 1000 * 7);
    }
    function aq(){
        $("#aq").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(hidea, 1000 * 3);
        // setTimeout(timer, 1000 * 7);
    }
    function hidea(){
        $("#ans").hide();
        $("#a1").hide();
        $("#a2").hide();
        $("#a3").hide();
        $("#aq").hide();
        // setTimeout(hide, 1000 * 7);
        setTimeout(r, 1000 * 2);
        // setTimeout(timer, 1000 * 7);
    }
    function r(){
        $("#r").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(cr, 1000 * 2);
        // setTimeout(timer, 1000 * 7);
    }
    function cr(){
        $("#cr").show();
        // setTimeout(hide, 1000 * 7);
        setTimeout(rd, 1000 * 2);
        // setTimeout(timer, 1000 * 7);
    }
    function rd(){
        $("#rd").show();
        // setTimeout(hide, 1000 * 7);
        // setTimeout(rd, 1000 * 2);
        // setTimeout(timer, 1000 * 7);
    }
    // Setting Variables
    var qT;
    
    // Function to display Question 1
    // function q1() {
    //     $("#q1").show();
    //     qT = setTimeout(q1t, 1000 * 32);
    // }
    // // Function to display Question 2
    // function q2() {
    //     $("#q2").show();
    //     qT = setTimeout(q2t, 1000 * 32);
    // }
    // // Function to display Question 3
    // function q3() {
    //     $("#q3").show();
    //     qT = setTimeout(q3t, 1000 * 32);
    // }
    // // Function to display Question 4
    // function q4() {
    //     $("#q4").show();
    //     qT = setTimeout(q4t, 1000 * 32);
    // }
    // // Function to display Question 5
    // function q5() {
    //     $("#q5").show();
    //     qT = setTimeout(q5t, 1000 * 32);
    // }
    // // Function to display Question 6
    // function q6() {
    //     $("#q6").show();
    //     qT = setTimeout(q6t, 1000 * 32);
    // }
    // // Function to display Question 7
    // function q7() {
    //     $("#q7").show();
    //     qT = setTimeout(q7t, 1000 * 32);
    // }
    // // Function to display Question 8
    // function q8() {
    //     $("#q8").show();
    //     qT = setTimeout(q8t, 1000 * 32);
    // }
    // // Function to display Question 9
    // function q9() {
    //     $("#q9").show();
    //     qT = setTimeout(q9t, 1000 * 32);
    // }
    // // Function to display Question 10
    // function q10() {
    //     $("#q10").show();
    //     qT = setTimeout(q10t, 1000 * 32);
    // }

    // If time runs out for Question 1
    function q1t() {
    	$("#q1").hide();
    	$("#q1t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q2, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 2
    function q2t() {
    	$("#q2").hide();
    	$("#q2t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q3, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 3
    function q3t() {
    	$("#q3").hide();
    	$("#q3t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q4, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 4
    function q4t() {
    	$("#q4").hide();
    	$("#q4t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q5, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 5
    function q5t() {
    	$("#q5").hide();
    	$("#q5t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q6, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 6
    function q6t() {
    	$("#q6").hide();
    	$("#q6t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q7, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 7
    function q7t() {
    	$("#q7").hide();
    	$("#q7t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q8, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    //If time runs out for Question 8
    function q8t() {
    	$("#q8").hide();
    	$("#q8t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q9, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 9
    function q9t() {
    	$("#q9").hide();
    	$("#q9t").show();
    	stop();
        resetTimer();
        $("#countdown").hide();
    	nonAns++
    	setTimeout(hide, 1000 * 7);
        setTimeout(q10, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    }
    // If time runs out for Question 10
    function q10t(){
    	$("#q10").hide();
        $("#q10t").show();
        stop();
        resetTimer();
        $("#countdown").hide();
        nonAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(results, 1000 * 7);
    }
    // If user clicks on correct answer for Question 1
    $("#q1c").on("click", function() {
        $("#q1").hide();
        $("#q1r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q2, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 1
    $(".q1i").on("click", function() {
        $("#q1").hide();
        $("#q1w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q2, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 2
    $("#q2c").on("click", function() {
        $("#q2").hide();
        $("#q2r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q3, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 2
    $(".q2i").on("click", function() {
        $("#q2").hide();
        $("#q2w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q3, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 3
    $("#q3c").on("click", function() {
        $("#q3").hide();
        $("#q3r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q4, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 3
    $(".q3i").on("click", function() {
        $("#q3").hide();
        $("#q3w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q4, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 4
    $("#q4c").on("click", function() {
        $("#q4").hide();
        $("#q4r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q5, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 4
    $(".q4i").on("click", function() {
        $("#q4").hide();
        $("#q4w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q5, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 5
    $("#q5c").on("click", function() {
        $("#q5").hide();
        $("#q5r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q6, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 5
    $(".q5i").on("click", function() {
        $("#q5").hide();
        $("#q5w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q6, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 6
    $("#q6c").on("click", function() {
        $("#q6").hide();
        $("#q6r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q7, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 6
    $(".q6i").on("click", function() {
        $("#q6").hide();
        $("#q6w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q7, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 7
    $("#q7c").on("click", function() {
        $("#q7").hide();
        $("#q7r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q8, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 7
    $(".q7i").on("click", function() {
        $("#q7").hide();
        $("#q7w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q8, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 8
    $("#q8c").on("click", function() {
        $("#q8").hide();
        $("#q8r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q9, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 8
    $(".q8i").on("click", function() {
        $("#q8").hide();
        $("#q8w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q9, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 9
    $("#q9c").on("click", function() {
        $("#q9").hide();
        $("#q9r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q10, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 9
    $(".q9i").on("click", function() {
        $("#q9").hide();
        $("#q9w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(q10, 1000 * 7);
        setTimeout(timer, 1000 * 7);
    });
    // If user clicks on correct answer for Question 10
    $("#q10c").on("click", function() {
        $("#q10").hide();
        $("#q10r").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        correctAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(results, 1000 * 7);
    });
    // If user clicks on an incorrect answer for Question 10
    $(".q10i").on("click", function() {
        $("#q10").hide();
        $("#q10w").show();
        stop();
        resetTimer();
        clearTimeout(qT);
        $("#countdown").hide();
        incorrectAns++
        setTimeout(hide, 1000 * 7);
        setTimeout(results, 1000 * 7);
    });

}); // End of document ready