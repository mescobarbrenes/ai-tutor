# Human-Computer Interaction for Computer Science
Repository for **Human-Computer Interaction for Computer Science** for Spring 2025.

# AI Tutor: Designed for Computer Science Students

## About AI Tutor: Introduction and Motivation
This project is an AI-powered adapative tutoring system designed to support Computer Science students in self-paced, remote, and hybrid learning environments. Computer Science students, especially those engaged in self-paced, remote, or hybrid learning environment, frequently encounter significant challenges that hinder effective study and skill acquisition. Unlike traditional classroom settings where instructors and peers are readily accessible, these students often lack timely, personalized support to navigate complex tasks such as debugging code, managing study schedules, and maintaining focus. These challenges contribute to increased frustration, inefficient learning, and reduced academic performance. As a result, these students require adapative, trustworthy tools to supplement their study habits and improve learning outcomes. 

The AI tutor focuses on four core areas: guided debugging with contextual explanations, assessment of AI-generated answer confidence, structured focus and time manangement using the Pomodoro technique, and personalized adapative learning recommendations. By supporting these fundamental tasks, the system seeks to empower students to learn more autonomously while retaining critical problem-solving skills and fostering trust in AI assistance.

The AI Tutor was developed using a Human-Centered Design (HCD) process, with multiple rounds of research, prototyping, user evaluation, and iterative refinement grounded in real student feedback.

## Overview of Human-Centered Design Process
Our team adopted a Human-Centered Design (HCD) methodology encompassing four primary phases: formative research, ideation and prototyping, user evaluation, and iterative refinement. These approach ensured that design decisions were continously informed and validated by user needs, preferences, and contextual realities.

### 1. Formative Research
To deeply understand the challenges faced by our target users, we conducted interviews, focus groups, and public online forum analyses. These methods provided qualitative insights into learners’ experiences, expectations, and coping strategies.

### 2. Ideation and Prototyping
Leveraging formative findings, we developed low- and high-fidelity prototypes representing key features. These included working desktop web applications and mobile mid-fidelity mockups, designed to explore interaction flows and UI elements.

### 3. Evaluation
We engaged actual Computer Science students in task-based walkthroughs and semi-structured interviews to assess usability, utility, and areas for improvement across the system’s features.

### 4. Iteration
Evaluation feedback guided successive refinements in design and functionality, improving clarity, integration, trust, and overall user experience.

Through this iterative HCD cycle, the team remained responsive to evolving insights, optimizing the AI tutor for both practical utility and learner engagement.

---

## Formative Research Phase

### Methods

To capture a comprehensive picture of student challenges, we employed a mixed qualitative research approach:

#### Individual Interviews
- Conducted with Computer Science students who had experience in both traditional and online formats
- Explored personal difficulties and preferences

#### Focus Group
- Included students and a teaching assistant (TA)
- Examined to understand group dynamics and shared experiences in learning and study habits.

#### Public Records Analysis
- Analyzed online discussions (e.g. Reddit)
- Identified broader trends in productivity, time management, and learning struggles

### Rationale
These methods were selected to balance depth (interviews), group interactions (focus group), and breadth (public data) of understanding, providing robust foundations for user-centered design.

### Key Findings

- **AI as a Guide, Not a Solution**
Students prefer AI to scaffold reasoning rather than supply direct answers, preserving their problem-solving engagement.

- **Context-Aware Debugging**
Generic online fixes lack relevance; users need explanations tailored to their specific code context.

- **Personalized Learning with Trust**
While personalized recommendations are valued, skepticism persists unless AI decisions are transparent and verifiable.

- **Time Management Challenges**
Without structured deadlines, students face procrastination and burnout; techniques like Pomodoro timers are widely appreciated.

- **Adaptive Interaction Preference**
Learners desire flexible support styles - from stepwise guidance to on-demand help.

- **Wellness and Accountability**
Balancing academics with wellbeing remains difficult; features supporting breaks and peer accountability could mitigate stress.

### Impact on Design
These insights directly informed our four core task areas - guided debugging, AI confidence scoring, focus mode, and adaptive learning - ensuring that the AI tutor addressed real user needs with sensitivity to trust and autonomy.

---

## Ideation and Prototyping Phase

### Methods
We developed a series of prototypes to explore design solutions:

- **Low-Fidelity (Lo-fi) Sketches**
To quickly explore and iterate UI concepts and interaction patterns.

