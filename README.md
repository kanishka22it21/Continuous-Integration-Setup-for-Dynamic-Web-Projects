# TO-DO-LIST-APPLICATION

A simple To-Do List web application built with HTML, CSS, and JavaScript. Tasks are stored in the browser's `localStorage` to retain them across sessions.

## Features
- Add new tasks to the list.
- Remove tasks from the list.
- Tasks are saved in the browser's `localStorage`.
- Responsive design.

## Getting Started

### Prerequisites
- A modern web browser (**Chrome, Firefox, Edge, etc.**)  
- **VS Code** (recommended)  
- **Jenkins** installed and running  
- **Maven** installed (for pipeline builds)  
- **Git** installed and configured  


### Installation
1. Clone the repository or download the source code:
       git clone https://github.com/your-username/todo-list-app.git
2. Navigate to the project directory:
       cd todo-list-app


### Usage
1. Open the `index.html` file in your browser.
- **Option 1:** Double-click the `index.html` file.
- **Option 2:** Right-click on `index.html` and select "Open with" your browser.
- **Option 3 (Optional):** Use a local development server (e.g., using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VSCode).

### Local Development Server (Optional)
If you prefer to use a local development server, follow these steps:
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VSCode.
2. Open the project folder in VSCode.
3. Right-click on `index.html` and select **"Open with Live Server"**.

### Project Features

- **Add Task:** Enter a task in the input field and click "Add Task" to add it to the list.
- **Delete Task:** Click "Delete" next to a task to remove it from the list.
- **Persistent Storage:** The tasks are saved in the browser's `localStorage`, so they remain even after the page is refreshed or the browser is closed.

# ⚙️ Jenkins CI/CD Setup Guide

This guide explains how to set up **Jenkins CI/CD** with **Poll SCM** for automatically building and testing projects whenever new commits are pushed to GitHub.

---

## 📌 What is Jenkins?

[Jenkins](https://www.jenkins.io/) is an open-source **automation server** used to implement Continuous Integration (CI) and Continuous Delivery (CD) pipelines.  
It helps automate building, testing, and deploying applications.

---

## 🛠️ Prerequisites

Before setting up Jenkins, make sure you have:

- **Jenkins** installed and running ([Download Jenkins](https://www.jenkins.io/download/))  
- **Java JDK** installed (Jenkins requires Java)  
- **Maven** installed (for builds)  
- **Git** installed and configured  
- Access to a **GitHub repository**  

---

## 📥 Install Required Jenkins Plugins

Go to **Manage Jenkins → Plugins → Available Plugins** and install:

- ✅ Git Plugin  
- ✅ Pipeline Plugin  
- ✅ Maven Integration Plugin  

Restart Jenkins after installing plugins.

---

## 🛠️ Configure Jenkins Pipeline

### 1. Create a New Pipeline Job
- Go to **Jenkins Dashboard → New Item**  
- Enter a job name (e.g., `To-Do-List-CI`)  
- Select **Pipeline** → Click **OK**

---

### 2. Configure Pipeline from SCM
- In the **Pipeline** section, select **Pipeline script from SCM**  
- SCM: **Git**  
- Repository URL: https://github.com/kanishka22it21/TO-DO-LIST-APPLICATION.git?utm_source=chatgpt.com
- Branch: `main` 

### 3. Enable Poll SCM
- Go to **Build Triggers**  
- Tick ✅ **Poll SCM**  
- Add schedule (cron syntax): H/5 ****

  👉 Jenkins will check GitHub every **5 minutes** for changes.

---

### 4. Save & Build
- Click **Save**  
- Run the job **manually once** (first time)  
- From then on, Jenkins will **automatically trigger builds** whenever new commits are pushed.  

---

## 🏗️ Building & Testing with Maven

If your project uses **Maven**, Jenkins will run builds as defined in your `pom.xml`.  

- To build locally:  
mvn clean install

- To test:
mvn test



## Technologies Used
- **HTML**: For the basic structure of the app.
- **CSS**: For styling the user interface.
- **JavaScript**: For dynamic interaction, handling form submissions, and managing tasks.
- **localStorage**: For saving tasks between sessions.
- **Maven**:Build Management Tool
- **Jenkins**:Continuous Integration automation




      
