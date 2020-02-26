CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(200),
    created_at TIMESTAMP,
    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS plant_category (
    category_id INT AUTO_INCREMENT,
    category_name VARCHAR(50),
    category_type VARCHAR(50) NOT NULL UNIQUE,
    category_short_description VARCHAR(250),
    category_long_description VARCHAR(500),
    PRIMARY KEY (category_id)
);

CREATE TABLE IF NOT EXISTS plants (
    plant_id INT AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    type VARCHAR(150) NOT NULL,
    category_id INT NOT NULL,
    plant_short_description VARCHAR(1250),
    plant_long_description VARCHAR(2000),
    image_url VARCHAR(200) NOT NULL,
    created_at TIMESTAMP,
    PRIMARY KEY (plant_id),
    FOREIGN KEY (category_id) REFERENCES plant_category(category_id)
);


CREATE TABLE IF NOT EXISTS users_plants (
    plant_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id), 
    FOREIGN KEY (user_id) REFERENCES users(user_id), 
    PRIMARY KEY (plant_id, user_id)
);

INSERT IGNORE INTO plant_category (category_type) VALUES ('Annuals');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Bulbs');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Cactus');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Climbers');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Conifers');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Ferns');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Fruit');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Herbs');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Ornamental Grasses');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Perennials');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Roses');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Shrubs');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Trees');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Palms - Cycades');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Bamboos');
INSERT IGNORE INTO plant_category (category_type) VALUES ('Vegetables');


INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Beach Strawberry', 'Strawberry', (SELECT category_id FROM plant_category WHERE category_type='Fruit'),'The garden strawberry (or simply strawberry; Fragaria × ananassa)is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit.','The garden strawberry (or simply strawberry; Fragaria × ananassa)[1] is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as jam, juice, pies, ice cream, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in products such as candy, soap, lip gloss, perfume, and many others. The garden strawberry was first bred in Brittany, France, in the 1750s via a cross of Fragaria virginiana from eastern North America and Fragaria chiloensis, which was brought from Chile by Amédée-François Frézier in 1714.[2] Cultivars of Fragaria × ananassa have replaced, in commercial production, the woodland strawberry (Fragaria vesca), which was the first strawberry species cultivated in the early 17th century. The strawberry is not, from a botanical point of view, a berry. Technically, it is an aggregate accessory fruit, meaning that the fleshy part is derived not from the plant''s ovaries but from the receptacle that holds the ovaries. Each apparent ''seed'' (achene) on the outside of the fruit is actually one of the ovaries of the flower, with a seed inside it.','https://via.placeholder.com/250');
INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('White Peach', 'Peach', (SELECT category_id FROM plant_category WHERE category_type='Fruit'),'Unlike their yellow-fleshed cousins, white peaches (Prunus persica) boast a creamy pinkish-white flesh that is sweeter to taste and low in acidity','Unlike their yellow-fleshed cousins, white peaches (Prunus persica) boast a creamy pinkish-white flesh that is sweeter to taste and low in acidity. Because the peach tree is a self-fertilizing tree, white peaches occur in nature, but they also develop as a result of hybrid trees that are crossed too frequently. Varieties of white peaches have been documented as early as the 1600s; however, these fruits grew in commercial popularity after the 1980s.','https://via.placeholder.com/250');
INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Crimson Watermelon', 'Watermelon', (SELECT category_id FROM plant_category WHERE category_type='Fruit'),"A pretty, light green melon with dark stripes, Crimson Sweet is famous for its high sugar content and great flavor. Seeds are small and dark.","A pretty, light green melon with dark stripes, Crimson Sweet is famous for its high sugar content and great flavor. Seeds are small and dark. The vines are resistant to anthracnose and fusarium wilt. Give vines plenty of room to run. Released by Kansas State University in 1963, it has become a classic favorite. High in lycopene.",'https://via.placeholder.com/250');
INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Dewlightful Honeydew', 'Honeydew', (SELECT category_id FROM plant_category WHERE category_type='Fruit'),"Honeydew plants are similar to cantaloupe, but with more lobing on the leaves","Honeydew plants are similar to cantaloupe, but with more lobing on the leaves. The melons themselves are clearly quite different—honeydews are slightly oval to round with a smooth, tough skin that begins very light green with soft hairs and matures to a smooth rich yellow as it ripens. There are two types of honeydew melon: green-fleshed or orange-fleshed. Common varieties include Dewlightful, Earlidew, Honey Dew Green Flesh, Jade Delight, New Moon, Summer Dew, and TAM Dew.",'https://via.placeholder.com/250');

INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Destiny Broccoli', 'Broccoli', (SELECT category_id FROM plant_category WHERE category_type='Vegetables'),"Heat-tolerant broccoli is a good source of Vitamins A and C.","This mid-early, compact, heat-tolerant broccoli variety features medium-small green beads, a smooth dome and a round shape. Destiny is a flavorful source of Vitamins A and C. Suited for Fall harvest when planted in Summer.",'https://via.placeholder.com/250');
INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Butternut Squash', 'Squash', (SELECT category_id FROM plant_category WHERE category_type='Vegetables'),'Beige colored and shaped like a vase or a bell.','bell.  This is a more watery squash and tastes somewhat similar to sweet potatoes.  It has a bulbous end and pale, creamy skin, with a choice, fine-textured, deep-orange flesh with a sweet, nutty flavor.  Some people say it is like butterscotch.  It weighs from 2 to 5 pounds.  The oranger the color, the riper, drier, and sweeter the squash.  Butternut is a common squash used in making soup because it tends not to be stringy.','https://via.placeholder.com/250');

INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('White Tulip', 'Tulip', (SELECT category_id FROM plant_category WHERE category_type='Bulbs'),"Tulips are spring-blooming perennial bulbiferous plants with large, showy, brightly colored flowers.","Tulips are spring-blooming perennial bulbiferous plants with large, showy, brightly colored flowers. These flowers are often used as ornamental plants, in garden fixtures, and as cut flowers. They come in all sorts of colors, including pink, red, purple, yellow, and white. Tulips have a long history of cultivation and are native all the way from southern Europe to central Asia. The name Tulips is derived from a Persian word for turban due to the similarity in looks.",'https://via.placeholder.com/250');
INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Leeks', 'Allium', (SELECT category_id FROM plant_category WHERE category_type='Bulbs'),"The genus Allium includes many monocotyledonous flowering plants and is a popular cultivation crop.","The genus Allium includes many monocotyledonous flowering plants and is a popular cultivation crop. Chives, leeks, shallots, scallions, garlic, and onions all belong to this genus. They are found in temperate climates in the Northern Hemisphere and also include some species that are native to Brazil, Chile, and tropical Africa. Allium plants are known to produce various chemical compounds that give them the distinctive sharp odor and taste of garlic or onions.",'https://via.placeholder.com/250');

INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Super Blue Lavender ', 'Lavender', (SELECT category_id FROM plant_category WHERE category_type='Perennials'),"Extra hardy rich blue lavender. Tolerates heat and humidity.","Lavender seduces the senses with lyrical color and caressing fragrance. Meet the most colorful Lavandula angustifolia, its short spikes packed with aromatic, deep blue florets. Blooming June to September, the 12'''' tall herbal plants are remarkably hardy, tolerant of heat and humidity. Use fresh or dried in cut bouquets and sachets.",'https://via.placeholder.com/250');
INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Major Wheeler', 'Lonicera', (SELECT category_id FROM plant_category WHERE category_type='Perennials'),"Masses of blooms all season long.","Masses of red trumpet shaped blooms cover this native honeysuckle vine beginning in late spring and continuing through autumn. A fast grower, it's also deer resistant and a hummingbird favorite!",'https://via.placeholder.com/250');

INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Washington Navel Orange Citrus Tree', 'Orange Citrus Tree', (SELECT category_id FROM plant_category WHERE category_type='Trees'),"Tasty and exotic holiday gift is ideal for plant geeks.","Delicious and sweet, seedless, easy-to-peel fruits ripen in late fall IGNORE into the winter. Medium-sized tree is self-fertile with clean evergreen foliage and fragrant flowers in spring. It makes a great shrub backdrop on the patio from spring through fall in partial to full sun. In the winter, bring inside to a conservatory or bright sunny room. Bears fruit 1-2 years after planting. While Washington Navel Orange is self-fertile, it will require hand-pollination when grown indoors.",'https://via.placeholder.com/250');
INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('White Marseilles Fig', 'Fig Tree', (SELECT category_id FROM plant_category WHERE category_type='Trees'),"Native to southern France, Marseilles was Thomas Jefferson's favorite fig.","It was Thomas Jefferson—Founding Father, president, farmer and horticulturalist—who introduced ‘White Marseilles’, his favorite fig, to this still-grateful nation. ‘White Marseilles’ he wrote, is “unquestionably superior to any fig I have ever seen.” We quite agree. Native to southern France, in late July, the lovely trees produce a great big harvest of greenish-yellow fruit packed with sweetly delicious pale-yellow flesh. Super-productive trees are well suited to the Northeast and Northwest.",'https://via.placeholder.com/250');

INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Munstead Wood', 'Rose', (SELECT category_id FROM plant_category WHERE category_type='Roses'),"Very deep velvety crimson blooms, with strong classic Rose scent.","Light crimson buds gradually open to reveal very deep velvety crimson blooms, with lighter colored outer petals. The flowers are large cups at first, becoming shallowly cupped with time. There is a strong Old Rose scent. The bushy, spreading growth forms a broad shrub with good disease resistance. A relatively short shrub, it is ideal for planting towards the front of a border. Munstead Wood was the name of the garden designer Gertrude Jekyll’s home in Surrey, England. It was designed by the architect, Sir Edwin Lutyens, whose professional partnership with Jekyll was one of the most influential of the Arts and Crafts movement.",'https://via.placeholder.com/250');
INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Tranquility Rose', 'Rose', (SELECT category_id FROM plant_category WHERE category_type='Roses'),"One of the best for cut flowers.","Attractive, pure white, beautifully rounded blooms with light apple fragrance. An excellent choice for adding to bouquets. The growth is vigorous, bushy and upright, gradually curving outwards at the top to provide us with an excellent garden shrub. It can be used for bedding, but is most effective in a mixed or rose border.",'https://via.placeholder.com/250');

INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Emerald Towers Basil', 'Basil', (SELECT category_id FROM plant_category WHERE category_type='Herbs'),"Beautiful columnar habit ideal for any garden- patio pots, in raised beds, small space and hydroponics.","Well-branched, dark green variety with short internodes makes a beautiful, towering plant with huge harvest potential. Beautiful columnar habit basil is ideal for any garden- patio pots, raised beds, small space landscape and hydroponics. It flowers very, very late in the season, for huge harvests of sweet Genovese flavored leaves for fresh eating or chopped in salads and recipes.",'https://via.placeholder.com/250');
INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Calypso', 'Cilantro', (SELECT category_id FROM plant_category WHERE category_type='Herbs'),"The slowest cilantro to bolt available.","You say cilantro; I say coriander. Whatever, Calypso makes the cut-again and again. Terrifically prolific, this new variety is slower to bolt than any other coriander available. Fragrant, citrusy herb sparks up salsa, guacamole, sauces and seafood. Perfect for your herb garden or mixed container.",'https://via.placeholder.com/250');

INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Beavertail Cactus', 'Cactus', (SELECT category_id FROM plant_category WHERE category_type='Cactus'),"Beavertail is a prickly pear cactus with pads that are mostly blue-green.","Beavertail is a prickly pear cactus with pads that are mostly blue-green. It grows to about 20 inches high and up to 6 feet wide. Beavertail has dark cherry pink flowers that almost glow and smell like watermelon. It blooms late winter to early summer and is ideal for desert landscaping and drought-tolerant gardens. Beavertail looks great teamed with Angelita daisy and barrel cactus. Potted plants benefit from a diluted cactus fertilizer once a year, but plants in garden settings do not need to be fertilized.",'https://via.placeholder.com/250');
INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Claret Cup Cactus', 'Cactus', (SELECT category_id FROM plant_category WHERE category_type='Cactus'),"Claret cup cactus is also called hedgehog, Mojave mound cactus, and kingcup cactus.","Claret cup cactus is also called hedgehog, Mojave mound cactus, and kingcup cactus. It has the potential to grow to 3 feet high and up to 6 feet wide. Its fruit is juicy, tastes like strawberries, and turns bright orange as it ripens. In landscaping design, consider planting claret cup cactus with sage, poppies, yucca, penstemon, and native grasses. Claret cup cactus prefers a soil that contains more gravel than traditional cactus/succulent.",'https://via.placeholder.com/250');

INSERT IGNORE INTO plants (name, type, category_id, plant_short_description, plant_long_description, image_url) VALUES ('Forsythia', 'Shrub', (SELECT category_id FROM plant_category WHERE category_type='Shrubs'),"Forsythia is a genus of flowering plants in the olive family Oleaceae.","Forsythia is a genus of flowering plants in the olive family Oleaceae. There are about 11 species, mostly native to eastern Asia, but one native to southeastern Europe. Forsythia is also one of the plant's common names, along with Easter tree; the genus is named after William Forsyth.",'https://via.placeholder.com/250');