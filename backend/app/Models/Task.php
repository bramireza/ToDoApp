<?php

namespace App\Models;

use App\Traits\HasUser;
use App\Traits\ModelHelpers;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory, HasUser, ModelHelpers;

    const TABLE = 'taskes';
    protected $table =self::TABLE;

    protected $fillable = [
        'description',
        'state',
        'user_id'
    ];

    public function id(): string{
        return (string) $this->id;
    }
    public function description(): string{
        return $this->description;
    }
    public function state(): string{
        return $this->state;
    }

}
