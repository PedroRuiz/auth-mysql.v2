/**
* run this sql in your database
**/

CREATE TABLE `applications` (
  `idapplications` int(11) NOT NULL AUTO_INCREMENT,
  `apikey` char(31) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT current_timestamp(),
  `end_time` date DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idapplications`),
  UNIQUE KEY `K_apikey` (`apikey`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


CREATE TABLE `apiusers` (
  `idapiusers` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `applicationkey` int(11) NOT NULL,
  `username` varchar(45) CHARACTER SET latin1 NOT NULL,
  `email` varchar(255) CHARACTER SET latin1 NOT NULL,
  `password` varchar(80) CHARACTER SET latin1 NOT NULL,
  `uuid` char(36) CHARACTER SET latin1 NOT NULL,
  `apikey` char(31) CHARACTER SET latin1 NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date DEFAULT NULL,
  `active` smallint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`idapiusers`),
  UNIQUE KEY `unique-uuid` (`uuid`),
  UNIQUE KEY `unique-apikey` (`apikey`),
  UNIQUE KEY `unique-app-email` (`email`,`applicationkey`),
  KEY `fk_apiusers_1_idx` (`applicationkey`),
  CONSTRAINT `fk_apiusers_1` FOREIGN KEY (`applicationkey`) REFERENCES `applications` (`idapplications`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=78941 DEFAULT CHARSET=utf8

