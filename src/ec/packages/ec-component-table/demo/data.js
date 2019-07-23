/* eslint-disable import/no-extraneous-dependencies */
import specDataDefault from '@ecl/ec-specs-table/demo/data--default';
import specDataMulti from '@ecl/ec-specs-table/demo/data--multi';

console.log(specDataDefault);

// function formatDefaultHeader(h) {
//   const header = {
//     label: h.label,
//     attributes: h.data-ecl-table-header,
//   };
//
//   return header;
// }
//
// function formatDefaultRow(h) {
//   const row = {
//     label: h.label,
//   };
//
//   return header;
// }
//
// function formatMultiHeader(h) {
//   const header = {
//     label: h.label,
//     css_class: h.className,
//   };
//
//   return header;
// }

export const dataDefault = {
  headers: specDataDefault.headers,
  rows: specDataDefault.rows,
};

export const dataMulti = {
  headers: specDataMulti.headers,
  rows: specDataMulti.rows,
};
