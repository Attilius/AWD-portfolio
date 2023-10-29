<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'desktop_cover_image',
        'mobile_cover_image',
        'public_url',
        'source_url'
    ];

    /**
     * The technologies that belong to the project.
     */
    public function technologies(): BelongsToMany
    {
        return $this->belongsToMany(Technology::class, 'project_technology');
    }
}
