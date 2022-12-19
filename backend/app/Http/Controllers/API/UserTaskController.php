<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserTaskResource;
use App\Models\User;

class UserTaskController extends Controller
{
    public function show(User $user)
    {
        return new UserTaskResource($user);
    }
}