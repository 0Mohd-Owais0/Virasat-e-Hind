import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const courses = [
  {
    id: 1,
    title: "Indian Architecture Through Ages",
    description: "Explore the evolution of Indian architecture from ancient Indus Valley to modern times.",
    lessons: 12,
    duration: "6 weeks",
    level: "Beginner",
    topics: ["Mughal Architecture", "Dravidian Style", "Indo-Islamic", "Colonial Influence"]
  },
  {
    id: 2,
    title: "Cultural Heritage of India",
    description: "Deep dive into India's rich cultural traditions, festivals, and customs.",
    lessons: 15,
    duration: "8 weeks",
    level: "Intermediate",
    topics: ["Festivals", "Dance Forms", "Music Traditions", "Regional Cultures"]
  },
  {
    id: 3,
    title: "Ancient Indian History",
    description: "Journey through ancient Indian civilizations and their contributions.",
    lessons: 10,
    duration: "5 weeks",
    level: "Advanced",
    topics: ["Indus Valley", "Mauryan Empire", "Gupta Period", "Medieval India"]
  }
];

const quizTopics = [
  {
    id: 1,
    title: "Monuments & Architecture",
    description: "Test your knowledge about Indian monuments and architectural styles.",
    questions: 25,
    difficulty: "Medium",
    estimatedTime: "15 min"
  },
  {
    id: 2,
    title: "Indian Festivals",
    description: "Quiz about various festivals celebrated across different regions of India.",
    questions: 20,
    difficulty: "Easy",
    estimatedTime: "10 min"
  },
  {
    id: 3,
    title: "Historical Personalities",
    description: "Learn about great personalities who shaped Indian history and culture.",
    questions: 30,
    difficulty: "Hard",
    estimatedTime: "20 min"
  },
  {
    id: 4,
    title: "Art & Literature",
    description: "Explore India's rich artistic and literary heritage.",
    questions: 18,
    difficulty: "Medium",
    estimatedTime: "12 min"
  }
];

const learningTopics = [
  {
    category: "Architecture",
    topics: ["Temple Architecture", "Fort Construction", "Palace Design", "Tomb Architecture", "Modern Buildings"]
  },
  {
    category: "Culture & Traditions",
    topics: ["Classical Dance", "Folk Music", "Traditional Crafts", "Regional Cuisines", "Wedding Customs"]
  },
  {
    category: "History",
    topics: ["Ancient Civilizations", "Medieval Period", "Colonial Era", "Freedom Struggle", "Modern India"]
  },
  {
    category: "Geography & Nature",
    topics: ["Sacred Rivers", "Mountain Ranges", "Wildlife Sanctuaries", "National Parks", "Climate Regions"]
  }
];

const InfoTab = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const renderCourses = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Available Courses</Text>
      {courses.map((course) => (
        <View key={course.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{course.title}</Text>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{course.level}</Text>
            </View>
          </View>
          <Text style={styles.cardDescription}>{course.description}</Text>
          
          <View style={styles.courseStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{course.lessons}</Text>
              <Text style={styles.statLabel}>Lessons</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{course.duration}</Text>
              <Text style={styles.statLabel}>Duration</Text>
            </View>
          </View>

          <View style={styles.topicsContainer}>
            <Text style={styles.topicsLabel}>Topics Covered:</Text>
            <View style={styles.topicsList}>
              {course.topics.map((topic, index) => (
                <View key={index} style={styles.topicTag}>
                  <Text style={styles.topicText}>{topic}</Text>
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Enroll Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  const renderQuizzes = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Practice Quizzes</Text>
      {quizTopics.map((quiz) => (
        <View key={quiz.id} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{quiz.title}</Text>
            <View style={[styles.levelBadge, 
              quiz.difficulty === 'Easy' && styles.easyBadge,
              quiz.difficulty === 'Medium' && styles.mediumBadge,
              quiz.difficulty === 'Hard' && styles.hardBadge
            ]}>
              <Text style={styles.levelText}>{quiz.difficulty}</Text>
            </View>
          </View>
          <Text style={styles.cardDescription}>{quiz.description}</Text>
          
          <View style={styles.quizStats}>
            <View style={styles.statRow}>
              <Text style={styles.statText}>📝 {quiz.questions} Questions</Text>
              <Text style={styles.statText}>⏱️ {quiz.estimatedTime}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  const renderTopics = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Learning Topics</Text>
      {learningTopics.map((category, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{category.category}</Text>
          <View style={styles.topicsList}>
            {category.topics.map((topic, topicIndex) => (
              <TouchableOpacity key={topicIndex} style={styles.topicButton}>
                <Text style={styles.topicButtonText}>{topic}</Text>
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
        <Text style={styles.title}>Learning Center</Text>
        <Text style={styles.subtitle}>Explore courses, take quizzes, and dive deep into cultural topics</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'courses' && styles.activeTab]} 
          onPress={() => setActiveTab('courses')}
        >
          <Text style={[styles.tabText, activeTab === 'courses' && styles.activeTabText]}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'quizzes' && styles.activeTab]} 
          onPress={() => setActiveTab('quizzes')}
        >
          <Text style={[styles.tabText, activeTab === 'quizzes' && styles.activeTabText]}>Quizzes</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'topics' && styles.activeTab]} 
          onPress={() => setActiveTab('topics')}
        >
          <Text style={[styles.tabText, activeTab === 'topics' && styles.activeTabText]}>Topics</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'quizzes' && renderQuizzes()}
        {activeTab === 'topics' && renderTopics()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E6D3',
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6B2D2D',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#514a44',
    lineHeight: 22,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: '#D9C6A1',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#6B2D2D',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8A7C6E',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6B2D2D',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9C6A1',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 22,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E2E2E',
    flex: 1,
    marginRight: 12,
  },
  cardDescription: {
    fontSize: 14,
    color: '#514a44',
    lineHeight: 20,
    marginBottom: 16,
  },
  levelBadge: {
    backgroundColor: '#C59D5F',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  easyBadge: {
    backgroundColor: '#4CAF50',
  },
  mediumBadge: {
    backgroundColor: '#FF9800',
  },
  hardBadge: {
    backgroundColor: '#F44336',
  },
  levelText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  courseStats: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6B2D2D',
  },
  statLabel: {
    fontSize: 12,
    color: '#8A7C6E',
    marginTop: 2,
  },
  quizStats: {
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statText: {
    fontSize: 14,
    color: '#514a44',
  },
  topicsContainer: {
    marginBottom: 16,
  },
  topicsLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E2E2E',
    marginBottom: 8,
  },
  topicsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  topicTag: {
    backgroundColor: '#F5E6D3',
    borderWidth: 1,
    borderColor: '#D9C6A1',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  topicText: {
    fontSize: 12,
    color: '#2E2E2E',
  },
  topicButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9C6A1',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 8,
  },
  topicButtonText: {
    fontSize: 14,
    color: '#2E2E2E',
    textAlign: 'center',
  },
  primaryBtn: {
    backgroundColor: '#6B2D2D',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default InfoTab;
