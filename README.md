# Lab 04 — Types in a file

Student: Syed Aqib  
Roll number: 247251  
Class: BSCS F24 A  
Shop: Canteen  
Header colour: green  
Instructor: Ali Hafeez

## Run the lab

Open `index.html` in a web browser. Use the links to open `till.html` and
`who.html`. The project uses plain HTML, CSS and JavaScript and needs no installation.
Each page starts fresh when it reloads, as required by the lab's initial array states.

## Tasks

| Task | Completed work |
| --- | --- |
| 1 | Required folder, Git repository, green Canteen header, five-column sheet, empty row array and roll footer. |
| 2 | Item, Quantity and Price fields with an Add button below the sheet. |
| 3 | Append one row object, calculate Line by multiplication, concatenate price text and quantity for Note, redraw and clear inputs. |
| 4 | Keep a bad price as a NaN Line; omit the item property for an empty item so its cell reads undefined. |
| 5 | Sum numeric Lines while skipping NaN, and show the required type and equality results. |
| 6 | Linked till page with Bill, Paid and Take using the same shop and colour. |
| 7 | Change, amounts still owed and half of positive change; the function call appears above its declaration. |
| 8 | Empty Paid stores null and its kind displays object. |
| 9 | Linked attendance page with Name, Here and Out buttons storing Boolean statuses. |
| 10 | Redraw the people array, destructure each person's name and status together, and count only true answers. |
| 11 | Begin with Visitor, who has no inShop property; display undefined and exclude this person from the count. |
| 12 | One-page Word report with student details, completed work and screenshots of all three pages. |

## Try the required examples

- Sheet: Samosa / 2 / 50 gives Line 100 and Note 502. Tea / 3 / 40 raises the total to 220.
- Sheet: an empty Item, Quantity 1 and Price abc gives undefined, NaN and Note abc1. The total stays 220.
- Till: Bill 220 and Paid 300 gives Change 80 and Half of the change 40.
- Till: Bill 220 and Paid 100 shows Still owed 120. Paid 220 gives zero change.
- Till: Bill 220 and an empty Paid field stores null, shows kind object and Still owed 220.
- Who is in: the initial Visitor shows undefined and count 0. Here adds true; Out adds false.

## Evidence and report

`SyedAqib-247251.docx` is the one-page report. `screenshots/` contains the full sheet,
the sheet detail used in the report, the till, the empty-payment example and attendance.
`verification.md` records the browser checks. All 12 task commits use the exact messages
from the assignment.

Submit the Word report to the Google Classroom assignment **Lab 04 — Types in a file**
by **Monday 5 October 2026 at 16:00**. Preparing the report does not submit it to Classroom.
