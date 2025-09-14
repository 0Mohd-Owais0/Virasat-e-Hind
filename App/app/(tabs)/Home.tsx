// ORIGINAL CODE
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// const courses = [
//   {
//     id: 1,
//     title: "Indian Architecture Through Ages",
//     description: "Explore the evolution of Indian architecture from ancient Indus Valley to modern times.",
//     lessons: 12,
//     duration: "6 weeks",
//     level: "Beginner",
//     topics: ["Mughal Architecture", "Dravidian Style", "Indo-Islamic", "Colonial Influence"]
//   },
//   {
//     id: 2,
//     title: "Cultural Heritage of India",
//     description: "Deep dive into India's rich cultural traditions, festivals, and customs.",
//     lessons: 15,
//     duration: "8 weeks",
//     level: "Intermediate",
//     topics: ["Festivals", "Dance Forms", "Music Traditions", "Regional Cultures"]
//   },
//   {
//     id: 3,
//     title: "Ancient Indian History",
//     description: "Journey through ancient Indian civilizations and their contributions.",
//     lessons: 10,
//     duration: "5 weeks",
//     level: "Advanced",
//     topics: ["Indus Valley", "Mauryan Empire", "Gupta Period", "Medieval India"]
//   }
// ];

// const quizTopics = [
//   {
//     id: 1,
//     title: "Monuments & Architecture",
//     description: "Test your knowledge about Indian monuments and architectural styles.",
//     questions: 25,
//     difficulty: "Medium",
//     estimatedTime: "15 min"
//   },
//   {
//     id: 2,
//     title: "Indian Festivals",
//     description: "Quiz about various festivals celebrated across different regions of India.",
//     questions: 20,
//     difficulty: "Easy",
//     estimatedTime: "10 min"
//   },
//   {
//     id: 3,
//     title: "Historical Personalities",
//     description: "Learn about great personalities who shaped Indian history and culture.",
//     questions: 30,
//     difficulty: "Hard",
//     estimatedTime: "20 min"
//   },
//   {
//     id: 4,
//     title: "Art & Literature",
//     description: "Explore India's rich artistic and literary heritage.",
//     questions: 18,
//     difficulty: "Medium",
//     estimatedTime: "12 min"
//   }
// ];

// const learningTopics = [
//   {
//     category: "Architecture",
//     topics: ["Temple Architecture", "Fort Construction", "Palace Design", "Tomb Architecture", "Modern Buildings"]
//   },
//   {
//     category: "Culture & Traditions",
//     topics: ["Classical Dance", "Folk Music", "Traditional Crafts", "Regional Cuisines", "Wedding Customs"]
//   },
//   {
//     category: "History",
//     topics: ["Ancient Civilizations", "Medieval Period", "Colonial Era", "Freedom Struggle", "Modern India"]
//   },
//   {
//     category: "Geography & Nature",
//     topics: ["Sacred Rivers", "Mountain Ranges", "Wildlife Sanctuaries", "National Parks", "Climate Regions"]
//   }
// ];

// const InfoTab = () => {
//   const [activeTab, setActiveTab] = useState('courses');

//   const renderCourses = () => (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Available Courses</Text>
//       {courses.map((course) => (
//         <View key={course.id} style={styles.card}>
//           <View style={styles.cardHeader}>
//             <Text style={styles.cardTitle}>{course.title}</Text>
//             <View style={styles.levelBadge}>
//               <Text style={styles.levelText}>{course.level}</Text>
//             </View>
//           </View>
//           <Text style={styles.cardDescription}>{course.description}</Text>
          
//           <View style={styles.courseStats}>
//             <View style={styles.statItem}>
//               <Text style={styles.statNumber}>{course.lessons}</Text>
//               <Text style={styles.statLabel}>Lessons</Text>
//             </View>
//             <View style={styles.statItem}>
//               <Text style={styles.statNumber}>{course.duration}</Text>
//               <Text style={styles.statLabel}>Duration</Text>
//             </View>
//           </View>

//           <View style={styles.topicsContainer}>
//             <Text style={styles.topicsLabel}>Topics Covered:</Text>
//             <View style={styles.topicsList}>
//               {course.topics.map((topic, index) => (
//                 <View key={index} style={styles.topicTag}>
//                   <Text style={styles.topicText}>{topic}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>

