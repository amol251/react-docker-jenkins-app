pipeline {
    agent any
    stages {
        stage('Install') { 
            steps {
                bat 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                bat 'npm run test' 
            }
        }
        stage('Build') { 
            steps {
                bat 'npm run build' 
            }
        }
        // stage('Build') { 
        //     steps {
        //         bat 'npm run build' 
        //     }
        // }
    }
}