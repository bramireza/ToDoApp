<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $description = $this->faker->sentence();
        return [
            'description' => $description,
            'done' => 0,
            'user_id' => $attribute['user_id'] ?? User::factory()
        ];
    }
}