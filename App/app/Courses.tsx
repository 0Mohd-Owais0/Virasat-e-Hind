




export const coursesHTML = `
<!DOCTYPE html>
<html lang="en">
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
    <section class="relative py-16 bg-gradient-to-br from-primary-50 to-accent-50 overflow-hidden">
        <div class="absolute inset-0 opacity-10">
            <svg viewBox="0 0 400 400" class="w-full h-full">
                <defs>
                    <pattern id="cultural-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="2" fill="currentColor" />
                        <path d="M10 20 L30 20 M20 10 L20 30" stroke="currentColor" stroke-width="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cultural-pattern)" />
            </svg>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div class="text-center mb-12">
                <div class="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-6">
                    <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                        <path
                            d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                        <path d="M6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span class="text-primary font-medium text-sm">Interactive Cultural Education</span>
                </div>

                <h1 class="text-5xl md:text-6xl font-headlines font-bold text-text-primary mb-6">
                    Discover India's Heritage
                    <span class="block text-primary">Through Learning</span>
                </h1>

                <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                    Embark on an interactive journey through India's rich cultural tapestry. Learn through games,
                    quizzes, and immersive experiences designed for all ages and learning styles.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button id="start-learning-btn" class="btn-primary text-lg px-8 py-4">Start Your Cultural
                        Journey</button>
                    <button class="btn-secondary text-lg px-8 py-4">Explore Learning Paths</button>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div class="text-center">
                    <div class="text-3xl font-bold text-primary mb-2">500+</div>
                    <div class="text-sm text-text-secondary">Interactive Lessons</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-primary mb-2">50+</div>
                    <div class="text-sm text-text-secondary">Cultural Topics</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-primary mb-2">25</div>
                    <div class="text-sm text-text-secondary">Achievement Badges</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-primary mb-2">10K+</div>
                    <div class="text-sm text-text-secondary">Active Learners</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Learning Dashboard -->
    <section class="py-16 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-3 gap-8">
                <!-- Progress Overview -->
                <div class="lg:col-span-2">
                    <div class="card-cultural p-8">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-2xl font-headlines font-semibold text-text-primary">Your Learning Journey
                            </h2>
                            <div class="flex items-center text-sm text-text-secondary">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                Level 3 Cultural Explorer
                            </div>
                        </div>

                        <!-- Progress Bars -->
                        <div class="space-y-6">
                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-sm font-medium text-text-primary">Indian History</span>
                                    <span class="text-sm text-text-secondary">75%</span>
                                </div>
                                <div class="w-full bg-accent-100 rounded-full h-3">
                                    <div class="level-indicator h-3 rounded-full" style="width: 75%"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-sm font-medium text-text-primary">Cultural Practices</span>
                                    <span class="text-sm text-text-secondary">60%</span>
                                </div>
                                <div class="w-full bg-accent-100 rounded-full h-3">
                                    <div class="level-indicator h-3 rounded-full" style="width: 60%"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-sm font-medium text-text-primary">Arts & Crafts</span>
                                    <span class="text-sm text-text-secondary">45%</span>
                                </div>
                                <div class="w-full bg-accent-100 rounded-full h-3">
                                    <div class="level-indicator h-3 rounded-full" style="width: 45%"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-sm font-medium text-text-primary">Regional Diversity</span>
                                    <span class="text-sm text-text-secondary">80%</span>
                                </div>
                                <div class="w-full bg-accent-100 rounded-full h-3">
                                    <div class="level-indicator h-3 rounded-full" style="width: 80%"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Recent Activity -->
                        <div class="mt-8">
                            <h3 class="text-lg font-headlines font-semibold text-text-primary mb-4">Recent Activity</h3>
                            <div class="space-y-3">
                                <div class="flex items-center p-3 bg-success-50 rounded-lg">
                                    <div class="w-8 h-8 bg-success rounded-full flex items-center justify-center mr-3">
                                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="text-sm font-medium text-text-primary">Completed "Mughal
                                            Architecture" quiz</div>
                                        <div class="text-xs text-text-secondary">2 hours ago • 95% score</div>
                                    </div>
                                </div>

                                <div class="flex items-center p-3 bg-primary-50 rounded-lg">
                                    <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="text-sm font-medium text-text-primary">Earned "Festival Expert"
                                            badge</div>
                                        <div class="text-xs text-text-secondary">Yesterday • Diwali traditions mastery
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Achievement Sidebar -->
                <div class="space-y-6">
                    <!-- Overall Progress -->
                    <div class="card-cultural p-6 text-center">
                        <div class="relative w-24 h-24 mx-auto mb-4">
                            <svg class="progress-ring w-24 h-24">
                                <circle class="progress-ring-circle" stroke="var(--color-primary)" stroke-width="4"
                                    fill="transparent" r="40" cx="48" cy="48" style="stroke-dashoffset: 75.36;" />
                            </svg>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <span class="text-xl font-bold text-primary">70%</span>
                            </div>
                        </div>
                        <h3 class="text-lg font-headlines font-semibold text-text-primary mb-2">Overall Progress</h3>
                        <p class="text-sm text-text-secondary">Cultural Explorer Level 3</p>
                    </div>

                    <!-- Recent Badges -->
                    <div class="card-cultural p-6">
                        <h3 class="text-lg font-headlines font-semibold text-text-primary mb-4">Recent Achievements</h3>
                        <div class="grid grid-cols-3 gap-3">
                            <div class="text-center">
                                <div
                                    class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 badge-glow">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <div class="text-xs text-text-secondary">Festival Expert</div>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                        <path fill-rule="evenodd"
                                            d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="text-xs text-text-secondary">Art Scholar</div>
                            </div>

                            <div class="text-center">
                                <div
                                    class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="text-xs text-text-secondary">Regional Guide</div>
                            </div>
                        </div>
                    </div>

                    <!-- Learning Streak -->
                    <div class="card-cultural p-6">
                        <h3 class="text-lg font-headlines font-semibold text-text-primary mb-4">Learning Streak</h3>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-primary mb-2">7</div>
                            <div class="text-sm text-text-secondary mb-4">Days in a row</div>
                            <div class="flex justify-center space-x-1">
                                <div class="w-6 h-6 bg-primary rounded-full"></div>
                                <div class="w-6 h-6 bg-primary rounded-full"></div>
                                <div class="w-6 h-6 bg-primary rounded-full"></div>
                                <div class="w-6 h-6 bg-primary rounded-full"></div>
                                <div class="w-6 h-6 bg-primary rounded-full"></div>
                                <div class="w-6 h-6 bg-primary rounded-full"></div>
                                <div class="w-6 h-6 bg-primary rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!-- Learning Paths -->
    <section class="py-16 bg-surface">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Choose Your Learning Path</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Structured learning journeys designed for
                    different interests and skill levels</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Beginner Path -->
                <div class="learning-card card-cultural p-6">
                    <div class="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-headlines font-semibold text-text-primary text-center mb-3">Cultural
                        Foundations</h3>
                    <p class="text-text-secondary text-center mb-6">Perfect for beginners exploring Indian culture for
                        the first time</p>

                    <div class="space-y-3 mb-6">
                        <div class="flex items-center text-sm">
                            <svg class="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="text-text-secondary">15 Interactive Lessons</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <svg class="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="text-text-secondary">Basic Cultural Concepts</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <svg class="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="text-text-secondary">5 Achievement Badges</span>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="text-sm text-text-secondary mb-2">Estimated Time: 2-3 weeks</div>
                        <button class="btn-primary w-full">Start Learning</button>
                    </div>
                </div>

                <!-- Intermediate Path -->
                <div class="learning-card card-cultural p-6">
                    <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                            <path
                                d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                            <path d="M6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-headlines font-semibold text-text-primary text-center mb-3">Cultural
                        Explorer</h3>
                    <p class="text-text-secondary text-center mb-6">Deep dive into regional diversity and historical
                        contexts</p>

                    <div class="space-y-3 mb-6">
                        <div class="flex items-center text-sm">
                            <svg class="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="text-text-secondary">25 Advanced Lessons</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <svg class="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="text-text-secondary">Regional Specializations</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <svg class="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="text-text-secondary">10 Achievement Badges</span>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="text-sm text-text-secondary mb-2">Estimated Time: 4-6 weeks</div>
                        <button class="btn-primary w-full">Continue Journey</button>
                    </div>
                </div>

                <!-- Advanced Path -->
                <div class="learning-card card-cultural p-6">
                    <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-headlines font-semibold text-text-primary text-center mb-3">Cultural Scholar
                    </h3>
                    <p class="text-text-secondary text-center mb-6">Master-level understanding of Indian cultural
                        heritage</p>

                    <div class="space-y-3 mb-6">
                        <div class="flex items-center text-sm">
                            <svg class="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="text-text-secondary">40 Expert Lessons</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <svg class="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="text-text-secondary">Research Projects</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <svg class="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="text-text-secondary">15 Master Badges</span>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="text-sm text-text-secondary mb-2">Estimated Time: 8-12 weeks</div>
                        <button class="btn-secondary w-full">Unlock Path</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Interactive Games Section -->
    <section class="py-16 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-headlines font-bold text-primary mb-4">Cultural Games & Challenges</h2>
                <p class="text-xl text-text-secondary max-w-3xl mx-auto">Learn through play with our engaging cultural
                    games and interactive challenges</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


                <!-- Festival Simulator -->
                <div class="card-cultural p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <div
                        class="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-headlines font-semibold text-text-primary mb-3">Festival Simulator</h3>
                    <p class="text-text-secondary mb-6">Plan and organize virtual festivals while learning about
                        traditions and customs</p>
                    <div class="flex items-center justify-center text-sm text-text-secondary mb-4">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        <span>20-30 minutes</span>
                    </div>
                    <button class="btn-primary w-full">Play Now</button>
                </div>

                <!-- Art & Craft Workshop -->
                <div class="card-cultural p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <div
                        class="w-20 h-20 bg-gradient-to-br from-success to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                            <path fill-rule="evenodd"
                                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-headlines font-semibold text-text-primary mb-3">Virtual Art Workshop</h3>
                    <p class="text-text-secondary mb-6">Create digital versions of traditional Indian art forms with
                        guided tutorials</p>
                    <div class="flex items-center justify-center text-sm text-text-secondary mb-4">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        <span>25-40 minutes</span>
                    </div>
                    <button class="btn-primary w-full">Start Creating</button>
                </div>

                <!-- Cultural Memory Game -->
                <div class="card-cultural p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <div
                        class="w-20 h-20 bg-gradient-to-br from-warning to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-headlines font-semibold text-text-primary mb-3">Memory Challenge</h3>
                    <p class="text-text-secondary mb-6">Test your memory with cultural symbols, monuments, and
                        traditional patterns</p>
                    <div class="flex items-center justify-center text-sm text-text-secondary mb-4">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        <span>5-10 minutes</span>
                    </div>
                    <button class="btn-primary w-full">Challenge Memory</button>
                </div>

                <!-- Language Learning -->
                <div class="card-cultural p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <div
                        class="w-20 h-20 bg-gradient-to-br from-error to-warning rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-headlines font-semibold text-text-primary mb-3">Sanskrit Basics</h3>
                    <p class="text-text-secondary mb-6">Learn basic Sanskrit words and phrases used in cultural and
                        spiritual contexts</p>
                    <div class="flex items-center justify-center text-sm text-text-secondary mb-4">
                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clip-rule="evenodd" />
                        </svg>
                        <span>15-25 minutes</span>
                    </div>
                    <button class="btn-primary w-full">Learn Sanskrit</button>
                </div>
            </div>
        </div>
    </section>


    <!-- Footer -->


    <script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function () {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Quiz functionality
        let currentQuestion = 1;
        let score = 0;
        let selectedAnswer = null;

        const questions = [
            {
                question: "Which festival is known as the 'Festival of Lights' and celebrates the victory of light over darkness?",
                options: ["Diwali", "Holi", "Navratri", "Eid"],
                correct: "diwali",
                explanation: "Diwali, also known as Deepavali, is one of the most significant festivals in Hinduism. It symbolizes the spiritual victory of light over darkness, good over evil, and knowledge over ignorance. The festival is celebrated by lighting oil lamps, decorating homes, and sharing sweets with family and friends."
            },
            {
                question: "Which classical dance form originated in Tamil Nadu and is known for its spiritual expressions?",
                options: ["Kathak", "Bharatanatyam", "Odissi", "Kuchipudi"],
                correct: "bharatanatyam",
                explanation: "Bharatanatyam is one of the oldest classical dance forms of India, originating in Tamil Nadu. It is characterized by its fixed upper torso, bent legs, intricate footwork, and expressive hand gestures that tell stories from Hindu mythology."
            },
            {
                question: "The Taj Mahal was built by which Mughal emperor as a mausoleum for his wife?",
                options: ["Akbar", "Shah Jahan", "Aurangzeb", "Humayun"],
                correct: "shah jahan",
                explanation: "The Taj Mahal was commissioned by Mughal emperor Shah Jahan in 1632 to house the tomb of his favorite wife, Mumtaz Mahal. It is considered one of the finest examples of Mughal architecture and a UNESCO World Heritage Site."
            },
            {
                question: "Which spice is known as 'liquid gold' and is extensively used in Indian cuisine?",
                options: ["Cardamom", "Saffron", "Turmeric", "Cinnamon"],
                correct: "saffron",
                explanation: "Saffron, derived from the flower Crocus sativus, is one of the world's most expensive spices by weight. It's extensively used in Indian cuisine, particularly in dishes like biryani and various sweets, and is known for its distinctive flavor and golden color."
            },
            {
                question: "The ancient practice of yoga originated in which civilization?",
                options: ["Mauryan", "Gupta", "Indus Valley", "Vedic"],
                correct: "vedic",
                explanation: "Yoga has its origins in the Vedic civilization of ancient India, with the earliest mentions found in the Rig Veda. The practice combines physical postures, breathing techniques, and meditation to achieve spiritual and physical well-being."
            }
        ];

        // Quiz option selection
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', function () {
                // Remove previous selections
                document.querySelectorAll('.quiz-option').forEach(opt => {
                    opt.classList.remove('selected');
                    opt.querySelector('.w-3').style.opacity = '0';
                });

                // Select current option
                this.classList.add('selected');
                this.querySelector('.w-3').style.opacity = '1';
                selectedAnswer = this.dataset.answer;

                // Enable submit button
                document.getElementById('quiz-submit').disabled = false;
            });
        });

        // Quiz submit functionality
        document.getElementById('quiz-submit').addEventListener('click', function () {
            if (!selectedAnswer) return;

            const currentQ = questions[currentQuestion - 1];
            const isCorrect = selectedAnswer === currentQ.correct;

            // Show results
            document.querySelectorAll('.quiz-option').forEach(option => {
                if (option.dataset.answer === currentQ.correct) {
                    option.classList.add('correct');
                } else if (option.dataset.answer === selectedAnswer && !isCorrect) {
                    option.classList.add('incorrect');
                }
            });

            // Update score
            if (isCorrect) {
                score += 20;
                document.getElementById('quiz-score').textContent = score;
            }

            // Show explanation
            document.getElementById('quiz-explanation').classList.remove('hidden');
            document.getElementById('quiz-explanation').querySelector('p').textContent = currentQ.explanation;

            // Hide submit, show next
            this.classList.add('hidden');
            if (currentQuestion < questions.length) {
                document.getElementById('quiz-next').classList.remove('hidden');
            } else {
                // Quiz completed
                setTimeout(() => {
                    alert("Quiz completed! Your final score: " + score + "/100");
                }, 1000);
            }
        });

        // Quiz next question
        document.getElementById('quiz-next').addEventListener('click', function () {
            if (currentQuestion >= questions.length) return;

            currentQuestion++;
            const nextQ = questions[currentQuestion - 1];

            // Update question
            document.getElementById('question-number').textContent = currentQuestion;
            document.getElementById('quiz-question').textContent = nextQ.question;
            document.getElementById('quiz-progress').style.width = '' + ((currentQuestion / questions.length) * 100) + '%';

            // Update options
            const options = document.querySelectorAll('.quiz-option');
            options.forEach((option, index) => {
                option.dataset.answer = nextQ.options[index].toLowerCase().replace(' ', '');
                option.querySelector('span').textContent = nextQ.options[index];
                option.classList.remove('selected', 'correct', 'incorrect');
                option.querySelector('.w-3').style.opacity = '0';
            });

            // Reset state
            selectedAnswer = null;
            document.getElementById('quiz-submit').disabled = true;
            document.getElementById('quiz-submit').classList.remove('hidden');
            document.getElementById('quiz-next').classList.add('hidden');
            document.getElementById('quiz-explanation').classList.add('hidden');
        });

        // Quiz hint functionality
        document.getElementById('quiz-hint').addEventListener('click', function () {
            const hints = [
                "This festival involves lighting diyas (oil lamps) and is celebrated in autumn.",
                "This dance form uses mudras (hand gestures) extensively and originated in South India.",
                "This emperor's name means 'King of the World' in Persian.",
                "This spice comes from a flower and is more valuable than gold by weight.",
                "This practice is mentioned in ancient Sanskrit texts and combines physical and spiritual elements."
            ];

            alert("Hint: " + hints[currentQuestion - 1]);
        });

        // Start learning button functionality
        document.getElementById('start-learning-btn').addEventListener('click', function () {
            document.querySelector('#quiz-container').scrollIntoView({ behavior: 'smooth' });
        });
    </script>
</body>

</html>
  `;

