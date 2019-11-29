/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specEnglishData from '@ecl/ec-specs-site-header-core/demo/data--en';
import specFrenchData from '@ecl/ec-specs-site-header-core/demo/data--fr';

const defaultSprite = '/icons.svg';

const englishBanner = '/logo--en.svg';
const frenchBanner = '/logo--fr.svg';

const adapter = initialData => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));

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

  adaptedData.search_form = {
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

  adaptedData.search_toggle = adaptedData.searchToggle;
  delete adaptedData.searchToggle;

  adaptedData.icon_file_path = defaultSprite;

  return adaptedData;
};

export const englishData = adapter(specEnglishData);
export const frenchData = adapter(specFrenchData);
