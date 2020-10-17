<?php

namespace DavidNery\NicknameGroupFormatter\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\GroupSerializer;
use Flarum\Group\Event\Saving;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class AddGroupAttributes {
  
  public function subscribe(Dispatcher $events) {
    $events->listen(Serializing::class, [$this, 'addAttributes']);
    $events->listen(Saving::class, [$this, 'addData']);
  }

  public function addAttributes(Serializing $event) {
    if ($event->isSerializer(GroupSerializer::class)) {
      $event->attributes['displayStyle'] = $event->model->display_style;
    }
  }

  public function addData(Saving $event) {
    $display_style = Arr::get($event->data, 'attributes.displayStyle');
    if(strlen(trim($display_style)) == 0) {
      $display_style = NULL;
    }

    $event->group->display_style = $display_style;
  }
}