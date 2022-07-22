pipeline {
  agent any
  tools {
    NodeJS
  }
  
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
