pipeline {
  agent any
  tools {
    NodeJS 16.13
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