//           <TouchableOpacity style={styles.primaryBtn}>
//             <Text style={styles.primaryBtnText}>Enroll Now</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </View>
//   );

//   const renderQuizzes = () => (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Practice Quizzes</Text>
//       {quizTopics.map((quiz) => (
//         <View key={quiz.id} style={styles.card}>
//           <View style={styles.cardHeader}>
//             <Text style={styles.cardTitle}>{quiz.title}</Text>
//             <View style={[styles.levelBadge, 
//               quiz.difficulty === 'Easy' && styles.easyBadge,
//               quiz.difficulty === 'Medium' && styles.mediumBadge,
//               quiz.difficulty === 'Hard' && styles.hardBadge
//             ]}>
//               <Text style={styles.levelText}>{quiz.difficulty}</Text>
//             </View>
//           </View>
//           <Text style={styles.cardDescription}>{quiz.description}</Text>
          
//           <View style={styles.quizStats}>
//             <View style={styles.statRow}>
//               <Text style={styles.statText}>📝 {quiz.questions} Questions</Text>
//               <Text style={styles.statText}>⏱️ {quiz.estimatedTime}</Text>
//             </View>
//           </View>

//           <TouchableOpacity style={styles.primaryBtn}>
//             <Text style={styles.primaryBtnText}>Start Quiz</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </View>
//   );

//   const renderTopics = () => (
//     <View style={styles.section}>
//       <Text style={styles.sectionTitle}>Learning Topics</Text>
//       {learningTopics.map((category, index) => (
//         <View key={index} style={styles.card}>
//           <Text style={styles.cardTitle}>{category.category}</Text>
//           <View style={styles.topicsList}>
//             {category.topics.map((topic, topicIndex) => (
//               <TouchableOpacity key={topicIndex} style={styles.topicButton}>
//                 <Text style={styles.topicButtonText}>{topic}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       ))}
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Learning Center</Text>
//         <Text style={styles.subtitle}>Explore courses, take quizzes, and dive deep into cultural topics</Text>
//       </View>

//       <View style={styles.tabContainer}>
//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'courses' && styles.activeTab]} 
//           onPress={() => setActiveTab('courses')}
//         >
//           <Text style={[styles.tabText, activeTab === 'courses' && styles.activeTabText]}>Courses</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'quizzes' && styles.activeTab]} 
//           onPress={() => setActiveTab('quizzes')}
//         >
//           <Text style={[styles.tabText, activeTab === 'quizzes' && styles.activeTabText]}>Quizzes</Text>
//         </TouchableOpacity>
//         <TouchableOpacity 
//           style={[styles.tab, activeTab === 'topics' && styles.activeTab]} 
//           onPress={() => setActiveTab('topics')}
//         >
//           <Text style={[styles.tabText, activeTab === 'topics' && styles.activeTabText]}>Topics</Text>
//         </TouchableOpacity>
//       </View>

