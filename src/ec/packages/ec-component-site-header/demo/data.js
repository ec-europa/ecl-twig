/* eslint-disable import/no-extraneous-dependencies */
import specEnglishData from '@ecl/ec-specs-site-header/demo/data--en';
import specFrenchData from '@ecl/ec-specs-site-header/demo/data--fr';

const defaultSprite = '/static/icons.svg';

const englishBanner = 'static/media//logo--en.svg';
const frenchBanner = 'static/media//logo--fr.svg';

function prepareSiteHeaderData(data, lng) {
  const output = data;

  output.logo.src = lng === 'en' ? englishBanner : frenchBanner;

  output.language_selector = output.languageSelector;

  output.language_selector.overlay.close_label =
    output.languageSelector.overlay.closeLabel;

  output.language_selector.overlay.items.forEach(item => {
    if (item.isActive !== undefined) {
      item.is_active = true; // eslint-disable-line no-param-reassign
    }
  });

  output.search_form = {
    text_input: {
      id: output.searchForm.textInputId,
      name: output.searchForm.inputLabel,
    },
    button: {
      label: output.searchForm.buttonLabel,
    },
  };

  output.icon_file_path = defaultSprite;

  return output;
}

export const englishData = prepareSiteHeaderData(specEnglishData, 'en');
export const frenchData = prepareSiteHeaderData(specFrenchData, 'fr');
