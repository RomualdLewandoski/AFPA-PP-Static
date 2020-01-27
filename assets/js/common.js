$(document).ready(function () {
    const apiUrl = "http://api.localhost/index.php/";
    const frontpages = document.getElementById("frontPage");

    const page = $(location).attr('pathname');

    /** FRONT NAVBAR EDITOR */
    if (frontpages != null) {
        var token = localStorage.getItem('token');
        if (token != null) {
            $.post(
                apiUrl + 'api/token',
                {
                    token: localStorage.getItem('token')
                },
                function (data) {
                    var obj = JSON.parse(data);
                    console.log(obj);
                    if (obj.state == true) {
                        $("#loginNav").attr("href", "/app");
                        $("#loginNavMobile").attr("href", "/app");
                        $("#loginNav").text('Accès application')
                        $("#loginNavMobile").text('Accès application')
                    }
                },
                'text'
            );
        }

    }
    /** END FRONT NAVBAR EDITOR */

    /** REGISTER ACTION AJAX **/

    $('#registerForm').on("submit", function (event) {
        event.preventDefault();
        $.post(
            apiUrl + 'api/register',
            {
                firstName: $("#registerFirstName").val(),
                lastName: $("#registerName").val(),
                email: $('#registerEmail').val(),
                password: $('#registerPassword').val(),
                passwordConf: $('#registerPasswordConf').val(),
                captcha: grecaptcha.getResponse()
            },
            function (data) {
                var obj = JSON.parse(data);
                var err = document.getElementById("errorAjax");
                err.hidden = true;
                var errTxt = $('#errorAjaxTxt');
                if (obj.state == "1") {
                    errTxt.text(obj.error);
                    err.hidden = false;
                } else if (obj.state == 0) {
                    console.log("state0");
                    var token = obj.token;
                    localStorage.setItem('token', token);
                    window.location.replace(obj.redirect);
                } else {
                    errTxt.text("Une erreur interne est survenue");
                    err.hidden = false;
                }
            },
            'text'
        );
    });
    /** END REGISTER ACTION AJAX **/

    /** LOGIN ACTION AJAX **/

    $('#loginForm').on("submit", function (event) {
        event.preventDefault();
        $.post(
            apiUrl + 'api/login',
            {
                email: $('#loginEmail').val(),
                password: $('#loginPassword').val()
            },
            function (data) {
                var obj = JSON.parse(data);
                var err = document.getElementById("errorAjax");
                err.hidden = true;
                var errTxt = $('#errorAjaxTxt');
                if (obj.state == "1") {
                    errTxt.text(obj.error);
                    err.hidden = false;
                } else if (obj.state == 0) {
                    console.log("state0");
                    var token = obj.token;
                    localStorage.setItem('token', token);
                    window.location.replace(obj.redirect);
                } else {
                    errTxt.text("Une erreur interne est survenue");
                    err.hidden = false;
                }
            },
            'text'
        );
    });

    /** END LOGIN ACTION AJAX **/

});