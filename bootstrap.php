<?php

require_once __DIR__ . '/vendor/autoload.php';

$paths = scandir(__DIR__ . '/src/ec/packages');

$components = array_filter($paths, function($path) {
  return strpos($path, '-component-');
});

$components_paths = array_map(function($component) {
  return __DIR__ . '/src/ec/packages/' . $component;
}, $components);

$loader = new \Twig\Loader\FilesystemLoader($components_paths);

$twig = new \Twig\Environment($loader);
