# Hisaab — The Guide

*Ten minutes to read. After that, the sheet does the explaining.*

Read top to bottom the first time — each section quietly builds on the one before it, and by the end nothing should feel complicated. Coming back for one thing? Jump straight to it — every section past the basics opens with the little it needs.

---

## 1. What this is

Hisaab is a mirror for your money. Not a budget — nobody here will tell you to stop buying chai.

You write money down as it moves: in, out, expected. The sheet turns those lines into answers to the only two questions that matter:

**Do I have enough right now? Is enough coming in on time?**

Most money stress — in a home or a business — is one of these two questions, unanswered. You do the writing. The sheet does the math, the remembering, and the warning.

---

## 2. Make it yours (five minutes, once)

1. Open the link → **File → Make a copy**. It's now your file, in your Google Drive. Nothing you type ever leaves it.
2. It arrives with sample rows so no screen is blank. Poke them, change a number, watch things move — then delete them and begin yours.
3. Tell it what you have today. One row per place money sits: today's date, the amount as a plus, the account's name in **To** (`bank/idfc`, `bank/kotak`, `cash`), and Mode = **Opening Balance**. That label keeps it out of your income reports; the balance picks it up on its own.
4. Four settings, one tab: your **income goal**, your **cushion** (how many months of expenses to keep safe — 6 is good), how far ahead to look, and how many past months to average. Don't overthink these. Change them any time.

---

## 3. Your first row

A money event is one line. Date, Amount, From, To — a description if you feel like it.

| Date | Amount | From | To | Description |
|---|---|---|---|---|
| 05-Aug | −450 | bank/hdfc | swiggy | dinner |
| 07-Aug | +60,000 | acme | bank/hdfc | August retainer |

Two habits, and they are the whole skill:

**The sign is the direction of your money.** Minus — it left you. Plus — it came to you. The colour says it back: green in, red out.

**From and To are the two ends of the movement,** in your own words.

Why both? They answer different questions. From → To says *who to whom*. The sign says *did my money grow or shrink* — without you ever teaching the sheet which names are "you". Anjuman hands you ₹5,000: `anjuman → cash, +5,000`. You return it next week: `cash → anjuman, −5,000`. Same two names, opposite signs, everything clear.

Use `/` when a name has family: `bank/idfc`, `bank/kotak`, `hr/payroll`, `ops/purchase`. Later, "bank" totals all of them and "bank/idfc" totals one. Detail costs nothing — use words you'd say aloud.

One rule that never bends: **same thing, same spelling.** "Acme" and "Acme Pvt Ltd" become two strangers, and every total splits between them. The dropdowns remember your words — pick from them, and the problem never starts.

**Moving your own money?** Bank to bank, bank to cash — that's not earning or spending, just your money changing pockets. Enter it as a pair: minus out of one, plus into the other, Mode: **Self**. Your total doesn't move, and the reports know not to call it income.

That's everything you *must* know. The sheet is fully working from here. Everything below is optional power, added when you want it.

---

## 4. Watch it react

Next to every row, **Balance** — your total money, across every account, as of that line. No bank shows you this number. Each shows its own slice; Hisaab shows the whole.

The **Timeline** tab is the same story laid flat: every movement, past and future, in date order, balance running alongside. Look, don't type — entries live in Log and Repeats; Timeline only shows.

Now the quiet trick: give a row a *future* date and read the balance beside it. That's your money on that day, if today's plans hold. Type a date, see your future — that is most of what "forecasting" means, and you already have it.

---

## 5. Money that repeats

Rent. Salaries. EMIs. Subscriptions. The retainer that arrives every month. Write each **once**, in **Repeats** — not twelve times a year in Log.

A rule reads like a sentence you'd say: *−25,000 · bank → landlord · Monthly · Day 5.* Plain dropdowns cover every pattern — Monthly, Weekly, Every 2 weeks, Yearly; on Day 5, Last day, Third Fri; both 1st *and* 15th if that's how a payment runs. **End**: leave it blank for "never", type a number for "that many times", a date for "stop then".

From that one line, the sheet writes every future occurrence into your timeline by itself. When a date passes, the row becomes real by itself — nothing to tick. One month was different — date slipped, paid by another mode? Edit that single row. Your edits are respected; the machine never overwrites a row you've touched.

Each rule also reports back:

