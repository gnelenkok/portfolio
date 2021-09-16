import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
	name: "Gnelenko Kirill",
	title: "Hi all, I'm Kirill",
	description:
		"Engineer with more than 8 years of experience. Fanatic of linux systems, and big experience. I can program and I have understanding of development process. I'm interested in automation, highload systems tuning, clusters and cloud systems, CI/CD processes and close work with programmers, QA. Wide area of knowledge in different IT technologies, solutions, programs, services. JavaScript technology stack. Knowledge in AWS, also Azure and Google Cloud. Source code investigation and troubleshooting. I supported own private cloud VMware. I supported web hosting systems and dedicated servers. Investigation in complex projects. Experience in team management. Automation of tasks executing.",
	resumeLink: "https://gnelenkok.github.io/CV_DevOps_Gnelenko_Kirill/",
};

export const openSource = {
	githubUserName: "gnelenkok",
};

export const contact = {};

export const socialLinks = {
	telegram: "https://t.me/kirill_onegin",
	viber: "viber://add?number=380672923375",
	linkedin: "https://www.linkedin.com/in/gnelenkok",
	skype: "skype:kirill_onegin?userinfo",
	github: "https://github.com/1hanzla100",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"I am a responsible and hardworking person, I always work in full force. ",
	skills: [
		emoji(
			"⚡ Experience with container based application deployment with Docker, using tools with Docker compose, deployment large environments for testing and production purpose."
		),
		emoji(
			"⚡ Support entire company servers running on different flavors OS (Red Hat, Centos, Ubuntu)"
		),
		emoji(
			"⚡ Combine different tools to improve the network monitoring"
		),
	],

	softwareSkills: [
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "GitLab",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "GitHub",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "VMware",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "MySQL",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "PostgreSQL",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "Zabbix",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "Prometheus",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "Loki",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "Grafana",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "AWS",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "Jira",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "Confluence",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "Ngnix",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "NextCloud",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "Exchange Server",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "Slack",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Harvard University",
		subHeader: "Master of Science in Computer Science",
		duration: "September 2017 - April 2019",
		desc: "Participated in the research of XXX and published 3 papers.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Harvard",
		subHeader: "Master of Science in Computer Science",
		duration: "September 2017 - April 2019",
		desc: "Participated in the research of XXX and published 3 papers.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		schoolName: "Stanford University",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "September 2013 - April 2017",
		desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
		descBullets: [
			"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "Google",
		companylogo: googlelogo,
		date: "June 2018 – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		role: "Front-End Developer",
		company: "Github",
		companylogo: github,
		date: "May 2017 – May 2018",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Software Engineer Intern",
		company: "Airbnb",
		companylogo: airbnb,
		date: "Jan 2015 – Sep 2015",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
