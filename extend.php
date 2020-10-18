<?php

namespace DavidNery\NicknameGroupFormatter;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\GroupSerializer;
use Illuminate\Contracts\Events\Dispatcher;

return [
  new Extend\Locales(__DIR__.'/locale'),
  (new Extend\Frontend('forum'))->js(__DIR__.'/js/dist/forum.js'),
  (new Extend\Frontend('admin'))->js(__DIR__.'/js/dist/admin.js'),

  function (Dispatcher $events) {
    $events->subscribe(Listeners\AddGroupAttributes::class);
  }
];