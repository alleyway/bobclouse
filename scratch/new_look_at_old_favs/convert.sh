#!/usr/bin/env bash

ffmpeg -ss 0 -t 30 -i track01.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=24:d=6 track01.mp3
ffmpeg -ss 0 -t 30 -i track02.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=24:d=6 track02.mp3
ffmpeg -ss 0 -t 30 -i track03.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=24:d=6 track03.mp3
ffmpeg -ss 0 -t 30 -i track04.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=24:d=6 track04.mp3
ffmpeg -ss 0 -t 30 -i track05.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=24:d=6 track05.mp3
ffmpeg -ss 0 -t 30 -i track06.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=24:d=6 track06.mp3
ffmpeg -ss 0 -t 30 -i track07.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=24:d=6 track07.mp3
ffmpeg -ss 0 -t 30 -i track08.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=24:d=6 track08.mp3
ffmpeg -ss 0 -t 30 -i track09.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=24:d=6 track09.mp3
ffmpeg -ss 0 -t 30 -i track10.m4a -af afade=t=in:st=0:d=2,afade=t=out:st=24:d=6 track10.mp3
