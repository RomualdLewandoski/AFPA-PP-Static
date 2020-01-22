<div class="row">
    <div class="col-md-9" id="datePending">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between pb-4">
                    <h4 class="card-title mb-0"><i class="fa fa-calendar"></i> Proposition de date</h4>
                    <p class="mb-0">
                        <button type="button" class="btn btn-outline-success waves-effect waves-light"
                                data-toggle="modal"
                                data-target="#newDate">Ajouter <i class="fa fa-plus"></i>
                        </button>
                    </p>
                </div>
                <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"
                     aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;" id="newDate">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="myLargeModalLabel">
                                    Ajouter une date
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group row">
                                    <label for="example-date-input" class="col-sm-2  col-form-label">Date de
                                        début</label>
                                    <div class="col-sm-4">
                                        <input class="form-control" type="date" value="2020-01-19" name="beginDate">
                                    </div>
                                    <label for="example-date-input" class="col-sm-2  col-form-label">Date de fin</label>
                                    <div class="col-sm-4">
                                        <input class="form-control" type="date" value="2020-01-19" name="endDate"></div>
                                </div>

                                <div align="center">
                                    <button class="btn btn-success" type="submit"><i class="fa fa-plus"></i> Soumettre
                                    </button>
                                    <button class="btn btn-danger" type="reset"><i class="fa fa-trash-alt"></i> Reset
                                    </button>

                                </div>
                            </div>

                        </div><!-- /.modal-content --></div><!-- /.modal-dialog --></div>
                <table class="table table-responsive-md  no-tab text-center" id="table_date_pending">
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Début</th>
                        <th>Fin</th>
                        <th>Vote</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            #1
                        </td>
                        <td>
                            19-01-2020
                        </td>
                        <td>
                            02-02-2020
                        </td>
                        <td>
                            <button class="btn btn-success text-white">5 <i class="fa fa-thumbs-up"></i></button>
                            <button class="btn btn-danger text-white">0 <i class="fa fa-thumbs-down"></i></button>
                        </td>
                    </tr>

                    </tbody>
                </table>
                <script type="application/javascript">
                    $(document).ready(function () {
                        $('#table_date_pending').DataTable({
                            "searching": false,
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
        </div>
    </div>

    <div class="col-md-3" id="dateChosen">
        <div class="card mini-stat bg-primary text-white">
            <div class="card-body">
                <div class="mb-4">
                    <div class="float-left mini-stat-img mr-4"><h2><i class="fa fa-calendar"></i></h2>
                    </div>
                    <h5 class="font-16 text-uppercase mt-0 text-white-50">Dates</h5>
                </div>
                <div class="mt-5 text-center">
                <h5 class="font-500">du 20/01/2020 <br>au 02/02/2020</h5>
                </div>
                <div class="pt-2">
                    <a href="#" class="text-white-50">
                        <div class="float-right">
                            <i class="mdi mdi-arrow-right h5"></i>
                        </div>
                        <p class="text-white-50 mb-0">Remettre au vote</p></a></div>

            </div>
        </div>
    </div>
</div>