<?php

use Webmozart\PathUtil\Path;
use EclTwig\Twig\Loader\EclTwigLoader;

require_once __DIR__ . '/vendor/autoload.php';

$system = getenv('ECL_SYSTEM');

$paths = [];
$twig_path = __DIR__ . '/../../../../node_modules/@ecl-twig';
$twig_path_abs = Path::canonicalize($twig_path);

// Remove '.' and '..' from the result of scandir().
$twig_packages = array_slice(scandir($twig_path_abs), 2);

foreach ($twig_packages as $package) {
  $system_prefix = $system . '-';
  // Filter packages belonging to the selected system.
  if (strpos($package, $system_prefix) !== FALSE) {
    array_push($paths, $twig_path_abs . DIRECTORY_SEPARATOR . $package);
  }
}

$loader = new EclTwigLoader($paths, $twig_path_abs);

$twig = new \Twig\Environment($loader);
