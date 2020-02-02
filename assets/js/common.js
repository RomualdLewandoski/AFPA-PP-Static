import nav from './template/front/nav.js';
import masthead from './template/front/masthead.js';
import features from './template/front/features.js';
import price from './template/front/price.js';
import talking from './template/front/talking.js';
import about from './template/front/about.js';
import foot from './template/front/foot.js';
import ajax from './utils/ajax.js';
import end from "./template/front/end.js";
import login from "./template/front/login.js";


const appPages = document.getElementById("app_pages");
const apiUrl = "http://api.localhost/index.php/";
const siteUrl = "http://localhost/";
/** APP PAGE LOGIN VERIFICATION **/
const app = $('#page');
const page = $('#page').attr('data-page');

/**
 * GENERATION DU CODE HTML ICI
 */



switch (page.toLowerCase()) {
    case "accueil":
        mainPage();
        break;
    case "login":
        loginPage();
        break;
    default :
        console.log("T'es perdu ??");
        break;
}

function mainPage() {
    //todo BELOW COME OUR TOKEN LOGIN CHECK RETURNED IN BOOLEAN nav(ajaxResult)
    app.append(nav().view);
    app.append(masthead().view);
    app.append(features().view);
    app.append(price().view);
    app.append(talking().view);
    app.append(about().view);
    app.append(foot().view);
    app.append(end().view);
}
function loginPage(){
    app.append(nav(true).view);
    app.append(login().view);
    app.append(end().view)
}


function getNav(maNav) {
    return maNav;

}



if (appPages != null) {
    var token = localStorage.getItem('token');
    if (token != null) {
        $.post(
            apiUrl + 'api/token',
            {
                token: localStorage.getItem('token')
            },
            function (data) {
                let obj = JSON.parse(data);
                if (obj.state == true) {
                    console.log("CONNEXION OK");

                }else{
                    window.location.replace(siteUrl+'login');
                }
            },
            'text'
        );
    }else{
        window.location.replace(siteUrl+'login');
    }
}

$(document).ready(function () {


    const frontpages = document.getElementById("frontPage");
    const page = $(location).attr('pathname');
    const featureTemplate = '<div class="%class%">\n' +
        '                <div class="card border-light" style="">\n' +
        '                    <img class="card-img-top" src="%img%" alt="Card image cap">\n' +
        '                    <div class="card-body">\n' +
        '                        <h5 class="card-title">%title%</h5>\n' +
        '                        <p class="card-text">%sub%</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>';
    const ratingsTemplate = '<div class="card">\n' +
        '                <div class="card-body">\n' +
        '                    <div class="row">\n' +
        '                        <div class="col-sm-6"><img src="%img%" width="50%" class="rounded-circle">\n' +
        '                        </div>\n' +
        '                        <div class="col-sm-5 ">\n' +
        '                            <div class="value-set"  data-stars="%star%"></div>\n' +
        '                            <br>\n' +
        '                            <h5 class="card-title">%nom% %prenom%</h5>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <p class="card-text">"%comments%"</p>\n' +
        '                </div>\n' +
        '            </div>';


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
                    let obj = JSON.parse(data);
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
    /** END FRONT NAVBAR EDITOR **/

    /** GET CONFIG ACTION AJAX **/
    if (page == "/" || page == "index.php" || page == "index.php/") {
        $.post(
            apiUrl + 'api/config',
            {},
            function (data) {
                let obj = JSON.parse(data);
                console.log(obj);
                if (obj.state == 1) {
                    console.log("ERROR READING JSON");
                } else {
                    $('#subtitle').text(obj.subtitle);
                    let x;
                    for (x in obj.features) {
                        let feature = obj.features[x];
                        let featureBox = featureTemplate;
                        if (x < 3) {
                            featureBox = featureBox.replace("%class%", "col-md-4 mb-4");
                        } else {
                            featureBox = featureBox.replace("%class%", "col-md-4 mb-4 d-none d-md-block");
                        }
                        featureBox = featureBox.replace("%img%", feature.img);
                        featureBox = featureBox.replace("%title%", feature.title);
                        featureBox = featureBox.replace("%sub%", feature.sub);
                        $('#featureBox').append(featureBox);
                    }
                    //todo load talking here same process has features
                    x = 0;
                    for (x in obj.ratings){
                        let rating = obj.ratings[x];
                        let ratingBox = ratingsTemplate;
                        ratingBox = ratingBox.replace("%img%", rating.img);
                        ratingBox = ratingBox.replace("%star%", rating.stars);
                        ratingBox = ratingBox.replace("%nom%", rating.nom);
                        ratingBox = ratingBox.replace("%prenom%", rating.prenom);
                        ratingBox = ratingBox.replace("%comments%", rating.comments);
                        $('#ratingBlock').append(ratingBox);
                    }


                    $('#countUser').text(obj.users);
                    $('#countProject').text(obj.projects);
                    $('#countCafe').text(obj.cafe);
                    $('#countCode').text(obj.codes);

                    $('.Count').each(function () {
                        var $this = $(this);
                        jQuery({Counter: 0}).animate({Counter: $this.text()}, {
                            duration: 3000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    $(".value-set").each(function () {
                        $(this).stars({value: $(this).data("stars")});
                    });
                    $('.items').slick({
                        dots: true,
                        infinite: true,
                        speed: 800,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    infinite: true,
                                    dots: true
                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }

                        ]
                    });
                }
            },
            'text'
        );
    }
    /** END CONFIG ACTION JAX **/



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