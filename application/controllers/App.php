<?php
/**
 * Created by PhpStorm.
 * User: 62014-51-03
 * Date: 13/01/2020
 * Time: 15:42
 */

class App extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->whence->push();
    }

    public function index()
    {
        $data['project'] = false;
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left", $data);
        $this->load->view("app/pagetop");
        $this->load->view("app/dashboard");
        $this->load->view("app/foot");
    }

    public function createProject(){
        $data['project'] = false;
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left", $data);
        $this->load->view("app/pagetop");
        $this->load->view("app/create");
        $this->load->view("app/foot");
    }

    public function listProject(){
        $data['project'] = false;
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left", $data);
        $this->load->view("app/pagetop");
        $this->load->view("app/list");
        $this->load->view("app/foot");
    }

    public function viewProject($id = FALSE){
        $data['project'] = true;
        $data['id'] = $id;
        if ($id == 1 ){
            $data['premium'] = true;
        }else if ($id == "tuto"){
            $data['premium'] = true;
        }else{
            $data['premium'] = false;
        }
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left", $data);
        $this->load->view("app/pagetop");
        $this->load->view("app/view");
        $this->load->view("app/foot");
    }

    public function memberProject($id = false){
        $data['project'] = true;
        $data['id'] = $id;
        if ($id == 1 ){
            $data['premium'] = true;
        }else if ($id == "tuto"){
            $data['premium'] = true;
        }else{
            $data['premium'] = false;
        }
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left", $data);
        $this->load->view("app/pagetop");
        $this->load->view("app/users");
        $this->load->view("app/foot");
    }

    public function activityProject($id = false){
        $data['project'] = true;
        $data['id'] = $id;
        if ($id == 1 ){
            $data['premium'] = true;
        }else if ($id == "tuto"){
            $data['premium'] = true;
        }else{
            $data['premium'] = false;
        }
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left", $data);
        $this->load->view("app/pagetop");
        $this->load->view("app/activity");
        $this->load->view("app/foot");
    }

    public function hotelProject($id = false){
        $data['project'] = true;
        $data['id'] = $id;
        if ($id == 1 ){
            $data['premium'] = true;
        }else if ($id == "tuto"){
            $data['premium'] = true;
        }else{
            $data['premium'] = false;
        }
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left", $data);
        $this->load->view("app/pagetop");
        $this->load->view("app/hotel");
        $this->load->view("app/foot");
    }


    public function settingsProject($id = false){
        $data['project'] = true;
        $data['id'] = $id;
        if ($id == 1 ){
            $data['premium'] = true;
        }else if ($id == "tuto"){
            $data['premium'] = true;
        }else{
            $data['premium'] = false;
        }
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left", $data);
        $this->load->view("app/pagetop");
        $this->load->view("app/settings");
        $this->load->view("app/foot");
    }
}