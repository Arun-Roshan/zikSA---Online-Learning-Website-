angular.module('aboutUsApp', [])
    .controller('AboutUsController', function($scope) {
        // About Us content based on the provided abstract
        $scope.aboutUsContent = `Our system is about an online learning platform. We are going to implement the modules:
        1. User Registration and Authentication: This module enables users to securely register for a new account or log in using existing credentials. Upon successful authentication, users gain access to their personalized dashboard, facilitating a seamless and secure user experience.
        2. Course Management: Empowering administrators, this module facilitates the creation, modification, and deletion of courses through an intuitive admin panel. Users can effortlessly explore available courses, enroll in desired ones, and conveniently access enrolled courses directly from their dashboard.
        3. Payment Integration: Integrating seamlessly with payment gateways, this module enables users to purchase courses, granting them access to premium content. By offering a streamlined payment process, users can unlock exclusive learning materials and enhance their educational journey.
        4. Notifications: Enhancing user engagement and communication, this module ensures timely delivery of notifications via email or within the application. Users stay informed about critical updates, course announcements, upcoming deadlines, and other pertinent information, enriching their learning experience.
        5. Rating: Fostering user feedback and engagement, this module empowers users to provide star-based ratings for courses. By enabling users to share their experiences and opinions, this module facilitates community-driven insights and helps users make informed decisions when selecting courses.
        6. Quiz Game: Enriching the learning experience, this module offers interactive quiz games where users can participate to earn award points or badges. By gamifying the learning process, users are incentivized to engage with course content actively, fostering a dynamic and enjoyable learning environment.
        7. Personalized Learning Platform: Tailoring the learning experience to individual preferences, this module allows users to select their proficiency level (beginner, intermediate, expert). Based on these preferences, courses are curated and presented to users, ensuring relevant and personalized learning opportunities that align with their skill level and goals.`;
    });