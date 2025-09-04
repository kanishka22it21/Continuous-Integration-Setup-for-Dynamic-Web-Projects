pipeline {
    agent any

    environment {
        MAVEN_HOME = '/opt/maven'
        PATH = "${MAVEN_HOME}/bin:${env.PATH}"
    }

    triggers {
        // Poll SCM every 5 minutes
        pollSCM('H/5 * * * *')  
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/kanishka22it21/TO-DO-LIST-APPLICATION.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
    }

    post {
        success {
            echo 'Build and Tests were successful!'
        }
        failure {
            echo 'Build or Tests failed. Check logs.'
        }
        always {
            echo 'Cleaning up after build process.'
        }
    }
}
