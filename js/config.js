// Delight Rabbit Farm Configuration
// Edit this file to update the WhatsApp number and other settings

// Make CONFIG globally available for app.js
window.CONFIG = {
    // WhatsApp configuration
    whatsAppNumber: "250788448889", // Update this with the actual WhatsApp number for Rwanda
    
    // Contact information (will be overridden by data.js)
    contact: {
        address: "",
        phone: "",
        email: "",
        hours: {
            mondayFriday: "",
            saturday: "",
            sunday: ""
        }
    },
    
    // Site information
    siteName: "Delight Rabbit Farm",
    siteTagline: "Purebred Rabbits for Stronger, More Profitable Farms",
    
    // Navigation
    navLinks: [
        { id: "home", text: "Home", anchor: "#home" },
        { id: "about", text: "About Us", anchor: "#about" },
        { id: "services", text: "Services", anchor: "#services", dropdown: true },
        { id: "gallery", text: "Gallery", anchor: "#gallery" },
        { id: "contact", text: "Contact Us", anchor: "#contact" }
    ],
    
    // Service dropdown items
    serviceDropdownItems: [
        { id: "training", text: "Rabbit Farming Training", url: "service-training.html" },
        { id: "breeding", text: "Breeding Rabbits", url: "service-breeding.html" },
        { id: "semen", text: "Rabbit Semen", url: "service-semen.html" },
        { id: "meat", text: "Rabbit Meat", url: "service-meat.html" },
        { id: "pellets", text: "Rabbit Pellets", url: "service-pellets.html" },
        { id: "forage", text: "Hay & Forage", url: "service-forage.html" },
        { id: "consultancy", text: "Farm Consultancy", url: "service-consultancy.html" }
    ],
    
    // Social media links (will be overridden by data.js)
    social: {
        facebook: "",
        instagram: "",
        twitter: "",
        linkedin: ""
    }
};