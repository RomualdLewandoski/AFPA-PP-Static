<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body" id="participantsTable"><h4 class="mt-0 header-title mb-4">Liste des participants</h4>

                <table class="table table-responsive-md no-tab text-center" id="table_user">
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Nom d'utilisateur</th>
                        <th>Email</th>
                        <th>Statut</th>
                        <th>Permission</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            #1
                        </td>
                        <td>
                            Romuald Detrait
                        </td>
                        <td>
                            admin@moonly.fr
                        </td>
                        <td>
                            Membre validé
                        </td>
                        <td>
                            <input type="hidden" name="userId" value="#id">
                            <select class="form-control " name="userPerms" id="selectPerms">
                                <option value="2" selected>Créateur du projet</option>
                                <option value="1">Administrateur du projet</option>
                                <option value="0">Membre du projet</option>
                            </select>
                        </td>
                        <td>
                            <button type="button" class="btn btn-success waves-effect waves-light" id="edit">Editer
                            </button>
                            <button type="button" class="btn btn-danger waves-effect waves-light">Exclure
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <script type="application/javascript">
                    $(document).ready(function () {
                        $('#table_user').DataTable({
                            "searching": true,
                            "order": [[0, "asc"]],
                            "language": {
                                "lengthMenu": "_MENU_ par page",
                                "zeroRecords": "Aucune donnée",
                                "info": "Page _PAGE_ sur_PAGES_",
                                "search": "Recherche",
                                "infoEmpty": "Aucune donnée",
                                "infoFiltered": "(Filtré depuis _MAX_ entrée)",
                                "paginate": {
                                    "previous": "Précédent",
                                    "next": "Suivant"
                                }
                            }
                        });
                    });
                </script>


            </div>
            <div class="card-footer text-center">
                <button type="button" class="btn btn-warning waves-effect waves-light" data-toggle="modal"
                        data-target="#adduser" id="addUser"><i class="fa fa-users"></i> Ajouter un utilisateur
                </button>
            </div>
        </div>

        <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"
             aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;" id="adduser">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title mt-0" id="myLargeModalLabel">
                            Inviter des utilisateurs
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-success alert-dismissible fade show" id="copyOk" role="alert" hidden>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span>
                            </button>
                           Le lien d'invitation a bien été copié
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Lien d'invitation</label>
                            <div class="col-sm-9">
                                <input class="form-control" id="privateKey" name="privateKey" value="https://moonly.fr/invite/xa4894Zhbnf=" readonly="readonly" >
                            </div>
                            <div class="col-md-1">
                                <button id="copy" class="btn btn-sm btn-primary" type="button">Copier</button>
                            </div>


                            </label>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-9" id="field_wrapper">
                                <input class="form-control" type="email" placeholder="email"
                                       name="email[]"><br>
                            </div>
                            <div class="col-sm-1"><a href="javascript:void(0);" class="add_input_button"
                                                     title="Add field"><img
                                            src="/assets/img/add-icon.png"/></a></div>
                        </div>

                        <script>
                            $(document).ready(function () {
                                var max_fields = 10;
                                var add_input_button = $('.add_input_button');
                                var field_wrapper = $('#field_wrapper');
                                var new_field_html = '<div style="display: flex"><br><br><input type="email" class="form-control col-sm-11" name="input_field[]" value=""/><a href="javascript:void(0);" class="remove_input_button col-sm-1" title="Remove field" style="margin-top: 8px"> <img src="/assets/img/remove-icon.png"/></a></div>';
                                var input_count = 1;
                                // Add button dynamically
                                $(add_input_button).click(function () {
                                    if (input_count < max_fields) {
                                        input_count++;
                                        $(field_wrapper).append(new_field_html);
                                    }
                                });
                                // Remove dynamically added button
                                $(field_wrapper).on('click', '.remove_input_button', function (e) {
                                    e.preventDefault();
                                    $(this).parent('div').remove();
                                    input_count--;
                                });


                                var toCopy  = $('#privateKey'),
                                    btnCopy = document.getElementById( 'copy' );

                                btnCopy.addEventListener( 'click', function(){
                                    toCopy.select().val();
                                    if (document.execCommand('copy')){
                                        document.getElementById("copyOk").hidden = false;
                                        console.log("OK")
                                    }
                                    return false;
                                } );

                            });
                        </script>

                        <div align="center">
                            <button class="btn btn-success" type="submit"><i class="fa fa-plus"></i> Inviter
                            </button>
                            <button class="btn btn-danger" type="reset"><i class="fa fa-trash-alt"></i> Reset
                            </button>

                        </div>
                    </div>

                </div><!-- /.modal-content --></div><!-- /.modal-dialog --></div>

    </div>

</div>