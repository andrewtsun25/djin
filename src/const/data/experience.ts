import {Experience, JobType} from "types/experience";
import {DateTime} from "luxon";
import andurilLogo from "assets/experience/logo/anduril.jpeg";
import googleLogo from "assets/experience/logo/google.png";
import amazonLogo from "assets/experience/logo/amazon.png";
import hliLogo from "assets/experience/logo/hli.png";
import yahooLogo from "assets/experience/logo/yahoo.jpeg";
import qtLogo from "assets/experience/logo/qt.jpeg";
import andurilImg from "assets/experience/media/anduril_lattice.jpg";
import googleImg from "assets/experience/media/google_youtube.png";
import amazonImg from "assets/experience/media/amazon_withoutabox.png";
import hliImg from "assets/experience/media/hli_mantis.png";
import yahoo2Img from "assets/experience/media/yahoo_shepherd.jpeg";
import yahoo1Img from "assets/experience/media/yahoo_gemini.png";
import qtImg from "assets/experience/media/qt_brandcaster.jpg";


const Anduril: Experience = {
    company: "Anduril Industries",
    role: "Software Engineer",
    avatarUrl: andurilLogo,
    mediaUrl: andurilImg,
    startDate: DateTime.fromISO("2020-08-10T09:00:00-08:00"),
    description: "Working on the Perception-Platform team creating front-end experiences for analyzing and managing object classification data from Anduril assets (towers and drones). Also assisting in developing UI and counter-UAS (unmanned aerial systems) capabilities for Lattice Control Application, a command center for visualizing object classification data.",
    responsibilities: [],
    skills: ["React", "Redux", "TypeScript", "protobuf", "gRPC", "Apache Spark", "Blueprint.js"],
    jobType: JobType.FullTime,
}

const Google: Experience = {
    company: "Google -- YouTube",
    role: "Software Engineering Intern",
    avatarUrl: googleLogo,
    mediaUrl: googleImg,
    startDate: DateTime.fromISO("2019-05-10T09:00:00-08:00"),
    endDate: DateTime.fromISO("2019-08-09T19:00:00-08:00"),
    description: "Contributed to the development of a virtual keyboard for YouTube running on non-standard devices such as smart televisions, game consoles, Blu-Ray players, and more.",
    responsibilities: [
        "Designed and implemented a letter suggestions feature to allow users to input special characters for any language. Refactored GBoard codebase written in JavaScript using Google Closure Compiler and wrote Youtube virtual keyboard code in TypeScript.",
        "Implemented a Vietnamese Telex keyboard with TypeScript code and protobuf configuration files to enable Vietnamese users, our 3rd biggest demographic, to input their own language when searching for videos. Ran experimental and launch statistical studies using YouTube’s proprietary feature launch framework to collect metrics and assess user feedback.",
        "Pioneered a new procedure for implementing and testing new keyboard configurations for different human languages to further YouTube virtual keyboard internationalization.",
        "Enabled physical keyboard support for users using Samsung TVs and other smart TVs. Tested keyboard support by searching YouTube videos for hours using a physical keyboard on multiple Samsung Devices (as part of the QA process, of course)."
    ],
    skills: ["TypeScript", "JavaScript", "A/B Testing", "Google Closure Compiler", "protobuf"],
    jobType: JobType.Internship,
}

const Amazon: Experience = {
    company: "Amazon -- IMDb",
    role: "Software Development Engineer I",
    avatarUrl: amazonLogo,
    mediaUrl: amazonImg,
    startDate: DateTime.fromISO("2016-09-26T09:00:00-08:00"),
    endDate: DateTime.fromISO("2018-04-13T17:00:00-08:00"),
    description: "Worked on developing various features on Withoutabox, a website that allows independent filmmakers to connect with film festivals. Also enabled these film festivals to crush their filmmaker's dreams.",
    responsibilities: [
        "Created a judging form builder using React/Redux and AWS DynamoDB to allow film festivals to create custom judging forms for their judges.",
        "Created a mass messaging system to allow film festival administrators to send custom templated messages to applicants using React/Redux, AWS Simple Workflow, and DynamoDB.",
        "Increased security in the backend by implementing anti-CSRF security measures on the legacy PHP codebase.",
        "Performed security reviews on site features to ensure compliance with Amazon security standards."
    ],
    skills: ["React", "Redux", "PHP", "Java", "AWS OpsWorks", "AWS CloudWatch", "AWS DynamoDB", "AWS EC2", "AWS Data Pipeline", "Cucumber", "Ruby"],
    jobType: JobType.FullTime,
}

