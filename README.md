# Comic Release

https://606722d96cf0de00089700de--unruffled-northcutt-061161.netlify.app/

## Project Description

Comic release will be a single website dedicated to release schedules of comic books. It is a frustrating thing to try and find the release dates for different comics as even the publishers website doesn't make it easy. There will also be a way for users to add comics to the schedule to make it easier for other collectors to find the less mainstream comic releases as well.

## Wireframes

![wireframe](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/Project2-Home%20Page.jpeg)

![wireframe](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/Project2-items%20List.jpeg)

![wireframe](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/Project2-Month.jpeg)

![wireframe](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/Project2-Day.jpeg)

![wireframe](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/Project2-Form.jpeg)

![wireframe](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/Project2-Mobile%20Home.jpeg)

![wireframe](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/Project2-Mobile%20items.jpeg)

![wireframe](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/Project2-Mobile%20Month.jpeg)

![wireframe](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/Project2-Mobile%20Day.jpeg)

![wireframe](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/Project2-Mobile%20Form.jpeg)

## Component Hierarchy

![hierarchy](https://github.com/foremanlb/comic-release/blob/3c158455b8fe3931c8cf130f338de60be2f6d0b7/src/assets/components.jpeg)

## Api and Data Sample

https://api.airtable.com/v0/appNAGArCdz8dOUQm/Release

I will be accessing the API and using it to populate my items either in a list by publisher or in a calendar format.

Sample:

```
{
    "id": "rectIiFqF3siwYJ4h",
    "fields": {
        "Notes": "Plot of comic, if known,\nOtherwise, plot unkown.",
        "Name": "Batman #106",
        "Comics": "2021-03-26",
        "Publisher": "DC"
    },
    "createdTime": "2021-03-26T15:07:09.000Z"
}

```

## MVP/PostMVP

### MVP

- Clear and concise homepage with links to the rest of the website features.

- Links based on Publisher.

- Utilize form to allow users to add their own items to the site.

### PostMVP

- Integrate a search bar to allow for faster navigation of items.

- Integrate a Tag system for each item to allow for better searches.

- Add ability to Edit items.

- Add variables for variant covers.

## Project Schedule

| Day       | Deliverable                       | Status |
| --------- | --------------------------------- | ------ |
| Mar 26    | Proposal Approval/ Airtable Setup | √      |
| Mar 27-28 | Airtable Setup                    | √      |
| Mar 29    | Frame Components/Set Up Axios'    | √      |
| Mar 30    | Link/Route tests/Finish Renders   | √      |
| Mar 31    | Basic CSS/MVP testing             | √      |
| Apr 1     | Extensive CSS/@Medias             | √      |
| Apr 2     | Presentations                     |        |

## Timeframes

| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                |    H     |     .25hrs     |    .25hrs     |   .25hrs    |
| Airtable setup          |    H     |     16hrs      |     3hrs      |    3hrs     |
| Frame Components        |    M     |      2hrs      |     5hrs      |    5hrs     |
| Test Axios Calls        |    H     |      3hrs      |     2hrs      |    2hrs     |
| Setup/Test Links        |    H     |      5hrs      |     8hrs      |    8hrs     |
| Setup Component Renders |    H     |      3hrs      |     6hrs      |    6hrs     |
| Initial CSS             |    M     |      4hrs      |     5hrs      |    5hrs     |
| Test/Debug              |    H     |      3hrs      |     2hrs      |    2hrs     |
| Extend CSS              |    H     |      4hrs      |     4hrs      |    4hrs     |
| @Media Queries          |    H     |      5hrs      |     2hrs      |    2hrs     |
| Refactoring             |    H     |      3hrs      |     2hrs      |    2hrs     |
| Total                   |    H     |     48hrs      |   39.25hrs    |  39.25hrs   |

## SWOT Analysis

### Strengths:

I have a good understanding of what code I want to run to make my site work. I should be able to run through the physical code of the site fairly quickly.

### Weaknesses:

I am still prone to sloppy and wet code. I will need to set aside more time than I am accustomed to for refactoring to make sure my code is clean and DRY.

### Opportunities:

This will give me a much better understanding of the structure of API's and allow me to be able to dive deeper into the code that I can use to utilize it.

### Threats:

My biggest threat is getting into an obsessive nature with wanting specific CSS to work for me, spending too much time on it and limiting my media queries and refactoring ability.
