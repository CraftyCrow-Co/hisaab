# Hisaab — The Guide

*Ten minutes to read. After that, the sheet explains itself.*

The first time, read it top to bottom. Each section builds on the one before. Coming back for one thing? Jump to it. Every section after the basics starts with the little you need to know.

---

## 1. What this is

Hisaab shows you where your money stands. It is not a budget. Nobody here will tell you to stop buying chai.

You write money down as it moves: in, out, and expected. The sheet turns those rows into answers to two questions:

**Do I have enough right now? Is enough coming in on time?**

Most money worry, at home or in a business, comes from not knowing one of these. You do the writing. The sheet does the maths, remembers what's due, and warns you early.

---

## 2. Make it yours (five minutes, once)

1. Open the link you were sent. Google shows one button, **Make a copy**. Click it. The sheet is now yours, in your own Google Drive. Nothing you type leaves it.
2. On the **Start Here** tab, click the big button. (The **Actions** menu has the same thing: **Set up this copy**.) It takes two clicks, once: the first gives permission, the second runs the setup. Google asks for two things: to work with **this spreadsheet only**, and to run when you're not using it. The second is what lets repeating entries appear by themselves. It cannot see anything else in your Drive. If a screen says the app isn't verified, that's Google's standard message for any sheet with its own code. Click **Advanced → Continue**. Don't skip this step. Without it the sheet looks fine but does nothing on its own. When it works, the warning above the button changes to **✓ All set up!**
3. Enter what you have today. One row for each place your money sits: today's date, the amount as a plus, the account's name in **To** (`bank/idfc`, `bank/kotak`, `cash`), and Mode **Opening Balance**. That Mode keeps it out of your income reports. The balance picks it up by itself.
4. Fill in three settings on the same tab: your **income goal**, your **months to survive** (how long you could manage with nothing coming in; aim for at least 6), and the month your **financial year** starts. That's all it asks. The sheet works out everything else from your rows. You can change these any time.
5. Only five tabs show at first: Start Here, Dashboard, Log, Recurring and Auto-entries. The rest are hidden, not missing, and they keep calculating. When you want one, tick it in the **More reports** list on Start Here.

**Keep one sheet. Don't start a new file each April.** The financial-year setting handles the year inside this file, so your tax view is right and your history stays whole. Many of the useful numbers need that history: your six-month average, months of cover, a client who went from a fifth of your income to a third. Start a new file and all of them start again from zero. Old accounting software made people close the books every year. A sheet doesn't need to.

---

## 3. Your first row

Each money movement is one row: Date, Amount, From, To, and a description if you like.

| Date | Amount | From | To | Description |
|---|---|---|---|---|
| 05-Aug | −450 | bank/hdfc | swiggy | dinner |
| 07-Aug | +60,000 | acme | bank/hdfc | August retainer |

There are two habits to learn, and that's the whole skill.

**The sign shows which way your money went.** Minus means it left you. Plus means it came to you. The colour matches: green in, red out.

**From and To are where the money came from and where it went,** in your own words.

Why both? They answer different questions. From → To says who paid whom. The sign says whether your money went up or down, so you never have to tell the sheet which names are "you". Ravi gives you ₹5,000: `ravi → cash, +5,000`. You pay it back next week: `cash → ravi, −5,000`. Same two names, opposite signs.

Use `/` to group names: `bank/idfc`, `bank/kotak`, `hr/payroll`, `ops/purchase`. Later, `bank` totals all of them and `bank/idfc` totals one. Extra detail costs nothing. Use the words you'd say out loud.

**Read a name like an address: left to right, big to small.**

`india / maharashtra / nashik`

Ask for **india** and you get everything in India. Ask for **india/maharashtra** and you get that state. Ask for **maharashtra** on its own and this name won't match, because it starts with india. (A name like `maharashtra/nashik` would match `maharashtra`, because that's its first word.)

**A search only matches names that start with the word.** It never matches names that just contain it. So `kitchen` totals `kitchen/gas` and `kitchen/oven`, but not `repairs/kitchen`. That one starts with repairs.

**So the first word decides what you can total. Choose it on purpose.**

- `kitchen/repairs` → you can total everything for the kitchen
- `repairs/kitchen` → you can total all repairs, everywhere

Want both? Add a tag. That's section 9.

