node {
  git poll: true, url:'https://github.com/bbunnies37/pin_front.git'
    stage('Pull') {
      git 'https://github.com/bbunnies37/pin_front.git'
    }
    stage('Unit Test') {}
    stage('Build') {
      sh(script: 'docker-compose build app')
    }
    stage('Deploy') {
      sh(script: 'docker-compose up -d production') 
    }
   
}
