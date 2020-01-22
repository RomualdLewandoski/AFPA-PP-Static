<div class="row">
    <div class="col-md-12">
        <div class="card" id="settings">
            <div class="card-body"><h4 class="mt-0 header-title mb-4">Paramètres du projet</h4>

                <div class="form-group row">
                    <label class="col-sm-1 col-form-label">Nom du projet</label>
                    <div class="col-sm-5">
                        <input class="form-control" type="text" placeholder="Le nom de mon projet" name="projectName"
                               value="Tutoriel">
                    </div>
                </div>


                <div class="form-group row">
                    <label for="example-date-input" class="col-sm-1  col-form-label">Description du projet</label>
                    <div class="col-sm-11">
                        <script src="/ckeditorfull/ckeditor.js" type="text/javascript"></script>
                        <textarea id="descProject" name="descProject" class="note-codable"
                                  style="height: 270px;">
                            Superbe description de mon projet de voyage
                        </textarea>
                        <script>
                            CKEDITOR.replace('descProject', {
                                removePlugins: 'sourcearea, about, save, preview, print, templates, image, flash , iframe, forms'
                            });
                        </script>
                    </div>

                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Lien d'invitation</label>
                    <div class="col-sm-9">
                        <input class="form-control" id="privateKey" name="privateKey"
                               value="https://moonly.fr/invite/xa4894Zhbnf=" readonly="readonly">
                    </div>
                    <div class="col-md-1">
                        <button id="copy" class="btn btn-sm btn-primary" type="button">Copier</button>
                    </div>
                </div>
                <script>
                    $(document).ready(function () {
                        var toCopy = $('#privateKey'),
                            btnCopy = document.getElementById('copy');

                        btnCopy.addEventListener('click', function () {
                            toCopy.select().val();
                            if (document.execCommand('copy')) {
                                console.log("OK")
                            }
                            return false;
                        });
                    });
                </script>

                <div class="text-center">
                    <button class="btn btn-success" type="submit" >Modifier le projet</button>
                    <button class="btn btn-warning" id="newKeyProject" >Générer un nouveau lien d'invitation</button>
                    <button class="btn btn-danger" id="deleteProject"><i class="fa fa-trash"></i> Supprimer le projet</button>
                </div>


            </div>
            <div class="card-footer text-center">

            </div>
        </div>
    </div>

</div>