Two levels are nearly always enough. At three, people stop recording money and start building a filing system.

One rule always holds: **same thing, same spelling.** "Acme" and "Acme Pvt Ltd" are two different names to the sheet, and every total gets split between them. The dropdowns remember names you've used. Pick from them and this never happens.

**Moving your own money?** Bank to bank, or bank to cash, isn't earning or spending. It's one row: the amount as a minus, From the account it left, To the account it reached, and Purpose **Self**. Purpose Self stops the reports counting it as income. Mode is still yours to fill in however it moved.

That's all you need to know. The sheet fully works from here. Everything below is optional, for when you want it.

---

## 4. Watch it react

Every row has a **Balance**: your total money across all accounts, as of that row. No bank shows you this. Each bank shows only its own part.

The **Timeline** tab shows the same thing as one list: every movement, past and future, in date order, with the balance beside it. You don't type here. You type in Log and Recurring, and Timeline shows the result.

Give a row a future date and look at the balance beside it. That's how much money you'll have on that day if things go as planned. That is most of what "forecasting" means, and you already have it.

---

## 5. Money that repeats

Rent, salaries, EMIs, subscriptions, a monthly retainer. Write each one **once**, in the **Recurring** tab, instead of twelve times a year in Log.

A rule reads like a sentence: *−25,000 · bank → landlord · Monthly · Day 5.* The dropdowns cover most patterns: Monthly, Weekly, Every 2 weeks, Yearly; on Day 5, the last day, the third Friday; or both the 1st and the 15th. **End**: leave it blank for "never", type a number for "this many times", or a date for "stop then".

From that one row, the sheet writes every future payment into the **Auto-entries** tab, and from there into your Timeline. When a date passes, that payment counts as done. You don't need to tick anything. If one month was different, say the date moved or you paid another way, edit that one row in Auto-entries. The sheet never overwrites a row you've edited.

Each rule also shows:

- **Monthly bite**: what it costs per month. ₹18,000 a year of insurance is ₹1,500 a month. With everything in ₹ per month, you can compare anything with anything.
- **Paid / Remaining / Next date**: for an EMI, a bar that fills up. How many payments are left, how much is left, and when it ends.
- **Importance**: Essential, Nice-to-have or Can drop. Set it once. In a tight month you already know what to cut first, and how much a month it saves.

To see what your commitments add up to, look at **Safety money** on the Dashboard. Set months to survive to 12, and it's a year of what goes out whether you work or not. Most people cancel something after seeing that number.

---

## 6. Tomorrow, already visible

A row with a future date and a tick in **Is Planned** is something you expect, not something that has happened. Planned rows never change your balance, because **money isn't real until it arrives**. They still show up in the future view, on their date. Two dates are kept: **Planned on** is when it was due, and Date is when it actually happens. The gap between them is how the sheet learns who pays late.

Expecting ₹1 L from a client in August? Add one planned row. Thinking of buying a ₹2 L machine in October? Add one planned row. The months ahead update straight away. **To try out a decision, add a planned row and look.** Delete it and everything goes back. You don't need a separate "what if" tool. The sheet already is one.

**The tick has a second use.** When two rows are linked (section 14), it marks which side isn't a real payment. It's always exactly one side:

- **One thing, paid in parts**: a ₹5 L machine, paid in three payments. The **plan** is ticked; the payments are real.
- **One bill, several jobs**: a ₹10,000 bill covering two jobs. The **bill** is real; the **parts** are ticked.

The rule is the same in both: **whatever isn't a payment on its own gets the tick.** A plan hasn't been paid yet. A part was paid as part of something bigger. Neither moved money by itself, so neither changes your balance, and the money is counted once. *(Section 14 walks through it.)*

The **Monthly Snapshot**, at the bottom of the Dashboard, shows last month, this month and the next twelve: incoming, outgoing, net, balance, and a small bar for each month. Next to each month is **Minimum Needed**: what that month will cost, or a normal month's cost if that's more. The bar is green when the balance covers it, amber when it covers at least half, and red when it covers less. You see a tight month well before it arrives, while there's still time to act. A **Last year** column lets you compare this October with last October.

This is a forecast, not a budget. A budget is what you plan to spend. A forecast is what's actually coming. Most people run on gut feel and get surprised, so start by seeing what's coming. Limits (section 11) are easy to add once you can see.

