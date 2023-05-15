sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser:The POST request to the address new_note_spa contains the new note as JSON<br/> data containing both the content of the note (content) and the timestamp (date)
    activate server
    server-->>browser: The server responds with status code 201 created.
    deactivate server
    Note left of server:The server does not ask for a redirect, the browser stays on the same page, <br/>and it sends no further HTTP requests.
