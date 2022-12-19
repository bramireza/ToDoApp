<?php

use App\Http\Controllers\API\TaskController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
*
* php artisan cache:clear
* php artisan config:cache
* php artisan route:clear
* php artisan view:clear
*/

Route::middleware(['auth:sanctum'])->group(function () {
    // Tasks

    // Users with tasks
    Route::get('/user/{user}', [UserController::class, 'show'])->name('users');

    // User Auth
    Route::get('/user', UserController::class);
Route::get('tasks', [TaskController::class,'index']);
    Route::get('tasks/{task}', [TaskController::class,'show'])->name('tasks.show');
    Route::post('tasks', [TaskController::class,'store']);
    Route::put('tasks', [TaskController::class,'update']);
    Route::delete('tasks/{task}', [TaskController::class,'destroy']);
});