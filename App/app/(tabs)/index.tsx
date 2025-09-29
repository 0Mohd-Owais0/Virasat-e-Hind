// import React from "react";
// import { Platform } from "react-native";
// import { WebView } from "react-native-webview";
// export default function App() {
//   const html = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Heritage India - Cultural Heritage Hub</title>
//      <script src="https://cdn.tailwindcss.com"></script>
//      <style>

// :root {
//       /* --- your color variables (already added) --- */
//       --color-primary: #B8860B;
//       --color-primary-50: #FEF9E7;
//       --color-primary-100: #FDF2D0;
//       --color-primary-200: #FAE5A1;
//       --color-primary-300: #F7D872;
//       --color-primary-400: #E4C441;
//       --color-primary-500: #B8860B;
//       --color-primary-600: #9A7209;
//       --color-primary-700: #7C5E07;
//       --color-primary-800: #5E4A05;
//       --color-primary-900: #403603;

//       --color-secondary: #8B4513;
//       --color-secondary-50: #F5F0EB;
//       --color-secondary-100: #EBE1D7;
//       --color-secondary-200: #D7C3AF;
//       --color-secondary-300: #C3A587;
//       --color-secondary-400: #AF875F;
//       --color-secondary-500: #8B4513;
//       --color-secondary-600: #763A10;
//       --color-secondary-700: #612F0D;
//       --color-secondary-800: #4C240A;
//       --color-secondary-900: #371907;

//       --color-accent: #CD853F;
//       --color-accent-50: #FBF7F2;
//       --color-accent-100: #F7EFE5;
//       --color-accent-200: #EFDFCB;
//       --color-accent-300: #E7CFB1;
//       --color-accent-400: #DFBF97;
//       --color-accent-500: #CD853F;
//       --color-accent-600: #B07135;
//       --color-accent-700: #935D2B;
//       --color-accent-800: #764921;
//       --color-accent-900: #593517;

//       --color-background: #FDF5E6;
//       --color-surface: #F5F5DC;

//       --color-text-primary: #2F1B14;
//       --color-text-secondary: #5D4E37;

//       --color-success: #228B22;
//       --color-success-50: #F0F8F0;
//       --color-success-100: #E1F1E1;
//       --color-success-200: #C3E3C3;
//       --color-success-300: #A5D5A5;
//       --color-success-400: #87C787;
//       --color-success-500: #228B22;
//       --color-success-600: #1E7A1E;
//       --color-success-700: #1A691A;
//       --color-success-800: #165816;
//       --color-success-900: #124712;

//       --color-warning: #DAA520;
//       --color-warning-50: #FDF9F0;
//       --color-warning-100: #FBF3E1;
//       --color-warning-200: #F7E7C3;
//       --color-warning-300: #F3DBA5;
//       --color-warning-400: #EFCF87;
//       --color-warning-500: #DAA520;
//       --color-warning-600: #BA8E1C;
//       --color-warning-700: #9A7718;
//       --color-warning-800: #7A6014;
//       --color-warning-900: #5A4910;

//       --color-error: #A0522D;
//       --color-error-50: #F7F2EF;
//       --color-error-100: #EFE5DF;
//       --color-error-200: #DFCBBF;
//       --color-error-300: #CFB19F;
//       --color-error-400: #BF977F;
//       --color-error-500: #A0522D;
//       --color-error-600: #884626;
//       --color-error-700: #703A1F;
//       --color-error-800: #582E18;
//       --color-error-900: #402211;

//       --shadow-cultural: 0 4px 12px rgba(139, 69, 19, 0.1);
//       --shadow-cultural-hover: 0 6px 16px rgba(139, 69, 19, 0.15);
//     }



//         .hero-slide {
//             transition: opacity 1s ease-in-out;
//         }
//         .pulse-animation {
//             animation: pulse 2s infinite;
//         }
//         @keyframes pulse {
//             0%, 100% { opacity: 0.8; }
//             50% { opacity: 1; }
//         }
//         .cultural-dance {
//             animation: gentle-sway 3s ease-in-out infinite;
//         }
//         @keyframes gentle-sway {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-5px); }
//         }
//         .map-state {
//             cursor: pointer;
//             transition: all 0.3s ease;
//         }
//         .map-state:hover {
//             filter: brightness(1.2);
//         }


        
//     </style>
//       <script>
//     tailwind.config = {
//       theme: {
//         extend: {
//           colors: {
//             primary: "var(--color-primary)",
//             "primary-50": "var(--color-primary-50)",
//             "primary-100": "var(--color-primary-100)",
//             "primary-200": "var(--color-primary-200)",
//             "primary-300": "var(--color-primary-300)",
//             "primary-400": "var(--color-primary-400)",
//             "primary-500": "var(--color-primary-500)",
//             "primary-600": "var(--color-primary-600)",
//             "primary-700": "var(--color-primary-700)",
//             "primary-800": "var(--color-primary-800)",
//             "primary-900": "var(--color-primary-900)",

//             secondary: "var(--color-secondary)",
//             "secondary-50": "var(--color-secondary-50)",
//             "secondary-100": "var(--color-secondary-100)",
//             "secondary-200": "var(--color-secondary-200)",
//             "secondary-300": "var(--color-secondary-300)",
//             "secondary-400": "var(--color-secondary-400)",
//             "secondary-500": "var(--color-secondary-500)",
//             "secondary-600": "var(--color-secondary-600)",
//             "secondary-700": "var(--color-secondary-700)",
//             "secondary-800": "var(--color-secondary-800)",
//             "secondary-900": "var(--color-secondary-900)",

//             accent: "var(--color-accent)",
//             "accent-50": "var(--color-accent-50)",
//             "accent-100": "var(--color-accent-100)",
//             "accent-200": "var(--color-accent-200)",
//             "accent-300": "var(--color-accent-300)",
//             "accent-400": "var(--color-accent-400)",
//             "accent-500": "var(--color-accent-500)",
//             "accent-600": "var(--color-accent-600)",
//             "accent-700": "var(--color-accent-700)",
//             "accent-800": "var(--color-accent-800)",
//             "accent-900": "var(--color-accent-900)",

//             background: "var(--color-background)",
//             surface: "var(--color-surface)",

//             "text-primary": "var(--color-text-primary)",
//             "text-secondary": "var(--color-text-secondary)",

