pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/ROHARY/karya_frontend.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('karya_frontend:latest')
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh 'docker run -d -p 8080:80 karya_frontend:latest'
                }
            }
        }
    }
}
