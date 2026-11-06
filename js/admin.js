// Delight Rabbit Farm - Admin Dashboard JavaScript (Prototype)
// All functions are globally accessible for onclick handlers in HTML

// =====================================================
// GLOBAL FUNCTIONS - Called from HTML onclick handlers
// =====================================================

function goToSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.settings-section');
    sections.forEach(function (s) {
        s.classList.add('d-none');
    });

    // Show selected section
    const targetSection = document.getElementById('section-' + sectionId);
    if (targetSection) {
        targetSection.classList.remove('d-none');
    }

    // Update sidebar active state
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    navLinks.forEach(function (link) {
        link.classList.remove('active', 'show');
    });
    const activeLink = document.querySelector(`.sidebar .nav-link[onclick*="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function showModal(type) {
    const modal = $('#modal-template');
    const modalBody = $('#modal-body');
    const modalFooter = $('#modal-footer');
    const modalTitle = $('#modalTitle');

    modalTitle.text('Add New ' + type.replace(/^\w/, function (c) { return c.toUpperCase(); }));

    let content = '';
    let formActions = '';

    switch (type) {
        case 'service':
            content = `
                <div class="mb-3">
                    <label for="service-title" class="form-label open-sans-regular">Service Title</label>
                    <input type="text" class="form-control form-control-dark" id="service-title" placeholder="Rabbit Farming Training">
                </div>
                <div class="mb-3">
                    <label for="service-category" class="form-label open-sans-regular">Category</label>
                    <select class="form-select form-select-dark" id="service-category">
                        <option value="Farming">Farming</option>
                        <option value="Breeding">Breeding</option>
                        <option value="Genetics">Genetics</option>
                        <option value="Meat">Meat</option>
                        <option value="Feed">Feed</option>
                        <option value="Consultancy">Consultancy</option>
                    </select>
                </div>
                <div class="mb-3 form-check">
                    <input class="form-check-input" type="checkbox" id="service-active" checked>
                    <label class="form-check-label open-sans-regular" for="service-active">Active</label>
                </div>`;
            formActions = `
                <button type="button" class="btn btn-secondary" onclick="hideModal()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="saveService()">Save Service</button>`;
            break;

        case 'product':
            content = `
                <div class="mb-3">
                    <label for="product-title" class="form-label open-sans-regular">Product Title</label>
                    <input type="text" class="form-control form-control-dark" id="product-title" placeholder="Rabbit Pellets">
                </div>
                <div class="mb-3">
                    <label for="product-price" class="form-label open-sans-regular">Price (RWF)</label>
                    <input type="number" class="form-control form-control-dark" id="product-price" placeholder="1500">
                </div>
                <div class="mb-3">
                    <label for="product-description" class="form-label open-sans-regular">Description</label>
                    <textarea class="form-control form-control-dark" id="product-description" rows="3"></textarea>
                </div>`;
            formActions = `
                <button type="button" class="btn btn-secondary" onclick="hideModal()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="saveProduct()">Save Product</button>`;
            break;

        case 'post':
            content = `
                <div class="mb-3">
                    <label for="post-title" class="form-label open-sans-regular">Post Title</label>
                    <input type="text" class="form-control form-control-dark" id="post-title" placeholder="Beginner's Guide to Starting a Rabbit Farm">
                </div>
                <div class="mb-3">
                    <label for="post-category" class="form-label open-sans-regular">Category</label>
                    <select class="form-select form-select-dark" id="post-category">
                        <option value="Training">Training</option>
                        <option value="Nutrition">Nutrition</option>
                        <option value="Breeding">Breeding</option>
                        <option value="Health">Health</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="post-date" class="form-label open-sans-regular">Date</label>
                    <input type="text" class="form-control form-control-dark" id="post-date" value="${new Date().toLocaleDateString('en-GB')}">
                </div>
                <div class="mb-3">
                    <label for="post-excerpt" class="form-label open-sans-regular">Excerpt</label>
                    <textarea class="form-control form-control-dark" id="post-excerpt" rows="3"></textarea>
                </div>`;
            formActions = `
                <button type="button" class="btn btn-secondary" onclick="hideModal()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="savePost()">Save Post</button>`;
            break;

        case 'gallery':
            content = `
                <div class="mb-3">
                    <label for="gallery-title" class="form-label open-sans-regular">Title</label>
                    <input type="text" class="form-control form-control-dark" id="gallery-title" placeholder="Rabbit Training Session">
                </div>
                <div class="mb-3">
                    <label for="gallery-image" class="form-label open-sans-regular">Image (filename)</label>
                    <input type="text" class="form-control form-control-dark" id="gallery-image" placeholder="img/service-1.jpg">
                </div>`;
            formActions = `
                <button type="button" class="btn btn-secondary" onclick="hideModal()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="saveGalleryItem()">Save Gallery Item</button>`;
            break;

        case 'testimonial':
            content = `
                <div class="mb-3">
                    <label for="testimonial-author" class="form-label open-sans-regular">Author Name</label>
                    <input type="text" class="form-control form-control-dark" id="testimonial-author" placeholder="Jean Baptiste N.">
                </div>
                <div class="mb-3">
                    <label for="testimonial-role" class="form-label open-sans-regular">Role</label>
                    <input type="text" class="form-control form-control-dark" id="testimonial-role" placeholder="Commercial Rabbit Farmer">
                </div>
                <div class="mb-3">
                    <label for="testimonial-quote" class="form-label open-sans-regular">Quote</label>
                    <textarea class="form-control form-control-dark" id="testimonial-quote" rows="3"></textarea>
                </div>`;
            formActions = `
                <button type="button" class="btn btn-secondary" onclick="hideModal()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="saveTestimonial()">Save Testimonial</button>`;
            break;

        case 'team':
            content = `
                <div class="mb-3">
                    <label for="team-name" class="form-label open-sans-regular">Name</label>
                    <input type="text" class="form-control form-control-dark" id="team-name" placeholder="Dr. Aimable R.">
                </div>
                <div class="mb-3">
                    <label for="team-role" class="form-label open-sans-regular">Role</label>
                    <input type="text" class="form-control form-control-dark" id="team-role" placeholder="Farm Manager">
                </div>
                <div class="mb-3">
                    <label for="team-image" class="form-label open-sans-regular">Image (filename)</label>
                    <input type="text" class="form-control form-control-dark" id="team-image" placeholder="img/team-1.jpg">
                </div>`;
            formActions = `
                <button type="button" class="btn btn-secondary" onclick="hideModal()">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="saveTeam()">Save Team Member</button>`;
            break;
    }

    modalBody.html(content);
    modalFooter.html(formActions);
    modal.modal('show');
}

