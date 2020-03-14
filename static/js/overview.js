
    // determine player level
var levelChart = [
    0,       //Level 0
    300,
    600,
    1000,
    1400,
    1900,
    2400,
    2900,
    3500,
    4100,
    4700,       //Level 10
    5300,
    6000,
    6700,
    7500,
    8300,
    9100,
    10000,
    11000,
    12000,
    13100,      //Level 20
    16300,
    20000,
    25800,
    31600,
    38800       //Level 25, Max
]



var abil1 = $('#abil1').text();
var abil2 = $('#abil2').text();
var abil3 = $('#abil3').text();
var abil4 = $('#abil4').text();
var abil5 = $('#abil5').text();
var abil6 = $('#abil6').text();
var abil7 = $('#abil7').text();
var abil8 = $('#abil8').text();

var pointsSpent = abil1+abil2+abil3+abil4+abil5+abil6+abil7+abil8;

var availablePoints = $('#abilPoints').text();

var abil1Max = 10;
var abil2Max = 10;
var abil3Max = 10;
var abil4Max = 10;
var abil5Max = 10;
var abil6Max = 10;
var abil7Max = 10;
var abil8Max = 20;

$('#abil1Max').text(abil1Max);
$('#abil2Max').text(abil2Max);
$('#abil3Max').text(abil3Max);
$('#abil4Max').text(abil4Max);
$('#abil5Max').text(abil5Max);
$('#abil6Max').text(abil6Max);
$('#abil7Max').text(abil7Max);
$('#abil8Max').text(abil8Max);


function increaseAbil(abilNum, abilMax){
    var ele = "";
    var abilBtn = "";
    var current = 0;
    var increase = 0;
    ele = "#abil" + abilNum;
    abilBtn = "#passive" + abilNum + "Buy";
    current = parseInt($(ele).text());

    if(current < abilMax && availablePoints > 0){
        increase = current + 1;
        $(ele).text(increase);
        availablePoints--;
    }
    if(current >= abilMax || increase >= abilMax){
        $(abilBtn).attr('class', 'd-none');
    }

    console.log("Increase Abil #" + abilNum + " To: " + increase + "/" + abilMax)
    $('#abilPoints').text(availablePoints);
}

function writeRandomMessage(){

    var message = "";

    var msgArr = [
        "You have survived this round, Stay Toasty young space hero.",
        "You blocked a major shipment of space toast. Alien stomachs are grumbling.",
        "I love the smell of space toast in the morning!",
        "You remember flying toasters from way back when? That's how space toast is made!",
        "Baby Bleeborb did not get space toast this week due to your efforts.",
        "Your family is (probably) waiting for you, redouble your efforts!",
        "When the Aliens invaded Earth, they attempted to target the brightest minds to prevent any resistance. They invaded the libraries first, but were forced to rethink their plans when they discovered that no-one read hard-copy books anymore.",
        "The Aliens swept through our defenses like they weren't even there. Our technology was no match for this vicious toaster-based assault.",
        "Post-Invasion many of the surviving humans sought shelter underground, forming small communities founded on the ideas of equality of man, peace, and kindness to all living things. These communities quickly collapsed due to infighting about who was more equal, peaceful, and kind.",
        "No-one knows what first drew the Aliens to Earth, but we suspect it was our raspberry jam."
    ];

    var random = Math.floor(Math.random() * msgArr.length);
    message = msgArr[random];


    $('#randomMsg').text(message);
}


function postPassives(){

    var data = {
        p1 : abil1,
        p2 : abil2,
        p3 : abil3,
        p4 : abil4,
        p5 : abil5,
        p6 : abil6,
        p7 : abil7,
        p8 : abil8,
        // passive9 : $('#abil9').text(),
        // passive10 : $('#abil10').text(),
        // passive11 : $('#abil11').text(),
        // passive12 : $('#abil12').text(),
        // passive13 : $('#abil13').text(),
        // passive14 : $('#abil14').text(),
        // passive15 : $('#abil15').text(),
        // passive16 : $('#abil16').text(),
        // passive17 : $('#abil17').text(),
        // passive18 : $('#abil18').text(),
        // passive19 : $('#abil19').text(),
        // passive20 : $('#abil20').text(),

    }


    $.ajax({
        url: "/outputPassives",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data)
    });
    window.location.replace("/dock");
}



//get xp, check levelChart, write percent of xp to next level
// var newXp = $('#xp').text();
var prevXp = $('#totalXp').text();
var totalXp = Math.floor(parseInt(prevXp));
var newLevel = 0;
var nextLevel = 1;
var xpMissing = 0;
var xpBetween = 0;
var xpPercent = 0;
for(var i = 0; i < levelChart.length; i++){
    if(totalXp >= levelChart[i]){
        newLevel = i;
        nextLevel = i+1;
    }
}
xpBetween = levelChart[nextLevel] - levelChart[newLevel];
xpMissing = levelChart[nextLevel] - totalXp;
xpPercent = Math.floor((xpMissing / xpBetween) * 100);


$('#xpBarText').text(totalXp);
$('.xpProgressBar').attr('aria-valuenow', xpPercent);
$('.xpProgressBar').css('width',xpPercent + '%');



$('#passive1Buy').click(function(){
    increaseAbil(1,abil1Max);
    abil1 = $('#abil1').text();
});
$('#passive2Buy').click(function(){
    increaseAbil(2,abil2Max);
    abil2 = $('#abil2').text();
});
$('#passive3Buy').click(function(){
    increaseAbil(3,abil3Max);
    abil3 = $('#abil3').text();
});
$('#passive4Buy').click(function(){
    increaseAbil(4,abil4Max);
    abil4 = $('#abil4').text();
});
$('#passive5Buy').click(function(){
    increaseAbil(5,abil5Max);
    abil5 = $('#abil5').text();
});
$('#passive6Buy').click(function(){
    increaseAbil(6,abil6Max);
    abil6 = $('#abil6').text();
});
$('#passive7Buy').click(function(){
    increaseAbil(7,abil7Max);
    abil7 = $('#abil7').text();
});
$('#passive8Buy').click(function(){
    increaseAbil(8,abil8Max);
    abil8 = $('#abil8').text();
});





$('#getStats').click(function(){
    location.reload();
})

$('#outputPassivesButton').click(function(){

    postPassives();

})



writeRandomMessage();

// LAST THING, Update Total Stats
var curScore = parseInt($('#score').text());
// var totScore = parseInt($('#totalScore').text());
// var totalScore = totScore + curScore;
$('#score').text(curScore);
// $('#totalScore').text(totalScore);
// var totalMoney = parseInt($('#totalMoney').text()) + parseInt($('#money').text());
// $('#totalMoney').text(totalMoney);
// var totalXp = parseInt($('#totalXp').text()) + parseInt($('#xp').text());
// $('#totalXp').text(totalXp);
$('#level').text(newLevel);










