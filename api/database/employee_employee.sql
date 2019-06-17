SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- Database: `employee`


CREATE TABLE IF NOT EXISTS `employee` (
`id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
`fname` varchar(50) COLLATE utf8_unicode_ci NOT NULL ,
  `lname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(20) NOT NULL,
  'token' varchar(50) NOT NULL,

) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `emplye`
--

