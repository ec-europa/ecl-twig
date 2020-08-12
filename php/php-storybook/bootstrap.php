<?php

use Webmozart\PathUtil\Path;

require_once __DIR__ . '/vendor/autoload.php';

$paths = [];
$twig_path = __DIR__ . '/../../../node_modules/@ecl-twig';
$twig_path_abs = Path::canonicalize($twig_path);
$packages_folder_abs = [];
$ec_packages_folder = Path::canonicalize(__DIR__ . '/../../src/ec/packages/');
$eu_packages_folder = Path::canonicalize(__DIR__ . '/../../src/eu/packages/');

$loader = new \Twig\Loader\FilesystemLoader($ec_packages_folder);
$loader->addPath($eu_packages_folder, 'ecl-twig');
$loader->addPath($ec_packages_folder, 'ecl-twig');
$twig = new \Twig\Environment($loader);

