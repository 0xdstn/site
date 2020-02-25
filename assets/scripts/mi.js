const MI = `
~index/index : Home
^ [l:wiki/about|Dustin] is a software engineer living in Spokane, Wa.
3 Wiki
? [d:wiki]
3 Projects
? [d:projects]
! <div style="text-align:center">
? [t:now]
! </div>

~wiki/about : About : More information about me
^ [b:Dustin] is the owner and maintainer of this website
& I am married to an amazing woman and have two beautiful children. My family is my top priority in life.
& I am currently working as a [b:software engineer] and have been creating websites and applications professionally since [b:2009].
& I study and follow the teachings of [b:secular buddhism] and [b:stoicism], and apply it to every aspect of my life as best I can.
& I tend to have many interests, so you will find a lot of various things I have dabbled in here on this site.

~wiki/library : Library : A list of books I've read
/ [l:https://supporters.eff.org/donate/pwning-tomorrow|Pwning Tomorrow] by Multiple authors
/ [l:https://www.amazon.com/dp/1328869334|1984] by George Orwell <code>READING</code>
/ [l:https://www.amazon.com/dp/1573229377|Anger] by Thich Nhat Hanh <code>READING</code>
/ [l:https://www.gutenberg.org/ebooks/21|Aesop's Fables] by Aesop <code>READING</code>
^ The [b:Library] is a list of books  
& Below is a list of books I've read, separated by year. This list was created as part of my [b:2019] New Years resolution to read more. Books read before [b:2019] are listed together in the [b:Books read prior to 2019] section. I attempted to put them in order read, ascending, but those may be off. All books categorized in a year are in order of when they were read, ascending.
& [b:Books read in 2020]
& [i:Goal: 2 of 15]
# [l:https://www.amazon.com/dp/B000FC1JAI|Meditations] by Marcus Aurelius, Gregory Hays
# [l:https://www.amazon.com/dp/B01EI7LFPY|Fight Club 2] by Chuck Palahniuk
# [l:https://www.amazon.com/dp/B07MJ3TDCZ|Stillness is the Key] by Ryan Holiday <code>READING</code>
# [l:https://www.amazon.com/dp/B07GD958T4|Stranger Things: The Other Side] by Jody Houser <code>READING</code>
# [l:https://www.amazon.com/dp/B01HNJIJB2|The Daily Stoic] by Ryan Holiday <code>READING</code>
& [b:Books read in 2019]
& [i:Goal: 17 of 12] &#x2705;
# [l:https://www.amazon.com/dp/1607747308|The Life-Changing Magic of Tidying Up] by Marie Kondō
# [l:https://www.amazon.com/dp/B07C31XJGP|No-Nonsense Buddhism for Beginners] by Noah Rasheta
# [l:https://www.amazon.com/dp/0857834916|Ikigai] by Yukari Mitsuhashi
# [l:https://www.amazon.com/dp/038574126X|We Were Liars] by E. Lockhart
# [l:https://www.amazon.com/dp/0143130722|Ikigai] by Héctor García & Francesc Miralles
# [l:https://www.amazon.com/dp/B003VIWRM2|My Spiritual Journey] by The 14th Dalai Lama
# [l:https://www.amazon.com/dp/0399581294|Draw Your Day] by Samantha Dion Baker
# [l:https://www.amazon.com/dp/0399581626|The New Rules of Coffee] by Jordan Michelman and Zachary Carlsen
# [l:https://www.amazon.com/dp/0553512706|The Halloween Tree] by Ray Bradbury
# [l:https://www.amazon.com/dp/B077S21HX6|Scary Stories to Tell in the Dark] by Alvin Schwartz
# [l:https://www.amazon.com/dp/0060835222|More Scary Stories to Tell in the Dark] by Alvin Schwartz
# [l:https://www.amazon.com/dp/B0006ASEJS|Halloween through twenty centuries] by Ralph Linton
# [l:https://www.amazon.com/dp/0060835249|Scary Stories 3: More Tales to Chill Your Bones] by Alvin Schwartz
# [l:https://www.amazon.com/dp/B00VE3J1QG|The Nightmare Collective] by Multiple authors
# [l:https://www.gutenberg.org/ebooks/7256|The Gift of the Magi] by O. Henry
# [l:https://www.amazon.com/dp/B00JS59ZK4|Watch Dogs: Dark Clouds] by John Shirley
# [l:https://www.gutenberg.org/ebooks/46|A Christmas Carol] by Charles Dickens
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

~wiki/tenpo : Tenpo : A personal date format
^ [b:Tenpo] is a date format.
& Tenpo is the custom date format that is used on this wiki. It is written in the format [b:YYMDD].
& The current tenpo date is [t:now].
3 Years
& Years are an incremental count of years since [b:1988], the year I was born, with the first year being year [b:00]. For years lower than 10, a leading zero is added.
& Here are some examples for reference:
- [b:31] 2019
- [b:20] 2008
- [b:12] 2000
- [b:02] 1990
- [b:00] 1988
3 Months and Days
& There are [b:5 months] lasting exctly [b:73 days each]. The months are single letters, [b:A-E]. Days are just the number of days within each month from [b:01 to 73].
& Here are the dates that fall within each month:
- [b:A] 01/01 - 03/14
- [b:B] 03/15 - 05/26
- [b:C] 05/27 - 08/07
- [b:D] 08/08 - 10/19
- [b:E] 10/20 - 12/31
3 Leap year
& Whenever there is a leap year, that day is annexed and written as [b:A00], so in [b:2020] the leap year day of [b:2/29] will be [b:32A00].

~projects/lon : Lon : A flat-file CLI bookmark manager
^ [b:Lon] is a CLI bookmark manager
& Lon is a simple bookmark manager for storing and searching/tagging things online.
& All data is stored in a single <code>~/.lon</code> file.
& You can use the following commands (example: <code>lon.py list</code>):
- <code>init</code> - Initialize your bookmarks
- <code>list</code> - View a list of all your bookmarks
- <code>tags</code> - View a list of all your tags
- <code>search &lt;term&gt;</code> - Search for bookmarks containing the provided term
- <code>tagged &lt;tag&gt;</code> - Search for bookmarks tagged with the provided tag
- <code>add &lt;url&gt; "&lt;title&gt;" &lt;tag1&gt;,&lt;tag2&gt;</code> - Add a bookmark with the provided details
3 Future plans
& Here are some features I'd like to add in the future:
- Add generator to output a site for viewing bookmarks
- Add ability to edit a bookmark
- Add ability to delete a bookmark
- Add check to prevent duplicate bookmarks
3 Release notes
- <code>v1.0.1</code> Added ability to get a list of tags
- <code>v1.0.0</code> Initial release with base functionality

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
3 Linkbot
& An IRC bot that finds URLs, images, and youtube videos, and compiles a list of them. 
& You are automatically opted out of your links being shared. If you want to opt in so all links you post are shared, you can add an empty [b:.linkbot] file to your home directory. If the bot finds a link you posted and you have this dotfile, your link will be added. You can still opt a specific link out by starting your message with [b:!nolinkbot], [b:!nolink], or [b:!nolb]. If you are not opted in, you can still add a link explicitly by starting your message with [b:!linkbot], [b:!link], or [b:!lb].
& The output can be [l:http://tilde.town/~dustin/linkbot/|viewed here].

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
! &#9744; Bugfix: Scroll to top of page when transitioning internally<br>
`;

if (typeof module !== 'undefined') module.exports = MI;
