<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['app/wallet/(:any)'] = 'app/walletProject/$1';
$route['app/settings/(:any)'] = 'app/settingsProject/$1';
$route['app/hotel/(:any)'] = 'app/hotelProject/$1';
$route['app/activity/(:any)'] = 'app/activityProject/$1';
$route['app/users/(:any)'] = 'app/memberProject/$1';
$route['app/date/(:any)'] = 'app/dateProject/$1';
$route['app/view/(:any)'] = 'app/viewProject/$1';
$route['app/view'] = 'app/listProject';
$route['app/new'] = 'app/createProject';
$route['app/me'] = 'app/profile';
$route['app'] = 'app';
$route['app/board'] = 'app';
$route['invite/(:any)']= 'app/join/$1';
$route['login'] = 'main/login';
$route['default_controller'] = 'main';

/**CONFIG ROUTE **/
$route['translate_uri_dashes'] = FALSE;
