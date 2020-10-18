<?php

use Flarum\Database\Migration;

return Migration::addColumns('groups', [
    'display_style' => ['mediumText', 'nullable' => true, 'default' => NULL],
]);