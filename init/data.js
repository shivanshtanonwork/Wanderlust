const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-118.7798, 34.0259], // Malibu, CA
        },
    },
    {
        title: "Modern Downtown Apartment",
        description:
            "Stay in the heart of the city in this sleek and modern apartment. Close to restaurants, shopping, and nightlife.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501183638714-8f3a1b9a1a3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "New York",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-74.006, 40.7128], // New York, NY
        },
    },
    {
        title: "Rustic Mountain Cabin",
        description:
            "Experience the tranquility of the mountains in this rustic cabin surrounded by nature.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "Aspen",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-106.824, 39.1911], // Aspen, CO
        },
    },
    {
        title: "Charming Countryside Villa",
        description:
            "Relax in this charming villa nestled in the countryside with beautiful gardens and a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Tuscany",
        country: "Italy",
        geometry: {
            type: "Point",
            coordinates: [11.2558, 43.7711], // Florence, Tuscany region
        },
    },
    {
        title: "Luxury City Penthouse",
        description:
            "Enjoy panoramic city views from this luxurious penthouse with modern amenities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Dubai",
        country: "UAE",
        geometry: {
            type: "Point",
            coordinates: [55.2708, 25.2048], // Dubai
        },
    },
    {
        title: "Serene Lakeside Retreat",
        description:
            "Unwind at this peaceful lakeside retreat surrounded by nature and beautiful water views.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        price: 1300,
        location: "Lake Tahoe",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-120.0324, 39.0968], // Lake Tahoe
        },
    },
    {
        title: "Urban Chic Loft",
        description:
            "Experience the vibrant city life in this stylish loft with industrial decor and top amenities.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Berlin",
        country: "Germany",
        geometry: {
            type: "Point",
            coordinates: [13.405, 52.52], // Berlin
        },
    },
    {
        title: "Historic Castle Stay",
        description:
            "Live like royalty in this beautifully preserved historic castle with modern comforts.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1486308510493-cb0e9820f4de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Edinburgh",
        country: "Scotland",
        geometry: {
            type: "Point",
            coordinates: [-3.1883, 55.9533], // Edinburgh
        },
    },
    {
        title: "Tropical Jungle Bungalow",
        description:
            "Immerse yourself in nature in this tropical jungle bungalow surrounded by lush greenery.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        price: 900,
        location: "Bali",
        country: "Indonesia",
        geometry: {
            type: "Point",
            coordinates: [115.1889, -8.4095], // Bali
        },
    },
    {
        title: "Snowy Alpine Chalet",
        description:
            "Cozy up in this alpine chalet with stunning snowy mountain views and access to ski slopes.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        price: 1700,
        location: "Zermatt",
        country: "Switzerland",
        geometry: {
            type: "Point",
            coordinates: [7.7491, 46.0207], // Zermatt
        },
    },
    {
        title: "Mountain View Cabin in Banff",
        description:
            "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Banff",
        country: "Canada",
        geometry: {
            type: "Point",
            coordinates: [-115.5724, 51.1784], // Banff, Alberta (Longitude, Latitude)
        },
    },
    {
        title: "Art Deco Apartment in Miami",
        description:
            "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Miami",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-80.1300, 25.7907], // Miami, Florida
        },
    },
    {
        title: "Tropical Villa in Phuket",
        description:
            "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
        geometry: {
            type: "Point",
            coordinates: [98.3923, 7.8804], // Phuket, Thailand
        },
    },
    {
        title: "Historic Castle in Scotland",
        description:
            "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
        geometry: {
            type: "Point",
            coordinates: [-4.2026, 57.1997], // Scottish Highlands approximate center
        },
    },
    {
        title: "Desert Oasis in Dubai",
        description:
            "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
        geometry: {
            type: "Point",
            coordinates: [55.2708, 25.2048], // Dubai, UAE
        },
    },
    {
        title: "Rustic Log Cabin in Montana",
        description:
            "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1100,
        location: "Montana",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-110.4542, 46.8797], // Montana center approx
        },
    },
    {
        title: "Beachfront Villa in Greece",
        description:
            "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
        geometry: {
            type: "Point",
            coordinates: [25.3289, 37.4467], // Mykonos, Greece
        },
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description:
            "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
        geometry: {
            type: "Point",
            coordinates: [-85.6706, 9.7489], // Costa Rica Pacific coast approx
        },
    },
    {
        title: "Historic Cottage in Charleston",
        description:
            "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Charleston",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-79.9311, 32.7765], // Charleston, SC
        },
    },
    {
        title: "Modern Apartment in Tokyo",
        description:
            "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
        geometry: {
            type: "Point",
            coordinates: [139.6917, 35.6895], // Tokyo, Japan
        },
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description:
            "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New Hampshire",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-71.5724, 43.1939], // Approximate center of New Hampshire (Longitude, Latitude)
        },
    },
    {
        title: "Luxury Villa in the Maldives",
        description:
            "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 6000,
        location: "Maldives",
        country: "Maldives",
        geometry: {
            type: "Point",
            coordinates: [73.2207, 3.2028], // Approximate Maldives center (Longitude, Latitude)
        },
    },
    {
        title: "Ski Chalet in Aspen",
        description:
            "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Aspen",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-106.8374, 39.1911], // Aspen, Colorado
        },
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description:
            "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
        geometry: {
            type: "Point",
            coordinates: [-85.6706, 9.7489], // Approximate Pacific coast area of Costa Rica
        },
    },
];

module.exports = { data: sampleListings };


