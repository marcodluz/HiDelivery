<a  name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br  />
<div align="center">
<a  href="https://github.com/marcodluz/Reciply">
<img  src="https://firebasestorage.googleapis.com/v0/b/hidelivery-prod.appspot.com/o/images%2Fpackage.png?alt=media&token=386fc55f-cd0a-4f26-91f9-7e1cb21428eb"  alt="HiDelivery"  width="80"  height="80">
</a>

<h3  align="center">HiDelivery</h3>
<p  align="center">
Introducing HiDelivery, the app that helps you get your orders faster!
<br  />

<a  href="https://github.com/marcodluz/HiDelivery"><strong>Explore the docs »</strong></a>
<br  />
<br  />
<a  href="https://github.com/marcodluz/HiDelivery">View Demo</a>
·
<a  href="https://github.com/marcodluz/HiDelivery/issues">Report Bug</a>
·
<a  href="https://github.com/marcodluz/HiDelivery/issues">Request Feature</a>

</p>

</div>

<!-- TABLE OF CONTENTS -->

<details>
<summary>Table of Contents</summary>
<ol>
<li>
<a  href="#about-the-project">About The Project</a>
<ul>
<li><a  href="#built-with">Built With</a></li>
</ul>
</li>

<li>
<a  href="#getting-started">Getting Started</a>
<ul>
<li><a  href="#prerequisites">Prerequisites</a></li>
<li><a  href="#installation">Installation</a></li>
</ul>
</li>

<li><a  href="#roadmap">Roadmap</a></li>
<li><a  href="#contributing">Contributing</a></li>
<li><a  href="#license">License</a></li>
<li><a  href="#contact">Contact</a></li>

</ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project still has no description. But this will be updated soon...

<!-- <a  href="">
<img  src=""  alt="Available on the App Store"  width="125"  height="50">
</a> -->

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

### Built With

[![Visual Studio Code][code.visualstudio.com]][visualstudiocode-url]
[![React][reactnative.dev]][reactnative-url]
[![Expo][expo.dev]][expo-url]

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

To get a local copy up and running follow these next steps.

## Prerequisites

1. Install Git on your computer if you haven't already. You can download it from the official website: [https://git-scm.com/downloads](https://git-scm.com/downloads).

   > Alternatively you can install it using your system's terminal or command prompt, read more [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Install Node.js and npm on your computer. You can download them from the official website: [https://nodejs.org/en/download/](https://nodejs.org/en/download/).

   > Alternatively you can install it using your system's terminal or command prompt, read more [here](https://nodejs.org/en/download/package-manager).

## Installation

<b>Please make sure that all the prerequisites are installed correctly before starting this stage of installing the project.</b>