//             success: "var(--color-success)",
//             "success-50": "var(--color-success-50)",
//             "success-100": "var(--color-success-100)",
//             "success-200": "var(--color-success-200)",
//             "success-300": "var(--color-success-300)",
//             "success-400": "var(--color-success-400)",
//             "success-500": "var(--color-success-500)",
//             "success-600": "var(--color-success-600)",
//             "success-700": "var(--color-success-700)",
//             "success-800": "var(--color-success-800)",
//             "success-900": "var(--color-success-900)",

//             warning: "var(--color-warning)",
//             "warning-50": "var(--color-warning-50)",
//             "warning-100": "var(--color-warning-100)",
//             "warning-200": "var(--color-warning-200)",
//             "warning-300": "var(--color-warning-300)",
//             "warning-400": "var(--color-warning-400)",
//             "warning-500": "var(--color-warning-500)",
//             "warning-600": "var(--color-warning-600)",
//             "warning-700": "var(--color-warning-700)",
//             "warning-800": "var(--color-warning-800)",
//             "warning-900": "var(--color-warning-900)",

//             error: "var(--color-error)",
//             "error-50": "var(--color-error-50)",
//             "error-100": "var(--color-error-100)",
//             "error-200": "var(--color-error-200)",
//             "error-300": "var(--color-error-300)",
//             "error-400": "var(--color-error-400)",
//             "error-500": "var(--color-error-500)",
//             "error-600": "var(--color-error-600)",
//             "error-700": "var(--color-error-700)",
//             "error-800": "var(--color-error-800)",
//             "error-900": "var(--color-error-900)",
//           }
//         }
//       }
//     }
//   </script>


// <script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fheritagei5090back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.8"></script>
// </head>
// <body class="bg-background text-text-primary">
//     <!-- Navigation Header -->
    

//     <!-- Hero Section with Rotating Backgrounds -->
//     <section class="relative h-screen overflow-hidden">
//         <!-- Hero Slide 1 - Rajasthani Folk Dancers -->
//         <div id="hero-slide-1" class="hero-slide absolute inset-0 bg-cover bg-center" style="background-image: linear-gradient(rgba(47, 27, 20, 0.4), rgba(47, 27, 20, 0.4)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop');">
//             <div class="absolute inset-0 flex items-center justify-center">
//                 <div class="text-center text-white max-w-4xl px-4">
//                     <h1 class="text-5xl md:text-7xl font-headlines font-bold mb-6 cultural-dance">Discover India's Living Heritage</h1>
//                     <p class="text-xl md:text-2xl font-body mb-8 opacity-90">Experience the vibrant tapestry of traditions, festivals, and cultural treasures that define the soul of India</p>
//                     <button class="btn-primary text-lg px-8 py-4">Begin Your Cultural Journey</button>
//                 </div>
//             </div>
//         </div>
        
//         <!-- Hero Slide 2 - Kerala Backwaters -->
//         <div id="hero-slide-2" class="hero-slide absolute inset-0 bg-cover bg-center opacity-0" style="background-image: linear-gradient(rgba(47, 27, 20, 0.4), rgba(47, 27, 20, 0.4)), url('https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=2070');">
//             <div class="absolute inset-0 flex items-center justify-center">
//                 <div class="text-center text-white max-w-4xl px-4">
//                     <h1 class="text-5xl md:text-7xl font-headlines font-bold mb-6 cultural-dance">Celebrate Sacred Traditions</h1>
//                     <p class="text-xl md:text-2xl font-body mb-8 opacity-90">From Onam's golden harvest to Diwali's festival of lights, immerse yourself in India's spiritual celebrations</p>
//                     <button class="btn-primary text-lg px-8 py-4">Explore Festivals</button>
//                 </div>
//             </div>
//         </div>
        
//         <!-- Hero Slide 3 - Classical Dance -->
//         <div id="hero-slide-3" class="hero-slide absolute inset-0 bg-cover bg-center opacity-0" style="background-image: linear-gradient(rgba(47, 27, 20, 0.4), rgba(47, 27, 20, 0.4)), url('https://images.pixabay.com/photo/2017/08/06/12/52/classical-dance-2592655_1280.jpg');">
//             <div class="absolute inset-0 flex items-center justify-center">
//                 <div class="text-center text-white max-w-4xl px-4">
//                     <h1 class="text-5xl md:text-7xl font-headlines font-bold mb-6 cultural-dance">Arts That Tell Stories</h1>
//                     <p class="text-xl md:text-2xl font-body mb-8 opacity-90">Witness the grace of classical dance, the mastery of ancient crafts, and the poetry of cultural expression</p>
//                     <button class="btn-primary text-lg px-8 py-4">Discover Arts</button>
//                 </div>
//             </div>
//         </div>
        
//         <!-- Hero Navigation Dots -->
//         <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
//             <button class="hero-dot w-3 h-3 rounded-full bg-white opacity-100" data-slide="1"></button>
//             <button class="hero-dot w-3 h-3 rounded-full bg-white opacity-50" data-slide="2"></button>
//             <button class="hero-dot w-3 h-3 rounded-full bg-white opacity-50" data-slide="3"></button>
//         </div>
//     </section>


//     <!-- Cultural Calendar Widget -->
//     <section class="py-16 bg-background">
//         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div class="grid lg:grid-cols-2 gap-12 items-center">
//                 <div>
//                     <h2 class="text-4xl font-headlines font-bold text-primary mb-6">Today in Indian Culture</h2>
//                     <div class="card-cultural p-8">
//                         <div class="flex items-center mb-4">
//                             <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
//                                 <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 class="text-xl font-headlines font-semibold text-text-primary">September 8, 2025</h3>
//                                 <p class="text-text-secondary">Ganesh Chaturthi Celebrations</p>
//                             </div>
//                         </div>
//                         <p class="text-text-secondary mb-6">Today marks the auspicious celebration of Lord Ganesha, the remover of obstacles. Communities across India are celebrating with elaborate decorations, traditional sweets, and cultural performances.</p>
//                         <div class="flex items-center justify-between">
//                             <span class="text-sm text-text-secondary">Next Festival: Navratri in 12 days</span>
//                             <a href="festival_calendar_living_cultural_timeline.html" class="text-primary hover:text-primary-600 font-medium">View Calendar →</a>
//                         </div>
//                     </div>
//                 </div>
                
//                 <!-- Upcoming Festivals Countdown -->
//                 <div>
//                     <h3 class="text-2xl font-headlines font-semibold text-text-primary mb-6">Upcoming Celebrations</h3>
//                     <div class="space-y-4">
//                         <div class="card-cultural p-6 flex items-center justify-between">
//                             <div>
//                                 <h4 class="font-headlines font-semibold text-text-primary">Navratri</h4>
//                                 <p class="text-text-secondary text-sm">Nine nights of divine celebration</p>
//                             </div>
//                             <div class="text-right">
//                                 <div class="text-2xl font-bold text-primary">12</div>
//                                 <div class="text-sm text-text-secondary">days</div>
//                             </div>
//                         </div>
                        
