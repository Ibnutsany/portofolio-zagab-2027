# Zagab Portfolio (Next.js + TypeScript + Tailwind)

    npm install
    npm run dev

Aset yang perlu kamu isi:
- public/video/hero.mp4      -> video untuk scroll scrubbing
- public/images/poster.jpg   -> poster Home (juga tampil saat video belum siap)
- public/images/me.jpg       -> foto profil
- public/cv/CV-Zagab.pdf     -> file CV
Semua teks/link ada di lib/data.ts.

Tips video agar scrub mulus (setiap frame jadi keyframe):
    ffmpeg -i input.mp4 -vf scale=1280:-2 -movflags faststart -g 1 -an hero.mp4
