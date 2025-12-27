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

With this feedback in mind, we brainstormed a plethora of ideas for how each feature could be implemented, helping us identify which features and challenges should be prioritized. 

### Lo-Fi Prototypes

We created lo-fi sketches for the following features: 

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

### Transition from Lo-Fi to Mid-Fi Prototypes

When moving from lo-fi sketches to mid-fi prototypes, we aimed to create a simple, cohesive interface with a minimalist color palette for the following features:

### Guided Debugging

![Guided Debugging Mid-fi Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/guided_debugging_midfi_1.png)

A major change from the first lo-fi sketch to the first mid-fi protoype was the reorganization of the layout. 

- The submitted code snippet was moved from the left side of the page to the top, establishing it as the primary focus.
- The debugging checklist, originally positioned on the right, was relocated to the center of the page, directly below the submitted code, reinforcing a sequential workflow.
- The "Ready to Resubmit" section, originally located in the bottom-left corner, was moved to the bottom of the page beneath the debugging checklist.

This layout adjustment was made with the assumption that users naturally scan content vertically rather than horizontally, making a top-to-bottom layout for intuitive and easier to follow.

![Guided Debugging Mid-fi Image 2](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/guided_debugging_midfi_2.png)

This reflection feature in the second mid-fi prototype also implemented this top-to-bottom structure, reinforcing consistency and improving readability.

### AI Answer Confidence

![AI Answer Confidence Mid-fi Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/ai_answer_confidence_midfi_1.png)

A minor but intentional layout change was made to the "Explore More" feature. It was moved from the bottom-center of the page to the bottom-left hand corner to create space for a clearly visible "Return to Main Menu" button. This change gives users a clear way to exit the page.

### Focus Mode

Several layout changes were made to better align with user expectations and reading flow:

![Focus Mode Mid-fi Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/focus_mode_midfi_1.png)

- The "Enter Focus Mode" button was moved from the top-center of the page to a position closer to the bottom. This placement reflects a natural progression in which users first configure tasks and Pomodoro settings better entering focus mode.
- A "Return to Main Menu" button was added to provide consistent navigation across features.

![Focus Mode Mid-fi Image 2](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/focus_mode_midfi_2.png)

Within Focus Mode itself, a full task list was added and positioned on the right-hand side of the screen. This allows users to view all tasks at once rather than only the currently active task. Displaying upcoming tasks supports better planning, organization, and workflow awareness.

### Adaptive Learning

![Adaptive Learning Mid-fi Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/adaptive_learning_midfi_1.png)

![Adaptive Learning Mid-fi Image 2](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/adaptive_learning_midfi_2.png)

No major changes were made for the Adaptive Learning feature during the transition from lo-fi to mid-fi. However, the original sketches were refined into mid-fi prototypes that align with the overall minimalist visual style and cohesive design used throughout the system.

These prototypes were presented in class for formative feedback and refined based on user and instructor input.

### Prototype Features and Changes

### Guided Debugging

#### User Feedback
- **Streamlining the Editing and Submission Process**
Users suggested combining the submitted code snippet block and the re-submission block into a single area. This would make editing and resubmission more efficient.

- **Improved Layout for Code Visibility**
Users recommended placing the code editor and debugging checklist side-by-side rather than stacking them vertically. This layout would provide more space and improved readability during debugging.

- **Reflection Feature Integration**
Users questioned the purpose of the reflection feature and felt it could be better integrated into the session flow to increase its impact.

#### Implemented Changes

![Guided Debugging Mid-fi Version 2 Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/guided_debugging_midfi_ver2_1.png)

![Guided Debugging Mid-fi Version 2 Image 2](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/guided_debugging_midfi_ver2_2.png)

- Consolidated the code submission and revision areas into a single editable block with integrated submission controls.
- Positioned the code editor and debugging checklist side-by-side to maximize visibility and usability
- Clarified the reflection feature as a metacognitive learning checkpoint, reinforcing learning after debugging completion

### AI Confidence Score

#### User Feedback
- **Visual Clarity**
Users suggested color-coding the AI confidence score (green for high, yellow for medium, red for low) to enable faster interpretation
- **Technical Implementation Questions**
Users asked whether resource links would be hard-coded or dynamically generated by the AI, raising concerns about personalization and scalability

#### **Implemented Changes**

![AI Confidence Score Mid-fi Version 2 Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/ai_answer_confidence_midfi_ver2_1.png)

- Added intuitive color coding:
  - Green for high confidence
  - Yellow for moderate confidence
  - Red for low confidence
- Improved layout by clearly separating the question, AI-generated answer, and confidence score.
- Emphasized that resource links were planned to be dynamically AI-generated and personalized.

### Focus Mode

#### User Feedback
- **User Experience Improvements**
  - Users recommended a full-screen mode to minimize distractions
  - Since red and yellow are commonly associated with warnings or errors, users suggested changing the edit button to a less alarming color.
  - Users requested the ability to reorder tasks for greater flexibility.
- **Feature Clarification**
  - Several users asked, "What is Focus Mode?", indicating the need for a clearer introduction or explanation.

#### Implemented Changes

![Focus Mode Mid-fi Version 2 Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/focus_mode_midfi_ver2_1.png)

![Focus Mode Mid-fi Version 2 Image 2](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/focus_mode_midfi_ver2_2.png)

- Integrated a full-screen Pomodoro timer with customizable work and break durations.
- Implemented a drag-and-drop task reordering for improved task management.
- Visually distinguished active and completed tasks to increase motivation and clarity.

### Adaptive Learning

#### User Feedback
- **Technical Implementation Questions**
  - Users questioned whether resource links would be hard-coded or dynamically generated.
  - Users also asked whether the system could automatically link related resources or would require manual configuration.

