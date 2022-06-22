- npx cypress run: for run all test 
- node cucumber-html-report.js: for generate report from json to html


nitip script: 
    "posttest": "node cucumber-html-report.js && npm run open_report",
    "open_report" : "start cypress/reports/cucumber-htmlreport.html/index.html",
    "test0": "npm run scripts || npm run posttest",
    
    
trigger to run github action - I
