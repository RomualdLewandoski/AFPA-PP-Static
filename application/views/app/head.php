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
    <script src="/assets/js/afpa.js"></script>
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <script>
        if ($.cookie("css")) {
            var txt1 = '<link href="' + $.cookie("css") + '" rel="stylesheet" type="text/css" class="theme">';
            console.log(txt1);
            $('head').append(txt1);   // Append new elements
        }
    </script>
    <link rel="shortcut icon" href="/assets/img/favicon.png">

    <link href="/assets/css/metismenu.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/css/icons.css" rel="stylesheet" type="text/css">
    <link href="/assets/css/style.css" rel="stylesheet" type="text/css">


</head>
<body><!-- Begin page -->