<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['app/view'] = 'app/listProject';
$route['app/new'] = 'app/createProject';
$route['app'] = 'app';
$route['login'] = 'main/login';
$route['default_controller'] = 'main';

/**CONFIG ROUTE **/
$route['translate_uri_dashes'] = FALSE;
