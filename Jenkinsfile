pipeline {
  agent any
  
  stages {
    stage("build") {
      steps {
        sh 'npm i'
      }
    }
    
    stage("test") {
      steps {
        echo 'testing...'
      }
    }
    
    stage("deploy") {
      steps {
        echo 'deploying'
      }
    }
  }
}
