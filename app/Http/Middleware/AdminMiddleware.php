<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     * @return Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check())
        {
            if (Auth::user()['role'] === 1)
            {

                return $next($request);

            } else {

                return redirect('/')->with('message', 'Access Denied as you are not an Admin!');
            }

        } else {

            return redirect('/login')->with('message', 'Login to access the Blog commenting.');
        }
    }
}