//                         <div class="card-cultural p-6 flex items-center justify-between">
//                             <div>
//                                 <h4 class="font-headlines font-semibold text-text-primary">Diwali</h4>
//                                 <p class="text-text-secondary text-sm">Festival of lights and prosperity</p>
//                             </div>
//                             <div class="text-right">
//                                 <div class="text-2xl font-bold text-primary">43</div>
//                                 <div class="text-sm text-text-secondary">days</div>
//                             </div>
//                         </div>
                        
//                         <div class="card-cultural p-6 flex items-center justify-between">
//                             <div>
//                                 <h4 class="font-headlines font-semibold text-text-primary">Karva Chauth</h4>
//                                 <p class="text-text-secondary text-sm">Sacred bond of marriage</p>
//                             </div>
//                             <div class="text-right">
//                                 <div class="text-2xl font-bold text-primary">32</div>
//                                 <div class="text-sm text-text-secondary">days</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <!-- Community Spotlight -->
//     <section class="py-16 bg-surface">
//         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div class="text-center mb-12">
//                 <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Community Stories</h2>
//                 <p class="text-xl text-text-secondary max-w-3xl mx-auto">Discover authentic cultural experiences shared by our global community</p>
//             </div>
            
//             <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <!-- Story 1 -->
//                 <div class="card-cultural overflow-hidden">
//                     <div class="aspect-w-16 aspect-h-9 overflow-hidden">
//                         <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Diwali celebration" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                     </div>
//                     <div class="p-6">
//                         <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">My First Diwali in Mumbai</h3>
//                         <p class="text-text-secondary text-sm mb-4">Sarah from Canada shares her magical experience celebrating the festival of lights with a local family in Mumbai...</p>
//                         <div class="flex items-center justify-between">
//                             <div class="flex items-center">
//                                 <img src="https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="Sarah" class="w-8 h-8 rounded-full mr-2" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                                 <span class="text-sm text-text-secondary">Sarah M.</span>
//                             </div>
//                             <span class="text-xs text-text-secondary">2 days ago</span>
//                         </div>
//                     </div>
//                 </div>
                
//                 <!-- Story 2 -->
//                 <div class="card-cultural overflow-hidden">
//                     <div class="aspect-w-16 aspect-h-9 overflow-hidden">
//                         <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop" alt="Kathak dance" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                     </div>
//                     <div class="p-6">
//                         <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Learning Kathak at 50</h3>
//                         <p class="text-text-secondary text-sm mb-4">Priya Sharma's inspiring journey of discovering classical dance later in life and connecting with her cultural roots...</p>
//                         <div class="flex items-center justify-between">
//                             <div class="flex items-center">
//                                 <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Priya" class="w-8 h-8 rounded-full mr-2" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                                 <span class="text-sm text-text-secondary">Priya S.</span>
//                             </div>
//                             <span class="text-xs text-text-secondary">5 days ago</span>
//                         </div>
//                     </div>
//                 </div>
                
//                 <!-- Story 3 -->
//                 <div class="card-cultural overflow-hidden">
//                     <div class="aspect-w-16 aspect-h-9 overflow-hidden">
//                         <img src="https://images.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg" alt="Traditional cooking" class="w-full h-48 object-cover" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                     </div>
//                     <div class="p-6">
//                         <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Grandmother's Recipe Revival</h3>
//                         <p class="text-text-secondary text-sm mb-4">Arjun rediscovers his family's traditional Bengali recipes and the stories behind each dish...</p>
//                         <div class="flex items-center justify-between">
//                             <div class="flex items-center">
//                                 <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Arjun" class="w-8 h-8 rounded-full mr-2" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                                 <span class="text-sm text-text-secondary">Arjun K.</span>
//                             </div>
//                             <span class="text-xs text-text-secondary">1 week ago</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             <div class="text-center mt-12">
//                 <button class="btn-secondary">Share Your Story</button>
//             </div>
//         </div>
//     </section>

//     <!-- Performance Previews -->
//     <section class="py-16 bg-background">
//         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div class="text-center mb-12">
//                 <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Cultural Performances</h2>
//                 <p class="text-xl text-text-secondary max-w-3xl mx-auto">Experience the grace and power of India's performing arts traditions</p>
//             </div>
            
//             <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <!-- Performance 1 -->
//                 <div class="card-cultural overflow-hidden group">
//                     <div class="relative overflow-hidden">
//                         <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop" alt="Bharatanatyam performance" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                         <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <button class="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all">
//                                 <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
//                                 </svg>
//                             </button>
//                         </div>
//                         <div class="absolute top-4 left-4 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
//                             Classical Dance
//                         </div>
//                     </div>
//                     <div class="p-6">
//                         <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Bharatanatyam: The Divine Dance</h3>
//                         <p class="text-text-secondary text-sm mb-4">Explore the spiritual expressions and intricate movements of Tamil Nadu's classical dance form</p>
//                         <div class="flex items-center text-xs text-text-secondary">
//                             <span>Duration: 8:42</span>
//                             <span class="mx-2">•</span>
//                             <span>Tamil Nadu</span>
//                         </div>
//                     </div>
//                 </div>
                
//                 <!-- Performance 2 -->
//                 <div class="card-cultural overflow-hidden group">
//                     <div class="relative overflow-hidden">
//                         <img src="https://images.pexels.com/photos/6249509/pexels-photo-6249509.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Sitar performance" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                         <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <button class="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all">
//                                 <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
//                                 </svg>
//                             </button>
//                         </div>
//                         <div class="absolute top-4 left-4 bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
//                             Classical Music
//                         </div>
//                     </div>
//                     <div class="p-6">
//                         <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Raga Yaman: Evening Melody</h3>
//                         <p class="text-text-secondary text-sm mb-4">Listen to the soul-stirring sounds of the sitar in this traditional evening raga</p>
//                         <div class="flex items-center text-xs text-text-secondary">
//                             <span>Duration: 12:15</span>
//                             <span class="mx-2">•</span>
//                             <span>Hindustani Classical</span>
//                         </div>
//                     </div>
//                 </div>
                
