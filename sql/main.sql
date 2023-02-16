--- Create database

CREATE DATABASE IF NOT EXISTS `CollegeCo` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `CollegeCo`;


--- Table: `LoginDetails`

-- +----------+--------------+------+-----+---------+-------+  
-- | Field    | Type         | Null | Key | Default | Extra |
-- +----------+--------------+------+-----+---------+-------+
-- | username | varchar(200) | YES  |     | NULL    |       |
-- | email    | varchar(200) | NO   | PRI | NULL    |       |
-- | password | varchar(150) | YES  |     | NULL    |       |
-- | role     | varchar(20)  | YES  |     | NULL    |       |
-- +----------+--------------+------+-----+---------+-------+

CREATE TABLE IF NOT EXISTS `LoginDetails` (
  `username` varchar(200) DEFAULT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(150) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



-- Table structure for table `UserInfo`
-- +------------+-------------+------+-----+---------+-------+
-- | Field      | Type        | Null | Key | Default | Extra |
-- +------------+-------------+------+-----+---------+-------+
-- | regNo      | varchar(20) | NO   |     | NULL    |       |
-- | email      | varchar(50) | NO   | PRI | NULL    |       |
-- | tutor      | varchar(50) | NO   |     | NULL    |       |
-- | department | varchar(50) | NO   |     | NULL    |       |
-- | year       | varchar(50) | NO   |     | NULL    |       |
-- | address    | text        | NO   |     | NULL    |       |
-- | phone      | varchar(50) | NO   |     | NULL    |       |
-- +------------+-------------+------+-----+---------+-------+


CREATE TABLE UserInfo(
  regNo varchar(20) NOT NULL,
  email varchar(50) NOT NULL,
  tutor varchar(50) NOT NULL,
  department varchar(50) NOT NULL,
  year varchar(50) NOT NULL,
  address text NOT NULL,
  phone varchar(50) NOT NULL
);

ALTER TABLE UserInfo ADD PRIMARY KEY (email);


-- Attendance Table
-- +--------+-------------+------+-----+---------+-------+
-- | Field  | Type        | Null | Key | Default | Extra |
-- +--------+-------------+------+-----+---------+-------+
-- | email  | varchar(50) | YES  | PRI | NULL    |       |
-- | absent | text        | YES  |     | NULL    |       |
-- | OD     | text        | YES  |     | NULL    |       |
-- | month  | varchar(20) | YES  |     | NULL    |       |
-- +--------+-------------+------+-----+---------+-------+

CREATE TABLE StudentAttendance (email varchar(50),absent text,OD text,month varchar (20));

-- ALTER TABLE StudentAttendance ADD PRIMARY KEY(email);
-- StuentMarks Table

-- +----------+-------------+------+-----+---------+-------+
-- | Field    | Type        | Null | Key | Default | Extra |
-- +----------+-------------+------+-----+---------+-------+
-- | email    | varchar(50) | NO   | PRI | NULL    |       |
-- | testname | varchar(20) | YES  |     | NULL    |       |
-- | graphics | varchar(5)  | YES  |     | NULL    |       |
-- | iot      | varchar(5)  | YES  |     | NULL    |       |
-- | webtech  | varchar(5)  | YES  |     | NULL    |       |
-- | stlab    | varchar(5)  | YES  |     | NULL    |       |
-- | project  | varchar(5)  | YES  |     | NULL    |       |
-- +----------+-------------+------+-----+---------+-------+
CREATE TABLE StudentMarks(email varchar(50),testname varchar(20), graphics varchar(5), iot varchar(5), webtech varchar(5), stlab varchar(5), project varchar(5));

-- alter table StudentMarks add primary key(email);



-- Library Table

-- +------------+--------------+------+-----+---------+-------+
-- | Field      | Type         | Null | Key | Default | Extra |
-- +------------+--------------+------+-----+---------+-------+
-- | email      | varchar(50)  | NO   | PRI | NULL    |       |
-- | bookName   | text         | YES  |     | NULL    |       |
-- | issueDate  | varchar(200) | YES  |     |         |       |
-- | returnDate | varchar(200) | YES  |     | NULL    |       |
-- +------------+--------------+------+-----+---------+-------+

CREATE TABLE StudentLibrary(email varchar(50),bookName text,issueDate varchar(200) default '',returnDate varchar(200));

-- ALTER TABLE StudentLibrary ADD PRIMARY KEY(email);

