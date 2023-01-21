USE db;

INSERT INTO users (phone_number, first_name, last_name, username) VALUES ("(919) 410-1939", "Bruce", "Wayne", "becauseahmbatman");
INSERT INTO users (phone_number, first_name, last_name, username) VALUES ("(915) 555-0199", "Darlene", "McKinnon", "monstertruckgal87");
INSERT INTO users (phone_number, first_name, last_name, username) VALUES ("0-188-999-881-999-119-725-3", "Maurice", "Moss", "negative1");
INSERT INTO users (phone_number, first_name, last_name, username) VALUES ("(070) 412-9084", "Abigail", "Lytar", "uganda4life");
INSERT INTO users (phone_number, first_name, last_name, username) VALUES ("(912) 059-9119", "Billy", "Blazes", "ready2roll");

INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content) VALUES ("becauseahmbatman", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "reported", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "There's a robin that won't leave me alone", 5);
INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content) VALUES ("monstertruckgal87", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "resolved", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "There's a weird creepy guy dressed in black spandex and a cape", 5);
INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content) VALUES ("uganda4life", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "authorities notified", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "There's a mime blocking the road. I accidentally ran over it.", 5);
INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content) VALUES ("negative1", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "reported", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "There's a tree blocking the road. Watch out for raccoons.", 5);
INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content) VALUES ("ready2roll", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "resolved", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "Fire out of control at Moss's house, just got his email.", 5);

INSERT INTO users_groups VALUES ("(919) 410-1939", 5);
INSERT INTO users_groups VALUES ("(915) 555-0199", 5);
INSERT INTO users_groups VALUES ("0 188 999 881 999 119 725 3", 5);
INSERT INTO users_groups VALUES ("(070) 412-9084", 5);
INSERT INTO users_groups VALUES ("(912) 059-9119", 5);

INSERT INTO users_groups VALUES ("(915) 555-0199", 4);
INSERT INTO users_groups VALUES ("(919) 410-1939", 4);
INSERT INTO users_groups VALUES ("(070) 412-9084", 4);
INSERT INTO users_groups VALUES ("(912) 059-9119", 4);

INSERT INTO users_groups VALUES ("0 188 999 881 999 119 725 3", 3);
INSERT INTO users_groups VALUES ("(915) 555-0199", 3);
INSERT INTO users_groups VALUES ("(070) 412-9084", 3);

INSERT INTO users_groups VALUES ("(912) 059-9119", 2);
INSERT INTO users_groups VALUES ("0 188 999 881 999 119 725 3", 2);

INSERT INTO users_groups VALUES ("(919) 410-1939", 1);