---

## 7. The numbers that watch you

The Dashboard shows six numbers, each with a sentence under it:

| Number | What it tells you |
|---|---|
| **In Hand** | what you have: all accounts, one number, now |
| **Months of Cover** | how many months In Hand would last with nothing coming in |
| **Breakeven** | what the next 30 days need: *"Needed for next 30 days. ₹1.6 L coming in. ₹3.0 L to go."* |
| **Avg Expense** | what a normal month costs, from your last six months |
| **Owed to you** | what's overdue: *"₹2.0 L expected but overdue from 1 source."* |
| **Used to grow** | how much of what went out was invested in something lasting |

Three of these are worth a closer look.

**Months of Cover** is In Hand divided by what usually goes out in a month. Its sentence changes with the number. Under three: *"Under 3 months. One bad month and you're borrowing."* Over six: *"Solid. A bad quarter stays a bad quarter."* Over twelve, it says the extra is free to invest, and it says so if you haven't invested any of it. This is the honest answer to "can I afford it?", whether it's a machine, a new hire or a holiday. What matters isn't what's in the bank. It's what's left once the next few months are safe.

**Breakeven** adds your fixed payments to your usual everyday spending. It never counts money you're only expecting. A cheque in the post doesn't pay bills. The next 30 days always keep coming, so the question is never "am I done?". It's "can I keep going?"

**Used to grow** shows the rupees, and the percentage once it's 20% or more: *"Only ₹1.4 L went toward growing your wealth."* It goes up as soon as you invest.

**When a big payment arrives**, the sheet tells you how long it will last: *"₹5.2 L landed in the last month! That's 3.4 months of running costs covered."* This matters in project work, where costs come every month but income comes in lumps. The line only appears when a payment is big enough to matter.

Below the numbers are **Alerts**. There are never more than three, and they're always about your money: *"⚠ Your balance drops below your safety money (₹14.7 L) in Jul 2026."* When nothing is wrong, it says so: *"✅ Nothing needs your attention right now."* When a month ahead looks tight, one line tells you what cutting back would buy: *"Every ₹10,000 a month you cut buys you 2 more months of runway."*

One more habit worth having: compare the **Last year** column in the Snapshot with this year. If your spending is growing faster than your earning, that's the most dangerous pattern in a small business, and you can see it here months before it hurts.

---

## 8. Who owes you

> *Came straight here? You need one habit: when someone promises you money, enter it as a **planned** row on the date it's due (section 6). The rest happens by itself.*

When a promised payment's date passes and the money hasn't arrived, it appears on the **Chase List**: who, how much, and how many days late. Once there's history, the **Avg Waiting Time** column shows how late that person usually pays. Knowing Sharma usually pays 12 days late changes how you plan.

There are no scores to keep up. You probably already know who pays late. The list makes sure you don't forget. It's at the top of the **Cash Flow** tab because, for a business, it's the most valuable list in the sheet: **money you've already earned but not collected.** Collecting it is easier than finding a new customer.

When the money arrives, put the real date on that same row and untick Is Planned. The row becomes a real payment and leaves the list. The due date stays in Planned on, so the sheet remembers how late it was. Paid in part? Add what came as its own row and reduce the planned row to what's still due. Or link the parts to it and let the sheet keep track (section 14). Never coming? Delete the row.

Next to the Chase List is **To Pay**: what you owe, and when. Below them: who pays you and where your money goes, side by side, each with its share; every tag's money in and out; and a dated list of everything ahead. Timing matters. The problem is usually one week when several payments land together, not the whole month.

If one client pays most of your income, **Top 3 Clients** tells you what losing them would mean. Either *"If foodapp stops paying, your other income still covers your usual costs,"* or how much you'd fall short each month and how long your money would last. Then how it's changing: *"foodapp now makes up 48% of income — up from 28% over the last 12 months."*

---

## 9. Tags — words that count

> *Came straight here? You need two things: amounts have a sign (+ in, − out), and the dropdowns remember your words.*

A tag is a word you put on rows so you can total them.

Write `sharma-reception` on every row for that order: the advance (+), the ingredients (−), the event staff (−). The sheet adds them up for you. No formula needed. The sign decides whether a row adds or subtracts. The word decides which total it goes into.

**Three columns describe every rupee. Each has one job.**

