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
                    def taskDefinition = 'RoharyTask'

                    sh """
                    aws ecs describe-task-definition \
                        --task-definition ${taskDefinition} \
                        --region ${AWS_REGION} \
                        > task-def.json
                    """

                    sh """
                    jq '
                    {
                        family: .taskDefinition.family,
                        taskRoleArn: .taskDefinition.taskRoleArn,
                        executionRoleArn: .taskDefinition.executionRoleArn,
                        networkMode: .taskDefinition.networkMode,
                        containerDefinitions: (
                            .taskDefinition.containerDefinitions
                            | map(if .name == "RoharyContainer"
                                then .image = "${fullImageName}"
                                else .
                                end)
                        ),
                        requiresCompatibilities: .taskDefinition.requiresCompatibilities,
                        cpu: .taskDefinition.cpu,
                        memory: .taskDefinition.memory
                    }' task-def.json > new-task-def.json
                    """

                    def newTaskDefArn = sh(
                        script: """
                            aws ecs register-task-definition \
                                --cli-input-json file://new-task-def.json \
                                --region ${AWS_REGION} \
                                --query 'taskDefinition.taskDefinitionArn' \
                                --output text
                        """,
                        returnStdout: true
                    ).trim()

                    sh """
                        aws ecs update-service \
                            --cluster RoharyCluster \
                            --service RoharyService \
                            --task-definition ${newTaskDefArn} \
                            --region ${AWS_REGION}
                    """
                }
            }
        }


    }
}
