import { Heart, Shield, Users, Zap } from "lucide-react";

export const useQuizData = (translate: any) => {
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