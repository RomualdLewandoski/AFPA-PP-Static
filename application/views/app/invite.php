<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0,minimal-ui">
    <title>Moonly - Planificateur de voyage</title>
    <meta content="App for Moonly" name="description">
    <meta content="Romuald Detrait" name="author">

    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/cookie.js"></script>


    <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/css/style.css" rel="stylesheet" type="text/css">
    <script>
        if ($.cookie("css")) {
            $('head').append('<link href="' + $.cookie("css") + '" rel="stylesheet" type="text/css" class="theme">');
        } else {
            $('head').append('<link href="/assets/css/light.css" rel="stylesheet" type="text/css" class="theme">');
        }
    </script>
    <link rel="shortcut icon" href="/assets/img/favicon.png">

    <link href="/assets/css/metismenu.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/css/icons.css" rel="stylesheet" type="text/css">
    <link href="/assets/css/dark.css" rel="stylesheet" type="text/css">
    <style>
        html, body{
            height: 100%!important;
        }
        .h-35 {
            height: 35%;
        }
        .h-40{
            height: 40%;
        }
        .card{
            margin-bottom: 0px!important;
        }
    </style>
</head>
<body ><!-- Begin page -->
<div class="container-fluid h-100 d-none d-md-block">
    <div class=" d-md-flex h-35">
        <a href="/" class="logo text-white mt-5 ml-2">MOONLY <img src="/assets/img/logo.png" width="5%" height="auto" style="vertical-align: top"></a>
    </div>
    <div class="row h-40 ">
        <div class="col-md-4 offset-md-2">
            <div class="card h-100">
                <div class="card-body text-center">
                    <?php
                    function get_gravatar($email, $s = 80, $d = 'mp', $r = 'g', $img = false, $atts = array())
                    {
                        $url = 'https://www.gravatar.com/avatar/';
                        $url .= md5(strtolower(trim($email)));
                        $url .= "?s=$s&d=$d&r=$r";
                        if ($img) {
                            $url = '<img src="' . $url . '"';
                            foreach ($atts as $key => $val)
                                $url .= ' ' . $key . '="' . $val . '"';
                            $url .= ' />';
                        }
                        return $url;
                    }

                    ?>
                    <img src="<?php echo get_gravatar("mineswordcraft@gmail.com"); ?>" alt="user"
                         class="rounded-circle mb-5 mt-2">

                    <h5 class="font-16 text-uppercase mt-0 text-white-50">Romuald Detrait t'invite a rejoindre : </h5>
                    <br>
                    <h2 class="font-30 text-uppercase mt-0 text-white-50">Voyage a rome</h2>
                    <button class="mt-4 btn btn-lg btn-primary">Rejoindre le projet</button>
                </div>
            </div>
        </div>
    </div>
    <div class="d-md-flex h-25"></div>

</div>
<div class="card h-100 d-sm-block d-md-none d-lg-none d-xl-none">
        <div class="card-body text-center h-100">
            <div class="mt-5 h-25">
                <a href="/" class="logo text-white  mb-5 ml-2">MOONLY <img src="/assets/img/logo.png" width="5%" height="auto" style="vertical-align: top"></a>
            </div>
            <div class="h-50">
                <img src="<?php echo get_gravatar("mineswordcraft@gmail.com"); ?>" alt="user"
                     class="rounded-circle mb-5 mt-5">

                <h5 class="font-16 text-uppercase mt-0 text-white-50">Romuald Detrait t'invite a rejoindre : </h5>
                <br>
                <h2 class="font-30 text-uppercase mt-0 text-white-50">Voyage a rome</h2>
                <button class="mt-4 btn btn-lg btn-primary">Rejoindre le projet</button>
            </div>

            <div class="h-25"></div>

        </div>

</div>
</body>
</html>