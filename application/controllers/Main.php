<?php

class Main extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->whence->push();
    }

    public function index()
    {
        $this->load->view('front/head');
        $this->load->view('front/nav');
        $this->load->view('front/masthead');
        $this->load->view('front/features');
        $this->load->view('front/price');
        $this->load->view('front/talking');
        $this->load->view('front/about');
        $this->load->view('front/foot');
    }


}
