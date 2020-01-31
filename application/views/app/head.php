<!DOCTYPE html>
<script src="/assets/js/jquery.min.js"></script>
<script type="module" src="/assets/js/common.js"></script>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0,minimal-ui">
    <title>Moonly - Planificateur de voyage</title>
    <meta content="App for Moonly" name="description">
    <meta content="Romuald Detrait" name="author">



    <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/css/style.css" rel="stylesheet" type="text/css">
    <script>
        var theme = localStorage.getItem("theme");
        if (theme != null) {
            $('head').append('<link href="' + theme + '" rel="stylesheet" type="text/css" class="theme">');
        } else {
            $('head').append('<link href="/assets/css/light.css" rel="stylesheet" type="text/css" class="theme">');
        }
    </script>
    <link rel="shortcut icon" href="/assets/img/favicon.png">

    <link href="/assets/css/metismenu.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/css/icons.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin="">
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
            integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
            crossorigin=""></script>

    <link rel="stylesheet" href="https://themesbrand.com/veltrix/layouts/plugins/chartist/css/chartist.min.css">
    <script src="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>


</head>
<body ><!-- Begin page -->