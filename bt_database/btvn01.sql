-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.7.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for btvn_01
DROP DATABASE IF EXISTS `btvn_01`;
CREATE DATABASE IF NOT EXISTS `btvn_01` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `btvn_01`;

-- Dumping structure for table btvn_01.chi_tiet_su_dung_dv
DROP TABLE IF EXISTS `chi_tiet_su_dung_dv`;
CREATE TABLE IF NOT EXISTS `chi_tiet_su_dung_dv` (
  `MaDatPhong` varchar(50) NOT NULL,
  `MaDV` varchar(50) NOT NULL,
  `SoLuong` int(11) DEFAULT NULL,
  PRIMARY KEY (`MaDatPhong`,`MaDV`),
  KEY `MaDV_foreign` (`MaDV`),
  CONSTRAINT `MaDV_foreign` FOREIGN KEY (`MaDV`) REFERENCES `dich_vu_di_kem` (`MaDV`),
  CONSTRAINT `MaDatPhong_foreign` FOREIGN KEY (`MaDatPhong`) REFERENCES `dat_phong` (`MaDatPhong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Dumping data for table btvn_01.chi_tiet_su_dung_dv: ~7 rows (approximately)
DELETE FROM `chi_tiet_su_dung_dv`;
INSERT INTO `chi_tiet_su_dung_dv` (`MaDatPhong`, `MaDV`, `SoLuong`) VALUES
	('DP0001', 'DV001', 20),
	('DP0001', 'DV002', 10),
	('DP0001', 'DV003', 3),
	('DP0003', 'DV003', 2),
	('DP0003', 'DV004', 10);

-- Dumping structure for table btvn_01.dat_phong
DROP TABLE IF EXISTS `dat_phong`;
CREATE TABLE IF NOT EXISTS `dat_phong` (
  `MaDatPhong` varchar(50) NOT NULL,
  `MaPhong` varchar(50) DEFAULT NULL,
  `MaKH` varchar(50) DEFAULT NULL,
  `NgayDat` date DEFAULT NULL,
  `GioBatDau` time DEFAULT NULL,
  `GioKetThuc` time DEFAULT NULL,
  `TienDatCoc` int(11) DEFAULT NULL,
  `GhiChu` varchar(200) DEFAULT NULL,
  `TrangThaiDat` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`MaDatPhong`),
  KEY `MaKH_foreign` (`MaKH`),
  KEY `MaPhong_foreign` (`MaPhong`),
  CONSTRAINT `MaKH_foreign` FOREIGN KEY (`MaKH`) REFERENCES `khach_hang` (`MaKH`),
  CONSTRAINT `MaPhong_foreign` FOREIGN KEY (`MaPhong`) REFERENCES `phong` (`MaPhong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Dumping data for table btvn_01.dat_phong: ~3 rows (approximately)
DELETE FROM `dat_phong`;
INSERT INTO `dat_phong` (`MaDatPhong`, `MaPhong`, `MaKH`, `NgayDat`, `GioBatDau`, `GioKetThuc`, `TienDatCoc`, `GhiChu`, `TrangThaiDat`) VALUES
	('DP0001', 'P001', 'KH0002', '2018-03-26', '11:00:00', '13:30:00', 100000, NULL, 'Da dat'),
	('DP0003', 'P002', 'KH0002', '2018-03-26', '20:30:00', '22:15:00', 100000, NULL, 'Da dat'),
	('DP0004', 'P003', 'KH0001', '2018-04-01', '19:30:00', '21:15:00', 200000, NULL, 'Da dat');

-- Dumping structure for table btvn_01.dich_vu_di_kem
DROP TABLE IF EXISTS `dich_vu_di_kem`;
CREATE TABLE IF NOT EXISTS `dich_vu_di_kem` (
  `MaDV` varchar(50) NOT NULL,
  `TenDV` varchar(200) DEFAULT NULL,
  `DonViTinh` varchar(50) DEFAULT NULL,
  `DonGia` int(11) DEFAULT NULL,
  PRIMARY KEY (`MaDV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Dumping data for table btvn_01.dich_vu_di_kem: ~4 rows (approximately)
DELETE FROM `dich_vu_di_kem`;
INSERT INTO `dich_vu_di_kem` (`MaDV`, `TenDV`, `DonViTinh`, `DonGia`) VALUES
	('DV001', 'Beer', 'lon', 10000),
	('DV002', 'Nuoc Ngot', 'lon', 8000),
	('DV003', 'Trai cay', 'dia', 35000),
	('DV004', 'Khan uot', 'cai', 2000);

-- Dumping structure for table btvn_01.khach_hang
DROP TABLE IF EXISTS `khach_hang`;
CREATE TABLE IF NOT EXISTS `khach_hang` (
  `MaKH` varchar(50) NOT NULL,
  `TenKH` varchar(200) DEFAULT NULL,
  `DiaChi` varchar(200) DEFAULT NULL,
  `SoDT` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`MaKH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Dumping data for table btvn_01.khach_hang: ~4 rows (approximately)
DELETE FROM `khach_hang`;
INSERT INTO `khach_hang` (`MaKH`, `TenKH`, `DiaChi`, `SoDT`) VALUES
	('KH0001', 'Nguyen Van A', 'Hoa Xuan', '11111111'),
	('KH0002', 'Nguyen Van B', 'Hoa hai', '11111112'),
	('KH0003', 'Phan Van A', 'Cam le', '11111113'),
	('KH0004', 'Phan Van B', 'Hoa xuan', '11111114');

-- Dumping structure for table btvn_01.phong
DROP TABLE IF EXISTS `phong`;
CREATE TABLE IF NOT EXISTS `phong` (
  `MaPhong` varchar(50) NOT NULL,
  `LoaiPhong` varchar(200) DEFAULT NULL,
  `SoKhachToiDa` int(11) DEFAULT NULL,
  `GiaPhong` int(11) DEFAULT NULL,
  `MoTa` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`MaPhong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Dumping data for table btvn_01.phong: ~4 rows (approximately)
DELETE FROM `phong`;
INSERT INTO `phong` (`MaPhong`, `LoaiPhong`, `SoKhachToiDa`, `GiaPhong`, `MoTa`) VALUES
	('P001', 'Loai 1', 20, 90000, NULL),
	('P002', 'Loai 1', 25, 110000, NULL),
	('P003', 'Loai 2', 9, 60000, NULL),
	('P004', 'Loai 3', 20, 110000, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
