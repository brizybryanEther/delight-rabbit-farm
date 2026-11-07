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
        { id: "blog", text: "Blog & Education", anchor: "#blog" },
        { id: "gallery", text: "Gallery", anchor: "#gallery" },
        { id: "contact", text: "Contact Us", anchor: "#contact" }
    ],
    
    // Service dropdown items
    serviceDropdownItems: [
        { id: "training", text: "Rabbit Farming Training" },
        { id: "breeding", text: "Breeding Rabbits" },
        { id: "semen", text: "Rabbit Semen" },
        { id: "meat", text: "Rabbit Meat" },
        { id: "pellets", text: "Rabbit Pellets" },
        { id: "forage", text: "Hay & Forage" },
        { id: "consultancy", text: "Farm Consultancy" }
    ],
    
    // Social media links (will be overridden by data.js)
    social: {
        facebook: "",
        instagram: "",
        twitter: "",
        linkedin: ""
    }
};