
node('master') {

  stage('Checkout'){

          checkout scm
        
       }
      stage('Build Docker'){

            def customImage = docker.build("helloworld:latest")
       }
      stage('Deploy'){
	    sh 'docker stop helloworld || true && docker rm counter-service || true'
         sh 'docker run -d -p 8082:8082 --name helloworld helloworld:latest'
     }
 

}
