/* eslint-disable import/no-extraneous-dependencies */
const formatIcon = i => {
  const [type, name] = i.shape.split('--');
  const icon = {
    path: 'static/icons.svg',
    type,
    name,
    size: i.size,
    transform: i.transform,
  };

  return icon;
};

const formatLink = l => {
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

  return link;
};

const formatButton = b => {
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

export { formatIcon, formatLink, formatButton };