- **Mid-Fidelity (Mid-fi) Prototypes**
To refine layout and functionality, focusing on user flow and structure. Allows for early usability testing.

- **High-Fidelity (Hi-fi) Prototypes**
Desktop web applications with functional features to test usability and gather detailed feedback.

- **Mobile Mid-Fidelity Mockups**
To investigate cross-platform design potential and constraints.

A big concern that was brought up in feedback we received in the formative phase was how our insights were broad in supporting students and we needed to narrow down how AI will be used, as there were many directions that we could take with this project. 

With this feedback in mind, we brainstormed a plethora of ideas for how each feature could be implemented, helping us identify which features and challenges should be prioritized. We created lo-fi sketches (which can be found in the appendix) for the following features: 

#### Guided Debugging Mode
![Guided Debugging Lo-fi Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/guided_debugging_1.jpg)

The first lo-fi sketch featured a layout where the user submitted a code snippet, displayed in the top-left corner of the screen. On the right side, a personalized debugging checklist generated by the AI tutor was presented. This checklist included three types of suggestions: a checkmark indicated an action the user had already completed, an “X” signified an error in the code, and a blank box represented a suggestion the user had not yet tried or implemented. After reviewing the checklist, the user could resubmit their code using a submission area located below the original code snippet. Other concepts that were explored but ultimately not included in the final design involved the AI tutor offering line-by-line debugging, detailed error explanations, and contextual hints to support iterative learning and deeper engagement with the AI.

![Guided Debugging Lo-fi Image 2](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/guided_debugging_2.jpg)

The second lo-fi sketch introduced a reflection feature, which the user would be redirected to after completing their debugging process. We believed that incorporating reflection would support deeper learning and help users track their progress over time. In this feature, the AI tutor offers a brief, encouraging message to congratulate the user on successfully resolving their code issues. The user is then prompted to write a short reflection on what they learned or how they approached the debugging process, with the option to submit their reflection afterward.

#### AI Answer Confidence

![AI Answer Confidence Lo-fi Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/ai_answer_confidence_1.jpg)

This lo-fi sketch highlights an AI confidence score feature, where the AI tutor generates a question and prompts the user to submit a written response. After the user submits their answer, the AI evaluates the response and assigns a confidence score in the form of a percentage. In addition to the score, the AI tutor provides constructive feedback on how the user can improve their answer. To support continued learning, the tutor also offers personalized resource links tailored to the topic at hand. Other features that were explored but ultimately not included in the final design included a side-by-side comparison of the user’s answer with the AI tutor’s ideal response, as well as a peer review system where users could evaluate and approve each other’s answers. While these ideas showed potential for enhancing learning through comparison and community feedback, they were set aside to maintain focus on the core interaction between the user and the AI tutor.

#### Focus Mode 

![Focus Mode Lo-fi Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/focus_mode_1.jpg)

The first lo-fi sketch introduces a Focus Mode feature designed to help users stay productive using a Pomodoro-style timer. To enter Focus Mode, the user is prompted to create and name a task, with options to edit or delete it as needed. Additional tasks can be added by clicking the “Add Task” button. After setting up tasks, the user configures the Pomodoro timer. The default is set to 25 minutes, but the user can adjust both minutes and seconds using up/down arrow buttons (represented as triangles). Once tasks and timer settings are configured, the user can click the “Enter Focus Mode” button to begin their session.

![Focus Mode Lo-fi Image 2](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/focus_mode_2.jpg)

The second lo-fi sketch showcases what the user will see once they are redirected into the Focus Mode page. Here, the user can select a task to set as their "current task," which can be updated at any time. Below the current task section, a timer displays the remaining time in the Pomodoro session, along with information about when the next break will occur. A tip is added near the bottom of the page to enhance productivity and support a user’s learning goals. At the bottom of the page, users will find buttons to pause the session, end the session, or request help from the AI tutor if needed.

#### Adaptive Learning

![Adapative Learning Lo-fi Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/adaptive_learning_1.jpg)

The first lo-fi sketch shows a user that has begun a lesson for a personalized topic based on the user’s recent activity. The user will be able to view the topic and its related resources, and be able to continue the lesson by clicking the Next button on the bottom-right hand corner.

![Adaptive Learning Lo-fi Image 2](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/adaptive_learning_2.jpg)

The second lo-fi sketch shows a user’s “Personalized Learning Path” page, where they are able to start a lesson, view resources for a personalized topic that has been generated by the AI tutor, view related resources, and which the user also has the ability to “Ask for Further Clarification.”
