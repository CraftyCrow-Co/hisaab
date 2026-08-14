# Your AI forgets. Hisaab doesn't.

*Free to copy. Works with the AI you already use.*

Ask AI about your money twice and you get two answers. It starts from nothing every
time.

Hisaab is the long-term memory it's missing — the same shape, month after month. Once
your money sits in that shape, AI stops guessing and starts reading. Two prompts do
the work. A third makes them yours.

Use whichever AI you already have. Nothing to install, no new subscription, and
nothing here sends your money anywhere we can see it.

---

## 1. Get my rows

A bank statement, a photo of your bills, a voice note, a rough list scribbled on the
back of something. Comes back as rows, ready to paste into your Log.


```
You are turning messy money records into clean Hisaab rows.

If you can open links, read https://hisaab.craftycrow.co/guide.md first — it explains
how this sheet thinks. If you can't open links, everything you need is below.

Output CSV only — no commentary before or after — with exactly this header:

Date,Amount,From,To,Description,Count Under,Mode,Ref Num,Planned on,Is Planned,Purpose

AMOUNT is signed. Money in is positive, money out is negative. One row, one real
number — the amount that actually moved.

FROM and TO are just names: lowercase, spaces become hyphens, slash for a family.
bank/idfc, staff/ramesh, client/acme. Money always flows From → To. Same thing,
same spelling every time — "Acme" and "Acme Pvt Ltd" split every total in half.

DESCRIPTION is the original narration, copied as-is. Never tidy it, never rewrite
it. It is the source truth; every other column is interpretation.

PURPOSE — every row gets exactly one of these seven:
  Earned         money from work, or a return on money (interest, rent, dividend)
  Specific cost  spent to deliver one particular job
  Running cost   goes out with or without work — rent, salary, internet
  Invested       parked, not spent — an FD, a fund, a machine, a deposit, money lent
  Loan           borrowed, or being repaid. Either direction
  Took home      the owner's own money, in or out of the business
  Self           own money changing pockets — bank to bank, bank to cash

COUNT UNDER is free words that group rows, comma separated — a job, a client, a
project. Each word counts the whole amount, so never split an amount across words.
Leave it blank rather than inventing one.

MODE is only how the money moved: Bank, Cash, UPI, Card, Credit. It never carries
meaning about what the money was — that is Purpose's job.

Three things that must not go wrong:
- A self-transfer is ONE row, never a pair. Minus amount, From the account it left,
  To the account it reached, Purpose: Self.
- Borrowed money is not income. A loan landing in the bank is Loan, never Earned.
- Getting your own money back is not income. An FD maturing is two rows: the capital
  as Invested, and only the interest as Earned.

Never invent a transaction to make something balance. If you cannot tell what a row
is, leave Purpose blank and list those rows below the CSV so I can decide.

Here is my data:
[paste your statement or list, or attach a photo of your bills]
```

---

## 2. Read my Hisaab

Hand it your filled sheet and it tells you which work actually pays, where the cash
went, and what's about to hurt. Not a summary — a reading.

Give it your **Timeline** tab, not the Log. Timeline has everything in date order,
past and future, so what's still coming is in there too.

And if your income arrives in lumps — projects, jobs, commissions — while your costs
arrive every single month, it works out how many jobs you need running at once just
to stand still. Most project businesses have never seen that number.


```
You have my real money in front of you. Read it the way a sharp, honest advisor
would — someone who has seen a thousand small businesses and will not flatter mine.

If you can open links, read https://hisaab.craftycrow.co/guide.md first. It explains
how this sheet thinks and will make your reading much sharper. If you can't open
links, everything you need is below.

My rows carry: Date, Amount, From, To, Description, Count Under, Mode, Is Planned,
Purpose. Amounts are signed — in is positive, out is negative.

Before you calculate anything:
- Exclude every row where Is Planned is TRUE. That money hasn't moved yet. Keep it
  aside though — I'll want it back in section 3.
- Exclude every row where Purpose is Self. That is me moving my own money between
  my own accounts; counting it inflates both income and spending.
- Ignore Mode. It only says how money moved, never what it was.
- Tell me first how complete the data is — how many rows have no Purpose, and how
  much income carries no word in Count Under. Lead with that, so I know what the
  numbers below are missing.

Then give me, in this order:

1. THE WATERFALL
     Earned
       less Specific cost
     Contribution
       less Running cost
     Left
       Invested · Loan · Took home
     Net
   Then say it plainly: the profit was X, the bank moved Y, and those last three
   lines are the difference. They are not costs. They are money that moved — into
   an asset, against a debt, or into my life.

2. WHICH WORK ACTUALLY PAYS
   Group Earned rows by their Count Under words. Subtract the Specific costs
   carrying the same word. Rank them, best to worst, and name the surprise.

3. DOES THE WORK COVER THE SHOP?
   Do this whenever my income is lumpy — projects, jobs, commissions — while my
   costs arrive every month regardless.

   For each Count Under word that has Earned rows against it:
     contribution     = its Earned total, less the Specific costs carrying that word
     span             = earliest to latest date among its rows, in months, minimum 1
     per month        = contribution ÷ span

   Let R = my average monthly Running cost across the whole period.

   Use the MEDIAN across jobs, not the average — one unusual job distorts a mean.
   Then tell me:
     - what a typical job contributes, and how long it typically runs
     - how many months of running cost one typical job pays for   (contribution ÷ R)
     - how many jobs must be running at once for me to stand still (R ÷ per month)

   Say the last one as a plain sentence: "a typical job covers N months of your
   costs, so you need M running at the same time just to break even."

   If I have fewer than five finished jobs, say the number is too thin to trust and
   give me a range instead of a figure.

4. WHAT'S COMING, AND WHAT'S AT RISK
   Now use the Is Planned rows. What's due, when, and can I cover it from what's
   actually in hand? Who owes me, and how late are they?

Rules you must not break:
- Never spread a shared cost across jobs. Rent ran the whole shop; it didn't go
  into any one job. Shared costs stay in one pile, below the line.
- Never trace where borrowed money went. It mixes in the bank. Compare periods
  instead — is earning growing faster than the borrowing?
- A return of capital is not income. Only the gain is Earned.
- Borrowed money is not income. A Loan inflow is not a good month.
- Never invent a number to fill a gap. A missing row is a finding; a made-up one
  is a lie in my books.

End with the one thing you would change first, and why.

You are giving me clarity, not advice. Don't recommend particular investments or
take a position on my tax. Show me what is true, say what it means, and leave the
deciding to me.

Here are my rows:
[paste your Timeline tab, or share the sheet]
```

