import he from 'he';
import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  const defaultSprite = '/icons.svg';
  if (adaptedData.loginToggle) {
    adaptedData.login_toggle = {
      label_not_logged: adaptedData.loginToggle.labelNotLogged,
      href_not_logged: adaptedData.loginToggle.hrefNotLogged,
      label_logged: adaptedData.loginToggle.labelLogged,
      href_logged: adaptedData.loginToggle.hrefLogged,
    };
    delete adaptedData.loginToggle;
  }
  // Login box.
  adaptedData.login_box = adaptedData.loginBox;
  delete adaptedData.loginBox;
  if (adaptedData.login_box) {
    adaptedData.login_box.description = he.escape(
      adaptedData.login_box.description
    );
  }

  adaptedData.language_selector = adaptedData.languageSelector;
  delete adaptedData.languageSelector;

  adaptedData.language_selector.overlay.close_label =
    adaptedData.language_selector.overlay.closeLabel;
  delete adaptedData.language_selector.overlay.closeLabel;
  adaptedData.language_selector.overlay.items.forEach((item) => {
    item.path = item.href;
    delete item.href;
    if (item.isActive) {
      item.active = true;
      delete item.isActive;
    }
  });
  adaptedData.language_selector.overlay.non_eu_items = adaptedData.language_selector.overlay.itemsNonEu.map(
    (nonEuItem) => formatLinkAlt(nonEuItem)
  );

  adaptedData.language_selector.eu_category =
    adaptedData.language_selector.overlay.categoryEu;
  adaptedData.language_selector.non_eu_category =
    adaptedData.language_selector.overlay.categoryNonEu;
  delete adaptedData.language_selector.overlay.categoryEu;
  delete adaptedData.language_selector.overlay.categoryNonEu;
  delete adaptedData.language_selector.overlay.itemsNonEu;

  adaptedData.search_form = {
    text_input: {
      id: adaptedData.searchForm.textInputId,
      label: adaptedData.searchForm.inputLabel,
    },
    button: {
      label: adaptedData.searchForm.buttonLabel,
    },
    extra_attributes: [{ name: 'id', value: adaptedData.searchForm.id }],
  };
  delete adaptedData.searchForm;

  adaptedData.search_toggle = adaptedData.searchToggle;
  delete adaptedData.searchToggle;

  adaptedData.icon_file_path = defaultSprite;

  return adaptedData;
};

export default adapter;
