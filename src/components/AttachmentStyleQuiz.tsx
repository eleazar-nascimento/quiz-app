import { useState } from 'react';
import { ChevronRight, Heart, Shield, Zap, Users } from 'lucide-react';

const TRANSLATIONS = {
  "pt-BR": {
    "discoverTitle": "Descubra Seu",
    "attachmentStyleTitle": "Estilo de Apego",
    "welcomeDescription": "Compreender como você se conecta com outras pessoas pode transformar seus relacionamentos e aprofundar seu autoconhecimento",
    "beginJourneyButton": "Iniciar Sua Jornada",
    "takeQuizAgainButton": "Fazer Quiz Novamente",
    "progressIndicator": "de",
    "yourStrengthsTitle": "Suas Forças",
    "growthPathTitle": "Caminho de Crescimento",
    "question1": "Quando alguém que eu amo se afasta, eu tendo a...",
    "question1Option1": "Dar-lhes espaço enquanto permaneço disponível",
    "question1Option2": "Me preocupar que estão perdendo interesse em mim",
    "question1Option3": "Focar em outras coisas da minha vida",
    "question1Option4": "Me sentir confuso e me afastar também",
    "question2": "Nos relacionamentos, acho mais fácil...",
    "question2Option1": "Compartilhar meus sentimentos de forma aberta e honesta",
    "question2Option2": "Expressar minhas necessidades, mesmo que seja vulnerável",
    "question2Option3": "Manter algumas partes de mim mesmo privadas",
    "question2Option4": "Lutar entre querer proximidade e independência",
    "question3": "Quando se trata de depender dos outros, eu...",
    "question3Option1": "Me sinto confortável pedindo ajuda quando preciso",
    "question3Option2": "Frequentemente busco confirmação daqueles próximos a mim",
    "question3Option3": "Prefiro lidar com as coisas sozinho",
    "question3Option4": "Quero apoio, mas temo ser um fardo",
    "question4": "Minha dinâmica de relacionamento ideal envolve...",
    "question4Option1": "Equilíbrio entre união e independência",
    "question4Option2": "Muito tempo de qualidade e proximidade emocional",
    "question4Option3": "Manter minha autonomia e espaço pessoal",
    "question4Option4": "Encontrar alguém que entenda minha complexidade",
    "question5": "Quando conflitos surgem nos relacionamentos, eu tipicamente...",
    "question5Option1": "Os abordo calmamente e trabalho em direção à resolução",
    "question5Option2": "Me sinto ansioso até conversarmos sobre isso",
    "question5Option3": "Preciso de tempo sozinho antes de discutir",
    "question5Option4": "Me sinto sobrecarregado e inseguro sobre como responder",
    "question6": "A confiança nos relacionamentos vem...",
    "question6Option1": "Naturalmente conforme vou conhecendo alguém",
    "question6Option2": "Com constante tranquilização e validação",
    "question6Option3": "Lentamente, e mantenho um ceticismo saudável",
    "question6Option4": "Em ondas - às vezes facilmente, às vezes de forma alguma",
    "secureAttachmentTitle": "Apego Seguro",
    "secureAttachmentDescription": "Você tem uma abordagem saudável e equilibrada para relacionamentos. Se sente confortável com intimidade e independência, consegue comunicar suas necessidades efetivamente, e a confiança vem naturalmente para você.",
    "secureAttachmentTrait1": "Emocionalmente disponível",
    "secureAttachmentTrait2": "Bom em estabelecer limites",
    "secureAttachmentTrait3": "Confortável com intimidade",
    "secureAttachmentTrait4": "Comunicador eficaz",
    "secureAttachmentGrowth": "Sua base segura permite formar conexões profundas e significativas. Continue nutrindo seus relacionamentos com comunicação aberta e empatia.",
    "anxiousAttachmentTitle": "Apego Ansioso",
    "anxiousAttachmentDescription": "Você valoriza profundamente relacionamentos próximos e às vezes pode se preocupar com os sentimentos de seu parceiro em relação a você. Tem um grande coração e capacidade para conexão emocional profunda.",
    "anxiousAttachmentTrait1": "Altamente empático",
    "anxiousAttachmentTrait2": "Valoriza proximidade emocional",
    "anxiousAttachmentTrait3": "Intuitivo sobre sentimentos dos outros",
    "anxiousAttachmentTrait4": "Apaixonado e carinhoso",
    "anxiousAttachmentGrowth": "Pratique técnicas de autorregulação emocional e construa seu senso de autoestima independente dos relacionamentos. Sua sensibilidade é uma força quando equilibrada com autoconfiança.",
    "avoidantAttachmentTitle": "Apego Evitativo",
    "avoidantAttachmentDescription": "Você valoriza sua independência e autossuficiência. Embora possa formar relacionamentos, prefere manter alguma distância emocional e espaço pessoal.",
    "avoidantAttachmentTrait1": "Autossuficiente",
    "avoidantAttachmentTrait2": "Pensador independente",
    "avoidantAttachmentTrait3": "Limites sólidos",
    "avoidantAttachmentTrait4": "Valoriza crescimento pessoal",
    "avoidantAttachmentGrowth": "Desafie-se a compartilhar momentos vulneráveis com pessoas de confiança. Sua independência é valiosa, e combiná-la com abertura emocional pode aprofundar suas conexões.",
    "fearfulAttachmentTitle": "Apego Desorganizado",
    "fearfulAttachmentDescription": "Você experimenta uma mistura complexa de desejar relacionamentos próximos enquanto também teme a vulnerabilidade. Isso cria uma profundidade única e compreensão da complexidade humana.",
    "fearfulAttachmentTrait1": "Profundamente introspectivo",
    "fearfulAttachmentTrait2": "Altamente perceptivo",
    "fearfulAttachmentTrait3": "Gama emocional complexa",
    "fearfulAttachmentTrait4": "Resiliente",
    "fearfulAttachmentGrowth": "Pratique autocompaixão e vulnerabilidade gradual com pessoas seguras. Sua habilidade de ver múltiplas perspectivas é um presente que pode levar a conexões profundas."
  },
  "en-US": {
    "discoverTitle": "Discover Your",
    "attachmentStyleTitle": "Attachment Style",
    "welcomeDescription": "Understanding how you connect with others can transform your relationships and deepen self-awareness",
    "beginJourneyButton": "Begin Your Journey",
    "takeQuizAgainButton": "Take Quiz Again",
    "progressIndicator": "of",
    "yourStrengthsTitle": "Your Strengths",
    "growthPathTitle": "Growth Path",
    "question1": "When someone I care about pulls away, I tend to...",
    "question1Option1": "Give them space while staying available",
    "question1Option2": "Worry they're losing interest in me",
    "question1Option3": "Focus on other things in my life",
    "question1Option4": "Feel confused and withdraw myself",
    "question2": "In relationships, I find it easiest to...",
    "question2Option1": "Share my feelings openly and honestly",
    "question2Option2": "Express my needs, even if it feels vulnerable",
    "question2Option3": "Keep some parts of myself private",
    "question2Option4": "Struggle between wanting closeness and independence",
    "question3": "When it comes to depending on others, I...",
    "question3Option1": "Feel comfortable asking for help when needed",
    "question3Option2": "Often seek reassurance from those close to me",
    "question3Option3": "Prefer to handle things on my own",
    "question3Option4": "Want support but fear being a burden",
    "question4": "My ideal relationship dynamic involves...",
    "question4Option1": "Balance between togetherness and independence",
    "question4Option2": "Lots of quality time and emotional closeness",
    "question4Option3": "Maintaining my autonomy and personal space",
    "question4Option4": "Finding someone who understands my complexity",
    "question5": "When conflicts arise in relationships, I typically...",
    "question5Option1": "Address them calmly and work toward resolution",
    "question5Option2": "Feel anxious until we've talked it through",
    "question5Option3": "Need time alone before discussing",
    "question5Option4": "Feel overwhelmed and unsure how to respond",
    "question6": "Trust in relationships comes...",
    "question6Option1": "Naturally as I get to know someone",
    "question6Option2": "With constant reassurance and validation",
    "question6Option3": "Slowly, and I maintain healthy skepticism",
    "question6Option4": "In waves - sometimes easily, sometimes not at all",
    "secureAttachmentTitle": "Secure Attachment",
    "secureAttachmentDescription": "You have a healthy, balanced approach to relationships. You're comfortable with intimacy and independence, can effectively communicate your needs, and trust comes naturally to you.",
    "secureAttachmentTrait1": "Emotionally available",
    "secureAttachmentTrait2": "Good at setting boundaries",
    "secureAttachmentTrait3": "Comfortable with intimacy",
    "secureAttachmentTrait4": "Effective communicator",
    "secureAttachmentGrowth": "Your secure foundation allows you to form deep, meaningful connections. Continue nurturing your relationships with open communication and empathy.",
    "anxiousAttachmentTitle": "Anxious Attachment",
    "anxiousAttachmentDescription": "You deeply value close relationships and may sometimes worry about your partner's feelings toward you. You have a big heart and capacity for deep emotional connection.",
    "anxiousAttachmentTrait1": "Highly empathetic",
    "anxiousAttachmentTrait2": "Values emotional closeness",
    "anxiousAttachmentTrait3": "Intuitive about others' feelings",
    "anxiousAttachmentTrait4": "Passionate and caring",
    "anxiousAttachmentGrowth": "Practice self-soothing techniques and build your sense of self-worth independent of relationships. Your sensitivity is a strength when balanced with self-assurance.",
    "avoidantAttachmentTitle": "Avoidant Attachment",
    "avoidantAttachmentDescription": "You value your independence and self-reliance. While you can form relationships, you prefer maintaining some emotional distance and personal space.",
    "avoidantAttachmentTrait1": "Self-reliant",
    "avoidantAttachmentTrait2": "Independent thinker",
    "avoidantAttachmentTrait3": "Strong boundaries",
    "avoidantAttachmentTrait4": "Values personal growth",
    "avoidantAttachmentGrowth": "Challenge yourself to share vulnerable moments with trusted people. Your independence is valuable, and combining it with emotional openness can deepen your connections.",
    "fearfulAttachmentTitle": "Fearful-Avoidant Attachment",
    "fearfulAttachmentDescription": "You experience a complex mix of wanting close relationships while also fearing vulnerability. This creates a unique depth and understanding of human complexity.",
    "fearfulAttachmentTrait1": "Deeply introspective",
    "fearfulAttachmentTrait2": "Highly perceptive",
    "fearfulAttachmentTrait3": "Complex emotional range",
    "fearfulAttachmentTrait4": "Resilient",
    "fearfulAttachmentGrowth": "Practice self-compassion and gradual vulnerability with safe people. Your ability to see multiple perspectives is a gift that can lead to profound connections."
  }
};

