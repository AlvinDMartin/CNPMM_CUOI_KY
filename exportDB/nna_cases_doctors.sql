-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: nna
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cases_doctors`
--

DROP TABLE IF EXISTS `cases_doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cases_doctors` (
  `idCase_doctor` int NOT NULL AUTO_INCREMENT,
  `dateRegister` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `cases_idCase` int NOT NULL,
  `doctors_idDoctor` int NOT NULL,
  PRIMARY KEY (`idCase_doctor`),
  KEY `fk_cases_doctors_cases1_idx` (`cases_idCase`),
  KEY `fk_cases_doctors_doctors1_idx` (`doctors_idDoctor`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cases_doctors`
--

LOCK TABLES `cases_doctors` WRITE;
/*!40000 ALTER TABLE `cases_doctors` DISABLE KEYS */;
INSERT INTO `cases_doctors` VALUES (1,'2021-01-03 12:08:08','Triệu chứng: khó thở, chóng mặt','2021-01-03 12:08:08','2021-01-03 12:08:08',1,1),(14,'2021-01-03 12:30:35','Tôi đến trễ 15p nhé','2021-01-03 12:30:35','2021-01-03 12:30:35',6,2),(16,'2021-01-03 14:10:54','Tôi đến trễ 15p nhé','2021-01-03 14:10:54','2021-01-03 14:10:54',7,2);
/*!40000 ALTER TABLE `cases_doctors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-04  3:13:08
