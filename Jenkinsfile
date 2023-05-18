pipeline {
    agent any
    
    stages {
        stage('Preparation') {
            steps {
                git 'https://github.com/your/repository.git'
            }
        }
        
        stage('Build') {
            steps {
                // Przywrócenie zależności i budowa aplikacji
                sh 'npm install' // lub inny odpowiedni krok dla Twojego projektu
                sh 'npm run build' // lub inny odpowiedni krok dla Twojego projektu
            }
        }
        
        stage('Test') {
            steps {
                // Wykonanie testów jednostkowych, integracyjnych itp.
                sh 'npm test' // lub inny odpowiedni krok dla Twojego projektu
            }
        }
        
        stage('Deployment') {
            steps {
                // Wdrożenie aplikacji
                sh 'docker build -t mywebapp .'
                sh 'docker run -d -p 80:80 mywebapp'
            }
        }
        
        stage('Verification') {
            steps {
                // Weryfikacja działania aplikacji w środowisku produkcyjnym
                // Wykonanie testów weryfikacyjnych, monitorowanie, itp.
                sh 'npm run e2e' // Przykład uruchomienia testów end-to-end (e2e)
                sh 'npm run performance-test' // Przykład uruchomienia testów wydajnościowych
            }
        }

        stage('Release') {
            steps {
                // Publikacja aplikacji 
                sh 'npm run publish' // Przykład publikacji aplikacji do odpowiedniego repozytorium
            }
        }

        stage('Cleanup') {
            steps {
                // Czyszczenie 
                sh 'docker stop mywebapp' // Przykład zatrzymania kontenera
                sh 'docker rm mywebapp' // Przykład usunięcia kontenera
            }
        }
    }
}
