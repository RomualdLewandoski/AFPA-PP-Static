<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body"><h4 class="mt-0 header-title mb-4">Créer un projet</h4>

                <div class="form-group row">
                    <label class="col-sm-1 col-form-label">Nom du projet</label>
                    <div class="col-sm-5">
                        <input class="form-control" type="text" placeholder="Le nom de mon projet" name="projectName">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="example-date-input" class="col-sm-1  col-form-label">Date de début (provisoire)</label>
                    <div class="col-sm-3">
                        <input class="form-control" type="date" value="2011-08-19" name="beginDate"></div>
                    <label for="example-date-input" class="col-sm-1  col-form-label">Date de Fin (provisoire)</label>
                    <div class="col-sm-3">
                        <input class="form-control" type="date" value="2011-08-19" name="endDate"></div>
                </div>


                <div class="form-group row">
                    <label for="example-date-input" class="col-sm-1  col-form-label">Description du projet</label>
                    <div class="col-sm-11">
                        <script src="/ckeditorfull/ckeditor.js" type="text/javascript"></script>
                        <textarea id="descProject" name="descProject" class="note-codable"
                                  style="height: 270px;"></textarea>
                        <script>
                            CKEDITOR.replace('descProject', {
                                removePlugins: 'sourcearea, about, save, preview, print, templates, image, flash , iframe, forms'
                            });
                        </script>
                    </div>

                </div>

                <div class="text-center">
                    <button class="btn btn-success" type="submit">Créer mon projet</button>
                    <button class="btn btn-danger" type="reset">Reset</button>
                </div>


            </div>
            <div class="card-footer text-center">

            </div>
        </div>
    </div>

</div>
