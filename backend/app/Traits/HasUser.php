<?php
namespace App\Traits;

use App\Models\User;


/**
* 
*/
trait HasUser
{
  public function user(): User{
    return $this->userRelation;
  }

  /**
  * Get the userRelation that owns the HasUser
  *
  * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
  */
  public function userRelation(): BelongsTo
  {
      return $this->belongsTo(User::class, 'user_id');
  }

  public function isUserBy(User $user): bool{
    return  $this->user()->matches($user);
  }

  public function userBy(User $user){
    return $this->userRelation()->associate($user);
  }
}
 