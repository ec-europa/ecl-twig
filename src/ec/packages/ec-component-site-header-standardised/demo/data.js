/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specEnglishData from '@ecl/ec-specs-site-header-standardised/demo/data--en';
import specFrenchData from '@ecl/ec-specs-site-header-standardised/demo/data--fr';

import { formatLink } from '@ecl-twig/data-utils';

const defaultSprite = 'static/icons.svg';

const englishBanner = 'static/media/logo--en.svg';
const frenchBanner = 'static/media/logo--fr.svg';

const adapter = initialData => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.banner_top = adaptedData.bannerTop;
  if (adaptedData.banner_top instanceof Object) {
    adaptedData.banner_top = formatLink(adaptedData.banner_top);
  }
  delete adaptedData.bannerTop;
  // Login toggle.
  adaptedData.login_toggle = {
    label_not_logged: adaptedData.loginToggle.labelNotLogged,
    href_not_logged: adaptedData.loginToggle.hrefNotLogged,
    label_logged: adaptedData.loginToggle.labelLogged,
    href_logged: adaptedData.loginToggle.hrefLogged,
  };
  delete adaptedData.loginToggle;
  // Login box.
  adaptedData.login_box = adaptedData.loginBox;
  delete adaptedData.loginBox;
  // Language selector.
  const lng = adaptedData.logo.language;
  adaptedData.logo.src = lng === 'en' ? englishBanner : frenchBanner;

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
  adaptedData.menu_label = 'Menu';
  adaptedData.icon_file_path = defaultSprite;
  return adaptedData;
};

export const englishData = adapter(specEnglishData);
export const frenchData = adapter(specFrenchData);
