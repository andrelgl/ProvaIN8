<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trainee extends Model
{
    protected $fillable = ['name', 'email', 'date_birth', 'telephone'];
}
