import { formatLink, formatLinkAlt } from '@ecl-twig/data-utils';
import he from 'he';

const adapter = (initialData) => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  const defaultSprite = '/icons.svg';
  adaptedData.banner_top = adaptedData.bannerTop;
  if (adaptedData.banner_top instanceof Object) {
    adaptedData.banner_top = formatLink(adaptedData.banner_top);
  }
  delete adaptedData.bannerTop;
  // Login toggle.
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

  adaptedData.language_selector.eu_category =
    adaptedData.language_selector.overlay.categoryEu;
  adaptedData.language_selector.non_eu_category =
    adaptedData.language_selector.overlay.categoryNonEu;
  delete adaptedData.language_selector.overlay.categoryEu;
  delete adaptedData.language_selector.overlay.categoryNonEu;

  adaptedData.language_selector.overlay.close_label =
    adaptedData.language_selector.overlay.closeLabel;
  delete adaptedData.language_selector.overlay.closeLabel;

  adaptedData.language_selector.overlay.items = adaptedData.language_selector.overlay.items.map(
    (euItem) => formatLinkAlt(euItem)
  );
  adaptedData.language_selector.overlay.non_eu_items = adaptedData.language_selector.overlay.itemsNonEu.map(
    (nonEuItem) => formatLinkAlt(nonEuItem)
  );
  delete adaptedData.language_selector.overlay.itemsNonEu;
  // Search toggle.
  adaptedData.search_toggle = adaptedData.searchToggle;
  delete adaptedData.searchToggle;
  // Search form.
  adaptedData.search_form = {
    extra_attributes: [{ name: 'id', value: adaptedData.searchForm.id }],
    text_input: {
      id: adaptedData.searchForm.textInputId,
      name: adaptedData.searchForm.inputLabel,
      label: adaptedData.searchForm.inputLabel,
    },
    button: {
      label: adaptedData.searchForm.buttonLabel,
    },
  };
  delete adaptedData.searchForm;

  adaptedData.icon_file_path = defaultSprite;
  adaptedData.menu_label = 'Menu';

  return adaptedData;
};

export default adapter;
