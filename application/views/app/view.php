<h3>Voyage a Rome</h3>
<div class="row" id="infopanel">
    <div class="col-xl-3 col-md-6">
        <div class="card mini-stat bg-primary text-white">
            <div class="card-body">
                <div class="mb-4">
                    <div class="float-left mini-stat-img mr-4"><h2><i class="fa fa-calendar"></i></h2>
                    </div>
                    <h5 class="font-16 text-uppercase mt-0 text-white-50">Dates</h5>
                    <h5 class="font-500">du 20/01/2020 <br>au 02/02/2020</h5>
                </div>
                <div class="pt-2">
                    <a href="#" class="text-white-50">
                        <div class="float-right">
                            <i class="mdi mdi-arrow-right h5"></i>
                        </div>
                        <p class="text-white-50 mb-0">Gérer les dates</p></div>
                </a>
            </div>
        </div>
    </div>

    <div class="col-xl-3 col-md-6">
        <div class="card mini-stat bg-primary text-white">
            <div class="card-body">
                <div class="mb-4">
                    <div class="float-left mini-stat-img mr-4"><h2><i class="fa fa-users"></i></h2>
                    </div>
                    <h5 class="font-16 text-uppercase mt-0 text-white-50">Participants</h5>
                    <h5 class="font-500">1 / 3<br><br></h5>
                </div>
                <div class="pt-2">
                    <a href="#" class="text-white-50">
                        <div class="float-right">
                            <i class="mdi mdi-arrow-right h5"></i>
                        </div>
                        <p class="text-white-50 mb-0">Gérer les utilisateurs</p></div>
                </a>
            </div>
        </div>
    </div>

    <div class="col-xl-3 col-md-6">
        <div class="card mini-stat bg-primary text-white">
            <div class="card-body">
                <div class="mb-4">
                    <div class="float-left mini-stat-img mr-4"><h2><i class="fa fa-chart-line"></i></h2>
                    </div>
                    <h5 class="font-16 text-uppercase mt-0 text-white-50">Budget</h5>
                    <h5 class="font-500">**Fonction PREMIUM**<br><br></h5>
                </div>
                <div class="pt-2">
                    <a href="#" class="text-white-50">
                        <div class="float-right">
                            <i class="mdi mdi-arrow-right h5"></i>
                        </div>
                        <p class="text-white-50 mb-0">Gérer le budget</p></div>
                </a>
            </div>
        </div>
    </div>

    <div class="col-xl-3 col-md-6">
        <div class="card mini-stat bg-primary text-white">
            <div class="card-body">
                <div class="mb-4">
                    <div class="float-left mini-stat-img mr-4"><h2><i class="fa fa-snowboarding"></i></h2>
                    </div>
                    <h5 class="font-16 text-uppercase mt-0 text-white-50">Voyage</h5>
                    <h5 class="font-500">Hotel : 1<br> Activitées : 10<br></h5>
                </div>
                <div class="pt-2">
                    <a href="#" class="text-white-50">
                        <div class="float-right">
                            <i class="mdi mdi-arrow-right h5"></i>
                        </div>
                        <p class="text-white-50 mb-0">Gérer les activitées</p></div>
                </a>
            </div>
        </div>
    </div>

</div>


<div class="row">
    <div class="col-md-6" id="activity">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between pb-4">
                    <h4 class="card-title mb-0"><i class="fa fa-snowboarding"></i> Proposition d'activitées</h4>
                    <p class="mb-0">
                        Ajouter <i class="fa fa-plus"></i>
                    </p>
                </div>

                <table class="table responsive  no-tab text-center" id="table_activity">
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Nom</th>
                        <th>Jours</th>
                        <th>Informations</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>
                            #1
                        </td>
                        <td>
                            Visite de la maison de Rocco Siffredi
                        </td>
                        <td>
                            1er jour
                        </td>
                        <td>
                            <a href="" class="btn btn-info">Voir</a>
                            5 <i class="fa fa-arrow-up text-success"></i>
                            0 <i class="fa fa-arrow-down text-danger"></i>
                        </td>
                    </tr>

                    </tbody>
                </table>

                <script type="application/javascript">
                    $(document).ready(function () {
                        $('#table_activity').DataTable({
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


    <div class="col-md-6" id="hotel">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between pb-4">
                    <h4 class="card-title mb-0"><i class="fa fa-hotel"></i> Proposition d'Hôtels</h4>
                    <p class="mb-0">
                        Ajouter <i class="fa fa-plus"></i>
                    </p>
                </div>

                <table class="table responsive  no-tab text-center" id="table_hotel">
                    <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Nom</th>
                        <th>Jours</th>
                        <th>Informations</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td>
                            #1
                        </td>
                        <td>
                            Hotel Villa San Pio
                        </td>
                        <td>
                            12
                        </td>
                        <td>
                            <a href="" class="btn btn-info">Voir</a>
                            5 <i class="fa fa-arrow-up text-success"></i>
                            0 <i class="fa fa-arrow-down text-danger"></i>
                        </td>
                    </tr>

                    </tbody>
                </table>

                <script type="application/javascript">
                    $(document).ready(function () {
                        $('#table_hotel').DataTable({
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
</div>


