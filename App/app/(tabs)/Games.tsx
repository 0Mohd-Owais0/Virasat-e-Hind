// 





import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// Updated color scheme
const MainColors = {
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

const quizQuestions = [
  { 
    q: "Which monument is known as a symbol of love?", 
    choices: ["Charminar", "Taj Mahal", "India Gate", "Sanchi Stupa"], 
    answer: 1,
    explanation: "The Taj Mahal was built by Emperor Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal."
  },
  { 
    q: "Hampi was the capital of which empire?", 
    choices: ["Maurya", "Gupta", "Vijayanagara", "Maratha"], 
    answer: 2,
    explanation: "Hampi served as the capital of the powerful Vijayanagara Empire from the 14th to 16th centuries."
  },
  { 
    q: "Konark Sun Temple is dedicated to which deity?", 
    choices: ["Shiva", "Vishnu", "Surya", "Durga"], 
    answer: 2,
    explanation: "The Konark Sun Temple in Odisha is dedicated to Surya, the Hindu Sun God."
  },
  {
    q: "Which fort is known as the 'Red Fort'?",
    choices: ["Golconda Fort", "Lal Qila", "Amber Fort", "Mehrangarh Fort"],
    answer: 1,
    explanation: "Lal Qila (Red Fort) in Delhi was the main residence of the Mughal emperors for nearly 200 years."
  },
  {
    q: "Ajanta Caves are famous for which art form?",
    choices: ["Sculptures", "Paintings", "Architecture", "All of the above"],
    answer: 3,
    explanation: "The Ajanta Caves are renowned for their ancient Buddhist rock-cut cave monuments, featuring exquisite paintings, sculptures, and architecture."
  }
];

export default function GamesTab(){
  const [quizState, setQuizState] = useState({
    currentQuestion: -1,
    score: 0,
    selectedAnswer: null,
    showAnswer: false,
    isFinished: false
  });

  const startQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      selectedAnswer: null,
      showAnswer: false,
      isFinished: false
    });
  };

  const selectAnswer = (answerIndex: any) => {
    if (quizState.showAnswer) return;
    
    const currentQ = quizQuestions[quizState.currentQuestion];
    const isCorrect = answerIndex === currentQ.answer;
    
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showAnswer: true,
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };

  const nextQuestion = () => {
    const nextIndex = quizState.currentQuestion + 1;
    
    if (nextIndex >= quizQuestions.length) {
      setQuizState(prev => ({
        ...prev,
        isFinished: true
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: nextIndex,
        selectedAnswer: null,
        showAnswer: false
      }));
    }
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: -1,
      score: 0,
      selectedAnswer: null,
      showAnswer: false,
      isFinished: false
    });
  };

  const getCurrentQuestion = () => {
    if (quizState.currentQuestion >= 0 && quizState.currentQuestion < quizQuestions.length) {
      return quizQuestions[quizState.currentQuestion];
    }
    return null;
  };

  const getButtonStyle = (choiceIndex: any) => {
    if (!quizState.showAnswer) {
      return quizState.selectedAnswer === choiceIndex ? 
        [styles.choiceBtn, styles.choiceBtnSelected] : 
        styles.choiceBtn;
    }
    
    const currentQ = getCurrentQuestion();
    if (currentQ && choiceIndex === currentQ.answer) {
      return [styles.choiceBtn, styles.choiceBtnCorrect];
    } else if (choiceIndex === quizState.selectedAnswer) {
      return [styles.choiceBtn, styles.choiceBtnWrong];
    }
    return [styles.choiceBtn, styles.choiceBtnDisabled];
  };

  const getScoreMessage = () => {
    const percentage = (quizState.score / quizQuestions.length) * 100;
    if (percentage >= 90) return "Excellent! You're a cultural expert! 🎉";
    if (percentage >= 70) return "Great job! You know your heritage well! 👏";
    if (percentage >= 50) return "Good effort! Keep exploring our culture! 📚";
    return "Don't worry, every expert started somewhere! 💪";
  };

  const renderQuizContent = () => {
    if (quizState.currentQuestion === -1) {
      return (
        <View style={styles.quizStart}>
          <View style={styles.quizIcon}>
            <Text style={styles.quizIconText}>🧠</Text>
          </View>
          <Text style={styles.quizStartTitle}>Cultural Heritage Quiz</Text>
          <Text style={styles.quizStartDesc}>
            Test your knowledge about India's magnificent monuments, temples, and cultural heritage. 
            {quizQuestions.length} questions await you!
          </Text>
          <TouchableOpacity style={styles.primaryBtn} onPress={startQuiz}>
            <Text style={styles.primaryBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (quizState.isFinished) {
      return (
        <View style={styles.quizFinished}>
          <View style={styles.quizIcon}>
            <Text style={styles.quizIconText}>
              {quizState.score === quizQuestions.length ? '🏆' : quizState.score >= quizQuestions.length * 0.7 ? '🎯' : '📖'}
            </Text>
          </View>
          <Text style={styles.quizFinishedTitle}>Quiz Complete!</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.finalScore}>
              {quizState.score}/{quizQuestions.length}
            </Text>
            <Text style={styles.scorePercentage}>
              {Math.round((quizState.score / quizQuestions.length) * 100)}%
            </Text>
          </View>
          <Text style={styles.scoreMessage}>{getScoreMessage()}</Text>
          <View style={styles.finishActions}>
            <TouchableOpacity style={styles.secondaryBtn} onPress={resetQuiz}>
              <Text style={styles.secondaryBtnText}>Play Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    const currentQ = getCurrentQuestion();
    if (!currentQ) return null;

    return (
      <View style={styles.quizActive}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((quizState.currentQuestion + 1) / quizQuestions.length) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {quizState.currentQuestion + 1} of {quizQuestions.length}
          </Text>
        </View>

        <Text style={styles.questionText}>{currentQ.q}</Text>
        
        <View style={styles.choicesContainer}>
          {currentQ.choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={getButtonStyle(index)}
              onPress={() => selectAnswer(index)}
              disabled={quizState.showAnswer}
            >
              <View style={styles.choiceContent}>
                <Text style={styles.choiceLabel}>{String.fromCharCode(65 + index)}</Text>
                <Text style={styles.choiceText}>{choice}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {quizState.showAnswer && (
          <View style={styles.explanationContainer}>
            <Text style={styles.explanationTitle}>
              {quizState.selectedAnswer === currentQ.answer ? '✅ Correct!' : '❌ Incorrect!'}
            </Text>
            <Text style={styles.explanationText}>
              {currentQ.explanation}
            </Text>
          </View>
        )}

        <View style={styles.quizActions}>
          <View style={styles.scoreDisplay}>
            <Text style={styles.scoreText}>Score: {quizState.score}</Text>
          </View>
          <TouchableOpacity 
            style={[styles.nextBtn, !quizState.showAnswer && styles.btnDisabled]} 
            onPress={nextQuestion}
            disabled={!quizState.showAnswer}
          >
            <Text style={styles.nextBtnText}>
              {quizState.currentQuestion + 1 === quizQuestions.length ? 'Finish' : 'Next Question'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cultural Games</Text>
        <Text style={styles.subtitle}>
          Explore India's rich heritage through interactive games and challenges. Learn while you play!
        </Text>
      </View>

      <View style={styles.gamesContainer}>
        {/* Active Quiz Game */}
        <View style={styles.gameCard}>
          <View style={styles.cardHeader}>
            <View style={styles.cardBadge}>
              <Text style={styles.cardBadgeText}>Active</Text>
            </View>
            <Text style={styles.cardTitle}>Heritage Knowledge Quiz</Text>
          </View>
          {renderQuizContent()}
        </View>

        {/* Coming Soon Games */}
        <View style={styles.gameCard}>
          <View style={styles.cardHeader}>
            <View style={styles.comingSoonBadge}>
              <Text style={styles.comingSoonBadgeText}>Coming Soon</Text>
            </View>
            <Text style={styles.cardTitle}>Moksha Patam</Text>
          </View>
          <Text style={styles.cardDesc}>
            🐍 The ancient ladder of salvation! Navigate through virtues and vices on your spiritual journey to achieve Moksha. 
            Experience the original snakes and ladders in its traditional form.
          </Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>• Traditional spiritual gameplay</Text>
            <Text style={styles.featureItem}>• Learn about virtues and vices</Text>
            <Text style={styles.featureItem}>• Beautiful ancient art style</Text>
          </View>
          <TouchableOpacity style={styles.comingSoonBtn} disabled>
            <Text style={styles.comingSoonBtnText}>Coming Soon</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gameCard}>
          <View style={styles.cardHeader}>
            <View style={styles.comingSoonBadge}>
              <Text style={styles.comingSoonBadgeText}>Coming Soon</Text>
            </View>
            <Text style={styles.cardTitle}>Chowka Bhara</Text>
          </View>
          <Text style={styles.cardDesc}>
            🎯 Ancient race game from Karnataka played with cowrie shells. Strategy meets chance in this traditional 
            cross-shaped board game that has entertained families for centuries.
          </Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>• Authentic cowrie shell gameplay</Text>
            <Text style={styles.featureItem}>• Multiplayer support</Text>
            <Text style={styles.featureItem}>• Historical context and rules</Text>
          </View>
          <TouchableOpacity style={styles.comingSoonBtn} disabled>
            <Text style={styles.comingSoonBtnText}>Coming Soon</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gameCard}>
          <View style={styles.cardHeader}>
            <View style={styles.comingSoonBadge}>
              <Text style={styles.comingSoonBadgeText}>Coming Soon</Text>
            </View>
            <Text style={styles.cardTitle}>Monument Hunt</Text>
          </View>
          <Text style={styles.cardDesc}>
            🗺️ Interactive map adventure! Identify monuments from photos and hints, then locate them on India's map. 
            Race against time to earn points based on speed and accuracy.
          </Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>• Real monument photos</Text>
            <Text style={styles.featureItem}>• Interactive India map</Text>
            <Text style={styles.featureItem}>• Time-based scoring</Text>
          </View>
          <TouchableOpacity style={styles.comingSoonBtn} disabled>
            <Text style={styles.comingSoonBtnText}>Coming Soon</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gameCard}>
          <View style={styles.cardHeader}>
            <View style={styles.comingSoonBadge}>
              <Text style={styles.comingSoonBadgeText}>Coming Soon</Text>
            </View>
            <Text style={styles.cardTitle}>Cultural Connections</Text>
          </View>
          <Text style={styles.cardDesc}>
            🎨 Master the art of matching! Connect festivals to states, musical instruments to regions, 
            and traditional foods to their origins. Beautiful drag-and-drop gameplay.
          </Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>• Drag-and-drop interface</Text>
            <Text style={styles.featureItem}>• Multiple categories</Text>
            <Text style={styles.featureItem}>• Cultural learning focus</Text>
          </View>
          <TouchableOpacity style={styles.comingSoonBtn} disabled>
            <Text style={styles.comingSoonBtnText}>Coming Soon</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainColors.background,
  },
  header: {
    padding: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: MainColors.textPrimary,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: MainColors.textSecondary,
    lineHeight: 24,
    fontWeight: '400',
  },
  gamesContainer: {
    padding: 20,
    paddingTop: 0,
    gap: 20,
  },
  gameCard: {
    backgroundColor: MainColors.white,
    borderWidth: 1,
    borderColor: MainColors.primary + '20',
    borderRadius: 20,
    padding: 20,
    shadowColor: MainColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardBadge: {
    backgroundColor: MainColors.primary,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  cardBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: MainColors.white,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  comingSoonBadge: {
    backgroundColor: MainColors.surface,
    borderWidth: 1,
    borderColor: MainColors.primary + '40',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  comingSoonBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: MainColors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: MainColors.textPrimary,
  },
  cardDesc: {
    fontSize: 14,
    color: MainColors.textSecondary,
    lineHeight: 22,
    marginBottom: 16,
  },
  featureList: {
    marginBottom: 16,
    gap: 6,
  },
  featureItem: {
    fontSize: 13,
    color: MainColors.textSecondary,
    lineHeight: 18,
  },

  // Quiz specific styles
  quizStart: {
    alignItems: 'center',
    gap: 16,
  },
  quizIcon: {
    width: 64,
    height: 64,
    backgroundColor: MainColors.primary50,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quizIconText: {
    fontSize: 32,
  },
  quizStartTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: MainColors.textPrimary,
    textAlign: 'center',
  },
  quizStartDesc: {
    fontSize: 14,
    color: MainColors.textSecondary,
    lineHeight: 20,
    textAlign: 'center',
  },

  quizFinished: {
    alignItems: 'center',
    gap: 16,
  },
  quizFinishedTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: MainColors.textPrimary,
  },
  scoreContainer: {
    alignItems: 'center',
    gap: 4,
  },
  finalScore: {
    fontSize: 32,
    fontWeight: '800',
    color: MainColors.primary,
  },
  scorePercentage: {
    fontSize: 16,
    fontWeight: '600',
    color: MainColors.textSecondary,
  },
  scoreMessage: {
    fontSize: 14,
    color: MainColors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  finishActions: {
    width: '100%',
  },

  quizActive: {
    gap: 20,
  },
  progressContainer: {
    gap: 8,
  },
  progressBar: {
    height: 6,
    backgroundColor: MainColors.surface,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: MainColors.primary,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
    color: MainColors.textSecondary,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: MainColors.textPrimary,
    lineHeight: 26,
    textAlign: 'center',
  },

  choicesContainer: {
    gap: 12,
  },
  choiceBtn: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: MainColors.surface,
    backgroundColor: MainColors.white,
  },
  choiceBtnSelected: {
    borderColor: MainColors.primary,
    backgroundColor: MainColors.primary50,
  },
  choiceBtnCorrect: {
    borderColor: '#10B981',
    backgroundColor: '#F0FDF4',
  },
  choiceBtnWrong: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  choiceBtnDisabled: {
    opacity: 0.6,
  },
  choiceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  choiceLabel: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: MainColors.surface,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: MainColors.textPrimary,
  },
  choiceText: {
    flex: 1,
    fontSize: 15,
    color: MainColors.textPrimary,
    fontWeight: '500',
  },

  explanationContainer: {
    backgroundColor: MainColors.primary50,
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: MainColors.primary,
  },
  explanationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: MainColors.textPrimary,
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 13,
    color: MainColors.textSecondary,
    lineHeight: 18,
  },

  quizActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreDisplay: {
    backgroundColor: MainColors.surface,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: MainColors.textPrimary,
  },

  // Button styles
  primaryBtn: {
    backgroundColor: MainColors.primary,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
    width: '100%',
  },
  primaryBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: MainColors.white,
    textAlign: 'center',
  },
  secondaryBtn: {
    backgroundColor: MainColors.white,
    borderWidth: 2,
    borderColor: MainColors.primary,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
    width: '100%',
  },
  secondaryBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: MainColors.primary,
    textAlign: 'center',
  },
  nextBtn: {
    backgroundColor: MainColors.primary,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  nextBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: MainColors.white,
  },
  comingSoonBtn: {
    backgroundColor: MainColors.surface,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
    opacity: 0.6,
  },
  comingSoonBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: MainColors.textSecondary,
    textAlign: 'center',
  },
  btnDisabled: {
    opacity: 0.5,
  },
});