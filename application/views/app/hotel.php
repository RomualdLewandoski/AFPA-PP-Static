<div class="row">
    <div class="col-md-6" id="hotelPending">
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between pb-4">
                    <h4 class="card-title mb-0"><i class="fa fa-hotel"></i> Proposition d'Hôtels</h4>
                    <p class="mb-0">
                        <button type="button" class="btn btn-outline-success waves-effect waves-light"
                                data-toggle="modal"
                                data-target="#newHotel">Ajouter <i class="fa fa-plus"></i>
                        </button>
                    </p>
                </div>
                <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"
                     aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;" id="newHotel">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="myLargeModalLabel">
                                    Ajouter un hotel
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Nom</label>
                                    <div class="col-sm-10">
                                        <input class="form-control" type="text" placeholder="Le nom de l'hotel"
                                               name="hotelName">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Durée</label>
                                    <div class="col-sm-5">
                                        <input class="form-control" type="number" placeholder="Durée"
                                               name="hotelDurationAmount">
                                    </div>
                                    <div class="col-sm-5">
                                        <select name="hotelDuration" class="form-control">
                                            <option value="d" selected>Jour(s)</option>

                                        </select>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Prix</label>
                                    <div class="col-sm-10">
                                        <input class="form-control" type="text"
                                               placeholder="Prix de l'hotel par personne (premium)"
                                               name="hotelPrice"
                                               disabled>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Description</label>
                                    <div class="col-sm-10">
                                        <textarea name="hotelDesc" class="form-control"></textarea>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Numéro de rue</label>
                                    <div class="col-sm-2">
                                        <input class="form-control" type="number"
                                               placeholder=""
                                               name="hotelStreetNumber">
                                    </div>
                                    <label class="col-sm-1 col-form-label">Rue</label>
                                    <div class="col-sm-7">
                                        <input class="form-control" type="text" name="hotelStreetName">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Code postal</label>
                                    <div class="col-sm-2">
                                        <input class="form-control" type="number"
                                               placeholder=""
                                               name="hotelZipCode">
                                    </div>
                                    <label class="col-sm-1 col-form-label">Ville</label>
                                    <div class="col-sm-7">
                                        <input class="form-control" type="text" name="hotelCity">
                                    </div>
                                </div>


                                <div align="center">
                                    <button class="btn btn-success" type="submit"><i class="fa fa-plus"></i> Soumettre
                                    </button>
                                    <button class="btn btn-danger" type="reset"><i class="fa fa-trash-alt"></i> Reset
                                    </button>

                                </div>
                            </div>

                        </div><!-- /.modal-content --></div><!-- /.modal-dialog --></div>
                <table class="table table-responsive-md  no-tab text-center" id="table_hotel">
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
                            <button type="button" class="btn btn-success waves-effect waves-light" data-toggle="modal"
                                    data-target="#hotel1">VOIR
                            </button>
                            5 <i class="fa fa-arrow-up text-success"></i>
                            0 <i class="fa fa-arrow-down text-danger"></i>
                        </td>
                    </tr>

                    </tbody>
                </table>

                <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"
                     aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;" id="hotel1">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="myLargeModalLabel">
                                    Fiche d'hotel
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">

                                <div class="row">
                                    <div class="col-md-6">
                                        <h4>Visite de la maison de roco<br><br>
                                            <i class="fa fa-calendar-day"></i> 1 Jour<br><br>
                                            <i class="fa fa-dollar-sign"></i> <i>Fonction prémium</i><br>
                                        </h4>
                                        <hr>
                                        <div align="center">
                                            <button class="btn btn-success"><i class="fa fa-thumbs-up"></i> 5 Pour
                                            </button>
                                            <button class="btn btn-danger"><i class="fa fa-thumbs-down"></i> 0 Contre
                                            </button><br><br>
                                            <button class="btn btn-success"><i class="fa fa-check"></i> Ajouter à la liste définitive
                                            </button>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div id="mapid" style="width: 100%; height: 380px; position: relative;"></div>
                                        <script>
                                            setTimeout(function () {
                                                map.invalidateSize()
                                            }, 500);
                                            $("#hotel1").on('shown.bs.modal', function () {
                                                var mymap2 = L.map('mapid').setView([50.44269, 2.82950], 18);
                                                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGF6aWVsa2FvcyIsImEiOiJjazVodHd0YmMwNno5M2xzY3FyM2dhbDdjIn0.GfeDxa9VznsPiTuKIqXF1A', {
                                                    maxZoom: 18,
                                                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                                                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                                                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                                                    id: 'mapbox/satellite-v9'
                                                }).addTo(mymap2);
                                                var marker = L.marker([50.44269, 2.82950]).addTo(mymap2);
                                                var popup = L.popup()
                                                    .setLatLng([50.44289, 2.82950])
                                                    .setContent("Adresse a afficher")
                                                    .openOn(mymap2);
                                                //add 0.0002 on Z for the popup
                                            });
                                        </script>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4>Description:</h4><br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada
                                        ligula velit, vel malesuada ex aliquet mollis. Nunc consequat sapien eget
                                        tincidunt porta. Pellentesque accumsan ipsum sed augue tincidunt viverra. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus justo.
                                        Quisque suscipit, orci in convallis ultricies, nisi nisi tempor nisl, ac
                                        tristique lacus enim id diam. Quisque sit amet diam dolor. Proin fermentum
                                        tempor tortor, porttitor mattis arcu. In vehicula scelerisque accumsan. Morbi in
                                        convallis leo. Mauris tincidunt, leo eget consequat bibendum, mi ligula tempor
                                        nunc, et tempus dui ligula at enim. Nulla venenatis luctus finibus. Mauris
                                        pulvinar, lorem id condimentum condimentum, massa neque fringilla massa, ut
                                        viverra mi lorem vitae nulla.

                                        Sed mi lectus, commodo in hendrerit posuere, mollis eget mauris. Ut ultrices,
                                        felis eu pretium congue, turpis lacus imperdiet ipsum, ac luctus mi enim in mi.
                                        Sed vitae nibh tortor. Proin eget sollicitudin orci, a iaculis sem. Pellentesque
                                        turpis felis, auctor ut dictum at, mollis a dolor. Donec mollis mi nunc, ut
                                        varius lorem facilisis nec. Mauris venenatis justo quam, sed placerat magna
                                        aliquet interdum. Cras non vulputate lacus, at vestibulum purus. Etiam erat dui,
                                        rhoncus non risus in, tincidunt commodo eros. Maecenas luctus feugiat
                                        sollicitudin.
                                    </div>
                                </div>
                            </div>

                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
                </div>

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


    <div class="col-md-6" id="hotelFinal">
        <div class="card" id="choosenActivity">
            <div class="card-body">
                <div class="d-flex align-items-center justify-content-between pb-4">
                    <h4 class="card-title mb-0"><i class="fa fa-hotel"></i> Hotels retenues</h4>
                </div>
                <table class="table table-responsive-md  no-tab text-center" id="table_activity2">
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
                            #2
                        </td>
                        <td>
                            Infinity Hotel St. Peter
                        </td>
                        <td>
                            10 jours
                        </td>
                        <td>
                            <button type="button" class="btn btn-success waves-effect waves-light" data-toggle="modal"
                                    data-target="#activity2">VOIR
                            </button>
                            5 <i class="fa fa-arrow-up text-success"></i>
                            0 <i class="fa fa-arrow-down text-danger"></i>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog"
                     aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;" id="activity2">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0" id="myLargeModalLabel">
                                    Fiche d'activité
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h4>Infinity Hotel St. Peter<br><br>
                                            <i class="fa fa-calendar-day"></i> 10 Jours<br><br>
                                            <i class="fa fa-dollar-sign"></i> <i>Fonction prémium</i><br>
                                        </h4>
                                        <hr>
                                        <div align="center">
                                            <i class="fa fa-thumbs-up text-success"></i> 5 POUR
                                            <i class="fa fa-thumbs-down text-danger"></i> 0 Contre
                                            <br><br>
                                            <button class="btn btn-danger"><i class="fa fa-gavel"></i> Remettre au vote
                                            </button>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div id="mapid2" style="width: 100%; height: 380px; position: relative;"></div>
                                        <script>
                                            setTimeout(function () {
                                                map.invalidateSize()
                                            }, 500);
                                            $("#activity2").on('shown.bs.modal', function () {
                                                var mymap = L.map('mapid2').setView([50.44269, 2.82950], 18);
                                                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGF6aWVsa2FvcyIsImEiOiJjazVodHd0YmMwNno5M2xzY3FyM2dhbDdjIn0.GfeDxa9VznsPiTuKIqXF1A', {
                                                    maxZoom: 18,
                                                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                                                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                                                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                                                    id: 'mapbox/satellite-v9'
                                                }).addTo(mymap);
                                                var marker = L.marker([50.44269, 2.82950]).addTo(mymap);
                                                var popup = L.popup()
                                                    .setLatLng([50.44289, 2.82950])
                                                    .setContent("Adresse a afficher")
                                                    .openOn(mymap);
                                                //add 0.0002 on Z for the popup
                                            });
                                        </script>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-12">
                                        <h4>Description:</h4><br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada
                                        ligula velit, vel malesuada ex aliquet mollis. Nunc consequat sapien eget
                                        tincidunt porta. Pellentesque accumsan ipsum sed augue tincidunt viverra. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in lectus justo.
                                        Quisque suscipit, orci in convallis ultricies, nisi nisi tempor nisl, ac
                                        tristique lacus enim id diam. Quisque sit amet diam dolor. Proin fermentum
                                        tempor tortor, porttitor mattis arcu. In vehicula scelerisque accumsan. Morbi in
                                        convallis leo. Mauris tincidunt, leo eget consequat bibendum, mi ligula tempor
                                        nunc, et tempus dui ligula at enim. Nulla venenatis luctus finibus. Mauris
                                        pulvinar, lorem id condimentum condimentum, massa neque fringilla massa, ut
                                        viverra mi lorem vitae nulla.

                                        Sed mi lectus, commodo in hendrerit posuere, mollis eget mauris. Ut ultrices,
                                        felis eu pretium congue, turpis lacus imperdiet ipsum, ac luctus mi enim in mi.
                                        Sed vitae nibh tortor. Proin eget sollicitudin orci, a iaculis sem. Pellentesque
                                        turpis felis, auctor ut dictum at, mollis a dolor. Donec mollis mi nunc, ut
                                        varius lorem facilisis nec. Mauris venenatis justo quam, sed placerat magna
                                        aliquet interdum. Cras non vulputate lacus, at vestibulum purus. Etiam erat dui,
                                        rhoncus non risus in, tincidunt commodo eros. Maecenas luctus feugiat
                                        sollicitudin.
                                    </div>
                                </div>
                            </div>

                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
                </div>
                <script type="application/javascript">
                    $(document).ready(function () {
                        $('#table_activity2').DataTable({
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