# Hackathon 2016

Welcome to the API Craft SF hackathon for 2016 at GitHub!

**Tables of Contents**

* [Schedule](#schedule)
* [Process](#process)
* [Submitting Results](#submitting-results)
* [API Toolsets](#api-toolsets)

## Schedule

The event's schedule is as follows:

* 10 AM: The event starts.
* 12 PM: Lunch.
* 3 PM: Presentations begin.
* 4 PM: Wrap-up.

We'll have to clear out of the venue by 5 PM.

## Process

The Hackathon will take the following form:

* Participants will split up in teams of 4. Teams can self-organize as they
  wish, but it's suggested they pick 1-2 team members to serve as "API
  Consumers" and the rest of the team to act as the "API Provider" (comprising
  backend developers, API owners, architects).
* Teams will get [one of the API toolsets](#api-toolsets) assigned to them.
  It's strongly suggested, but not mandatory that the team uses that toolset to
  complete the exercise.
* Teams will attempt to improve, enhance and document the subject API in the
  time available.
* The scope of this exercise is the HTTP/REST API definition, documentation and
  prototype/mock only. A server or front-end implementation is neither
  required, nor expected. The API definition and documentation should be
  checked in or linked to the hackathon's GitHub public repo.
* At the end of the allotted time, teams will elect one spokesperson to present
  their solution and one spokesperson to describe the process they used and
  feedback on the toolset used.

## Submitting Results

1. Fork this repository by clicking the **Fork** button in the upper right.
2. Clone your fork and copy the submission template:

    ``` sh
    git clone https://github.com/your-user/hackathon2016.git

    cd hackathon2016/results/

    # Please use your assigned team name to name this directory!
    mkdir team-a

    cp README.md team-a/README.md
    ```

3. Add relevant information to the submission template.
4. Create a branch and check in your results:

    ``` sh
    # create a new branch for your team
    git checkout -b team-a

    # add and commit results
    #
    # if you want to add an API specification here, great!
    git add .
    git commit -m "Adding results for team-a"

    git push origin team-a
    ```

5. Go to your fork at https://github.com/your-user/hackathon2016 and find the
   **New pull request** button for your branch just above where the
   repository's file listing is located. Make sure that your team name
   somewhere in the title of the pull and then open it. Please mention the
   organizing team somewhere in the body with something like `/cc
   @apicraftsf/hackathon2016`.

## API Toolsets

* [Apiary](https://apiary.io/)
* [Apigee-127](https://github.com/swagger-api/swagger-node)
* Mulesoft
* [Smartbear SwaggerHub](https://swaggerhub.com/)