//                 <!-- Performance 3 -->
//                 <div class="card-cultural overflow-hidden group">
//                     <div class="relative overflow-hidden">
//                         <img src="https://images.pixabay.com/photo/2017/08/06/12/52/classical-dance-2592655_1280.jpg" alt="Kathak performance" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                         <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <button class="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all">
//                                 <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
//                                 </svg>
//                             </button>
//                         </div>
//                         <div class="absolute top-4 left-4 bg-accent text-white px-2 py-1 rounded text-xs font-medium">
//                             Folk Dance
//                         </div>
//                     </div>
//                     <div class="p-6">
//                         <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Rajasthani Folk: Desert Rhythms</h3>
//                         <p class="text-text-secondary text-sm mb-4">Experience the vibrant energy and colorful traditions of Rajasthan's folk performances</p>
//                         <div class="flex items-center text-xs text-text-secondary">
//                             <span>Duration: 6:30</span>
//                             <span class="mx-2">•</span>
//                             <span>Rajasthan</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             <div class="text-center mt-12">
//                 <a href="arts_crafts_gallery_living_heritage_showcase.html" class="btn-accent">Explore All Performances</a>
//             </div>
//         </div>
//     </section>

//     <!-- Cultural Discovery Paths -->
//     <section class="py-16 bg-surface">
//         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div class="text-center mb-12">
//                 <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Begin Your Cultural Journey</h2>
//                 <p class="text-xl text-text-secondary max-w-3xl mx-auto">Choose your path to discover the rich tapestry of Indian heritage</p>
//             </div>
            
//             <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 <!-- Path 1: Festivals -->
//                 <a href="festival_calendar_living_cultural_timeline.html" class="card-cultural p-8 text-center group hover:scale-105 transition-transform duration-300">
//                     <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
//                         <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                             <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l3.707 3.707A1 1 0 0018 18V8a1 1 0 00-.293-.707z" clip-rule="evenodd"/>
//                         </svg>
//                     </div>
//                     <h3 class="text-xl font-headlines font-semibold text-text-primary mb-4">Sacred Celebrations</h3>
//                     <p class="text-text-secondary">Immerse yourself in India's vibrant festival calendar and spiritual traditions</p>
//                 </a>
                
//                 <!-- Path 2: Regional Culture -->
//                 <a href="regional_explorer_interactive_cultural_map.html" class="card-cultural p-8 text-center group hover:scale-105 transition-transform duration-300">
//                     <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-600 transition-colors">
//                         <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                             <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
//                         </svg>
//                     </div>
//                     <h3 class="text-xl font-headlines font-semibold text-text-primary mb-4">Regional Treasures</h3>
//                     <p class="text-text-secondary">Explore the unique cultural identity of each Indian state and region</p>
//                 </a>
                
//                 <!-- Path 3: Arts & Crafts -->
//                 <a href="arts_crafts_gallery_living_heritage_showcase.html" class="card-cultural p-8 text-center group hover:scale-105 transition-transform duration-300">
//                     <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-600 transition-colors">
//                         <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                             <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
//                             <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
//                         </svg>
//                     </div>
//                     <h3 class="text-xl font-headlines font-semibold text-text-primary mb-4">Living Arts</h3>
//                     <p class="text-text-secondary">Discover traditional crafts, performances, and artistic expressions</p>
//                 </a>
                
//                 <!-- Path 4: Culinary Heritage -->
//                 <a href="culinary_heritage_explorer_regional_flavor_journey.html" class="card-cultural p-8 text-center group hover:scale-105 transition-transform duration-300">
//                     <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
//                         <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                             <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd"/>
//                         </svg>
//                     </div>
//                     <h3 class="text-xl font-headlines font-semibold text-text-primary mb-4">Flavors of India</h3>
//                     <p class="text-text-secondary">Taste the diverse culinary traditions that tell stories of culture and history</p>
//                 </a>
                
//                 <!-- Path 5: Learning Hub -->
//                 <a href="interactive_learning_hub_cultural_education_center.html" class="card-cultural p-8 text-center group hover:scale-105 transition-transform duration-300">
//                     <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-600 transition-colors">
//                         <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                             <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
//                         </svg>
//                     </div>
//                     <h3 class="text-xl font-headlines font-semibold text-text-primary mb-4">Cultural Learning</h3>
//                     <p class="text-text-secondary">Engage with interactive lessons and deepen your cultural understanding</p>
//                 </a>
                
//                 <!-- Path 6: Community -->
//                 <section class="py-16 bg-surface">
//         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div class="text-center mb-12">
//                 <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Learn Together</h2>
//                 <p class="text-xl text-text-secondary max-w-3xl mx-auto">Join study groups, participate in discussions, and share your cultural discoveries</p>
//             </div>
            
//             <div class="grid lg:grid-cols-2 gap-12">
//                 <!-- Study Groups -->
//                 <div class="card-cultural p-8">
//                     <h3 class="text-2xl font-headlines font-semibold text-text-primary mb-6">Active Study Groups</h3>
                    
//                     <div class="space-y-4">
//                         <div class="flex items-center p-4 bg-primary-50 rounded-lg">
//                             <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Study group" class="w-12 h-12 rounded-full mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                             <div class="flex-1">
//                                 <h4 class="font-headlines font-semibold text-text-primary">Classical Dance Appreciation</h4>
//                                 <p class="text-sm text-text-secondary">24 members • Next session: Tomorrow 7 PM IST</p>
//                             </div>
//                             <button class="btn-primary text-sm px-4 py-2">Join</button>
//                         </div>
                        
//                         <div class="flex items-center p-4 bg-secondary-50 rounded-lg">
//                             <img src="https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="Study group" class="w-12 h-12 rounded-full mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                             <div class="flex-1">
//                                 <h4 class="font-headlines font-semibold text-text-primary">Mughal History Deep Dive</h4>
//                                 <p class="text-sm text-text-secondary">18 members • Next session: Friday 8 PM IST</p>
//                             </div>
//                             <button class="btn-secondary text-sm px-4 py-2">Join</button>
//                         </div>
                        
//                         <div class="flex items-center p-4 bg-accent-50 rounded-lg">
//                             <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Study group" class="w-12 h-12 rounded-full mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
//                             <div class="flex-1">
//                                 <h4 class="font-headlines font-semibold text-text-primary">Regional Cuisine Exploration</h4>
//                                 <p class="text-sm text-text-secondary">31 members • Next session: Sunday 6 PM IST</p>
//                             </div>
//                             <button class="btn-accent text-sm px-4 py-2">Join</button>
//                         </div>
//                     </div>
                    
//                     <div class="text-center mt-6">
//                         <button class="btn-primary">Create Study Group</button>
//                     </div>
//                 </div>
                
