<?php

use Webmozart\PathUtil\Path;

require_once __DIR__ . '/vendor/autoload.php';

$components_paths = [];
$ec_packages = __DIR__ . '/../../../ec/packages';

$paths = scandir(Path::canonicalize($ec_packages));

if (count($paths)) {
  $components = array_filter(
    $paths,
    function ($path) {
      return strpos($path, '-component-');
    }
  );

  $components_paths = array_map(
    function ($component) {
      return Path::canonicalize(
        __DIR__ . '../../../../ec/packages/' . $component
      );
    },
    $components
  );
}

$loader = new \Twig\Loader\FilesystemLoader($components_paths);

$twig = new \Twig\Environment($loader);
