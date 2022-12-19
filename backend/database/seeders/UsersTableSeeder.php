<?php

namespace Database\Seeders;

use App\Models\User;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Brayian Ramirez',
            'email' => 'bramirezag@gmail.com',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
        ]);

        User::factory()->count(5)->create();
    }
}
