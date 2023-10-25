# GitEmote GitHub Action

GitEmote is a GitHub Action that adds an emote reaction to new pull requests based on their titles. It's a fun way to express your emotions and engagement with incoming changes!

## Usage

To use GitEmote in your repository, follow these steps:

1. Create a `.github/workflows/gitemote.yml` file in your repository.

2. Add the following code to the `gitemote.yml` file:

```yaml
name: GitEmote

on:
  pull_request:
    types:
      - opened

jobs:
  gitemote:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v2

      - name: Run GitEmote
        uses: rcmtcristian/gitemote@main
        with:
          with:
         GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Now, whenever someone creates a new pull request in your repository with a title containing the specified keywords, GitEmote will react with the chosen emote.
