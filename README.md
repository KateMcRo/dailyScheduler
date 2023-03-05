# Daily Scheduler

## Description

This daily planner allows the user to add and update events to hour blocks. The blocks are color coded to show if they are in the past, present or future. The blocks color will update as time passes to easily identify time left in the workday.

This project relied heavily on the Day.js library to:
- Set the current date
- Track the current hour
- Compare the current hour to the time blocks to update the color

One interesting thing I learned from this project was how to get a sub string so I could compare the individual time block ids to the current hour.

## Usage

Add events to the text area and save them using the save button to the right. Time blocks are color coded by past, present, and future.

![Screetshot of Scheduler](/Assets/ScheduleSS.png)

[Deployed Sheduler](https://katemcro.github.io/dailyScheduler/)

## Credits

Starter code provided by edX Boot Camps LLC.

## License

MIT License

Copyright (c) 2023 Kate Rogers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
