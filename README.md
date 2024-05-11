# Portfodia

This project is built using Next.js, TailwindCSS, and TypeScript. It's a robust and scalable application that leverages
the power of server-side rendering, utility-first CSS, and strong type checking.

## Getting Started

To get started with this project, clone the repository to your local machine.

```bash
git clone https://github.com/Portfodia/portfodia_web_app.git
```

Then, install the dependencies.

```bash
npm install
```

The project runs on port 8080. To start the development server, run:

```bash
npm run dev
```

You can then access the application at `http://localhost:8080`.

## Branching Strategy

Commits should not be made directly to the staging or production branches. Instead, create a new branch for each feature
or bug fix you're working on.

When you're ready to merge your changes, create a pull request against the staging branch. Your changes will be reviewed
by a superior developer and merged upon approval.

Before starting work on a new feature, always pull the latest changes from the staging branch.

MERGING WITH PRODUCTION SHOULD NEVER BE DONE DIRECTLY. ALWAYS MERGE WITH STAGING FIRST.

Upon finishing a part of the project pull request to production from staging will be created and merged.

To pull the latest changes from the staging branch, run:

```bash
git checkout staging
git pull


```

or

```bash
git pull origin staging
```

## Commit Messages

We use semantic commit messages to streamline the development process and make it easier to track changes. For more
information on how to write semantic commit messages, please refer to
this [guide](https://www.conventionalcommits.org/).

## Default Route

The default route of the application is the login page. This is the first page users will see when they visit the
application.

## Contributing

We welcome contributions from all developers. Whether you're fixing a bug, adding a new feature, improving
documentation, or doing any other form of contribution, we appreciate your effort.

## Contact

If you have any questions, comments, or concerns, please feel free to contact the Portfodia Development Team.

## Acknowledgments

We would like to thank all the developers who have contributed to this project. Your hard work and dedication are
greatly appreciated.