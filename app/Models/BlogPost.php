<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class BlogPost extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'sub_title',
        'cover_image',
        'article',
        'is_public',
        'is_commentable',
        'likes',
        'comments',
        'published_at'
    ];

    /**
     * Get the blog author that owns the blog post.
     */
    public function blogAuthor(): BelongsTo
    {
        return $this->belongsTo(BlogAuthor::class);
    }

    /**
     * Get all of post's comments.
     */
    public function blogComments(): MorphMany
    {
        return $this->morphMany(BlogComment::class, 'commentable');
    }

    /**
     * The blog tags that belong to the blog post.
     */
    public function blogTags(): BelongsToMany
    {
        return $this->belongsToMany(BlogTag::class, 'blog_post_tag');
    }
}
