<?php

namespace EclTwig\Twig\Loader;

use Twig\Loader\FilesystemLoader;

/**
 * Class EclTwigLoader.
 *
 * @package EclTwig\Loader
 *
 */
class EclTwigLoader extends FilesystemLoader {

  /**
   * Paths from where to load templates.
   *
   * @var array
   */
  protected $paths;

  /**
   * Root path.
   *
   * @var string
   */
  protected $root;

  /**
   * Twig extension.
   *
   * @var string
   */
  protected $extension;

  /**
   * EclTwigLoader constructor.
   *
   * @param array|string $paths
   *    A path or an array of paths where to look for templates.
   * @param null|string $root
   *    The root path common to all relative paths (null for getcwd())
   * @param string $extension
   *    Twig extension.
   */
  public function __construct(
    $paths = [],
    $root = NULL,
    $extension = '.html.twig'
  ) {
    parent::__construct($paths, $root);

    $this->root = $root;
    $this->paths = $paths;
    $this->extension = $extension;
  }

  /**
   * {@inheritdoc}
   */
  protected function findTemplate($name, $throw = TRUE) {
    $system = getenv('ECL_SYSTEM');

    // Handle relative paths.
    if (strpos($name, '../') !== FALSE) {
      $paths = explode(DIRECTORY_SEPARATOR, $name);
      $template = $paths[count($paths) - 1];
    }
    else {
      $template = $name;
    }

    $component_name = explode($this->extension, $template)[0];

    $component = $this->root .
      DIRECTORY_SEPARATOR .
      $system .
      '-component-' .
      $component_name .
      DIRECTORY_SEPARATOR .
      $template;

    if (isset($this->cache[$component])) {
      return $this->cache[$component];
    }

    if (is_file($component)) {
      $this->cache[$component] = $component;
      return $component;
    }

    return parent::findTemplate($component);
  }

}
