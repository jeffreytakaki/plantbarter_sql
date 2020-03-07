# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.28)
# Database: plantbarter_05
# Generation Time: 2020-03-07 21:11:52 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table plant_category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `plant_category`;

CREATE TABLE `plant_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(50) DEFAULT NULL,
  `category_type` varchar(50) NOT NULL,
  `category_short_description` varchar(250) DEFAULT NULL,
  `category_long_description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `category_type` (`category_type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `plant_category` WRITE;
/*!40000 ALTER TABLE `plant_category` DISABLE KEYS */;

INSERT INTO `plant_category` (`category_id`, `category_name`, `category_type`, `category_short_description`, `category_long_description`)
VALUES
	(1,NULL,'Annuals',NULL,NULL),
	(2,NULL,'Bulbs',NULL,NULL),
	(3,NULL,'Cactus',NULL,NULL),
	(4,NULL,'Climbers',NULL,NULL),
	(5,NULL,'Conifers',NULL,NULL),
	(6,NULL,'Ferns',NULL,NULL),
	(7,NULL,'Fruit',NULL,NULL),
	(8,NULL,'Herbs',NULL,NULL),
	(9,NULL,'Ornamental Grasses',NULL,NULL),
	(10,NULL,'Perennials',NULL,NULL),
	(11,NULL,'Roses',NULL,NULL),
	(12,NULL,'Shrubs',NULL,NULL),
	(13,NULL,'Trees',NULL,NULL),
	(14,NULL,'Palms - Cycades',NULL,NULL),
	(15,NULL,'Bamboos',NULL,NULL),
	(16,NULL,'Vegetables',NULL,NULL);

/*!40000 ALTER TABLE `plant_category` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table plants
# ------------------------------------------------------------

DROP TABLE IF EXISTS `plants`;

CREATE TABLE `plants` (
  `plant_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `type` varchar(150) NOT NULL,
  `category_id` int(11) NOT NULL,
  `plant_short_description` varchar(1250) DEFAULT NULL,
  `plant_long_description` varchar(2000) DEFAULT NULL,
  `image_url` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`plant_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `plants_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `plant_category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `plants` WRITE;
/*!40000 ALTER TABLE `plants` DISABLE KEYS */;

INSERT INTO `plants` (`plant_id`, `name`, `type`, `category_id`, `plant_short_description`, `plant_long_description`, `image_url`, `created_at`)
VALUES
	(1,'Beach Strawberry','Strawberry',7,'The garden strawberry (or simply strawberry; Fragaria × ananassa)is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit.','The garden strawberry (or simply strawberry; Fragaria × ananassa)[1] is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as jam, juice, pies, ice cream, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in products such as candy, soap, lip gloss, perfume, and many others. The garden strawberry was first bred in Brittany, France, in the 1750s via a cross of Fragaria virginiana from eastern North America and Fragaria chiloensis, which was brought from Chile by Amédée-François Frézier in 1714.[2] Cultivars of Fragaria × ananassa have replaced, in commercial production, the woodland strawberry (Fragaria vesca), which was the first strawberry species cultivated in the early 17th century. The strawberry is not, from a botanical point of view, a berry. Technically, it is an aggregate accessory fruit, meaning that the fleshy part is derived not from the plant\'s ovaries but from the receptacle that holds the ovaries. Each apparent \'seed\' (achene) on the outside of the fruit is actually one of the ovaries of the flower, with a seed inside it.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(2,'White Peach','Peach',7,'Unlike their yellow-fleshed cousins, white peaches (Prunus persica) boast a creamy pinkish-white flesh that is sweeter to taste and low in acidity','Unlike their yellow-fleshed cousins, white peaches (Prunus persica) boast a creamy pinkish-white flesh that is sweeter to taste and low in acidity. Because the peach tree is a self-fertilizing tree, white peaches occur in nature, but they also develop as a result of hybrid trees that are crossed too frequently. Varieties of white peaches have been documented as early as the 1600s; however, these fruits grew in commercial popularity after the 1980s.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(3,'Crimson Watermelon','Watermelon',7,'A pretty, light green melon with dark stripes, Crimson Sweet is famous for its high sugar content and great flavor. Seeds are small and dark.','A pretty, light green melon with dark stripes, Crimson Sweet is famous for its high sugar content and great flavor. Seeds are small and dark. The vines are resistant to anthracnose and fusarium wilt. Give vines plenty of room to run. Released by Kansas State University in 1963, it has become a classic favorite. High in lycopene.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(4,'Dewlightful Honeydew','Honeydew',7,'Honeydew plants are similar to cantaloupe, but with more lobing on the leaves','Honeydew plants are similar to cantaloupe, but with more lobing on the leaves. The melons themselves are clearly quite different?honeydews are slightly oval to round with a smooth, tough skin that begins very light green with soft hairs and matures to a smooth rich yellow as it ripens. There are two types of honeydew melon: green-fleshed or orange-fleshed. Common varieties include Dewlightful, Earlidew, Honey Dew Green Flesh, Jade Delight, New Moon, Summer Dew, and TAM Dew.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(5,'Destiny Broccoli','Broccoli',16,'Heat-tolerant broccoli is a good source of Vitamins A and C.','This mid-early, compact, heat-tolerant broccoli variety features medium-small green beads, a smooth dome and a round shape. Destiny is a flavorful source of Vitamins A and C. Suited for Fall harvest when planted in Summer.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(6,'Butternut Squash','Squash',16,'Beige colored and shaped like a vase or a bell.','bell.  This is a more watery squash and tastes somewhat similar to sweet potatoes.  It has a bulbous end and pale, creamy skin, with a choice, fine-textured, deep-orange flesh with a sweet, nutty flavor.  Some people say it is like butterscotch.  It weighs from 2 to 5 pounds.  The oranger the color, the riper, drier, and sweeter the squash.  Butternut is a common squash used in making soup because it tends not to be stringy.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(7,'White Tulip','Tulip',2,'Tulips are spring-blooming perennial bulbiferous plants with large, showy, brightly colored flowers.','Tulips are spring-blooming perennial bulbiferous plants with large, showy, brightly colored flowers. These flowers are often used as ornamental plants, in garden fixtures, and as cut flowers. They come in all sorts of colors, including pink, red, purple, yellow, and white. Tulips have a long history of cultivation and are native all the way from southern Europe to central Asia. The name Tulips is derived from a Persian word for turban due to the similarity in looks.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(8,'Leeks','Allium',2,'The genus Allium includes many monocotyledonous flowering plants and is a popular cultivation crop.','The genus Allium includes many monocotyledonous flowering plants and is a popular cultivation crop. Chives, leeks, shallots, scallions, garlic, and onions all belong to this genus. They are found in temperate climates in the Northern Hemisphere and also include some species that are native to Brazil, Chile, and tropical Africa. Allium plants are known to produce various chemical compounds that give them the distinctive sharp odor and taste of garlic or onions.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(9,'Super Blue Lavender ','Lavender',10,'Extra hardy rich blue lavender. Tolerates heat and humidity.','Lavender seduces the senses with lyrical color and caressing fragrance. Meet the most colorful Lavandula angustifolia, its short spikes packed with aromatic, deep blue florets. Blooming June to September, the 12\'\'\'\' tall herbal plants are remarkably hardy, tolerant of heat and humidity. Use fresh or dried in cut bouquets and sachets.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(10,'Major Wheeler','Lonicera',10,'Masses of blooms all season long.','Masses of red trumpet shaped blooms cover this native honeysuckle vine beginning in late spring and continuing through autumn. A fast grower, it\'s also deer resistant and a hummingbird favorite!','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(11,'Washington Navel Orange Citrus Tree','Orange Citrus Tree',13,'Tasty and exotic holiday gift is ideal for plant geeks.','Delicious and sweet, seedless, easy-to-peel fruits ripen in late fall into the winter. Medium-sized tree is self-fertile with clean evergreen foliage and fragrant flowers in spring. It makes a great shrub backdrop on the patio from spring through fall in partial to full sun. In the winter, bring inside to a conservatory or bright sunny room. Bears fruit 1-2 years after planting. While Washington Navel Orange is self-fertile, it will require hand-pollination when grown indoors.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(12,'White Marseilles Fig','Fig Tree',13,'Native to southern France, Marseilles was Thomas Jefferson\'s favorite fig.','It was Thomas Jefferson?Founding Father, president, farmer and horticulturalist?who introduced ?White Marseilles?, his favorite fig, to this still-grateful nation. ?White Marseilles? he wrote, is ?unquestionably superior to any fig I have ever seen.? We quite agree. Native to southern France, in late July, the lovely trees produce a great big harvest of greenish-yellow fruit packed with sweetly delicious pale-yellow flesh. Super-productive trees are well suited to the Northeast and Northwest.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(13,'Munstead Wood','Rose',11,'Very deep velvety crimson blooms, with strong classic Rose scent.','Light crimson buds gradually open to reveal very deep velvety crimson blooms, with lighter colored outer petals. The flowers are large cups at first, becoming shallowly cupped with time. There is a strong Old Rose scent. The bushy, spreading growth forms a broad shrub with good disease resistance. A relatively short shrub, it is ideal for planting towards the front of a border. Munstead Wood was the name of the garden designer Gertrude Jekyll?s home in Surrey, England. It was designed by the architect, Sir Edwin Lutyens, whose professional partnership with Jekyll was one of the most influential of the Arts and Crafts movement.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(14,'Tranquility Rose','Rose',11,'One of the best for cut flowers.','Attractive, pure white, beautifully rounded blooms with light apple fragrance. An excellent choice for adding to bouquets. The growth is vigorous, bushy and upright, gradually curving outwards at the top to provide us with an excellent garden shrub. It can be used for bedding, but is most effective in a mixed or rose border.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(15,'Emerald Towers Basil','Basil',8,'Beautiful columnar habit ideal for any garden- patio pots, in raised beds, small space and hydroponics.','Well-branched, dark green variety with short internodes makes a beautiful, towering plant with huge harvest potential. Beautiful columnar habit basil is ideal for any garden- patio pots, raised beds, small space landscape and hydroponics. It flowers very, very late in the season, for huge harvests of sweet Genovese flavored leaves for fresh eating or chopped in salads and recipes.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(16,'Calypso','Cilantro',8,'The slowest cilantro to bolt available.','You say cilantro; I say coriander. Whatever, Calypso makes the cut-again and again. Terrifically prolific, this new variety is slower to bolt than any other coriander available. Fragrant, citrusy herb sparks up salsa, guacamole, sauces and seafood. Perfect for your herb garden or mixed container.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(17,'Beavertail Cactus','Cactus',3,'Beavertail is a prickly pear cactus with pads that are mostly blue-green.','Beavertail is a prickly pear cactus with pads that are mostly blue-green. It grows to about 20 inches high and up to 6 feet wide. Beavertail has dark cherry pink flowers that almost glow and smell like watermelon. It blooms late winter to early summer and is ideal for desert landscaping and drought-tolerant gardens. Beavertail looks great teamed with Angelita daisy and barrel cactus. Potted plants benefit from a diluted cactus fertilizer once a year, but plants in garden settings do not need to be fertilized.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(18,'Claret Cup Cactus','Cactus',3,'Claret cup cactus is also called hedgehog, Mojave mound cactus, and kingcup cactus.','Claret cup cactus is also called hedgehog, Mojave mound cactus, and kingcup cactus. It has the potential to grow to 3 feet high and up to 6 feet wide. Its fruit is juicy, tastes like strawberries, and turns bright orange as it ripens. In landscaping design, consider planting claret cup cactus with sage, poppies, yucca, penstemon, and native grasses. Claret cup cactus prefers a soil that contains more gravel than traditional cactus/succulent.','https://via.placeholder.com/250','2020-02-26 19:54:04'),
	(19,'Forsythia','Shrub',12,'Forsythia is a genus of flowering plants in the olive family Oleaceae.','Forsythia is a genus of flowering plants in the olive family Oleaceae. There are about 11 species, mostly native to eastern Asia, but one native to southeastern Europe. Forsythia is also one of the plant\'s common names, along with Easter tree; the genus is named after William Forsyth.','https://via.placeholder.com/250','2020-02-26 19:54:04');

/*!40000 ALTER TABLE `plants` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `image_url` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `username`, `image_url`, `password`, `created_at`)
VALUES
	(1,'Jeffrey','Takaki','jtakak1@gmail.com','jeffreytakaki',NULL,'$2b$10$lfCm18qWQv5Z.1uxbOE9Ku6H6zr5vPO8XyVxgNeASLyAheZyikyI2','2020-02-26 19:56:50'),
	(11,'Bryson','Ishii','bishii@gmail.com','bishii',NULL,'$2b$10$hy6rkG2c7aW5OcmPlMx8G.8U2V72hCFwnM8dkVebGPSFNETg2fNcS','2020-02-26 20:45:49'),
	(12,'Carolyn','Takaki','ctnguyen.cn@gmail.com','cn',NULL,'$2b$10$LxHaZVMAyjafx2fnKdgeTOUla5AQ38w5IQSftBg8IhH6Ru2RQzPmS','2020-02-26 20:49:59'),
	(13,'Frank','Lampard','flampardt@gmail.com','flampard',NULL,'$2b$10$OLUfq9fggZoR2BfJmMP5K.IoOMeg1Rljxhl12JOxDuyPJAlLqmbga','2020-02-26 20:53:44'),
	(14,'Rylee','Takaki','rylee.takaki@gmail.com','ryleetakaki',NULL,'$2b$10$n6HwS49S.kp1lBrqaFshPeg7GbY36uUBOYWii0q.VW1xggfo4JPY6','2020-02-26 20:56:31'),
	(15,'Matt','Kam','matt.ph.kam@gmail.com','mkam',NULL,'$2b$10$xB50BSPtPVVV/UfjhhrPVe0UFXlis203LNy3ATbRX5VnKNO4k8A3O','2020-02-26 20:58:42'),
	(16,'Dave','Nakamoto','dnakamoto@gmail.com','dnaka',NULL,'$2b$10$17uaETyoozIb6WIXLVKWIOsxBZWmOEsT0ttDzUmsvYaHyjrdfuUie','2020-02-26 21:04:08'),
	(17,'Mike','Takaki','mtakaki@miketakaki.com','mtakaki',NULL,'$2b$10$LBR9xcsvI44WJMhA346p4.OJHaYwDHRM4ritwfQJlarGt1o5mNddq','2020-02-26 21:05:28'),
	(18,'John','Lee','jlee1@lee.com','jlee',NULL,'$2b$10$P1jvdLFytcoHd3R/OEwBkOvpuCyeV/fbyJiMgoLDSUN71bVQ3BhRO','2020-02-26 21:15:03'),
	(19,'Jefferson','Takaki','jtakaki@murad.com','jtakaki',NULL,'$2b$10$8Z8FXowcg330J5K/1snjWupoVEhBA2UAJ3/ABVQKeVV.nVmrCHhvG','2020-03-02 14:43:50');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users_plants
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users_plants`;

CREATE TABLE `users_plants` (
  `plant_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`plant_id`,`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `users_plants_ibfk_1` FOREIGN KEY (`plant_id`) REFERENCES `plants` (`plant_id`),
  CONSTRAINT `users_plants_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users_plants` WRITE;
/*!40000 ALTER TABLE `users_plants` DISABLE KEYS */;

INSERT INTO `users_plants` (`plant_id`, `user_id`, `created_at`)
VALUES
	(1,11,'2020-02-26 20:48:41'),
	(1,16,'2020-02-26 21:05:03'),
	(2,12,'2020-02-26 21:18:18'),
	(2,14,'2020-03-02 15:41:18'),
	(3,12,'2020-02-26 21:18:23'),
	(3,13,'2020-03-02 15:42:11'),
	(3,14,'2020-03-02 15:41:24'),
	(3,15,'2020-03-02 15:41:35'),
	(3,18,'2020-03-02 16:51:31'),
	(5,13,'2020-03-02 15:40:21'),
	(18,14,'2020-03-02 15:41:12'),
	(19,12,'2020-03-02 15:40:30'),
	(19,13,'2020-03-02 15:39:58');

/*!40000 ALTER TABLE `users_plants` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
