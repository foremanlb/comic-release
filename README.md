# Comic Release

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

https://airtable.com/tblgUiwVqYWGirv6G/viwNv3FViU7BUe1cy?blocks=hide

Sample:

```
{
    "id": "rec4hH8lMYKuP1WP3",
    "fields": {
        "Photo": [
            {
                "id": "atteGLGVCxDA8GZl3",
                "url": "https://dl.airtable.com/.attachments/62e40bfd59aaf9c47ae719dd882b82dc/0cf174ac/batman.jpeg",
                "filename": "batman.jpeg",
                "size": 228438,
                "type": "image/jpeg",
                "thumbnails": {
                    "small": {
                        "url": "https://dl.airtable.com/.attachmentThumbnails/4a2d3275fb0dbc283ead8a624e9ffe46/cf9e1093",
                        "width": 64,
                        "height": 36
                    },
                    "large": {
                        "url": "https://dl.airtable.com/.attachmentThumbnails/cb19faee583646f713a7dc94f52e8b5c/ecb46588",
                        "width": 910,
                        "height": 512
                    },
                    "full": {
                        "url": "https://dl.airtable.com/.attachmentThumbnails/f0bbf32e7ebd7430c9af08423bbe6f69/3f71055d",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ],
        "Name": "Bruce Wayne",
        "Alias": "Batman",
        "Age": 43,
        "Skills": "enim praesent elementum facilisis leo",
        "Background": "enim praesent elementum facilisis leo",
        "Characteristics": "enim praesent elementum facilisis leo"
    },
    "createdTime": "2021-03-25T01:42:51.000Z"
}

```

## MVP/PostMVP

### MVP

- Clear and concise homepage with links to the rest of the website features.

- Get details about characters and locations and display into appropriate sections.

- Utilize form to allow users to add their own items to the site to allow for growth of ideas.

- Pages for Bat Family, Super Villains, Criminals, Citizens, and Other Heroes.

### PostMVP

- Integrate a search bar to allow for faster navigation of items.

- Integrate an image uploader into the form so that users can add pictures for their items.

- Add ability to Edit items.

- Add Locations and Beyond.

## Project Schedule

| Day       | Deliverable                       | Status |
| --------- | --------------------------------- | ------ |
| Mar 26    | Proposal Approval/ Airtable Setup |        |
| Mar 27-28 | Airtable Setup                    |        |
| Mar 29    | Frame Components/Set Up Axios'    |        |
| Mar 30    | Link/Route tests/Finish Renders   |        |
| Mar 31    | Basic CSS/MVP testing             |        |
| Apr 1     | Extensive CSS/@Medias             |        |
| Apr 2     | Presentations                     |        |

## Timeframes

| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                |    H     |     .25hrs     |               |             |
| Airtable setup          |    H     |     16hrs      |               |             |
| Frame Components        |    M     |      2hrs      |               |             |
| Test Axios Calls        |    H     |      3hrs      |               |             |
| Setup/Test Links        |    H     |      5hrs      |               |             |
| Setup Component Renders |    H     |      3hrs      |               |             |
| Initial CSS             |    M     |      4hrs      |               |             |
| Test/Debug              |    H     |      3hrs      |               |             |
| Extend CSS              |    H     |      4hrs      |               |             |
| @Media Queries          |    H     |      5hrs      |               |             |
| Refactoring             |    H     |      3hrs      |               |             |
| Total                   |    H     |     48hrs      |               |             |

## SWOT Analysis

### Strengths:

I have a good understanding of what code I want to run to make my site work. I should be able to run through the physical code of the site fairly quickly.

### Weaknesses:

I am still prone to sloppy and wet code. I will need to set aside more time than I am accustomed to for refactoring to make sure my code is clean and DRY.

### Opportunities:

This will give me a much better understanding of the structure of API's and allow me to be able to dive deeper into the code that I can use to utilize it.

### Threats:

My biggest threat is getting into an obsessive nature with wanting specific CSS to work for me, spending too much time on it and limiting my media queries and refactoring ability.
