<header class="masthead login"
        style="background: linear-gradient(to bottom, rgba(92, 77, 66, .8) 0, rgba(92, 77, 66, .8) 100%), url(https://picsum.photos/300/200/?blur=2) no-repeat; background-size: 100% 100%; ">
    <div class="container-fluid h-100">
        <div class="row h-10 text-white" style="padding-top: 50px;">
            <div class="col-md-3 ">
                <a href="/">
                    <h3><i class="fa fa-arrow-alt-circle-left"></i> Retour </h3>
                </a>
            </div>
        </div>
        <div class="alert alert-danger fade show" role="alert" id="errorAjax" hidden>

            <span id="errorAjaxTxt"> </span>
        </div>
        <div class="row h-90 align-items-center justify-content-center text-center">
            <div class="row">
                <div class="col-sm-5">
                    <div class="form-box">
                        <div class="form-top">
                            <div class="form-top-left">
                                <h3>Connexion au site</h3>
                            </div>
                            <div class="form-top-right">
                                <i class="fa fa-key"></i>
                            </div>
                        </div>
                        <div class="form-bottom">
                            <form role="form" action="" method="post" class="login-form" id="loginForm">
                                <div class="form-group">
                                    <label class="sr-only" for="loginEmail">Email</label>
                                    <input type="text" name="loginEmail" placeholder="email"
                                           class="form-username form-control" id="loginEmail">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="loginPassword">Password</label>
                                    <input type="password" name="loginPassword" placeholder="Mot de passe"
                                           class="form-password form-control" id="loginPassword">
                                </div>
                                <button type="submit" class="btn btn-primary">Connexion</button>
                            </form>
                        </div>
                    </div>

                    <div class="social-login">
                        <h3>Connexion avec:</h3>
                        <div class="social-login-buttons">
                            <a class="btn btn-link-1 btn-link-1-facebook" href="#">
                                <i class="fab fa-facebook"></i> Facebook
                            </a>
                            <a class="btn btn-link-1 btn-link-1-twitter" href="#">
                                <i class="fab fa-twitter"></i> Twitter
                            </a>
                            <a class="btn btn-link-1 btn-link-1-google-plus" href="#">
                                <i class="fab fa-google-plus"></i> Google Plus
                            </a>
                        </div>
                    </div>

                </div>

                <div class="col-sm-1 middle-border d-none d-md-block"></div>
                <div class="col-sm-1"></div>

                <div class="col-sm-5">

                    <div class="form-box">
                        <div class="form-top">
                            <div class="form-top-left">
                                <h3>Inscription</h3>
                            </div>
                            <div class="form-top-right">
                                <i class="fa fa-pencil"></i>
                            </div>
                        </div>
                        <div class="form-bottom">
                            <form role="form" action="" method="post" class="registration-form" id="registerForm">
                                <div class="form-group">
                                    <label class="sr-only" for="registerFirstName">Prénom</label>
                                    <input type="text" name="registerFirstName" placeholder="John"
                                           class="form-first-name form-control" id="registerFirstName">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="registerName">Nom</label>
                                    <input type="text" name="registerName" placeholder="Doe"
                                           class="form-last-name form-control" id="registerName">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="registerEmail">Email</label>
                                    <input type="email" name="registerEmail" placeholder="my@mail.com"
                                           class="form-email form-control" id="registerEmail">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="registerPassword">Mot de passe</label>
                                    <input type="password" name="registerPassword" placeholder="Mot de passe"
                                           class="form-email form-control" id="registerPassword">
                                </div>

                                <div class="form-group">
                                    <label class="sr-only" for="registerPasswordConf">Confirmation du Mot de passe</label>
                                    <input type="password" name="registerPasswordConf" placeholder="Confirmation du mot de passe"
                                           class="form-email form-control" id="registerPasswordConf">
                                </div>

                                <div class="g-recaptcha" data-sitekey="6LfW180UAAAAAGdu8ZRqBhDmbYc2yPSdRkqN-nRL"></div>

                                <br>
                                <button type="submit" class="btn btn-primary" id="register">Inscription</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</header>

