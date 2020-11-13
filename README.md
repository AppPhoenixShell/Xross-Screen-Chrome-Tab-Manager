# Xross-Screen-Chrome-Tab-Manager
A chrome extension that allows management of tabs for multiscreen / window or ultrawide setups optimised for productivity of multiple chrome tabs.

# Feature Set
Allows users to send commands such as 'open link' , 'open image' , 'youtube' to a user defined chrome tab or windows using the chrome browsers popup context menu.

## Window setup
The app supports up to 3 chrome window setup. WINDOWS: LEFT, CENTER, RIGHT & also some predefined specials tabs like SEARCH, YOUTUBE, GALLERY, REDDIT, CONTROL
To setup windows click the Chrome Extension Main Action in the browser window to setup the widnow and tab features.

### Window Left
Sets the current Window to LEFT

### Window Center
Sets the current Widow to CENTER

### Window Right
Sets the current Window to RIGHT

### Tab Gallery
Sets the current Tab as a special type 'GALLERY'

### Tab Youtube
Sets the current Tab as a special type 'Youtube'

### Tab Search
Sets the current Tab as a special type 'SEARCH'

### Tab Reddit
Sets the current Tab as a special type 'REDDIT'

### Tab Control
Sets the current Tab as a special type 'Search' (not used yet)



## Menu Commands
When  the app is installed, right clicking on certain browser content will bring show extra custom options defined by the app. The custom options will be under the 
'Xross Screen' top level option. The child options will depend on what content was selected

### [URL] Split
This is a command used when using 'Dual Windows instead of 3 thirds'. This will send the URL to the last foucsed window (will NOT open new tab)

### [URL] LEFT, CENTER, RIGHT
Sends a 'open link' command to either LEFT, CENTER or RIGHT window (will open new tab)

### [Send] LEFT, CENTER, RIGHT
Will remove the Tab from the current window and move it LEFT, CENTER, RIGHT window

### [Image] LEFT, CENTER, RIGHT
Will send the 'open image' comment to either LEFT, CENTER, RIGHT (will open a new tab)

### [Google] LEFT, CENTER, RIGHT
When highlighting plain text you can send the 'open google' command to either LEFT, CENTER, RIGHT (will open a  new tab)


### [Search]
Search is a special command will send a selected 'plain text' to the Tab marked SEARCH. It will not open a new tab but replace content in the SEARCH tab

### [Youtube]
Youtube is a special command will send a selected link in youtube to the Tab marked YOUTUBE. It will not open a new tab but replace content in the YOUTUBE tab

### [Reddit]
Redd is a special command will send a link inside reddit  to the Tab marked REDDIT. It will not open a new tab but replace content in the REDDIT tab

### [Translate]
Translate is a special command like SEARCH but will add the keyword 'translate' to the query for fast translation searching

### [Gallery]
Gallery is a speical command that will send a 'open image' url to the Tab marked GALLERY (will not open new tab, but replace content in GALLERY tab)
