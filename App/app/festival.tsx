






export const festivalsHTML = `
<!DOCTYPE html>
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

  .festival-card {
            transition: all 0.3s ease;
        }
        .festival-card:hover {
            transform: translateY(-5px);
        }
        .timeline-dot {
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }
        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 1px;
        }
        .calendar-day {
            aspect-ratio: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .festival-indicator {
            position: absolute;
            bottom: 2px;
            right: 2px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
        .lunar-date {
            font-size: 0.75rem;
            opacity: 0.7;
        }
        .celebration-animation {
            animation: gentle-bounce 2s ease-in-out infinite;
        }
        @keyframes gentle-bounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
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
    <section class="relative bg-gradient-to-br from-primary-100 via-accent-50 to-secondary-100 py-16">
        <div class="absolute inset-0 bg-cover bg-center opacity-20" style="background-image: url('https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=2070');"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="celebration-animation inline-block mb-6">
                <svg class="w-16 h-16 text-primary mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
            </div>
            <h1 class="text-5xl md:text-6xl font-headlines font-bold text-primary mb-6">Festival Calendar</h1>
            <p class="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-8">Experience the sacred rhythms of Indian celebrations through our living cultural timeline</p>
            
            <!-- Current Festival Highlight -->
            <div class="card-cultural max-w-2xl mx-auto p-8 mb-8">
                <div class="flex items-center justify-center mb-4">
                    <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                    </div>
                    <div class="text-center">
                        <h3 class="text-2xl font-headlines font-semibold text-text-primary">Ganesh Chaturthi</h3>
                        <p class="text-text-secondary">September 8, 2025 • Bhadrapada Shukla Chaturthi</p>
                    </div>
                </div>
                <p class="text-text-secondary text-center mb-4">Today we celebrate Lord Ganesha, the remover of obstacles and patron of arts and sciences. Communities across India welcome Ganesha into their homes and hearts.</p>
                <div class="flex justify-center space-x-4">
                    <button class="btn-primary">Learn Rituals</button>
                    <button class="btn-secondary">View Celebrations</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Festival Filters & Search -->
    <section class="py-8 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <!-- Search Bar -->
                <div class="flex-1 max-w-md">
                    <div class="relative">
                        <input type="text" placeholder="Search festivals, rituals, or traditions..." class="input-cultural w-full pl-10" />
                        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                </div>
                
                <!-- Filter Options -->
                <div class="flex flex-wrap gap-4">
                    <select class="input-cultural">
                        <option>All Regions</option>
                        <option>North India</option>
                        <option>South India</option>
                        <option>East India</option>
                        <option>West India</option>
                        <option>Central India</option>
                    </select>
                    
                    <select class="input-cultural">
                        <option>All Traditions</option>
                        <option>Hindu Festivals</option>
                        <option>Sikh Celebrations</option>
                        <option>Buddhist Observances</option>
                        <option>Jain Festivals</option>
                        <option>Regional Folk</option>
                    </select>
                    
                    <select class="input-cultural">
                        <option>All Months</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    
                    <button class="btn-accent flex items-center">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"/>
                        </svg>
                        Reset Filters
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Calendar View Toggle -->
    <section class="py-6 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-center">
                <div class="bg-surface rounded-lg p-1 flex">
                    <button id="timeline-view" class="px-6 py-2 rounded-md bg-primary text-white font-medium transition-cultural">Timeline View</button>
                    <button id="calendar-view" class="px-6 py-2 rounded-md text-text-secondary hover:text-primary transition-cultural">Calendar View</button>
                    <button id="list-view" class="px-6 py-2 rounded-md text-text-secondary hover:text-primary transition-cultural">List View</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Timeline View (Default) -->
    <section id="timeline-section" class="py-12 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative">
                <!-- Timeline Line -->
                <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
                
                <!-- Timeline Events -->
                <div class="space-y-12">
                    <!-- Ganesh Chaturthi - Today -->
                    <div class="relative flex items-center">
                        <div class="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"></div>
                        <div class="w-1/2 pr-8">
                            <div class="festival-card card-cultural p-6 ml-auto max-w-md">
                                <div class="flex items-center mb-4">
                                    <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Ganesh Chaturthi" class="w-16 h-16 rounded-full object-cover mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                                    <div>
                                        <h3 class="text-lg font-headlines font-semibold text-text-primary">Ganesh Chaturthi</h3>
                                        <p class="text-sm text-text-secondary">September 8, 2025</p>
                                        <p class="text-xs text-primary lunar-date">Bhadrapada Shukla Chaturthi</p>
                                    </div>
                                </div>
                                <p class="text-text-secondary text-sm mb-4">The beloved elephant-headed deity arrives to bless devotees with wisdom and remove obstacles from their path.</p>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs bg-primary text-white px-2 py-1 rounded">Celebrating Today</span>
                                    <button class="text-primary hover:text-primary-600 text-sm font-medium">Learn More →</button>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2 pl-8"></div>
                    </div>
                    
                    <!-- Navratri -->
                    <div class="relative flex items-center">
                        <div class="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background z-10"></div>
                        <div class="w-1/2 pr-8"></div>
                        <div class="w-1/2 pl-8">
                            <div class="festival-card card-cultural p-6 max-w-md">
                                <div class="flex items-center mb-4">
                                    <img src="https://images.pixabay.com/photo/2017/10/11/15/56/garba-2840985_1280.jpg" alt="Navratri" class="w-16 h-16 rounded-full object-cover mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                                    <div>
                                        <h3 class="text-lg font-headlines font-semibold text-text-primary">Navratri</h3>
                                        <p class="text-sm text-text-secondary">September 20, 2025</p>
                                        <p class="text-xs text-secondary lunar-date">Ashwin Shukla Pratipada</p>
                                    </div>
                                </div>
                                <p class="text-text-secondary text-sm mb-4">Nine nights of divine celebration honoring the feminine divine through dance, music, and devotion.</p>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs bg-secondary text-white px-2 py-1 rounded">In 12 days</span>
                                    <button class="text-secondary hover:text-secondary-600 text-sm font-medium">Learn More →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Diwali -->
                    <div class="relative flex items-center">
                        <div class="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                        <div class="w-1/2 pr-8">
                            <div class="festival-card card-cultural p-6 ml-auto max-w-md">
                                <div class="flex items-center mb-4">
                                    <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop" alt="Diwali" class="w-16 h-16 rounded-full object-cover mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                                    <div>
                                        <h3 class="text-lg font-headlines font-semibold text-text-primary">Diwali</h3>
                                        <p class="text-sm text-text-secondary">October 20, 2025</p>
                                        <p class="text-xs text-accent lunar-date">Kartik Amavasya</p>
                                    </div>
                                </div>
                                <p class="text-text-secondary text-sm mb-4">The festival of lights illuminates hearts and homes, celebrating the victory of light over darkness.</p>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs bg-accent text-white px-2 py-1 rounded">In 43 days</span>
                                    <button class="text-accent hover:text-accent-600 text-sm font-medium">Learn More →</button>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2 pl-8"></div>
                    </div>
                    
                    <!-- Karva Chauth -->
                    <div class="relative flex items-center">
                        <div class="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                        <div class="w-1/2 pr-8"></div>
                        <div class="w-1/2 pl-8">
                            <div class="festival-card card-cultural p-6 max-w-md">
                                <div class="flex items-center mb-4">
                                    <img src="https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Karva Chauth" class="w-16 h-16 rounded-full object-cover mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                                    <div>
                                        <h3 class="text-lg font-headlines font-semibold text-text-primary">Karva Chauth</h3>
                                        <p class="text-sm text-text-secondary">October 9, 2025</p>
                                        <p class="text-xs text-primary lunar-date">Kartik Krishna Chaturthi</p>
                                    </div>
                                </div>
                                <p class="text-text-secondary text-sm mb-4">A sacred fast observed by married women for the longevity and well-being of their husbands.</p>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs bg-primary text-white px-2 py-1 rounded">In 32 days</span>
                                    <button class="text-primary hover:text-primary-600 text-sm font-medium">Learn More →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Calendar View (Hidden by default) -->
    <section id="calendar-section" class="py-12 bg-background hidden">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="card-cultural p-8">
                <!-- Calendar Header -->
                <div class="flex items-center justify-between mb-8">
                    <button class="p-2 hover:bg-primary-50 rounded-lg transition-cultural">
                        <svg class="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <h2 class="text-2xl font-headlines font-semibold text-text-primary">September 2025</h2>
                    <button class="p-2 hover:bg-primary-50 rounded-lg transition-cultural">
                        <svg class="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
                
                <!-- Calendar Grid -->
                <div class="calendar-grid bg-surface rounded-lg overflow-hidden">
                    <!-- Days of Week Header -->
                    <div class="calendar-day bg-primary-100 font-medium text-text-primary text-center py-3">Sun</div>
                    <div class="calendar-day bg-primary-100 font-medium text-text-primary text-center py-3">Mon</div>
                    <div class="calendar-day bg-primary-100 font-medium text-text-primary text-center py-3">Tue</div>
                    <div class="calendar-day bg-primary-100 font-medium text-text-primary text-center py-3">Wed</div>
                    <div class="calendar-day bg-primary-100 font-medium text-text-primary text-center py-3">Thu</div>
                    <div class="calendar-day bg-primary-100 font-medium text-text-primary text-center py-3">Fri</div>
                    <div class="calendar-day bg-primary-100 font-medium text-text-primary text-center py-3">Sat</div>
                    
                    <!-- Calendar Days -->
                    <div class="calendar-day bg-gray-50 text-gray-400 hover:bg-gray-100 transition-cultural cursor-pointer">1</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">2</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">3</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">4</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">5</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">6</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">7</div>
                    
                    <div class="calendar-day bg-primary-100 text-primary font-bold hover:bg-primary-200 transition-cultural cursor-pointer relative">
                        8
                        <div class="festival-indicator bg-primary"></div>
                    </div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">9</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">10</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">11</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">12</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">13</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">14</div>
                    
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">15</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">16</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">17</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">18</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">19</div>
                    <div class="calendar-day bg-secondary-100 text-secondary font-bold hover:bg-secondary-200 transition-cultural cursor-pointer relative">
                        20
                        <div class="festival-indicator bg-secondary"></div>
                    </div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">21</div>
                    
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">22</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">23</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">24</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">25</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">26</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">27</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">28</div>
                    
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">29</div>
                    <div class="calendar-day bg-white hover:bg-primary-50 transition-cultural cursor-pointer">30</div>
                    <div class="calendar-day bg-gray-50 text-gray-400 hover:bg-gray-100 transition-cultural cursor-pointer">1</div>
                    <div class="calendar-day bg-gray-50 text-gray-400 hover:bg-gray-100 transition-cultural cursor-pointer">2</div>
                    <div class="calendar-day bg-gray-50 text-gray-400 hover:bg-gray-100 transition-cultural cursor-pointer">3</div>
                    <div class="calendar-day bg-gray-50 text-gray-400 hover:bg-gray-100 transition-cultural cursor-pointer">4</div>
                    <div class="calendar-day bg-gray-50 text-gray-400 hover:bg-gray-100 transition-cultural cursor-pointer">5</div>
                </div>
                
                <!-- Calendar Legend -->
                <div class="mt-6 flex flex-wrap justify-center gap-4">
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-primary rounded-full mr-2"></div>
                        <span class="text-sm text-text-secondary">Major Festivals</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                        <span class="text-sm text-text-secondary">Regional Celebrations</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-3 h-3 bg-accent rounded-full mr-2"></div>
                        <span class="text-sm text-text-secondary">Cultural Events</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- List View (Hidden by default) -->
    <section id="list-section" class="py-12 bg-background hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="space-y-6">
                <!-- Festival List Item -->
                <div class="festival-card card-cultural p-6 flex items-center">
                    <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Ganesh Chaturthi" class="w-20 h-20 rounded-lg object-cover mr-6" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xl font-headlines font-semibold text-text-primary">Ganesh Chaturthi</h3>
                            <span class="text-sm bg-primary text-white px-3 py-1 rounded-full">Today</span>
                        </div>
                        <p class="text-text-secondary mb-2">September 8, 2025 • Bhadrapada Shukla Chaturthi</p>
                        <p class="text-text-secondary text-sm mb-4">The beloved elephant-headed deity arrives to bless devotees with wisdom and remove obstacles from their path.</p>
                        <div class="flex items-center space-x-4">
                            <span class="text-xs bg-primary-100 text-primary px-2 py-1 rounded">Pan-India</span>
                            <span class="text-xs bg-secondary-100 text-secondary px-2 py-1 rounded">11 Days</span>
                            <button class="text-primary hover:text-primary-600 text-sm font-medium">View Details →</button>
                        </div>
                    </div>
                </div>
                
                <!-- More Festival Items -->
                <div class="festival-card card-cultural p-6 flex items-center">
                    <img src="https://images.pixabay.com/photo/2017/10/11/15/56/garba-2840985_1280.jpg" alt="Navratri" class="w-20 h-20 rounded-lg object-cover mr-6" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xl font-headlines font-semibold text-text-primary">Navratri</h3>
                            <span class="text-sm bg-secondary text-white px-3 py-1 rounded-full">12 days</span>
                        </div>
                        <p class="text-text-secondary mb-2">September 20, 2025 • Ashwin Shukla Pratipada</p>
                        <p class="text-text-secondary text-sm mb-4">Nine nights of divine celebration honoring the feminine divine through dance, music, and devotion.</p>
                        <div class="flex items-center space-x-4">
                            <span class="text-xs bg-primary-100 text-primary px-2 py-1 rounded">Gujarat, Maharashtra</span>
                            <span class="text-xs bg-secondary-100 text-secondary px-2 py-1 rounded">9 Nights</span>
                            <button class="text-secondary hover:text-secondary-600 text-sm font-medium">View Details →</button>
                        </div>
                    </div>
                </div>
                
                <div class="festival-card card-cultural p-6 flex items-center">
                    <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop" alt="Diwali" class="w-20 h-20 rounded-lg object-cover mr-6" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xl font-headlines font-semibold text-text-primary">Diwali</h3>
                            <span class="text-sm bg-accent text-white px-3 py-1 rounded-full">43 days</span>
                        </div>
                        <p class="text-text-secondary mb-2">October 20, 2025 • Kartik Amavasya</p>
                        <p class="text-text-secondary text-sm mb-4">The festival of lights illuminates hearts and homes, celebrating the victory of light over darkness.</p>
                        <div class="flex items-center space-x-4">
                            <span class="text-xs bg-primary-100 text-primary px-2 py-1 rounded">Pan-India</span>
                            <span class="text-xs bg-secondary-100 text-secondary px-2 py-1 rounded">5 Days</span>
                            <button class="text-accent hover:text-accent-600 text-sm font-medium">View Details →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Festival Deep Dive -->
    <section class="py-16 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Festival Deep Dive</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Explore the rich traditions, rituals, and cultural significance of today's celebration</p>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <!-- Festival Video/Image -->
                <div class="relative">
                    <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=2070" alt="Ganesh Chaturthi celebration" class="w-full h-96 object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                    </div>
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                        <button class="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all">
                            <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- Festival Information -->
                <div>
                    <h3 class="text-3xl font-headlines font-bold text-text-primary mb-6">Ganesh Chaturthi: The Beloved Remover of Obstacles</h3>
                    
                    <!-- Ritual Steps -->
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                                <span class="text-white font-bold text-sm">1</span>
                            </div>
                            <div>
                                <h4 class="font-headlines font-semibold text-text-primary mb-2">Ganesh Installation (Sthapana)</h4>
                                <p class="text-text-secondary text-sm">Welcome Lord Ganesha into your home with proper rituals and offerings of modak, his favorite sweet.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                                <span class="text-white font-bold text-sm">2</span>
                            </div>
                            <div>
                                <h4 class="font-headlines font-semibold text-text-primary mb-2">Daily Prayers (Aarti)</h4>
                                <p class="text-text-secondary text-sm">Perform morning and evening prayers with traditional songs and offerings of flowers and sweets.</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4 mt-1">
                                <span class="text-white font-bold text-sm">3</span>
                            </div>
                            <div>
                                <h4 class="font-headlines font-semibold text-text-primary mb-2">Immersion (Visarjan)</h4>
                                <p class="text-text-secondary text-sm">Bid farewell to Ganesha with processions and immersion in water bodies, promising his return next year.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8 flex space-x-4">
                        <button class="btn-primary">Learn Recipes</button>
                        <button class="btn-secondary">View Celebrations</button>
                        <button class="btn-accent">Join Community</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Community Celebrations -->
    <section class="py-16 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Community Celebrations</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">See how our global community celebrates Indian festivals</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Community Post 1 -->
                <div class="card-cultural overflow-hidden">
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Community celebration" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <img src="https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="Priya" class="w-10 h-10 rounded-full mr-3" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                            <div>
                                <h4 class="font-headlines font-semibold text-text-primary">Priya Sharma</h4>
                                <p class="text-text-secondary text-sm">Mumbai, India</p>
                            </div>
                        </div>
                        <p class="text-text-secondary text-sm mb-4">"Our building's Ganesh celebration brought everyone together! Made 108 modaks with my grandmother's recipe. The joy on children's faces during aarti was priceless. 🙏"</p>
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-text-secondary">2 hours ago</span>
                            <div class="flex items-center space-x-2">
                                <button class="text-primary hover:text-primary-600">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                                    </svg>
                                </button>
                                <span class="text-sm text-text-secondary">24</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Community Post 2 -->
                <div class="card-cultural overflow-hidden">
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop" alt="Community celebration" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Raj" class="w-10 h-10 rounded-full mr-3" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                            <div>
                                <h4 class="font-headlines font-semibold text-text-primary">Raj Patel</h4>
                                <p class="text-text-secondary text-sm">London, UK</p>
                            </div>
                        </div>
                        <p class="text-text-secondary text-sm mb-4">"Teaching my kids about Ganesh Chaturthi in London. We made eco-friendly clay Ganesha and celebrated with our Indian community. Culture knows no borders! 🌍"</p>
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-text-secondary">4 hours ago</span>
                            <div class="flex items-center space-x-2">
                                <button class="text-primary hover:text-primary-600">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                                    </svg>
                                </button>
                                <span class="text-sm text-text-secondary">18</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Community Post 3 -->
                <div class="card-cultural overflow-hidden">
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img src="https://images.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg" alt="Community celebration" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Anita" class="w-10 h-10 rounded-full mr-3" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                            <div>
                                <h4 class="font-headlines font-semibold text-text-primary">Anita Desai</h4>
                                <p class="text-text-secondary text-sm">New York, USA</p>
                            </div>
                        </div>
                        <p class="text-text-secondary text-sm mb-4">"First time celebrating Ganesh Chaturthi! My Indian neighbors invited us to join their family celebration. The warmth and traditions are beautiful. Thank you for welcoming us! 🕉️"</p>
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-text-secondary">6 hours ago</span>
                            <div class="flex items-center space-x-2">
                                <button class="text-primary hover:text-primary-600">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                                    </svg>
                                </button>
                                <span class="text-sm text-text-secondary">31</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <button class="btn-primary">Share Your Celebration</button>
            </div>
        </div>
    </section>

    <!-- Festival Notifications -->
    <section class="py-16 bg-surface">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="card-cultural p-8">
                <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                </div>
                <h2 class="text-3xl font-headlines font-bold text-text-primary mb-4">Never Miss a Celebration</h2>
                <p class="text-xl text-text-secondary mb-8">Get personalized festival reminders, preparation guides, and virtual participation opportunities delivered to your inbox.</p>
                
                <div class="max-w-md mx-auto flex mb-6">
                    <input type="email" placeholder="Enter your email address" class="input-cultural flex-1 mr-2" />
                    <button class="btn-primary px-6">Subscribe</button>
                </div>
                
                <div class="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 mr-1 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Festival Reminders
                    </div>
                    <div class="flex items-center">
                        <svg class="w-4 h-4 mr-1 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Preparation Guides
                    </div>
                    <div class="flex items-center">
                        <svg class="w-4 h-4 mr-1 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        Cultural Stories
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // View toggle functionality
        const timelineView = document.getElementById('timeline-view');
        const calendarView = document.getElementById('calendar-view');
        const listView = document.getElementById('list-view');
        
        const timelineSection = document.getElementById('timeline-section');
        const calendarSection = document.getElementById('calendar-section');
        const listSection = document.getElementById('list-section');

        function showView(activeView, activeSection) {
            // Reset all buttons
            [timelineView, calendarView, listView].forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('text-text-secondary');
            });
            
            // Hide all sections
            [timelineSection, calendarSection, listSection].forEach(section => {
                section.classList.add('hidden');
            });
            
            // Activate selected view
            activeView.classList.add('bg-primary', 'text-white');
            activeView.classList.remove('text-text-secondary');
            activeSection.classList.remove('hidden');
        }

        timelineView.addEventListener('click', () => showView(timelineView, timelineSection));
        calendarView.addEventListener('click', () => showView(calendarView, calendarSection));
        listView.addEventListener('click', () => showView(listView, listSection));

        // Calendar day click functionality
        document.querySelectorAll('.calendar-day').forEach(day => {
            day.addEventListener('click', function() {
                if (this.querySelector('.festival-indicator')) {
                    alert('Festival details would be shown here for this date!');
                }
            });
        });

        // Initialize timeline view as default
        showView(timelineView, timelineSection);
    </script>
</body>
  </html>
`;
