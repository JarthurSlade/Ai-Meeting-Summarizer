# AI Meeting Summarizer Project Plan

## Problem Statement

Meetings often contain large amounts of information that
can be difficult to organize and review. Manually summarizing
meeting notes can take time and may result in important
details being overlooked. This application helps solve this
problem by using AI to summarize meeting notes and identify
important information.

## Project Objectives

- Reduce the time needed to summarize meetings.
- Identify important decisions and action items.
- Provide a simple and accessible user interface.
- Generate summaries quickly using artificial intelligence.
- Allow users to copy and download their results.

## Functional Requirements

- Accept written meeting notes and transcripts.
- Generate summaries using an AI model.
- Identify decisions, tasks, responsible people, and deadlines.
- Allow users to clear, copy, and download results.
- Handle invalid input and failed requests.

## System Features

The application includes a meeting notes input area, an AI
summary generator, separate sections for decisions and action
items, and options for copying and downloading results.
The interface uses a dark purple color scheme and supports
different screen sizes.

## Software Design

The application uses a frontend and backend structure.
The frontend is responsible for displaying the interface
and handling user interactions. The Flask backend receives
meeting notes and communicates with the Groq API.

The AI model processes the meeting notes and returns
structured results. These results are then displayed
on the webpage.

## Technology Stack

- Python: Backend programming language.
- Flask: Web application framework.
- HTML: Website structure.
- CSS: Website styling.
- JavaScript: User interactions and requests.
- Groq API: AI integration.
- GPT-OSS 20B: Meeting summarization model.
- GitHub: Source control and project storage.
- GitHub Codespaces: Development environment.

## Development Timeline

The project is organized into the following development stages:

1. Project planning and environment setup.
2. Basic website and Flask development.
3. Interface styling and button functionality.
4. AI integration and summary generation.
5. Application testing and debugging.
6. Documentation and final submission preparation.