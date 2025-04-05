pipeline {
    agent any

    environment {
        IMAGE_NAME = 'karya_frontend'
        CONTAINER_PORT = '80'
        HOST_PORT = '3334'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ROHARY/karya_frontend.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    // Stop old container if exists
                    sh "docker stop ${IMAGE_NAME} || true"
                    sh "docker rm ${IMAGE_NAME} || true"

                    // Run new container with name
                    sh "docker run -d -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}:latest"
                }
            }
        }
    }
}
