# API Design Hackathon 2016

Welcome to the API Craft SF hackathon for 2016 at GitHub!

**Table of Contents**

* [Schedule](#schedule)
* [Process](#process)
    * [Submitting Results](#submitting-results)
* [Subject API](#subject-api)
* [API Toolsets](#api-toolsets)
* [Personnel](#personnel)
* [Slack](#slack)
* [Twitter](#twitter)
* [Sponsors](#sponsors)
* [Code of Conduct](#code-of-conduct)

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
  wish, but it's suggested you pick 1-2 team members to serve as "API
  Consumers" and the rest of the team to act as the "API Provider" (comprising
  backend developers, API owners, architects).
* Teams will get [one of the API toolsets](#api-toolsets) assigned to them.
  It's strongly suggested, but not mandatory, that the team uses that toolset to
  complete the exercise.
* Teams will attempt to improve, enhance, and document the [subject
  API](#subject-api) in the time available. This may include enhancing API
  structure and/or developer experience in consuming and learning the API.
* The scope of this exercise is the HTTP/REST API definition, documentation and
  prototype/mock only. A server or front-end implementation is neither
  required, nor expected. The API definition and documentation should be
  checked in or linked to the hackathon's GitHub public repo (see the section
  on [submitting results](#submitting-results) below for more information).
* At the end of the allotted time, teams will elect one spokesperson to present
  their solution and one spokesperson to describe the process they used and
  feedback on the toolset used.

### Submitting Results

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

## Subject API

For this event we'll concentrate on the [GitHub Gist API](https://developer.github.com/v3/gists/)
You can focus on either improving parts of the API Design itself (resources, methods, parameters) or on the developer experience (documentation, code examples, mock/sandbox, etc.).

Here are some ideas as food for thought:

* Describe part of the API in your assigned format so others can edit/modify it
  and documentation can be rendered.
* Improve the way editing a Gist works (i.e. `PATCH`).
* Improve the way starring works.
* Change to a standard media type like [HAL][hal], [CJ][cj], or [Siren][siren].
* Add code examples in various languages (hint: look for an automated way).
* Precise definition of parameters and request/response schemas.
* Define error conditions (see how DRY you can get with this).
* Add search functionality (just to the API definition).
* Create a mock or sandbox so consumers can play with the API (can you use your
  API definition to drive this?).
* Make links in responses more understandable, easier to use (think `rel`s).

## API Toolsets

* [Apiary](https://apiary.io/)
    * Technical advisement from [Z](https://github.com/zdne).
* [Apigee-127](https://github.com/swagger-api/swagger-node)
    * Technical advisement from [Diego Zuluaga](https://github.com/dzuluaga).
* [Mulesoft](http://anypoint.mulesoft.com/)
    * Technical advisement from [Michael Stowe](https://github.com/mikestowe).
* [Smartbear SwaggerHub](https://swaggerhub.com/)

## Personnel

Today's organizer is [Emmanuel Paraskakis](https://github.com/paraskakis)

Your MC today is [Mark Foster](https://github.com/fosrias).

These API design advisers will be available to provide advice:

* [Brandur Leach](https://github.com/brandur)
* [Neha Sondhi](https://github.com/neha3091)
* [Mehdi Medjawi](https://github.com/Medjaw)

## Slack

Please join [us on Slack](http://apicraftsf.slack.com/)! We will be using it
for announcements and discussion.

## Twitter

If you're going to be tweeting about the event, please consider using the hash
tags:

* `#APICraftSF`
* `#APIDesign`

## Sponsors

* Huge thanks to [GitHub](https://github.com/) for providing this wonderful
  venue and sponsoring food and drinks for us!
* Your stylish [API Craft San Francisco][meetup] T-shirt has been sponsored by
  [Apiary](https://apiary.io/) and [Mulesoft](https://www.mulesoft.com/)

## Code of Conduct
By participating in this event you agree to abide by the Code of Conduct:
###API Craft San Francisco Code of Conduct
* The API Craft San Francisco organizers are dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of event participants in any form. Sexual language and imagery is not appropriate for any event venue, including talks.
* Be kind to others. Do not insult or put down other attendees. Behave professionally. Remember that harassment and sexist, racist, or exclusionary jokes are not appropriate for API Craft San Francisco meet ups.
* Event participants violating these rules may be sanctioned or expelled from the event at the discretion of the event organizers.
*Harassment includes offensive verbal comments related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.
*If a participant engages in harassing behavior, the event organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of event staff immediately.
*Event staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event. We value your attendance.
*We expect participants to follow these rules at all event venues and event-related social events.

[cj]: http://amundsen.com/media-types/collection/
[hal]: http://stateless.co/hal_specification.html
[meetup]: http://www.meetup.com/API-Craft-San-Francisco/
[siren]: https://github.com/kevinswiber/siren