- **Monthly bite** — what it really costs per month. An ₹18,000 yearly insurance is ₹1,500 a month; seeing everything in ₹/month lets anything be compared with anything.
- **Paid / Remaining / Next date** — for an EMI, a bar slowly filling. Payments left, amount left, end in sight.
- **Importance** — Essential, Nice-to-have, Can drop. Set once. On a tight day, the sheet already knows what to cut first — and how much per month comes back.

And one number worth a long look: your recurring outflows added up for the year. *"You owe ₹14L this year no matter what happens."* People cancel subscriptions on that sentence alone.

---

## 6. Tomorrow, already visible

A row with a future date and a tick in **Planned** is a hope, not a fact. Planned rows never touch your balance — **money isn't real until it lands** — but they appear in the future view, dated, waiting. Two dates ride along: **Planned on** holds when it was *due*; Date holds when it actually happens. The gap between them is how the sheet learns who runs late.

Expecting ₹1L from a client in August? One planned row. Considering a ₹2L machine in October? One planned row. The months ahead redraw instantly. **To try out any future, add a planned row and look.** Delete it, and the future goes back. There is no separate "simulator" — the sheet is the simulator.

**The tick has a second job.** When two rows are linked (section 14), it marks which side is the ghost — and it's always exactly one side:

- **One thing, paid in pieces** — a ₹5L machine, three payments. The **plan** is ticked; the payments are real.
- **One bill, many jobs** — a ₹10,000 bill covering two jobs. The **bill** is real; the **pieces** are ticked.

The rule underneath is the one you already know: **whatever isn't a payment of its own gets the tick.** A plan hasn't been paid yet. A piece was paid as part of something bigger. Neither moved money by itself, so neither touches your balance — and the money counts exactly once. *(Worked through in section 14.)*

The **Monthly Snapshot** shows last month, this month, and the next twelve: in, out, net, balance, and a small bar per month. The bar's colour deepens as a month sinks toward your cushion — so your scariest month is visible long before it arrives, while there's still time to do something about it.

A word on order: this is a *forecast*, not a budget. A budget is what you intend; a forecast is what's coming. Most of us run on gut feel and surprises — so see what's coming first. Discipline (section 11) is easy to add once you can see.

---

## 7. The numbers that watch you

The Dashboard reduces everything to a row of answers:

| Number | In one breath |
|---|---|
| **In Hand** | what you have — all accounts, one number, now |
| **Inflow** | what's coming — next 30 days, from Repeats. Hopes show on their own line beside it, never added in |
| **Outflow** | what's going — next 30 days, already booked |
| **Breakeven** | what you need — *"You need ₹3.5L to cover the next 30 days"* |
| **Avg Expense** | what a normal month costs you, from your own history |
| **In vs Out** | how you spend — *"for every ₹1 you earn, you spend 93 paise"* |
| **Usable for Growth** | unused money — what's left after your cushion is safe |
| **Used to Grow** | money put to work — how much of your spending *built* something |

Three of these deserve a second look:

**Breakeven** counts your committed payments plus your own average of everyday spending — and it never counts money you're merely expecting. A cheque in the post pays no bills. It also teaches the honest shape of money: the next 30 days never stop coming. The question is never *am I done?* — it's *can I keep running?* That's not bleak; that's just the game, seen clearly. Your cushion (months you could run with nothing coming in) is the calmest number in money.

**Usable for Growth** is your true "can I afford it?" — for the machine, the hire, the holiday. Not what's in the bank; what's *left after* the next months are safe. When it's negative it flips into a target, not a scolding: *"You still have to earn ₹X to be safe."*

**Used to Grow** shows the percentage *and* the rupees. *"Only ₹2,876 went toward growth"* stings precisely because it's true — and rises the moment you act on it.

And one glance worth making a habit: both sides of your money move at a *speed*. Earning ₹X a month and rising, spending ₹Y and rising **faster** — that crossing is the single most dangerous pattern in a small business, and here it's visible months before it bites.

Below the numbers, the sheet speaks in sentences: *"Things are steady — keep an eye on next month's numbers."* When all is well, it says so. And where one payer dominates your steady income, it says what that means: *"If the Techpark contract stops, your runway drops to X months."* A consequence you can act on — not a statistic you have to interpret.

---

## 8. Who owes you

