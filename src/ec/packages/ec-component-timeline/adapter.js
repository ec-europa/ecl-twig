const adapter = (initialData) => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  const from = 5;
  const to = -2;

  let hiddenCount = 0;
  hiddenCount = to > 0 ? to - from : adaptedData.items.length + to - from;

  return {
    toggle_collapsed: `Show ${hiddenCount} more items`,
    toggle_expanded: `Hide ${hiddenCount} items`,
    icon_path: '/icons.svg',
    items: adaptedData.items,
    hide: {
      from,
      to,
    },
  };
};

export default adapter;