1. Clone the HiDelivery application repository. You can do this by running the following command in your terminal or command prompt:
   `git clone https://github.com/marcodluz/HiDelivery`

   > Alternatively you can [download the project](https://github.com/marcodluz/HiDelivery/archive/refs/heads/main.zip) and unzip it into a folder.

2. Navigate to the directory where you cloned the repository by running the following command:
   `cd HiDelivery`

3. Install the dependencies by running the following command:
   `npm install`

4. Create a Firebase project in the Firebase console by following these steps:

   > **a.** Go to the Firebase [console](https://console.firebase.google.com/).

   > **b.** Click on "Add project" or select an existing project.

   > **c.** Enter a name for your project and select your country/region.

   > **d.** Click on "Create Project".

5. Set up authentication by following these steps:

   > **a.** Go to the Firebase console for your project.

   > **b.** Click on "Authentication" in the left-hand menu.

   > **c.** Click on the "Get started" button.

   > **d.** Choose the authentication method of email and password.

   > **e.** Follow the instructions to set up authentication.

6. Set up Cloud Firestore by following these steps:

   > **a.** Go to the Firebase console for your project.

   > **b.** Click on "Firestore" in the left-hand menu.

   > **c.** Click on "Create database".

   > **d.** Choose a location for your database and click on "Next".

   > **e.** Choose "Start in test mode" and click on "Enable".

   > **f.** Your database is now set up and ready to use.

7. Get the Firebase configuration to your project by following these steps:

   > **a.** Go to the Firebase console for your project.

   > **b.** Click on the "Settings" icon (gear) next to "Project Overview" in the top-left corner of the screen.

   > **c.** Click on "Project settings".

   > **d.** Scroll down to "Your apps" and click on the "Add app" button.

   > **e.** Choose the platform Web.

   > **f.** Follow the instructions to register your app.

   > **g.** Copy the Firebase configuration information (e.g., apiKey, authDomain, databaseURL, etc.) into the correct variables of `secrets-example.js` located in the root of the project.

   > **h.** Rename the `secrets-example.js` to `secrets.js`

8. Start the Expo development server by running the following command:
   `npm run start`

9. Open the Expo app on your mobile device (available for iOS and Android) and scan the QR code displayed in your terminal or command prompt.

10. Wait for the Expo app to load and display your application.

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

### MVP (Minimum Viable Product)

The MVP focuses on core functionalities to validate the app's concept and gather user feedback.

- [ ] **Driver being able to accept orders**

🟡 [**Send notification to the closest driver**](https://github.com/marcodluz/HiDelivery/issues/3)

- [x] Timer to accept the order

- [ ] Send global announcement

🟡 [**Driver can view order**](https://github.com/marcodluz/HiDelivery/issues/4)

- [x] Show order details

- [ ] Create a route current location > store > customer address

  - [ ] Driver can view the stores that are opened around him

    - [ ] Show open and closing time

    - [ ] Show distance

- [x] Driver can edit the quantity of items that has already picked up

- [ ] Driver can complete the order using the customer's PIN code

- [x] **Customer can select their address (using google maps)** (✅ [Started](https://github.com/marcodluz/HiDelivery/issues/4))

  - [x] Use phone current location

- [ ] **Customer can create an order**

  - [ ] Add items

  - [ ] Pay the order

  - [ ] Contact driver

  - [ ] Contact support

  - [ ] Cancel order before being accepted by a driver

- [ ] **Customer can see ongoing order**

  - [ ] Show order details

  - [ ] Show PIN code in big

- [ ] **Customer can browse items**

  - [ ] Have categories

- [ ] **Integrate database**

  - [ ] Firebase authentication

  - [ ] Firebase storage

  - [ ] Firebase real-time

See the [open issues](https://github.com/marcodluz/HiDelivery/issues) for a full list of proposed features (and known issues).

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [`LICENSE`][license-url] for more information.

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Marco Luz - [@marcodluz](https://twitter.com/marcodluz)

Project Link: [https://github.com/marcodluz/HiDelivery](https://github.com/marcodluz/HiDelivery)

<p  align="right">(<a  href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/marcodluz/HiDelivery.svg?style=for-the-badge
[contributors-url]: https://github.com/marcodluz/HiDelivery/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/marcodluz/HiDelivery.svg?style=for-the-badge
[forks-url]: https://github.com/marcodluz/HiDelivery/network/members
[stars-shield]: https://img.shields.io/github/stars/marcodluz/HiDelivery.svg?style=for-the-badge
[stars-url]: https://github.com/marcodluz/HiDelivery/stargazers
[issues-shield]: https://img.shields.io/github/issues/marcodluz/HiDelivery.svg?style=for-the-badge
[issues-url]: https://github.com/marcodluz/HiDelivery/issues
[license-shield]: https://img.shields.io/github/license/marcodluz/HiDelivery.svg?style=for-the-badge
[license-url]: https://github.com/marcodluz/HiDelivery/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/marcodluz
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[reactnative.dev]: https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[reactnative-url]: https://reactnative.dev/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
[expo.dev]: https://img.shields.io/badge/Expo-20232A?style=for-the-badge&logo=expo&logoColor=white
[expo-url]: https://expo.dev/
[code.visualstudio.com]: https://img.shields.io/badge/Visual%20Studio%20Code-20232A?style=for-the-badge&logo=visualstudiocode&logoColor=4DA4EB
[visualstudiocode-url]: https://expo.github.io/router/docs/
