const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.icon_path = '/icons.svg';
  adaptedData.site_name = adaptedData.siteName;
  delete adaptedData.siteName;
  adaptedData.menu_link = adaptedData.menuLink;
  delete adaptedData.menuLink;
  if (adaptedData.items && Array.isArray(adaptedData.items)) {
    for (const mainItem of adaptedData.items) {
      mainItem.path = mainItem.href;
      delete mainItem.href;
      if (mainItem.hasSubmenuLabel) {
        mainItem.submenu_label = mainItem.hasSubmenuLabel;
        delete mainItem.hasSubmenuLabel;
      }
      if (mainItem.isCurrent) {
        mainItem.is_current = mainItem.isCurrent;
        delete mainItem.isCurrent;
      }

      if (Array.isArray(mainItem.subItems)) {
        mainItem.children = mainItem.subItems;
        delete mainItem.subItems;
        for (const item of mainItem.children) {
          item.path = item.href;
          delete item.href;
          if (item.isCurrent) {
            item.is_current = item.isCurrent;
            delete item.isCurrent;
          }
        }
      }
    }
  }

  return adaptedData;
};

export default adapter;
