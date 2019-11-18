/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import { formatLinkAlt } from '@ecl-twig/data-utils';
import specCard from '@ecl/ec-specs-card/demo/data--card';
import specCardEvent from '@ecl/ec-specs-card/demo/data--card-event';
import specCardTag from '@ecl/ec-specs-card/demo/data--card-tag';
import specTile from '@ecl/ec-specs-card/demo/data--tile';

specTile.type = 'tile';

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.card = {};
  adaptedData.card.description = adaptedData.description;
  adaptedData.card.title = adaptedData.title;
  delete adaptedData.description;
  if (adaptedData.type) {
    adaptedData.card.type = adaptedData.type;
    delete adaptedData.type;
  }
  if (adaptedData.meta) {
    const { meta } = adaptedData;
    adaptedData.card.meta = [];
    adaptedData.card.meta.push(meta);
    delete adaptedData.meta;
  }
  if (adaptedData.tags) {
    adaptedData.card.tags = adaptedData.tags;
    adaptedData.card.tags.forEach(item => {
      item.path = item.href;
      delete item.href;
    });
    delete adaptedData.tags;
  }
  if (adaptedData.card.title.href) {
    adaptedData.card.title.path = adaptedData.card.title.href;
    adaptedData.card.title.type = 'standalone';
  }
  if (adaptedData.image) {
    adaptedData.card.image = adaptedData.image;
    delete adaptedData.image;
  }
  if (adaptedData.infos) {
    adaptedData.card.infos = adaptedData.infos;
    adaptedData.card.infos.forEach(info => {
      info.icon.path = '/icons.svg';
      info.icon.name = info.icon.shape;
      delete info.icon.shape;
    });
    delete adaptedData.infos;
  }
  if (adaptedData.links) {
    adaptedData.card.links = adaptedData.links;
    adaptedData.card.links = adaptedData.card.links.map(formatLinkAlt);
    delete adaptedData.links;
  }
  delete adaptedData.title;

  return adaptedData;
};

export const dataCard = adapter(specCard);
export const dataTile = adapter(specTile);
export const dataCardTag = adapter(specCardTag);
export const dataCardEvent = adapter(specCardEvent);
