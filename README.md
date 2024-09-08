# Coding Compendium

Welcome to the GitHub repository for **Coding Compendium**, a comprehensive resource for programming concepts, languages, and frameworks. This repository aims to help developers, students, and enthusiasts deepen their understanding of various programming topics.

[Explore the Documentation](https://giulio333.github.io/coding-compendium/en/)

## Project Overview

Coding Compendium offers detailed documentation, code examples, and practical guides on topics such as Python, JavaScript, Java, React, Django, and best practices in software development.

## How to Modify the Repository

There are two primary ways to modify the repository:

### 1. Online using Project IDX (Recommended)

You can directly edit and test this project online using [Project IDX](https://idx.google.com/import?url=https://github.com/giulio333/coding-compendium.git). This method is recommended as the repository includes pre-configured settings for the IDX environment. Simply click the link below to open the repository in Project IDX:

<a href="https://idx.google.com/import?url=https://github.com/giulio333/coding-compendium.git">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://cdn.idx.dev/btn/open_dark_32.svg">
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://cdn.idx.dev/btn/open_light_32.svg">
    <img
      height="32"
      alt="Open in IDX"
      src="https://cdn.idx.dev/btn/open_purple_32.svg">
  </picture>
</a>

### 2. Offline using Docker

For offline modifications, you can clone the repository and use the provided Dockerfile to set up a local development environment. Follow these steps:

1. Ensure [Docker](https://www.docker.com/get-started) is installed.
2. Clone this repository to your machine.
3. Navigate to the directory containing the Dockerfile.
4. Build the Docker image with the following command:
   ``` sh
   docker build -t coding-compendium .
   ```
5. Run the Docker container:
   ``` sh
   docker run -d --name coding-compendium -v /your/path/to/coding-compendium:/app -p 7891:7891 coding-compendium
   ```
   This will start a local server on port 7891, where you can view the site and ensure everything is rendering as expected.

## Docker Environment

The project includes a Dockerfile that allows contributors to replicate the development environment. This ensures consistent testing across different setups.

## Documentation Powered by MkDocs Material

The documentation is generated using [MkDocs Material](https://squidfunk.github.io/mkdocs-material/), a static site generator designed for project documentation. It features search functionality, mobile responsiveness, and support for multiple languages, enhancing the accessibility and usability of the content.

## Contributing to Coding Compendium

We welcome contributions! Follow these steps:

1. **Fork the repository**: Make a copy of this repository to your GitHub account.
2. **Clone your fork**: Download your fork to your local machine.
3. **Create a branch**: This keeps your changes separate from the main project.
4. **Make changes**: Update the documentation or code as needed.
5. **Test locally**: Use the Docker environment to build and test your changes.
6. **Submit a pull request**: Once tested, submit a PR to the main repository.

For more detailed instructions, see the `CONTRIBUTING.md` file.

## Issues and Support

If you encounter any issues or have suggestions for improving the project, feel free to submit an issue on GitHub. For urgent issues, you can contact the maintainers directly through GitHub.

## Appreciation and Acknowledgments

Thank you for your interest in **Coding Compendium**! We appreciate your contributions, which help improve this resource for developers and learners worldwide.
