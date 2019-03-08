<?php

require_once __DIR__ . '/bootstrap.php';

echo $twig->render('button.html.twig', [
    'label' => 'Foo label',
    'variant' => 'primary',
]);
