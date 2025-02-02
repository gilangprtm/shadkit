<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    //

    public function index()
    {
        $tasks = json_decode(file_get_contents(resource_path('js/Pages/Categories/data/tasks.json')), true);

        return Inertia::render('Categories/Index', [
            'tasks' => $tasks
        ]);
    }
}
