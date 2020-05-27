/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-gallery/demo/data';

const defaultSprite = '/static/icons.svg';

function formatIcon(i) {
  const [type, name] = i.shape.split('--');
  const icon = {
    path: defaultSprite,
    type,
    name,
    size: i.size,
    transform: i.transform,
  };

  return icon;
}

function formatButton(b) {
  const button = {
    variant: b.variant,
    label: b.label,
  };

  if (b.icon) {
    button.icon = formatIcon(b.icon);
    button.icon_position = b.iconPosition;
  }

  return button;
}

function formatLink(l) {
  const link = {
    link: {
      label: l.label,
      path: l.href,
    },
  };

  if (l.icon) {
    link.icon = formatIcon(l.icon);
    link.icon_position = l.icon_position;
  }

  return link;
}

function formatItem(i) {
  const item = {
    description: i.description,
    meta: i.meta,
    share_path: i.shareHref,
    video: i.video,
    image: i.image,
  };

  if (i.video && i.video.tracks && Array.isArray(i.video.tracks)) {
    i.video.tracks.forEach(track => {
      track.src_lang = track.srcLang;
      delete track.srcLang;
    });
  } else if (!i.image || !i.image.alt) {
    // Fallback to previous structure
    item.path = i.src;
    item.alt = i.alt;
  }

  if (i.icon) {
    item.icon = formatIcon(i.icon);
  }

  return item;
}

const data = {
  items: specData.items.map(formatItem),
  overlay: {
    close: formatButton(specData.overlay.close),
    previous: formatButton(specData.overlay.previous),
    next: formatButton(specData.overlay.next),
    counter_separator: specData.overlay.counterSeparator,
    download: formatLink(specData.overlay.download),
    share: formatLink(specData.overlay.share),
  },
};

data.overlay.download.link.path = '/example';
data.overlay.share.link.path = '/example';

export default data;
