<?php

namespace App\Models;

use App\Traits\HasUser;
use App\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    use HasFactory, HasUser, ModelHelpers;


    protected $fillable = [
        'description',
        'done',
        'user_id'
    ];

    public function id(): string{
        return (string) $this->id;
    }
    public function description(): string{
        return $this->description;
    }
    public function done(): bool{
        return $this->done;
    }


}