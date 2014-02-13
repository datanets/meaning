meaning
=======

a quest for meaning

## example output

    > x is y and z -- true
    > what is x? -- y,z
    > pizza is food -- true
    > what is pizza? -- food
    > pizza is food and unhealthy -- true
    > what is pizza? -- food,unhealthy

- current flow:
    - give m input
    - m begins to parse input
    - m tokenizes input
    - m iterates through input items and assign weights (how often words are used)
    - m stores meaning when available
