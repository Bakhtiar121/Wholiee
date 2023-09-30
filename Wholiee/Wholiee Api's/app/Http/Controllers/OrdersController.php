<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;
use App\Models\Products;
use App\Models\User;
use Validator;

class OrdersController extends Controller
{
    //

     public function allorders()
    {
        $order = Orders::all();
        if($order->isEmpty()){
        return response()->json([
            'success' => true,
            'message' => 'Orders Not Found Done.',
            // 'data' => $Items

        ], 404);        
        }
        return response()->json([
            'success' => true,
            'message' => 'Orders Fetch Successfully Done.',
            'data' => $order

        ], 200);
        
    }

 public function getorders(Request $request , $id)
    {
        $order=Orders::whereRaw("FIND_IN_SET($id, user_ids)")
                        ->get();
        
        if($order->isEmpty()){
        return response()->json([
            'success' => true,
            'message' => 'Orders Not Found Done.',
            // 'data' => $Items

        ], 404);        
        }
        return response()->json([
                'success' => true,
                'message' => 'Orders Details Found',
                'data' => $order
            ], 200);
    }

      public function add(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'First_name' => 'required|string|min:4',
            'Last_name' => 'required|string',
            'Email' => 'required|email',
            'Country' => 'required|string',
            'City' => 'required|string',
            'State' => 'required|string',
            'Address' => 'required|string',
            'Zipcode' => 'required|string',
            'Product_ids' => 'array|required',
            'Total' => 'required|string',
            'user_ids' => 'array|required',
            'status' => 'nullable|string',
            'quantity' =>'required|string',

    ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please see errors parameter for all errors.',
                'errors' => $validator->errors()
            ]);
        }  
            
            $order = new orders();
            $order->First_name=$request->First_name;
            $order->Last_name=$request->Last_name;
            $order->Email=$request->Email;
            $order->Country=$request->Country;
            $order->City=$request->City;
            $order->State=$request->State;
            $order->Address=$request->Address;
            $order->Zipcode=$request->Zipcode; 
            $ids=$request->Product_ids; 
            $string = implode(",", $request->Product_ids); 
            
            $usrids=$request->user_ids; 
            $string1 = implode(",", $request->user_ids); 
            
            // $result = explode(",", $string); 
            $order->Product_ids=$string;
            
            $products= new Products();

             $products::whereIn('id', explode(',', $string))
                    ->update(['Product_Available_Qty' => \DB::raw("GREATEST(Product_Available_Qty - $request->quantity, 0)")]);

            $order->user_ids=$string1;
            $order->Total=$request->Total;
            $order->quantity=$request->quantity;
            
            $order->status="Pending";
            
            $order->save();


         
        return response()->json([
            'success' => true,
            'message' => 'Items Added to Cart'
        ], 200);
    }


    public function update_orders(Request $request , $id)
    {

            $order = new orders();
            $order = orders::find($id);
            $order->First_name=$request->First_name;
            $order->Last_name=$request->Last_name;
            $order->Email=$request->Email;
            $order->Country=$request->Country;
            $order->City=$request->City;
            $order->State=$request->State;
            $order->Address=$request->Address;
            $order->Zipcode=$request->Zipcode; 
            
            $ids=$request->Product_ids; 
            $string = implode(",", $request->Product_ids);
            
            $usrids=$request->user_ids; 
            $string1 = implode(",", $request->user_ids); 
            
            // $result = explode(",", $string); 
            $order->Product_ids=$string; 
            $order->user_ids=$string1;
            $order->Total=$request->Total;
            $order->status=$request->status;
            
            $order->save();


            
            
            return response()->json([
            'success' => true,
            'message' => 'Order Number -> '.$id.' ->Details Updated Successfully.'
        ], 200);

            
         } 



 public function destroy_order($id)
          {
        $delete_pro = Orders::find($id);
    
        $delete_pro->delete();
 
        return response()->json([
            'success' => true,
            'message' => 'Order Number->'.$id.'->Remove Successfully Done.'
        ], 200);
    

}

}
