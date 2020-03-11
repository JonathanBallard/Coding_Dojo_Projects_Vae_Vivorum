


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
    console.log("Increase Abil: " + abilNum + '/' + abilMax)
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

    $('#abilPoints').text(availablePoints);
}


function postPassives(){

    var data = {
        passive1 : abil1,
        passive2 : abil2,
        passive3 : abil3,
        passive4 : abil4,
        passive5 : abil5,
        passive6 : abil6,
        passive7 : abil7,
        passive8 : abil8,
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
    window.location.replace("/dashboard");
}



$('#passive1Buy').click(function(){
    increaseAbil(1,abil1Max);
});
$('#passive2Buy').click(function(){
    increaseAbil(2,abil2Max);
});
$('#passive3Buy').click(function(){
    increaseAbil(3,abil3Max);
});
$('#passive4Buy').click(function(){
    increaseAbil(4,abil4Max);
});
$('#passive5Buy').click(function(){
    increaseAbil(5,abil5Max);
});
$('#passive6Buy').click(function(){
    increaseAbil(6,abil6Max);
});
$('#passive7Buy').click(function(){
    increaseAbil(7,abil7Max);
});
$('#passive8Buy').click(function(){
    increaseAbil(8,abil8Max);
});





$('#getStats').click(function(){
    location.reload();
})

$('#outputPassivesButton').click(function(){

    postPassives();

})




