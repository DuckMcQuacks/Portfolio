# Portfolio

A project created for the sake of linking to other projects. Questionable reason.

The project has been migrated over to a next.js front-end in another repository but overall the code remained relatively the same.

portfolio is the front-end folder which contains the vite-react-typescript project pertaining to the front-end.

server folder contains the back-end, which I wrote but never used in production, only in development as it proved to be difficult to make it work after deploying it.
it had a single POST which just sent an email to my gmail according to the filled in form.

portfolio's config files weren't changed much from the default, I added a quick proxy and thats about it.
in the source file you can find the index.css which contains all of the css, the css is broken into group still within one file.

main.tsx is default.

App.tsx is where we have the layout specified, and where we have the routing as well.

components folder contains:
About.tsx which is the about page
Contact.tsx which is the contact page
Home.tsx which is the index page, the default.
PortfolioStudy.tsx which is a page under the Project page.
Project.tsx which is the project page.
Footer.tsx is the component that contains the footer, always present.
navbar.tsx is self explanatory.
projectTemplate.tsx contains a template for the Project page, so that when I add a new project I only have to use that.

the images folder contains all images used by the components.

W.I.P