//       <ScrollView style={styles.content}>
//         {activeTab === 'courses' && renderCourses()}
//         {activeTab === 'quizzes' && renderQuizzes()}
//         {activeTab === 'topics' && renderTopics()}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5E6D3',
//   },
//   header: {
//     padding: 20,
//     paddingBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#6B2D2D',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#514a44',
//     lineHeight: 22,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     marginHorizontal: 20,
//     marginBottom: 10,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 4,
//     borderWidth: 1,
//     borderColor: '#D9C6A1',
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     borderRadius: 8,
//   },
//   activeTab: {
//     backgroundColor: '#6B2D2D',
//   },
//   tabText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#8A7C6E',
//   },
//   activeTabText: {
//     color: '#FFFFFF',
//   },
//   content: {
//     flex: 1,
//   },
//   section: {
//     padding: 20,
//     paddingTop: 10,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#6B2D2D',
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#D9C6A1',
//     borderRadius: 18,
//     padding: 20,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.05,
//     shadowRadius: 22,
//     elevation: 5,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 8,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#2E2E2E',
//     flex: 1,
//     marginRight: 12,
//   },
//   cardDescription: {
//     fontSize: 14,
//     color: '#514a44',
//     lineHeight: 20,
//     marginBottom: 16,
//   },
//   levelBadge: {
//     backgroundColor: '#C59D5F',
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 999,
//   },
//   easyBadge: {
//     backgroundColor: '#4CAF50',
//   },
//   mediumBadge: {
//     backgroundColor: '#FF9800',
//   },
//   hardBadge: {
//     backgroundColor: '#F44336',
//   },
//   levelText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   courseStats: {
//     flexDirection: 'row',
//     gap: 24,
//     marginBottom: 16,
//   },
//   statItem: {
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#6B2D2D',
//   },
//   statLabel: {
//     fontSize: 12,
//     color: '#8A7C6E',
//     marginTop: 2,
//   },
//   quizStats: {
//     marginBottom: 16,
//   },
//   statRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   statText: {
//     fontSize: 14,
//     color: '#514a44',
//   },
//   topicsContainer: {
//     marginBottom: 16,
//   },
//   topicsLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#2E2E2E',
//     marginBottom: 8,
//   },
//   topicsList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 8,
//   },
//   topicTag: {
//     backgroundColor: '#F5E6D3',
//     borderWidth: 1,
//     borderColor: '#D9C6A1',
//     borderRadius: 999,
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//   },
//   topicText: {
//     fontSize: 12,
//     color: '#2E2E2E',
//   },
//   topicButton: {
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#D9C6A1',
//     borderRadius: 12,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     marginBottom: 8,
//   },
//   topicButtonText: {
//     fontSize: 14,
//     color: '#2E2E2E',
//     textAlign: 'center',
//   },
//   primaryBtn: {
//     backgroundColor: '#6B2D2D',
//     paddingVertical: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryBtnText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
// });

// export default InfoTab;



import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
// Import your chosen color palette
import { HERITAGE_COLORS as H_COLORS } from '@/constants/Colors';
import { DARK_COLORS as D_COLORS } from '@/constants/Colors';
import { MODERN_COLORS as M_COLORS } from '@/constants/Colors';
import { replace } from 'expo-router/build/global-state/routing';

const courses = [
  {
    id: 1,
    title: "Indian Architecture Through Ages",
    description: "Explore the evolution of Indian architecture from ancient Indus Valley to modern times.",
    lessons: 12,
    duration: "6 weeks",
    level: "Beginner",
    topics: ["Mughal Architecture", "Dravidian Style", "Indo-Islamic", "Colonial Influence"],
    progress: 0,
    featured: true
  },
  {
    id: 2,
    title: "Cultural Heritage of India",
    description: "Deep dive into India's rich cultural traditions, festivals, and customs.",
    lessons: 15,
    duration: "8 weeks",
    level: "Intermediate",
    topics: ["Festivals", "Dance Forms", "Music Traditions", "Regional Cultures"],
    progress: 25,
    featured: false
  },
  {
    id: 3,
    title: "Ancient Indian History",
    description: "Journey through ancient Indian civilizations and their contributions.",
    lessons: 10,
    duration: "5 weeks",
    level: "Advanced",
    topics: ["Indus Valley", "Mauryan Empire", "Gupta Period", "Medieval India"],
    progress: 75,
    featured: false
  }
];

const quizTopics = [
  {
    id: 1,
    title: "Monuments & Architecture",
    description: "Test your knowledge about Indian monuments and architectural styles.",
    questions: 25,
    difficulty: "Medium",
    estimatedTime: "15 min",
    completed: false,
    bestScore: null
  },
  {
    id: 2,
    title: "Indian Festivals",
    description: "Quiz about various festivals celebrated across different regions of India.",
    questions: 20,
    difficulty: "Easy",
    estimatedTime: "10 min",
    completed: true,
    bestScore: 85
  },
  {
    id: 3,
    title: "Historical Personalities",
    description: "Learn about great personalities who shaped Indian history and culture.",
    questions: 30,
    difficulty: "Hard",
    estimatedTime: "20 min",
    completed: true,
    bestScore: 92
  },
  {
    id: 4,
    title: "Art & Literature",
    description: "Explore India's rich artistic and literary heritage.",
    questions: 18,
    difficulty: "Medium",
    estimatedTime: "12 min",
    completed: false,
    bestScore: null
  }
];