| | Think of it as | Rule |
|---|---|---|
| **From / To** | folders | where the money is. One place each |
| **Count Under** | sticky notes | as many as you like, or none |
| **Purpose** | a stamp | exactly one, always |

Folders say where the money is. Sticky notes group rows across folders. The stamp is the only one that adds up to 100%. That's section 12.

**Each tag works like a small business of its own**: its own money in, its own money out, its own result. Make one for anything you want to judge: a line of work (`tiffins`, `events`), a client, one big order, a channel (`instagram`), an experiment (`diwali-orders`). A row can carry several tags. Festive boxes can be `tiffins, packaging`, and the full amount counts in both.

Did ₹60 really go to one thing and ₹40 to another? Write two rows. Then the numbers are true, not guessed.

Two rules keep the totals honest:

1. **Tag both sides.** The job's income and the job's costs. If you tag only the income, every job looks great.
2. **Only tag money you can trace to the job.** The paneer that went into the Sharma reception: tag it. Rent: don't. You can't say which job rent went into. It keeps the whole shop running. (Sections 12 and 13 cover where rent belongs.)

Start with one kind of tag, such as your lines of work. Add other kinds once those prove useful. Five kinds of tag is powerful. Five kinds on day one is confusing.

---

## 10. Watchlist — pick a thing, see everything

On the **Watchlist** tab, enter any name, tag or payment mode, and its row fills in: money in, money out, net, its money life, and a trend line. Put names in the **For** column and tags in the **Count Under** column. Want to compare? Add another row.

"How is this actually doing?" Rent this year, chai this month, what Sharma is really worth to you: one row each, no report to build.

For a job, look at **Money life**: *Jun 26 ▸ Aug 26 · 3 mths · 5 in · 9 out*. When money started moving, when it stopped, how many months that was, and how many payments went each way. Five milestone payments and nine supplier bills is a very different job from one and one.

It's called money life, not project life, because the sheet only knows when money moved. That's often different from when the work happened. A two-month job can tie up your cash for five months: advance in June, costs through July, final payment in October. In project work, that gap is what hurts. Leave the period blank to see the whole life. Set dates to see just that window.

This is also where the slash pays off. Because you named things `staff/salary` and `staff/wages`, the word `staff` totals everyone you pay. You never set up departments. Your names already made them.

---

## 11. Limits & goals

> *A **limit** is a ceiling: "chai under ₹500 a week." A **goal** is a floor: "₹30 L from events this year." Both go in one small table.*

On the **Limits & Goals** tab, choose a *For* (any name or tag), an amount, and a period: weekly, monthly, yearly, or a rolling window like "last 30 days". The sheet fills a bar and gives a verdict. A broken limit reads **Over by 1.7x**. A goal reads **Behind**, **Almost there** or **Reached**. The bar fills green, and anything over a limit shows red. The colour is the alert. There are no pop-ups.

Break the same limit three periods in a row and the sheet suggests a better number:

> *"Over 3 in a row. ₹900 is more realistic."*

It works this out from your own spending, weighted towards recent weeks. If you break a budget every month, the problem isn't discipline. **The number is wrong.** Fix the number, and save your discipline for the limits that matter.

---

## 12. Purpose — what is this money for?

> *Came straight here? Purpose is one dropdown. Every row picks one of seven. Set it once for a repeating rule, and per row for one-offs. It powers section 13.*

Every rupee is doing one of seven things:

- **Earned**: money from work, or a return on money. A client's payment, interest, a dividend.
- **Specific cost**: spent on one particular job. Materials, site labour, that job's transport. You can say which job it went into.
- **Running cost**: keeps the business open. Rent, salaries, internet, software. You pay it whether you sell anything or not.
- **Invested**: put somewhere, not spent. A machine, an FD, a SIP. It's still yours. When it comes back, only the gain is Earned. The amount you put in, coming back, is Invested again.
- **Loan**: borrowed or repaid. When a loan arrives, it's a plus with Purpose Loan, because **borrowed money isn't income**, however good the month looks.
- **Took home**: money moving between the business and you. Minus is money you took home. Plus is money you put back in a bad month. (Only tracking personal money? Leave this one out.)
- **Self**: your own money moving between your own accounts (section 3). Not earned, not spent.

