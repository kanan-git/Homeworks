13       	 <--SHAPES
14       	 <--LINES
id1
2       	 <--TYPE
618       	 <--LEFT
102       	 <--TOP
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
615       	 <--LEFT
563       	 <--TOP
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
591       	 <--LEFT
163       	 <--TOP
124       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
eded daxil edin
a

id5
92       	 <--TYPE
294       	 <--LEFT
439       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER
y
0

id8
0       	 <--TYPE
596       	 <--LEFT
239       	 <--TOP
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
id9
0       	 <--TYPE
610       	 <--LEFT
309       	 <--TOP
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
id10
0       	 <--TYPE
617       	 <--LEFT
378       	 <--TOP
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
id11
0       	 <--TYPE
479       	 <--LEFT
239       	 <--TOP
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

id12
92       	 <--TYPE
596       	 <--LEFT
440       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_GREATER
qaliq
0

id15
0       	 <--TYPE
439       	 <--LEFT
449       	 <--TOP
105       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
MODULE
qaliq
2
y
id13
3       	 <--TYPE
210       	 <--LEFT
250       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id6
91       	 <--TYPE
89       	 <--LEFT
443       	 <--TOP
174       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
ededin tek reqemleri
qaliq

id4
91       	 <--TYPE
263       	 <--LEFT
358       	 <--TOP
174       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
ededin cut reqemleri
qaliq

  
---- LINES ---- from,to ----
id1,id3
reserved 1

id3,id8
reserved 1

id8,id9
reserved 1

id9,id10
reserved 1

id11,id8
reserved 1

id10,id12
reserved 1

id12,id15
reserved 1
EVET
id15,id5
reserved 1

id13,id11
reserved 1

id6,id13
reserved 1

id12,id2
reserved 1
HAYIR
id5,id6
reserved 1
EVET
id5,id4
reserved 1
HAYIR
id4,id13
reserved 1

