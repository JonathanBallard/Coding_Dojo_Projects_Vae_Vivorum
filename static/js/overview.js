








function postPassives(){

    var data = {
        passive1 : $('#passive1').val(),
        passive2 : $('#passive2').val(),
        passive3 : $('#passive3').val(),
        passive4 : $('#passive4').val(),
        passive5 : $('#passive5').val(),
        passive6 : $('#passive6').val(),
        passive7 : $('#passive7').val(),
        passive8 : $('#passive8').val(),
        // passive9 : $('#passive9').val(),
        // passive10 : $('#passive10').val(),
        // passive11 : $('#passive11').val(),
        // passive12 : $('#passive12').val(),
        // passive13 : $('#passive13').val(),
        // passive14 : $('#passive14').val(),
        // passive15 : $('#passive15').val(),
        // passive16 : $('#passive16').val(),
        // passive17 : $('#passive17').val(),
        // passive18 : $('#passive18').val(),
        // passive19 : $('#passive19').val(),
        // passive20 : $('#passive20').val(),

    }


    $.ajax({
        url: "/outputPassives",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data)
    });
    window.location.replace("/dashboard");
}





// when hovering over or clicking the button link to dashboard, then postPassives()



$('#getStats').click(function(){
    location.reload();
})










