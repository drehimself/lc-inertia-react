<?php

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return view('welcome');
    return Inertia::render('Index', [
        'foo' => 'bar',
    ]);
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/posts', function () {
    return Inertia::render('Posts', [
        'posts' => Post::all(),
    ]);
});

Route::get('/posts/{post}', function (Post $post) {
    return Inertia::render('Post', [
        'post' => $post,
    ]);
});

Route::get('/create', function () {
    return Inertia::render('Create');
});

Route::post('/create', function (Request $request) {
    $request->validate([
        'title' => 'required|min:3',
        'body' => 'required|min:3',
    ]);

    Post::create([
        'title' => $request->title,
        'body' => $request->body,
    ]);

    return redirect('/posts')->with('message', 'Post was created!');
});
