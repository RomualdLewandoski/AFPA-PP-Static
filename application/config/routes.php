<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['app/view/(:any)'] = 'app/viewProject/$1';
$route['app/view'] = 'app/listProject';
$route['app/new'] = 'app/createProject';
$route['app'] = 'app';
$route['app/board'] = 'app';
$route['login'] = 'main/login';
$route['default_controller'] = 'main';

/**CONFIG ROUTE **/
$route['translate_uri_dashes'] = FALSE;
