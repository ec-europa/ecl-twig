<?php

use Webmozart\PathUtil\Path;

require_once __DIR__ . '/bootstrap.php';

$system = __DIR__ . '/ec';

$components = array_slice(scandir(Path::canonicalize($system)), 2);

foreach ($components as $component) {
  $template = $component . '.html.twig';
  $folder = Path::canonicalize($system . '/' . $component);

  $files = array_slice(scandir($folder), 2);

  foreach ($files as $file_name) {
    try {
      $result_file_name = str_replace(
        '.json',
        '',
        str_replace('data', $component, $file_name)
      );

      $result_file_ext = str_replace(
        'data',
        '',
        str_replace('json', 'html', $file_name)
      );

      $result_file = $result_file_name . $result_file_ext;

      $data_string = file_get_contents($folder . '/' . $file_name);
      $data_json = json_decode($data_string, TRUE);
      $result_html = $twig->render($template, $data_json);

      file_put_contents($folder . '/' . $result_file, $result_html);
    } catch (exception $e) {
    }
  }

}
