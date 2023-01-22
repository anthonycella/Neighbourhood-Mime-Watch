USE db;

INSERT INTO users (phone_number, first_name, last_name, username, user_password) VALUES ("(919) 410-1939", "Bruce", "Wayne", "becauseahmbatman", "opensesame");
INSERT INTO users (phone_number, first_name, last_name, username, user_password) VALUES ("(915) 555-0199", "Darlene", "McKinnon", "monstertruckgal87", "opensesame");
INSERT INTO users (phone_number, first_name, last_name, username, user_password) VALUES ("0-188-999-881-999-119-725-3", "Maurice", "Moss", "negative1", "opensesame");
INSERT INTO users (phone_number, first_name, last_name, username, user_password) VALUES ("(070) 412-9084", "Abigail", "Lytar", "uganda4life", "opensesame");
INSERT INTO users (phone_number, first_name, last_name, username, user_password) VALUES ("(912) 059-9119", "Billy", "Blazes", "ready2roll", "opensesame");

INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content, group_id) VALUES ("becauseahmbatman", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "reported", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "Hey guys- just saw someone trying to open door knobs throughout the 4th floor. Keep and eye out and be safe.", 5);
INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content, group_id) VALUES ("monstertruckgal87", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "resolved", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "There's a weird creepy guy dressed in black spandex and a cape", 5);
INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content, group_id) VALUES ("uganda4life", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "authorities notified", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "There's a mime blocking the road. I accidentally ran over it.", 5);
INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content, group_id) VALUES ("negative1", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "reported", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "HELLO..... I SAW SOME SUSSCPICIOUS ACTIVITY BY THE BACK ENTRACNCE T", 5);
INSERT INTO reports (user_reporting, date_created, report_status, last_updated, content, group_id) VALUES ("ready2roll", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "resolved", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)", "Fire out of control at Moss's house, just got his email.", 5);

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


INSERT INTO neighbourhood_watch_groups (group_name, date_created) VALUES ("Bat Cave Manor", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)");
INSERT INTO neighbourhood_watch_groups (group_name, date_created) VALUES ("Stony Hill", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)");
INSERT INTO neighbourhood_watch_groups (group_name, date_created) VALUES ("Longleaf Apartments", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)");
INSERT INTO neighbourhood_watch_groups (group_name, date_created) VALUES ("4th Street Plaza", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)");
INSERT INTO neighbourhood_watch_groups (group_name, date_created) VALUES ("Mount Pleasant Building", "Sat Jan 21 2023 14:54:28 GMT-0500 (Eastern Standard Time)");
