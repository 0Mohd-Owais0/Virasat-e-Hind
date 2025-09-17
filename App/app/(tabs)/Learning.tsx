















// import React, { useEffect, useState } from "react";
// import { 
//   SafeAreaView, 
//   StyleSheet, 
//   Platform, 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   ScrollView,
//   Dimensions 
// } from "react-native";
// import { WebView } from "react-native-webview";

// // Import your HTML content
// import { coursesHTML } from "../Courses";
// import { cuisineHTML } from "../Cuisine";
// import { festivalsHTML } from "../festival";
// import { ArtHTML } from "../Art";
// import Svg, { Ellipse, Path, Rect, Circle } from "react-native-svg";

// // Color scheme from the CSS
// const colors = {
//   primary: '#B8860B',
//   primary50: '#FEF9E7',
//   primary600: '#9A7209',
//   secondary: '#8B4513',
//   surface: '#F5F5DC',
//   background: '#FDF5E6',
//   textPrimary: '#2F1B14',
//   textSecondary: '#5D4E37',
//   white: '#FFFFFF',
// };

// const { width } = Dimensions.get('window');

// export default function App() {
//   const [activePage, setActivePage] = useState("home");
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const pages = {
//     home: coursesHTML,
//     festivals: festivalsHTML,
//     arts: ArtHTML,
//     cuisine: cuisineHTML,
//   };

//   const navItems = [
//     { key: 'home', label: 'Home', active: true },
//     { key: 'festivals', label: 'Festivals' },
//     { key: 'arts', label: 'Arts & Crafts' },
//     { key: 'cuisine', label: 'Cuisine' },
//   ];

//   const handleNavPress = (pageKey: keyof typeof pages) => {
//     setActivePage(pageKey);
//     setShowMobileMenu(false);
//   };

//   const renderDesktopNav = () => (
//     <View style={styles.desktopNav}>
//       {navItems.map((item) => (
//         <TouchableOpacity
//           key={item.key}
//           style={[
//             styles.navItem,
//             activePage === item.key && styles.navItemActive
//           ]}
//           onPress={() => handleNavPress(item.key as keyof typeof pages)}
//         >
//           <Text style={[
//             styles.navText,
//             activePage === item.key && styles.navTextActive
//           ]}>
//             {item.label}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   const renderMobileNav = () => (
//     <View>
//       <TouchableOpacity
//         style={styles.mobileMenuButton}
//         onPress={() => setShowMobileMenu(!showMobileMenu)}
//       >
//         <View style={styles.hamburger}>
//           <View style={styles.hamburgerLine} />
//           <View style={styles.hamburgerLine} />
//           <View style={styles.hamburgerLine} />
//         </View>
//       </TouchableOpacity>

//       {showMobileMenu && (
//         <View style={styles.mobileMenu}>
//           {navItems.map((item) => (
//             <TouchableOpacity
//               key={item.key}
//               style={[
//                 styles.mobileNavItem,
//                 activePage === item.key && styles.mobileNavItemActive
//               ]}
//               onPress={() => handleNavPress(item.key as keyof typeof pages)}
//             >
//               <Text style={[
//                 styles.mobileNavText,
//                 activePage === item.key && styles.mobileNavTextActive
//               ]}>
//                 {item.label}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );

//   const renderNavBar = () => (
//     <View style={styles.navbar}>
//       <View style={styles.navContainer}>
//         <View style={styles.logo}>
//           <View style={styles.logoIcon}>
//                <Svg  height="40px" width="40px" color="primary" viewBox="0 0 100 100" fill="currentColor">
//                         <Circle cx="50" cy="20" r="8" />
//                         <Path d="M30 35 L50 25 L70 35 L65 60 L35 60 Z" />
//                         <Rect x="45" y="60" width="10" height="25" />
//                         <Ellipse cx="50" cy="90" rx="15" ry="5" />
//                     </Svg>
//           </View>
//           <Text style={styles.logoText}>Heritage India</Text>
//         </View>

//         {/* Desktop Navigation */}
//         {width >= 768 ? renderDesktopNav() : renderMobileNav()}
//       </View>

//       {/* Mobile Menu Overlay */}
//       {showMobileMenu && width < 768 && (
//         <View style={styles.mobileMenuOverlay}>
//           {navItems.map((item) => (
//             <TouchableOpacity
//               key={item.key}
//               style={[
//                 styles.mobileNavItem,
//                 activePage === item.key && styles.mobileNavItemActive
//               ]}
//               onPress={() => handleNavPress(item.key as keyof typeof pages)}
//             >
//               <Text style={[
//                 styles.mobileNavText,
//                 activePage === item.key && styles.mobileNavTextActive
//               ]}>
//                 {item.label}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );

//   if (Platform.OS !== "web") {
//     // Native Implementation
//     return (
//       <SafeAreaView style={styles.container}>
//         {renderNavBar()}
//         <WebView
//           originWhitelist={["*"]}
//           source={{ html: pages[activePage as keyof typeof pages] }}
//           style={styles.webview}
//           onShouldStartLoadWithRequest={(request) => {
//             const url = request.url.replace("about:blank/", "");
//             if (pages[url as keyof typeof pages]) {
//               setActivePage(url);
//               return false;
//             }
//             return true;
//           }}
//         />
//       </SafeAreaView>
//     );
//   }

//   // Web Implementation
//   return (
//     <SafeAreaView style={styles.container}>
//       {renderNavBar()}
//       <iframe
//         src={`data:text/html;charset=utf-8,${encodeURIComponent(pages[activePage as keyof typeof pages])}`}
//         style={{
//           flex: 1,
//           width: '100%',
//           border: 'none',
//           backgroundColor: colors.background
//         }}
//         title="Heritage India Content"
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },

