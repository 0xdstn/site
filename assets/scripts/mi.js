const MI = `
~index/index : Home
^ [l:wiki/about|Dustin] is a software engineer living in Spokane, Wa.
! <div class="post-columns">
! <div class="post-column">
3 Wiki
? [d:wiki]
! </div>
! <div class="post-column">
3 Projects
? [d:projects]
! </div>
! <div class="post-column">
3 Notes 
? [d:notes]
! </div>
! <div class="post-column">
3 Thoughts
? [d:thoughts]
! </div>
! </div>

~wiki/index : Wiki
^ [b:Wiki] is a collection of personal documents
? [s:wiki]

~wiki/about : About : More information about me
^ [b:Dustin] is the owner and maintainer of this website
& I have been browsing the internet under many pseudonyms over the years, and decided to no longer hide in a [l:#thoughts/dark-forest|dark forest] on the internet.
& I am married to an amazing woman and have two beautiful children. My family is my top priority in life.
& I am currently working as a [b:software engineer] and have been creating websites and applications professionally since [b:2009].
& I study and follow the teachings of [b:secular buddhism], and apply it to every aspect of my life as best I can.
& I tend to have many interests, so you will find a lot of various things I have dabbled in here on this site.
3 Contact &amp; social
- [b:Mastodon:] [l:https://tiny.tilde.website/@0xdstn|tiny.tilde.website/@0xdstn]
- [b:Github:] [l:https://github.com/0xdstn|github.com/0xdstn]
- [b:Email:] [l:mailto:0xdstn@protonmail.com|0xdstn@protonmail.com]

~wiki/library : Library : A list of books I've read
/ [l:https://supporters.eff.org/donate/pwning-tomorrow|Pwning Tomorrow] by Multiple authors
/ [l:https://www.amazon.com/dp/1328869334|1984] by George Orwell <code>READING</code>
^ The [b:Library] is a list of books  
& Below is a list of books I've read, separated by year. This list was created as part of my [b:2019] New Years resolution to read more. Books read before [b:2019] are listed together in the [b:Books read prior to 2019] section. I attempted to put them in order read, ascending, but those may be off. All books categorized in a year are in order of when they were read, ascending.
& [b:Books read in 2020]
& [i:Goal: 1 of 15]
# [l:https://www.amazon.com/dp/B000FC1JAI|Meditations] by Marcus Aurelius, Gregory Hays ([l:notes/meditations|reading notes]) 
# [l:https://www.amazon.com/dp/1573229377|Anger] by Thich Nhat Hanh <code>READING</code>
# [l:https://www.gutenberg.org/ebooks/21|Aesop's Fables] by Aesop <code>READING</code>
# [l:https://www.amazon.com/dp/B07MJ3TDCZ|Stillness is the Key] by Ryan Holiday <code>READING</code>
# [l:https://www.amazon.com/dp/B01HNJIJB2|The Daily Stoic] by Ryan Holiday ([l:notes/daily-stoic|reading notes]) <code>READING</code>
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

~wiki/inventory : Inventory : A list of personal devices
^ The [b:Inventory] is a list of devices
2 [b:ZEN] is an [l:https://www.asus.com/us/Laptops/ASUS-ZenBook-Pro-UX501VW/|Asus Zenbook UX501VW] and my primary work station.
& [b:Specifications]
- [b:Operating systems:] Windows 10, Arch Linux
- [b:Processor:] Intel Core i7 6700HQ Processor
- [b:Memory:] 16GB DDR4 2133 MHz SDRAM
- [b:Display:] 15.6}1" 16:9 (3840 x 2160) touchscreen
- [b:Graphics:] NVIDIA GeForce GTX 960M with 2G/4G GDDR5 VRAM
- [b:Storage:] 1TB HDD 5400 RPM
- [b:Weight:] 2.06 lbs
2 [b:SRV] is a [l:https://www.raspberrypi.org/products/raspberry-pi-3-model-b/|Raspberry Pi 3 Model B] used as a personal server.
& This device is set up to either be in a central location, connected to the internet and accessible via SSH, or carried on the go. When it boots up, it emits a wifi network called [b:NULLNET] so it can be SSHed into without needing to connect it to another network.
& [b:Specifications]
- [b:Operating system:] Raspbian
- [b:Processor:] Quad Core 1.2GHz Broadcom BCM2837 64bit CPU
- [b:Memory:] 1GB RAM
- [b:Storage:] 16GB Micro SD Card
2 [b:CRO] is a [l:https://www.samsung.com/us/business/products/computing/chrome-devices/chromebook-2/chromebook-2-11-6-xe500c12-k02us/|Samsung Chromebook 2] used as an on-the-go laptop.
& It is set to developer mode, and has linux installed within Chrome OS via crouton. It is often used to connect to [b:SRV].
& [b:Specifications]
- [b:Operating Systems:] Chrome OS, Ubuntu
- [b:Processor:] Intel Celeron Processor N2840 2.16GHz
- [b:Display:] 11.6" 16:9 LCD (1366 x 768)
- [b:Memory:] 4GB DDR3L RAM
- [b:Storage:] 16GB
- [b:Graphics:] Intel HD Graphics
- [b:Weight:] 2.60 lbs
2 [b:PIX] is a [l:https://www.amazon.com/dp/B0766GHWM6|Google Pixel 2] and is my primary phone.
& [b:Specifications]
- [b:Operating system:] Android 9
- [b:Processor:] Octa core (2.45 GHz, Quad core, Kryo 280 + 1.9 GHz, Quad core, Kryo 280)
- [b:Display:] 5" 16:9 (1080 x 1920) touchscreen
- [b:Memory:] 4GB RAM
- [b:Storage:] 64GB
- [b:Graphics:] Adreno 540
- [b:Weight:] 6.25 lbs

~wiki/analog-art-tools : Analog art tools : A list of tools I use for creating art
^ [b:Analog art tools] is a list of tools for creating art
2 Notebooks
- [l:https://us.moleskine.com/en/classic-notebook-black/p0460|Moleskine Classic Notebook, Soft Cover, XL (7.5 x 9.75 in), Blank, Black]
- [l:https://www.amazon.com/dp/8883704975/|Moleskine Cahier Journal, Soft Cover, Large (5 x 8.25 in), Blank, Black]
- [l:https://getrocketbook.com/collections/all-products/products/rocketbook-everlast-mini|Rocketbook Everlast Mini]
2 Pens
- [l:https://www.amazon.com/dp/B0722Y98KS|Mincho Black Fineliner Pens]
- [l:https://www.tombowusa.com/fudenosuke-brush-pen-broad-tip-black.html|Tombow Fudenosuke Brush Pen, Soft Tip, Black]
- [l:https://www.amazon.com/dp/B00006IE7L|BIC Round Stic Ballpoint Pen, Medium (1.0mm), Blue]
- [l:https://www.amazon.com/dp/B009QYH644|Pilot FriXion Pens (.7mm), Assorted Color 7-pk]
2 Pencils
- [l:https://www.amazon.com/dp/B0027IQ3MW|Derwent Graphic Pencil 3H]
- [l:https://www.amazon.com/dp/B00006IEEE|BIC Mechanical Pencil, 0.5mm]
2 Paint
- [l:https://sakuraofamerica.com/watercolors-set|Sakura Koi Water Color Field Sketch Travel Kit]

~notes/index : Notes
^ [b:Notes] is a collection of notes on various books or topics
? [s:notes]

~notes/parenting : Parenting : A collection of notes on parenting
^ [b:Parenting] is a collection of notes related to parenting
- If your child offers you a hand to hold, take it. You need to appreciate these little moments, because some day they won't want you to hold their hand anymore, and you will miss it. You may be tired of holding their hand, or the other things they ask for a million times, but do it anyway. Cherish the time you have with your child, because you never know when it is going to end. You won't notice that it's the last time you do something until after you never do it again.
- To a kid, anything can be special and fun. They have a wonderful sense of presentness, where they can find joy in whatever they are doing. As we get older, we phase ourselves out of this behavior, or it is phased out of us by societal expectations. We need to encourage this in children, and don't crush it with suble corrections and insistence on the "right" way to do things. Let them explore and enjoy things the way they perceive them. Let them live their life how they want.
- All time with your kids is created equal. What you do with it is what makes it special. There is no such thing as "quality time", just time. You choose if you find it fulfilling or not.
- Make sure you don't punish out of emotion or fear. Take a minute, and come up with a punishment that makes them a better person.
- Resist the urge to hurry. It's not really time to go, you're exactly where you - and they - need to be. Whenever possible, give them the time to do things at their own pace.
- Sometimes you just have to accept that you cannot control everything.
- Let them make their own decisions, so they go through life with that ability. Don't choose everything for them. Ask if they want to go to the park or play in the yard. Ask them what we should cook for dinner. Let them pick their clothes to wear. Don't micro-manage every decision in their lives. They already don't crontrol nearly anything in their lives. Let them control what they can.
- "You'll be amazed how incredible it is to simply be present with your children, and marvel at the fact that they exist."
- The best way to teach your children is to never be seen doing the things you tell them not to do.
- Your job is not to make them rich, or smarter than everyone else, or anything else. Your real job is to give them a childhood they don't need therapy to get over.

~notes/stoicism : Stoicism : A collection of notes on stoicism
^ [b:Stoicism] is a collection of notes related to stoicism
> "That's why the philosophers warn us not to be satisfied with mere learning, but to add practice and then training. For as time passes we forget what we learned and end up doing the opposite, and hold opinions the opposite of what we should."<br>[i:- Epictetus]

~notes/meditations : Meditations : Reading notes from Meditations by Marcus Aurelius
^ A collection of quotes and notes taken while reading [l:https://www.amazon.com/dp/B000FC1JAI|Meditations] by Marcus Aurelius
> [b:1.13:] Not to shrug off a friends resentmenteven unjustified resentment but try to put things right.
> [b:2.5:] Concentrate every minute like a Roman - like a man - on doing whats in front of you with precise and genuine seriousness, tenderly, willingly, with justice.
> [b:2.7:] Do external things distract you? Then make time for yourself to learn something worthwhile; stop letting yourself be pulled in all directions.
& This really hits home with my struggles surrounding what it is I "do". I tend to pick up a lot of different things, absorb myself in it, stress myself out, and ignore the important things around me. I need to stop letting the concepts of who I am as defined by what I do lead my life. I need to find good hobbies that don't cause all of these negetive side effects, and make sure I'm still staying present, not getting so absorbed with it.
> [b:2.11:] You could leave life right now. Let that determine what you do and say and think.
& I've been getting better about occasionally thinking this throught the day. I've been considering getting a [l:https://dailystoic.com/memento-mori/|momento mori] tattoo on my arm to serve as a constant reminder, or maybe just get a [l:https://prints.dailystoic.com/products/memento-mori|coin].
> [b:4.24:] Because most of what we say and do is not essential. If you can eliminate it, you'll have more time, and more tranquility. Ask yourself at every moment, "Is this necessary"?
> [b:5.33:] Be tolerant with others and strict with yourself.
& I've definitely flipped these two things, and I don't want to do that anymore.
> [b:6.53:] Practice really hearing what people say. Do your best to get inside their minds.
> [b:7.4:] Focus on what is said when you speak and on what results from each action. Know what the one aims at, and what the other means.
> [b:7.67:] Its quite possible to be a good man without anyone realizing it. Remember that.
> [b:10.3:] If its endurable, then endure it. Stop complaining. If its unendurable, then stop complaining.
> [b:10.16:] To stop talking about what the good man is like, and just be one.
> [b:11.16:] Learn to be indifferent to what makes no difference.
> [b:11.18 vii:] Be willing to give up thinking of this as a catastrophe - and your anger is gone.
> [b:11.18 viii:] How much more damage anger and grief do than the things that cause them.
> [b:11.18:] When you start to lose your temper, remember: Theres nothing manly about rage. Its courtesy and kindness that define a human being - and a man. Thats who possesses strength and nerves and guts, not the angry whiners.
& Anger problems are very difficult to overcome, specially if you've let it grow deep inside you, always ready to come out and strike whenever provoked. There is nothing manly or powerful about rage. It's a weakness pretending to be tough.

~notes/daily-stoic : Daily Stoic : Reading notes from Daily Stoic by Ryan Holiday
^ A collection of quotes and notes taken while reading [l:https://www.amazon.com/dp/B01HNJIJB2|The Daily Stoic] by Ryan Holiday 
> Stoic disciplines:<br><br>[b:The Discipline of Perception] (how we see and perceive the world around us)<br>[b:The Discipline of Action] (the decisions and actions we take and to what end)<br>[b:The Discipline of Will] (how we deal with the things we cannot change, attain clear and convincing judgment, and come to a true understanding of our place in the world)
> [b:Jan 1:] If we can focus on making clear what parts of our day are within our control and what parts are not, we will not only be happier, we will have a distinct advantage over other people who fail to realize they are fighting an unwinnable battle.
> [b:Jan 2:] Remember that imperative on the days you start to feel distracted, when watching television or having a snack seems like a better use of your time than reading or studying philosophy. Knowledge self-knowledge in particular is freedom.
> [b:Jan 5:] "Let all your efforts be directed to something, let it keep that end in view. Its not activity that disturbs people, but false conceptions of things that drive them mad." - SENECA, ON TRANQUILITY OF MIND, 12.5
> [b:Jan 6:] Have you taken the time to get clarity about who you are and what you stand for? Or are you too busy chasing unimportant things, mimicking the wrong influences, and following disappointing or unfulfilling or nonexistent paths?
> [b:Jan 8:] You must reclaim the ability to abstain because within it is your clarity and self-control.
> [b:Jan 10:] If you want to be steady, if you want clarity, proper judgement is the best way.
> [b:Jan 11:] Serenity and stability are results of your choices and judgment, not your environment.
> [b:Jan 13:] A wise person knows what's inside their circle of control and what is outside of it.<br>...<br>According to the Stoics, the circle of control contains just one thing: YOUR MIND.<br>...<br>You've got just one thing to manage: your choices, your will, your mind.
& It's not easy for me to recognize things as outside of my control. I struggle with trying to control everything. I've had a couple of moments recently where recognized situations where I should let go, knowing there was nothing I could do to change it. I'm going to keep working on finding more of these moments every day. 

~projects/index : Projects
^ [b:Projects] is a collection of various things I've worked on
? [s:projects]

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

~thoughts/index : Thoughts
^ [b:Thoughts] is a collection of written ideas and concepts
? [s:thoughts]

~thoughts/social-media-update : Social Media Update : January 23, 2020
2 [p:NAME]
_ [t:DESC] ([p:DESC])
& I wrote a while back about [l:thoughts/social-media|social media] and the negative effect it's had on me. My reasons were around not chasing validation of others, and spending too much time obsessing about it.
& I've decided to rejoin the fediverse over at [l:https://tiny.tilde.website/@0xdstn]. I realized that anything negative coming out of the usage of any digital service is really just caused by my own state of mind. I let it consume me. I wasn't viewing it in the right way.
& Instead of using it how I always have, I'm going to make a few changes around intent and perspective.
& I will mostly be using it as a way to consume, not as a way of making myself heard. Yes I will jump into conversations, and probably post about things I've made, but I'm there to get inspired by what others are doing.
& I will also not have a Mastodon app installed on my phone and will only log on occasionally, not constantly checking my feed like I previously used to. I need to also allow myself to miss things in the feed, if I get really behind on posts. I don't need to sit and sift through my home feed for hours.
& I had been viewing social media as a problem, when really it was just how I was processing it internally.

~thoughts/social-media : Social Media : August 13, 2019
2 [p:NAME]
_ [t:DESC] ([p:DESC])
& Over the last year or so, I've noticed a pattern with myself, related to my social media usage.
& When I say social media, I'm mostly referring to Twitter and Mastodon. I actually don't seem to have much of a problem with Instagram or Facebook.
& I tend to get addicted to microblogging services. This causes me to be constantly absorbed in my phone, ignoring everyone and everything around me. I find it hard to go a few minutes without checking if I'm not busy doing something else that requires my attention.
& I also tend to seek validation through likes. This is an obsession a lot of us have, and I don't feel it's very healthy behavior. When I was young I would create things for myself, for fun. Now it seems I am only in it for the validation. When I allow myself to just create and enjoy the fact that I made something, it's much more fulfilling.
& When I post on these platforms, I often feel as though I'm shouting into the void. This is particularly bad on Twitter. When I post, is anyone <em>really</em> reading it? If I don't get a lot of feedback, it feels like it was for no reason and silly to even post it.
& I've thought a lot about the audience I'm trying to reach with accounts like these, and I don't really have one. I don't need anyone to see anything I would post on there. It doesn't improve my quality of life. I am much better off hanging out in little places on the internet such as [l:http://tilde.town|tilde.town] and using the chat and [l:projects/tilde-social|Tilde Social] functionality to connect with others.
& I'm going to do my best to stay away from large social media platforms from now on. It keeps my head clear and keeps me present, and that's what I really need.

~thoughts/dark-forest : Dark forest : June 6, 2019
2 [p:NAME]
_ [t:DESC] ([p:DESC])
& I just read through a two part article about [l:https://onezero.medium.com/the-dark-forest-theory-of-the-internet-7dc3e68a7cb1|The Dark Forest Theory of the Internet], which really resonated with me.
& In my original days of using the internet over a decade ago, I used to post anything I wanted, without filter, under my own name. I didn't care about the likes (originaly this wasn't even a concept that existed) or the fact that I might be shouting into the void. I just shared because that is what the platform was for. That is what I wanted to do - share.
& I have struggled with the last 5 or so years with my online identity. I have created countless pseudonyms, and even paraded as myself with my real name. I have gone in and out of mindsets where I feel privacy is the aboslute most important thing to be concerned with online, and being completely open.
& I'm sure a lot of this is caused by the fact that I became an adult on the internet, and who I am now is not who I was then. A lot has changed, and most of all my opinions on everything have changed.
& I feel like running around on the internet under a pseudonym doesn't provide much. Privacy isn't about hiding who I am, it's about being selective about what I share. I don't need to blast out photos of my familiy and my every whereabouts publicly, that is a good use for a dark forest such as my private Facebook or Instagram.
& I have been fighting against technology instead of allowing it to make my life better. Allowing it to make me more connected to the outside world. This connectivity to other humans is the true power of the internet, once you push through all of the noise. The excessive bits of the internet are new, the conversation and personal connections have always been there.
& I want to be more open, in a careful way, online. The things that I have added to this site are really a true representation of my thoughts and interests. I don't need to hide those behind a moniker.
& My name is [l:wiki/about|Dustin] and this is my personal wiki for sharing my life.

~thoughts/to-log-or-not-to-log : To log or not to log : July 19, 2019
2 [p:NAME]
_ [t:DESC] ([p:DESC])
& I have spent a lot of time attempting to digitally log various things over the years. Majority of this has been health related - steps, calories, water consumption, walks/runs, meditation, etc.
& I started looking into tracking other things, such as how I spend my time. I tried doing this for just a single day, and it felt very daunting on top of all of the other things I have going on in my life.
& While I feel these kind of statistics can be useful, I needed to take a step back and look at how I would be using them. In the end, I decided I was trying to log for the sake of logging, since other people are doing it, and didn't have any real reason to be doing so, or any plan to utilize the data.
& This was a good realization for me. I have been tracking many things, and I feel as though it's just a time consuming task for me, and I will never use the data.
& Two of the things I am going to stop tracking is water and food. If I'm being mindful of how/what I'm eating, and whether or not I've had enough water in the day, the numbers don't really matter. I can tell when I'm eating poorly, or if I'm trying to eat more than I should. I can also tell if I haven't had enough water and should drink more. These ones specifically are really a challenge to be mindful about what I put into my body.
& The only things I have any plans of tracking is sleep and running. I can actually use this information for something. If I am sleeping poorly, I can try to figure out what exactly is the cause, and try to remediate it. As for running, I enjoy this and would like to increase my speed/distance, so this is something I am going to be tracking and working on.
& I want to work with technology to make my life simple and mindful, not complicate it for no reason.
& I understand that tracking data like this is helpful for others, but it just isn't useful for me, personally.

~thoughts/write-something : Write something : June 16, 2018
2 [p:NAME]
_ [t:DESC] ([p:DESC])
& I was listening to a [l:https://open.spotify.com/user/spotify/playlist/37i9dQZF1DX6ziVCJnEm59|playlist on Spotify] the other day, and Bees by [l:https://open.spotify.com/track/21vNMGKtXBA2a8PaVdIgrM|The Ballroom Thieves] came on. This song contains a quote from Benjamin Franklin, which resonated with me:
> Either write something worth reading or do something worth writing.
& I've considered setting up a blog many times, but have never pulled the trigger. Maybe I just felt I didn't have anything worthwhile to write. Maybe the daunting task of creating a design got in the way. Maybe I was afraid of what others would think about what I wrote, or maybe that nobody would read it.
& None of these are good reasons not to write. While I don't have much experience writing, it is something I am interested in.
& The above quote inspired me to get this blog set up. I may not be able to do much worth writing about, but I can write something worth reading, or at least I will try.

~devnull/index : /dev/null
^ [b:/dev/null] is a list of pages that are not yet complete
? [s:devnull]

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
