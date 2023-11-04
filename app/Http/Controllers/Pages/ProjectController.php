<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    /**
     * Rendering project page.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Project', [
            'canLogin' => Route::has('login'),
            'isAdmin' => Auth::check() && Auth::user()['role'] === 1
        ]);
    }
}
