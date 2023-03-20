pipeline {
  agent any
  stages {
    stage('Pull') {
        steps {
      git branch : 'main',
          url : 'https://github.com/bbunnies37/pin_front.git'
        }  
    }
    stage('Build') {
        steps {
      sh 'docker build -t vuejs .'
        }
    }
    stage('Deploy') {
        steps {
      sh 'docker run -d -it -p 3000:3000 --rm --name my-vue vuejs'
        }
    }
  }
}
