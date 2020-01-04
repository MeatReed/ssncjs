module.exports.check = (serials, serial_input) => {

    if (serial_input.join(" ").length >= 4) {

        let first_part = serial_input.join("").slice(0, 4).toUpperCase();;
        let second_part = serial_input.join("").slice(3, 10);;
        let category_serials;

        if (serial_input.join("").length <= 10) return send_data(serial_input, first_part, serial_input.join("").slice(3, 10));

        if (isNaN(second_part)) return send_data(serial_input, first_part, second_part);

        category_serials = serials[first_part];

        if (!category_serials) return send_data(serial_input, first_part, second_part);

        let category_serials_array = Object.entries(category_serials).sort()

        if (second_part <= parseInt(category_serials_array[0][0])) {
            return send_data(serial_input, first_part, second_part, category_serials_array[0][1]);
        } else {
            if (second_part <= parseInt(category_serials_array[1][0])) {
                return send_data(serial_input, first_part, second_part, category_serials_array[1][1]);
            } else {
                return send_data(serial_input, first_part, second_part, category_serials_array[2][1]);
            };
        };

    } else {
        return send_data(serial_input, null, null);
    };

};

function send_data(serial_input, prefix, serial_digits, status, msg) {
    return {
        serial: serial_input,
        prefix: prefix,
        serial_digits: serial_digits,
        status: status || "incorrect"
    };
};