<?php

namespace App\Http\Resources;

use App\Models\Task;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserTaskResource extends JsonResource
{
    public static $wrap = 'user';

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'type' => 'people',
            'id' => $this->id(),
            'name' => $this->name(),
            'email' => $this->email(),
            'links' => [
                'self' => route('users', $this->id())
            ],
            'tasks' => ($this->tasks),
        ];
    }
}