var template = '<nav class="site-header fixed-top py-1 navbar " id="frontPage">\n' +
    '    <div class="container-fluid">\n' +
    '        <div class="row w-100">\n' +
    '            <div class="col-12 col-md-2">\n' +
    '                <a class="py-2 d-lg-none" href="#" class="dropdown-toggle" data-toggle="collapse" data-target="#navbarSupportedContent1"\n' +
    '                   style=" display: flex; align-items:center;">\n' +
    '                    <i class="fa fa-bars d-inline-block"></i>\n' +
    '                    <span style="padding-left: 5px;">MOONLY</span>\n' +
    '                </a>\n' +
    '                <div class="collapse navbar-collapse" id="navbarSupportedContent1">\n' +
    '\n' +
    '                    <!-- Links -->\n' +
    '                    <ul class="navbar-nav mr-auto">\n' +
    '                        <li class="nav-item">\n' +
    '                            <a class="py-2 nav-link " href="../../../../application/views/front#features">Fonctionnalités</a>\n' +
    '                        </li>\n' +
    '                        <li class="nav-item">\n' +
    '                            <a class="py-2 nav-link  " href="../../../../application/views/front#price">Prix</a>\n' +
    '                        </li>\n' +
    '                        <li class="nav-item">\n' +
    '                            <a class="py-2 nav-link  " href="../../../../application/views/front#talking">Retours clients</a>\n' +
    '                        </li>\n' +
    '                        <li class="nav-item">\n' +
    '                            <a class="py-2 nav-link" href="../../../../application/views/front#about">A propos</a>\n' +
    '                        </li>\n' +
    '                        <li class="nav-item">\n' +
    '                            <a class="py-2 nav-link  " href="/login" id="loginNavMobile">Inscription / Connexion</a>\n' +
    '                        </li>\n' +
    '                    </ul>\n' +
    '                    <!-- Links -->\n' +
    '\n' +
    '                </div>\n' +
    '                <!-- Collapsible content -->\n' +
    '\n' +
    '                <a class="py-2 d-none d-lg-inline-block" href="../../../../application/views/front" style=" display: flex;\n' +
    '   align-items:center;"><img src="/assets/img/logo.png" width="10%" height="auto" class="d-none d-lg-inline-block"\n' +
    '                    ><span style="padding-left: 5px;">MOONLY</span></a>\n' +
    '            </div>\n' +
    '            <div class="col-md-3"></div>\n' +
    '            <div class="col-md-7 " style=" display: flex; justify-content: space-between; vertical-align: middle; ">\n' +
    '                <a class="py-2 d-none d-lg-inline-block " href="../../../../application/views/front#features">Fonctionnalités</a>\n' +
    '                <a class="py-2 d-none d-lg-inline-block " href="../../../../application/views/front#price">Prix</a>\n' +
    '                <a class="py-2 d-none d-lg-inline-block " href="../../../../application/views/front#talking">Retours clients</a>\n' +
    '                <a class="py-2 d-none d-lg-inline-block " href="../../../../application/views/front#about">A propos</a>\n' +
    '                <a class="py-2 d-none d-lg-inline-block " href="%loginurl%" id="loginNav">%login%</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '</nav>\n' +
    '\n' +
    '<a href="#" id="scroll" style="display: none;"><span></span></a>';


export default function () {
    return {
      view: template
    };
}