> *Jumped straight here? One habit powers this: when someone promises you money, enter it as a **planned** row with the due date (section 6). The rest is automatic.*

The moment a promised payment's date passes with no money landed, it appears on the **Chase List**: who, how much, days late — and once there's history, how late that payer *usually* runs. *"Sharma runs about 12 days late"* changes how you plan around Sharma.

No scores, no status ceremony. You already know in your gut who's slow — the list just refuses to let you forget. It sits at the top of Cash Flows because for a business it's the highest-paying report in the sheet: **money already earned, not yet collected.** Chasing it beats finding a new customer every single time.

When it lands, put the real date on that same row and untick Planned — the row becomes the fact, and the chase closes itself. The due date stays in Planned on, so the sheet remembers how late it ran. Paid in part? Log what came as its own row and shrink the planned one to what's still due — or link the parts to it instead and let the sheet keep score (section 14). Never coming? Delete it — and keep the lesson.

The chase sits at the top of the **Cash Flows** tab. Below it, the rest of your money's rhythm: who pays you and where it goes, side by side, top five each; every tag's in, out and net; and the full dated list of everything ahead — because timing is the whole point. It's rarely the month that hurts; it's the *week* when things collide.

---

## 9. Tags — words that count

> *Jumped here? You need two facts: amounts carry a sign (+ in, − out), and the sheet's dropdowns remember your words. That's all.*

Forget what "tags" means elsewhere. Here, **a tag is a calculator you name.**

Write `sharma-reception` on every row that belongs to that order — the advance (+), the ingredients (−), the event staff (−) — and *sharma-reception adds itself up*. No formula, no math. The sign decides add or subtract; the word decides where it counts.

**Every tag is a small business inside your business** — its own money in, its own money out, its own answer. Name one for anything you want judged: a line of work (`tiffins`, `events`), a client, one big order, a channel (`instagram`), a bet (`diwali-orders`). A row can carry several words — festive boxes can be `tiffins, packaging` — and every word counts it. Three calculators running at once, no extra effort.

Two rules keep the answers honest:

