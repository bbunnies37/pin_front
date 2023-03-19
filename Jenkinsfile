pipeline {
  agent any
  stages {
    stage('Pull') {
      git branch : 'main',
          url 'https://github.com/bbunnies37/pin_front.git'
    }
    stage('Build') {
      sh(script: 'sudo docker build -t vuejs .')
    }
    stage('Deploy') {
      sh(script: ' sudo docker run -d -it -p 3000:3000 --rm --name my-vue --network my-net vuejs') 
    }
  }
}