#### Implemented Changes

![Adaptive Learning Mid-fi Version 2 Image 1](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/adaptive_learning_midfi_ver2_1.png)

![Adaptive Learning Mid-fi Version 2 Image 2](https://github.com/mescobarbrenes/ai-tutor/blob/main/images/adaptive_learning_midfi_ver2_2.png)

- Redesigned resource recommendations to highlight AI-driven personalization.
- Renamed section titles from "Related Resources" to "Recommended for You"
- Added descriptive captions explaining that recommendations adapt based on user progress and behavior.

### Insights and Lessons Learned
User feedback confirmed that combining input blocks, applying color coding, and enabling drag-and-drop interactions significantly improved usability. However, early confusion around adaptive learning features revealed the importance of clearly communicating AI personalization and system intent within the interface.

---

## Evaluation Phase

During the evaluation phase, the AI tutor was further refined through implementation as a hi-fi desktop web prototype (HTML/CSS/JavaScript) and as mid-fi mobile prototypes.

### Guided Debugging

![Guided Debugging Hi-fi Desktop Image 1]()

![Guided Debugging Hi-fi Desktop Image 2]()

![Guided Debugging Hi-fi Desktop Image 3]()

![Guided Debugging Hi-fi Desktop Image 4]()

![Guided Debugging Mid-fi Mobile Image 1]()

![Guided Debugging Mid-fi Mobile Image 2]()

#### Help Button
A help button was added to provide a step-by-step explanation of how to use the Guided Debugging feature.

#### User Navigation and Confirmation
Previously, users had no confirmation after submitting reflections and no clear way to return to the main menu. This was improved by adding:
- A confirmation page after reflection submission
- Options to either:
  - Continue debugging more code
  - Return to the main menu

These changes improve clarity, closure and navigation flow.

### AI Confidence Score ("Test Your Understanding")

![AI Confidence Score/Test Your Understanding Hi-fi Desktop Image 1]()

![AI Confidence Score/Test Your Understanding Hi-fi Desktop Image 2]()

![AI Confidence Score/Test Your Understanding Mid-fi Mobile Image 1]()

![AI Confidence Score/Test Your Understanding Mid-fi Mobile Image 2]()


#### Help Button
A help button was added to provide a step-by-step explanation of how to use the "Test Your Understanding" feature.

#### Renaming and Adding Textual Context
The feature title was changed from "AI Confidence Score" to "Test Your Understanding" to better communicate its purpose and value to users. Additional directions were also added to clarify how users should interact with the feature and interpret results.

#### User Navigation and Control
Users are now given explicit options to:
- Try another question
- Return to the main menu

This improves flexibility and prevents users from feeling "stuck" after completing a task.

### Focus Mode

![Focus Mode Hi-fi Desktop Image 1]()

![Focus Mode Hi-fi Desktop Image 2]()

![Focus Mode Mid-fi Mobile Image 1]()

![Focus Mode Mid-fi Mobile Image 2]()

![Focus Mode Mid-fi Mobile Image 3]()

![Focus Mode Mid-fi Mobile Image 4]()

#### Help Button
A help button was added to provide a step-by-step explanation of how to set up and use the "Focus Mode" feature.

#### User Navigation and Control
Because mobile screens cannot display as much information as desktop layouts, mobile users can now:
- Switch between the task list view and the Pomodoro session view
- Navigate more easily between setup and active focus states

This ensures usability parity across screen sizes.

### Adaptive Learning

![Adaptive Learning Hi-fi Desktop Image 1]()

![Adaptive Learning Mid-fi Mobile Image 1]()

#### User Navigation and Control
Users can now:
- Refresh personalized recommendations
- Return to the main menu

These options reinforce user control and make the system feel more interactive and responsive.

### Main Navigation Hub

![Main Menu Hi-fi Desktop Image 1]()

![Main Menu Mid-fi Mobile Image 1]()

A centralized main menu page was added to unify all features. This hub allows users to easily navigate between:
- Guided Debugging
- Test Your Understanding
- Focus Mode
- Adaptive Learning

This improves discoverablity and supports smoother transitions across tools.

### Methods

We recruited three undergraduate Computer Science students (one senior and two freshman) to participate in individual walkthroughs. Participants completed tasks across all four core features, including:
- Debugging code with the AI tutor
- Interpret confidence scores
- Using Focus Mode
- Exploring personalized learning recommendations

Each session concluded with a semi-structured interview to collect qualitative feedback on usability, clarity, and perceived usefulness.

### Key Findings

#### Feature Variery Appreciated but Desire for Intergration
Participants found individual tools useful but expressed a desure for stronger connections between them (e.g. linking debugging errors to relevant learning resources or tasks).

#### Visual Feedback Effect, but Confidence Context Lacking
Color-coded confidence indicators helped users quickly assess AI output quality, but users wanted clearer explanations describing why a score was assigned.

#### Focus Mode Well-Received but Onboarding Needed
Drag-and drop task management and customizable breaks were well-liked. However, some users initially missed how to start the timer, indicating a need for stronger onboarding cues.

#### Recommendations Perceived as Static
Despite UI labels indiciating personalization, some users still assumed learning resources were hardcoded. This revealed a need for clearer communication of the system's adaptive behavior.

### Iterative Refinements
Based on evaluation findings, the follow improvements were implemented:
- Stronger linking between modules to create a more unified workflow
- Enhanced AI transparency with natural language explanations and tooltips
- Improved onboarding with visual cues and clearer guidance
- UI adjustments emphasizing that recommendations are dynamically generated and personalized