const useLocalization = () => {
  const DEFAULT_LOCALE = 'pt-BR'; 
  const browserLocale = navigator.languages?.[0] || navigator.language || DEFAULT_LOCALE;
  
  const findMatchingLocale = (locale) => {
    if (TRANSLATIONS[locale]) return locale;
    const lang = locale.split('-')[0];
    const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
    return match || DEFAULT_LOCALE;
  };
  
  const currentLocale = findMatchingLocale(browserLocale);
  
  const translate = (key) => TRANSLATIONS[currentLocale]?.[key] || TRANSLATIONS[DEFAULT_LOCALE][key] || key;
  
  return { translate, currentLocale };
};

const useQuizData = (translate) => {
  const questions = [
    {
      text: translate('question1'),
      options: [
        { text: translate('question1Option1'), score: { secure: 3, anxious: 0, avoidant: 1, fearful: 1 } },
        { text: translate('question1Option2'), score: { secure: 0, anxious: 3, avoidant: 0, fearful: 2 } },
        { text: translate('question1Option3'), score: { secure: 1, anxious: 0, avoidant: 3, fearful: 1 } },
        { text: translate('question1Option4'), score: { secure: 0, anxious: 1, avoidant: 1, fearful: 3 } }
      ]
    },
    {
      text: translate('question2'),
      options: [
        { text: translate('question2Option1'), score: { secure: 3, anxious: 1, avoidant: 0, fearful: 0 } },
        { text: translate('question2Option2'), score: { secure: 2, anxious: 3, avoidant: 0, fearful: 1 } },
        { text: translate('question2Option3'), score: { secure: 0, anxious: 0, avoidant: 3, fearful: 2 } },
        { text: translate('question2Option4'), score: { secure: 0, anxious: 1, avoidant: 1, fearful: 3 } }
      ]
    },
    {
      text: translate('question3'),
      options: [
        { text: translate('question3Option1'), score: { secure: 3, anxious: 1, avoidant: 0, fearful: 0 } },
        { text: translate('question3Option2'), score: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
        { text: translate('question3Option3'), score: { secure: 0, anxious: 0, avoidant: 3, fearful: 1 } },
        { text: translate('question3Option4'), score: { secure: 1, anxious: 1, avoidant: 1, fearful: 3 } }
      ]
    },
    {
      text: translate('question4'),
      options: [
        { text: translate('question4Option1'), score: { secure: 3, anxious: 0, avoidant: 1, fearful: 0 } },
        { text: translate('question4Option2'), score: { secure: 1, anxious: 3, avoidant: 0, fearful: 1 } },
        { text: translate('question4Option3'), score: { secure: 1, anxious: 0, avoidant: 3, fearful: 1 } },
        { text: translate('question4Option4'), score: { secure: 0, anxious: 1, avoidant: 0, fearful: 3 } }
      ]
    },
    {
      text: translate('question5'),
      options: [
        { text: translate('question5Option1'), score: { secure: 3, anxious: 0, avoidant: 0, fearful: 0 } },
        { text: translate('question5Option2'), score: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
        { text: translate('question5Option3'), score: { secure: 1, anxious: 0, avoidant: 3, fearful: 1 } },
        { text: translate('question5Option4'), score: { secure: 0, anxious: 1, avoidant: 0, fearful: 3 } }
      ]
    },
    {
      text: translate('question6'),
      options: [
        { text: translate('question6Option1'), score: { secure: 3, anxious: 0, avoidant: 1, fearful: 0 } },
        { text: translate('question6Option2'), score: { secure: 0, anxious: 3, avoidant: 0, fearful: 1 } },
        { text: translate('question6Option3'), score: { secure: 1, anxious: 0, avoidant: 3, fearful: 1 } },
        { text: translate('question6Option4'), score: { secure: 0, anxious: 1, avoidant: 0, fearful: 3 } }
      ]
    }
  ];

  const attachmentStyles = {
    secure: {
      title: translate('secureAttachmentTitle'),
      icon: <Heart className="w-12 h-12" />,
      color: "from-rose-400 to-pink-600",
      description: translate('secureAttachmentDescription'),
      traits: [
        translate('secureAttachmentTrait1'), 
        translate('secureAttachmentTrait2'), 
        translate('secureAttachmentTrait3'), 
        translate('secureAttachmentTrait4')
      ],
      growth: translate('secureAttachmentGrowth')
    },
    anxious: {
      title: translate('anxiousAttachmentTitle'),
      icon: <Zap className="w-12 h-12" />,
      color: "from-amber-400 to-orange-600",
      description: translate('anxiousAttachmentDescription'),
      traits: [
        translate('anxiousAttachmentTrait1'), 
        translate('anxiousAttachmentTrait2'), 
        translate('anxiousAttachmentTrait3'), 
        translate('anxiousAttachmentTrait4')
      ],
      growth: translate('anxiousAttachmentGrowth')
    },
    avoidant: {
      title: translate('avoidantAttachmentTitle'),
      icon: <Shield className="w-12 h-12" />,
      color: "from-emerald-400 to-teal-600",
      description: translate('avoidantAttachmentDescription'),
      traits: [
        translate('avoidantAttachmentTrait1'), 
        translate('avoidantAttachmentTrait2'), 
        translate('avoidantAttachmentTrait3'), 
        translate('avoidantAttachmentTrait4')
      ],
      growth: translate('avoidantAttachmentGrowth')
    },
    fearful: {
      title: translate('fearfulAttachmentTitle'),
      icon: <Users className="w-12 h-12" />,
      color: "from-purple-400 to-indigo-600",
      description: translate('fearfulAttachmentDescription'),
      traits: [
        translate('fearfulAttachmentTrait1'), 
        translate('fearfulAttachmentTrait2'), 
        translate('fearfulAttachmentTrait3'), 
        translate('fearfulAttachmentTrait4')
      ],
      growth: translate('fearfulAttachmentGrowth')
    }
  };

  return { questions, attachmentStyles };
};

const useQuizLogic = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const calculateResult = () => {
    const scores = { secure: 0, anxious: 0, avoidant: 0, fearful: 0 };
    
    answers.forEach(answer => {
      Object.keys(scores).forEach(style => {
        scores[style] += answer.score[style];
      });
    });

    const maxScore = Math.max(...Object.values(scores));
    return Object.keys(scores).find(key => scores[key] === maxScore);
  };

  const handleAnswer = (option, questionsLength) => {
    setIsAnimating(true);
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questionsLength - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const style = calculateResult();
        setResult(style);
        setCurrentScreen('result');
      }
      setIsAnimating(false);
    }, 300);
  };

  const resetQuiz = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen('welcome');
      setCurrentQuestion(0);
      setAnswers([]);
      setResult(null);
      setIsAnimating(false);
    }, 300);
  };

  const startQuiz = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen('quiz');
      setIsAnimating(false);
    }, 300);
  };

  return {
    currentScreen,
    currentQuestion,
    result,
    isAnimating,
    handleAnswer,
    resetQuiz,
    startQuiz
  };
};

