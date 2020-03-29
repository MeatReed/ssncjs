module.exports.check = (serials, serial_input) => {
  let serial = serial_input.replace(/\s/g, '')
  if (serial.length >= 4) {

    let first_part = serial.slice(0, 4).toUpperCase();;
    let second_part = serial.slice(3, 10);;
    let category_serials;

    if (serial.length <= 10) return send_data(serial, first_part, serial.slice(3, 10));

    if (isNaN(second_part)) return send_data(serial, first_part, second_part);

    category_serials = serials[first_part];

    if (!category_serials) return send_data(serial, first_part, second_part);

    let category_serials_array = Object.entries(category_serials).sort()

    if (second_part <= parseInt(category_serials_array[0][0])) {
      return send_data(serial, first_part, second_part, category_serials_array[0][1]);
    } else {
      if (second_part <= parseInt(category_serials_array[1][0])) {
        return send_data(serial, first_part, second_part, category_serials_array[1][1]);
      } else {
        return send_data(serial, first_part, second_part, category_serials_array[2][1]);
      };
    };

  } else {
    return send_data(serial, null, null);
  }
}

function send_data(serial, prefix, serial_digits, status, msg) {
  return {
    serial: serial,
    prefix: prefix,
    serial_digits: serial_digits,
    status: status || "incorrect"
  };
};