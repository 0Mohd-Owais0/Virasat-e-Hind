
export const ArtHTML = `
   <!DOCTYPE html>
    <html>
    <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Learning Hub - Heritage India</title>

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <style>
    :root {
      /* --- your color variables (already added) --- */
      --color-primary: #B8860B;
      --color-primary-50: #FEF9E7;
      --color-primary-100: #FDF2D0;
      --color-primary-200: #FAE5A1;
      --color-primary-300: #F7D872;
      --color-primary-400: #E4C441;
      --color-primary-500: #B8860B;
      --color-primary-600: #9A7209;
      --color-primary-700: #7C5E07;
      --color-primary-800: #5E4A05;
      --color-primary-900: #403603;

      --color-secondary: #8B4513;
      --color-secondary-50: #F5F0EB;
      --color-secondary-100: #EBE1D7;
      --color-secondary-200: #D7C3AF;
      --color-secondary-300: #C3A587;
      --color-secondary-400: #AF875F;
      --color-secondary-500: #8B4513;
      --color-secondary-600: #763A10;
      --color-secondary-700: #612F0D;
      --color-secondary-800: #4C240A;
      --color-secondary-900: #371907;

      --color-accent: #CD853F;
      --color-accent-50: #FBF7F2;
      --color-accent-100: #F7EFE5;
      --color-accent-200: #EFDFCB;
      --color-accent-300: #E7CFB1;
      --color-accent-400: #DFBF97;
      --color-accent-500: #CD853F;
      --color-accent-600: #B07135;
      --color-accent-700: #935D2B;
      --color-accent-800: #764921;
      --color-accent-900: #593517;

      --color-background: #FDF5E6;
      --color-surface: #F5F5DC;

      --color-text-primary: #2F1B14;
      --color-text-secondary: #5D4E37;

      --color-success: #228B22;
      --color-success-50: #F0F8F0;
      --color-success-100: #E1F1E1;
      --color-success-200: #C3E3C3;
      --color-success-300: #A5D5A5;
      --color-success-400: #87C787;
      --color-success-500: #228B22;
      --color-success-600: #1E7A1E;
      --color-success-700: #1A691A;
      --color-success-800: #165816;
      --color-success-900: #124712;

      --color-warning: #DAA520;
      --color-warning-50: #FDF9F0;
      --color-warning-100: #FBF3E1;
      --color-warning-200: #F7E7C3;
      --color-warning-300: #F3DBA5;
      --color-warning-400: #EFCF87;
      --color-warning-500: #DAA520;
      --color-warning-600: #BA8E1C;
      --color-warning-700: #9A7718;
      --color-warning-800: #7A6014;
      --color-warning-900: #5A4910;

      --color-error: #A0522D;
      --color-error-50: #F7F2EF;
      --color-error-100: #EFE5DF;
      --color-error-200: #DFCBBF;
      --color-error-300: #CFB19F;
      --color-error-400: #BF977F;
      --color-error-500: #A0522D;
      --color-error-600: #884626;
      --color-error-700: #703A1F;
      --color-error-800: #582E18;
      --color-error-900: #402211;

      --shadow-cultural: 0 4px 12px rgba(139, 69, 19, 0.1);
      --shadow-cultural-hover: 0 6px 16px rgba(139, 69, 19, 0.15);
    }

    /* --- Custom Classes --- */
   
    /* --- Custom Classes --- */
    .card-cultural {
      border: 1px solid var(--color-accent-200);
      background-color: var(--color-background);
      box-shadow: var(--shadow-cultural);
      border-radius: 0.5rem;
      padding: 1rem;
    }

    .btn-primary {
      background-color: var(--color-primary);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      transition: all 0.2s ease-in-out;
    }
    .btn-primary:hover {
      background-color: var(--color-primary-700);
    }

.gallery-item {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(139, 69, 19, 0.2);
        }
        .artisan-card {
            background: linear-gradient(135deg, rgba(184, 134, 11, 0.1), rgba(139, 69, 19, 0.1));
        }
        .technique-step {
            opacity: 0;
            transform: translateX(20px);
            transition: all 0.5s ease;
        }
        .technique-step.active {
            opacity: 1;
            transform: translateX(0);
        }
        .filter-tag {
            transition: all 0.3s ease;
        }
        .filter-tag.active {
            background-color: var(--color-primary);
            color: white;
        }
        .zoom-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            display: none;
            align-items: center;
            justify-content: center;
        }
        .zoom-image {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        }
        .craft-animation {
            animation: gentle-float 4s ease-in-out infinite;
        }
        @keyframes gentle-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
        }
        .heritage-pattern {
            background-image: 
                radial-gradient(circle at 25% 25%, rgba(184, 134, 11, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.1) 0%, transparent 50%);
        }

    .btn-secondary {
      background-color: var(--color-secondary);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      transition: all 0.2s ease-in-out;
    }
    .btn-secondary:hover {
      background-color: var(--color-secondary-700);
    }
      .shadow-cultural {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* replace with your --shadow-cultural if you want CSS vars */
  }

  .shadow-cultural-hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* replace with --shadow-cultural-hover if needed */
  }

  /* Transitions */
  .transition-cultural {
    transition: all 300ms ease-in-out;
  }


  .btn-accent {
    background-color: #f59e0b; /* Tailwind accent */
    color: white;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    transition: all 300ms ease-in-out;
  }
  .btn-accent:hover {
    background-color: #d97706; /* accent-600 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  /* Cards */
  .card-cultural {
    background-color: #f9fafb; /* Tailwind surface */
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 300ms ease-in-out;
  }
  .card-cultural:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  /* Inputs */
  .input-cultural {
    border: 1px solid #f59e0b; /* Tailwind accent */
    background-color: #f9fafb; /* surface */
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: all 300ms ease-in-out;
    outline: none;
  }
  .input-cultural:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #1d4ed8; /* focus:ring-primary */
  }
  .spice-animation {
            animation: gentle-float 3s ease-in-out infinite;
        }
        @keyframes gentle-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
        }
        .recipe-card {
            transition: all 0.3s ease;
        }
        .recipe-card:hover {
            transform: translateY(-5px);
        }
        .ingredient-hover {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .ingredient-hover:hover {
            background-color: rgba(184, 134, 11, 0.1);
            border-radius: 4px;
            padding: 2px 4px;
        }
        .cooking-demo {
            position: relative;
            overflow: hidden;
        }
        .cooking-demo::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(184, 134, 11, 0.1) 0%, transparent 100%);
            z-index: 1;
        }
        .region-marker {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .region-marker:hover {
            transform: scale(1.1);
        }
        .difficulty-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }
        .spice-trail {
            background: linear-gradient(135deg, #CD853F 0%, #B8860B 50%, #8B4513 100%);
            background-size: 200% 200%;
            animation: spice-gradient 4s ease infinite;
        }
        @keyframes spice-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
  </style>

  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: "var(--color-primary)",
            "primary-50": "var(--color-primary-50)",
            "primary-100": "var(--color-primary-100)",
            "primary-200": "var(--color-primary-200)",
            "primary-300": "var(--color-primary-300)",
            "primary-400": "var(--color-primary-400)",
            "primary-500": "var(--color-primary-500)",
            "primary-600": "var(--color-primary-600)",
            "primary-700": "var(--color-primary-700)",
            "primary-800": "var(--color-primary-800)",
            "primary-900": "var(--color-primary-900)",

            secondary: "var(--color-secondary)",
            "secondary-50": "var(--color-secondary-50)",
            "secondary-100": "var(--color-secondary-100)",
            "secondary-200": "var(--color-secondary-200)",
            "secondary-300": "var(--color-secondary-300)",
            "secondary-400": "var(--color-secondary-400)",
            "secondary-500": "var(--color-secondary-500)",
            "secondary-600": "var(--color-secondary-600)",
            "secondary-700": "var(--color-secondary-700)",
            "secondary-800": "var(--color-secondary-800)",
            "secondary-900": "var(--color-secondary-900)",

            accent: "var(--color-accent)",
            "accent-50": "var(--color-accent-50)",
            "accent-100": "var(--color-accent-100)",
            "accent-200": "var(--color-accent-200)",
            "accent-300": "var(--color-accent-300)",
            "accent-400": "var(--color-accent-400)",
            "accent-500": "var(--color-accent-500)",
            "accent-600": "var(--color-accent-600)",
            "accent-700": "var(--color-accent-700)",
            "accent-800": "var(--color-accent-800)",
            "accent-900": "var(--color-accent-900)",

            background: "var(--color-background)",
            surface: "var(--color-surface)",

            "text-primary": "var(--color-text-primary)",
            "text-secondary": "var(--color-text-secondary)",

            success: "var(--color-success)",
            "success-50": "var(--color-success-50)",
            "success-100": "var(--color-success-100)",
            "success-200": "var(--color-success-200)",
            "success-300": "var(--color-success-300)",
            "success-400": "var(--color-success-400)",
            "success-500": "var(--color-success-500)",
            "success-600": "var(--color-success-600)",
            "success-700": "var(--color-success-700)",
            "success-800": "var(--color-success-800)",
            "success-900": "var(--color-success-900)",

            warning: "var(--color-warning)",
            "warning-50": "var(--color-warning-50)",
            "warning-100": "var(--color-warning-100)",
            "warning-200": "var(--color-warning-200)",
            "warning-300": "var(--color-warning-300)",
            "warning-400": "var(--color-warning-400)",
            "warning-500": "var(--color-warning-500)",
            "warning-600": "var(--color-warning-600)",
            "warning-700": "var(--color-warning-700)",
            "warning-800": "var(--color-warning-800)",
            "warning-900": "var(--color-warning-900)",

            error: "var(--color-error)",
            "error-50": "var(--color-error-50)",
            "error-100": "var(--color-error-100)",
            "error-200": "var(--color-error-200)",
            "error-300": "var(--color-error-300)",
            "error-400": "var(--color-error-400)",
            "error-500": "var(--color-error-500)",
            "error-600": "var(--color-error-600)",
            "error-700": "var(--color-error-700)",
            "error-800": "var(--color-error-800)",
            "error-900": "var(--color-error-900)",
          }
        }
      }
    }
  </script>

  <script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fheritagei5090back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.8"></script>
   </head>
<body class="bg-background text-text-primary">


    <!-- Hero Section -->
    <section class="relative py-20 heritage-pattern overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="craft-animation">
                <h1 class="text-5xl md:text-7xl font-headlines font-bold text-primary mb-6">Living Heritage Showcase</h1>
                <p class="text-xl md:text-2xl font-body text-text-secondary max-w-4xl mx-auto mb-8">Discover the masterful artistry and timeless traditions that have shaped India's cultural identity for millennia</p>
            </div>
            
            <!-- Featured Craft Highlight -->
            <div class="mt-12 max-w-4xl mx-auto">
                <div class="card-cultural p-8 text-left">
                    <div class="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 class="text-3xl font-headlines font-semibold text-text-primary mb-4">Craft of the Month</h2>
                            <h3 class="text-2xl font-headlines text-primary mb-4">Madhubani Painting</h3>
                            <p class="text-text-secondary mb-6">Originating from the Mithila region of Bihar, these vibrant paintings tell stories of love, devotion, and nature through intricate geometric patterns and bold colors.</p>
                            <div class="flex items-center space-x-4">
                                <button class="btn-primary">Watch Technique</button>
                                <button class="btn-secondary">Meet Artisan</button>
                            </div>
                        </div>
                        <div class="relative overflow-hidden rounded-lg">
                            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop" alt="Madhubani painting demonstration" class="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                            <div class="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                Bihar Heritage
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Filter Navigation -->
    <section class="py-8 bg-surface sticky top-16 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-wrap justify-center gap-4">
                <button class="filter-tag active px-6 py-2 rounded-full bg-accent-100 text-text-primary font-medium hover:bg-primary hover:text-white transition-cultural" data-filter="all">
                    All Crafts
                </button>
                <button class="filter-tag px-6 py-2 rounded-full bg-accent-100 text-text-primary font-medium hover:bg-primary hover:text-white transition-cultural" data-filter="textiles">
                    Textiles
                </button>
                <button class="filter-tag px-6 py-2 rounded-full bg-accent-100 text-text-primary font-medium hover:bg-primary hover:text-white transition-cultural" data-filter="paintings">
                    Paintings
                </button>
                <button class="filter-tag px-6 py-2 rounded-full bg-accent-100 text-text-primary font-medium hover:bg-primary hover:text-white transition-cultural" data-filter="ceramics">
                    Ceramics
                </button>
                <button class="filter-tag px-6 py-2 rounded-full bg-accent-100 text-text-primary font-medium hover:bg-primary hover:text-white transition-cultural" data-filter="metalwork">
                    Metalwork
                </button>
                <button class="filter-tag px-6 py-2 rounded-full bg-accent-100 text-text-primary font-medium hover:bg-primary hover:text-white transition-cultural" data-filter="woodwork">
                    Woodwork
                </button>
                <button class="filter-tag px-6 py-2 rounded-full bg-accent-100 text-text-primary font-medium hover:bg-primary hover:text-white transition-cultural" data-filter="endangered">
                    Endangered Arts
                </button>
            </div>
        </div>
    </section>

    <!-- Main Gallery Grid -->
    <section class="py-16 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid">
                
                <!-- Pashmina Weaving -->
                <div class="gallery-item card-cultural overflow-hidden" data-category="textiles">
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Pashmina weaving process" class="w-full h-64 object-cover cursor-pointer zoom-trigger" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-4 left-4 bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
                            Kashmir
                        </div>
                        <div class="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Pashmina Weaving</h3>
                        <p class="text-text-secondary text-sm mb-4">The ancient art of weaving the finest cashmere from Changthangi goats, creating luxurious shawls prized worldwide.</p>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xs text-text-secondary bg-accent-100 px-2 py-1 rounded">Heritage Craft</span>
                            <span class="text-xs text-text-secondary">Kashmir Valley</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="btn-primary text-sm px-4 py-2">Watch Process</button>
                            <button class="btn-secondary text-sm px-4 py-2">Meet Artisan</button>
                        </div>
                    </div>
                </div>

                <!-- Blue Pottery -->
                <div class="gallery-item card-cultural overflow-hidden" data-category="ceramics">
                    <div class="relative">
                        <img src="https://images.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg" alt="Blue pottery crafting" class="w-full h-64 object-cover cursor-pointer zoom-trigger" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-4 left-4 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                            Rajasthan
                        </div>
                        <div class="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Blue Pottery</h3>
                        <p class="text-text-secondary text-sm mb-4">Jaipur's distinctive ceramic art featuring cobalt blue dyes and intricate floral patterns on white backgrounds.</p>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xs text-text-secondary bg-accent-100 px-2 py-1 rounded">Traditional Craft</span>
                            <span class="text-xs text-text-secondary">Jaipur</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="btn-primary text-sm px-4 py-2">Learn Technique</button>
                            <button class="btn-secondary text-sm px-4 py-2">Shop Authentic</button>
                        </div>
                    </div>
                </div>

                <!-- Warli Painting -->
                <div class="gallery-item card-cultural overflow-hidden" data-category="paintings">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop" alt="Warli painting creation" class="w-full h-64 object-cover cursor-pointer zoom-trigger" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-4 left-4 bg-accent text-white px-2 py-1 rounded text-xs font-medium">
                            Maharashtra
                        </div>
                        <div class="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Warli Painting</h3>
                        <p class="text-text-secondary text-sm mb-4">Ancient tribal art using simple geometric shapes to depict daily life, nature, and spiritual beliefs of the Warli people.</p>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xs text-text-secondary bg-accent-100 px-2 py-1 rounded">Tribal Art</span>
                            <span class="text-xs text-text-secondary">Thane District</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="btn-primary text-sm px-4 py-2">Explore Symbols</button>
                            <button class="btn-secondary text-sm px-4 py-2">Cultural Story</button>
                        </div>
                    </div>
                </div>

                <!-- Bidriware -->
                <div class="gallery-item card-cultural overflow-hidden" data-category="metalwork">
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Bidriware metalwork" class="w-full h-64 object-cover cursor-pointer zoom-trigger" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-4 left-4 bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
                            Karnataka
                        </div>
                        <div class="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Bidriware</h3>
                        <p class="text-text-secondary text-sm mb-4">Exquisite metalwork from Bidar featuring intricate silver and gold inlay work on blackened zinc and copper alloy.</p>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xs text-text-secondary bg-accent-100 px-2 py-1 rounded">Metal Craft</span>
                            <span class="text-xs text-text-secondary">Bidar</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="btn-primary text-sm px-4 py-2">Inlay Process</button>
                            <button class="btn-secondary text-sm px-4 py-2">Master Artisan</button>
                        </div>
                    </div>
                </div>

                <!-- Channapatna Toys -->
                <div class="gallery-item card-cultural overflow-hidden" data-category="woodwork">
                    <div class="relative">
                        <img src="https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="Channapatna wooden toys" class="w-full h-64 object-cover cursor-pointer zoom-trigger" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-4 left-4 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                            Karnataka
                        </div>
                        <div class="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Channapatna Toys</h3>
                        <p class="text-text-secondary text-sm mb-4">Colorful wooden toys and dolls crafted using traditional lacquer work techniques, known for their smooth finish and vibrant colors.</p>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xs text-text-secondary bg-accent-100 px-2 py-1 rounded">Wood Craft</span>
                            <span class="text-xs text-text-secondary">Channapatna</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="btn-primary text-sm px-4 py-2">Lacquer Art</button>
                            <button class="btn-secondary text-sm px-4 py-2">Toy Making</button>
                        </div>
                    </div>
                </div>

                <!-- Pattachitra -->
                <div class="gallery-item card-cultural overflow-hidden" data-category="paintings endangered">
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Pattachitra painting" class="w-full h-64 object-cover cursor-pointer zoom-trigger" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-4 left-4 bg-error text-white px-2 py-1 rounded text-xs font-medium">
                            Endangered
                        </div>
                        <div class="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Pattachitra</h3>
                        <p class="text-text-secondary text-sm mb-4">Ancient scroll paintings from Odisha depicting mythological narratives with natural pigments on cloth or palm leaves.</p>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-xs text-white bg-error px-2 py-1 rounded">Needs Support</span>
                            <span class="text-xs text-text-secondary">Odisha</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="btn-primary text-sm px-4 py-2">Support Craft</button>
                            <button class="btn-secondary text-sm px-4 py-2">Learn More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Featured Artisan Profiles -->
    <section class="py-16 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Master Artisans</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Meet the guardians of tradition who keep India's artistic heritage alive through their dedication and skill</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Artisan 1 -->
                <div class="artisan-card card-cultural p-6 text-center">
                    <div class="relative mb-6">
                        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Master weaver Kamala Devi" class="w-24 h-24 rounded-full mx-auto object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs">
                            Master Weaver
                        </div>
                    </div>
                    <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Kamala Devi</h3>
                    <p class="text-text-secondary text-sm mb-4">40 years of preserving Pashmina weaving traditions in Kashmir. Her intricate patterns tell stories of mountain life and spiritual devotion.</p>
                    <div class="flex justify-center space-x-2 mb-4">
                        <span class="text-xs bg-accent-100 text-text-secondary px-2 py-1 rounded">Pashmina</span>
                        <span class="text-xs bg-accent-100 text-text-secondary px-2 py-1 rounded">Kashmir</span>
                    </div>
                    <button class="btn-primary text-sm px-4 py-2">Watch Interview</button>
                </div>
                
                <!-- Artisan 2 -->
                <div class="artisan-card card-cultural p-6 text-center">
                    <div class="relative mb-6">
                        <img src="https://images.pixabay.com/photo/2017/08/06/12/52/classical-dance-2592655_1280.jpg" alt="Potter Ravi Kumar" class="w-24 h-24 rounded-full mx-auto object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-3 py-1 rounded-full text-xs">
                            Master Potter
                        </div>
                    </div>
                    <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Ravi Kumar</h3>
                    <p class="text-text-secondary text-sm mb-4">Third-generation blue pottery artisan from Jaipur, innovating traditional techniques while preserving authentic methods.</p>
                    <div class="flex justify-center space-x-2 mb-4">
                        <span class="text-xs bg-accent-100 text-text-secondary px-2 py-1 rounded">Blue Pottery</span>
                        <span class="text-xs bg-accent-100 text-text-secondary px-2 py-1 rounded">Rajasthan</span>
                    </div>
                    <button class="btn-primary text-sm px-4 py-2">Studio Visit</button>
                </div>
                
                <!-- Artisan 3 -->
                <div class="artisan-card card-cultural p-6 text-center">
                    <div class="relative mb-6">
                        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop" alt="Painter Meera Joshi" class="w-24 h-24 rounded-full mx-auto object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs">
                            Master Painter
                        </div>
                    </div>
                    <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Meera Joshi</h3>
                    <p class="text-text-secondary text-sm mb-4">Renowned Madhubani artist teaching young women to continue this sacred tradition while supporting their economic independence.</p>
                    <div class="flex justify-center space-x-2 mb-4">
                        <span class="text-xs bg-accent-100 text-text-secondary px-2 py-1 rounded">Madhubani</span>
                        <span class="text-xs bg-accent-100 text-text-secondary px-2 py-1 rounded">Bihar</span>
                    </div>
                    <button class="btn-primary text-sm px-4 py-2">Art Workshop</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Interactive Technique Breakdown -->
    <section class="py-16 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Craft Techniques Unveiled</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Discover the intricate processes behind India's most celebrated crafts</p>
            </div>
            
            <div class="card-cultural p-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 class="text-2xl font-headlines font-semibold text-text-primary mb-6">Madhubani Painting Process</h3>
                        <div class="space-y-4" id="technique-steps">
                            <div class="technique-step active flex items-start space-x-4 p-4 bg-accent-50 rounded-lg">
                                <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                                <div>
                                    <h4 class="font-headlines font-semibold text-text-primary mb-2">Canvas Preparation</h4>
                                    <p class="text-text-secondary text-sm">Handmade paper or cloth is prepared with a coating of cow dung and mud for the perfect texture.</p>
                                </div>
                            </div>
                            
                            <div class="technique-step flex items-start space-x-4 p-4 bg-accent-50 rounded-lg">
                                <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                                <div>
                                    <h4 class="font-headlines font-semibold text-text-primary mb-2">Natural Pigments</h4>
                                    <p class="text-text-secondary text-sm">Colors are extracted from turmeric, indigo, ochre, and other natural sources mixed with tree gum.</p>
                                </div>
                            </div>
                            
                            <div class="technique-step flex items-start space-x-4 p-4 bg-accent-50 rounded-lg">
                                <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                                <div>
                                    <h4 class="font-headlines font-semibold text-text-primary mb-2">Sacred Geometry</h4>
                                    <p class="text-text-secondary text-sm">Traditional motifs and patterns are drawn using bamboo sticks and fingers, following ancient geometric principles.</p>
                                </div>
                            </div>
                            
                            <div class="technique-step flex items-start space-x-4 p-4 bg-accent-50 rounded-lg">
                                <div class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                                <div>
                                    <h4 class="font-headlines font-semibold text-text-primary mb-2">Storytelling Through Art</h4>
                                    <p class="text-text-secondary text-sm">Each painting narrates mythological stories, celebrating festivals, or depicting daily life with symbolic meaning.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-8 flex space-x-4">
                            <button class="btn-primary" id="prev-step">Previous Step</button>
                            <button class="btn-secondary" id="next-step">Next Step</button>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop" alt="Madhubani painting process" class="w-full h-96 object-cover rounded-lg" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                            <button class="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Conservation Efforts -->
    <section class="py-16 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Preserving Our Heritage</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Supporting artisans and endangered crafts for future generations</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Conservation Initiative 1 -->
                <div class="card-cultural p-8">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-error rounded-full flex items-center justify-center mr-4">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-headlines font-semibold text-text-primary">Endangered Crafts Initiative</h3>
                            <p class="text-text-secondary text-sm">Supporting 15 at-risk traditional arts</p>
                        </div>
                    </div>
                    <p class="text-text-secondary mb-6">Our conservation program provides direct support to artisans practicing endangered crafts, ensuring these precious traditions survive for future generations.</p>
                    <div class="mb-6">
                        <div class="flex justify-between text-sm text-text-secondary mb-2">
                            <span>Progress: 8 of 15 crafts supported</span>
                            <span>53%</span>
                        </div>
                        <div class="w-full bg-accent-200 rounded-full h-2">
                            <div class="bg-primary h-2 rounded-full" style="width: 53%"></div>
                        </div>
                    </div>
                    <button class="btn-primary w-full">Support This Initiative</button>
                </div>
                
                <!-- Conservation Initiative 2 -->
                <div class="card-cultural p-8">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-success rounded-full flex items-center justify-center mr-4">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-headlines font-semibold text-text-primary">Artisan Education Program</h3>
                            <p class="text-text-secondary text-sm">Training 200+ young artisans</p>
                        </div>
                    </div>
                    <p class="text-text-secondary mb-6">Connecting master artisans with young apprentices to ensure traditional knowledge and techniques are passed down through generations.</p>
                    <div class="mb-6">
                        <div class="flex justify-between text-sm text-text-secondary mb-2">
                            <span>Students trained: 156 of 200</span>
                            <span>78%</span>
                        </div>
                        <div class="w-full bg-accent-200 rounded-full h-2">
                            <div class="bg-success h-2 rounded-full" style="width: 78%"></div>
                        </div>
                    </div>
                    <button class="btn-secondary w-full">Join as Mentor</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Authentic Marketplace -->
    <section class="py-16 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Authentic Artisan Marketplace</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Support traditional craftspeople by purchasing authentic handmade treasures</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Product 1 -->
                <div class="card-cultural overflow-hidden group">
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Handwoven Pashmina shawl" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-2 right-2 bg-success text-white px-2 py-1 rounded text-xs">
                            Authentic
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-headlines font-semibold text-text-primary mb-2">Kashmiri Pashmina Shawl</h3>
                        <p class="text-text-secondary text-sm mb-3">Hand-woven by Kamala Devi</p>
                        <div class="flex items-center justify-between">
                            <span class="text-lg font-bold text-primary">₹15,000</span>
                            <button class="btn-primary text-sm px-3 py-1">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <!-- Product 2 -->
                <div class="card-cultural overflow-hidden group">
                    <div class="relative">
                        <img src="https://images.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg" alt="Blue pottery vase" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-2 right-2 bg-success text-white px-2 py-1 rounded text-xs">
                            Authentic
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-headlines font-semibold text-text-primary mb-2">Blue Pottery Vase</h3>
                        <p class="text-text-secondary text-sm mb-3">Crafted by Ravi Kumar</p>
                        <div class="flex items-center justify-between">
                            <span class="text-lg font-bold text-primary">₹3,500</span>
                            <button class="btn-primary text-sm px-3 py-1">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <!-- Product 3 -->
                <div class="card-cultural overflow-hidden group">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop" alt="Madhubani painting" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-2 right-2 bg-success text-white px-2 py-1 rounded text-xs">
                            Authentic
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-headlines font-semibold text-text-primary mb-2">Madhubani Painting</h3>
                        <p class="text-text-secondary text-sm mb-3">Original by Meera Joshi</p>
                        <div class="flex items-center justify-between">
                            <span class="text-lg font-bold text-primary">₹8,000</span>
                            <button class="btn-primary text-sm px-3 py-1">Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <!-- Product 4 -->
                <div class="card-cultural overflow-hidden group">
                    <div class="relative">
                        <img src="https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="Channapatna wooden toys" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-2 right-2 bg-success text-white px-2 py-1 rounded text-xs">
                            Authentic
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-headlines font-semibold text-text-primary mb-2">Wooden Toy Set</h3>
                        <p class="text-text-secondary text-sm mb-3">Channapatna craft</p>
                        <div class="flex items-center justify-between">
                            <span class="text-lg font-bold text-primary">₹1,200</span>
                            <button class="btn-primary text-sm px-3 py-1">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <button class="btn-accent">Explore Full Marketplace</button>
            </div>
        </div>
    </section>

    <!-- Zoom Overlay -->
    <div class="zoom-overlay" id="zoom-overlay">
        <img class="zoom-image" id="zoom-image" src alt="Zoomed craft image" />
        <button class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300" id="close-zoom">&times;</button>
    </div>

    <!-- Footer -->
        <script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Filter functionality
        const filterTags = document.querySelectorAll('.filter-tag');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterTags.forEach(tag => {
            tag.addEventListener('click', function() {
                // Remove active class from all tags
                filterTags.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tag
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                
                galleryItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    } else {
                        const categories = item.dataset.category.split(' ');
                        if (categories.includes(filter)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });

        // Zoom functionality
        const zoomTriggers = document.querySelectorAll('.zoom-trigger');
        const zoomOverlay = document.getElementById('zoom-overlay');
        const zoomImage = document.getElementById('zoom-image');
        const closeZoom = document.getElementById('close-zoom');

        zoomTriggers.forEach(trigger => {
            trigger.addEventListener('click', function() {
                zoomImage.src = this.src;
                zoomOverlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        closeZoom.addEventListener('click', function() {
            zoomOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        zoomOverlay.addEventListener('click', function(e) {
            if (e.target === zoomOverlay) {
                zoomOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Technique steps navigation
        let currentStep = 0;
        const steps = document.querySelectorAll('.technique-step');
        const prevBtn = document.getElementById('prev-step');
        const nextBtn = document.getElementById('next-step');

        function showStep(stepIndex) {
            steps.forEach((step, index) => {
                if (index === stepIndex) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
            
            prevBtn.disabled = stepIndex === 0;
            nextBtn.disabled = stepIndex === steps.length - 1;
        }

        prevBtn.addEventListener('click', function() {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });

        nextBtn.addEventListener('click', function() {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });

        // Auto-advance technique steps
        setInterval(() => {
            currentStep = (currentStep + 1) % steps.length;
            showStep(currentStep);
        }, 4000);

        // Initialize first step
        showStep(0);
    </script>
</body>
   </html>
  `;
