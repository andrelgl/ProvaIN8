<?php

namespace App\Http\Controllers;

use App\Trainee;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TraineerController extends Controller
{
    public function getAll()
    {
        $traineers = Trainee::orderBy('id', 'desc')
                            ->get();
        return $traineers->toJson();
    }

    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'name' => 'required|min:3',
            'email' => 'required',
            'date_birth' => 'required',
            'telephone' => 'required',
        ]);

        $traineer = Trainee::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'date_birth' => $validatedData['date_birth'],
            'telephone' => $validatedData['telephone'],
        ]);

        return response()->json('created');
    }
}
