<!-- ========== Left Sidebar Start ========== -->
<div class="left side-menu">
    <div class="slimscroll-menu" id="remove-scroll"><!--- Sidemenu -->
        <div id="sidebar-menu"><!-- Left Menu Start -->
            <ul class="metismenu" id="side-menu">
                <li class="menu-title">Accueil</li>
                <li>
                    <a href="/app" class="waves-effect"  id="menu-home">
                        <i class="ti-home"></i>
                        <span>Accueil</span>
                    </a>
                </li>
                <li><a href="javascript:void(0);" class="waves-effect"><i class="fa fa-rocket"></i><span> Projets <span
                                    class="float-right menu-arrow"><i
                                        class="mdi mdi-chevron-right"></i></span></span></a>
                    <ul class="submenu">
                        <li id="listProject"><a href="/app/view">Mes projets</a></li>
                        <li id="createProject"><a href="/app/new">Nouveau projet</a></li>
                    </ul>
                </li>
                <li class="menu-title">Gestion du projet</li>

                <?php
                if ($project) { ?>

                    <li>
                        <a href="/app/view/<?php echo $id;?>" class="waves-effect" id="viewProject">
                            <i class="fa fa-newspaper"></i>
                            <span>Aperçu</span>
                        </a>

                        <a href="/app/date/<?php echo $id;?>" class="waves-effect" id="dateProject">
                            <i class="fa fa-calendar"></i>
                            <span>Dates</span>
                        </a>

                        <a href="/app/users/<?php echo $id;?>" class="waves-effect" id="participants">
                            <i class="fa fa-user"></i>
                            <span>Participants</span>
                        </a>

                        <a href="/app/activity/<?php echo $id;?>" class="waves-effect" id="myActivity">
                            <i class="fa fa-snowboarding"></i>
                            <span>Activité</span>
                        </a>

                        <a href="/app/hotel/<?php echo $id;?>" class="waves-effect" id="myHotel">
                            <i class="fa fa-hotel"></i>
                            <span>Hôtel</span>
                        </a>

                        <?php
                        if ($premium){?>
                            <a href="/app/wallet/<?php echo $id;?>" class="waves-effect" id="walletProject">
                                <i class="fa fa-chart-line"></i>
                                <span>Budget</span>
                            </a>
                        <?php }
                        ?>


                        <a href="/app/settings/<?php echo $id;?>" class="waves-effect" id="projectSettings">
                            <i class="fa fa-cogs"></i>
                            <span>Paramètres</span>
                        </a>
                    </li>
                <?php }
                ?>

            </ul>
        </div><!-- Sidebar -->
        <div class="clearfix"></div>
    </div><!-- Sidebar -left --></div><!-- Left Sidebar End -->