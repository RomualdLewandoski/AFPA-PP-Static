<div class="row">
    <div class="col-md-6">
        <div class="card">
            <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Modifier le mot de passe</h4>
                <br>
                <div class="form-group row">
                    <label for="example-date-input" class="col-sm-4  col-form-label">Mot de passe</label>
                    <div class="col-sm-8">
                        <input class="form-control" type="password" name="password"></div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Nouveau mot de passe</label>
                    <div class="col-sm-8">
                        <input class="form-control" type="password" name="newPassword">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Confirmation du mot de passe</label>
                    <div class="col-sm-8">
                        <input class="form-control" type="password" name="newPasswordConf">
                    </div>
                </div>
                <div class="text-center">
                    <button class="btn btn-success" type="submit">Changer de mot de passe</button>
                </div>
                <hr class="mb-4">
                <h4 class="mt-0 header-title mb-4">Modifier l'adresse email</h4>
                <br>
                <div class="form-group row">
                    <label for="example-date-input" class="col-sm-4  col-form-label">Nouvel email</label>
                    <div class="col-sm-8">
                        <input class="form-control" type="email" name="email"></div>
                </div>
                <div class="text-center">
                    <button class="btn btn-success" type="submit">Changer d'adresse email</button>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6">
        <div class="card">
            <div class="card-body">
                <h4 class="mt-0 header-title mb-4">Double authentification</h4>
                <br>
                <div class="text-center mb-4">
                <img src="https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth://totp/Moonly-RomualdLewandoski?secret=Z7IHWBLNKHUPZNYY">
                </div>
                Scannez le code ci dessus dans une application OTP (GoogleAuthentificator par exemple)<br>
                Saisissez ensuite le code afficher dans le champs en dessous.
                <div class="form-group row mt-3">
                    <label for="example-date-input" class="col-sm-4  col-form-label">Code d'authentification</label>
                    <div class="col-sm-8">
                        <input class="form-control" type="text" name="tfa"></div>
                </div>
                <div class="text-center">
                    <button class="btn btn-success" type="submit">Activer la double authentification</button>
                </div>
            </div>
        </div>
    </div>
</div>