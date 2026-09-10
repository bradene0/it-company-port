export type AssessmentQuestion = {
  id: string;
  question: string;
  detail: string;
  options: { label: string; value: number }[];
};

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "mfa",
    question: "Is MFA required for business email and cloud accounts?",
    detail: "Multi-factor authentication blocks many account takeover attempts even when a password is stolen.",
    options: [
      { label: "Yes, for everyone", value: 20 },
      { label: "For some users", value: 10 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "backup",
    question: "How are critical business files backed up?",
    detail: "A usable backup should be automatic, monitored, and recoverable independently from the original device.",
    options: [
      { label: "Automated cloud backup with restore testing", value: 20 },
      { label: "Cloud sync only", value: 8 },
      { label: "Manual or no backup", value: 0 }
    ]
  },
  {
    id: "devices",
    question: "Are company computers centrally managed?",
    detail: "Central device management helps enforce encryption, updates, account policies, and remote actions.",
    options: [
      { label: "Yes", value: 20 },
      { label: "Partially", value: 10 },
      { label: "No", value: 0 }
    ]
  },
  {
    id: "patching",
    question: "How are operating system and application updates handled?",
    detail: "Consistent patching closes known vulnerabilities and reduces support issues.",
    options: [
      { label: "Automatically and centrally", value: 20 },
      { label: "Users install updates themselves", value: 8 },
      { label: "No defined process", value: 0 }
    ]
  },
  {
    id: "offboarding",
    question: "Do you have a documented employee offboarding process?",
    detail: "Departing users should lose access promptly across email, SaaS tools, VPNs, and devices.",
    options: [
      { label: "Yes, documented and repeatable", value: 20 },
      { label: "Informal checklist", value: 10 },
      { label: "No", value: 0 }
    ]
  }
];
