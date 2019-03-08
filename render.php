<?php

require_once __DIR__ . '/bootstrap.php';

$components = array_map(function($path) {
  $parts = explode('/', $path);
  $component = array_pop($parts);
  $component_path = implode('/', $parts);

  return [
    'component' => $component,
    'path' => $component_path,
  ];

}, glob(__DIR__ . '/src/ec/packages/**/*.html.twig'));

foreach ($components as $component) {
  $component_name = $component['component'];
  $component_path = $component['path'];

  try {
    $html = $twig->render($component_name, []);
    $file = $component_path . '/' . str_replace('.html.twig', '.html', $component_name);
    file_put_contents($file, $html);
  }
  catch (exception $e) {
    echo 'There was an error while trying to render ' . $component_name . ': ' . $e;
  }

}

