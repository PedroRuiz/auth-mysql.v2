CREATE TABLE `apiusers` (
  `idapiusers` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(80) NOT NULL,
  `uuid` char(36) NOT NULL,
  `apikey` char(31) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date DEFAULT NULL,
  `active` smallint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`idapiusers`),
  UNIQUE KEY `unique-email` (`email`),
  UNIQUE KEY `unique-uuid` (`uuid`),
  UNIQUE KEY `unique-apikey` (`apikey`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1