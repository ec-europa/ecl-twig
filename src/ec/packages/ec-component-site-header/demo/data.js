/* eslint-disable import/no-extraneous-dependencies, no-param-reassign  */
import specEnglishData from '@ecl/ec-specs-site-header/demo/data--en';
import specFrenchData from '@ecl/ec-specs-site-header/demo/data--fr';

const defaultSprite = 'static/icons.svg';

const englishBanner = 'static/media/logo--en.svg';
const frenchBanner = 'static/media/logo--fr.svg';

const adapter = initialData => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  const lng = adaptedData.logo.language;
  adaptedData.logo.src = lng === 'en' ? englishBanner : frenchBanner;

  adaptedData.language_selector = adaptedData.languageSelector;

  adaptedData.language_selector.overlay.close_label =
    adaptedData.languageSelector.overlay.closeLabel;

  adaptedData.language_selector.overlay.items.forEach(item => {
    if (item.isActive) {
      item.is_active = true; // eslint-disable-line no-param-reassign
    }
  });

  adaptedData.search_form = {
    text_input: {
      id: adaptedData.searchForm.textInputId,
      name: adaptedData.searchForm.inputLabel,
    },
    button: {
      label: adaptedData.searchForm.buttonLabel,
    },
  };

  adaptedData.icon_file_path = defaultSprite;

  return adaptedData;
};

export const englishData = adapter(specEnglishData);
export const frenchData = adapter(specFrenchData);
