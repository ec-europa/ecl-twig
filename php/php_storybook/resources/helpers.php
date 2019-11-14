<?php
  /**
   * Helper class for the automated story files generation and organisation.
   */
  class storyHelpers {
    // Used to prepend a string in a file.
    function prepend($string, $orig_filename) {
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
    function fixHtml($data_html, $component) {
      if (strpos($component, 'site-header') === 0) {
        $data_html = str_replace('static/media/logo--en.svg','/logo--en.svg', $data_html);
      }
      // Fix icons.
      if (strpos($component, 'social') === FALSE) {
        $data_html = preg_replace(
          ['(xlink:href="[\/]?static\/icons.svg)', '(xlink:href="#)'],
          ['xlink:href="/icons.svg', 'xlink:href="/icons.svg#'],
          $data_html
        );
      } else {
        $data_html = preg_replace('(xlink:href="([\/]?static\/icons.svg)?)', 'xlink:href="/icons-social.svg', $data_html);
      }
      // Not sure the reason why prettier breaks when it finds a closing video tag...
      if ($component == 'gallery') {
        $data_html = preg_replace('(<\/video>)', '/>', $data_html);
      }

      return $data_html;
    }
    // Grouping by deprecated component.
    function deprecatedComponents($component) {
      $deprecated = ['site-header', 'accordion', 'breadcrumb', 'page-header', 'footer'];
      $deprecated_component = in_array($component, $deprecated) ? 'deprecated' : '';

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
      $forms = ['checkbox', 'text-input', 'text-area', 'file-upload', 'radio', 'select', 'search-form'];
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
        return $component_group;
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
  }
