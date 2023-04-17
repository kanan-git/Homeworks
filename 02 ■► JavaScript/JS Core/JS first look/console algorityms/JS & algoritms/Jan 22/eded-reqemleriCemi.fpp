15       	 <--SHAPES
15       	 <--LINES
id1
2       	 <--TYPE
634       	 <--LEFT
68       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
START



id2
2       	 <--TYPE
633       	 <--LEFT
746       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id3
91       	 <--TYPE
605       	 <--LEFT
136       	 <--TOP
128       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
eded daxil edin
a

id4
0       	 <--TYPE
612       	 <--LEFT
317       	 <--TOP
114       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
a
10
qaliq
id5
0       	 <--TYPE
627       	 <--LEFT
380       	 <--TOP
84       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
SUBTRACT
a
qaliq
b
id6
0       	 <--TYPE
634       	 <--LEFT
446       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DIVIDE
b
10
c
id7
92       	 <--TYPE
613       	 <--LEFT
549       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER
c
0

id8
0       	 <--TYPE
432       	 <--LEFT
317       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
a
c

id9
3       	 <--TYPE
463       	 <--LEFT
569       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id10
0       	 <--TYPE
633       	 <--LEFT
261       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
d
0

id11
0       	 <--TYPE
783       	 <--LEFT
447       	 <--TOP
104       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
d
qaliq
cem
id12
0       	 <--TYPE
799       	 <--LEFT
559       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
d
cem

id13
0       	 <--TYPE
616       	 <--LEFT
634       	 <--TOP
107       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
SUBTRACT
i
cem
netice
id14
91       	 <--TYPE
574       	 <--LEFT
685       	 <--TOP
188       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
eded - reqemleri cemi
netice

id16
0       	 <--TYPE
633       	 <--LEFT
205       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
i
a

  
---- LINES ---- from,to ----
id1,id3
reserved 1

id4,id5
reserved 1

id5,id6
reserved 1

id7,id9
reserved 1
EVET
id9,id8
reserved 1

id8,id4
reserved 1

id10,id4
reserved 1

id6,id11
reserved 1

id11,id12
reserved 1

id12,id7
reserved 1

id7,id13
reserved 1
HAYIR
id13,id14
reserved 1

id14,id2
reserved 1

id3,id16
reserved 1

id16,id10
reserved 1