//                 <!-- Discussion Forum -->
//                 <div class="card-cultural p-8">
//                     <h3 class="text-2xl font-headlines font-semibold text-text-primary mb-6">Recent Discussions</h3>
                    
//                     <div class="space-y-4">
//                         <div class="border-l-4 border-primary pl-4">
//                             <h4 class="font-headlines font-semibold text-text-primary mb-1">The Evolution of Indian Classical Music</h4>
//                             <p class="text-sm text-text-secondary mb-2">Exploring how ragas have evolved over centuries and their regional variations...</p>
//                             <div class="flex items-center text-xs text-text-secondary">
//                                 <span>Started by Ravi Kumar</span>
//                                 <span class="mx-2">•</span>
//                                 <span>12 replies</span>
//                                 <span class="mx-2">•</span>
//                                 <span>2 hours ago</span>
//                             </div>
//                         </div>
                        
//                         <div class="border-l-4 border-secondary pl-4">
//                             <h4 class="font-headlines font-semibold text-text-primary mb-1">Symbolism in Temple Architecture</h4>
//                             <p class="text-sm text-text-secondary mb-2">Understanding the deeper meanings behind architectural elements in South Indian temples...</p>
//                             <div class="flex items-center text-xs text-text-secondary">
//                                 <span>Started by Priya Sharma</span>
//                                 <span class="mx-2">•</span>
//                                 <span>8 replies</span>
//                                 <span class="mx-2">•</span>
//                                 <span>5 hours ago</span>
//                             </div>
//                         </div>
                        
//                         <div class="border-l-4 border-accent pl-4">
//                             <h4 class="font-headlines font-semibold text-text-primary mb-1">Modern Adaptations of Traditional Festivals</h4>
//                             <p class="text-sm text-text-secondary mb-2">How are traditional festivals being celebrated in contemporary urban settings...</p>
//                             <div class="flex items-center text-xs text-text-secondary">
//                                 <span>Started by Arjun Patel</span>
//                                 <span class="mx-2">•</span>
//                                 <span>15 replies</span>
//                                 <span class="mx-2">•</span>
//                                 <span>1 day ago</span>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div class="text-center mt-6">
//                         <button class="btn-secondary">Join Discussion</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//             </div>
//         </div>
//     </section>

//     <!-- Footer -->
//     <footer class="bg-text-primary text-surface py-12">
//         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div class="grid md:grid-cols-4 gap-8">
//                 <!-- Brand -->
//                 <div class="md:col-span-1">
//                     <div class="flex items-center mb-4">
//                         <svg class="h-8 w-8 text-primary" viewBox="0 0 100 100" fill="currentColor">
//                             <circle cx="50" cy="20" r="8"/>
//                             <path d="M30 35 L50 25 L70 35 L65 60 L35 60 Z"/>
//                             <rect x="45" y="60" width="10" height="25"/>
//                             <ellipse cx="50" cy="90" rx="15" ry="5"/>
//                         </svg>
//                         <span class="ml-2 text-xl font-headlines font-semibold text-primary">Heritage India</span>
//                     </div>
//                     <p class="text-sm text-gray-300 mb-4">Discover the soul of India through its living heritage, traditions, and cultural treasures.</p>
//                     <div class="flex space-x-4">
//                         <a href="javascript:void(0)" class="text-gray-300 hover:text-primary transition-colors">
//                             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"/>
//                             </svg>
//                         </a>
//                         <a href="javascript:void(0)" class="text-gray-300 hover:text-primary transition-colors">
//                             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
//                             </svg>
//                         </a>
//                         <a href="javascript:void(0)" class="text-gray-300 hover:text-primary transition-colors">
//                             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fill-rule="evenodd" d="M12.017 0C18.396 0 20.396 1.104 20.396 4.297v11.406C20.396 18.896 18.396 20 12.017 20H7.983C1.604 20-.396 18.896-.396 15.703V4.297C-.396 1.104 1.604 0 7.983 0h4.034zm-5.017 7v6h2v-6H7zm1-2a1 1 0 100-2 1 1 0 000 2zm3 2v6h2v-3.5c0-1.5 1-2.5 2.5-2.5s1.5 1 1.5 2.5V13h2v-4c0-2-1.5-3-3.5-3S11 7.5 11 7z" clip-rule="evenodd"/>
//                             </svg>
//                         </a>
//                     </div>
//                 </div>
                
//                 <!-- Quick Links -->
//                 <div>
//                     <h3 class="text-lg font-headlines font-semibold text-primary mb-4">Explore</h3>
//                     <ul class="space-y-2">
//                         <li><a href="regional_explorer_interactive_cultural_map.html" class="text-gray-300 hover:text-primary transition-colors">Regional Culture</a></li>
//                         <li><a href="festival_calendar_living_cultural_timeline.html" class="text-gray-300 hover:text-primary transition-colors">Festival Calendar</a></li>
//                         <li><a href="arts_crafts_gallery_living_heritage_showcase.html" class="text-gray-300 hover:text-primary transition-colors">Arts & Crafts</a></li>
//                         <li><a href="culinary_heritage_explorer_regional_flavor_journey.html" class="text-gray-300 hover:text-primary transition-colors">Culinary Heritage</a></li>
//                     </ul>
//                 </div>
                
//                 <!-- Community -->
//                 <div>
//                     <h3 class="text-lg font-headlines font-semibold text-primary mb-4">Community</h3>
//                     <ul class="space-y-2">
//                         <li><a href="javascript:void(0)" class="text-gray-300 hover:text-primary transition-colors">Share Your Story</a></li>
//                         <li><a href="javascript:void(0)" class="text-gray-300 hover:text-primary transition-colors">Cultural Forum</a></li>
//                         <li><a href="interactive_learning_hub_cultural_education_center.html" class="text-gray-300 hover:text-primary transition-colors">Learning Hub</a></li>
//                         <li><a href="javascript:void(0)" class="text-gray-300 hover:text-primary transition-colors">Events</a></li>
//                     </ul>
//                 </div>
                
//                 <!-- Newsletter -->
//                 <div>
//                     <h3 class="text-lg font-headlines font-semibold text-primary mb-4">Stay Connected</h3>
//                     <p class="text-sm text-gray-300 mb-4">Get cultural insights and festival updates delivered to your inbox.</p>
//                     <div class="flex">
//                         <input type="email" placeholder="Your email" class="input-cultural flex-1 mr-2 text-text-primary" />
//                         <button class="btn-primary px-4 py-2">Subscribe</button>
//                     </div>
//                 </div>
//             </div>
            
