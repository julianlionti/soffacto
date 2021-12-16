pipeline {
  options {
      timeout(time: 1, unit: 'HOURS') 
  }
  agent any
  environment {
        userName = 'racinglocura07'
        DOCKERHUB_CREDENTIALS=credentials('dockerhub')
  }

  stages {
    stage('Tooling versions') {
      steps {
        sh '''
          docker --version
          docker-compose --version
          node -v
        '''
      }
    }

    stage("Testing") {
      steps {
        sh "npm run test"
      }
    }

    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }

    stage('Build') {
      steps {
        sh "docker-compose build"
        sh "docker-compose push"
      }
    }

    stage('Run') {
      steps {
        sh "docker-compose up -d"
      }
    }

    stage ("Logout") {
      steps {
        sh "docker logout"
      }
    }
  }
}