function hideModal() {
    $('#modal-template').modal('hide');
}

function saveService() {
    const title = document.getElementById('service-title').value;
    const category = document.getElementById('service-category').value;
    const active = document.getElementById('service-active').checked;

    const services = JSON.parse(localStorage.getItem('delight_services')) || [];
    const newService = {
        id: Date.now(),
        title: title,
        category: category,
        active: active
    };
    services.push(newService);
    localStorage.setItem('delight_services', JSON.stringify(services));

    renderServices(services);
    goToSection('services');
    hideModal();
}

function saveProduct() {
    const title = document.getElementById('product-title').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;

    const products = JSON.parse(localStorage.getItem('delight_products')) || [];
    const newProduct = {
        id: Date.now(),
        title: title,
        price: price,
        description: description
    };
    products.push(newProduct);
    localStorage.setItem('delight_products', JSON.stringify(products));

    alert('Product added successfully!');
    hideModal();
}

function savePost() {
    const title = document.getElementById('post-title').value;
    const category = document.getElementById('post-category').value;
    const date = document.getElementById('post-date').value;
    const excerpt = document.getElementById('post-excerpt').value;

    const posts = JSON.parse(localStorage.getItem('delight_posts')) || [];
    const newPost = {
        id: Date.now(),
        title: title,
        category: category,
        date: date,
        excerpt: excerpt
    };
    posts.push(newPost);
    localStorage.setItem('delight_posts', JSON.stringify(posts));

    renderBlogPosts(posts);
    goToSection('posts');
    hideModal();
}

function saveGalleryItem() {
    const title = document.getElementById('gallery-title').value;
    const image = document.getElementById('gallery-image').value;

    const gallery = JSON.parse(localStorage.getItem('delight_gallery')) || [];
    const newItem = {
        id: Date.now(),
        title: title,
        image: image
    };
    gallery.push(newItem);
    localStorage.setItem('delight_gallery', JSON.stringify(gallery));

    alert('Gallery item added successfully!');
    hideModal();
}

