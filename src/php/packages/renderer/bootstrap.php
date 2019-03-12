<?php

use Webmozart\PathUtil\Path;

require_once __DIR__ . '/vendor/autoload.php';

$components_paths = [];
$twig_path = __DIR__ . '/../../../../node_modules/@ecl-twig';

$twig_packages = array_slice(scandir(Path::canonicalize($twig_path)), 2);

if (count($twig_packages)) {
  $components_paths = array_map(
    function ($package) {
      return Path::canonicalize(
        __DIR__ . '/../../../../node_modules/@ecl-twig/' . $package
      );
    },
    $twig_packages
  );
}

$loader = new \Twig\Loader\FilesystemLoader($components_paths);

$twig = new \Twig\Environment(
  $loader, ['debug' => TRUE, 'auto_reload' => TRUE]
);
