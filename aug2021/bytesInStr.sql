SELECT
    octet_length(number1::text) octnum1, octet_length(number2::text) octnum2, octet_length(number3::text) octnum3, octet_length(number4::text) octnum4, octet_length(number5::text) octnum5
FROM
    numbers;