---

title: axisBar
slug: axisBar
imagesPath: ../images/
---

The axisBar is a midi controller which allows interaction without physical contact.
It consists of an array of 6 "SR04" ultrasonic distance sensors which cover a space of +/- 30 cm.
When the user places his hand above AxisBar, it creates a dataset depending on the position of the hand.
This position outputs two different values:

- A X-axis value: Given by the id of the "current sensor", his is determined by order, so, the first sensor from left two right which is reading the hand distance. This value ranges from 0-5 

- A Y-axis value: Given by the data given from the "current sensor". The sensor provides a distance reading that ranges from 7—200.

This values are then mapped to fit midi message formats. The X axis is being used for "CC" messages, so it is given a value between 0—127. The Y Axis recieves a value between 36-60 to fit two different Octaves (1—3 Octave ranges).

Finally, the AxisBar outputs the data in a Serial format which is then "parsed" by a MidiConverter for interfacing it with any midi-capable software.

For this project, the [Hairless Midi-to-Serial Bridge](http://projectgus.github.io/hairless-midiserial/) by Angus Gratton was used, many thanks to him.