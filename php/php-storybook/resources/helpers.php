<?php
  /**
   * Helper class for the automated story files generation and organisation.
   */
  class storyHelpers {
    // Used to prepend a string in a file.
    function prependToStory($string, $orig_filename) {
      $context = stream_context_create();
      $orig_file = fopen($orig_filename, 'r', 1, $context);

      $temp_filename = tempnam(sys_get_temp_dir(), 'php_prepend_');
      file_put_contents($temp_filename, $string);
      file_put_contents($temp_filename, $orig_file, FILE_APPEND);

      fclose($orig_file);
      unlink($orig_filename);
      rename($temp_filename, $orig_filename);
    }

    // Used to fix icons and other stuff.
    function fixHtml($data_html, $component, $data_json) {
      if ($component =='inpage-navigation') {
        $pageFillerHtml = '';
        foreach ($data_json['links'] as $item) {
          $pageFillerHtml .= $item['item'];
        }
        $data_html = '<div class="ecl-container">
                        <div class="ecl-row ecl-u-mt-l" data-ecl-inpage-navigation-container>
                          <div class="ecl-col-md-3">' . $data_html . '</div>
                          <div class="ecl-col-md-9">' . $pageFillerHtml . '</div>
                          </div>
                        </div>';
      }

      return $data_html;
    }
    // Grouping by deprecated component.
    function deprecatedComponents($component) {
      $deprecated = ['site-header', 'accordion', 'breadcrumb', 'page-header', 'footer'];
      $deprecated_component = in_array($component, $deprecated) ? 'deprecated/' : '';

      return $deprecated_component;
    }
    // Components in families and variants in components.
    function groupComponents($component) {
      // Grouping in families.
      $families = ['core', 'harmonised', 'standardised'];

      foreach ($families as $family) {
        if (strpos($component, $family) !== FALSE) {
          $component_family = $family;
          break;
        }
      }

      if (!empty($component_family)) {
        $component_group = str_replace('-' . $component_family, 's', $component);
      }

      // Other groups.
      $list = ['description-list', 'ordered-list', 'unordered-list'];
      $navigation = ['inpage-navigation', 'link', 'menu-legacy', 'pagination', 'skip-link'];
      $forms = ['checkbox', 'text-input', 'text-area', 'file-upload', 'radio', 'select', 'search-form', 'datepicker'];
      $banners = ['page-banner', 'hero-banner'];

      if (in_array($component, $list)) {
        $component_group = 'list';
      } elseif (in_array($component, $navigation)) {
        $component_group = 'navigation';
      } elseif (in_array($component, $banners)) {
        $component_group = 'banners';
      } elseif (in_array($component, $forms)) {
        $component_group = 'forms';
      }

      if (!empty($component_group)) {
        return $component_group . '/';
      }
    }
    // Retrieves the base component from a variant.
    function baseComponent($variant) {
      $is_modifier = strpos($variant, '--') !== FALSE;
      if ($is_modifier) {
        $base_component = explode('--', $variant)[0];
      } else {
        $base_component = $variant;
      }

      return $base_component;
    }
    // Creates a story.js and links the README file in the given folder.
    function createStoryFiles(
      $folder,
      $base_component,
      $adapted_variant,
      $variant,
      $deprecated_component,
      $component_group,
      $packages_folder
    ) {
      // Not sure why we needed this, but it's the case.
      if (!is_dir($folder . DIRECTORY_SEPARATOR . 'story')) {
        mkdir($folder . DIRECTORY_SEPARATOR . 'story');
      }
      // Prepare a folder for the js rendered files.
      if (!is_dir($folder . DIRECTORY_SEPARATOR . 'js')) {
        mkdir($folder . DIRECTORY_SEPARATOR . 'js');
      }
      // Get the story template.
      $story_template = file_get_contents(__DIR__ . '/../resources/story-template.txt');

      // Replace the content with our variables.
      $story_content = str_replace(
        ['#component#', '#componentVariant#', '#phpFileName#', '#deprecated#', '#componentGroup#'],
        [ucfirst($base_component), $adapted_variant, $variant, $deprecated_component, $component_group]
        , $story_template
      );
      // Here we createthe story file.
      file_put_contents(
        $folder . DIRECTORY_SEPARATOR . 'story' . DIRECTORY_SEPARATOR . $base_component . '.story.js',
        $story_content, FILE_APPEND | LOCK_EX
      );
      // Symlink the docs.
      $link = $folder . DIRECTORY_SEPARATOR . 'README.md';
      $target = $packages_folder . DIRECTORY_SEPARATOR . 'ec-component-' . $base_component . DIRECTORY_SEPARATOR . 'README.md';
      if (!file_exists($link) && file_exists($target)) {
        symlink($target, $link);
      }
    }
    // Code to import a variant for the story file.
    function setImportCode($adapted_variant, $variant, $result_extension) {
      $import = "import " . $adapted_variant . " from '../" . $variant . $result_extension . "';\n";
      $import .= "import " . $adapted_variant . "Js from '../js/" . $variant . ".js.html';\n";
      return $import;
    }
    // Code to export a story.
    function setExportCode($variant_name, $adapted_variant) {
      return "export const ". $variant_name . " = () => " . $adapted_variant .";\n\n";
    }
    // Code to define the story for a given export.
    function setStoryCode($variant_name, $adapted_variant) {
      return $variant_name . ".story = { parameters: { notes: { markdown: docs }, diff: { jsmarkup: " . $adapted_variant . "Js }}};\n\n";
    }
    // Update the story file.
    function updateStoryFile($folder, $base_component, $data_story) {
      file_put_contents(
        $folder . DIRECTORY_SEPARATOR . 'story' . DIRECTORY_SEPARATOR . $base_component . '.story.js',
        $data_story, FILE_APPEND | LOCK_EX
      );
    }
  }
