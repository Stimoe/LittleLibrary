-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS littleLibrary_db;
-- Creates the "blogger" database --
CREATE DATABASE littleLibrary_db;

-- USE littleLibrary_db;

-- CREATE TABLE `user` (
--   `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
--   `name` VARCHAR(255) NOT NULL,
--   `email` VARCHAR(255) NOT NULL,
--   `username` VARCHAR(255) NOT NULL,
--   `password` VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE `library` (
--   `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
--   `location` VARCHAR(255) NOT NULL,
--   `img` VARCHAR(255) NOT NULL,
--   `user` INTEGER
-- );

-- CREATE INDEX `idx_library__user` ON `library` (`user`);

-- ALTER TABLE `library` ADD CONSTRAINT `fk_library__user` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE SET NULL;

-- CREATE TABLE `book` (
--   `title` VARCHAR(255) NOT NULL,
--   `libraryid` INTEGER NOT NULL,
--   `userid` INTEGER NOT NULL,
--   `bookid` INTEGER PRIMARY KEY AUTO_INCREMENT,
--   `genre` VARCHAR(255) NOT NULL,
--   `img` VARCHAR(255) NOT NULL,
--   `author` VARCHAR(255) NOT NULL,
--   `available` BOOLEAN
-- );

-- CREATE INDEX `idx_book__libraryid` ON `book` (`libraryid`);

-- CREATE INDEX `idx_book__userid` ON `book` (`userid`);

-- ALTER TABLE `book` ADD CONSTRAINT `fk_book__libraryid` FOREIGN KEY (`libraryid`) REFERENCES `library` (`id`) ON DELETE CASCADE;

-- ALTER TABLE `book` ADD CONSTRAINT `fk_book__userid` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE CASCADE;

-- CREATE TABLE `lookingforbook` (
--   `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
--   `text` VARCHAR(255) NOT NULL,
--   `library` INTEGER NOT NULL,
--   `user` INTEGER NOT NULL
-- );

-- CREATE INDEX `idx_lookingforbook__library` ON `lookingforbook` (`library`);

-- CREATE INDEX `idx_lookingforbook__user` ON `lookingforbook` (`user`);

-- ALTER TABLE `lookingforbook` ADD CONSTRAINT `fk_lookingforbook__library` FOREIGN KEY (`library`) REFERENCES `library` (`id`);

-- ALTER TABLE `lookingforbook` ADD CONSTRAINT `fk_lookingforbook__user` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE;

-- CREATE TABLE `reviews` (
--   `reviewid` INTEGER PRIMARY KEY AUTO_INCREMENT,
--   `bookid` INTEGER NOT NULL,
--   `userid` INTEGER NOT NULL,
--   `rating` VARCHAR(255) NOT NULL,
--   `reviewbody` VARCHAR(255) NOT NULL,
--   `title` VARCHAR(255) NOT NULL
-- );

-- CREATE INDEX `idx_reviews__bookid` ON `reviews` (`bookid`);

-- CREATE INDEX `idx_reviews__userid` ON `reviews` (`userid`);

-- ALTER TABLE `reviews` ADD CONSTRAINT `fk_reviews__bookid` FOREIGN KEY (`bookid`) REFERENCES `book` (`bookid`) ON DELETE CASCADE;

-- ALTER TABLE `reviews` ADD CONSTRAINT `fk_reviews__userid` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE CASCADE