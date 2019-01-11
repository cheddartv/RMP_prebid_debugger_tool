# Prebid Debug Tool

This tool can be used to spoof rubicon bids for prebid, allowing easy forcing of prebid ads on RMP.

## Steps for use:

1. Run `npm install` and `npm install -g nodemon` to get prerequisites
2. Install the browser plugin [Switcheroo Redirector](https://chrome.google.com/webstore/detail/switcheroo-redirector/cnmciclhnghalnpfhhleggldniplelbg) in chrome
3. Run `nodemon`, this will startup server.js and listen for **http** on port `4333` and **https** on port `7070`
4. Browse to the page you'd like to test, add `pbjs_debug=true` as a url parameter to get Prebid debugging messages in the console.
5. Open **Switcheroo Redirect** from the chrome menu and add a redirect
   * from `https://fastlane.rubiconproject.com/a/api/fastlane.json` to `http://localhost:4333/slowlane.json`
   * from `http://fastlane.rubiconproject.com/a/api/fastlane.json` to `http://localhost:4333/slowlane.json`
6. Refresh the page, you should now see 50 cpm Rubicon bids winning in all slots. They will print `Rubicon Ad Here` in their respective divs.

---

## Original README>md bt Ryan Schweitzer

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
	Note that teh cert file is not actually going to work with chrome so you need to tell Chrome to proceed even if its not safe. Do this by going to the secure endpoint in the browser https://localhost:7070/video_spoof and letting chrome know its safe to proceed.

4. If the spoof works you will see an ad with 3 doctors performing surgery.