const HLI: Experience = {
    company: "Human Longevity, Inc.",
    avatarUrl: hliLogo,
    mediaUrl: hliImg,
    role: "Bioinformatics Intern",
    startDate: DateTime.fromISO("2016-01-26T09:00:00-08:00"),
    endDate: DateTime.fromISO("2016-06-26T17:00:00-08:00"),
    description: "Helped doctors enable cancer patients to spend money on literally anything else other than cancer treatment.",
    responsibilities: [
        "Designed and implemented a custom dynamic test harness in Java to validate PDF reports generated by the Mantis Genome Interpretation Engine against inputted genome files (VCF).",
        "Wrote scripts in Python to collect data curated from external biological databases and standardize them for cancer exome report generation."
    ],
    skills: ["React", "Redux", "PHP", "Java", "AWS OpsWorks", "AWS CloudWatch", "AWS DynamoDB", "AWS Data Pipeline", "Cucumber", "Ruby"],
    jobType: JobType.Internship
}

const Yahoo2: Experience = {
    company: "Yahoo!",
    avatarUrl: yahooLogo,
    mediaUrl: yahoo2Img,
    role: "Technical Intern",
    startDate: DateTime.fromISO("2015-06-15T09:00:00-08:00"),
    endDate: DateTime.fromISO("2015-09-18T17:00:00-08:00"),
    description: "Developed internal reporting tools for the Reporting/Analytics team to monitor advertising data ETL pipelines. Also presented my work as part of the UCSD Jacobs School of Engineering Team Internship Program.",
    responsibilities: [
        "Created three internal dashboards for monitoring advertising data ETL pipeline state for the reporting and analytics teams.",
        "Designed web dashboards using jQuery and Handlebars templating in the front end. Data was fetched through creation of a new REST endpoint in Java, alongside SQL queries to OracleDB."
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Java", "Handlebars"],
    jobType: JobType.Internship
}

const Yahoo1: Experience = {
    company: "Yahoo!",
    avatarUrl: yahooLogo,
    mediaUrl: yahoo1Img,
    role: "Technical Intern",
    startDate: DateTime.fromISO("2014-06-13T09:00:00-08:00"),
    endDate: DateTime.fromISO("2014-09-19T17:00:00-08:00"),
    description: "Advertisers can buy keywords from Yahoo! to have their ads display on searches containing the keyword, with more relevant keywords being more expensive. " +
        "Instead, they buy a larger quantity of irrelevant keywords to increase the probability of ad impression but also detract from user experience.",
    responsibilities: [
        "Created a query categorization filter in C++ to prevent this kind of keyword abuse, only showing ads for relevant searches.",
        "Generated daily metrics of filter performance with Hadoop and Pig scripts."
    ],
    skills: ["C++", "Apache Pig", "Apache Hadoop"],
    jobType: JobType.Internship
}

const CouponsCom: Experience = {
    company: "Quotient Technologies",
    avatarUrl: qtLogo,
    mediaUrl: qtImg,
    role: "Software Engineering Intern",
    startDate: DateTime.fromISO("2014-06-17T09:00:00-08:00"),
    endDate: DateTime.fromISO("2014-09-20T17:00:00-08:00"),
    description: "Developed unit tests for the distribution and redemption of online coupons.",
    responsibilities: [
        "Designed and implemented unit tests using Selenium Webdriver in Java & Scala for Brandcaster Social, a plugin for companies to advertise coupons on Facebook pages and CLOE (Card-Linked Offer Experience), a feature allowing users to link coupons to their credit/debit cards",
        "Designed and tested credit card data access objects for CLOE via ScalaUnit & JDBC to verify PCI compliance."
    ],
    skills: ["Selenium Webdriver", "Java", "Scala", "JDBC", "JUnit", "ScalaUnit"],
    jobType: JobType.Internship
}

const CodingExperience = [Anduril, Google, Amazon, HLI, Yahoo2, Yahoo1, CouponsCom];

export { CodingExperience };


