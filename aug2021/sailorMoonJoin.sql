SELECT
    senshi_name sailor_senshi, real_name_jpn real_name, cats.name cat, school school
FROM
    sailorsenshi ss
LEFT JOIN cats c
ON ss.cat_id = c.id
LEFT JOIN schools s
ON ss.school_id = s.id;



SELECT senshi_name sailor_senshi, real_name_jpn real_name, c.name cat, school
FROM sailorsenshi s
LEFT JOIN cats c
  ON s.cat_id = c.id
LEFT JOIN schools sc
 ON s.school_id = sc.id