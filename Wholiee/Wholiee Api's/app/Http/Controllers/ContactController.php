<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Validator;



class ContactController extends Controller
{
    //
     //
    public function all_contact()
    {
        $Inque = Contact::all();
  
        if (is_null($Inque)) {
            return response()->json([
                'success' => false,
                'message' => 'Contact Details Not Found'
            ], 404);
        }
        return $Inque;
    }



public function create_contact(Request $request)
    {
         $input = $request->all();
   
        $validator = Validator::make($input, [
            'full_name'=>'required|string',
            'subject'=>'required|string',
            'email'=>'required|string',
            'Message_Content'=>'required|string',
            
    ]);
   
        
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Please see errors parameter for all errors.',
                'errors' => $validator->errors()
            ]);
        }


            $Inq = new Contact();
            $Inq->full_name=$full_name=$request->full_name;
            $Inq->subject="Contact Us - Wholiee WholeSale Services";
            $Inq->email=$em=$request->email;
        
            $Inq->Message_Content=$mc=$request->Message_Content;
            $Inq->save();

            

              // $to="sufiyankhanzada748@gmail.com";
              // $subject="Inquiry Email For Customer";
              // $message="Hello";
              // mail($to, $subject, $message);

          $to = "cs1912299@szabist.pk";
          
          $subject = "Contact Us - Wholiee WholeSale Services";
         
          $message = "Name: ";
          $message .= "$full_name .<br>";
          $message .= "Email: ";
          $message .= "$em<br>";
          $message .= "Message: ";
          $message .= "$mc<br>";
        
         
         
          $header = "From:wholiee@example.com \r\n";
          $header .= "Cc:afgh@somedomain.com \r\n";
          $header .= "MIME-Version: 1.0\r\n";
          $header .= "Content-type: text/html\r\n";
          mail ($to,$subject,$message,$header);

                return response()->json([
            'success' => true,
            'message' => 'Contact  Added Successfully.',
          
            
        ], 200);

}
            



}

