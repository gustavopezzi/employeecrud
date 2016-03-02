-- SQL Dump

-- Database
use DATABASE_NAME_HERE;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

-- Stable structure `employee`
CREATE TABLE IF NOT EXISTS `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

-- Dumping data for table `employee`
INSERT INTO `employee` (`id`, `name`, `address`, `email`, `phone`) VALUES
(1, 'Gustavo Pezzi', '34 Windmill Road Oxford UK', 'gustavo.pezzi@thepwgroup.co.uk', '086454743743'),
(2, 'Arjun Gupta', '4 Purple Road Oxford UK', 'arjun.gupta@thepwgroup.co.uk', '046777784544'),
(3, 'Stuart Bull', '32 Cricket Street London UK', 'stuart.bull@thepwgroup.co.uk', '55140054445'),
(4, 'Spencer Warhust', '3 St James Road Paris FR', 'spencer.warhust@thepwgroup.co.uk', '07444658212');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
