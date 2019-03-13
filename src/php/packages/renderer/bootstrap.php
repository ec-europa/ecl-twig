<?php

use Webmozart\PathUtil\Path;
use EclTwig\Twig\Loader\EclTwigLoader;

require_once __DIR__ . '/vendor/autoload.php';

$paths = [];
$twig_path = __DIR__ . '/../../../../node_modules/@ecl-twig';
$twig_path_abs = Path::canonicalize($twig_path);
$twig_packages = array_slice(scandir($twig_path_abs), 2);

foreach ($twig_packages as $package) {
  // Take into account only EC system for the moment.
  if (strpos($package, 'ec-') !== FALSE) {
    array_push($paths, $twig_path_abs . DIRECTORY_SEPARATOR . $package);
  }
}

$loader = new EclTwigLoader($paths, $twig_path_abs);

$twig = new \Twig\Environment(
  $loader, ['debug' => TRUE, 'auto_reload' => TRUE]
);