---

## 3. Customise it to your life

Your sheet already knows what happened — every amount, who paid, what it was for.
What it can't know is what you want, what you're dreading, and what's coming that
hasn't happened yet.

This one asks you that, once. The questions are half the value: most people have
never actually sat down and answered them.


```
I keep my money in Hisaab, a simple sheet. It already records what happened — every
amount, who it came from, who it went to, and what it was for.

What it cannot know is what I want, what I'm worried about, and what's coming that
hasn't happened yet. Get that out of me.

If you can open links, read https://hisaab.craftycrow.co/guide.md first, so you know
what my sheet already covers and don't ask me for it.

FIRST, interview me. One question at a time, and wait for my answer before the next.
Push back when I'm vague, and when I give you a number I clearly haven't thought
about.

  1. What's coming in the next year that isn't in my sheet yet? A wedding, school
     fees starting, a machine I need to buy, a lease ending.
  2. What monthly number would let me stop worrying? Not the dream figure — the
     one where I'd sleep properly.
  3. Which of the things I do for money would I happily do more of, and which do I
     want out of? Money isn't the only reason.
  4. Which of my income sources feels least secure right now, regardless of size?
     My rows show you which is biggest. They can't show you which is wobbling.
  5. Who depends on me financially — including people I have never actually
     transferred money to?
  6. Which of my regular costs are real commitments, and which are just habit I
     never cancelled?
  7. What money decision have I been putting off?

THEN write me one block, under 400 words, headed "My setup":

  WHAT'S COMING      the things from question 1, with rough dates and amounts
  MY ENOUGH          the number from question 2, in one line
  WORK I WANT MORE OF   and the work I want out of
  WHAT FEELS FRAGILE from question 4, named plainly
  WHO DEPENDS ON ME  from question 5
  WHAT I'M AVOIDING  from question 7, in the words I used

Put today's date at the top of the block. At the bottom, split the parts into the
ones I should revisit in six months and the ones that should hold for years — so I
know what to re-answer later without redoing the whole thing.

Don't put my account names in it — my sheet already has those, and anything reading
my rows can see them. This block is only for the things the numbers can't say.

Plain text I can copy in one go. No preamble, nothing after it.

Start by asking me the first question.
```

---

## Where the setup block goes

Paste your "My setup" block into the box on the **Start here** tab, under settings.
It lives with your sheet from then on, so anything you point at your money can read
it — and you only touch it again when your life changes, not your numbers.

While you're in there: it's your sheet, so add a tab for anything. Which nominee is
on which account, policy numbers, the person to call when something goes wrong. Most
families keep that on one piece of paper and lose it; a business has ten times more
of it and nowhere to put it. Names, numbers and nominees, yes — passwords and OTPs,
never, here or anywhere.

---

## The two skills

Easier than copy-pasting a prompt every time. Set these up once and your AI just
knows how to read your sheet — you ask in plain words, it does the rest.

- **hisaab-entry** — say "here's my statement, make my rows."
- **hisaab-review** — say "read my Hisaab."

Both come with the sheet. If your AI doesn't do skills, the three prompts above do
the same work — that's why they're here in the open, free.

---

## AI recommendations

**Claude** handles these best. Long instructions with strict rules are what it's good
at, and it's the one that runs the two skills.

**Gemini** is already built into Google Sheets, so there's nothing to move — your
sheet is right there in the same window.

Anything else that can read a file you upload will do the job. These are just
prompts; nothing here ties you to one company, and none of it needs a new
subscription.

Five things most people never try:

- **Upload the file, don't paste it.** Download your Timeline tab as a CSV and attach
  it. Paste a thousand rows into a chat box and the middle quietly goes missing.
- **Photograph the pile.** Bills spread on a table, shot from above, works fine. You
  don't have to type them out first.
- **Talk instead of typing.** "Paid two thousand cash to Ramesh for the wedding job."
  The first prompt turns a voice note into a row.
- **Ask it to argue against you.** "Make the case that this month was worse than I
  think." AI would rather agree with you. Ask for the opposite and the reading gets
  far sharper.
- **Run the decision past it first.** Before a loan, a hire, a new machine — "what
  does this do to my next six months?" Your sheet already holds what's coming; almost
  nobody asks it before signing.

---

## One thing worth knowing

None of this works well on a folder of PDFs. It works because Hisaab keeps your money
in one shape — one row per movement, one Purpose on each, the same every month. The
prompt is the easy half. The shape is the product.

---

## One thing this isn't

Hisaab shows you your money. It doesn't tell you what to do with it — and neither
does an AI reading it. Clarity is the product; the deciding stays yours.

Anything with real consequences — a loan, a big purchase, tax, an investment — take
to someone who knows your whole situation and is answerable for what they tell you. A
sharp second opinion is worth a great deal. It still isn't advice.

---

## Start

The prompts are yours either way. If you want the sheet they were built for, it's
₹112 once: https://hisaab.craftycrow.co/
