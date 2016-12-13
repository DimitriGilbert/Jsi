#!groovy

node {
    stage('Checkout'){
        checkout scm
    }
    stage('Prepare'){
        sh(returnStdout: true, script:'npm i')
    }
    stage('Build'){
        sh(returnStdout:true, script:'npm run build')
    }
    stage('Test'){
        sh(returnStdout:true, script:'npm run test')
        parallel(
            publishCoverage:{
                try {
                    publishHTML([
                    allowMissing: true,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'build/coverage/',
                    reportFiles: '**/index.html',
                    reportName: 'Coverage'
                    ])
                }
                catch(Exception e) {
                    echo('problem publishing HTML coverage')
                    echo('archiving instead')
                    archiveArtifacts(allowEmptyArchive: true, artifacts:'build/coverage/')
                }
            },
            junit:{
                try {
                    // junit('build/logs/junit/.xml)')
                    step([$class: 'JUnitResultArchiver', testResults: '**/test-results.xml'])
                }
                catch(Exception e) {
                    echo('problem publishing junit results')
                    echo('archiving instead')
                }
            }
        )
    }
    stage('Lint archive'){
        step([$class: "CheckStylePublisher",
          canComputeNew: false,
          defaultEncoding: "",
          healthy: "",
          pattern: "build/logs/checkstyle.xml",
          unHealthy: ""
        ])
    }
}