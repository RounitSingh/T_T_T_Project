# Terribly Tiny Tales Assignment

![Screenshot 2023-11-21 042823](https://github.com/RounitSingh/T_T_T_Project/assets/117521913/9b10c514-94df-4876-8583-db20d038ee8b)
![Screenshot 2023-11-21 042859](https://github.com/RounitSingh/T_T_T_Project/assets/117521913/061cb921-0422-46df-bf2a-fdd85ff3da51)

Project link: https://t-t-t-project.vercel.app/
## Problem Statement
Develop a frontend in Reactjs , which does the following:

1. Renders a "profile screen" as follows: https://www.terriblytinytales.com/profile.jpeg (this is a sample screenshot taken from mobile view)

2. The profile data can be hardcoded in a local JSON and need not have a backend.

3. The screen when opened on different mobile types, should render consistently. This can be checked in Chrome Inspect in mobile view, by changing device types or on actual physical devices.




## Steps to run the project

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to run the project.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
5. Inspect the page and change the device type to view the responsiveness.

## Components

1. App.js - The main component which renders the All child components.

    Consists of 3 child components:
    1. Navbar
    2. Profile
    3. Posts

    Also consists 2 elements:
    1. Cover Image
    2. Posts Container UI


2. Navbar.jsx - The component which renders the Navbar.
3. Profile.jsx - The component which renders the Profile.
4. Posts.jsx - The component which renders the Posts.

## Fuunctionalities
<ul>
  <li>Hover Effects on Followers and Following:
        When hovering over the "Followers" and "Following" sections, the border color and text color change to the specified hover color ('blue' by default).
        This provides a visual indication to the user about the interactive elements.
        </li>
  <li>Dynamic Display of User Information:
        Displays user information such as name, profile image, followers count, following count, description, website, star count, thumbs-up count (provided as a prop like), eye count, and heart count.
        The user's name is displayed in bold, and additional icons (diamond and green tick) are used for decorative purposes.</li>
  <li>Mouse Enter and Leave Handlers:
        Utilizes mouse enter and leave event handlers to track the currently hovered element ('followers' or 'following').
        Adjusts the border and text color dynamically based on the hover state.</li>
  <li>Responsive Styling:
        The component includes responsive styling, ensuring a consistent and visually appealing layout on different devices.</li>
</ul>







