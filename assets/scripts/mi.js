const MI = `
~about/index : About : More information about Dustin
^ [b:Dustin] is the owner and maintainer of this website
& I have been browsing the internet under many pseudonyms over the years, and decided to no longer hide in a [l:#thoughts/dark-forest|dark forest] on the internet.
& I am married to an amazing woman and have two beautiful children. My family is my top priority in life.
& I am currently working as a [b:software engineer] and have been creating websites and applications professionally since [b:2009].
& I study and follow the teachings of [b:secular buddhism], and apply it to every aspect of my life as best I can.
& I tend to have many interests, so you will find a lot of various things I have dabbled in here on this site.
3 Contact &amp; social
- [b:Github:] [l:https://github.com/0xdustin|github.com/0xdustin]
- [b:Email:] [l:mailto:0xdustin@protonmail.com|0xdustin@protonmail.com]

~index/index : Home
^ [l:about|Dustin] is a software engineer living in Spokane, Wa.
! <div class="post-columns">
! <div class="post-column">
3 Projects
? [d:projects]
! </div>
! <div class="post-column">
3 Thoughts
? [d:thoughts]
! </div>
! </div>

~projects/index : Projects
^ [b:Projects] is a collection of various things I've worked on
? [d:projects]

~projects/library : Library : A list of books I've read
^ The [b:Library] is a list of books  
& Below is a list of books I've read, separated by year. This list was created as part of my [b:2019] New Years resolution to read more. Books read before [b:2019] are listed together in the [b:Books read prior to 2019] section. I attempted to put them in order read, ascending, but those may be off. All books categorized in a year are in order of when they were read, ascending.
& [b:Books read in 2019]
# [l:https://www.amazon.com/dp/1607747308|The Life-Changing Magic of Tidying Up] by Marie Kondō
# [l:https://www.amazon.com/dp/B07C31XJGP|No-Nonsense Buddhism for Beginners] by Noah Rasheta
# [l:https://www.amazon.com/dp/0857834916|Ikigai] by Yukari Mitsuhashi
# [l:https://www.amazon.com/dp/038574126X|We Were Liars] by E. Lockhart
# [l:https://www.amazon.com/dp/0143130722|Ikigai] by Héctor García & Francesc Miralles
# [l:https://www.amazon.com/dp/B003VIWRM2|My Spiritual Journey] by The 14th Dalai Lama
# [l:https://www.amazon.com/dp/0399581294|Draw Your Day] by Samantha Dion Baker
# [l:https://www.amazon.com/dp/0399581626|The New Rules of Coffee] by Jordan Michelman and Zachary Carlsen
# [l:https://www.amazon.com/dp/0553512706|The Halloween Tree] by Ray Bradbury
# [l:https://supporters.eff.org/donate/pwning-tomorrow|Pwning Tomorrow] by Multiple authors <code>READING</code>
# [l:https://www.amazon.com/dp/B077S21HX6|Scary Stories to Tell in the Dark] by Alvin Schwartz <code>READING</code>
# [l:https://www.amazon.com/dp/0060512806|Cryptonomicon] by Neal Stephenson <code>LISTENING</code>
& [b:Books read prior to 2019]
- [l:https://www.amazon.com/dp/0545162076|Harry Potter 1-7] by J.K. Rowling
- [l:https://www.amazon.com/dp/B002BA83RO|The Dead Zone] by Stephen King
- [l:https://www.amazon.com/dp/1403991960|Lord of the Flies] by William Golding
- [l:https://www.amazon.com/dp/039333807X|Survivor] by Chuck Palahniuk
- [l:https://www.amazon.com/dp/0393327345|Fight Club] by Chuck Palahniuk
- [l:https://www.amazon.com/dp/0385720920|Choke] by Chuck Palahniuk
- [l:https://www.amazon.com/dp/1400049628|The Zombie Survival Guide] by Max Brooks
- [l:https://www.amazon.com/dp/0307346617|World War Z] by Max Brooks
- [l:https://www.gutenberg.org/ebooks/19002|Alices Adventures Underground] by Lewis Carroll
- [l:https://www.amazon.com/dp/0307275833|Rant] by Chuck Palahniuk
- [l:https://www.amazon.com/dp/1595145168|The Future of Us] by Jay Asher
- [l:https://www.amazon.com/dp/1582342733|The Dark Fields] by Alan Glynn
- [l:https://www.amazon.com/dp/0439023483|The Hunger Games] by Suzanne Collins
- [l:https://www.amazon.com/dp/0545586178|Catching Fire] by Suzanne Collins
- [l:https://www.amazon.com/dp/0545663261|Mockingjay] by Suzanne Collins
- [l:https://www.amazon.com/dp/0385736002|The Alchemyst] by Michael Scott
- [l:https://www.amazon.com/dp/0385737289|The Magician] by Michael Scott
- [l:https://www.amazon.com/dp/0385735308|The Sorceress] by Michael Scott
- [l:https://www.amazon.com/dp/0385735324|The Necromancer] by Michael Scott
- [l:https://www.amazon.com/dp/0062191497|Reamde] by Neal Stephenson
- [l:https://www.amazon.com/dp/0316037729|Ghost in the Wires] by Kevin Mitnick
- [l:https://craphound.com/littlebrother/download|Little Brother] by Cory Doctorow
- [l:https://craphound.com/littlebrother/download|Homeland] by Cory Doctorow
- [l:https://www.tor.com/2013/08/28/lawful-interception/|Lawful Interception] by Cory Doctorow
- [l:https://www.amazon.com/dp/0307588378|Gone Girl] by Gillian Flynn
- [l:https://www.amazon.com/dp/1597499579|Violent Python] by T.J. O'Connor
- [l:https://www.amazon.com/dp/0307887448|Ready Player One] by Ernest Cline
- [l:http://www.galactanet.com/oneoff/lacero.html|Lacero] by Andy Weir

~projects/tilde-social : Tilde Social : A flat-file social network
^ [b:Tilde Social] is a flat-file social network
& Tilde Social is intended to be used on shared tilde servers (like [l:http://tilde.town|tilde.town]).
& All of your data is contained in your home directory, and others read your files to display information.
3 User file system
& When you initialize an account, you will have the following in your [b:~/.social] directory:
- [b:config] - profile information
- [b:following] - list of users you are following
- [b:posts] - list of posts you've published
3 CLI utility
& The network is interacted with via a single python script. On [l:http://tilde.town|tilde.town] it is globally linked as <code>timeline</code>.
& You can use the following commands (example: <code>timeline feed</code>):
- <code>init</code> - To create a new profile, it will ask you a few questions and generate files for you
- <code>users</code> - View a list of users who have a profile
- <code>feed</code> - View a feed of users you follow
- <code>local</code> - View a feed of all users
- <code>me</code> - View your profile
- <code>following</code> - View a list of users you follow
- <code>followers</code> - View a list of users who follow you
- <code>mentions</code> - View a list of posts you're mentioned in
- <code>post Message to post</code> - Post a new message, everything in the quotes will be posted
- <code>follow username</code> - Follow a user
- <code>unfollow username</code> - Unfollow a user
- <code>following username</code> - View a list of users another uesr is following
- <code>followers username</code> - View a list of users who follow a user
3 Future plans
& Here are some features I'd like to add in the future if there is enough people using it:
- Require posts to be in quotes
- Allow commands with usernames to have tildes
- Make post ineractive "timeline post" and then a prompt for the text
- Add following and follows you to profiles
- Deleting a post from the CLI
- Boosting
- Replies
- View a specific post thread
- Hashtag support
- Limit feed and local with a number, such as "timeline local 5"
- A more interactive tui application
- Statically generated html files for use in the browser?
- Remote following users on other tildes?
3 Release notes
- <code>v1.0.10</code> Fixed bug where feed was backward
- <code>v1.0.9</code> Fixed bug where specific user posts over 20 weren't loading
- <code>v1.0.8</code> Resetting colors at the end of each line in a post, cleaned up whitespace between posts
- <code>v1.0.7</code> Added following/follows you indicators on user list
- <code>v1.0.6</code> Preventing future posts from displaying
- <code>v1.0.5</code> Added support for multi-line posts, fixed bug where malformed posts are included in count limit
- <code>v1.0.4</code> Updated to handle malformed posts
- <code>v1.0.3</code> Added ability to post without wrapping your message in quotes
- <code>v1.0.2</code> Added local timeline for all user posts
- <code>v1.0.1</code> Updated timeline to include your own posts
- <code>v1.0.0</code> Initial release with base functionality

~projects/tilde-tools : Tilde tools : A list of tilde.town related projects
^ [b:Tilde tools] is a list of projects related to [l:http://tilde.town|tilde.town]
3 @towniebot
& A mastodon bot that features a random ~town user each morning. You can follow it at [l:https://tiny.tilde.website/@towniebot|@towniebot@tiny.tilde.website].
& If you are a ~town user and would like to opt out as an option for this bot, simply create an empty file in your home directory called [b:.towniebot]. If the bot selects you and finds this file, it will skip you and move on to someone else.
& If you were featured before you were able to opt out, please reach out to me and I can manually delete the toot.
3 Tildebrowser
& This project was an idea by [l:http://tilde.town/~equa|~equa].
& Every night at 12AM server time, a list of users will be scraped from the [b:/home] directory.
& If a user has not changed their [b:index.html] from the default, they are not included in the list.
& The page defaults the first user in the list, and provides links to the next and previous users, alphabetically. The page loads the currently selected user's page in an iframe. 
& If you are a member of ~town and would like to be excluded from the list, you can create a [b:.tildebrowser] file in your home directory. When the data is refreshed at 12AM, it will not include you. If you need it refreshed sooner, reach out to me and will manually run the script as soon as I can.
& The tildebrowser can be [l:http://tilde.town/~dustin/tildebrowser|viewed here].
3 Twtxt scraper
& A script that gathers a list of [l:https://github.com/buckket/twtxt|twtxt] feeds of ~town users. It searches for an actual [b:twtxt.txt] file, and also parses the user's [b:index.html] file for a link if a file wasn't found. It is run nightly, and the output can be [l:http://tilde.town/~dustin/twtxt.html|viewed here].
3 Social scraper
& A script that gathers a list of social accounts from ~town user's [b:index.html] file. It finds mastodon, github, instagram, and twitter. It is run nightly, and the output can be [l:http://tilde.town/~dustin/social.html|viewed here].
3 Namelen
& A script that gathers statistics on the username length of ~town users. It is run nightly, and the output can be [l:http://tilde.town/~dustin/namelen.html|viewed here].

~projects/camera-glitch : Camera glitch : A collection of photos taken with a broken digital camera
^ [b:Camera glitch] is a collection of photos taken with a broken digital camera
& A while back I had a digital camera with a broken lens that functioned enough to take some glitched photos. I tried to glitch it further and just ended up breaking the camera, but these were the images that I got out of it. Completely unmodified, taken straight from the camera.
@ assets/img/DSC00023_th.jpg|assets/img/DSC00023.jpg
@ assets/img/DSC00026_th.jpg|assets/img/DSC00026.jpg
@ assets/img/DSC00027_th.jpg|assets/img/DSC00027.jpg
@ assets/img/DSC00028_th.jpg|assets/img/DSC00028.jpg
@ assets/img/DSC00029_th.jpg|assets/img/DSC00029.jpg
@ assets/img/DSC00030_th.jpg|assets/img/DSC00030.jpg
@ assets/img/DSC00032_th.jpg|assets/img/DSC00032.jpg
@ assets/img/DSC00033_th.jpg|assets/img/DSC00033.jpg
@ assets/img/DSC00034_th.jpg|assets/img/DSC00034.jpg
@ assets/img/DSC00035_th.jpg|assets/img/DSC00035.jpg
@ assets/img/DSC00036_th.jpg|assets/img/DSC00036.jpg
@ assets/img/DSC00038_th.jpg|assets/img/DSC00038.jpg
@ assets/img/DSC00041_th.jpg|assets/img/DSC00041.jpg

~projects/nullctrl : NULLCTRL : A collection of glitch art
^ [b:NULLCTRL] is a collection of glitch art created between [b:2014] and [b:2015]
& They were created using various techniques, including databending and the Decim8 app.
@ assets/img/1_th.jpg|assets/img/1.jpg
@ assets/img/2_th.jpg|assets/img/2.jpg
@ assets/img/3_th.jpg|assets/img/3.jpg
@ assets/img/4_th.jpg|assets/img/4.jpg
@ assets/img/5_th.jpg|assets/img/5.jpg
@ assets/img/6_th.jpg|assets/img/6.jpg
@ assets/img/7_th.jpg|assets/img/7.jpg
@ assets/img/8_th.jpg|assets/img/8.jpg

~thoughts/index : Thoughts
^ [b:Thoughts] is a collection of written ideas and concepts
? [d:thoughts]

~thoughts/social-media : Social Media : August 13th, 2019
2 [p:NAME]
_ [p:DESC]
& Over the last year or so, I've noticed a pattern with myself, related to my social media usage.
& When I say social media, I'm mostly referring to Twitter and Mastodon. I actually don't seem to have much of a problem with Instagram or Facebook.
& I tend to get addicted to microblogging services. This causes me to be constantly absorbed in my phone, ignoring everyone and everything around me. I find it hard to go a few minutes without checking if I'm not busy doing something else that requires my attention.
& I also tend to seek validation through likes. This is an obsession a lot of us have, and I don't feel it's very healthy behavior. When I was young I would create things for myself, for fun. Now it seems I am only in it for the validation. When I allow myself to just create and enjoy the fact that I made something, it's much more fulfilling.
& When I post on these platforms, I often feel as though I'm shouting into the void. This is particularly bad on Twitter. When I post, is anyone <em>really</em> reading it? If I don't get a lot of feedback, it feels like it was for no reason and silly to even post it.
& I've thought a lot about the audience I'm trying to reach with accounts like these, and I don't really have one. I don't need anyone to see anything I would post on there. It doesn't improve my quality of life. I am much better off hanging out in little places on the internet such as [l:http://tilde.town|tilde.town] and using the chat and [l:projects/tilde-social|Tilde Social] functionality to connect with others.
& I'm going to do my best to stay away from large social media platforms from now on. It keeps my head clear and keeps me present, and that's what I really need.

~thoughts/dark-forest : Dark forest : June 6th, 2019
2 [p:NAME]
_ [p:DESC]
& I just read through a two part article about [l:https://onezero.medium.com/the-dark-forest-theory-of-the-internet-7dc3e68a7cb1|The Dark Forest Theory of the Internet], which really resonated with me.
& In my original days of using the internet over a decade ago, I used to post anything I wanted, without filter, under my own name. I didn't care about the likes (originaly this wasn't even a concept that existed) or the fact that I might be shouting into the void. I just shared because that is what the platform was for. That is what I wanted to do - share.
& I have struggled with the last 5 or so years with my online identity. I have created countless pseudonyms, and even paraded as myself with my real name. I have gone in and out of mindsets where I feel privacy is the aboslute most important thing to be concerned with online, and being completely open.
& I'm sure a lot of this is caused by the fact that I became an adult on the internet, and who I am now is not who I was then. A lot has changed, and most of all my opinions on everything have changed.
& I feel like running around on the internet under a pseudonym doesn't provide much. Privacy isn't about hiding who I am, it's about being selective about what I share. I don't need to blast out photos of my familiy and my every whereabouts publicly, that is a good use for a dark forest such as my private Facebook or Instagram.
& I have been fighting against technology instead of allowing it to make my life better. Allowing it to make me more connected to the outside world. This connectivity to other humans is the true power of the internet, once you push through all of the noise. The excessive bits of the internet are new, the conversation and personal connections have always been there.
& I want to be more open, in a careful way, online. The things that I have added to this site are really a true representation of my thoughts and interests. I don't need to hide those behind a moniker.
& My name is [l:about|Dustin] and this is my personal site for sharing my life.

~thoughts/to-log-or-not-to-log : To log or not to log : July 19th, 2019
2 [p:NAME]
_ [p:DESC]
& I have spent a lot of time attempting to digitally log various things over the years. Majority of this has been health related - steps, calories, water consumption, walks/runs, meditation, etc.
& I started looking into tracking other things, such as how I spend my time. I tried doing this for just a single day, and it felt very daunting on top of all of the other things I have going on in my life.
& While I feel these kind of statistics can be useful, I needed to take a step back and look at how I would be using them. In the end, I decided I was trying to log for the sake of logging, since other people are doing it, and didn't have any real reason to be doing so, or any plan to utilize the data.
& This was a good realization for me. I have been tracking many things, and I feel as though it's just a time consuming task for me, and I will never use the data.
& Two of the things I am going to stop tracking is water and food. If I'm being mindful of how/what I'm eating, and whether or not I've had enough water in the day, the numbers don't really matter. I can tell when I'm eating poorly, or if I'm trying to eat more than I should. I can also tell if I haven't had enough water and should drink more. These ones specifically are really a challenge to be mindful about what I put into my body.
& The only things I have any plans of tracking is sleep and running. I can actually use this information for something. If I am sleeping poorly, I can try to figure out what exactly is the cause, and try to remediate it. As for running, I enjoy this and would like to increase my speed/distance, so this is something I am going to be tracking and working on.
& I want to work with technology to make my life simple and mindful, not complicate it for no reason.
& I understand that tracking data like this is helpful for others, but it just isn't useful for me, personally.

~thoughts/write-something : Write something : June 16th, 2018
2 [p:NAME]
_ [p:DESC]
& I was listening to a [l:https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX6ziVCJnEm59|playlist on Spotify] the other day, and Bees by [l:https://open.spotify.com/track/21vNMGKtXBA2a8PaVdIgrM|The Ballroom Thieves] came on. This song contains a quote from Benjamin Franklin, which resonated with me:
> Either write something worth reading or do something worth writing.
& I've considered setting up a blog many times, but have never pulled the trigger. Maybe I just felt I didn't have anything worthwhile to write. Maybe the daunting task of creating a design got in the way. Maybe I was afraid of what others would think about what I wrote, or maybe that nobody would read it.
& None of these are good reasons not to write. While I don't have much experience writing, it is something I am interested in.
& The above quote inspired me to get this blog set up. I may not be able to do much worth writing about, but I can write something worth reading, or at least I will try.

~devnull/index : /dev/null
^ [b:/dev/null] is a list of pages that are not yet complete
? [d:devnull]

~devnull/todo : TODO : ?????
^ [b:TODO] is a list of things I'd like to do on this site
! &#9744; Add search functionality<br>
! &#9744; Write about site page<br>
! &#9744; Write dotfiles page<br>
! &#9744; Implement caching<br>
! &#9744; Add page transitions<br>
! &#9744; Add functionality to test page content directly on site<br>
! &#9744; Write VOID page<br>
! &#9744; Write Glitchcam v0 page<br>
`;

if (typeof module !== 'undefined') module.exports = MI;
