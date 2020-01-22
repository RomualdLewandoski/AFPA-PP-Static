<div class="row">
    <div class="col-md-6" id="wallet_list">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between pb-4">
                    <h4 class="card-title mb-0"><i class="fa fa-chart-line"></i> Gestion du budget</h4>
                    <p class="mb-0">
                        <button type="button" class="btn btn-outline-success waves-effect waves-light"
                                data-toggle="modal"
                                data-target="#addWallet">Ajouter <i class="fa fa-plus"></i>
                        </button>
                    </p>
                </div>
                <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"
                     aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;" id="addWallet">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="myLargeModalLabel">
                                    Ajouter au budget
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group row">
                                    <label for="example-date-input" class="col-sm-2 offset-2  col-form-label">Montant</label>
                                    <div class="col-sm-6">
                                        <input class="form-control" type="number" name="ammount">
                                    </div>
                                </div>

                                <div align="center">
                                    <button class="btn btn-success" type="submit"><i class="fa fa-plus"></i> Ajouter
                                    </button>
                                    <button class="btn btn-danger" type="reset"><i class="fa fa-trash-alt"></i> Reset
                                    </button>

                                </div>
                            </div>

                        </div><!-- /.modal-content --></div><!-- /.modal-dialog --></div>
                <table class="table table-responsive-md  no-tab text-center" id="table_wallet">
                    <thead>
                    <tr>
                        <th>Membre</th>
                        <th>Somme</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            Romuald Detrait
                        </td>
                        <td>
                            300€
                        </td>

                    </tr>

                    </tbody>
                </table>
                <script type="application/javascript">
                    $(document).ready(function () {
                        $('#table_wallet').DataTable({
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
    <div class="col-md-6" id="wallet">
        <div class="card">
            <div class="card-body">
                <ul class="list-inline widget-chart m-t-20 m-b-15 text-center">
                    <li class="list-inline-item"><h5 class="mb-0">50€</h5>
                        <p class="text-muted">Activitée</p></li>
                    <li class="list-inline-item"><h5 class="mb-0">150€</h5>
                        <p class="text-muted">Hotel</p></li>
                    <li class="list-inline-item"><h5 class="mb-0">100€</h5>
                        <p class="text-muted">Reste</p></li>
                </ul>
            </div>
            <div id="simple-pie" class="ct-chart ct-golden-section simple-pie-chart-chartist"></div>
            <div class="card-footer mt-2 text-center">
                <ul class="list-inline widget-chart m-t-20 m-b-15 text-center">

                    <li class="list-inline-item"><h5 class="mb-0">300€</h5>
                        <p class="text-muted">Solde total</p></li>

                </ul>
            </div>
        </div>
    </div>
    <script>
        var data = {
            labels: ['Activités', 'Hotels', 'Reste'],
            series: [50, 150, 100]
        };
        var options = {
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        };
        var sum = function (a, b) {
            return a + b
        };
        var responsiveOptions = [
            ['screen and (min-width: 640px)', {
                chartPadding: 30,
                labelOffset: 100,
                labelDirection: 'explode',
                labelInterpolationFnc: function (value) {
                    var index = data.labels.indexOf(value);
                    return value + " " + Math.round(data.series[index] / data.series.reduce(sum) * 100) + '%';
                }
            }],
            ['screen and (min-width: 1024px)', {
                labelOffset: 80,
                chartPadding: 20
            }]
        ];
        new Chartist.Pie('#simple-pie', data, options, responsiveOptions);
    </script>

</div>
