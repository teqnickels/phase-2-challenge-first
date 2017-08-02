When you run a command in the terminal, where does BASH look for that command?
-- $PATH	(a list of directories from the system defined variables)

On a UNIX computer, how do you stop a running process?
--ctrl + c or top -> killPID or killall

What packages do you have installed via homebrew?
-- when I run brew list, it shows that I have the following packages: libyaml		node		openssl		postgresql	readline	ruby		yarn

On a UNIX computer, how do you find the process id of a running process?
--top

In a terminal, what does control-c do?
-- kill a process
What would be the result of typing the following commands?
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
-- from home, you're going into steve which is inside of Users, making a new directory called foo inside of steve, creating a new file called bar inside of steve, going into the foo directory, creating a file called bar inside of foo, creating a file called bar inside of foo, and then printing your work directory which would probably look like Users/steve/foo

How do you set an environment variable in your shell?
--you can see environment variables using the env command
set environment variable as such: variableName=value
echo myname=‘debrenamcewen’ <— we can create new variables
echo $myname <—we can recall the variable myname
This will only stay true during this session. You will have to set this in your .bashrc file for it to stay true beyond this session.
 myname won’t be available to the child processes that bash starts for us. To pass along these variables to other commands programs and scripts, we need to export the commands. export myname <—this exports the new variable myname to all programs

What keyboard shortcut do you use to split the screen in your editor?
--cmd-k up/down/left/right

How do you create an alias in your shell?
-- I use nano to open my .bashrc file and add a alias for commands there. Like: alias ll='ls -lahG' <-- this is an actual command in my .bashrc =)

When a terminal command completes, how can you tell if it was successful or not?
You'll see bash-3.2$ on a new line and you can use the history command will show you all the successful commands during the current session.

What does your ~/.gitconfig have in it? (paste the whole file here)

   [# This is Git's per-user configuration file.
[user]
# Please adapt and uncomment the following lines:
        name = Debrena McEwen
        email = debrenamcewen@gmail.com


  What is the difference between a relative and absolute path?
  --Relative is the path relative to where you are. Absolute is the full path from the root directory.

Lets say you have the following file structure
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?
--cp README.md ../pinterest-for-dogs

What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
-- cmmd + o and arrow keys

What files or folders do you want all git repositories to ignore?
--node_modules
--DS_Store
-- * .log (the space is intentional here, but I don't include a space between the asterisk and the period. This is any file with the .log ext)


What is the main difference between Array.map and Array.forEach in JavaScript?
-- map returns a new list of items as a result of the operations done to each item. for each returns the altered array as a result of the operations done to its items.
