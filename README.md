# Context

Our software is a record-keeping system for a retirement plan. Plan members make contributions to the plan to save for
retirement, and those contributions are invested into their selection of investment vehicle (e.g. index fund). We work only with registered
accounts and plan members can specify how much of their contribution goes to RRSP and how much goes to TFSA.

In this project, your colleague has implemented "My Contributions" page with an ability to edit or cancel contributions. Unfortunately they had to take a sick leave and the status of their work is unknown.

# Problem

Your task is to complete your coleague's work. On this page plan members need to be able to edit or cancel their upcoming monthly contribution. Acceptance criteria:

* Only upcoming (`PENDING`) contributions can be edited on cancelled. 
* When user chooses to cancel their upcoming contribution we need to ask for confirmation with the following copy: `Are you sure you want to cancel this contribution?`

Use the following API endpoints:

* `PUT /contributions/:uuid` to save changes to a contribution
* `DELETE /contributions/:uuid` to cancel a contribution

These endpoints do not actually exist. You'll get 404 when you call them, so dont worry it's ok.

You may install any libraries or packages you deem necessary to complete your task. Also while implementing please feel free to refactor any code if you believe it's required to make it better. If there are improvements you would like to do that you don't have time to complete (or that are outside the scope of this project), or if there are questions or assumptions that affect your choices, please describe those in the file `TODO.md`.
