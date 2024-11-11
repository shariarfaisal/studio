import { NoteType, PromptType, SourceType } from "@/services/models/notebook";

const demoTranscript = `Thematic Outline: Unclear Text Analysis I. Problem: Deciphering the meaning and purpose of a text with limited context.

A. Evidence:

Text presents as code snippets or notes.

Use of ambiguous symbols and abbreviations.

B. Challenges:

Inability to determine the text's purpose.

Difficulty identifying the intended audience.

II. Information Gaps: Identifying the missing pieces for comprehension.

A. Contextual Information:

Need for the complete document.

Importance of understanding the project or task.

B. Author Information:

Value in knowing the author's background and expertise.
III. Conclusion:

A. Current State: Impossibility of definitive analysis without further information.

B. Call to Action: Acquiring the necessary context and author information to proceed with interpretation.`;

export const sources: SourceType[] = [
  {
    title: "Source 1",
    id: "1",
    transcript: demoTranscript,
    summary: demoTranscript,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    title: "Source 2",
    id: "2",
    transcript: demoTranscript,
    summary: demoTranscript,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    title: "Source 3",
    id: "3",
    transcript: demoTranscript,
    summary: demoTranscript,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    title: "Source 4",
    id: "4",
    transcript: demoTranscript,
    summary: demoTranscript,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    title: "Source 5",
    id: "5",
    transcript: demoTranscript,
    summary: demoTranscript,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    title: "Source 6",
    id: "6",
    transcript: demoTranscript,
    summary: demoTranscript,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    title: "Source 7",
    id: "7",
    transcript: demoTranscript,
    summary: demoTranscript,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    title: "Source 8",
    id: "8",
    transcript: demoTranscript,
    summary: demoTranscript,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    title: "Source 9",
    id: "9",
    transcript: demoTranscript,
    summary: demoTranscript,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
];

export const prompts: PromptType[] = [
  {
    id: "1",
    title: "Summarize",
    prompt: "Summarize the text in 1-2 sentences.",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    title: "Suggest related ideas",
    prompt: "Summarize the text in 1-2 sentences.",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "3",
    title: "Create Study Guide",
    prompt: "Summarize the text in 1-2 sentences.",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Suggest next steps",
    prompt: "Summarize the text in 1-2 sentences.",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "5",
    title: "Ask a question",
    prompt: "Summarize the text in 1-2 sentences.",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "6",
    title: "Create a list",
    prompt: "Summarize the text in 1-2 sentences.",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "7",
    title: "Create a checklist",
    prompt: "Summarize the text in 1-2 sentences.",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "8",
    title: "Create a checklist",
    prompt: "Summarize the text in 1-2 sentences.",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
];

export const notes: NoteType[] = [
  {
    id: "1",
    title: "Topic 1",
    editable: false,
    content: `Thematic Outline: Unclear Text Analysis
    I. Problem: Deciphering the meaning and purpose of a text with limited context.
    
    **A. Evidence:**
    
    * Text presents as code snippets or notes.
    
    * Use of ambiguous symbols and abbreviations.
    
    **B.  Challenges:**
    
    * Inability to determine the text's purpose.
    
    * Difficulty identifying the intended audience.
    
    II. Information Gaps: Identifying the missing pieces for comprehension.
    
    **A.  Contextual Information:**
    
    * Need for the complete document.
    
    * Importance of understanding the project or task.
    
    **B.  Author Information:**
    
    * Value in knowing the author's background and expertise.
    
    III. Conclusion:
    
    **A. Current State:**  Impossibility of definitive analysis without further information.
    
    **B.  Call to Action:**  Acquiring the necessary context and author information to proceed with interpretation.`,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "2",
    title: "Topic 2",
    editable: false,
    content: `Thematic Outline: Unclear Text Analysis
    I. Problem: Deciphering the meaning and purpose of a text with limited context.
    
    **A. Evidence:**
    
    * Text presents as code snippets or notes.
    
    * Use of ambiguous symbols and abbreviations.
    
    **B.  Challenges:**
    
    * Inability to determine the text's purpose.
    
    * Difficulty identifying the intended audience.
    
    II. Information Gaps: Identifying the missing pieces for comprehension.
    
    **A.  Contextual Information:**
    
    * Need for the complete document.
    
    * Importance of understanding the project or task.
    
    **B.  Author Information:**
    
    * Value in knowing the author's background and expertise.
    
    III. Conclusion:
    
    **A. Current State:**  Impossibility of definitive analysis without further information.
    
    **B.  Call to Action:**  Acquiring the necessary context and author information to proceed with interpretation.`,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: Date.now().toString(),
    title: "Topic 3",
    editable: false,
    content: `Thematic Outline: Unclear Text Analysis
    I. Problem: Deciphering the meaning and purpose of a text with limited context.
    
    **A. Evidence:**
    
    * Text presents as code snippets or notes.
    
    * Use of ambiguous symbols and abbreviations.
    
    **B.  Challenges:**
    
    * Inability to determine the text's purpose.
    
    * Difficulty identifying the intended audience.
    
    II. Information Gaps: Identifying the missing pieces for comprehension.
    
    **A.  Contextual Information:**
    
    * Need for the complete document.
    
    * Importance of understanding the project or task.
    
    **B.  Author Information:**
    
    * Value in knowing the author's background and expertise.
    
    III. Conclusion:
    
    **A. Current State:**  Impossibility of definitive analysis without further information.
    
    **B.  Call to Action:**  Acquiring the necessary context and author information to proceed with interpretation.`,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "4",
    title: "Topic 4",
    editable: false,
    content: `Thematic Outline: Unclear Text Analysis
    I. Problem: Deciphering the meaning and purpose of a text with limited context.
    
    **A. Evidence:**
    
    * Text presents as code snippets or notes.
    
    * Use of ambiguous symbols and abbreviations.
    
    **B.  Challenges:**
    
    * Inability to determine the text's purpose.
    
    * Difficulty identifying the intended audience.
    
    II. Information Gaps: Identifying the missing pieces for comprehension.
    
    **A.  Contextual Information:**
    
    * Need for the complete document.
    
    * Importance of understanding the project or task.
    
    **B.  Author Information:**
    
    * Value in knowing the author's background and expertise.
    
    III. Conclusion:
    
    **A. Current State:**  Impossibility of definitive analysis without further information.
    
    **B.  Call to Action:**  Acquiring the necessary context and author information to proceed with interpretation.`,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "5",
    title: "Topic 5",
    editable: false,
    content: `Thematic Outline: Unclear Text Analysis
    I. Problem: Deciphering the meaning and purpose of a text with limited context.
    
    **A. Evidence:**
    
    * Text presents as code snippets or notes.
    
    * Use of ambiguous symbols and abbreviations.
    
    **B.  Challenges:**
    
    * Inability to determine the text's purpose.
    
    * Difficulty identifying the intended audience.
    
    II. Information Gaps: Identifying the missing pieces for comprehension.
    
    **A.  Contextual Information:**
    
    * Need for the complete document.
    
    * Importance of understanding the project or task.
    
    **B.  Author Information:**
    
    * Value in knowing the author's background and expertise.
    
    III. Conclusion:
    
    **A. Current State:**  Impossibility of definitive analysis without further information.
    
    **B.  Call to Action:**  Acquiring the necessary context and author information to proceed with interpretation.`,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "6",
    title: "Topic 6",
    editable: false,
    content: `Thematic Outline: Unclear Text Analysis
    I. Problem: Deciphering the meaning and purpose of a text with limited context.
    
    **A. Evidence:**
    
    * Text presents as code snippets or notes.
    
    * Use of ambiguous symbols and abbreviations.
    
    **B.  Challenges:**
    
    * Inability to determine the text's purpose.
    
    * Difficulty identifying the intended audience.
    
    II. Information Gaps: Identifying the missing pieces for comprehension.
    
    **A.  Contextual Information:**
    
    * Need for the complete document.
    
    * Importance of understanding the project or task.
    
    **B.  Author Information:**
    
    * Value in knowing the author's background and expertise.
    
    III. Conclusion:
    
    **A. Current State:**  Impossibility of definitive analysis without further information.
    
    **B.  Call to Action:**  Acquiring the necessary context and author information to proceed with interpretation.`,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "7",
    title: "Topic 7",
    editable: false,
    content: `Thematic Outline: Unclear Text Analysis
    I. Problem: Deciphering the meaning and purpose of a text with limited context.
    
    **A. Evidence:**
    
    * Text presents as code snippets or notes.
    
    * Use of ambiguous symbols and abbreviations.
    
    **B.  Challenges:**
    
    * Inability to determine the text's purpose.
    
    * Difficulty identifying the intended audience.
    
    II. Information Gaps: Identifying the missing pieces for comprehension.
    
    **A.  Contextual Information:**
    
    * Need for the complete document.
    
    * Importance of understanding the project or task.
    
    **B.  Author Information:**
    
    * Value in knowing the author's background and expertise.
    
    III. Conclusion:
    
    **A. Current State:**  Impossibility of definitive analysis without further information.
    
    **B.  Call to Action:**  Acquiring the necessary context and author information to proceed with interpretation.`,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
  },
];

export const chatMessages = [
  {
    id: "1",
    role: "user",
    content: "Hello, can you help me with my project?",
    createdAt: "2024-10-30T09:00:00Z",
    updatedAt: "2024-10-30T09:00:00Z",
  },
  {
    id: "2",
    role: "assistant",
    content: "Of course! What do you need help with?",
    createdAt: "2024-10-30T09:01:00Z",
    updatedAt: "2024-10-30T09:01:00Z",
  },
  {
    id: "3",
    role: "user",
    content: "I'm trying to create a simple chat interface. Any suggestions?",
    createdAt: "2024-10-30T09:02:00Z",
    updatedAt: "2024-10-30T09:02:00Z",
  },
  {
    id: "4",
    role: "assistant",
    content:
      "I suggest using a library like React for the frontend and handling messages in a state array. You can also use Tailwind for styling.",
    createdAt: "2024-10-30T09:03:00Z",
    updatedAt: "2024-10-30T09:03:00Z",
  },
  {
    id: "5",
    role: "user",
    content: "That sounds great. How should I handle the message timestamps?",
    createdAt: "2024-10-30T09:04:00Z",
    updatedAt: "2024-10-30T09:04:00Z",
  },
  {
    id: "6",
    role: "assistant",
    content:
      "You can generate timestamps when each message is created, and format them as needed for display. Using `Date.toLocaleString()` might be helpful.",
    createdAt: "2024-10-30T09:05:00Z",
    updatedAt: "2024-10-30T09:05:00Z",
  },
  {
    id: "7",
    role: "user",
    content:
      "Thanks! I'll try that. Do you recommend any specific tools for testing?",
    createdAt: "2024-10-30T09:06:00Z",
    updatedAt: "2024-10-30T09:06:00Z",
  },
  {
    id: "8",
    role: "assistant",
    content:
      "For testing, you could use Jest for unit tests and Cypress for end-to-end tests, especially if you're building a React application.",
    createdAt: "2024-10-30T09:07:00Z",
    updatedAt: "2024-10-30T09:07:00Z",
  },
];
