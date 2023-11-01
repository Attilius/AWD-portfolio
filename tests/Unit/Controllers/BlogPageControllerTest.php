<?php

namespace Tests\Unit\Controllers;

use Tests\TestCase;

class BlogPageControllerTest extends TestCase
{
    public function test_blog_page_rendering(): void
    {
        $response = $this->get('/blog');

        $response->assertStatus(200);
    }
}
