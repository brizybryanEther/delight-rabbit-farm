// Delight Rabbit Farm - Content Data
// All editable content is defined here for easy backend integration later
// TODO: Replace with API calls when backend is ready

const SITE_DATA = {
    // Contact information
    contact: {
        address: "Rwamagana, Rwanda",
        phone: "+250 788 448 889",
        email: "info@delightrabbitfarm.rw",
        hours: {
            mondayFriday: "09:00 am - 07:00 pm",
            saturday: "09:00 am - 12:00 pm",
            sunday: "Closed"
        }
    },

    // Social media links
    social: {
        facebook: "https://facebook.com/delightrabbitfarm",
        instagram: "https://instagram.com/delightrabbitfarm",
        twitter: "https://twitter.com/delightrabbit",
        linkedin: "https://linkedin.com/company/delightrabbitfarm"
    },

    // Stats for the stats strip
    stats: [
        { label: "Years of Experience", count: 10, icon: "fa-calendar" },
        { label: "Purebred Rabbits Supplied", count: 5000, icon: "fa-rabbit" },
        { label: "Farmers Trained", count: 250, icon: "fa-user-tie" },
        { label: "Purebred Breeds Available", count: 12, icon: "fa-dna" }
    ],

    // About section
    about: {
        eyebrow: "About Us",
        heading: "A Passionate Purebred Rabbit Farm in Rwanda",
        lead: "Breeding purebred rabbits with verified pedigree and health-checked stock for Rwandan farmers.",
        description: "At Delight Rabbit Farm, we specialise in purebred rabbits with documented pedigrees and certified quality genetics. Our farm in Rwanda focuses on breed purity, selective breeding, and meticulous health and record keeping so every rabbit we supply is healthy, productive, and true to its line.",
        iconBoxes: [
            {
                icon: "fa-rabbit",
                title: "Purebred, Pedigreed Stock",
                description: "Every rabbit comes with documented pedigree and breed information so you know exactly what you are buying."
            },
            {
                icon: "fa-paw",
                title: "Farmer-First Support",
                description: "We provide training, guidance, and ongoing support so your rabbit farming venture succeeds from day one."
            }
        ],
        featureTiles: [
            { icon: "fa-dna", title: "Purebred Quality Genetics" },
            { icon: "fa-user-tie", title: "Expert Guidance" },
            { icon: "fa-truck", title: "Reliable Supply" },
            { icon: "fa-tag", title: "Affordable Pricing" }
        ]
    },

    // Services (7 services)
    services: [
        {
            id: "training",
            number: "01",
            title: "Rabbit Farming Training",
            description: "Hands-on courses for beginners and commercial farmers covering housing, feeding, breeding, health management, and business planning.",
            image: "img/service-1.jpg",
            alt: "Rabbit farming training session at Delight Rabbit Farm",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Rabbit Farming Training."
        },
        {
            id: "breeding",
            number: "02",
            title: "Breeding Rabbits",
            description: "Purebred breeding stock with breed and pedigree information on request. Bucks, does, and young stock available.",
            image: "img/service-2.jpg",
            alt: "Purebred breeding rabbits at Delight Rabbit Farm",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Breeding Rabbits (purebred stock)."
        },
        {
            id: "semen",
            number: "03",
            title: "Rabbit Semen",
            description: "Semen from purebred bucks to improve herd genetics and keep breed lines pure. Handled and delivered with care.",
            image: "img/service-3.jpg",
            alt: "Rabbit semen collection and storage equipment",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Rabbit Semen for genetic improvement."
        },
        {
            id: "meat",
            number: "04",
            title: "Rabbit Meat",
            description: "Fresh, lean, hygienically processed rabbit meat from healthy, well-managed stock. For households, restaurants, and retailers.",
            image: "img/service-4.jpg",
            alt: "Fresh rabbit meat products from Delight Rabbit Farm",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Rabbit Meat products."
        },
        {
            id: "pellets",
            number: "05",
            title: "Rabbit Pellets",
            description: "Balanced, nutritious feed pellets formulated for every growth stage of rabbits.",
            image: "img/service-5.jpg",
            alt: "Rabbit feed pellets at Delight Rabbit Farm",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Rabbit Pellets."
        },
        {
            id: "forage",
            number: "06",
            title: "Hay & Forage",
            description: "Quality hay and fresh forage for healthy digestion and optimal rabbit health.",
            image: "img/service-6.jpg",
            alt: "Hay and fresh forage for rabbits at Delight Rabbit Farm",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Hay & Forage."
        },
        {
            id: "consultancy",
            number: "07",
            title: "Farm Consultancy",
            description: "Farm setup, hutch design, herd management, and profitability advice for new and existing rabbit farms.",
            image: "img/service-7.jpg",
            alt: "Farm consultancy and hutch design at Delight Rabbit Farm",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Farm Consultancy services."
        }
    ],

    // Purebred Breeds (placeholder - owner to fill in real breeds)
    breeds: [
        {
            id: "breed1",
            name: "Breed Name 1",
            image: "img/service-1.jpg",
            alt: "Breed Name 1 purebred rabbit",
            temperament: "Docile, easy to handle",
            matureWeight: "3.5 - 4.5 kg",
            bestUse: "Meat & Breeding",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Breed Name 1 availability."
        },
        {
            id: "breed2",
            name: "Breed Name 2",
            image: "img/service-2.jpg",
            alt: "Breed Name 2 purebred rabbit",
            temperament: "Active, good mothers",
            matureWeight: "4.0 - 5.0 kg",
            bestUse: "Breeding & Show",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Breed Name 2 availability."
        },
        {
            id: "breed3",
            name: "Breed Name 3",
            image: "img/service-3.jpg",
            alt: "Breed Name 3 purebred rabbit",
            temperament: "Calm, fast growing",
            matureWeight: "4.5 - 5.5 kg",
            bestUse: "Meat Production",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Breed Name 3 availability."
        },
        {
            id: "breed4",
            name: "Breed Name 4",
            image: "img/service-4.jpg",
            alt: "Breed Name 4 purebred rabbit",
            temperament: "Gentle, prolific",
            matureWeight: "3.0 - 4.0 kg",
            bestUse: "Breeding & Pets",
            whatsappMessage: "Hello Delight Rabbit Farm, I'm interested in Breed Name 4 availability."
        }
    ],

    // Testimonials
    testimonials: [
        {
            quote: "Delight Rabbit Farm provided us with excellent purebred breeding stock. The pedigrees were well-documented and the rabbits adapted quickly to our farm. Highly recommended for serious rabbit farmers!",
            author: "Jean Baptiste N.",
            role: "Commercial Rabbit Farmer, Musanze",
            image: "img/testimonial-1.jpg"
        },
        {
            quote: "The training course was comprehensive and practical. We learned everything from hutch design to feeding schedules and health management. Our farm's productivity has doubled since applying what we learned.",
            author: "Marie Claire U.",
            role: "New Rabbit Farmer, Rwamagana",
            image: "img/testimonial-2.jpg"
        },
        {
            quote: "The rabbit meat is consistently high quality - lean, tender, and fresh. We've been sourcing from Delight Rabbit Farm for our restaurant for over two years and our customers love it.",
            author: "Chef Patrick K.",
            role: "Restaurant Owner, Kigali",
            image: "img/testimonial-3.jpg"
        }
    ],

    // Team members
    team: [
        {
            name: "Dr. Aimable R.",
            role: "Farm Manager",
            image: "img/team-1.jpg",
            alt: "Dr. Aimable R., Farm Manager at Delight Rabbit Farm"
        },
        {
            name: "Dr. Claudine M.",
            role: "Veterinary Officer",
            image: "img/team-2.jpg",
            alt: "Dr. Claudine M., Veterinary Officer at Delight Rabbit Farm"
        },
        {
            name: "Mr. Emmanuel T.",
            role: "Breeding Specialist",
            image: "img/team-3.jpg",
            alt: "Mr. Emmanuel T., Breeding Specialist at Delight Rabbit Farm"
        },
        {
            name: "Ms. Diane N.",
            role: "Training Coordinator",
            image: "img/team-4.jpg",
            alt: "Ms. Diane N., Training Coordinator at Delight Rabbit Farm"
        }
    ],

    // Blog posts
    blogPosts: [
        {
            id: "blog1",
            date: "15 January 2026",
            category: "Training",
            title: "Beginner's Guide to Starting a Rabbit Farm in Rwanda",
            excerpt: "Everything you need to know about starting a successful rabbit farming venture in Rwanda, from housing to market access.",
            image: "img/blog-1.jpg",
            alt: "Rabbit farming training session"
        },
        {
            id: "blog2",
            date: "28 January 2026",
            category: "Nutrition",
            title: "Best Feed and Forage for Healthy Rabbits",
            excerpt: "A complete guide to rabbit nutrition including pellets, hay, fresh forage, and supplements for optimal growth and health.",
            image: "img/blog-2.jpg",
            alt: "Rabbit feed and forage varieties"
        },
        {
            id: "blog3",
            date: "10 February 2026",
            category: "Breeding",
            title: "Rabbit Breeding Basics: From Mating to Weaning",
            excerpt: "Essential knowledge for successful rabbit breeding including timing, pregnancy care, kindling, and weaning management.",
            image: "img/blog-3.jpg",
            alt: "Mother rabbit with kits"
        }
    ],

    // Gallery images
    gallery: [
        { id: "gal1", src: "img/service-1.jpg", alt: "Rabbit hutches at Delight Rabbit Farm", title: "Modern Rabbit Hutches" },
        { id: "gal2", src: "img/service-2.jpg", alt: "Purebred rabbit at Delight Rabbit Farm", title: "Purebred Breeding Stock" },
        { id: "gal3", src: "img/service-3.jpg", alt: "Rabbit feed pellets", title: "Quality Feed Pellets" },
        { id: "gal4", src: "img/service-4.jpg", alt: "Rabbit meat products", title: "Fresh Rabbit Meat" },
        { id: "gal5", src: "img/service-5.jpg", alt: "Fresh hay and forage", title: "Hay & Forage" },
        { id: "gal6", src: "img/service-6.jpg", alt: "Training session", title: "Farmer Training" },
        { id: "gal7", src: "img/service-7.jpg", alt: "Farm consultancy", title: "Farm Consultancy" },
        { id: "gal8", src: "img/service-8.jpg", alt: "Baby rabbits", title: "Young Stock" }
    ]
};