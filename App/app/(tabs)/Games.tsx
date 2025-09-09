import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const quizQuestions = [
  { q: "Which monument is known as a symbol of love?", choices: ["Charminar", "Taj Mahal", "India Gate", "Sanchi Stupa"], answer: 1 },
  { q: "Hampi was the capital of which empire?", choices: ["Maurya", "Gupta", "Vijayanagara", "Maratha"], answer: 2 },
  { q: "Konark Sun Temple is dedicated to which deity?", choices: ["Shiva", "Vishnu", "Surya", "Durga"], answer: 2 }
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

  const selectAnswer = (answerIndex:any) => {
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

  const getButtonStyle = (choiceIndex:any) => {
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

  const renderQuizContent = () => {
    if (quizState.currentQuestion === -1) {
      return (
        <View style={styles.quizStart}>
          <Text style={styles.quizText}>Press Start to begin the Cultural Quiz!</Text>
          <TouchableOpacity style={styles.primaryBtn} onPress={startQuiz}>
            <Text style={styles.primaryBtnText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (quizState.isFinished) {
      return (
        <View style={styles.quizFinished}>
          <Text style={styles.quizText}>Quiz Complete!</Text>
          <Text style={styles.finalScore}>
            Final Score: {quizState.score}/{quizQuestions.length}
          </Text>
          <TouchableOpacity style={styles.primaryBtn} onPress={resetQuiz}>
            <Text style={styles.primaryBtnText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    const currentQ = getCurrentQuestion();
    if (!currentQ) return null;

    return (
      <View style={styles.quizActive}>
        <Text style={styles.quizText}>{currentQ.q}</Text>
        
        <View style={styles.choicesContainer}>
          {currentQ.choices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={getButtonStyle(index)}
              onPress={() => selectAnswer(index)}
              disabled={quizState.showAnswer}
            >
              <Text style={styles.choiceText}>{choice}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.quizActions}>
          <TouchableOpacity 
            style={[styles.btn, !quizState.showAnswer && styles.btnDisabled]} 
            onPress={nextQuestion}
            disabled={!quizState.showAnswer}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.quizMeta}>
          Q{quizState.currentQuestion + 1} of {quizQuestions.length} • 
          {quizState.showAnswer ? 
            (quizState.selectedAnswer === currentQ.answer ? ' Correct' : ' Wrong') : 
            ''
          } • Score {quizState.score}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cultural Games</Text>
        <Text style={styles.subtitle}>Test your knowledge with our cultural quiz and more games coming soon!</Text>
      </View>

      <View style={styles.gamesContainer}>
        <View style={styles.gameCard}>
          <Text style={styles.cardTitle}>Quick Culture Quiz</Text>
          {renderQuizContent()}
        </View>

        <View style={styles.gameCard}>
          <Text style={styles.cardTitle}>Map Hunt</Text>
          <Text style={styles.cardDesc}>
            Coming Soon: Show a photo/hint and ask users to click the correct marker. 
            Score by speed & accuracy.
          </Text>
          <TouchableOpacity style={[styles.btn, styles.btnDisabled]} disabled>
            <Text style={styles.btnText}>Coming Soon</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gameCard}>
          <Text style={styles.cardTitle}>Traditions Match</Text>
          <Text style={styles.cardDesc}>
            Coming Soon: Match festivals to states, musical instruments to regions, etc. 
            Drag-and-drop gameplay.
          </Text>
          <TouchableOpacity style={[styles.btn, styles.btnDisabled]} disabled>
            <Text style={styles.btnText}>Coming Soon</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  gamesContainer: {
    padding: 20,
    paddingTop: 0,
    gap: 16,
  },
  gameCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9C6A1',
    borderRadius: 18,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 22,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E2E2E',
    marginBottom: 12,
  },
  cardDesc: {
    fontSize: 14,
    color: '#514a44',
    lineHeight: 20,
    marginBottom: 16,
  },
  quizStart: {
    alignItems: 'center',
    gap: 12,
  },
  quizFinished: {
    alignItems: 'center',
    gap: 12,
  },
  quizActive: {
    gap: 12,
  },
  quizText: {
    fontSize: 16,
    color: '#2E2E2E',
    lineHeight: 22,
    textAlign: 'center',
  },
  finalScore: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6B2D2D',
  },
  choicesContainer: {
    gap: 8,
  },
  choiceBtn: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9C6A1',
    backgroundColor: '#FFFFFF',
  },
  choiceBtnSelected: {
    borderColor: '#C59D5F',
    backgroundColor: '#FFF9F0',
  },
  choiceBtnCorrect: {
    borderColor: '#C59D5F',
    backgroundColor: '#F0F8F0',
  },
  choiceBtnWrong: {
    borderColor: '#E57373',
    backgroundColor: '#FFEBEE',
  },
  choiceBtnDisabled: {
    opacity: 0.6,
  },
  choiceText: {
    fontSize: 14,
    color: '#2E2E2E',
    textAlign: 'left',
  },
  quizActions: {
    alignItems: 'flex-start',
  },
  quizMeta: {
    fontSize: 12,
    color: '#6b5b4a',
    textAlign: 'center',
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D9C6A1',
    backgroundColor: '#FFFFFF',
  },
  btnDisabled: {
    opacity: 0.5,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E2E2E',
    textAlign: 'center',
  },
  primaryBtn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#6B2D2D',
  },
  primaryBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});