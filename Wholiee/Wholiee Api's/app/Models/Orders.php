<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

      protected $fillable = [
        'First_name',
        'Last_name',
        'Email',
        'Country',
        'City',
        'State',
        'Address',
        'Zipcode',
        'Product_ids',
        'Total',
        'user_ids',
        'status',
        'quantity',
        
    ];
}
