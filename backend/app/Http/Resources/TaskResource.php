<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    public static $wrap = 'tasks';

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'type'   => 'tasks',
            'id'     => $this->id(),
            'description'   => $this->description(),
            'done'          => $this->done(),
            'created_at'    => $this->created_at,
            /*'attributes' => [
                'description'   => $this->description(),
                'done'         => $this->done(),
                'created_at'    => $this->created_at,
            ],
            'relationships' => [
                'user' => UserTaskResource::make($this->user())
            ],*/
            'links' => [
                'self' => route('tasks.show', $this->id()),
                //'related' => route('tasks.show', $this->description())
            ]
        ];
    }

    public function with($request){
        return[
            'status' => 'success',
        ];
    }

    public function withResponse($request, $response){
        $response->header('Accept', 'application/json');
    }
}