function saveTestimonial() {
    const author = document.getElementById('testimonial-author').value;
    const role = document.getElementById('testimonial-role').value;
    const quote = document.getElementById('testimonial-quote').value;

    const testimonials = JSON.parse(localStorage.getItem('delight_testimonials')) || [];
    const newTestimonial = {
        id: Date.now(),
        author: author,
        role: role,
        quote: quote
    };
    testimonials.push(newTestimonial);
    localStorage.setItem('delight_testimonials', JSON.stringify(testimonials));

    renderTestimonials(testimonials);
    goToSection('testimonials');
    hideModal();
}

function saveTeam() {
    const name = document.getElementById('team-name').value;
    const role = document.getElementById('team-role').value;
    const image = document.getElementById('team-image').value;

    const team = JSON.parse(localStorage.getItem('delight_team')) || [];
    const newMember = {
        id: Date.now(),
        name: name,
        role: role,
        image: image
    };
    team.push(newMember);
    localStorage.setItem('delight_team', JSON.stringify(team));

    renderTeam(team);
    goToSection('team');
    hideModal();
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        const dashboard = document.getElementById('dashboard');
        const loginScreen = document.getElementById('login-screen');
        dashboard.classList.add('d-none');
        loginScreen.classList.remove('d-none');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}

// =====================================================
// INITIALIZATION - Runs on DOMContentLoaded
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    const loginScreen = document.getElementById('login-screen');
    const dashboard = document.getElementById('dashboard');
    const loginForm = document.getElementById('login-form');

    // Login form handler
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Demo credentials: admin / admin123
        if (username === 'admin' && password === 'admin123') {
            loginScreen.classList.add('d-none');
            dashboard.classList.remove('d-none');
            initSidebarResponsive();
            initLocalStorageData();
        } else {
            alert('Invalid credentials. Demo: username = admin, password = admin123');
        }
    });

    // Initialize sidebar responsive behavior
    function initSidebarResponsive() {
        const sidebar = document.querySelector('.sidebar');
        const body = document.body;

        // Close sidebar on mobile when clicking outside
        document.addEventListener('click', function (e) {
            const target = e.target;
            if (!target.closest('.sidebar') && !target.closest('.nav-toggler')) {
                if (sidebar.classList.contains('show')) {
                    sidebar.classList.remove('show');
                    body.classList.remove('sidebar-expanded');
                }
            }
        });
    }

    // Toggle sidebar on mobile
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    const toggleBtn = document.querySelector('.sidebar-toggler');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            sidebar.classList.toggle('show');
            if (sidebar.classList.contains('show')) {
                body.classList.add('sidebar-expanded');
            } else {
                body.classList.remove('sidebar-expanded');
            }
        });
    }

    // Initialize data from localStorage
    function initLocalStorageData() {
        // Check if services exist in localStorage, if not, initialize with sample data
        const storedServices = localStorage.getItem('delight_services');
        if (!storedServices) {
            initSampleData();
        } else {
            renderServices(JSON.parse(storedServices));
        }

        // Check for blog posts
        const storedPosts = localStorage.getItem('delight_posts');
        if (storedPosts) {
            renderBlogPosts(JSON.parse(storedPosts));
        }

        // Check for testimonials
        const storedTestimonials = localStorage.getItem('delight_testimonials');
        if (storedTestimonials) {
            renderTestimonials(JSON.parse(storedTestimonials));
        }

        // Check for team members
        const storedTeam = localStorage.getItem('delight_team');
        if (storedTeam) {
            renderTeam(JSON.parse(storedTeam));
        }
    }

    // Initialize sample data in localStorage
    function initSampleData() {
        const sampleServices = [
            { id: 1, title: 'Rabbit Farming Training', category: 'Farming', active: true },
            { id: 2, title: 'Breeding Rabbits', category: 'Breeding', active: true },
            { id: 3, title: 'Rabbit Semen', category: 'Genetics', active: true },
            { id: 4, title: 'Rabbit Meat', category: 'Meat', active: true },
            { id: 5, title: 'Rabbit Pellets', category: 'Feed', active: true },
            { id: 6, title: 'Hay & Forage', category: 'Feed', active: true },
            { id: 7, title: 'Farm Consultancy', category: 'Consultancy', active: true }
        ];

        const samplePosts = [
            { id: 1, title: "Beginner's Guide to Starting a Rabbit Farm in Rwanda", excerpt: 'Everything you need...', date: '15 Jan 2026', category: 'Training' },
            { id: 2, title: 'Best Feed and Forage for Healthy Rabbits', excerpt: 'A complete guide...', date: '28 Jan 2026', category: 'Nutrition' },
            { id: 3, title: 'Rabbit Breeding Basics: From Mating to Weaning', excerpt: 'Essential knowledge...', date: '10 Feb 2026', category: 'Breeding' }
        ];

        const sampleTestimonials = [
            { id: 1, author: 'Jean Baptiste N.', role: 'Commercial Rabbit Farmer', quote: '"Delight Rabbit Farm provided us with excellent purebred breeding stock."', rating: 5 },
            { id: 2, author: 'Marie Claire U.', role: 'New Rabbit Farmer', quote: '"The training course was comprehensive and practical."', rating: 5 },
            { id: 3, author: 'Chef Patrick K.', role: 'Restaurant Owner', quote: '"The rabbit meat is consistently high quality."', rating: 5 }
        ];

        const sampleTeam = [
            { id: 1, name: 'Dr. Aimable R.', role: 'Farm Manager', image: '../img/team-1.jpg' },
            { id: 2, name: 'Dr. Claudine M.', role: 'Veterinary Officer', image: '../img/team-2.jpg' },
            { id: 3, name: 'Mr. Emmanuel T.', role: 'Breeding Specialist', image: '../img/team-3.jpg' },
            { id: 4, name: 'Ms. Diane N.', role: 'Training Coordinator', image: '../img/team-4.jpg' }
        ];

        localStorage.setItem('delight_services', JSON.stringify(sampleServices));
        localStorage.setItem('delight_posts', JSON.stringify(samplePosts));
        localStorage.setItem('delight_testimonials', JSON.stringify(sampleTestimonials));
        localStorage.setItem('delight_team', JSON.stringify(sampleTeam));
    }

    // Service Cards
    function renderServices(services) {
        const servicesList = document.getElementById('services-list');
        if (!services || services.length === 0) {
            servicesList.innerHTML = '<p class="text-secondary small">No services found.</p>';
            return;
        }

        let html = '';
        services.forEach(function (service) {
            html += `
                <div class="card mb-3" style="background: var(--light-cream); color: var(--dark);">
                    <div class="card-body p-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="fw-bold">${service.title}</span>
                            <span class="text-secondary small">${service.category}</span>
                        </div>
                    </div>
                </div>`;
        });
        servicesList.innerHTML = html;
    }

    // Blog Posts
    function renderBlogPosts(posts) {
        const postsList = document.getElementById('blog-posts-list');
        if (!posts || posts.length === 0) {
            postsList.innerHTML = '<p class="text-secondary small">No blog posts found.</p>';
            return;
        }

        let html = '';
        posts.forEach(function (post) {
            html += `
                <div class="card mb-3" style="background: var(--light-cream); color: var(--dark);">
                    <div class="card-body p-3">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text text-secondary small">${post.excerpt}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${post.date}</small>
                        </div>
                    </div>
                </div>`;
        });
        postsList.innerHTML = html;
    }

    // Testimonials
    function renderTestimonials(testimonials) {
        const testimonialsList = document.getElementById('testimonials-list');
        if (!testimonials || testimonials.length === 0) {
            testimonialsList.innerHTML = '<p class="text-secondary small">No testimonials found.</p>';
            return;
        }

        let html = '';
        testimonials.forEach(function (t) {
            html += `
                <div class="card mb-3" style="background: var(--light-cream); color: var(--dark);">
                    <div class="card-body p-3">
                        <p class="mb-3">${t.quote}</p>
                        <h6 class="mb-1">${t.author}</h6>
                        <small class="text-muted">${t.role}</small>
                    </div>
                </div>`;
        });
        testimonialsList.innerHTML = html;
    }

    // Team Members
    function renderTeam(team) {
        const teamList = document.getElementById('team-list');
        if (!team || team.length === 0) {
            teamList.innerHTML = '<p class="text-secondary small">No team members found.</p>';
            return;
        }

        let html = '';
        team.forEach(function (member) {
            html += `
                <div class="card mb-3" style="background: var(--light-cream); color: var(--dark);">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${member.image}" class="img-fluid rounded-start h-100" alt="${member.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body p-3">
                                <h5 class="card-title">${member.name}</h5>
                                <span class="badge bg-primary">${member.role}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        teamList.innerHTML = html;
    }
});