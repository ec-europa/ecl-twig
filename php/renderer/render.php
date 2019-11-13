<?php

use Webmozart\PathUtil\Path;

require_once __DIR__ . '/bootstrap.php';
require_once __DIR__ . '/scripts/helpers.php';

$helpers = new storyHelpers();
$result_extension = '.php.html';
$extension = '.html.twig';
$output_folder = 'php';
$system = 'ec';
$prefix = 'ecl-';

$root_folder = __DIR__ . '/../../../';
$root_folder_abs = Path::canonicalize($root_folder);
$packages_folder = $root_folder_abs . DIRECTORY_SEPARATOR . 'src/' . $system . DIRECTORY_SEPARATOR . 'packages';

// The place to store HTML output of the Twig PHP renderer.
$system_path = $root_folder_abs . DIRECTORY_SEPARATOR . $output_folder . DIRECTORY_SEPARATOR . 'packages' . DIRECTORY_SEPARATOR . $system;

// This is a list of components, as generated by JavaScript.
// Thus, the list will contain only components for which we have demo data.
$components = array_slice(scandir(Path::canonicalize($system_path)), 2);

foreach ($components as $component) {
  $component_group = $component_family = '';
  $template = '@ecl-twig/ec-component-' . $component . '/' . $prefix . $component;

  if ($component == 'checkbox' || $component == 'radio') {
    $template = $template . '-group';
  }
  // Deprecated components.
  $deprecated_component = $helpers->deprecatedComponents($component);
  // Grouping components in families and variants.
  $component_group = $helpers->groupComponents($component);
  $template = $template . $extension;
  $specs_folder = Path::canonicalize($system_path . DIRECTORY_SEPARATOR . $component . DIRECTORY_SEPARATOR . 'specs');
  $folder = Path::canonicalize($system_path . DIRECTORY_SEPARATOR . $component);
  // Get the list of data files.
  // For each data file the renderer will create an HTML file.
  $files = array_slice(scandir($specs_folder), 2);

  foreach ($files as $file_name) {
    $data_html = $base_component = $data_story = $prepend = '';
    try {
      $variant = str_replace(
        '.json',
        '',
        str_replace('data', $component, $file_name)
      );
      // Not real variants.
      if ($variant == 'breadcrumb-simple'|| $variant == 'page-filler') {
        continue;
      }

      $data_string = file_get_contents(
        $specs_folder . DIRECTORY_SEPARATOR . $file_name
      );

      $data_json = json_decode($data_string, TRUE);

      if (!empty($data_json)) {
        //$data_json = $helpers->fixData($data_json, $variant);
        // Here we render the template with params.
        $data_html = $twig->render($template, $data_json);
        // But then we need to fix something...
        $data_html = $helpers->fixHtml($data_html, $component);
        // Create stories files.
        $adapted_variant = str_replace('-', '_', $variant);
        // If it's a modifier we demo it in a folder together with the other variants.
        $base_component = $helpers->baseComponent($variant);
        // We try to collect all the variants in the same story, so if we find one and the story file exist we inject
        // the additional story and we prepend the import of the component.
        if (file_exists($folder . DIRECTORY_SEPARATOR . 'story' . DIRECTORY_SEPARATOR . $base_component . '.story.js')) {
          $prepend = "import " . $adapted_variant . " from '../" . $variant . $result_extension . "';\n";
          $prepend .= "import " . $adapted_variant . "Js from '../js/" . $variant . ".js.html';\n";
          $data_story = ".add('" . $variant . "', () => { return " . $adapted_variant . "; },";
          $data_story .= "{ notes: { markdown: docs }, diff: { jsmarkup: " . $adapted_variant . "Js }})";
        } else {
          // Not sure why we needed this, but it's the case.
          if (!is_dir($folder . DIRECTORY_SEPARATOR . 'story')) {
            mkdir($folder . DIRECTORY_SEPARATOR . 'story');
          }
          // Prepare a folder for the js rendered files.
          if (!is_dir($folder . DIRECTORY_SEPARATOR . 'js')) {
            mkdir($folder . DIRECTORY_SEPARATOR . 'js');
          }
          // Get the story template.
          $data_story = file_get_contents('./resources/story_template.txt');
          // Replace its content with our variables.
          if (!empty($deprecated_component) || !empty($component_group)) {
            $component_group = $component_group . '/';
          }

          $data_story = str_replace(
            ['#component#', '#component_variant#', '#php_file_name#', '#deprecated#', '#component_group#'],
            [$base_component, $adapted_variant, $variant, $deprecated_component, $component_group]
            , $data_story
          );
        }
        // Here we create or update the story file.
        file_put_contents(
          $folder . DIRECTORY_SEPARATOR . 'story' . DIRECTORY_SEPARATOR . $base_component . '.story.js',
          $data_story, FILE_APPEND | LOCK_EX
        );
        // Prepending a string in a file is a bit more clumsy in php.
        if (!empty($prepend)) {
          $helpers->prepend($prepend, $folder . DIRECTORY_SEPARATOR . 'story' . DIRECTORY_SEPARATOR . $base_component . '.story.js');
        }
        // Save the rendered htm in a file .php.html
        file_put_contents(
          $folder . DIRECTORY_SEPARATOR . $variant . $result_extension,
          $data_html
        );
        // Symlink the docs.
        $link = $folder . DIRECTORY_SEPARATOR . 'README.md';
        $target = $packages_folder . DIRECTORY_SEPARATOR . 'ec-component-' . $base_component . DIRECTORY_SEPARATOR . 'docs' . DIRECTORY_SEPARATOR . $component . '.md';
        $other_target = $packages_folder . DIRECTORY_SEPARATOR . 'ec-component-' . $base_component . DIRECTORY_SEPARATOR . 'README.md';
        if (!file_exists($link) && file_exists($target)) {
          symlink($target, $link);
        }
        else if (!file_exists($link) && file_exists($other_target)) {
          $target = $packages_folder . DIRECTORY_SEPARATOR . 'ec-component-' . $base_component . DIRECTORY_SEPARATOR . 'README.md';
          symlink($target, $link);
        }
        else {
          touch($link);
        }
      }
    } catch (exception $e) {
      // Not throwing facilitates continuation.
      // If a component has an error it's not going to stop the rest.
      // throw new Exception($e);
      print($e);
    }
  }
}
