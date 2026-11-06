# Delight Rabbit Farm - Landing Page & Admin Dashboard

A professional, mobile-friendly single-page landing site for "Delight Rabbit Farm", a rabbit farm in Rwanda. Built as a design prototype with clean, modular code that can be connected to a backend later.

## How to Run

The site needs an HTTP server to work properly (for local dev, use any static server). Open `index.html` in a browser directly or serve from any static site server.

```bash
# Option 1: Python (any folder)
python -m http.server 8000

# Option 2: Node.js (if installed)
npx serve .

# Option 3: VS Code Live Server extension
# Simply right-click index.html and select "Open with Live Server"
```

Then visit `http://localhost:8000` (adjust port if needed).

### Admin Dashboard
Visit `http://localhost:8000/admin/index.html`.
**Demo login:** username = `admin`, password = `admin123`

## Project Structure

```
DelightRabbitFarm/
├── index.html              # Main single-page landing page
├── css/
│   ├── bootstrap.min.css   # Bootstrap 5 (from Agrovia template)
│   ├── style.css           # Template styles (from Agrovia)
│   └── custom.css          # Custom additions for Delight Rabbit Farm
├── js/
│   ├── config.js            # Configuration constants (WhatsApp number, etc.)
│   ├── data.js              # All editable content data
│   ├── main.js              # Template JavaScript (from Agrovia)
│   ├── app.js               # Custom app logic (WOW, stats, WhatsApp)
│   └── admin.js             # Admin dashboard logic (localStorage-based)
├── lib/                     # Animation libraries (copied from Agrovia)
├── img/                     # Images (copied from Agrovia)
└── admin/                   # Admin dashboard
    ├── index.html
    ├── css/
    │   └── admin.css
    └── js/
        └── admin.js
```

## Changing Content

### WhatsApp Number
Edit `js/config.js`:
```javascript
const CONFIG = {
    whatsAppNumber: "25071234567", // Update this
};
```

Or update every WhatsApp URL in `index.html` directly. All buttons share this number.

### All Content
For quick edits, modify `js/data.js` (services, breeds, testimonials, team, blog, gallery, contact info). Then call the corresponding render functions in `js/app.js` or copy changes into `index.html`.

## Placeholders to Replace

### WhatsApp Number
- Every instance of `2507XXXXX` in `index.html` → replace with your actual WhatsApp phone number (without country code)
- Edit `js/config.js` const `WHATSAPP_NUMBER`

### Phone Number
- `+250 7XX XXX XXX` → replace with actual Rwanda phone number

### Location
- `Kigali, Rwanda` → replace with actual address

### Breed Names
- `Breed Name 1`, `Breed Name 2`, etc. → replace with actual breed names in `js/data.js` and `index.html`

### Stats
- Years of Experience, Purebred Rabbits Supplied, Farmers Trained, Purebred Breeds Available → replace actual numbers

### Testimonials
- Author names, roles, quotes, avatars → replace with real farmer testimonials

### Team Members
- Names, roles, photos → replace with real team members

### Prices (if shown)
- Prices in RWF → replace as needed (currently no price display on landing page)

## Images to Replace

All images are copied from the Agrovia template at `img/`. These are placeholder/sample agriculture photos. Replace them with your own royalty-free Rabbit Farm images (e.g., from Unsplash or Pexels) by keeping the same filenames in `/img/`:

| File | Section | Suggested Replacement Image |
|------|---------|----------------------------|
| carousel-1.jpg | Home hero | Rabbit farm exterior, purebred rabbits |
| carousel-2.jpg | Home hero | Breeding pens, breeding stock |
| about-1.jpg | About Us left | Purebred rabbit in hutch |
| about-2.jpg | About Us right | Breeding activities |
| service-1.jpg | Training card | Training session photo |
| service-2.jpg | Breeding card | Breeding pen with rabbits |
| service-3.jpg | Semen card | Semen collection equipment |
| service-4.jpg | Meat card | Fresh meat products |
| service-5.jpg | Pellets card | Feed pellets display |
| service-6.jpg | Hay & Forage card | Hay and fresh forage |
| service-7.jpg | Consultancy card | Consultation meeting |
| service-8.jpg | (extra card) | Any rabbit/farm image |
| blog-1.jpg | Blog post 1 | Training content photo |
| blog-2.jpg | Blog post 2 | Nutrition/feed content |
| blog-3.jpg | Blog post 3 | Breeding/kits content |
| feature-1.jpg | Contact left | Rabbit hutches |
| team-1.jpg | Team member 1 | Farm manager photo |
| team-2.jpg | Team member 2 | Vet officer photo |
| team-3.jpg | Team member 3 | Breeding specialist photo |
| team-4.jpg | Team member 4 | Trainer coordinator photo |
| testimonial-1.jpg | Testimonial 1 | Farmer photo |
| testimonial-2.jpg | Testimonial 2 | Farmer photo |
| testimonial-3.jpg | Testimonial 3 | Chef/farmer photo |

Additionally, you may want to add new images for your purebred breeds showcase. List these in the next section's image checklist if created locally.

## Backend Readiness (Future Full-Stack Phase)

### Stack Suggestion
- **Frontend**: React or Vue.js with Bootstrap 5
- **Backend**: Node.js/Express or Django REST Framework
- **Database**: PostgreSQL or MongoDB
- **File storage**: Cloud storage (AWS S3 / Cloudinary) or local

### API Endpoints to Add
```
GET    /api/services          - List all services
POST   /api/services          - Create service
PUT    /api/services/:id      - Update service
DELETE /api/services/:id      - Delete service

GET    /api/breeds            - List all breeds
POST   /api/breeds            - Create breed
PUT    /api/breeds/:id        - Update breed
DELETE /api/breeds/:id        - Delete breed

GET    /api/blog              - List all blog posts
POST   /api/blog              - Create post
PUT    /api/blog/:id          - Update post
DELETE /api/blog/:id          - Delete post

GET    /api/gallery           - List gallery items
POST   /api/gallery           - Create gallery item
DELETE /api/gallery/:id      - Delete gallery item

GET    /api/testimonials      - List testimonials
POST   /api/testimonials      - Create testimonial
DELETE /api/testimonials/:id  - Delete testimonial

GET    /api/team              - List team members
POST   /api/team              - Create team member
DELETE /api/team/:id          - Delete team member

GET    /api/inquiries         - Get all inquiries
POST   /api/inquiries         - Submit inquiry

GET    /api/settings          - Get site settings
PUT    /api/settings          - Update settings

POST   /api/whatsapp/message  - Receive WhatsApp message
```

### Admin Authentication
Use sessions or JWT tokens. Consider adding role-based access control (Super Admin vs Editor) for different content types.

## Prototype Notes

- **No authentication**: Admin uses localStorage-based demo login (`admin` / `admin123`)
- **Content store**: Currently `js/data.js` + localStorage in admin.js. Replace JSON data fetch calls from API later.
- **WhatsApp integration**: Uses `https://wa.me/<number>?text=<message>` URLs. Frontend-only demo.
- **SEO**: Basic meta tags included. Enhance with Yoast/React Helmet for production.
- **RTL support**: Code structured so Kinyarwanda or French text can be added later. Set `<html lang="rw">` or `fr`.

## Rules Followed

- No invented breeds, certifications, or awards — only obvious placeholders
- No removing Bootstrap, jQuery, or WOW.js — preserved from Agrovia
- Color palette and fonts kept identical to Agrovia: Primary gold #E7B961, dark #181818, cream #F5EEE7, grey #666666, Comic Relief headings, Open Sans body
- Template comments in `<!-- Section Start -->` / `<!-- Section End -->` style
