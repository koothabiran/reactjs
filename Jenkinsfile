pipeline {
  agent any
    
  tools {nodejs "node"}
  
  stages {
  	stage('install') {
      steps {
        sh 'npm install'
      }
      }
    
 
  	stage('start') {
      steps {
        sh 'npm start'
      }
      }
      
       stage('Test') {
            steps {
                sh 'npm test'
            }
        }
      
      
       stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
      
      }
      
      
      }
