20       	 <--SHAPES
22       	 <--LINES
id1
91       	 <--TYPE
95       	 <--LEFT
131       	 <--TOP
135       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
Enter a value:
input

id3
2       	 <--TYPE
483       	 <--LEFT
75       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
65280       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
START



id4
92       	 <--TYPE
104       	 <--LEFT
422       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
mod
0

id5
91       	 <--TYPE
95       	 <--LEFT
71       	 <--TOP
138       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INPUT
Enter value count:
n

id6
0       	 <--TYPE
373       	 <--LEFT
76       	 <--TOP
81       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
counter
1

id7
0       	 <--TYPE
279       	 <--LEFT
562       	 <--TOP
135       	 <--WIDTH
30       	 <--HEIGHT
16711808       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
16777215       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
counter
1
counter
id8
3       	 <--TYPE
58       	 <--LEFT
441       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
33023       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id9
3       	 <--TYPE
58       	 <--LEFT
573       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
33023       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id10
92       	 <--TYPE
102       	 <--LEFT
552       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
counter
n

id12
0       	 <--TYPE
96       	 <--LEFT
501       	 <--TOP
125       	 <--WIDTH
30       	 <--HEIGHT
0       	 <--BACKCOLOR
16776960       	 <--BORDERCOLOR
16776960       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
ADD
values
1
values
id13
0       	 <--TYPE
262       	 <--LEFT
77       	 <--TOP
76       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
values
0

id11
91       	 <--TYPE
62       	 <--LEFT
635       	 <--TOP
191       	 <--WIDTH
40       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
OUTPUT
Entered whole values:
values

id14
2       	 <--TYPE
438       	 <--LEFT
639       	 <--TOP
70       	 <--WIDTH
30       	 <--HEIGHT
255       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
STOP



id15
3       	 <--TYPE
342       	 <--LEFT
146       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16711808       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id16
92       	 <--TYPE
106       	 <--LEFT
190       	 <--TOP
112       	 <--WIDTH
50       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
IF_EQUAL
input
0

id17
3       	 <--TYPE
284       	 <--LEFT
210       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16776960       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id18
3       	 <--TYPE
283       	 <--LEFT
510       	 <--TOP
10       	 <--WIDTH
10       	 <--HEIGHT
16776960       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
INTERSECTION



id19
0       	 <--TYPE
109       	 <--LEFT
320       	 <--TOP
103       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DIVINT
input
1
input
id20
0       	 <--TYPE
92       	 <--LEFT
269       	 <--TOP
137       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
DEFINITION
previousValue
input

id21
0       	 <--TYPE
74       	 <--LEFT
371       	 <--TOP
172       	 <--WIDTH
30       	 <--HEIGHT
16777215       	 <--BACKCOLOR
0       	 <--BORDERCOLOR
0       	 <--BORDERCOLOR
-reserved 1-
-reserved 2-
SUBTRACT
previousValue
input
mod
  
---- LINES ---- from,to ----
id3,id6
reserved 1

id6,id13
reserved 1

id13,id5
reserved 1

id5,id1
reserved 1

id10,id11
reserved 1
EVET
id11,id14
reserved 1

id4,id8
reserved 1
HAYIR
id8,id9
reserved 1

id9,id10
reserved 1

id15,id1
reserved 1

id1,id16
reserved 1

id16,id17
reserved 1
EVET
id17,id18
reserved 1

id10,id7
reserved 1
HAYIR
id7,id15
reserved 1

id4,id12
reserved 1
EVET
id12,id10
reserved 1

id18,id12
reserved 1

id20,id19
reserved 1

id19,id21
reserved 1

id16,id20
reserved 1
HAYIR
id21,id4
reserved 1

