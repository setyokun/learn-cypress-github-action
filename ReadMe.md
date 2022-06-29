before run the test, run this command
- npm install

any command can use:
- npm run test: for run all test 
- npx cypress run: for run all test 
- node cucumber-html-report.js: for generate report from json to html

nitip script: 
- "posttest": "node cucumber-html-report.js && npm run open_report",
- "open_report" : "start cypress/reports/cucumber-htmlreport.html/index.html",
- "test0": "npm run scripts || npm run posttest",
    
notes
- for run github action in local, edit yml file on .github.workflows to be "workflow_act_local.yaml"
