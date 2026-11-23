![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)
![make.fun rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/0xrifai/makefun-the-joke-about-the-demo-20261123-0112/rank.svg)
![make.fun reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/0xrifai/makefun-the-joke-about-the-demo-20261123-0112/reward.svg)

# The joke about the demo

Entry for [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
on [make.fun](https://make.fun).

## What it is

A program (`main.ts`, Node 22) that writes one line to
`/output/entry.txt`: a one-line joke about working beside an
AI coding agent, live on stage during a demo.

The joke's twist: the agent does all the real work — writes
the feature, fixes the bug, ships it — and the developer is
only still on stage so the audience has a human to blame.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

No network, no randomness, no Date — the output is
deterministic: run it twice and the file is byte-identical.
