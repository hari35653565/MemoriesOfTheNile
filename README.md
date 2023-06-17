# MemoriesOfTheNile
This is a frontend based project that aims to teach users about different aspects of ancient Egypt, such as history, religion, culture, fauna and flora, through an interactive 3D environment.

## CI/CD pipeline
Continuous integration of the project was achieved with the use of github actions, in order to automate testing, perform code analysis and publish the image of the project ot dockerhub. The app is then automatically deployed to the internet using Vercel.

The process is shown in the graph below:

![image](https://github.com/NicolasHuertas/MemoriesOfTheNile/assets/98675931/d0328a38-919b-4144-840a-b0127211c396)

## CI Tools
### Automated Tests and Analysis
The workflow to perform the appropiate tests is contained in the main.yml file. In which the test files found in the src/__tests__ folder are run by executing the npm test command. 
This is done after creating a docker image of the project that is used in the actions VM.

The code and test coverage is also analysed using  the sonarCloud service. This action is performed with the sonarcloud.yml file, which sends the data to be analysed to the service, and afterwards notifies the development team via a Slack notification.

Both of this actions are performed upon pushing changes, or making a pull request to the main or development branches.

## CD Tools
### Continuous Delivery
After the tests and acceptance criteria has been met, and the changes are pushed to the main branch, the action performed by the docker.yml file is applied. This action builds and pushes the project image to a private DockerHub repository.

### Continuous Deployment
As mentioned before, the applicatin is deployed through the use of the Vercel service. As soon as the main branch of the repository is updated, Vercel automatically creates an optimized production build and makes the content availabel to the following public url:
https://memories-of-the-nile.vercel.app

This service also allows the development team to monitor the site's performance.