1. **Tag both sides.** The job's income *and* the job's costs. Tag only the income and every job looks brilliant.
2. **Only tag money you can point at.** Paneer that went into the Sharma reception — you can point at it, tag it. Rent? You can't point at where rent went; it runs the whole shop. Rent never gets a job's word. (What rent *is*, and where it's judged, is sections 12–13.)

Start with one kind of word — your lines of work. Add more kinds when the first ones prove useful. Five kinds of tags is real power; five kinds on day one is confusion.

---

## 10. Watchlist — pick a thing, see everything

Choose any name — a client, an account, a tag — and its row fills in: money in, money out, net, share, and a twelve-month trend line. Want a comparison? Add a second row. That's the entire feature.

"How is X actually doing?" — rent this year, chai this month, what Sharma is really worth to you — one row each, no report-building, no formulas.

And here the slash pays off: because you named things `staff/salary`, `staff/wages`, the word `staff` alone totals every person you pay. Departments, teams, projects — you never design them. Your words already built them.

---

## 11. Limits & goals

> *Standalone: a **Limit** is a ceiling — "chai under ₹500 a week." A **Goal** is a floor — "₹30L from events this year." Both live in one small table.*

Pick a *For* (any name or tag), an amount, a period — weekly, monthly, yearly, or rolling windows like "last 30 days". The sheet fills a bar and speaks plainly: **Under · Warning · Over** for limits, **Behind · Almost there · Reached** for goals. Green fills, amber warns at 80%, red is over — the colour is the alert; no popup needed.

Then the part a notebook can't do. Miss the same limit three periods in a row and the sheet stops nagging and starts advising:

> *"Over 3 in a row. ₹871 is more realistic."*

— computed from your own history, leaning on your recent weeks. A budget you break every single month isn't a discipline problem — **it's a wrong number.** Fix the number; save the discipline for where it's real.

---

## 12. Purpose — what is this money for?

> *Standalone-ready: this is one dropdown on outgoing money. Five options, picked once per repeating rule, per row for one-offs. It funds section 13 — the best report in the sheet.*

Every rupee that leaves is doing exactly one of five jobs:

- **Specific work** — went *into* the work: materials, site labour, that job's transport. You can point at where it went.
- **Running cost** — keeps the shop open: rent, salaries, internet, software. There whether you sold or not.
- **Investment** — bought something that lasts: a machine, a laptop, gold.
- **Loan** — borrowed money going back. And when a loan *arrives*, it's a plus with Purpose Loan — because **borrowing is not income**, however good the month suddenly looks.
- **Pocket** — money moving between the business and *you*. Minus is you taking money home; plus is you rescuing a bad month. (Tracking only personal money? Everything is already your pocket — simply ignore this one.)

Stuck between the first two? One test settles it: **would I still be paying this if I did zero work this month?** Yes → Running cost. No → Specific work.

A cousin worth naming: GST you've collected is money in your account that was never yours — a short loan from the government. Mark it so, and filing day stops being a surprise.

Thirty seconds a day. Section 13 pays it back with the answer most owners have never seen in their lives.

---

## 13. Where the profit went

> *Standalone: all this needs is — signs (+ in, − out), tags (words that add rows up, section 9), and Purpose (what each outgoing rupee was for, section 12).*

Every owner has lived this: **"The year was profitable. So where is the money?"** Your accountant answers next September, about last year, in a language you don't enjoy. This report answers today, in yours. It has three parts, and they read top to bottom.

**Part one — what each line of work really earns.**

A dosa sells for ₹50. Its batter cost ₹20. That dosa drops **₹30 into the shop's common pot**. That's what a stream truly earns — its income minus the costs that went *into that work* — and the sheet computes it from your words alone:

```
tiffins    in 4,20,000 · work costs 2,52,000  →  drops 1,68,000   40%
events     in 5,00,000 · work costs 4,35,000  →  drops    65,000   13%
```

The weddings get the congratulations. The boring daily tiffins pay the rent — two and a half times over. Now you know what to sell more of — and what to reprice. The rupees say which stream fed you; the percentage ranks them fairly, big orders and small alike.

**Part two — the pot pays for the shop.**

Every stream pours what it earns into one pot. Out of that pot — once, and only there — go the running costs, ranked biggest first:

```
comes in from all work       2,33,000
running costs
  salaries                   1,08,000
  rent                         75,000
  utilities                    24,000
  everything else              21,000
                            ─────────
left                            5,000
```

The layout is the lesson: the shop's costs sit visibly attached to no stream. What survives the pot is profit — here, five thousand rupees. Barely breathing.

Here lives the rule that saves businesses: **never split the rent across your streams to judge them.** Do that, and a perfectly good stream can look like a loser. You kill it. The rent doesn't shrink — it lands on the survivors, who now look sick too. Judge every stream by what it *drops in the pot*: if it drops anything at all, killing it only makes the pot poorer. The only truly losing stream is one whose own work costs exceed its own income.

And when the pot isn't covering the shop, one division tells you which war to fight — *total dropped ÷ running costs*. Low because streams drop little? Pricing and mix — work on the streams. Low because running costs swelled? Overhead — the ranked list has already found the whales.

**Part three — profit vs cash.**

The pot said ₹5,000 left — and yet the bank went down by nearly *two lakh*. Three things eat cash **without ever appearing as a cost**, and your Purpose column has been quietly naming them all along:

```
Investment   −1,35,000    the oven, the SIP
Loan           −45,000    EMIs paid back
Pocket         −15,000    taken home, net
```

Profit was real. The cash went *there*. Line by line, named. *"You took ₹45,000 home this quarter — and put ₹30,000 back in a lean month"* — most owners have never once seen that sentence about themselves. This is the page that shows it.

Two honesty notes, both automatic: if "rent" ever appears marked both Running cost *and* Specific work, the sheet flags the contradiction quietly at the bottom — one of them is wrong, by definition. Same for work costs carrying no tag — real work money landing on no stream means some stream is reporting less than it earned. (A word on a *running cost*, though, does no damage — contribution counts only Specific-work rows. The word just buys you a bonus view: rent by location, salaries by branch.) And judge an order over the *order*, not the month: a wedding's advance lands in May, the ingredient bills hit June, the balance comes in July — June alone looks like disaster, July like a miracle. The tag's lifetime total is the true number.

---

## 14. Linked payments

Two shapes a single row can't say. One column says both.

**One thing, paid in pieces.** A ₹5L machine paid ₹1L + ₹2L + ₹2L, whenever cash allowed. An invoice collected in three parts. A project billed by milestone, on no schedule anyone can predict. Enter the whole thing once as a planned row (the hope). Link each real payment to it as it happens. The sheet keeps score: *paid ₹3L, ₹2L left* — for money going out and money coming in alike.

**One payment, many purposes.** A ₹10,000 hardware bill — ₹6,000 into the kitchen job, ₹4,000 into the wardrobe. Shops hand you one bill for two jobs; this unbundles it. Easiest answer, and usually the right one: **write two rows, tag each, done.** Same totals, nothing new to learn.

Want one row that matches the ₹10,000 line on your bank statement? Keep the bill whole as one real row, then put the pieces beneath it — each piece points at the bill and gets **Planned** ticked, so the money is only spent once. Two pieces or five, split four ways among friends: every piece points at the same bill. Pieces never point at each other, so nothing gets harder as they multiply.

The same **Planned** tick from section 6 tells the two shapes apart, so you never have to remember which: in *paid in pieces* the **parent** is ticked (it hasn't happened yet); in *many purposes* the **pieces** are ticked (the money already left, once). Exactly one side of a link is ever ticked — that is the whole mechanic.

Never put a share or a percentage inside a tag. A tag counts its row in full, always. Half-and-half is two rows — never half a word.

Rule of thumb: **link only when the money is not new** — when a payment pays down something already written. Everyday rows: no link, leave it blank. EMIs don't need it either — Repeats already counts paid and remaining on its own.

---

## 15. When life happens

Skipped a week? A month? One rough line — *−40,000 · bank → misc · "catching up June"* — and you're current. **Approximate beats absent.** A rough sheet still answers the two questions; an abandoned one answers nothing. There are no streaks here, no guilt. The sheet waits.

Doubt the numbers? Run the bank check: type today's *actual* bank balance, and the sheet shows the gap. *Sheet says ₹4.2L · Bank says ₹4.45L · off by ₹25,000.* That gap **is** the missing story — a bounced EMI, a forgotten sale, a typo — one number that catches every kind of error at once.

And the bounced-EMI case has a two-second fix: the sheet marked it done, but the money never left — re-tick Planned (section 6) and move its date forward. It goes back to "coming," and the balance corrects itself.

And relax about small wrongness. The decisions this sheet powers are *rankings* — kitchen over wardrobe, cut this before that — and ₹2L versus ₹40k survives a few mislabelled rows. You'll *feel* a wrong number long before any audit would find it. You are the audit.

---

## 16. Small habits that keep it clean

- **Same word, every time.** Pick from the dropdowns; never re-type a name from memory.
- **Tag both sides.** Income-only tags look brilliant; cost-only tags look dying. A number that looks too good is usually missing rows — the too-good number *is* the alarm.
- **Clear the untagged-income line** now and then — income that lands as an untagged lump makes every stream look like it's starving.
- **Type only in Log and Repeats.** Timeline and the generated tabs are views — they show, you don't touch.
- **A number looks wrong?** In order: bank check → hunt missing rows → check spellings. It's one of the three.

---

## 17. Questions people ask

**Whose data is this?** Yours. A Google Sheet in your Drive. No account with us, no server, nothing leaves the file.

**Do I need to know accounting?** No. If you can say "money went from here to there," you're qualified. The sheet carries the rigour so you don't have to.

**One person? A family? Three businesses?** Yes — one sheet. Your words make the walls: `personal/…`, `shop/…`, `mom/…`. Watch any one of them, or everything at once. (Starter rows for each of these lives ship with this guide — pick yours, type ten rows, you're running.)

**Does this replace my CA?** No. Your CA files; this makes *you* the informed one in that meeting. They tell you what happened last year — this tells you what to do this month.

**Do I get updates?** Your copy can't be changed from outside — that's your privacy working. New versions are announced; moving is copying your rows across, and you'll be walked through it.

**I entered something wrong.** Fix it. Words, tags, purposes are your *interpretation* — reinterpret freely, forever. What actually happened — date, amount, who to whom — keep true, and everything above it can always be repaired.

---

*How you'll know it's working: fewer surprises. A payment will run late and you'll find you already knew on Tuesday. A "profitable" month won't confuse you, because you'll know where the cash went. That's the whole product —*

**You know what's in the bank. This tells you what it means.**
