<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ContactController;
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

Route::post('register', [PassportController::class, 'register']);
Route::post('login', [PassportController::class, 'login']);
Route::get('get-users', [PassportController::class, 'allusers']);
Route::post('single-user/{id}', [PassportController::class, 'single_user']);
Route::post('{id}/update-user', [PassportController::class, 'update_user']);
Route::post('reset-password', [PassportController::class, 'password_reset']);
Route::post('verify-otp', [PassportController::class, 'verifyOtp']);
Route::post('delete-user/{id}', [PassportController::class, 'destroy_user']);

Route::post('catadd', [CategoryController::class, 'store']);
Route::get('showall-cat', [CategoryController::class, 'allcat']);
Route::post('show-single_cat/{id}',[CategoryController::class, 'show_single_category']);
Route::post('delete-cat/{id}', [CategoryController::class, 'destroy_cat']);
Route::post('{id}/update-cat',[CategoryController::class,'update_category']);



Route::post('prod-add', [ProductsController::class, 'store']);
Route::get('showall-prod', [ProductsController::class, 'allproducts']);
Route::post('show-single_pro/{id}',[ProductsController::class, 'show_single_product']);
Route::post('delete-pro/{id}', [ProductsController::class, 'destroy_product']);
Route::post('{id}/update-pro',[ProductsController::class,'update_products']);
Route::post('single_pro_by_user/{id}',[ProductsController::class, 'show_product_by_user']);
Route::get('approve-products',[ProductsController::class, 'show_app_product']);

Route::post('search-item/{name}',[ProductsController::class, 'search_product']);


Route::get('showprobycat/{cat}',[ProductsController::class, 'show_by_category']);

Route::post('addorder', [OrdersController::class, 'add']);
Route::get('allorders', [OrdersController::class, 'allorders']);
Route::post('delete-order/{id}', [OrdersController::class, 'destroy_order']);
Route::post('update-order/{id}',[OrdersController::class,'update_orders']);

Route::post('get_supp_orders/{id}', [OrdersController::class, 'getorders']);


Route::get('get-contact',[ContactController::class,'all_contact']);
Route::post('set-contact',[ContactController::class,'create_contact']);


Route::middleware('auth:api')->group(function () {
    Route::post('user-detail', [PassportController::class, 'userDetail']);
    Route::post('logout', [PassportController::class, 'logout']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
