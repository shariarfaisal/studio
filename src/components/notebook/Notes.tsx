"use client";
import type { NoteType } from "@/services/models/notebook";
import Note from "./Note";

const notes: NoteType[] = [
  {
    id: "1",
    title: "Note 1",
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
    title: "Note 2",
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
    title: "Note 3",
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
    title: "Note 4",
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
    title: "Note 5",
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
    title: "Note 6",
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
    title: "Note 7",
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

export default function Notes() {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}
