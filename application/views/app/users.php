<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body"><h4 class="mt-0 header-title mb-4">Liste des participants</h4>

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
                            Créateur du projet
                            <input type="hidden" name="userId" value="#id">
                            <select class="form-control " name="userPerms" >
                                <option value="2" selected>Créateur du projet</option>
                                <option value="1" >Administrateur du projet</option>
                                <option value="0" >Membre du projet</option>
                            </select>
                        </td>
                        <td>
                            <button type="button" class="btn btn-success waves-effect waves-light">Editer
                            </button>
                            <button type="button" class="btn btn-danger waves-effect waves-light" >Exclure
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
                          data-target="#adduser"><i class="fa fa-users"></i> Ajouter un utilisateur
                </button>
            </div>
        </div>
    </div>

</div>