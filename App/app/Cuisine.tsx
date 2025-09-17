















export const cuisineHTML = `
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
    <!-- Navigation Header -->
    
    <!-- Hero Section with Spice Background -->
    <section class="relative py-20 overflow-hidden spice-trail">
        <div class="absolute inset-0 opacity-20">
            <div class="absolute top-10 left-10 spice-animation">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L13 8h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/>
                </svg>
            </div>
            <div class="absolute top-20 right-20 spice-animation" style="animation-delay: 1s;">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="8"/>
                </svg>
            </div>
            <div class="absolute bottom-20 left-1/4 spice-animation" style="animation-delay: 2s;">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L13 8h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/>
                </svg>
            </div>
        </div>
        
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-5xl md:text-7xl font-headlines font-bold text-white mb-6">Culinary Heritage Explorer</h1>
            <p class="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto">Journey through India's diverse culinary landscape where every dish tells a story of culture, tradition, and the ancient spice routes that shaped our flavors</p>
            
            <!-- Quick Filter Buttons -->
            <div class="flex flex-wrap justify-center gap-4 mb-8">
                <button class="filter-btn bg-white bg-opacity-20 text-white px-6 py-3 rounded-full hover:bg-opacity-30 transition-all" data-filter="all">All Regions</button>
                <button class="filter-btn bg-white bg-opacity-20 text-white px-6 py-3 rounded-full hover:bg-opacity-30 transition-all" data-filter="vegetarian">Vegetarian</button>
                <button class="filter-btn bg-white bg-opacity-20 text-white px-6 py-3 rounded-full hover:bg-opacity-30 transition-all" data-filter="festival">Festival Foods</button>
                <button class="filter-btn bg-white bg-opacity-20 text-white px-6 py-3 rounded-full hover:bg-opacity-30 transition-all" data-filter="spicy">Spicy Delights</button>
            </div>
        </div>
    </section>

    <!-- Interactive Culinary Map -->
    <section class="py-16 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">India's Culinary Regions</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Click on any region to explore its signature dishes, cooking techniques, and cultural food traditions</p>
            </div>
            
            <div class="relative max-w-5xl mx-auto">
                <!-- Interactive Culinary Map -->
                <svg viewBox="0 0 800 600" class="w-full h-auto bg-primary-50 rounded-lg">
                    <!-- Background -->
                    <rect width="800" height="600" fill="#FEF9E7"/>
                    
                    <!-- Kashmir - Wazwan -->
                    <path class="region-marker fill-primary hover:fill-primary-600" d="M300 80 L380 70 L400 110 L370 140 L320 130 L280 100 Z" data-region="kashmir"/>
                    <text x="340" y="105" class="text-sm font-body fill-white text-center">Kashmir</text>
                    <text x="340" y="120" class="text-xs font-body fill-white text-center">Wazwan</text>
                    
                    <!-- Punjab - Tandoor -->
                    <path class="region-marker fill-secondary hover:fill-secondary-600" d="M250 120 L320 110 L340 150 L310 180 L260 170 L230 140 Z" data-region="punjab"/>
                    <text x="285" y="145" class="text-sm font-body fill-white text-center">Punjab</text>
                    <text x="285" y="160" class="text-xs font-body fill-white text-center">Tandoor</text>
                    
                    <!-- Rajasthan - Dal Baati -->
                    <path class="region-marker fill-accent hover:fill-accent-600" d="M150 200 L250 180 L280 220 L260 280 L180 300 L120 250 Z" data-region="rajasthan"/>
                    <text x="200" y="240" class="text-sm font-body fill-white text-center">Rajasthan</text>
                    <text x="200" y="255" class="text-xs font-body fill-white text-center">Dal Baati</text>
                    
                    <!-- Gujarat - Thali -->
                    <path class="region-marker fill-primary hover:fill-primary-600" d="M120 250 L180 240 L200 290 L160 320 L100 310 L80 270 Z" data-region="gujarat"/>
                    <text x="140" y="280" class="text-sm font-body fill-white text-center">Gujarat</text>
                    <text x="140" y="295" class="text-xs font-body fill-white text-center">Thali</text>
                    
                    <!-- Maharashtra - Street Food -->
                    <path class="region-marker fill-secondary hover:fill-secondary-600" d="M200 320 L280 300 L320 340 L290 380 L220 390 L180 350 Z" data-region="maharashtra"/>
                    <text x="250" y="345" class="text-sm font-body fill-white text-center">Maharashtra</text>
                    <text x="250" y="360" class="text-xs font-body fill-white text-center">Street Food</text>
                    
                    <!-- West Bengal - Sweets -->
                    <path class="region-marker fill-accent hover:fill-accent-600" d="M480 280 L540 270 L560 320 L520 340 L470 330 Z" data-region="bengal"/>
                    <text x="515" y="305" class="text-sm font-body fill-white text-center">West Bengal</text>
                    <text x="515" y="320" class="text-xs font-body fill-white text-center">Sweets</text>
                    
                    <!-- Kerala - Coconut Curry -->
                    <path class="region-marker fill-primary hover:fill-primary-600" d="M200 450 L230 420 L250 480 L220 520 L190 500 Z" data-region="kerala"/>
                    <text x="220" y="470" class="text-sm font-body fill-white text-center">Kerala</text>
                    <text x="220" y="485" class="text-xs font-body fill-white text-center">Coconut</text>
                    
                    <!-- Tamil Nadu - Chettinad -->
                    <path class="region-marker fill-secondary hover:fill-secondary-600" d="M250 480 L320 460 L340 520 L280 540 L250 520 Z" data-region="tamilnadu"/>
                    <text x="295" y="500" class="text-sm font-body fill-white text-center">Tamil Nadu</text>
                    <text x="295" y="515" class="text-xs font-body fill-white text-center">Chettinad</text>
                    
                    <!-- Uttar Pradesh - Mughlai -->
                    <path class="region-marker fill-accent hover:fill-accent-600" d="M320 180 L420 170 L450 220 L420 260 L350 270 L320 230 Z" data-region="uttarpradesh"/>
                    <text x="385" y="215" class="text-sm font-body fill-white text-center">Uttar Pradesh</text>
                    <text x="385" y="230" class="text-xs font-body fill-white text-center">Mughlai</text>
                </svg>
                
                <!-- Region Info Panel -->
                <div id="region-info" class="mt-8 card-cultural p-6 hidden">
                    <div id="region-content">
                        <!-- Dynamic content will be inserted here -->
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Recipes Section -->
    <section class="py-16 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Signature Dishes</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Discover authentic recipes passed down through generations, complete with cultural stories and cooking techniques</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Recipe Card 1 - Biryani -->
                <div class="recipe-card card-cultural overflow-hidden">
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Hyderabadi Biryani" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-4 left-4 flex gap-2">
                            <span class="bg-primary text-white px-2 py-1 rounded text-xs font-medium">Hyderabad</span>
                            <span class="bg-secondary text-white px-2 py-1 rounded text-xs font-medium">Non-Veg</span>
                        </div>
                        <div class="absolute top-4 right-4 difficulty-badge bg-white bg-opacity-90 px-2 py-1 rounded text-xs">
                            <span class="text-warning">★★★</span>
                            <span class="text-text-secondary">Advanced</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Hyderabadi Biryani</h3>
                        <p class="text-text-secondary text-sm mb-4">A royal dish from the Nizams' kitchen, where fragrant basmati rice meets tender mutton in perfect harmony, slow-cooked with saffron and aromatic spices.</p>
                        
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center text-sm text-text-secondary">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                                </svg>
                                2.5 hours
                            </div>
                            <div class="flex items-center text-sm text-text-secondary">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                6 servings
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-medium text-text-primary mb-2">Key Ingredients:</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="ingredient-hover text-xs bg-primary-50 text-primary px-2 py-1 rounded" data-ingredient="saffron">Saffron</span>
                                <span class="ingredient-hover text-xs bg-primary-50 text-primary px-2 py-1 rounded" data-ingredient="basmati">Basmati Rice</span>
                                <span class="ingredient-hover text-xs bg-primary-50 text-primary px-2 py-1 rounded" data-ingredient="mutton">Mutton</span>
                                <span class="ingredient-hover text-xs bg-primary-50 text-primary px-2 py-1 rounded" data-ingredient="yogurt">Yogurt</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <button class="btn-primary text-sm px-4 py-2">View Recipe</button>
                            <div class="flex items-center gap-2">
                                <button class="text-text-secondary hover:text-primary">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                </button>
                                <button class="text-text-secondary hover:text-primary">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Recipe Card 2 - Masala Dosa -->
                <div class="recipe-card card-cultural overflow-hidden">
                    <div class="relative">
                        <img src="https://images.pixabay.com/photo/2017/06/16/11/38/dosa-2408925_1280.jpg" alt="Masala Dosa" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-4 left-4 flex gap-2">
                            <span class="bg-secondary text-white px-2 py-1 rounded text-xs font-medium">South India</span>
                            <span class="bg-success text-white px-2 py-1 rounded text-xs font-medium">Vegetarian</span>
                        </div>
                        <div class="absolute top-4 right-4 difficulty-badge bg-white bg-opacity-90 px-2 py-1 rounded text-xs">
                            <span class="text-warning">★★</span>
                            <span class="text-text-secondary">Medium</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Masala Dosa</h3>
                        <p class="text-text-secondary text-sm mb-4">A crispy, golden crepe made from fermented rice and lentil batter, filled with spiced potato curry - a breakfast staple that represents South Indian culinary artistry.</p>
                        
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center text-sm text-text-secondary">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                                </svg>
                                45 mins
                            </div>
                            <div class="flex items-center text-sm text-text-secondary">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                4 servings
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-medium text-text-primary mb-2">Key Ingredients:</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="ingredient-hover text-xs bg-secondary-50 text-secondary px-2 py-1 rounded" data-ingredient="rice">Rice</span>
                                <span class="ingredient-hover text-xs bg-secondary-50 text-secondary px-2 py-1 rounded" data-ingredient="urad-dal">Urad Dal</span>
                                <span class="ingredient-hover text-xs bg-secondary-50 text-secondary px-2 py-1 rounded" data-ingredient="potato">Potato</span>
                                <span class="ingredient-hover text-xs bg-secondary-50 text-secondary px-2 py-1 rounded" data-ingredient="curry-leaves">Curry Leaves</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <button class="btn-secondary text-sm px-4 py-2">View Recipe</button>
                            <div class="flex items-center gap-2">
                                <button class="text-text-secondary hover:text-primary">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                </button>
                                <button class="text-text-secondary hover:text-primary">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Recipe Card 3 - Rajasthani Dal Baati -->
                <div class="recipe-card card-cultural overflow-hidden">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2074&auto=format&fit=crop" alt="Dal Baati Churma" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute top-4 left-4 flex gap-2">
                            <span class="bg-accent text-white px-2 py-1 rounded text-xs font-medium">Rajasthan</span>
                            <span class="bg-success text-white px-2 py-1 rounded text-xs font-medium">Vegetarian</span>
                        </div>
                        <div class="absolute top-4 right-4 difficulty-badge bg-white bg-opacity-90 px-2 py-1 rounded text-xs">
                            <span class="text-warning">★★</span>
                            <span class="text-text-secondary">Medium</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-headlines font-semibold text-text-primary mb-2">Dal Baati Churma</h3>
                        <p class="text-text-secondary text-sm mb-4">Rajasthan's iconic trio - spiced lentil curry, baked wheat balls, and sweet crumbled wheat dessert, representing the desert state's resourceful cuisine.</p>
                        
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center text-sm text-text-secondary">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                                </svg>
                                1.5 hours
                            </div>
                            <div class="flex items-center text-sm text-text-secondary">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                5 servings
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-medium text-text-primary mb-2">Key Ingredients:</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="ingredient-hover text-xs bg-accent-50 text-accent px-2 py-1 rounded" data-ingredient="wheat-flour">Wheat Flour</span>
                                <span class="ingredient-hover text-xs bg-accent-50 text-accent px-2 py-1 rounded" data-ingredient="mixed-dal">Mixed Dal</span>
                                <span class="ingredient-hover text-xs bg-accent-50 text-accent px-2 py-1 rounded" data-ingredient="ghee">Ghee</span>
                                <span class="ingredient-hover text-xs bg-accent-50 text-accent px-2 py-1 rounded" data-ingredient="jaggery">Jaggery</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <button class="btn-accent text-sm px-4 py-2">View Recipe</button>
                            <div class="flex items-center gap-2">
                                <button class="text-text-secondary hover:text-primary">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                </button>
                                <button class="text-text-secondary hover:text-primary">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <button class="btn-primary">Explore More Recipes</button>
            </div>
        </div>
    </section>

    <!-- Cooking Demonstrations -->
    <section class="py-16 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Master Chef Demonstrations</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Learn from traditional cooks and master chefs who share their family secrets and time-honored techniques</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Cooking Demo 1 -->
                <div class="cooking-demo card-cultural overflow-hidden group">
                    <div class="relative">
                        <img src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Chef making roti" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button class="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                        <div class="absolute top-4 left-4 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                            15:30
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Perfect Roti Making</h3>
                        <p class="text-text-secondary text-sm mb-4">Master the art of making soft, fluffy rotis with Amma Lakshmi from Punjab, who shares her 40-year expertise.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="Amma Lakshmi" class="w-8 h-8 rounded-full mr-2" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                                <span class="text-sm text-text-secondary">Amma Lakshmi</span>
                            </div>
                            <span class="text-xs text-text-secondary">Punjab</span>
                        </div>
                    </div>
                </div>
                
                <!-- Cooking Demo 2 -->
                <div class="cooking-demo card-cultural overflow-hidden group">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop" alt="Spice grinding" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button class="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                        <div class="absolute top-4 left-4 bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
                            22:15
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Garam Masala Secrets</h3>
                        <p class="text-text-secondary text-sm mb-4">Learn to create the perfect spice blend with Chef Rajesh, who reveals the traditional proportions and roasting techniques.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Chef Rajesh" class="w-8 h-8 rounded-full mr-2" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                                <span class="text-sm text-text-secondary">Chef Rajesh</span>
                            </div>
                            <span class="text-xs text-text-secondary">Delhi</span>
                        </div>
                    </div>
                </div>
                
                <!-- Cooking Demo 3 -->
                <div class="cooking-demo card-cultural overflow-hidden group">
                    <div class="relative">
                        <img src="https://images.pixabay.com/photo/2017/06/16/11/38/dosa-2408925_1280.jpg" alt="Dosa making" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button class="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                        <div class="absolute top-4 left-4 bg-accent text-white px-2 py-1 rounded text-xs font-medium">
                            18:45
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Crispy Dosa Technique</h3>
                        <p class="text-text-secondary text-sm mb-4">Master the art of spreading perfect dosas with Meera Aunty from Chennai, including fermentation tips and batter consistency.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Meera Aunty" class="w-8 h-8 rounded-full mr-2" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                                <span class="text-sm text-text-secondary">Meera Aunty</span>
                            </div>
                            <span class="text-xs text-text-secondary">Chennai</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Spice Guide Section -->
    <section class="py-16 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">The Spice Trail</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Discover the aromatic world of Indian spices, their origins, medicinal properties, and cultural significance in our cuisine</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Spice Card 1 - Turmeric -->
                <div class="card-cultural p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <div class="w-20 h-20 bg-warning rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warning-600 transition-colors">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2L13 8h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Turmeric</h3>
                    <p class="text-sm text-text-secondary mb-3">The golden spice with powerful anti-inflammatory properties, essential in Indian cooking and Ayurvedic medicine.</p>
                    <div class="text-xs text-primary font-medium">
                        <span class="block">Origin: South Asia</span>
                        <span class="block">Uses: Curry, Medicine</span>
                    </div>
                </div>
                
                <!-- Spice Card 2 - Cardamom -->
                <div class="card-cultural p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <div class="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-success-600 transition-colors">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2L13 8h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Cardamom</h3>
                    <p class="text-sm text-text-secondary mb-3">The queen of spices, prized for its intense aroma and used in both sweet and savory dishes across India.</p>
                    <div class="text-xs text-primary font-medium">
                        <span class="block">Origin: Western Ghats</span>
                        <span class="block">Uses: Desserts, Tea</span>
                    </div>
                </div>
                
                <!-- Spice Card 3 - Cumin -->
                <div class="card-cultural p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <div class="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-600 transition-colors">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2L13 8h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Cumin</h3>
                    <p class="text-sm text-text-secondary mb-3">An earthy, warming spice that forms the backbone of many Indian dishes, especially in North Indian cuisine.</p>
                    <div class="text-xs text-primary font-medium">
                        <span class="block">Origin: Mediterranean</span>
                        <span class="block">Uses: Tempering, Curry</span>
                    </div>
                </div>
                
                <!-- Spice Card 4 - Saffron -->
                <div class="card-cultural p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2L13 8h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Saffron</h3>
                    <p class="text-sm text-text-secondary mb-3">The world's most expensive spice, adding luxury and distinctive flavor to biryanis, desserts, and festive dishes.</p>
                    <div class="text-xs text-primary font-medium">
                        <span class="block">Origin: Kashmir</span>
                        <span class="block">Uses: Biryani, Sweets</span>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <button class="btn-primary">Explore Complete Spice Guide</button>
            </div>
        </div>
    </section>

    <!-- Community Recipe Sharing -->
    <section class="py-16 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Family Recipe Stories</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Discover heartwarming stories behind traditional recipes shared by families across generations</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Story 1 -->
                <div class="card-cultural overflow-hidden">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Priya Sharma" class="w-12 h-12 rounded-full mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                            <div>
                                <h3 class="font-headlines font-semibold text-text-primary">Priya Sharma</h3>
                                <p class="text-sm text-text-secondary">Mumbai, Maharashtra</p>
                            </div>
                        </div>
                        <h4 class="text-lg font-headlines font-semibold text-text-primary mb-3">Nani's Secret Kheer Recipe</h4>
                        <p class="text-text-secondary text-sm mb-4">"My grandmother's rice kheer was legendary in our neighborhood. She never measured anything, but I spent years watching her hands, learning the rhythm of stirring and the exact moment when the milk turns golden..."</p>
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-text-secondary">Shared 3 days ago</span>
                            <div class="flex items-center gap-2">
                                <button class="text-text-secondary hover:text-primary">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                </button>
                                <span class="text-xs text-text-secondary">24</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Story 2 -->
                <div class="card-cultural overflow-hidden">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Arjun Menon" class="w-12 h-12 rounded-full mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                            <div>
                                <h3 class="font-headlines font-semibold text-text-primary">Arjun Menon</h3>
                                <p class="text-sm text-text-secondary">Kochi, Kerala</p>
                            </div>
                        </div>
                        <h4 class="text-lg font-headlines font-semibold text-text-primary mb-3">Amma's Fish Curry Legacy</h4>
                        <p class="text-text-secondary text-sm mb-4">"Every Sunday, our house filled with the aroma of coconut and curry leaves. Amma's fish curry recipe came from her mother, who learned it from fishermen's wives in our village. The secret is in the coconut grinding technique..."</p>
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-text-secondary">Shared 1 week ago</span>
                            <div class="flex items-center gap-2">
                                <button class="text-text-secondary hover:text-primary">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                </button>
                                <span class="text-xs text-text-secondary">31</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Story 3 -->
                <div class="card-cultural overflow-hidden">
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <img src="https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="Kavita Singh" class="w-12 h-12 rounded-full mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                            <div>
                                <h3 class="font-headlines font-semibold text-text-primary">Kavita Singh</h3>
                                <p class="text-sm text-text-secondary">Jaipur, Rajasthan</p>
                            </div>
                        </div>
                        <h4 class="text-lg font-headlines font-semibold text-text-primary mb-3">Dadi's Gatte Ki Sabzi</h4>
                        <p class="text-text-secondary text-sm mb-4">"In the desert heat of Rajasthan, fresh vegetables were scarce. My great-grandmother created magic with gram flour dumplings, turning simple ingredients into a feast. This recipe survived famines and celebrations alike..."</p>
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-text-secondary">Shared 2 weeks ago</span>
                            <div class="flex items-center gap-2">
                                <button class="text-text-secondary hover:text-primary">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                </button>
                                <span class="text-xs text-text-secondary">18</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <button class="btn-secondary mr-4">Share Your Recipe Story</button>
                <button class="btn-accent">View All Stories</button>
            </div>
        </div>
    </section>


    <script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active button
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('bg-white', 'bg-opacity-30');
                    b.classList.add('bg-white', 'bg-opacity-20');
                });
                this.classList.remove('bg-opacity-20');
                this.classList.add('bg-opacity-30');
                
                // Filter logic would go here
                console.log("Filtering by:" + filter);
            });
        });

        // Interactive map region clicks
        const regionData = {
            kashmir: {
                name: "Kashmir - Wazwan Cuisine",
                description: "Experience the royal feast of Kashmir with its elaborate multi-course meal featuring aromatic rice, tender meats, and traditional cooking techniques passed down through generations.",
                signature: "Rogan Josh, Yakhni, Gushtaba",
                specialty: "Slow-cooked in traditional copper vessels"
            },
            punjab: {
                name: "Punjab - Tandoor Traditions",
                description: "Discover the hearty cuisine of Punjab with its famous tandoor-cooked breads, rich curries, and dairy-based dishes that reflect the agricultural abundance of the region.",
                signature: "Butter Chicken, Naan, Lassi",
                specialty: "Clay oven cooking and fresh dairy"
            },
            rajasthan: {
                name: "Rajasthan - Desert Delicacies",
                description: "Explore the ingenious cuisine of the desert state, where scarcity bred creativity, resulting in dishes that can be stored for days and flavors that tell stories of survival.",
                signature: "Dal Baati Churma, Gatte Ki Sabzi",
                specialty: "Water-conserving cooking techniques"
            },
            gujarat: {
                name: "Gujarat - Vegetarian Paradise",
                description: "Savor the diverse vegetarian cuisine of Gujarat, where sweet and savory flavors dance together in elaborate thalis that celebrate the state's Jain and Hindu traditions.",
                signature: "Dhokla, Thepla, Gujarati Thali",
                specialty: "Sweet and savory combinations"
            },
            maharashtra: {
                name: "Maharashtra - Street Food Capital",
                description: "Dive into the vibrant street food culture of Maharashtra, from Mumbai's bustling chaat stalls to traditional Maharashtrian home cooking that balances bold flavors.",
                signature: "Vada Pav, Pav Bhaji, Misal Pav",
                specialty: "Quick cooking and bold spicing"
            },
            bengal: {
                name: "West Bengal - Sweet Traditions",
                description: "Indulge in Bengal's legendary sweet-making traditions and fish-based cuisine, where subtle flavors and artistic presentation reflect the region's cultural sophistication.",
                signature: "Rasgulla, Fish Curry, Sandesh",
                specialty: "Milk-based sweets and fish preparations"
            },
            kerala: {
                name: "Kerala - Coconut Coast",
                description: "Experience the tropical flavors of Kerala, where coconut, curry leaves, and spices from ancient trade routes create a cuisine that's both comforting and exotic.",
                signature: "Fish Curry, Appam, Coconut Chutney",
                specialty: "Coconut-based gravies and seafood"
            },
            tamilnadu: {
                name: "Tamil Nadu - Chettinad Spices",
                description: "Discover the fiery and aromatic cuisine of Tamil Nadu, particularly the Chettinad region, known for its complex spice blends and traditional cooking methods.",
                signature: "Chettinad Chicken, Sambar, Rasam",
                specialty: "Complex spice blending and temple food traditions"
            },
            uttarpradesh: {
                name: "Uttar Pradesh - Mughlai Heritage",
                description: "Explore the royal Mughlai cuisine of Uttar Pradesh, where Persian influences merged with local traditions to create rich, aromatic dishes fit for emperors.",
                signature: "Biryani, Kebabs, Korma",
                specialty: "Slow cooking and aromatic rice dishes"
            }
        };

        document.querySelectorAll('.region-marker').forEach(region => {
            region.addEventListener('click', function() {
                const regionKey = this.dataset.region;
                const data = regionData[regionKey];
                
                if (data) {
                    const regionInfo = document.getElementById('region-info');
                    const regionContent = document.getElementById('region-content');
                    
                    regionContent.innerHTML =
  '<h3 class="text-2xl font-headlines font-bold text-primary mb-4">' + data.name + "</h3>" +
  '<p class="text-text-secondary mb-4">' + data.description + "</p>" +
  '<div class="grid md:grid-cols-2 gap-4">' +
    '<div>' +
      '<h4 class="font-medium text-text-primary mb-2">Signature Dishes:</h4>' +
      '<p class="text-sm text-text-secondary">' + data.signature + "</p>" +
    '</div>' +
    '<div>' +
      '<h4 class="font-medium text-text-primary mb-2">Specialty:</h4>' +
      '<p class="text-sm text-text-secondary">' + data.specialty + "</p>" +
    '</div>' +
  '</div>' +
  '<div class="mt-6">' +
    '<button class="btn-primary mr-4">Explore Recipes</button>' +
    '<button class="btn-secondary">Watch Cooking Videos</button>' +
  '</div>';
;
                    
                    regionInfo.classList.remove('hidden');
                    regionInfo.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Ingredient hover tooltips
        const ingredientInfo = {
            saffron: "Known as 'Red Gold', saffron is harvested from crocus flowers and adds a distinctive aroma and golden color to dishes.",
            basmati: "Aged basmati rice from the foothills of the Himalayas, prized for its long grains and fragrant aroma.",
            mutton: "Tender goat meat, preferred in traditional Indian cooking for its rich flavor and texture.",
            yogurt: "Fresh yogurt acts as a natural tenderizer and adds tangy flavor to marinades.",
            rice: "Parboiled rice, soaked and ground to create the perfect dosa batter consistency.",
            "urad-dal": "Black gram lentils that provide protein and help in fermentation for fluffy dosas.",
            potato: "Boiled and spiced potatoes form the classic masala filling for dosas.",
            "curry-leaves": "Fresh curry leaves add a distinctive aroma and are essential in South Indian cooking.",
            "wheat-flour": "Whole wheat flour mixed with ghee creates the perfect baati dough texture.",
            "mixed-dal": "A combination of lentils that provides protein and creates the rich dal base.",
            ghee: "Clarified butter that adds richness and is essential in traditional Rajasthani cooking.",
            jaggery: "Unrefined sugar that adds natural sweetness to the churma dessert."
        };

        document.querySelectorAll('.ingredient-hover').forEach(ingredient => {
            ingredient.addEventListener('mouseenter', function() {
                const ingredientKey = this.dataset.ingredient;
                const info = ingredientInfo[ingredientKey];
                
                if (info) {
                    // Create tooltip
                    const tooltip = document.createElement('div');
                    tooltip.className = 'absolute bg-text-primary text-white p-2 rounded text-xs max-w-xs z-50';
                    tooltip.style.bottom = '100%';
                    tooltip.style.left = '50%';
                    tooltip.style.transform = 'translateX(-50%)';
                    tooltip.style.marginBottom = '5px';
                    tooltip.textContent = info;
                    
                    this.style.position = 'relative';
                    this.appendChild(tooltip);
                }
            });
            
            ingredient.addEventListener('mouseleave', function() {
                const tooltip = this.querySelector('.absolute');
                if (tooltip) {
                    tooltip.remove();
                }
            });
        });
    </script>
</body>
   </html>
  `;

