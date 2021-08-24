-- SELECT * FROM products.*, companies.name AS company_name JOIN companies ON company_id = companies.id;
SELECT products.*, companies.name AS company_name
FROM products JOIN companies ON company_id = companies.id