function formatItem(i) {
  const item = {
    ...i,
    helper_id: i.helperId,
    helper_text: i.helperText,
    icon_file_path: '/icons.svg',
  };
  if (i.defaultChecked) {
    item.default_checked = i.defaultChecked;
    delete item.defaultChecked;
  }

  delete item.helperId;
  delete item.helperText;

  return item;
}

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.helper_id = adaptedData.helperId;
  adaptedData.helper_text = adaptedData.helperText;
  adaptedData.invalid_text = adaptedData.invalidText;
  adaptedData.legend_id = adaptedData.legendId;
  delete adaptedData.helperId;
  delete adaptedData.helperText;
  delete adaptedData.invalidText;
  delete adaptedData.legendId;

  adaptedData.items = adaptedData.items.map(formatItem);

  return adaptedData;
};

export default adapter;
