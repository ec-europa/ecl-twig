const formatIcon = (i) => {
  const [type, name] = i.shape.split('--');
  const icon = {
    path: '/icons.svg',
    type,
    name,
    size: i.size,
    transform: i.transform,
  };

  return icon;
};

const formatLink = (l) => {
  const link = {
    link: {
      label: l.label,
      path: l.href ? l.href : '#',
    },
  };

  if (l.icon) {
    link.link.icon_position = l.iconPosition;
    link.icon = formatIcon(l.icon);
  }

  if (l.lang) {
    link.link.lang = l.lang;
  }

  if (l.hreflang) {
    link.link.hreflang = l.hreflang;
  }

  link.link.aria_label = l.ariaLabel ? l.ariaLabel : 'Aria label default';

  return link;
};

const formatLinkAlt = (a) => {
  const link = {
    label: a.label,
    path: a.href ? a.href : '#',
  };

  if (a.isActive) {
    link.active = true;
  }

  if (a.icon) {
    link.icon_position = a.iconPosition;
    link.icon = formatIcon(a.icon);
  }

  if (a.lang) {
    link.lang = a.lang;
  }

  if (a.hreflang) {
    link.hreflang = a.hreflang;
  }

  link.aria_label = a.aria_label ? a.aria_label : 'Aria label default';

  return link;
};

const formatButton = (b) => {
  const button = {
    variant: b.variant,
    label: b.label,
  };

  if (b.icon) {
    button.icon = formatIcon(b.icon);
    button.icon_position = b.iconPosition;
  }

  return button;
};

module.exports = {
  formatIcon,
  formatLink,
  formatLinkAlt,
  formatButton,
};