//   // Navigation Bar Styles
//   navbar: {
//     backgroundColor: colors.surface,
//     shadowColor: colors.secondary,
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 12,
//     elevation: 4,
//     zIndex: 50,
//   },

//   navContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     maxWidth: 1280,
//     alignSelf: 'center',
//     width: '100%',
//   },

//   // Logo Styles
//   logo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   logoIcon: {
//     width: 40,
//     height: 40,
//     marginRight: 12,
//     position: 'relative',
//   },

//   logoShape1: {
//     position: 'absolute',
//     top: 2,
//     left: 15,
//     width: 10,
//     height: 10,
//     backgroundColor: colors.primary,
//     borderRadius: 5,
//   },

//   logoShape2: {
//     position: 'absolute',
//     top: 8,
//     left: 5,
//     width: 30,
//     height: 20,
//     backgroundColor: colors.primary,
//     borderRadius: 4,
//   },

//   logoShape3: {
//     position: 'absolute',
//     top: 28,
//     left: 15,
//     width: 10,
//     height: 10,
//     backgroundColor: colors.primary,
//     borderRadius: 2,
//   },

//   logoText: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: colors.primary,
//   },

//   // Desktop Navigation
//   desktopNav: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },

//   navItem: {
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },

//   navItemActive: {
//     backgroundColor: colors.primary50,
//   },

//   navText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: colors.textSecondary,
//   },

//   navTextActive: {
//     color: colors.primary,
//   },

//   // Mobile Navigation
//   mobileMenuButton: {
//     padding: 8,
//   },

//   hamburger: {
//     width: 24,
//     height: 24,
//     justifyContent: 'space-around',
//   },

//   hamburgerLine: {
//     width: 24,
//     height: 2,
//     backgroundColor: colors.textSecondary,
//   },

//   mobileMenu: {
//     position: 'absolute',
//     top: '100%',
//     left: 0,
//     right: 0,
//     backgroundColor: colors.surface,
//     borderTopWidth: 1,
//     borderTopColor: '#E5E5E5',
//     paddingVertical: 8,
//   },

