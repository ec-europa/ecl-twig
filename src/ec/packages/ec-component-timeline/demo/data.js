/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-timeline/demo/data';

const adapter = initialData => {
  const from = 10;
  const to = -2;

  let hiddenCount = 0;
  if (to > 0) {
    hiddenCount = to - from;
  } else {
    hiddenCount = initialData.items.length + to - from;
  }

  return {
    toggle_collapsed: `Show ${hiddenCount} more items`,
    toggle_expanded: `Hide ${hiddenCount} items`,
    items: initialData.items,
    hide: {
      from,
      to,
    },
  };
};

export default adapter(specData);