const ProgressBar = ({ current, total }) => (
  <div className="flex gap-2">
    {Array.from({ length: total }, (_, index) => (
      <div
        key={index}
        className={`h-2 rounded-full transition-all duration-500 ${
          index < current
            ? 'w-12 bg-gradient-to-r from-pink-400 to-violet-400'
            : index === current
            ? 'w-16 bg-white/50'
            : 'w-8 bg-white/20'
        }`}
      />
    ))}
  </div>
);

const WelcomeScreen = ({ translate, onStart }) => (
  <div className="text-center space-y-8">
    <div className="relative">
      <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500 to-violet-600 opacity-30 rounded-full"></div>
      <h1 className="relative text-6xl font-bold text-white mb-4 tracking-tight">
        {translate('discoverTitle')}
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
          {translate('attachmentStyleTitle')}
        </span>
      </h1>
    </div>
    
    <p className="text-xl text-gray-200 max-w-md mx-auto leading-relaxed">
      {translate('welcomeDescription')}
    </p>
    
    <ActionButton onClick={onStart}>
      {translate('beginJourneyButton')}
    </ActionButton>
  </div>
);

const QuizScreen = ({ 
  translate, 
  currentQuestion, 
  questions, 
  onAnswer, 
  isAnimating 
}) => (
  <div className="space-y-8">
    <div className="flex justify-between items-center mb-8">
      <ProgressBar current={currentQuestion} total={questions.length} />
      <span className="text-white/60 text-sm font-medium">
        {currentQuestion + 1} {translate('progressIndicator')} {questions.length}
      </span>
    </div>

    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
        {questions[currentQuestion].text}
      </h2>
      
      <div className="space-y-3">
        {questions[currentQuestion].options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            onClick={() => onAnswer(option)}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  </div>
);

const OptionButton = ({ option, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-full text-left p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span className="text-lg leading-relaxed">{option.text}</span>
  </button>
);

const ResultScreen = ({ translate, result, attachmentStyles, onRestart }) => (
  <div className="space-y-8">
    <div className="text-center">
      <div className={`inline-flex p-6 rounded-full bg-gradient-to-br ${attachmentStyles[result].color} text-white mb-6 shadow-2xl`}>
        {attachmentStyles[result].icon}
      </div>
      
      <h2 className="text-5xl font-bold text-white mb-4">
        {attachmentStyles[result].title}
      </h2>
      
      <p className="text-xl text-gray-200 max-w-lg mx-auto leading-relaxed mb-8">
        {attachmentStyles[result].description}
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl space-y-6">
      <StrengthsSection 
        title={translate('yourStrengthsTitle')}
        traits={attachmentStyles[result].traits}
      />
      
      <GrowthSection
        title={translate('growthPathTitle')}
        growth={attachmentStyles[result].growth}
      />
    </div>

    <div className="text-center">
      <ActionButton onClick={onRestart}>
        {translate('takeQuizAgainButton')}
      </ActionButton>
    </div>
  </div>
);

const StrengthsSection = ({ title, traits }) => (
  <div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <div className="grid grid-cols-2 gap-3">
      {traits.map((trait, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white/90 text-center"
        >
          {trait}
        </div>
      ))}
    </div>
  </div>
);

const GrowthSection = ({ title, growth }) => (
  <div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-200 leading-relaxed">{growth}</p>
  </div>
);

const ActionButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl shadow-lg"
  >
    <span>{children}</span>
    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
  </button>
);

const AttachmentStyleQuiz = () => {
  const { translate } = useLocalization();
  const { questions, attachmentStyles } = useQuizData(translate);
  const {
    currentScreen,
    currentQuestion,
    result,
    isAnimating,
    handleAnswer,
    resetQuiz,
    startQuiz
  } = useQuizLogic();

  const handleAnswerWithContext = (option) => {
    handleAnswer(option, questions.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className={`transition-all duration-500 transform ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
          {currentScreen === 'welcome' && (
            <WelcomeScreen translate={translate} onStart={startQuiz} />
          )}

          {currentScreen === 'quiz' && (
            <QuizScreen
              translate={translate}
              currentQuestion={currentQuestion}
              questions={questions}
              onAnswer={handleAnswerWithContext}
              isAnimating={isAnimating}
            />
          )}

          {currentScreen === 'result' && result && (
            <ResultScreen
              translate={translate}
              result={result}
              attachmentStyles={attachmentStyles}
              onRestart={resetQuiz}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AttachmentStyleQuiz; 