//   mobileMenuOverlay: {
//     backgroundColor: colors.surface,
//     borderTopWidth: 1,
//     borderTopColor: '#E5E5E5',
//     paddingVertical: 8,
//   },

//   mobileNavItem: {
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderRadius: 8,
//     marginHorizontal: 8,
//     marginVertical: 2,
//   },

//   mobileNavItemActive: {
//     backgroundColor: colors.primary50,
//   },

//   mobileNavText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: colors.textSecondary,
//   },

//   mobileNavTextActive: {
//     color: colors.primary,
//   },

//   // Content Styles
//   contentContainer: {
//     flex: 1,
//   },

//   webview: {
//     flex: 1,
//   },
// });
// MyHeritageScreen.jsx




import React, { useEffect, useState} from "react";
import { 
  SafeAreaView, 
  StyleSheet, 
  Platform, 
  View,
  Image, 
  Text, 
  TouchableOpacity,  
  ScrollView,
  Dimensions,
  ImageBackground,
  Touchable
} from "react-native";
import { Router } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import { WebView } from "react-native-webview";
import Svg, { Circle, Ellipse, Path, Rect } from "react-native-svg";

// Import your HTML content
import { coursesHTML } from "../Courses";
import { cuisineHTML } from "../Cuisine";
import { festivalsHTML } from "../festival";
import { ArtHTML } from "../Art";

// Color scheme from the CSS
const colors = {
  primary: '#B8860B',
  primary50: '#FEF9E7',
  primary600: '#9A7209',
  secondary: '#8B4513',
  surface: '#F5F5DC',
  background: '#FDF5E6',
  textPrimary: '#2F1B14',
  textSecondary: '#5D4E37',
  white: '#FFFFFF',
};

const { width } = Dimensions.get('window');

