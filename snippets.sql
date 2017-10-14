-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2017 at 02:23 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `snippets`
--

-- --------------------------------------------------------

--
-- Table structure for table `snips`
--

CREATE TABLE `snips` (
  `id` bigint(20) NOT NULL,
  `name` text NOT NULL,
  `descrip` text NOT NULL,
  `code` mediumtext NOT NULL,
  `language` text NOT NULL,
  `created_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `snips`
--

INSERT INTO `snips` (`id`, `name`, `descrip`, `code`, `language`, `created_dt`) VALUES
(1, 'log', 'log out in the console', ' console.log(''string'');  ', 'javascript', '0000-00-00 00:00:00'),
(2, 'echo', 'echo or print out info', '  echo(''data'');  ', 'php', '0000-00-00 00:00:00'),
(8, 'monkey', 'wrencher', 'console.log(monkey', 'javascriptz', '2017-10-12 13:33:29'),
(10, 'asdf', 'asdf', 'asdf', 'asdf', '2017-10-13 13:30:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `snips`
--
ALTER TABLE `snips`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `snips`
--
ALTER TABLE `snips`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
