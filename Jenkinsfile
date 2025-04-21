pipeline {
    agent any

    environment {
        MAVEN_HOME = '/opt/maven'  // Path to Maven installation (adjust for your system)
        PATH = "${MAVEN_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the Git repository
                git branch: 'main', url: 'https://github.com/kanishka22it21/TO-DO-LIST-APPLICATION.git'

            }
        }

        stage('Build') {
            steps {
                // Compile the project using Maven (this will use the pom.xml file)
                sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                // Run unit tests using Maven (this will look for test cases defined in your project)
                sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                echo "Starting the application..."
                nohup java -jar target/*.jar &
                '''
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