//             <div class="border-t border-gray-700 mt-8 pt-8 text-center">
//                 <p class="text-sm text-gray-300">© 2025 Heritage India. All Rights Reserved. Celebrating India's cultural legacy with respect and authenticity.</p>
//             </div>
//         </div>
//     </footer>

//     <script>
//         // Mobile menu toggle
//         document.getElementById('mobile-menu-button').addEventListener('click', function() {
//             const mobileMenu = document.getElementById('mobile-menu');
//             mobileMenu.classList.toggle('hidden');
//         });

//         // Hero slider functionality
//         let currentSlide = 1;
//         const totalSlides = 3;
        
//         function showSlide(slideNumber) {
//             // Hide all slides
//             for (let i = 1; i <= totalSlides; i++) {
//                 const slide = document.getElementById('hero-slide-' + i);
//                 const dot = document.querySelector('.hero-dot[data-slide="' + i + '"]');

//                 if (i === slideNumber) {
//                     slide.style.opacity = '1';
//                     dot.style.opacity = '1';
//                 } else {
//                     slide.style.opacity = '0';
//                     dot.style.opacity = '0.5';
//                 }
//             }
//         }
        
//         // Auto-rotate slides
//         setInterval(() => {
//             currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
//             showSlide(currentSlide);
//         }, 5000);
        
//         // Dot navigation
//         document.querySelectorAll('.hero-dot').forEach(dot => {
//             dot.addEventListener('click', function() {
//                 currentSlide = parseInt(this.dataset.slide);
//                 showSlide(currentSlide);
//             });
//         });

//         // Interactive map state clicks
//         document.querySelectorAll('.map-state').forEach(state => {
//             state.addEventListener('click', function() {
//                 const stateName = this.dataset.state;
//                 alert('Exploring ' + stateName + '! This would navigate to detailed cultural information about ' + stateName + '.');
//             });
//         });

//         // Initialize first slide
//         showSlide(1);
//     </script>
// </body>
// </html>
//   `;

//   if (Platform.OS === "web") {
//     return (
//       <iframe
//         srcDoc={html}
//         style={{ width: "100%", height: "100%", border: "none" }}
//         title="WebView Fallback"
//       />
//     );
//   }

//   return <WebView originWhitelist={["*"]} source={{ html }} style={{ flex: 1 }} />;
// }


