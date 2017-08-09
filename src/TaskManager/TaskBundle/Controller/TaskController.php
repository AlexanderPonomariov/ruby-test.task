<?php

namespace TaskManager\TaskBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TaskController extends Controller
{
    public function indexAction()
    {
        return $this->render('TaskManagerTaskBundle:Task:task.html.twig');
    }
}