Not sure if a cost is Running or Specific? Ask: **would I still pay this if I did no work this month?** Yes means Running cost. No means Specific cost.

The key difference: **Running cost and Specific cost make you poorer. Invested, Loan and Took home only move money**: into something you own, against a debt, or into your personal life. Not every minus is a cost.

One more: GST you've collected sits in your account but was never yours. It's like a short loan from the government. Mark it that way and filing day won't surprise you.

It takes thirty seconds a day. Section 13 shows what it gives you back.

---

## 13. Where the profit went

> *Came straight here? You need three things: signs (+ in, − out), tags (words that total rows, section 9), and Purpose (what each rupee was for, section 12).*

Most owners have asked this: **"We made a profit this year. So where's the money?"** Your accountant answers next September, about last year. The **Real Picture** tab answers today. It has three parts. Read them top to bottom.

**Part one: what each line of work really earns.**

A dosa sells for ₹50. The batter cost ₹20. So that dosa adds **₹30 to the shop's common pot**. That's what a line of work really earns: its income minus the costs that went into that work. The sheet works it out from your tags:

```
tiffins    in 4,20,000 · work costs 2,52,000  →  adds 1,68,000
events     in 5,00,000 · work costs 4,35,000  →  adds    65,000
```

The weddings get the attention. The daily tiffins pay the rent, more than twice over. Now you know what to sell more of, and what to reprice.

**Part two: the pot pays for the shop.**

Every line of work adds what it earns to one pot. The running costs come out of that pot, once, and nowhere else:

```
added from all work          2,33,000
running costs
  salaries                   1,08,000
  rent                         75,000
  utilities                    24,000
  everything else              21,000
                            ─────────
left                            5,000
```

The running costs aren't attached to any line of work, and that's the point. What's left in the pot is profit. Here it's five thousand rupees: barely above zero.

The most important rule: **never split rent across your lines of work to judge them.** If you do, a perfectly good line can look like it loses money. You drop it. The rent doesn't go down. It just lands on the lines you kept, and now they look bad too. Judge each line by what it adds to the pot. If it adds anything at all, dropping it makes the pot smaller. A line only truly loses money when its own work costs are more than its own income.

When the pot doesn't cover the running costs, divide one by the other: *total added ÷ running costs*. If it's low because the lines of work add little, look at pricing and what you sell. If it's low because running costs grew, look at your overheads. The running-costs list shows where they went.

**Part three: profit vs cash.**

The pot says ₹5,000 was left, yet the bank balance fell by nearly two lakh. Three things take cash **without being costs**, and your Purpose column has been recording them:

```
Invested     −1,35,000    the oven, the SIP
Loan           −45,000    EMIs paid back
Took home      −15,000    taken home, net
```

The profit was real. The cash went to these three places. The first block on the tab shows the whole story in nine lines, from what you earned to what your bank actually did: **Earned · less work costs · Contribution · Running cost · Profit · Invested · Loan · Took home · Change in cash**. *"You took ₹45,000 home this quarter, and put ₹30,000 back in a slow month."* Most owners have never seen that about themselves. This page shows it.

The tab also checks itself. It tells you how much *"of income isn't on any stream"*, and lists those rows under **Missing Counts**. Income with no tag doesn't count towards any line of work, so some line looks smaller than it is. Tag those rows and the numbers settle. (Tagging a running cost does no harm, because this only counts Specific-cost rows. It just gives you an extra view, like rent by location or salaries by branch.)

Judge an order over its whole life, not month by month. A wedding's advance arrives in May, the ingredient bills in June, the final payment in July. June alone looks terrible and July looks amazing. The tag's total over the whole order is the real number.

---

## 14. Linked payments

Some things take more than one row to describe. One column handles both cases.

**One thing, paid in parts.** A ₹5 L machine paid ₹1 L + ₹2 L + ₹2 L, whenever you had the cash. An invoice paid to you in three parts. A project billed by milestone, on no fixed schedule. Enter the whole amount once as a planned row. Link each real payment to it as it happens. The sheet keeps count: *paid ₹3 L, ₹2 L left*. This works for money going out and money coming in.

**One payment, several purposes.** A ₹10,000 hardware bill: ₹6,000 for the kitchen job and ₹4,000 for the wardrobe. Shops often give you one bill for two jobs. The simplest answer, and usually the right one: **write two rows and tag each.** Same totals, nothing new to learn.

