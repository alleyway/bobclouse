#!/usr/bin/env bash

ffmpeg -ss 0 -t 33 -i track01.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=27:d=6 track01.mp3
ffmpeg -ss 0 -t 52 -i track02.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=46:d=6 track02.mp3
ffmpeg -ss 0 -t 31 -i track03.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=25:d=6 track03.mp3
ffmpeg -ss 0 -t 40 -i track04.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=43:d=6 track04.mp3
ffmpeg -ss 0 -t 56 -i track05.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=50:d=6 track05.mp3
ffmpeg -ss 0 -t 35 -i track06.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=29:d=6 track06.mp3
ffmpeg -ss 70 -t 97 -i track07.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=91:d=6 track07.mp3
ffmpeg -ss 0 -t 32 -i track08.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=26:d=6 track08.mp3
ffmpeg -ss 0 -t 40 -i track09.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=34:d=6 track09.mp3
ffmpeg -ss 0 -t 40 -i track10.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=34:d=6 track10.mp3
ffmpeg -ss 0 -t 34 -i track11.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=28:d=6 track11.mp3
ffmpeg -ss 0 -t 37 -i track12.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=31:d=6 track12.mp3
ffmpeg -ss 0 -t 48 -i track13.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=42:d=6 track13.mp3
