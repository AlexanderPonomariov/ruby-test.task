<?php

namespace TaskManager\TaskBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('TaskManagerTaskBundle:Default:index.html.twig');
    }
}
