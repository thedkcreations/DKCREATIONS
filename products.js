// ── PRODUCTS DATA ──
const products = [
{
  id: 1,
  name: "Lotus Bloom Fur Wool Rangoli",
  price: 1499,
  emoji: "🪷",
  tag: "Best Seller",
  isBestSeller: true,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Beautiful handcrafted lotus floral design made with premium fur wool. Perfect for pooja rooms, living spaces, and festive decorations.",

  fullDesc: "Enhance your home décor with this elegant Lotus Bloom Fur Wool Rangoli featuring vibrant pink lotus flowers and lush green leaves. Handcrafted with premium fur wool, this 36 × 36 inch decorative piece is reusable, durable, and ideal for pooja rooms, festivals, entrances, and gifting.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Ideal for Home & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img1.jpg", "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img1-2.jpg"]},
  {
  id: 2,
  name: "Royal Peacock Floral Fur Wool Rangoli",
  price: 1499,
  emoji: "🌸",
  tag: "Best Seller",
  isBestSeller: true,
  isNew: false,
  isMostLoved: false,

  shortDesc: "Vibrant peacock-inspired floral rangoli handcrafted with premium fur wool. Perfect for festive décor, pooja rooms, and special occasions.",

  fullDesc: "Add a grand festive touch to your home with this Royal Peacock Floral Fur Wool Rangoli. Featuring colorful peacock-feather motifs, layered floral petals, and intricate handcrafted detailing, this stunning 36 × 36 inch rangoli creates a beautiful centerpiece for pooja rooms, entrances, living spaces, and celebrations. Made from premium fur wool, it is reusable, durable, and designed to brighten every festive occasion with elegance and charm.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Peacock-Inspired Floral Design",
    "Handcrafted & Reusable",
    "Vibrant Multicolor Pattern",
    "Ideal for Festivals & Home Décor",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img2.jpg", "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img2-2.jpg"]},
  {
  id: 3,
  name: "Swami Samarth Lotus Fur Wool Rangoli",
  price: 1499,
  emoji: "🪷",
  tag: "Best Seller",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Divine Swami Samarth silhouette with a radiant lotus backdrop, handcrafted in premium fur wool for spiritual and festive décor.",

  fullDesc: "Bring blessings and positive energy into your home with this beautifully handcrafted Swami Samarth Fur Wool Rangoli. Featuring the sacred silhouette of Swami Samarth seated in meditation against a vibrant lotus and halo-inspired design, this 36 × 36 inch rangoli creates a serene and devotional atmosphere. Made from premium fur wool, it is reusable, durable, and perfect for pooja rooms, spiritual spaces, festivals, and special occasions.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Swami Samarth Spiritual Design",
    "Handcrafted & Reusable",
    "Vibrant Lotus & Halo Pattern",
    "Ideal for Pooja Rooms & Festivals",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img3.jpg", "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img3-2.jpg"]},
 {
  id: 4,
  name: "Shivling Lotus Fur Wool Rangoli",
  price: 1499,
  emoji: "🔱",
  tag: "Best Seller",
  isBestSeller: true,
  isNew: false,
  isMostLoved: false,

  shortDesc: "Sacred Shivling design with a blooming lotus and radiant floral border, handcrafted in premium fur wool for spiritual décor.",

  fullDesc: "Invoke divine blessings with this beautifully handcrafted Shivling Lotus Fur Wool Rangoli. Featuring a sacred Shivling, crescent moon, vibrant pink lotus, and radiant floral border, this 36 × 36 inch rangoli symbolizes devotion, positivity, and spiritual energy. Made from premium fur wool, it is reusable, durable, and perfect for pooja rooms, Mahashivratri celebrations, festive decorations, and home entrances.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Sacred Shivling & Lotus Design",
    "Handcrafted & Reusable",
    "Bright Multicolor Pattern",
    "Ideal for Pooja Rooms & Festivals",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img5.jpg", "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img5-2.jpg"]},
  {
  id: 5,
  name: "Vitthal Rukmini Fur Wool Rangoli",
  price: 1499,
  emoji: "🙏",
  tag: "Best Seller",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Divine Vitthal-inspired design handcrafted with premium fur wool, bringing devotion and traditional charm to your home décor.",

  fullDesc: "Celebrate the blessings of Lord Vitthal with this beautifully handcrafted Vitthal Fur Wool Rangoli. Featuring the iconic form of Vitthal adorned with traditional ornaments and vibrant colors, this 36 × 36 inch rangoli adds a spiritual and festive touch to pooja rooms, entrances, and celebration spaces. Made from premium fur wool, it is reusable, durable, and perfect for Ashadhi Ekadashi, Kartiki Ekadashi, festivals, and devotional décor.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Sacred Vitthal Design",
    "Handcrafted & Reusable",
    "Vibrant Traditional Colors",
    "Ideal for Pooja Rooms & Festivals",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img4.jpg", "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img4-2.jpg"]
},
{
  id: 6,
  name: "Lotus Radiance Fur Wool Rangoli",
  price: 999,
  emoji: "🌸",
  tag: "Most Loved",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Elegant handcrafted lotus rangoli with a vibrant mandala center, crafted from premium fur wool for festive and home décor.",

  fullDesc: "Add a touch of tradition and elegance to your home with this Lotus Radiance Fur Wool Rangoli. Designed with beautifully layered pink lotus petals and a colorful mandala-inspired center, this handcrafted décor piece is made from premium fur wool. It is reusable, durable, and perfect for pooja rooms, entrances, Diwali, weddings, festivals, and special occasions.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Ideal for Pooja Rooms, Festivals & Home Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img6.jpg"]
},
{
  id: 7,
  name: "Peacock Tabla Fur Wool Rangoli",
  price: 699,
  emoji: "🦚",
  tag: "Most Loved",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Beautiful handcrafted peacock and tabla-inspired fur wool rangoli, perfect for adding a traditional touch to your home décor.",

  fullDesc: "Bring elegance and cultural charm to your home with this Peacock Tabla Fur Wool Rangoli. Featuring a vibrant peacock, traditional tabla-inspired design, and decorative floral border, this handcrafted rangoli is made from premium fur wool. Reusable and durable, it is ideal for pooja rooms, festive celebrations, housewarming ceremonies, and gifting.",

  features: [
    "Size: 24 × 24 inches (2 ft × 2 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Festivals, Pooja Rooms & Home Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img7.png"]
},
{
  id: 8,
  name: "Floral Corner Fur Wool Rangoli",
  price: 699,
  emoji: "🌻",
  tag: "New Arrival",
  isBestSeller: true,
  isNew: false,
  isMostLoved: false,

  shortDesc: "Elegant handcrafted corner rangoli featuring vibrant floral patterns, perfect for entrances and festive home décor.",

  fullDesc: "Enhance the beauty of your entrance with this Floral Corner Fur Wool Rangoli. Designed with colorful sunflower-inspired motifs, lotus petals, and a decorative circular pattern, this handcrafted rangoli is made from premium fur wool. Its unique corner design makes it ideal for doorways, pooja rooms, festive celebrations, housewarming ceremonies, and everyday home décor.",

  features: [
    "Size: 24 × 24 inches (2 ft × 2 ft) (Corner Design)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Entrances, Festivals & Home Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img8.png",]
},
{
  id: 9,
  name: "Lotus Blossom Duo Fur Wool Rangoli",
  price: 499,
  emoji: "🪷",
  tag: "Most Loved",
  isBestSeller: true,
  isNew: false,
  isMostLoved: true,

  shortDesc: "Beautiful handcrafted rangoli featuring a large central floral motif surrounded by elegant lotus blooms for a graceful festive look.",

  fullDesc: "Enhance your home décor with this Lotus Blossom Duo Fur Wool Rangoli, featuring a large blooming flower at the center encircled by lush green leaves and six beautifully crafted lotus flowers in two complementary sizes. Handcrafted using premium fur wool, this reusable and durable rangoli adds elegance to pooja rooms, entrances, festivals, weddings, and special occasions.",

  features: [
    "Center Flower: 12 × 12 inches (1 ft × 1 ft)",
    "Outer Lotus Flowers: 6 × 6 inches (0.5 ft × 0.5 ft) each",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Pooja Rooms, Festivals & Home Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img9.png"]
},
{
  id: 10,
  name: "Suswagatam Peacock Fur Wool Rangoli",
  price: 699,
  emoji: "🦚",
  tag: "Most Loved",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Beautiful handcrafted 'Suswagatam' fur wool rangoli featuring a peacock, musical drums, and vibrant floral elements to warmly welcome your guests.",

  fullDesc: "Welcome your guests in traditional style with this Suswagatam Peacock Fur Wool Rangoli. Designed with an elegant peacock, decorative musical drums, colorful peacock feathers, and the 'Suswagatam' welcome message, this handcrafted rangoli is made from premium fur wool. Reusable and durable, it is perfect for entrances, pooja rooms, festivals, weddings, housewarming ceremonies, and special occasions.",

  features: [
    "Size: 24 × 24 inches (2 ft × 2 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Ideal for Entrances, Housewarming, Festivals & Home Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img10.png"]
},
{
  id: 11,
  name: "Radiant Floral Fur Wool Rangoli",
  price: 499,
  emoji: "🌼",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Elegant handcrafted floral fur wool rangoli featuring vibrant layered petals and lush green accents for a timeless decorative look.",

  fullDesc: "Brighten your home with this Radiant Floral Fur Wool Rangoli, beautifully handcrafted with colorful layered petals surrounding a striking pink floral center. Made from premium fur wool, this reusable and durable rangoli is perfect for pooja rooms, living spaces, festive celebrations, housewarming ceremonies, and gifting.",

  features: [
    "Size: 18 × 18 inches (1.5 ft × 1.5 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Festivals, Pooja Rooms & Home Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img16.png"]
},
{
  id: 12,
  name: "Sunflower Bloom Fur Wool Rangoli",
  price: 699,
  emoji: "🌼",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Simple and elegant handcrafted floral fur wool rangoli featuring vibrant yellow petals, perfect for everyday and festive décor.",

  fullDesc: "Add a cheerful touch to your home with this Sunflower Bloom Fur Wool Rangoli. Featuring eight beautifully crafted yellow petals with a vibrant floral center, this handcrafted rangoli is made from premium fur wool. Lightweight, reusable, and durable, it is ideal for pooja rooms, entrances, festivals, and daily home decoration.",

  features: [
    "Size: 24 × 24 inches (2 ft × 2 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Home, Pooja Rooms & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img17.png",]
},
{
  id: 13,
  name: "Rainbow Petal Fur Wool Rangoli",
  price: 299,
  emoji: "🌈",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Compact handcrafted floral fur wool rangoli featuring vibrant rainbow petals, perfect for small spaces and festive décor.",

  fullDesc: "Brighten your home with this Rainbow Petal Fur Wool Rangoli. Featuring six colorful overlapping petals surrounding a vibrant circular center, this handcrafted rangoli is made from premium fur wool. Lightweight, reusable, and durable, it's perfect for pooja rooms, tabletops, entrances, festive celebrations, and everyday home decoration.",

  features: [
    "Size: 12 × 12 inches (1 ft × 1 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Small Spaces, Festivals & Home Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img18.png",]
},
{
  id: 14,
  name: "Peacock Arch Fur Wool Rangoli",
  price: 999,
  emoji: "🦚",
  tag: "Most Loved",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Elegant handcrafted peacock arch fur wool rangoli, perfect for decorating pooja setups, plates, kalash, and festive displays.",

  fullDesc: "Add a touch of tradition and elegance to your celebrations with this Peacock Arch Fur Wool Rangoli. Featuring two vibrant peacocks connected by a graceful arch with a decorative floral centerpiece, this handcrafted rangoli is made from premium fur wool. Reusable and durable, it is ideal for decorating pooja plates, kalash, diyas, idols, temples, and festive occasions.",

  features: [
    "Size: 30 × 18 inches (2.5 ft × 1.5 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Pooja Décor, Kalash, Diyas & Festivals"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img19.png"],
},
{
  id: 15,
  name: "Color Bloom Fur Wool Rangoli",
  price: 699,
  emoji: "🌺",
  tag: "Most Loved",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Vibrant handcrafted floral fur wool rangoli featuring colorful layered petals for an elegant festive look.",

  fullDesc: "Brighten your home with this Color Bloom Fur Wool Rangoli, featuring beautifully layered floral patterns in vibrant shades of yellow, pink, blue, purple, and green. Handcrafted using premium fur wool, this reusable and durable rangoli is perfect for pooja rooms, living spaces, festive celebrations, weddings, housewarming ceremonies, and gifting.",

  features: [
    "Size: 24 × 24 inches (2 ft × 2 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Festivals, Pooja Rooms & Home Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img20.png"],
},
{
  id: 16,
  name: "Lotus Arch Fur Wool Rangoli",
  price: 499,
  emoji: "🪷",
  tag: "Most Loved",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Elegant handcrafted lotus arch fur wool rangoli designed to beautifully enhance pooja setups and festive decorations.",

  fullDesc: "Create a divine ambiance with this Lotus Arch Fur Wool Rangoli. Featuring a graceful lotus-inspired arch with vibrant pink petals, decorative green leaves, and an auspicious Swastik symbol, this handcrafted rangoli is made from premium fur wool. Reusable and durable, it is perfect for framing idols, kalash, diyas, pooja mandaps, temples, and festive celebrations.",

  features: [
    "Size: 15 × 15 inches Square (1.25 ft × 1.25 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Pooja Mandaps, Idols, Kalash & Festivals"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img21.png"],
},
{
  id: 17,
  name: "Heart Bloom Fur Wool Rangoli",
  price: 299,
  emoji: "💖",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Charming handcrafted heart-shaped floral fur wool rangoli, perfect for adding warmth and elegance to your home décor.",

  fullDesc: "Celebrate love and creativity with this Heart Bloom Fur Wool Rangoli. Designed with alternating red and pink heart-shaped petals surrounding a vibrant floral center, this handcrafted rangoli is made from premium fur wool. Reusable and durable, it is ideal for festivals, anniversaries, Valentine's Day, birthdays, pooja rooms, and everyday home decoration.",

  features: [
    "Size: 12 × 12 inches (1 ft × 1 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Festivals, Special Occasions & Home Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img22.png"],
},
{
  id: 18,
  name: "Decorative Fur Wool Wall Hanging",
  price: 899,
  emoji: "🧵",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Beautiful handcrafted decorative fur wool wall hanging featuring a vibrant geometric design to elevate your home décor.",

  fullDesc: "Enhance your interiors with this Decorative Fur Wool Wall Hanging, featuring a striking geometric pattern handcrafted using premium fur wool. Reusable, durable, and easy to hang, it adds a traditional yet elegant touch to living rooms, pooja rooms, hallways, balconies, entrances, and festive decorations.",

  features: [
    "Size: 48 × 12 inches (4 ft × 1 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Wall Décor, Home Interiors & Festive Decoration"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img23.png"],
},
{
  id: 19,
  name: "Morya Ganesha Fur Wool Rangoli",
  price: 1499,
  emoji: "🐘",
  tag: "Most Loved",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Beautiful handcrafted Ganesha-themed fur wool rangoli featuring eight artistic Lord Ganesha motifs surrounding a vibrant 'Morya' centerpiece.",

  fullDesc: "Celebrate the blessings of Lord Ganesha with this Morya Ganesha Fur Wool Rangoli. Featuring eight intricately designed Ganesha motifs arranged around a vibrant central 'Morya' design with a blooming lotus, this handcrafted rangoli is made from premium fur wool. Reusable and durable, it is perfect for Ganesh Chaturthi, pooja rooms, temples, festivals, housewarming ceremonies, and spiritual home décor.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Ganesh Chaturthi, Pooja Rooms & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img25.jpg"],
},
{
  id: 20,
  name: "Veena Melody Fur Wool Rangoli",
  price: 1499,
  emoji: "🎼",
  tag: "Most Loved",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Beautiful handcrafted Veena-inspired fur wool rangoli featuring a lotus backdrop and peacock feather, symbolizing art, music, and wisdom.",

  fullDesc: "Celebrate the beauty of Indian culture with this Veena Melody Fur Wool Rangoli. Featuring an elegant veena placed over a vibrant lotus-inspired floral design with a decorative peacock feather, this handcrafted rangoli is made from premium fur wool. Reusable and durable, it is perfect for Saraswati Pooja, Vasant Panchami, music rooms, pooja rooms, festivals, and traditional home décor.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Saraswati Pooja, Festivals & Home Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img24.png"],
},
{
  id: 21,
  name: "Govinda Namam Fur Wool Rangoli",
  price: 1499,
  emoji: "🛕",
  tag: "Most Loved",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Sacred handcrafted Govinda Namam fur wool rangoli featuring a vibrant floral border, perfect for spiritual and festive décor.",

  fullDesc: "Bring divine blessings into your home with this Govinda Namam Fur Wool Rangoli. Featuring the sacred Govinda Namam symbol beautifully surrounded by vibrant floral petals, this handcrafted rangoli is made from premium fur wool. Reusable and durable, it is ideal for pooja rooms, temples, Vaikunta Ekadashi, Sri Venkateswara Swamy celebrations, housewarming ceremonies, and festive occasions.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Perfect for Temples, Pooja Rooms & Spiritual Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/img26.png"],
},
{
  id: 22,
  name: "Floral Corner Rangoli Set",
  price: 499,
  emoji: "🌼",
  tag: "Most Loved",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Elegant handcrafted floral corner rangoli set with a matching center spiral, available in multiple vibrant color combinations.",

  fullDesc: "Decorate your home beautifully with this handcrafted Floral Corner Rangoli Set. The set includes four floral corner pieces and one matching spiral centerpiece, making it perfect for framing pooja areas, entrances, stages, or festive decorations. Crafted from premium fur wool, it is reusable, durable, and available in multiple attractive color combinations to match your décor.",

  features: [
    "Corner Pieces: 18 × 18 inches (1.5 ft × 1.5 ft) each",
    "Center Rangoli: 18 × 18 inches (1.5 ft × 1.5 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Available in Multiple Color Combinations",
    "Ideal for Home & Festive Décor"
  ],

  images: [],

  variants: [
    {
      color: "Orange & Yellow",
      desc: "A bright orange and yellow combination that brings warmth and festive elegance to any space.",
      images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/file-00000000ac7071fb80ccb5e1dd94e4e5.png"]
    },
    {
      color: "Red & Green",
      desc: "A rich red and green color combination offering a bold and premium festive appearance.",
      images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/file-00000000f7207206b64b0d17cb797191.png"]
    },
    {
      color: "Red & White",
      desc: "A classic red and white combination with green accents, perfect for traditional celebrations.",
      images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/file-00000000812471fab81f865f4de6c821.png"]
    },
    {
      color: "Orange & Green",
      desc: "A vibrant orange and green combination inspired by festive floral decorations and traditional décor.",
      images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/file-0000000062287207a4961d571c890731.png"]
    },
    {
      color: "Orange & Pink",
      desc: "A cheerful orange and pink combination that adds a colorful and elegant touch to festive decorations.",
      images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/file-0000000005707207ae24c5711baf3cb2.png"]
    }
  ]
},
{
  id: 23,
  name: "Lotus Garden Fur Wool Rangoli",
  price: 699,
  emoji: "🪷",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Elegant handcrafted lotus garden fur wool rangoli featuring blooming lotus flowers and graceful buds, perfect for festive and spiritual décor.",

  fullDesc: "Bring serenity and elegance into your home with this Lotus Garden Fur Wool Rangoli. Designed with a large blooming lotus surrounded by graceful lotus buds on vibrant green stems, this handcrafted rangoli is made from premium fur wool. The bright orange circular background beautifully highlights the floral design, making it ideal for pooja rooms, festivals, entrances, weddings, housewarming ceremonies, and traditional home décor. Reusable, durable, and crafted with intricate detailing for a premium finish.",

  features: [
    "Size: 24 × 24 inches (2 ft × 2 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Beautiful Lotus Garden Design",
    "Premium Circular Finish",
    "Perfect for Pooja Rooms, Festivals & Home Décor",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: [
    "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/orange%20lotus.jpeg"
  ]
},
{
  id: 24,
  name: "Hibiscus Bloom Fur Wool Rangoli",
  price: 1499,
  emoji: "🌺",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Elegant handcrafted hibiscus floral fur wool rangoli featuring vibrant blooms and auspicious traditional elements for festive home décor.",

  fullDesc: "Enhance your festive celebrations with this beautifully handcrafted Hibiscus Bloom Fur Wool Rangoli. Showcasing a stunning arrangement of vibrant hibiscus flowers complemented by colorful floral accents and lush green detailing, this premium fur wool rangoli brings elegance and traditional charm to any space. Designed for pooja rooms, Ganesh Chaturthi, Diwali, housewarming ceremonies, temple entrances, and festive décor, it is reusable, durable, and crafted with exceptional attention to detail for a rich and premium finish.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Elegant Hibiscus Floral Design",
    "Handcrafted & Reusable",
    "Perfect for Pooja Rooms & Festive Décor",
    "Durable & Long-lasting",
    "Premium Quality Finish",
    "Pan India Delivery"
  ],

  images: [
    "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/hibiscus%202.jpeg", "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/hibuscus.jpeg"
  ]
},
{
  id: 25,
  name: "Red Lotus Backdrop Fur Wool Rangoli",
  price: 699,
  emoji: "🪷",
  tag: "Best Seller",
  isBestSeller: true,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Grand handcrafted red lotus backdrop fur wool rangoli, perfect for Ganesh Chaturthi, pooja mandaps, and festive décor.",

  fullDesc: "Transform your festive celebrations with this stunning Red Lotus Backdrop Fur Wool Rangoli. Featuring a magnificent blooming red lotus with lush green leaves, this handcrafted masterpiece is made from premium fur wool to create an elegant backdrop for Lord Ganesha, temples, pooja mandaps, weddings, housewarming ceremonies, and festive decorations. Reusable, durable, and intricately crafted, it adds a rich traditional charm to every celebration.",

  features: [
    "Size: 24 × 24 inches (2 ft × 2 ft)",
    "Material: Premium Fur Wool",
    "Grand Red Lotus Backdrop Design",
    "Handcrafted & Reusable",
    "Perfect for Ganesh Chaturthi, Pooja Mandaps & Festivals",
    "Premium Quality Finish",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: [
    "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/big%20lotus.jpeg"
  ]
},
{
  id: 26,
  name: "Lotus Garden Backdrop Fur Wool Rangoli",
  price: 1299,
  emoji: "🪷",
  tag: "Best Seller",
  isBestSeller: true,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Elegant handcrafted lotus garden backdrop fur wool rangoli featuring blooming pink lotus flowers, perfect for festive and spiritual décor.",

  fullDesc: "Enhance your festive celebrations with this beautifully handcrafted Lotus Garden Backdrop Fur Wool Rangoli. Featuring three vibrant blooming lotus flowers surrounded by lush green leaves on a rich golden backdrop, this premium fur wool creation adds a graceful and devotional touch to any space. Perfect as a backdrop for Lord Ganesha, pooja mandaps, temples, housewarming ceremonies, weddings, and festive home décor. Crafted with premium fur wool, it is reusable, durable, and designed to create a stunning traditional ambiance.",

  features: [
    "Size: 30 × 36 inches (2.5 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Three Lotus Floral Backdrop Design",
    "Handcrafted & Reusable",
    "Perfect for Ganesh Chaturthi, Pooja Mandaps & Festivals",
    "Premium Quality Finish",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: [
    "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/lotus%20backdrop.jpeg"
  ]
},
{
  id: 27,
  name: "Shivling Lotus Backdrop Fur Wool Rangoli",
  price: 699,
  emoji: "🔱",
  tag: "Best Seller",
  isBestSeller: true,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Grand handcrafted Shivling and lotus backdrop fur wool rangoli, perfect for Mahashivratri, pooja rooms, temples, and festive décor.",

  fullDesc: "Create a divine spiritual ambiance with this beautifully handcrafted Shivling Lotus Backdrop Fur Wool Rangoli. Featuring a majestic Shivling adorned with sacred Tripundra, a vibrant pink lotus backdrop, Trishul-inspired elements, and a hibiscus flower, this premium fur wool masterpiece symbolizes devotion, purity, and divine blessings. Ideal as a backdrop for pooja mandaps, temples, Mahashivratri celebrations, Shravan month, housewarming ceremonies, and festive home décor. Crafted using premium fur wool, it is reusable, durable, and designed to make every celebration truly auspicious.",

  features: [
    "Size: 24 × 24 inches (2 ft × 2 ft)",
    "Material: Premium Fur Wool",
    "Shivling & Lotus Backdrop Design",
    "Handcrafted & Reusable",
    "Perfect for Mahashivratri, Temples & Pooja Mandaps",
    "Premium Quality Finish",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: [
    "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/shivling%20lotus.jpeg"
  ]
},
{
  id: 28,
  name: "Light Pink Lotus Fur Wool Rangoli",
  price: 199,
  emoji: "🪷",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Beautiful handcrafted light pink lotus fur wool rangoli, perfect for pooja rooms, festive décor, and spiritual celebrations.",

  fullDesc: "Add a touch of elegance and serenity to your home with this Light Pink Lotus Fur Wool Rangoli. Featuring a graceful blooming lotus with soft light pink petals and vibrant green leaves, this handcrafted rangoli is made from premium fur wool for a rich and luxurious finish. Reusable, durable, and lightweight, it is ideal for pooja rooms, temples, Ganesh Chaturthi, Diwali, housewarming ceremonies, and festive home decoration.",

  features: [
    "Size: 12 × 12 inches (1 ft × 1 ft)",
    "Material: Premium Fur Wool",
    "Light Pink Lotus Design",
    "Handcrafted & Reusable",
    "Perfect for Pooja Rooms & Festive Décor",
    "Durable & Long-lasting",
    "Premium Quality Finish",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/light%20pink%20lotus.jpeg"]
},
{
  id: 29,
  name: "Dark Pink Lotus Fur Wool Rangoli",
  price: 199,
  emoji: "🪷",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Elegant handcrafted dark pink lotus fur wool rangoli, perfect for pooja rooms, festive décor, and spiritual celebrations.",

  fullDesc: "Bring elegance and vibrance to your home with this Dark Pink Lotus Fur Wool Rangoli. Featuring a beautifully blooming lotus with rich dark pink petals and lush green leaves, this handcrafted rangoli is made from premium fur wool for a luxurious finish. Reusable, durable, and lightweight, it is ideal for pooja rooms, temples, Ganesh Chaturthi, Diwali, housewarming ceremonies, and festive home decoration.",

  features: [
    "Size: 12 × 12 inches (1 ft × 1 ft)",
    "Material: Premium Fur Wool",
    "Dark Pink Lotus Design",
    "Handcrafted & Reusable",
    "Perfect for Pooja Rooms & Festive Décor",
    "Durable & Long-lasting",
    "Premium Quality Finish",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/dark%20pink%20lotus.jpeg"]
},
{
  id: 30,
  name: "Dual Tone Lotus Fur Wool Rangoli",
  price: 250,
  emoji: "🪷",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Beautiful handcrafted dual-tone lotus fur wool rangoli featuring elegant red and pink petals, perfect for festive and spiritual décor.",

  fullDesc: "Enhance your home with this beautifully handcrafted Dual Tone Lotus Fur Wool Rangoli. Featuring a striking lotus design with rich red and soft pink petals outlined in white fur wool, this unique rangoli creates a vibrant and elegant look. The decorative hanging tassels add a traditional touch, making it perfect for pooja rooms, temple entrances, Ganesh Chaturthi, Diwali, housewarming ceremonies, and festive home décor. Crafted from premium fur wool, it is reusable, durable, and designed to elevate every celebration.",

  features: [
    "Size: 15 × 15 inches (1.25 ft × 1.25 ft)",
    "Material: Premium Fur Wool",
    "Dual Tone Lotus Design",
    "Handcrafted & Reusable",
    "Decorative Hanging Tassels",
    "Perfect for Pooja Rooms & Festive Décor",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/2%20colour%20lotus.jpeg"]
},
{
  id: 31,
  name: "Orange Kalash Fur Wool Rangoli",
  price: 199,
  emoji: "🪔",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Beautiful handcrafted orange kalash fur wool rangoli featuring sacred mango leaves and a coconut, perfect for festive and spiritual décor.",

  fullDesc: "Welcome prosperity and auspiciousness into your home with this Orange Kalash Fur Wool Rangoli. Featuring a traditional orange kalash adorned with sacred mango leaves, a coconut, and an auspicious Swastik symbol, this handcrafted rangoli is made from premium fur wool for a rich and elegant finish. Reusable, durable, and lightweight, it is ideal for pooja rooms, Ganesh Chaturthi, Diwali, Varalakshmi Vratham, Navratri, housewarming ceremonies, and festive home decoration.",

  features: [
    "Size: 12 × 18 inches (1 ft × 1.5 ft)",
    "Material: Premium Fur Wool",
    "Traditional Orange Kalash Design",
    "Handcrafted & Reusable",
    "Sacred Swastik, Coconut & Mango Leaves",
    "Perfect for Pooja Rooms & Festive Décor",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/orange%20kalash.jpeg"]
},
{
  id: 32,
  name: "Yellow Kalash Fur Wool Rangoli",
  price: 150,
  emoji: "🏺",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Beautiful handcrafted yellow kalash fur wool rangoli featuring sacred mango leaves and a coconut, perfect for festive and spiritual décor.",

  fullDesc: "Invite prosperity and positive energy into your home with this Yellow Kalash Fur Wool Rangoli. Designed with a traditional yellow kalash, sacred mango leaves, a coconut, and an auspicious Swastik symbol, this handcrafted rangoli is made from premium fur wool for a vibrant and elegant finish. Reusable, durable, and lightweight, it is perfect for pooja rooms, Varalakshmi Vratham, Ganesh Chaturthi, Diwali, Navratri, housewarming ceremonies, and festive home decoration.",

  features: [
    "Size: 12 × 12 inches (1 ft × 1 ft)",
    "Material: Premium Fur Wool",
    "Traditional Yellow Kalash Design",
    "Handcrafted & Reusable",
    "Sacred Swastik, Coconut & Mango Leaves",
    "Perfect for Pooja Rooms & Festive Décor",
    "Durable & Long-lasting",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/yellow%20kalash.jpeg"]
},
{
  id: 33,
  name: "Half Flower Fur Wool Rangoli",
  price: 199,
  priceNote: "Set of 2 half flower rangolis",
  emoji: "🌼",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Beautiful handcrafted half flower fur wool rangoli, perfect for decorating staircases, entrances, corners, and festive spaces.",

  fullDesc: "Enhance your home décor with this Half Flower Fur Wool Rangoli. Featuring a vibrant half-flower design in bright yellow and orange shades with a bold black outline, this handcrafted rangoli is made from premium fur wool for a rich and elegant finish. Designed especially for staircases, entrances, doorway corners, pooja rooms, festive celebrations, and housewarming ceremonies, it is reusable, durable, and easy to place, adding a traditional charm to every occasion.",

  features: [
    "Size: 12 × 12 inches (1 ft × 1 ft) Half Flower Design",
    "Material: Premium Fur Wool",
    "Half Flower Design",
    "Handcrafted & Reusable",
    "Perfect for Staircases, Entrances & Festive Décor",
    "Durable & Long-lasting",
    "Premium Quality Finish",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/half%20flower.jpeg", "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/half%20flower%202.jpeg"]
},
{
  id: 34,
  name: "Four Flower Set Fur Wool Rangoli",
  price: 499,
  priceNote: "Set of 4 flower rangolis",
  emoji: "🌼",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Beautiful handcrafted four flower corner fur wool rangoli set, perfect for decorating pooja rooms, entrances, staircases, and festive spaces.",

  fullDesc: "Decorate your home with this elegant Four Flower Corner Set Fur Wool Rangoli. Featuring four vibrant floral corner pieces connected by graceful green swirl patterns, this handcrafted rangoli creates a stunning decorative frame for diyas, lamps, kalash, idols, and pooja setups. Made from premium fur wool, it is reusable, durable, and ideal for Diwali, Ganesh Chaturthi, housewarming ceremonies, weddings, and festive home décor.",

  features: [
    "Each Flower: 12 × 12 inches (1 ft × 1 ft)",
    "Material: Premium Fur Wool",
    "Four Flower Corner Set Design",
    "Handcrafted & Reusable",
    "Perfect for Diyas, Lamps, Pooja Rooms & Festive Décor",
    "Durable & Long-lasting",
    "Premium Quality Finish",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/4%20flowers.jpeg", "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/4%20flowers%202.jpeg"]
},
{
  id: 35,
  name: "Lotus Floral Corner Fur Wool Rangoli",
  price: 1299,
  priceNote: "Set of 4 corner rangolis",
  emoji: "🌸",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Elegant handcrafted lotus floral corner fur wool rangoli, perfect for decorating entrances, pooja rooms, and festive corners.",

  fullDesc: "Enhance your festive décor with this Lotus Floral Corner Fur Wool Rangoli. Featuring a vibrant floral mandala, graceful lotus petals, and decorative corner accents, this handcrafted rangoli is made from premium fur wool for a rich and elegant finish. Lightweight, reusable, and durable, it is ideal for entrances, pooja rooms, stages, staircases, weddings, and festive celebrations.",

  features: [
    "Size: 18 × 18 inches (1.5 ft × 1.5 ft) each corner piece",
    "Material: Premium Fur Wool",
    "Lotus Floral Corner Design",
    "Handcrafted & Reusable",
    "Perfect for Entrances, Pooja Rooms & Festive Décor",
    "Durable & Long-lasting",
    "Premium Quality Finish",
    "Pan India Delivery"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/corner.jpeg", "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/1-35/corner%202.jpeg"]
},
{
  id: 36,
  name: "Marigold Flower Pair Fur Wool Rangoli",
  price: 299,
  priceNote: "Set of 2 flower rangolis",
  emoji: "🌼",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Beautiful flower-shaped fur wool rangoli available in multiple vibrant color combinations.",

  fullDesc: "Brighten your home with this beautifully handcrafted Marigold Flower Pair Fur Wool Rangoli. Featuring two matching floral designs with layered petals and rich color combinations, this reusable rangoli is made from premium fur wool for a soft, elegant, and vibrant finish. Perfect for entrances, pooja rooms, living spaces, festivals, weddings, and traditional home décor. Choose your favorite color combination below.",

  features: [
    "Size: 12 × 12 inches (1 ft × 1 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Available in Multiple Color Combinations",
    "Two Matching Flower Pieces",
    "Soft Fur Wool Texture",
    "Ideal for Home & Festive Décor",
    "Perfect for Entrances & Pooja Rooms"
  ],

  images: [], // leave empty when using variants — gallery pulls from variants below

  variants: [
    {
      color: "Orange & Maroon",
      desc: "Bright orange flower petals with a rich maroon border — a bold and festive combination perfect for traditional décor.",
      images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/flower1.jpeg"]
    },
    {
      color: "Yellow & Maroon",
      desc: "Vibrant yellow flower petals with a deep maroon border — a classic and elegant combination for festive occasions.",
      images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/flower2.jpeg"]
    },
    {
      color: "Light Pink & Dark Pink",
      desc: "Beautiful bright pink flower petals with a rich pink border — a graceful and attractive choice for home décor.",
      images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/flower3.jpeg"]
    },
    {
      color: "Orange & Green",
      desc: "Bright orange flower petals with a deep green border — a fresh and vibrant combination inspired by traditional festive colors.",
      images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/flower4.jpeg"]
    },
    {
      color: "Orange & Purple",
      desc: "Vibrant orange flower petals with a royal purple border — a striking and colorful combination for festive decorations.",
      images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/flower5.jpeg"]
    }
  ]
},
{
  id: 37,
  name: "Shivling Lotus Fur Wool Rangoli",
  price: 399,
  emoji: "🪷",
  tag: "New Arrival",
  isBestSeller: true,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Elegant Shivling and lotus themed fur wool rangoli, beautifully handcrafted for traditional festive décor.",

  fullDesc: "Bring a divine and traditional touch to your home with this beautifully handcrafted Shivling Lotus Fur Wool Rangoli. Featuring a detailed black Shivling with sacred markings, a graceful blue and white arch, and a vibrant pink lotus base, this rangoli creates a peaceful and devotional atmosphere. Made with premium fur wool, it is reusable, durable, and perfect for pooja rooms, entrances, festivals, and special occasions.",

  features: [
    "Size: 18 × 18 inches (1.5 ft × 1.5 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Detailed Shivling & Lotus Design",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Ideal for Pooja Rooms & Entrances",
    "Perfect for Festive & Traditional Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/shivling.jpeg"]
},
{
  id: 38,
  name: "Ardhanarishvara Fur Wool Rangoli",
  price: 1499,
  emoji: "🕉️",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Beautiful Ardhanarishvara-inspired fur wool rangoli featuring a divine Shiva and Shakti design.",

  fullDesc: "Add a divine and artistic touch to your home with this beautifully handcrafted Ardhanarishvara Fur Wool Rangoli. Featuring the graceful combined form of Shiva and Shakti with a striking blue and cream face, crescent moon, traditional details, lotus petals, and a vibrant green background, this rangoli creates a unique spiritual and elegant look. Made from premium fur wool, it is reusable, durable, and ideal for pooja rooms, entrances, festivals, and traditional home décor.",

  features: [
    "Size: 36 × 36 inches (3 ft × 3 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Ardhanarishvara Shiva-Shakti Design",
    "Detailed Traditional Artwork",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Ideal for Pooja Rooms & Entrances",
    "Perfect for Festive & Traditional Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/ardhanari.jpeg"]
},
{
  id: 39,
  name: "Sankranti Festive Rangoli",
  price: 3999,
  emoji: "🌾",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Traditional Sankranti-themed fur wool rangoli featuring a festive woman, harvest decorations, and colorful kites.",

  fullDesc: "Celebrate the vibrant spirit of Sankranti with this beautifully handcrafted Sankranti Festive Rangoli. Featuring a traditional woman in a beautiful saree holding a decorated pooja thali, colorful kites, festive floral decorations, and auspicious Sankranti elements, this rangoli beautifully captures the joy and traditions of the harvest festival. Made from premium fur wool, it is reusable, durable, and perfect for Sankranti celebrations, entrances, pooja spaces, and festive home décor.",

  features: [
    "Size: 48 × 48 inches (4 ft × 4 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Traditional Sankranti Theme",
    "Festive Woman & Pooja Thali Design",
    "Colorful Kite Decorations",
    "Detailed Festive Artwork",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Perfect for Sankranti & Harvest Festival Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/sankranti.jpeg"]
},
{
  id: 40,
  name: "Floral Bloom Fur Wool Rangoli",
  price: 699,
  emoji: "🌸",
  tag: "New Arrival",
  isBestSeller: true,
  isNew: true,
  isMostLoved: true,

  shortDesc: "Elegant floral-inspired fur wool rangoli featuring layered pink, white, and green petals with a vibrant decorative center.",

  fullDesc: "Brighten your home with this beautifully handcrafted Floral Bloom Fur Wool Rangoli. Featuring layered floral petals in pink, white, and green with a vibrant center, this elegant rangoli adds a graceful and festive touch to entrances, pooja rooms, and living spaces. Made from premium fur wool, it is reusable, durable, and perfect for festive home décor.",

  features: [
    "Size: 24 × 24 inches (2 ft × 2 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Floral Bloom Design",
    "Pink, White & Green Color Combination",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Ideal for Home & Festive Décor",
    "Perfect for Entrances and Pooja Rooms"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/bigflower1.jpeg"]
},
{
  id: 41,
  name: "Festive Floral Mandala Fur Wool Rangoli",
  price: 699,
  emoji: "🌺",
  tag: "New Arrival",
  isBestSeller: true,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Vibrant floral mandala rangoli featuring layered orange, red, yellow, and green petals with intricate geometric detailing.",

  fullDesc: "Brighten your home with this beautifully handcrafted Festive Floral Mandala Fur Wool Rangoli. Featuring multiple layers of colorful petals in vibrant orange, red, yellow, and green, this intricate mandala design creates a stunning traditional look. Made from premium fur wool, it is reusable, durable, and perfect for entrances, pooja rooms, festivals, and special occasions.",

  features: [
    "Size: 24 × 24 inches (2 ft × 2 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Floral Mandala Design",
    "Vibrant Orange, Red, Yellow & Green Colors",
    "Intricate Layered Petal Pattern",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Ideal for Home & Festive Décor",
    "Perfect for Entrances and Pooja Rooms"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/bigflower2.jpeg"]
},
{
  id: 42,
  name: "Sunshine Floral Fur Wool Rangoli",
  price: 699,
  priceNote: "Set of 8 leaves and 1 center flower",
  emoji: "🌼",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Bright floral fur wool rangoli featuring a vibrant orange and yellow flower surrounded by fresh green leafy patterns.",

  fullDesc: "Bring a cheerful festive touch to your home with this beautifully handcrafted Sunshine Floral Fur Wool Rangoli. Featuring a vibrant orange and yellow central flower surrounded by detailed green leaves and decorative floral motifs, this design creates a fresh and traditional look. Made from premium fur wool, it is reusable, durable, and perfect for entrances, pooja rooms, festivals, and special occasions.",

  features: [
    "Size: 12 × 12 inches (1 ft × 1 ft) center flower, 6 inches (1.5 ft) leaves",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Floral & Leaf Design",
    "Vibrant Orange, Yellow & Green Colors",
    "Intricate Layered Petal Pattern",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Ideal for Home & Festive Décor",
    "Perfect for Entrances and Pooja Rooms"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/bigflower3.jpeg"]
},
{
  id: 43,
  name: "Floral Peacock Arch Fur Wool Rangoli",
  price: 399,
  emoji: "🦚",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Elegant arch-shaped fur wool rangoli featuring colorful peacocks, vibrant floral petals, and intricate leafy detailing.",

  fullDesc: "Create a stunning festive entrance with this beautifully handcrafted Floral Peacock Arch Fur Wool Rangoli. Designed in an elegant arch shape, it features two colorful peacocks surrounded by vibrant green foliage, decorative flowers, and a graceful orange border. Made from premium fur wool, this reusable and durable rangoli is perfect for decorating entrances, doorways, pooja spaces, and festive occasions.",

  features: [
    "Size: 18 × 21 inches (1.5 ft × 1.75 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Elegant Arch-Shaped Design",
    "Decorated with Peacock & Floral Motifs",
    "Vibrant Pink, Orange, Green & Blue Colors",
    "Intricate Leaf Detailing",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Ideal for Doorways, Entrances & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/arch1.jpeg"]
},
{
  id: 44,
  name: "Lotus Peacock Arch Fur Wool Rangoli",
  price: 399,
  emoji: "🦚",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Elegant arch-shaped fur wool rangoli featuring twin peacocks, vibrant flowers, green foliage, and a beautiful lotus centerpiece.",

  fullDesc: "Add a graceful traditional touch to your home with this beautifully handcrafted Lotus Peacock Arch Fur Wool Rangoli. Featuring two elegant blue peacocks, vibrant floral accents, curved green foliage, and a layered pink lotus centerpiece, this arch-shaped design creates a stunning festive display. Made from premium fur wool, it is reusable, durable, and perfect for entrances, doorways, pooja spaces, and festive celebrations.",

  features: [
    "Size: 18 × 21 inches (1.5 ft × 1.75 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Elegant Arch-Shaped Design",
    "Lotus & Peacock Motifs",
    "Vibrant Blue, Orange, Green & Pink Colors",
    "Layered Lotus Flower Centerpiece",
    "Intricate Floral & Leaf Detailing",
    "Soft Fur Wool Texture",
    "Ideal for Doorways, Entrances & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/arch2.jpeg"]
},
{
  id: 45,
  name: "Peacock Floral Arch Fur Wool Rangoli",
  price: 399,
  emoji: "🦚",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Beautiful arch-shaped fur wool rangoli featuring twin peacocks, vibrant flowers, green foliage, and a charming floral centerpiece.",

  fullDesc: "Enhance your entrance with this beautifully handcrafted Peacock Floral Arch Fur Wool Rangoli. Featuring two graceful blue peacocks, vibrant pink and orange flowers, curved green foliage, and a charming floral centerpiece, this arch-shaped rangoli creates an elegant and festive look. Made from premium fur wool, it is reusable, durable, and perfect for doorways, entrances, pooja spaces, and festive celebrations.",

  features: [
    "Size: 18 × 21 inches (1.5 ft × 1.75 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Elegant Arch-Shaped Design",
    "Peacock & Floral Motifs",
    "Vibrant Blue, Pink, Red, Green & Orange Colors",
    "Beautiful Floral Centerpiece",
    "Intricate Leaf & Floral Detailing",
    "Soft Fur Wool Texture",
    "Ideal for Doorways, Entrances & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/arch3.jpeg"]
},
{
  id: 46,
  name: "Blush Peacock Bloom Fur Wool Rangoli",
  price: 399,
  emoji: "🌸",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Elegant fur wool rangoli featuring graceful peacock motifs, vibrant floral accents, and a beautiful pink bloom centerpiece.",

  fullDesc: "Bring a graceful festive charm to your home with this beautifully handcrafted Blush Peacock Bloom Fur Wool Rangoli. Featuring twin peacock motifs, lush green curved detailing, colorful floral accents, and a striking pink bloom centerpiece, this unique design is perfect for entrances, doorways, pooja spaces, and festive décor. Crafted with premium fur wool, it is reusable, durable, and designed to add a vibrant traditional touch to your home.",

  features: [
    "Size: 18 × 21 inches (1.5 ft × 1.75 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Elegant Peacock-Inspired Design",
    "Beautiful Pink Floral Centerpiece",
    "Vibrant Multicolor Detailing",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Ideal for Doorways, Entrances & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/arch4.jpeg"]
},
{
  id: 47,
  name: "Marigold Diya Flower Border Fur Wool Rangoli",
  price: 149,
  priceNote: "Each separate flower rangoli",
  emoji: "🌼",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Vibrant orange floral rangoli with green leaves and diya accents, perfect for decorating entrances and pathways.",

  fullDesc: "Brighten your home with this beautifully handcrafted Marigold Diya Flower Border Fur Wool Rangoli. Designed with a repeating row of vibrant orange flowers, lush green leaves, and diya holders at the center of each bloom, this border-style rangoli creates a warm and festive pathway décor. Made with premium fur wool, it is reusable, durable, and ideal for entrances, hallways, balconies, pooja spaces, and festive occasions.",

  features: [
    "Size: 12 × 12 inches (1 ft × 1 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Border-Style Rangoli Design",
    "Vibrant Orange Flower Pattern",
    "Green Leaf Detailing",
    "Diya Placement in Each Flower",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Ideal for Entrances, Pathways & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/orange%20flower%20boarder.jpeg", "https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/orange%20border%202.jpeg"]
},
{
  id: 48,
  name: "Royal Mandala Pathway Fur Wool Rangoli",
  price: 1999,
  emoji: "🪷",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Elegant vertical border rangoli featuring layered circular mandala motifs in vibrant orange, red, yellow, white, and purple shades.",

  fullDesc: "Add a graceful traditional touch to your home with this beautifully handcrafted Royal Mandala Pathway Fur Wool Rangoli. Featuring a sequence of vibrant circular mandala motifs connected along a vertical pathway and finished with a bold heart-shaped floral element, this design is perfect for entrances, pooja spaces, hallways, and festive décor. Crafted with premium fur wool, it is reusable, durable, and easy to arrange.",

  features: [
    "Size: 18 × 60 inches (1.5 ft × 5 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Vertical Border Rangoli Design",
    "Layered Mandala Patterns",
    "Vibrant Multicolor Detailing",
    "Decorative Heart-Shaped End Design",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Ideal for Entrances, Pathways & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/boarder1.jpeg"]
},
{
  id: 49,
  name: "Peacock Welcome Floral Border Fur Wool Rangoli",
  price: 3999,
  emoji: "🦚",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Traditional vertical fur wool rangoli featuring a majestic peacock, lotus flowers, festive kalash, and an elegant welcome panel.",

  fullDesc: "Welcome guests in traditional style with this beautifully handcrafted Peacock Welcome Floral Border Fur Wool Rangoli. Featuring a graceful peacock with colorful feather detailing, pink lotus flowers, festive kalash motifs, and a decorative welcome panel, this long vertical design adds a rich cultural touch to entrances and doorways. Made with premium fur wool, it is reusable, durable, and perfect for festive occasions, pooja spaces, weddings, and traditional celebrations.",

  features: [
    "Size: 24 × 120 inches (2 ft × 10 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Long Vertical Border Design",
    "Beautiful Peacock Motif",
    "Pink Lotus Floral Detailing",
    "Traditional Kalash Design",
    "Decorative Welcome Panel",
    "Vibrant Multicolor Fur Wool",
    "Ideal for Entrances, Doorways & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/boarder2.jpeg"]
},
{
  id: 50,
  name: "Rainbow Mandala Leaf Border Fur Wool Rangoli",
  price: 3999,
  emoji: "🌈",
  tag: "New Arrival",
  isBestSeller: false,
  isNew: true,
  isMostLoved: false,

  shortDesc: "Vibrant vertical fur wool rangoli featuring colorful concentric mandala circles framed by bright flowers and green leaves.",

  fullDesc: "Brighten your entrance with this beautifully handcrafted Rainbow Mandala Leaf Border Fur Wool Rangoli. Featuring a striking sequence of colorful concentric circular motifs, vibrant orange and yellow floral accents, and layered green leaves, this long border design creates a lively and elegant festive look. Crafted with premium fur wool, it is reusable, durable, and perfect for entrances, hallways, pooja spaces, and festive decorations.",

  features: [
    "Size: 24 × 120 inches (2 ft × 10 ft)",
    "Material: Premium Fur Wool",
    "Handcrafted & Reusable",
    "Vertical Border Rangoli Design",
    "Colorful Concentric Mandala Motifs",
    "Bright Orange & Yellow Floral Detailing",
    "Layered Green Leaf Accents",
    "Soft Fur Wool Texture",
    "Durable & Easy to Maintain",
    "Ideal for Entrances, Pathways & Festive Décor"
  ],

  images: ["https://iiczbrqexcfshmkwwxuv.supabase.co/storage/v1/object/public/product-images/36-50/boarder3.jpeg"]
}
];