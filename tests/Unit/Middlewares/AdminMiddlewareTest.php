<?php

namespace Tests\Unit\Middlewares;

use App\Http\Middleware\AdminMiddleware;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\TestCase;

class AdminMiddlewareTest extends TestCase
{
    use RefreshDatabase;

    public function test_non_admins_are_redirected()
    {
        $user = User::factory()->create();
        $request = Request::create('/admin/dashboard', 'GET');
        $middleware = new AdminMiddleware;
        $response = $middleware->handle($request, function () {});

        $this->actingAs($user);

        $this->assertEquals(302, $response->getStatusCode());
    }

    public function test_can_be_accessed_by_admin_user(): void
    {
        $user = User::factory()->create();
        $user->role = 1;

        $this->actingAs($user)
            ->get('/admin/dashboard')
            ->assertOk();
    }
}
