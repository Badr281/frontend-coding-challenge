<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function home()
    {
        return $this->render('base.html.twig', [
       
        ]);
    }

    /**
     * @Route("/{id}", name="pagination")
     */
    public function pagination()
    {
        return $this->render('base.html.twig', [
       
        ]);
    }

}
