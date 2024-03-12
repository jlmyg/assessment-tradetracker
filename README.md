# assessment-tradetracker
Sample test repository for tradetracker.com for assessment.

### **Here is the assignment:**
 - Create the outline for a high level test-plan or strategy for the TradeTracker (PHP based) corporate website (https://tradetracker.com):
 - Make clear what it is that needs testing, how it should be tested, when it should be tested and why.
 - End to end flow testing needs to be part of the plan.
 - Also include which details are needed from the business to make that plan complete.
 - Implement a limited set of end-to-end flow tests
### **Conditions:**
  - Use Playwright.
  - Tests need to be possible to be executed using docker.
  - Also indicate which tests you would have liked to add if time was plentiful.

### Test Plan Document
  - Test Plan Document is sent via email to the assessment team. Please secure a copy to ensure that it is not publicly shared.

### Running the tests

  - #### Through ubuntu
    - Make sure that the following pre-requisites are done:
      - Install node.js and npm. You can check the [link here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)
      - Once npm is installed, follow through the [installation process of playwright](https://playwright.dev/docs/intro)
      - Run npm install from root directory.
      - To be sure, you can also run npx playwright install-dependencies

    - Once done, you may start running the test suite by running `npx playwright test`
    - You can check the documentation from playwright on how to run other commands [here](https://playwright.dev/docs/running-tests).
    - For this assessment, the e2e tests are located in the e2e folder. So to run the tests, use the command `npx playwright test e2e/` at root.
    - Wait for the tests to finish executing.

  - ### Through docker (any other OS)
    - Ensure that docker is installed in your system. You can check the docs [here](https://docs.docker.com/engine/install/)
    - Build the dockerfile by running the command `docker build -t image-name .`
    - Since the entry point is set to blank, you have to create a container by doing `docker run image-name *playwright test command*` wherein you append the test command you'd wish to execute.
    - Wait for the tests to finish executing.

### Getting the test results

  - #### Through Ubuntu
    - Locate the `playwright-report` folder that is generated.
    - Inside the folder, an `index.html` file is generated. You can open that file through your desired html viewer.

  - ### Through Docker
    - Copy the container's files into your local machine by doing `docker cp <container-name-or-id>:/app <local-destination>`
    - An `app` directory will be generated that contains the `playwright-report` directory with the respective `index.html` file.

### Running the tests for the assessment

  - #### Docker
    - Run `docker build -t playwright-tests .`
    - Wait for the build to finish.
    - Run `docker run playwright-tests npx playwright test e2e/`
    - Tests will be executed
    - Run `docker container ps -a`
    - Command will return the container id/name and make sure to copy either of the two as it will be needed for the test results
    - Run `docker cp <container-name-or-id>:/app .`
    - A directory named `app` will be generated
    - Open the directory, navigate to `playwright-report` folder and then proceed to open the html file through an html viewer of your choice.
