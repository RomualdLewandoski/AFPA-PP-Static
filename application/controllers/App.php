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
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left");
        $this->load->view("app/pagetop");
        $this->load->view("app/dashboard");
        $this->load->view("app/foot");
    }

    public function createProject(){
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left");
        $this->load->view("app/pagetop");
        $this->load->view("app/create");
        $this->load->view("app/foot");
    }

    public function listProject(){
        $this->load->view("app/head");
        $this->load->view("app/nav");
        $this->load->view("app/left");
        $this->load->view("app/pagetop");
        $this->load->view("app/list");
        $this->load->view("app/foot");
    }
}