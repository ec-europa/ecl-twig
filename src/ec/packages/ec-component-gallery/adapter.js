import { formatLink, formatIcon, formatButton } from '@ecl-twig/data-utils';

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

const adapter = initialData => {
  const adaptedData = {
    items: initialData.items.map(formatItem),
    overlay: {
      close: formatButton(initialData.overlay.close),
      previous: formatButton(initialData.overlay.previous),
      next: formatButton(initialData.overlay.next),
      counter_separator: initialData.overlay.counterSeparator,
      download: formatLink(initialData.overlay.download),
      share: formatLink(initialData.overlay.share),
    },
  };

  return adaptedData;
};

export default adapter;
