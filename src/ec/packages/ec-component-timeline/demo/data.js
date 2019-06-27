/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-timeline/demo/data';

const adapter = initialData => {
  const from = 10;
  const to = -2;

  let hiddenCount = 0;
  if (to > 0) {
    hiddenCount = to - from;
  } else {
    hiddenCount = specData.items.length - (from + Math.abs(to));
  }

  return {
    toggle_collapsed: 'Show %d more items'.replace('%d', hiddenCount),
    toggle_expanded: 'Hide %d items'.replace('%d', hiddenCount),
    items: initialData.items,
    hide: {
      from,
      to,
    },
  };
};

export default adapter(specData);
