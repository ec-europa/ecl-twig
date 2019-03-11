<?php

use Webmozart\PathUtil\Path;

require_once __DIR__ . '/bootstrap.php';

$ec_packages = __DIR__ . '/../../../ec/packages';

$components = array_map(
  function ($path) {
    $parts = explode('/', $path);
    $component = array_pop($parts);
    $component_path = implode('/', $parts);

    return [
      'component' => $component,
      'path' => $component_path,
    ];

  },
  glob(Path::canonicalize($ec_packages . '/**/*.html.twig'))
);

foreach ($components as $component) {
  $component_name = $component['component'];
  $component_path = $component['path'];

  $component_html = str_replace('.html.twig', '.html', $component_name);
  $component = str_replace('.html', '', $component_html);

  $folder = Path::canonicalize(__DIR__ . '/ec/' . $component);
  $file_data = $folder . '/data.json';
  $file_result = $folder . '/' . $component_html;

  try {
    $data_string = file_get_contents($file_data);
    $data_json = json_decode($data_string, TRUE);

    $html_result = $twig->render($component_name, $data_json);

    if (!file_exists($folder)) {
      mkdir($folder, 0777, TRUE);
    }

    file_put_contents($file_result, $html_result);
  } catch (exception $e) {
    echo 'There was an error while trying to render ' . $component_name . ': ' . $e;
  }

}
