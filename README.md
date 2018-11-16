1. Install Node.js using homebrew
	\n Install homebrew if you don’t already have it installed. Console Command:
		/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
	Now install node with command in console
		brew install node

2. Install nodemon.
	Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Console command:
	npm install -g nodemon
	***If the above doesn’t work try adding sudo:
			 sudo install -g nodemon demon

3. Run "npm install"
	This will install all node modules from the package.json file

3. To run server:
	nodemon server.js
	
Spoofing Video Ads:
1. Install switcheroo to redirect urls (chrome extension)
	a. Redirect fastlane-adv.rubiconproject.com/v1/auction/video to localhost:7070/video_spoof
	b. Redirect fastlane-adv.rubiconproject.com/v1/creative/ to localhost:7070/creative/
	
2. To select CPM go to controllers/spoofCtrl and find video_spoof. In this object you will see CPM set on line 164. Change this to the desired CPM.

3. The secure is on port 7070. Non secure is on port 4333.

4. If the spoof works you will see an ad with 3 doctors performing surgery.