const learningTopics = [
  {
    category: "Architecture",
    topics: ["Temple Architecture", "Fort Construction", "Palace Design", "Tomb Architecture", "Modern Buildings"],
    studiedCount: 3
  },
  {
    category: "Culture & Traditions",
    topics: ["Classical Dance", "Folk Music", "Traditional Crafts", "Regional Cuisines", "Wedding Customs"],
    studiedCount: 5
  },
  {
    category: "History",
    topics: ["Ancient Civilizations", "Medieval Period", "Colonial Era", "Freedom Struggle", "Modern India"],
    studiedCount: 2
  },
  {
    category: "Geography & Nature",
    topics: ["Sacred Rivers", "Mountain Ranges", "Wildlife Sanctuaries", "National Parks", "Climate Regions"],
    studiedCount: 0
  }
];

const InfoTab = () => {
  const [activeTab, setActiveTab] = useState('courses');
    const [theme, setTheme] = useState<"heritage" | "dark" | "modern">("heritage");
 const router = useRouter()
  const COLORS =
    theme === "heritage" ? H_COLORS :
    theme === "dark" ? D_COLORS :
    M_COLORS;


  const styles = getStyles(COLORS);


  const renderCourses = () => (
    <View style={styles.section}>
      {courses.map((course, index) => (
        <View key={course.id} style={[
          styles.courseCard,
          course.featured && styles.featuredCard,
          index === 0 && styles.firstCard
        ]}>
          {course.featured && (
            <View style={styles.featuredBadge}>
              <Text style={styles.featuredText}>✨ FEATURED</Text>
            </View>
          )}
          
          <View style={styles.cardContent}>
            <View style={styles.courseHeader}>
              <View style={styles.titleSection}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.courseDescription}>{course.description}</Text>
              </View>
              
              <View style={[styles.levelIndicator, (styles as any)[course.level.toLowerCase() + 'Indicator']]}>
                <Text style={styles.levelText}>{course.level}</Text>
              </View>
            </View>
            
            {course.progress > 0 && (
              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text style={styles.progressLabel}>Progress</Text>
                  <Text style={styles.progressPercentage}>{course.progress}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: `${course.progress}%` }]} />
                </View>
              </View>
            )}
            
            <View style={styles.statsSection}>
              <View style={styles.statCard}>
                <View style={styles.statIcon}>
                  <Text style={styles.statIconText}>📚</Text>
                </View>
                <View style={styles.statContent}>
                  <Text style={styles.statNumber}>{course.lessons}</Text>
                  <Text style={styles.statLabel}>Lessons</Text>
                </View>
              </View>
              
              <View style={styles.statCard}>
                <View style={styles.statIcon}>
                  <Text style={styles.statIconText}>⏰</Text>
                </View>
                <View style={styles.statContent}>
                  <Text style={styles.statNumber}>{course.duration}</Text>
                  <Text style={styles.statLabel}>Duration</Text>
                </View>
              </View>
            </View>
            
            <View style={styles.topicsSection}>
              <Text style={styles.topicsTitle}>What you'll learn:</Text>
              <View style={styles.topicsGrid}>
                {course.topics.map((topic, index) => (
                  <View key={index} style={styles.topicPill}>
                    <Text style={styles.topicText}>{topic}</Text>
                  </View>
                ))}
              </View>
            </View>
            
            <View style={styles.actionSection}>
              <TouchableOpacity style={[
                styles.actionButton,
                course.progress > 0 ? styles.continueButton : styles.startButton
              ]}>
                <Text style={styles.actionButtonText}>
                  {course.progress > 0 ? '▶ Continue Learning' : '🚀 Start Course'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderQuizzes = () => (
    <View style={styles.section}>
      <View style={styles.quizGrid}>
        {quizTopics.map((quiz) => (
          <View key={quiz.id} style={[
            styles.quizCard,
            quiz.completed && styles.completedQuizCard
          ]}>
            {quiz.completed && (
              <View style={styles.completedBadge}>
                <Text style={styles.completedText}>✓</Text>
              </View>
            )}
            
            <View style={styles.quizHeader}>
              <Text style={styles.quizTitle}>{quiz.title}</Text>
              <View style={[styles.difficultyChip, (styles as any)[quiz.difficulty.toLowerCase() + 'Chip']]}>
                <Text style={styles.difficultyText}>{quiz.difficulty}</Text>
              </View>
            </View>
            
            <Text style={styles.quizDescription}>{quiz.description}</Text>
            
            <View style={styles.quizMetrics}>
              <View style={styles.metricItem}>
                <Text style={styles.metricIcon}>❓</Text>
                <Text style={styles.metricValue}>{quiz.questions}</Text>
                <Text style={styles.metricLabel}>Questions</Text>
              </View>
              
              <View style={styles.metricItem}>
                <Text style={styles.metricIcon}>⏱</Text>
                <Text style={styles.metricValue}>{quiz.estimatedTime}</Text>
                <Text style={styles.metricLabel}>Duration</Text>
              </View>
              
              {quiz.bestScore && (
                <View style={styles.metricItem}>
                  <Text style={styles.metricIcon}>🏆</Text>
                  <Text style={styles.metricValue}>{quiz.bestScore}%</Text>
                  <Text style={styles.metricLabel}>Best Score</Text>
                </View>
              )}
            </View>
            
            <TouchableOpacity style={[
              styles.quizActionButton,
              quiz.completed && styles.retakeButton
            ]}>
              <Text style={styles.quizActionText}>
                {quiz.completed ? '↻ Retake Quiz' : '⚡ Start Quiz'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );

  const renderTopics = () => (
    <View style={styles.section}>
      {learningTopics.map((category, index) => (
        <View key={index} style={styles.categoryCard}>
          <View style={styles.categoryHeader}>
            <View style={styles.categoryTitleSection}>
              <Text style={styles.categoryTitle}>{category.category}</Text>
              <Text style={styles.categoryProgress}>
                {category.studiedCount}/{category.topics.length} topics studied
              </Text>
            </View>
            
            <View style={styles.categoryStats}>
              <View style={styles.progressRing}>
                <Text style={styles.progressRingText}>
                  {Math.round((category.studiedCount / category.topics.length) * 100)}%
                </Text>
              </View>
            </View>
          </View>
          
          <View style={styles.topicsList}>
            {category.topics.map((topic, topicIndex) => (
              <TouchableOpacity 
                key={topicIndex} 
                style={[
                  styles.topicItem,
                  topicIndex < category.studiedCount && styles.studiedTopic
                ]}
              >
                <View style={styles.topicIcon}>
                  <Text style={styles.topicIconText}>
                    {topicIndex < category.studiedCount ? '✓' : '○'}
                  </Text>
                </View>
                <Text style={[
                  styles.topicItemText,
                  topicIndex < category.studiedCount && styles.studiedTopicText
                ]}>
                  {topic}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.appTitle}>Heritage Academy</Text>
          <Text style={styles.appSubtitle}>Master the art of Indian culture & history</Text>
        </View>
        
        <View style={styles.headerDecoration}>
          <Image style={styles.decorationImage} width={60} height={60} source={require('@/assets/images/icon.png')} />
        </View>
      </View>
{/* theme */}

      <View style={{ flexDirection: "row", justifyContent: "space-around", margin: 10 }}>
        <TouchableOpacity onPress={() => setTheme("heritage")}>
          <Text style={{ color: COLORS.text }}>Saline</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTheme("dark")}>
          <Text style={{ color: COLORS.text }}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTheme("modern")}>
          <Text style={{ color: COLORS.text }}>Modern</Text>
        </TouchableOpacity>
      </View>



      <View style={styles.tabSelector}>
        {[
          { key: 'courses', label: 'My Courses', icon: '📖' },
          { key: 'quizzes', label: 'Quizzes', icon: '🧠' },
          { key: 'topics', label: 'Library', icon: '📚' }
        ].map((tab) => (
          <TouchableOpacity 
            key={tab.key}
            style={[styles.tabOption, activeTab === tab.key && styles.activeTabOption]} 
            onPress={() => setActiveTab(tab.key)}
          >
            <Text style={[styles.tabIcon, activeTab === tab.key && styles.activeTabIcon]}>
              {tab.icon}
            </Text>
            <Text style={[styles.tabLabel, activeTab === tab.key && styles.activeTabLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'quizzes' && renderQuizzes()}
        {activeTab === 'topics' && renderTopics()}
      </ScrollView>
    </View>
  );
};

const getStyles = (COLORS: any) =>
StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
    paddingBottom: 24,
    backgroundColor: 'linear-gradient(135deg, #6B2D2D 0%, #8B4A4A 100%)',
  },
  headerContent: {
    flex: 1,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.primary,
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  appSubtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    fontStyle: 'italic',
    lineHeight: 22,
  },
  headerDecoration: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  decorationImage: {
    width: 32,
  },
  tabSelector: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 6,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 12,
  },
  tabOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
  },
  activeTabOption: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  tabIcon: {
    fontSize: 18,
  },
  activeTabIcon: {
    fontSize: 18,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textTertiary,
  },
  activeTabLabel: {
    color: COLORS.surface,
    fontWeight: '700',
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  courseCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    marginBottom: 24,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 32,
    elevation: 16,
    overflow: 'hidden',
  },
  featuredCard: {
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  firstCard: {
    marginTop: 0,
  },
  featuredBadge: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    zIndex: 1,
  },
  featuredText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.surface,
    letterSpacing: 0.5,
  },
  cardContent: {
    padding: 24,
  },
  courseHeader: {
    marginBottom: 20,
  },
  titleSection: {
    marginBottom: 12,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 8,
    lineHeight: 28,
  },
  courseDescription: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
  levelIndicator: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  beginnerindicator: {
    backgroundColor: COLORS.success + '20',
  },
  intermediateindicator: {
    backgroundColor: COLORS.warning + '20',
  },
  advancedindicator: {
    backgroundColor: COLORS.error + '20',
  },
  levelText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
    letterSpacing: 0.3,
  },
  progressSection: {
    marginBottom: 20,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textSecondary,
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  progressBar: {
    height: 6,
    backgroundColor: COLORS.border,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  statsSection: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceVariant,
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIconText: {
    fontSize: 18,
  },
  statContent: {
    flex: 1,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.primary,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textTertiary,
    fontWeight: '500',
  },
  topicsSection: {
    marginBottom: 24,
  },
  topicsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },
  topicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  topicPill: {
    backgroundColor: COLORS.primary + '10',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  topicText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
  },
  actionSection: {
    alignItems: 'stretch',
  },
  actionButton: {
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  startButton: {
    backgroundColor: COLORS.primary,
  },
  continueButton: {
    backgroundColor: COLORS.secondary,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.surface,
    letterSpacing: 0.3,
  },
  quizGrid: {
    gap: 16,
  },
  quizCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
    position: 'relative',
  },
  completedQuizCard: {
    borderLeftWidth: 4,
    borderLeftColor: COLORS.success,
  },
  completedBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.success,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedText: {
    fontSize: 16,
    color: COLORS.surface,
    fontWeight: '700',
  },
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    flex: 1,
    marginRight: 12,
    lineHeight: 24,
  },
  difficultyChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  easychip: {
    backgroundColor: COLORS.success + '20',
  },
  mediumchip: {
    backgroundColor: COLORS.warning + '20',
  },
  hardchip: {
    backgroundColor: COLORS.error + '20',
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.text,
  },
  quizDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
    marginBottom: 20,
  },
  quizMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  metricItem: {
    alignItems: 'center',
    flex: 1,
  },
  metricIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 2,
  },
  metricLabel: {
    fontSize: 11,
    color: COLORS.textTertiary,
    fontWeight: '500',
    textAlign: 'center',
  },
  quizActionButton: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  retakeButton: {
    backgroundColor: COLORS.surface,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  quizActionText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.primary,
  },
  categoryCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryTitleSection: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  categoryProgress: {
    fontSize: 13,
    color: COLORS.textSecondary,
    fontWeight: '500',
  },
  categoryStats: {
    alignItems: 'center',
  },
  progressRing: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  progressRingText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.primary,
  },
  topicsList: {
    gap: 12,
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.surfaceVariant,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  studiedTopic: {
    backgroundColor: COLORS.success + '10',
    borderColor: COLORS.success + '30',
  },
  topicIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  topicIconText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textTertiary,
  },
  topicItemText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.text,
    flex: 1,
  },
  studiedTopicText: {
    color: COLORS.success,
    fontWeight: '600',
  },
});

export default InfoTab;