Want one row that matches the ₹10,000 line on your bank statement? Keep the bill as one real row, then add the parts below it. Each part links to the bill and has **Is Planned** ticked, so the money is only counted once. Two parts or five, or a dinner split four ways, every part links to the same bill. Parts never link to each other, so more parts don't make it harder.

The same **Is Planned** tick from section 6 tells the two cases apart. In *paid in parts*, the **main row** is ticked, because it hasn't happened yet. In *several purposes*, the **parts** are ticked, because the money already left once. In every link, exactly one side is ticked.

Never put a share or a percentage in a tag. A tag always counts the full row. If it's half and half, write two rows.

As a rule, **only link when the money isn't new**: when a payment pays off something already written down. Everyday rows don't need a link. EMIs don't either, because Recurring already tracks what's paid and what's left.

---

## 15. When life happens

Missed a week? A month? Add one rough row, like *−40,000 · bank → misc · "catching up June"*, and you're up to date. **Roughly right is better than missing.** A rough sheet still answers the two questions. An abandoned one answers nothing. There are no streaks to keep here. The sheet waits for you.

Not sure the numbers are right? Do a check. On the **Wealth** tab, under **Checks**, add today's date and what you actually have: every account and every holding, minus what you owe. The sheet shows the difference: *sheet says ₹4.2 L · you say ₹4.5 L · off by ₹25,000.* That gap is whatever's missing: a bounced EMI, a forgotten sale, a typo. One number catches every kind of mistake.

A bounced EMI is quick to fix. The sheet marked it paid, but the money never left. Tick Is Planned again (section 6) and move the date forward. It goes back to "coming", and the balance corrects itself.

Don't worry about small mistakes. This sheet helps you rank things: the kitchen job over the wardrobe, cut this before that. A gap like ₹2 L against ₹40,000 still shows clearly with a few rows wrong. You'll notice a wrong number long before an audit would.

---

## 16. Small habits that keep it clean

- **Same word, every time.** Pick from the dropdowns. Don't retype a name from memory.
- **Tag both sides.** Income-only tags look great. Cost-only tags look terrible. A number that looks too good usually has rows missing.
- **Clear the untagged-income line** now and then. Untagged income makes every line of work look smaller than it is.
- **Type on the teal tabs:** Log, Recurring, Watchlist, and Limits & Goals. Blue tabs are reports, and grey tabs are filled by the sheet. (Two exceptions: edit a single month in Auto-entries when it was different, and type values and checks on Wealth.)
- **A number looks wrong?** Check in this order: do a check on Wealth, look for missing rows, check spellings. It's almost always one of these.

---

## 17. Questions people ask

**Whose data is this?** Yours. It's a Google Sheet in your Drive. No account with us, no server. Nothing leaves the file.

**Do I need to know accounting?** No. If you can say "money went from here to there", you can use it. The sheet handles the accounting.

**One person? A family? Three businesses?** All in one sheet. Start names with whose money it is: `personal/…`, `shop/…`, `mom/…`. Look at any one of them, or all together. (Starter rows for each of these come with this guide. Pick yours, type ten rows, and you're running.)

**Does this replace my CA?** No. Your CA files your taxes. This makes you the informed one in that meeting. They tell you what happened last year. This helps you decide what to do this month.

**Do I get updates?** Nobody can change your copy from outside. That protects your privacy. New versions are announced, and moving means copying your rows across. You'll be shown how.

**I entered something wrong.** Fix it. Tags, words and purposes are your own interpretation, so change them whenever you like. Keep the facts true: date, amount, who paid whom. Everything else can always be fixed.

---

## 18. Where to next

Two more pages, for once you've used the sheet for a while.

**Little things you can already do** — https://hisaab.craftycrow.co/little-things.html
Useful things the sheet already does that are easy to miss: naming tricks, date shortcuts, and Google Sheets features you already have.

**Money that grows** — https://hisaab.craftycrow.co/money-that-grows.html
What you own and what you owe, in the same four columns. Investments, debt, and the one number that shows where you really stand.

---

*How you'll know it's working: fewer surprises. A payment runs late, and you already knew on Tuesday. A "profitable" month doesn't confuse you, because you know where the cash went.*

**You know what's in the bank. This tells you what it means.**
