/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specGroup1 from '@ecl/ec-specs-site-header-harmonised/demo/data--group1';
import specGroup2 from '@ecl/ec-specs-site-header-harmonised/demo/data--group2';

import { formatLink } from '@ecl-twig/data-utils';

const defaultSprite = '/icons.svg';

const logo = '/logo--en.svg';

const adapter = initialData => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));
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
  // Language selector.
  adaptedData.logo.src = logo;

  adaptedData.language_selector = adaptedData.languageSelector;
  delete adaptedData.languageSelector;

  adaptedData.language_selector.overlay.close_label =
    adaptedData.language_selector.overlay.closeLabel;
  delete adaptedData.language_selector.overlay.closeLabel;

  adaptedData.language_selector.overlay.items.forEach(item => {
    item.path = item.href;
    delete item.href;
    if (item.isActive) {
      item.active = true; // eslint-disable-line no-param-reassign
      delete item.isActive;
    }
  });
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

export const dataGroup1 = adapter(specGroup1);
export const dataGroup2 = adapter(specGroup2);