export default function MyHeritageApp() {
  const [activePage, setActivePage] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const pages = {
    home: null, // We'll show the custom home content
    courses: coursesHTML,
    festivals: festivalsHTML,
    arts: ArtHTML,
    cuisine: cuisineHTML,
  };

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'courses', label: 'Courses' },
    { key: 'festivals', label: 'Festivals' },
    { key: 'arts', label: 'Arts & Crafts' },
    { key: 'cuisine', label: 'Cuisine' },
  ];

  const handleNavPress = (pageKey: keyof typeof pages) => {
    setActivePage(pageKey);
    setShowMobileMenu(false);
  };

  const renderDesktopNav = () => (
    <View style={styles.desktopNav}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={[
            styles.navItem,
            activePage === item.key && styles.navItemActive
          ]}
          onPress={() => handleNavPress(item.key as keyof typeof pages)}
        >
          <Text style={[
            styles.navText,
            activePage === item.key && styles.navTextActive
          ]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderMobileNav = () => (
    <View>
      <TouchableOpacity
        style={styles.mobileMenuButton}
        onPress={() => setShowMobileMenu(!showMobileMenu)}
      >
        <View style={styles.hamburger}>
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </View>
      </TouchableOpacity>

      {showMobileMenu && (
        <View style={styles.mobileMenu}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={[
                styles.mobileNavItem,
                activePage === item.key && styles.mobileNavItemActive
              ]}
              onPress={() => handleNavPress(item.key as keyof typeof pages)}
            >
              <Text style={[
                styles.mobileNavText,
                activePage === item.key && styles.mobileNavTextActive
              ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  const renderNavBar = () => (
    <View style={[styles.navbar, { paddingTop: 30 }]}>
      <View style={styles.navContainer}>
        <View style={styles.logo}>
          <View style={styles.logoIcon}>
            <Svg height="40px" width="40px" color="primary" viewBox="0 0 100 100" fill="currentColor">
              <Circle cx="50" cy="20" r="8" />
              <Path d="M30 35 L50 25 L70 35 L65 60 L35 60 Z" />
              <Rect x="45" y="60" width="10" height="25" />
              <Ellipse cx="50" cy="90" rx="15" ry="5" />
            </Svg>
          </View>
          <Text style={styles.logoText}>Heritage India</Text>
        </View>

        {/* Desktop Navigation */}
        {width >= 768 ? renderDesktopNav() : renderMobileNav()}
      </View>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && width < 768 && (
        <View style={styles.mobileMenuOverlay}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item.key}
              style={[
                styles.mobileNavItem,
                activePage === item.key && styles.mobileNavItemActive
              ]}
              onPress={() => handleNavPress(item.key as keyof typeof pages)}
            >
              <Text style={[
                styles.mobileNavText,
                activePage === item.key && styles.mobileNavTextActive
              ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  const renderHomeContent = () => (
    <ScrollView style={styles.homeContainer}>
      {/* Daily Heritage Bites */}
      <Text style={styles.sectionTitle}>Daily Heritage Bites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {[
          { title: "Art of India", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgVZVIGEW0-ZpxVBuYwciqOv_CMYUP1h7zBJPB8SOFm0WiHvLEl9klzTl_VnQrkL6FujMSvbmEQEFfegd9RzXkhYUQeaEEMmZQQMpWuz7utLCg07VYjWcurQK3G0jDI_peA-XgPX4EUTSDpt4DGxtJ2jJtTR3bmmc2TxXvfEN-dvI2LRybu18cLkPkv8QuyQ6vK5c7ctS_LOeQ8jv-7D1oDb_Ae0yiOustounUtQXOPWr__2aW4O7JmS4u2y9PmvpT8LIDb5kc0Fw" },
          { title: "Architectural Wonders", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ8cIymB0d6RPV03TB-w4BjuRdBgCxWNOpYuhpnn_PtpMD3EE30VyM6qlUICYM2mAwEcszygse35wQ_f_a5q_D8oaylYfJyKn1H2wjb0zqQmXlOLY0GGOgDrTvDAPAY2ndjeC0_o4HEme3b0OwgLYqUxuyL-K8ysUXoBMpv4cdHjB5radkrof2k1a_Xh9X1PS32U2ABagAB6oao-bkE8NquiN5aFUQzLpuLc4fK7VlYewp6tEHQ6zSlvauRNILhew0LBE0kgLEl_U" },
          { title: "Classical Dance Forms", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyVA1V3Beij7BYYPfYdZXSCkFt44yswSubmdiKdvog7kTQ3AkuAGZn1QysNjLBgqpzRfIhwZzLk4yMOigzKa8eNS8azBXMFpplp8Xr4piek9opTgvWCnJAqyYsTpskxobaLDAq3_A62h7ggRmfgSnjk5IZBgc6ILT6qIoIyxWxjj9qGkKGm8RJ9m0c6DVa_BQS__c1BcL5tl-5DBupDgulSPgoReX8JdfT3FaHOQ5VG_1_bKvZ6XCzxgzkPYX4LrbrB_1hVnqa7Cg" },
          { title: "Melodies of India", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOEE7eDPmfYFtEIToMjxW5d2dXPBBzSsdPt1903cZsCrTYb5AtNlZBCz7u3wnLnpWBqAnAWoPn3iWugxR8Nhda8EbsMmLYh4JHWld5Ib_CYKHQKTbUmvhsiFkAsLxSvbRbAX8Q_r2t093GJDe0giT2hOQJ12aqVJAd6mX9olpTnVnx5Vs49qWWqIB1aq2OyUUjMCEXOiXMmQS1g7WZb76ZYGoTPTMlMxF-Fbvbk1H_XJ-8UL710TKJk1wbBcVXP-NCsXldTx7cgCs" }
        ].map((item, i) => (
          <TouchableOpacity key={i} style={styles.card}>
            <ImageBackground source={{ uri: item.img }} style={styles.cardImage} imageStyle={{ borderRadius: 16 }} />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Trending Topics */}
      <View style={styles.trending}>
        <Text style={styles.sectionTitle}>Trending in Heritage</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
          {[
            { title: "The Lost City of Dwarka", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUQ7xBhyC1cF37wLaAWBjlMe06EzwMziwIbEi1zkj_y1mkpUa4x03jpcPJNZmkeAIu3LhKFA8sKDQ7IGZKW0ulfriZ1U_tRI9Kv7rb0-zp127SaCpQsd36UVZ4FeXc5SEGlvibfa_N6AWl/s640/a5ed09917dedc6017cf98a102daa6a78.jpg", subtitle: "Recent archeological findings shed new light on the mythical city." },
            { title: "Koh-i-Noor Diamond", img: "https://akm-img-a-in.tosshub.com/indiatoday/images/assets/202303/queen%20kohinoor-original--sixteen_nine_0.jpg?VersionId=WcM2S.nGlgVziANGaToCOOlhazKE8l9o&size=690:388", subtitle: "Explore the history and significance of the Koh-i-Noor diamond." },
            { title: "Folk Music Traditions", img: "https://i1.sndcdn.com/artworks-000122608442-bdekz2-t500x500.jpg", subtitle: "Discover the rich tapestry of India's folk music." }
          ].map((item, i) => ( 
            <TouchableOpacity key={i} style={{ marginRight: 12, width: 300 }}>
              <ImageBackground
                source={{ uri: item.img }}
                style={styles.trendingImage}
                imageStyle={{ borderRadius: 16 }}
              >
                <View style={styles.overlay} />
                <View style={styles.trendingTextBox}>
                  <Text style={styles.trendingTitle}>{item.title}</Text>
                  <Text style={styles.trendingSubtitle}>{item.subtitle || "Explore the rich heritage of India through these trending topics."}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Explore Categories</Text>
      <View style={styles.categoriesGrid}>
        {[
          { title: "Cuisine", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP-OR_G9KHcedJB-gR2QFk9GRNf7X-VsaOF9659QiPqgh3TukRo4-2CHsfMqgwwRqF4RqVGFB4OU3G2dD84Q4MtclCaocGKLy4Ox7b7F8IC0RCr58yw-BJtMHF_2IwvD2S6FCE03QGl3MSKh0J7P6cpparn9IS709NEq3ylkCRzjYMQdAVv-xib9xPUtHaC5kzJvxzTjWniQLMkPVccyX6cFyK3anLHZ3lgLVP5et9xxfHSZt3DpYuOWkPz-0a4brJfY4lmQF9FtE" },
          { title: "Festivals", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBes_kkI7g_ABpzUubPf881x5q3RtODbVCPha2QCzgDJz2GayfO3Sa76WdkjZit5aaTL5TvdIch6Kqe40C4J1J8c_q2JxJfsOoUbhGXSb9C7totHrDCXrtW3pT7Z0WQBGIpB4gZ8j1cDuDakBbjST7TMsMOBuQj81bwYNIfYBd6-pYs2BPOlcSXZOxVhz14eM2HLi_6ZbpgfKVfLKLbJXlLGAjvmRjf6QqkQjSppy0m0dpYrgWsuEWtT0t-cshgPcGO7fsnfoKKGsg" },
          { title: "Mythology", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyAD8eaBC_9R6HRwvmoYaRo55wdTkFLg-kDwzHvI-zdj7sLTddstENnS5vAtBS-im179hP6CQ_cDzdqJ6cseFRO22cN00K8I9o-9FWac5EDkZm8r1VVgW5wLqKAypjJ5UPB_8ZVFecmKpQm9AXZPom63IHT4o3vJwH6Tug8rMZVhknAb224KCqAMi0Bybu7B3V1Bu35c09Go7o0hIAEGOiwnO6P3jOqmjWvB8z2yJbfznwURz2MHXCySoEzpepyE4Ft_8mAyben18" },
          { title: "Art Forms", img: "https://www.thestatesman.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-10-at-4.55.42-PM-e1649590906552.jpeg" },
          { title: "Historic Sites", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYgESwQamwG_BCF2Nnzr6Ggto9-dnWfDZEw&s" },
          { title: "Art & Craft", img: "https://c.ndtvimg.com/2025-01/c907n72g_art-and-craft-villages-in-india_625x300_07_January_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738" }
        ].map((item, i) => (
          <View key={i} style={styles.categoryCard}>
            <Image source={{ uri: item.img }} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderContent = () => {
    if (activePage === "home") {
      return renderHomeContent();
    }

    const htmlContent = pages[activePage as keyof typeof pages];
    
    if (Platform.OS !== "web") {
      // Native Implementation - WebView
      return (
        <WebView
          originWhitelist={["*"]}
          source={{ html: htmlContent as any }}
          style={styles.webview}
          onShouldStartLoadWithRequest={(request) => {
            const url = request.url.replace("about:blank/", "");
            if (pages[url as keyof typeof pages]) {
              setActivePage(url);
              return false;
            }
            return true;
          }}
        />
      );
    } else {
      // Web Implementation - iframe
      return (
        <iframe
          src={`data:text/html;charset=utf-8,${encodeURIComponent(htmlContent as any)}`}
          style={{
            flex: 1,
            width: '100%',
            height: '100vh',
            border: 'none',
            backgroundColor: colors.background
          }}
          title="Heritage India Content"
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderNavBar()}
      <View style={styles.contentContainer}>
        {renderContent()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: colors.background 
  },

  // Content Styles
  contentContainer: {
    flex: 1,
  },

  homeContainer: {
    flex: 1,
    backgroundColor: "#fafafa"
  },

  webview: {
    flex: 1,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
    backgroundColor: "#fafafa"
  },
  title: { flex: 1, textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#111" },
  iconBtn: { width: 40, height: 40, justifyContent: "center", alignItems: "center" },

  // Sections
  sectionTitle: { fontSize: 22, fontWeight: "bold", color: "#111", marginHorizontal: 16, marginTop: 16, marginBottom: 16 },

  // Daily Heritage Bites
  scroll: { paddingHorizontal: 16, marginTop: 8 },
  card: { marginRight: 12, width: 150 },
  cardImage: { width: "100%", aspectRatio: 1, borderRadius: 16 },
  cardText: { marginTop: 8, fontSize: 16, fontWeight: "600", color: "#111" },

  // Trending
  trending: { marginHorizontal: 16, marginTop: 20 },
  trendingImage: { width: "100%", height: 180, justifyContent: "flex-end" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 16 },
  trendingTextBox: { padding: 12 },
  trendingTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  trendingSubtitle: { color: "#ddd", fontSize: 14 },

  // Categories
  categoriesGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", margin: 16 },
  categoryCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    width: "48%"
  },
  categoryIcon: { width: 48, height: 48, borderRadius: 8, marginRight: 12 },
  categoryText: { fontSize: 16, fontWeight: "600", color: "#111" },

  // Navigation Bar Styles
  navbar: {
    backgroundColor: colors.surface,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    zIndex: 50,
  },

  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxWidth: 1280,
    alignSelf: 'center',
    width: '100%',
  },

  // Logo Styles
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
    position: 'relative',
  },

  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.primary,
  },

  // Desktop Navigation
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  navItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  navItemActive: {
    backgroundColor: colors.primary50,
  },

  navText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textSecondary,
  },

  navTextActive: {
    color: colors.primary,
  },

  // Mobile Navigation
  mobileMenuButton: {
    padding: 8,
  },

  hamburger: {
    width: 24,
    height: 24,
    justifyContent: 'space-around',
  },

  hamburgerLine: {
    width: 24,
    height: 2,
    backgroundColor: colors.textSecondary,
  },

  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingVertical: 8,
  },

  mobileMenuOverlay: {
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingVertical: 8,
  },

  mobileNavItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 2,
  },

  mobileNavItemActive: {
    backgroundColor: colors.primary50,
  },

  mobileNavText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textSecondary,
  },

  mobileNavTextActive: {
    color: colors.primary,
  },
});