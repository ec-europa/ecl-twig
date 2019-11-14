<?php

use Webmozart\PathUtil\Path;

require_once __DIR__ . '/vendor/autoload.php';

$system = 'ec';

if (!$system) {
  throw new Error('Missing EC_SYSTEM environment variable.');
}

$paths = [];
$twig_path = __DIR__ . '/../../../node_modules/@ecl-twig';
$twig_path_abs = Path::canonicalize($twig_path);
$packages_folder = __DIR__ . '/../../../src/ec/packages/';
$packages_folder_abs = Path::canonicalize($packages_folder);
// Remove '.' and '..' from the result of scandir().
$twig_packages = array_slice(scandir($twig_path_abs), 2);

foreach ($twig_packages as $package) {
  $system_prefix = $system . '-';
  // Filter packages belonging to the selected system.
  if (strpos($package, $system_prefix) !== FALSE) {
    array_push($paths, $twig_path_abs . DIRECTORY_SEPARATOR . $package);
  }
}

$loader = new \Twig\Loader\FilesystemLoader($packages_folder_abs);
$loader->addPath($packages_folder_abs, 'ecl-twig');
$twig = new \Twig\Environment($loader);
