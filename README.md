# Orion
Company Leave Managerment and Project Manegement Application using ReactJs and ROR. And AdminLTE has been used for design.

To run the project :
$ git clone git@github.com:RiyaKapuria/Orion.git
$ cd Orion
$ npm install (node version >=6)
$ sudo npm start


If after running the app again npm start is not working that time run these following commends.
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
$ sudo npm start
