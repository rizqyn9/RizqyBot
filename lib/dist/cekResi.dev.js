"use strict";

var _require = require('../utils/fetcher'),
    fetchJson = _require.fetchJson;

var _require2 = require('./../bot-setting.json'),
    botNname = _require2.botNname;
/**
 * Get Resi Information
 *
 * @param {string} ekspedisi - nama ekpedisi
 * @param {string} resi - no / kode resi
 */


module.exports = cekResi = function cekResi(ekspedisi, resi) {
  return new Promise(function (resolve, reject) {
    fetchJson("https://api.terhambar.com/resi?resi=".concat(resi, "&kurir=").concat(ekspedisi)).then(function (result) {
      if (result.status.code != 200 && result.status.description != 'OK') return resolve(result.status.description); // eslint-disable-next-line camelcase

      var _result$result = result.result,
          summary = _result$result.summary,
          details = _result$result.details,
          delivery_status = _result$result.delivery_status,
          manifest = _result$result.manifest;
      var manifestText = manifest.map(function (x) {
        return "\u23F0 ".concat(x.manifest_date, " ").concat(x.manifest_time, "\n \u2514 ").concat(x.manifest_description);
      });
      var resultText = "\n*".concat(botNname, " x Cek Resi*\n*Data Ekspedisi*\n\u251C ").concat(summary.courier_name, "\n\u251C Resi: ").concat(summary.waybill_number, "\n\u251C Layanan: ").concat(summary.service_code, "\n\u2514 Tanggal Kirim: ").concat(details.waybill_date, "  ").concat(details.waybill_time, "\n\n*Status Pengiriman*\n\u2514 ").concat(delivery_status.status, "\n\n*Data Pengirim*\n\u251C Nama: ").concat(details.shippper_name, "\n\u2514 Alamat: ").concat(details.shipper_address1, " ").concat(details.shipper_city, "\n\n*Data Penerima*\n\u251C Nama: ").concat(details.receiver_name, "\n\u2514 Alamat: ").concat(details.receiver_address1, " ").concat(details.receiver_city, "\n\n*POD Detail*\n\n").concat(manifestText.join('\n'));
      resolve(resultText);
    })["catch"](function (err) {
      console.error(err);
      reject(err);
    });
  });
};