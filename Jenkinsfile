pipeline {
    agent {
        docker {
            image 'react-docker-jenkins-app-frontend'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}