$(document).ready(function() {

    $("#montrerDiv").click(function() {

        alert("Le click s'est bien passé");

        $(".test").fadeIn(3000);

    });


    $("#boutonChanger").click(function () {

        $('h1').css('color', 'red');
        $('#paragrapheVide').html("Bonjour tout le monde je suis un nouveau message.");

        var nom = $('#nomUtilisateur').val();
        $('#salutation').html('Bonjour ' + nom);

    });

});