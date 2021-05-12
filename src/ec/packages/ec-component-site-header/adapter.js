import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  const defaultSprite = '/icons.svg';
  const englishBanner = '/logo--en.svg';
  const frenchBanner = '/logo--fr.svg';

  const lng = adaptedData.logo.language;
  adaptedData.logo.src_desktop = lng === 'en' ? englishBanner : frenchBanner;

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

  adaptedData.language_selector.overlay.items =
    adaptedData.language_selector.overlay.items.map((euItem) =>
      formatLinkAlt(euItem)
    );
  adaptedData.language_selector.overlay.non_eu_items =
    adaptedData.language_selector.overlay.itemsNonEu.map((nonEuItem) =>
      formatLinkAlt(nonEuItem)
    );
  delete adaptedData.language_selector.overlay.itemsNonEu;

  adaptedData.search_form = {
    text_input: {
      id: adaptedData.searchForm.textInputId,
      label: adaptedData.searchForm.inputLabel,
    },
    button: {
      label: adaptedData.searchForm.buttonLabel,
    },
  };
  delete adaptedData.searchForm;

  adaptedData.icon_file_path = defaultSprite;

  return adaptedData;
};

export default adapter;
