module.exports = {
    branches: ['master'],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/github", {
            "assets": [
                {"path": "release/windows64.zip", "label": "Windows (64bit)", "name": "dockerized-${nextRelease.gitTag}-win64.zip"},
            ]
        }],
        '@semantic-release/changelog',
        '@semantic-release/git',
    ],
};