import React from "react";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Heritage India - Cultural Heritage Hub</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        :root {
            --color-primary: #B8860B;
            --color-primary-50: #FEF9E7;
            --color-primary-100: #FDF2D0;
            --color-primary-600: #9A7209;
            --color-secondary: #8B4513;
            --color-secondary-50: #F5F0EB;
            --color-accent: #CD853F;
            --color-accent-50: #FBF7F2;
            --color-background: #FDF5E6;
            --color-surface: #F5F5DC;
            --color-text-primary: #2F1B14;
            --color-text-secondary: #5D4E37;
            --color-success: #228B22;
            --color-warning: #DAA520;
            --color-error: #A0522D;
        }

        /* Add missing button styles */
        .btn-primary {
            background-color: var(--color-primary);
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .btn-primary:hover {
            background-color: var(--color-primary-600);
        }

        .btn-secondary {
            background-color: white;
            color: var(--color-primary);
            padding: 12px 24px;
            border-radius: 12px;
            border: 2px solid var(--color-primary);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .btn-secondary:hover {
            background-color: var(--color-primary-50);
        }

        .btn-accent {
            background-color: var(--color-accent);
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            border: none;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .card-cultural {
            background-color: white;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(139, 69, 19, 0.1);
            transition: all 0.3s ease;
        }

        .input-cultural {
            padding: 8px 12px;
            border: 1px solid var(--color-primary);
            border-radius: 8px;
            background-color: white;
        }

        .font-headlines {
            font-family: 'Georgia', serif;
        }

        .font-body {
            font-family: 'Arial', sans-serif;
        }

        .hero-slide {
            transition: opacity 1s ease-in-out;
        }

        .cultural-dance {
            animation: gentle-sway 3s ease-in-out infinite;
        }

        @keyframes gentle-sway {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
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
                        "primary-600": "var(--color-primary-600)",
                        secondary: "var(--color-secondary)",
                        "secondary-50": "var(--color-secondary-50)",
                        accent: "var(--color-accent)",
                        "accent-50": "var(--color-accent-50)",
                        background: "var(--color-background)",
                        surface: "var(--color-surface)",
                        "text-primary": "var(--color-text-primary)",
                        "text-secondary": "var(--color-text-secondary)",
                        success: "var(--color-success)",
                        warning: "var(--color-warning)",
                        error: "var(--color-error)",
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background text-text-primary">


    <!-- Hero Section with Rotating Backgrounds -->
    <section class="relative h-screen overflow-hidden">
        <!-- Hero Slide 1 -->
        <div id="hero-slide-1" class="hero-slide absolute inset-0 bg-cover bg-center" style="background-image: linear-gradient(rgba(47, 27, 20, 0.4), rgba(47, 27, 20, 0.4)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop');">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white max-w-4xl px-4">
                    <h1 class="text-5xl md:text-7xl font-headlines font-bold mb-6 cultural-dance">Discover India's Living Heritage</h1>
                    <p class="text-xl md:text-2xl font-body mb-8 opacity-90">Experience the vibrant tapestry of traditions, festivals, and cultural treasures that define the soul of India</p>
                    <button class="btn-primary text-lg px-8 py-4">Begin Your Cultural Journey</button>
                </div>
            </div>
        </div>
        
        <!-- Hero Slide 2 -->
        <div id="hero-slide-2" class="hero-slide absolute inset-0 bg-cover bg-center opacity-0" style="background-image: linear-gradient(rgba(47, 27, 20, 0.4), rgba(47, 27, 20, 0.4)), url('https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=2070');">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white max-w-4xl px-4">
                    <h1 class="text-5xl md:text-7xl font-headlines font-bold mb-6 cultural-dance">Celebrate Sacred Traditions</h1>
                    <p class="text-xl md:text-2xl font-body mb-8 opacity-90">From Onam's golden harvest to Diwali's festival of lights, immerse yourself in India's spiritual celebrations</p>
                    <button class="btn-primary text-lg px-8 py-4">Explore Festivals</button>
                </div>
            </div>
        </div>
        
        <!-- Hero Slide 3 -->
        <div id="hero-slide-3" class="hero-slide absolute inset-0 bg-cover bg-center opacity-0" style="background-image: linear-gradient(rgba(47, 27, 20, 0.4), rgba(47, 27, 20, 0.4)), url('https://images.pixabay.com/photo/2017/08/06/12/52/classical-dance-2592655_1280.jpg');">
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white max-w-4xl px-4">
                    <h1 class="text-5xl md:text-7xl font-headlines font-bold mb-6 cultural-dance">Arts That Tell Stories</h1>
                    <p class="text-xl md:text-2xl font-body mb-8 opacity-90">Witness the grace of classical dance, the mastery of ancient crafts, and the poetry of cultural expression</p>
                    <button class="btn-primary text-lg px-8 py-4">Discover Arts</button>
                </div>
            </div>
        </div>
        
        <!-- Hero Navigation Dots -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            <button class="hero-dot w-3 h-3 rounded-full bg-white opacity-100" data-slide="1"></button>
            <button class="hero-dot w-3 h-3 rounded-full bg-white opacity-50" data-slide="2"></button>
            <button class="hero-dot w-3 h-3 rounded-full bg-white opacity-50" data-slide="3"></button>
        </div>
    </section>

    <!-- Cultural Calendar Widget -->
    <section class="py-16 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-headlines font-bold text-primary mb-6">Today in Indian Culture</h2>
                    <div class="card-cultural p-8">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-headlines font-semibold text-text-primary">September 19, 2025</h3>
                                <p class="text-text-secondary">Ganesh Chaturthi Celebrations</p>
                            </div>
                        </div>
                        <p class="text-text-secondary mb-6">Today marks the auspicious celebration of Lord Ganesha, the remover of obstacles. Communities across India are celebrating with elaborate decorations, traditional sweets, and cultural performances.</p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-text-secondary">Next Festival: Navratri in 12 days</span>
                            <a href="#" class="text-primary hover:text-primary-600 font-medium">View Calendar →</a>
                        </div>
                    </div>
                </div>
                
                <!-- Upcoming Festivals Countdown -->
                <div>
                    <h3 class="text-2xl font-headlines font-semibold text-text-primary mb-6">Upcoming Celebrations</h3>
                    <div class="space-y-4">
                        <div class="card-cultural p-6 flex items-center justify-between">
                            <div>
                                <h4 class="font-headlines font-semibold text-text-primary">Navratri</h4>
                                <p class="text-text-secondary text-sm">Nine nights of divine celebration</p>
                            </div>
                            <div class="text-right">
                                <div class="text-2xl font-bold text-primary">12</div>
                                <div class="text-sm text-text-secondary">days</div>
                            </div>
                        </div>
                        
                        <div class="card-cultural p-6 flex items-center justify-between">
                            <div>
                                <h4 class="font-headlines font-semibold text-text-primary">Diwali</h4>
                                <p class="text-text-secondary text-sm">Festival of lights and prosperity</p>
                            </div>
                            <div class="text-right">
                                <div class="text-2xl font-bold text-primary">43</div>
                                <div class="text-sm text-text-secondary">days</div>
                            </div>
                        </div>
                        
                        <div class="card-cultural p-6 flex items-center justify-between">
                            <div>
                                <h4 class="font-headlines font-semibold text-text-primary">Karva Chauth</h4>
                                <p class="text-text-secondary text-sm">Sacred bond of marriage</p>
                            </div>
                            <div class="text-right">
                                <div class="text-2xl font-bold text-primary">32</div>
                                <div class="text-sm text-text-secondary">days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Community Spotlight -->
    <section class="py-16 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Community Stories</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Discover authentic cultural experiences shared by our global community</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Story 1 -->
                <div class="card-cultural overflow-hidden">
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img src="https://www.hindustantimes.com/ht-img/img/2024/10/29/original/Largest_Kandil_in_India_1730180896501.JPG" alt="Diwali celebration" class="w-full h-48 object-cover" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">My First Diwali in Mumbai</h3>
                        <p class="text-text-secondary text-sm mb-4">Sarah from Canada shares her magical experience celebrating the festival of lights with a local family in Mumbai...</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full bg-primary-50 mr-2"></div>
                                <span class="text-sm text-text-secondary">Sarah M.</span>
                            </div>
                            <span class="text-xs text-text-secondary">2 days ago</span>
                        </div>
                    </div>
                </div>
                
                <!-- Story 2 -->
                <div class="card-cultural overflow-hidden">
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img src="https://springofrhythm.com/wp-content/uploads/2021/11/kathak-dance.jpg" alt="Kathak dance" class="w-full h-48 object-cover" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Learning Kathak at 50</h3>
                        <p class="text-text-secondary text-sm mb-4">Priya Sharma's inspiring journey of discovering classical dance later in life and connecting with her cultural roots...</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full bg-primary-50 mr-2"></div>
                                <span class="text-sm text-text-secondary">Priya S.</span>
                            </div>
                            <span class="text-xs text-text-secondary">5 days ago</span>
                        </div>
                    </div>
                </div>
                
                <!-- Story 3 -->
                <div class="card-cultural overflow-hidden">
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img src="https://www.allrecipes.com/thmb/iGh9kHORBPDpNTLizBxIBRQZCyg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-15985-GrandmasCornPudding-DDMFS-4x3-dc8c85c9cefb4ba3b1d0fc3ff41516f3.jpg" alt="Traditional cooking" class="w-full h-48 object-cover" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Grandmother's Recipe Revival</h3>
                        <p class="text-text-secondary text-sm mb-4">Arjun rediscovers his family's traditional Bengali recipes and the stories behind each dish...</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="w-8 h-8 rounded-full bg-primary-50 mr-2"></div>
                                <span class="text-sm text-text-secondary">Arjun K.</span>
                            </div>
                            <span class="text-xs text-text-secondary">1 week ago</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-12">
                <button class="btn-secondary">Share Your Story</button>
            </div>
        </div>
    </section>

    <!-- Community Learning -->
    <section class="py-16 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Learn Together</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Join study groups, participate in discussions, and share your cultural discoveries</p>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Study Groups -->
                <div class="card-cultural p-8">
                    <h3 class="text-2xl font-headlines font-semibold text-text-primary mb-6">Active Study Groups</h3>
                    
                    <div class="space-y-4">
                        <div class="flex items-center p-4 bg-primary-50 rounded-lg">
                            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Study group" class="w-12 h-12 rounded-full mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                            <div class="flex-1">
                                <h4 class="font-headlines font-semibold text-text-primary">Classical Dance Appreciation</h4>
                                <p class="text-sm text-text-secondary">24 members • Next session: Tomorrow 7 PM IST</p>
                            </div>
                            <button class="btn-primary text-sm px-4 py-2">Join</button>
                        </div>
                        
                        <div class="flex items-center p-4 bg-secondary-50 rounded-lg">
                            <img src="https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg" alt="Study group" class="w-12 h-12 rounded-full mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                            <div class="flex-1">
                                <h4 class="font-headlines font-semibold text-text-primary">Mughal History Deep Dive</h4>
                                <p class="text-sm text-text-secondary">18 members • Next session: Friday 8 PM IST</p>
                            </div>
                            <button class="btn-secondary text-sm px-4 py-2">Join</button>
                        </div>
                        
                        <div class="flex items-center p-4 bg-accent-50 rounded-lg">
                            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260" alt="Study group" class="w-12 h-12 rounded-full mr-4" onerror="this.src='https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; this.onerror=null;" />
                            <div class="flex-1">
                                <h4 class="font-headlines font-semibold text-text-primary">Regional Cuisine Exploration</h4>
                                <p class="text-sm text-text-secondary">31 members • Next session: Sunday 6 PM IST</p>
                            </div>
                            <button class="btn-accent text-sm px-4 py-2">Join</button>
                        </div>
                    </div>
                    
                    <div class="text-center mt-6">
                        <button class="btn-primary">Create Study Group</button>
                    </div>
                </div>
                
                <!-- Discussion Forum -->
                <div class="card-cultural p-8">
                    <h3 class="text-2xl font-headlines font-semibold text-text-primary mb-6">Recent Discussions</h3>
                    
                    <div class="space-y-4">
                        <div class="border-l-4 border-primary pl-4">
                            <h4 class="font-headlines font-semibold text-text-primary mb-1">The Evolution of Indian Classical Music</h4>
                            <p class="text-sm text-text-secondary mb-2">Exploring how ragas have evolved over centuries and their regional variations...</p>
                            <div class="flex items-center text-xs text-text-secondary">
                                <span>Started by Ravi Kumar</span>
                                <span class="mx-2">•</span>
                                <span>12 replies</span>
                                <span class="mx-2">•</span>
                                <span>2 hours ago</span>
                            </div>
                        </div>
                        
                        <div class="border-l-4 border-secondary pl-4">
                            <h4 class="font-headlines font-semibold text-text-primary mb-1">Symbolism in Temple Architecture</h4>
                            <p class="text-sm text-text-secondary mb-2">Understanding the deeper meanings behind architectural elements in South Indian temples...</p>
                            <div class="flex items-center text-xs text-text-secondary">
                                <span>Started by Priya Sharma</span>
                                <span class="mx-2">•</span>
                                <span>8 replies</span>
                                <span class="mx-2">•</span>
                                <span>5 hours ago</span>
                            </div>
                        </div>
                        
                        <div class="border-l-4 border-accent pl-4">
                            <h4 class="font-headlines font-semibold text-text-primary mb-1">Modern Adaptations of Traditional Festivals</h4>
                            <p class="text-sm text-text-secondary mb-2">How are traditional festivals being celebrated in contemporary urban settings...</p>
                            <div class="flex items-center text-xs text-text-secondary">
                                <span>Started by Arjun Patel</span>
                                <span class="mx-2">•</span>
                                <span>15 replies</span>
                                <span class="mx-2">•</span>
                                <span>1 day ago</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center mt-6">
                        <button class="btn-secondary">Join Discussion</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-text-primary text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                <!-- Brand -->
                <div class="md:col-span-1">
                    <div class="flex items-center mb-4">
                        <svg class="h-8 w-8 text-primary" viewBox="0 0 100 100" fill="currentColor">
                            <circle cx="50" cy="20" r="8"/>
                            <path d="M30 35 L50 25 L70 35 L65 60 L35 60 Z"/>
                            <rect x="45" y="60" width="10" height="25"/>
                            <ellipse cx="50" cy="90" rx="15" ry="5"/>
                        </svg>
                        <span class="ml-2 text-xl font-headlines font-semibold text-primary">Heritage India</span>
                    </div>
                    <p class="text-sm text-gray-300 mb-4">Discover the soul of India through its living heritage, traditions, and cultural treasures.</p>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-headlines font-semibold text-primary mb-4">Explore</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-primary">Regional Culture</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-primary">Festival Calendar</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-primary">Arts & Crafts</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-primary">Culinary Heritage</a></li>
                    </ul>
                </div>
                
                <!-- Community -->
                <div>
                    <h3 class="text-lg font-headlines font-semibold text-primary mb-4">Community</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-primary">Share Your Story</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-primary">Cultural Forum</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-primary">Learning Hub</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-primary">Events</a></li>
                    </ul>
                </div>
                
                <!-- Newsletter -->
                <div>
                    <h3 class="text-lg font-headlines font-semibold text-primary mb-4">Stay Connected</h3>
                    <p class="text-sm text-gray-300 mb-4">Get cultural insights and festival updates.</p>
                    <div class="flex">
                        <input type="email" placeholder="Your email" class="input-cultural flex-1 mr-2" />
                        <button class="btn-primary px-4 py-2">Subscribe</button>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                <p class="text-sm text-gray-300">© 2025 Heritage India. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Hero slider functionality
        let currentSlide = 1;
        const totalSlides = 3;
        
        function showSlide(slideNumber) {
            for (let i = 1; i <= totalSlides; i++) {
                const slide = document.getElementById('hero-slide-' + i);
                const dot = document.querySelector('.hero-dot[data-slide="' + i + '"]');

                if (slide && dot) {
                    if (i === slideNumber) {
                        slide.style.opacity = '1';
                        dot.style.opacity = '1';
                    } else {
                        slide.style.opacity = '0';
                        dot.style.opacity = '0.5';
                    }
                }
            }
        }
        
        // Auto-rotate slides
        setInterval(() => {
            currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
            showSlide(currentSlide);
        }, 5000);
        
        // Dot navigation
        document.querySelectorAll('.hero-dot').forEach(dot => {
            dot.addEventListener('click', function() {
                currentSlide = parseInt(this.dataset.slide);
                showSlide(currentSlide);
            });
        });

        // Initialize first slide
        showSlide(1);
    </script>
</body>
</html>
  `;

  if (Platform.OS === "web") {
    return (
      <iframe
        srcDoc={html}
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Heritage India WebView"
      />
    );
  }

  return (
    <WebView 
      originWhitelist={["*"]} 
      source={{ html }} 
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
    />
  );
}