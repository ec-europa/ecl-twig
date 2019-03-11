<?php

use Webmozart\PathUtil\Path;

require_once __DIR__ . '/bootstrap.php';

$ec_packages = __DIR__ . '/../../../ec/packages';

$components = array_map(function($path) {
  $parts = explode('/', $path);
  $component = array_pop($parts);
  $component_path = implode('/', $parts);

  return [
    'component' => $component,
    'path' => $component_path,
  ];

}, glob(Path::canonicalize($ec_packages . '/**/*.html.twig')));

foreach ($components as $component) {
  $component_name = $component['component'];
  $component_path = $component['path'];

  try {
    $html_result = $twig->render($component_name, []);
    $file_name = Path::canonicalize(__DIR__ . '/output/' . str_replace('.html.twig', '.html', $component_name));

    file_put_contents($file_name, $html_result);
  }
  catch (exception $e) {
    echo 'There was an error while trying to render ' . $component_name . ': ' . $e;
  }

}

