pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
        AWS_ACCOUNT_ID = '194722404341'
        ECR_REPO = 'karya_frontend'
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${ECR_REPO}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Login to ECR') {
            steps {
                script {
                    sh "aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
                }
            }
        }

        stage('Tag & Push Image to ECR') {
            steps {
                script {
                    def fullImageName = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}"
                    sh "docker tag ${ECR_REPO}:${IMAGE_TAG} ${fullImageName}"
                    sh "docker push ${fullImageName}"
                }
            }
        }

        stage('Deploy to ECS') {
            steps {
                script {
                    def fullImageName = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:${IMAGE_TAG}"
                    def taskDefinition = 'RoharyTask' // name of your task def family

                    // Fetch existing task def and update container image
                    sh """
                    aws ecs describe-task-definition \
                        --task-definition ${taskDefinition} \
                        --region ${AWS_REGION} \
                        > task-def.json
                    """

                    sh """
                     jq '.taskDefinition
                        | .containerDefinitions[0].image = "${fullImageName}"' \
                        task-def.json > new-task-def.json
                    """

                    sh """
                    aws ecs register-task-definition \
                        --cli-input-json file://new-task-def.json \
                        --region ${AWS_REGION}
                    """

                    // Force new deployment
                    sh """
                    aws ecs update-service \
                        --cluster RoharyCluster \
                        --service RoharyService \
                        --force-new-deployment \
                        --region ${AWS_REGION}
                    """
                }
            }
        }

    }
}
