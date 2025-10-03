#!/usr/bin/env bash
set -euo pipefail

FFMPEG="/opt/homebrew/bin/ffmpeg"
FFPROBE="/opt/homebrew/bin/ffprobe"

SRC_DIR="$HOME/Downloads/Antony Lambi Développeur Full Stack"
DST_DIR="$PWD/public/videos"

mkdir -p "$DST_DIR"

optimize_one () {
  local name="$1"
  local input="$SRC_DIR/$name.mp4"

  echo "========================================="
  echo "Processing: $name"
  echo "========================================="

  # Copier l'original si pas déjà présent
  if [ ! -f "$DST_DIR/$name.mp4" ]; then
    echo "Copying original..."
    cp "$input" "$DST_DIR/$name.mp4"
  else
    echo "Original already exists, skipping copy."
  fi

  # MP4 Optimisé (H.264, CRF 28, faststart pour streaming web)
  echo "Generating optimized MP4..."
  "$FFMPEG" -y -i "$input" \
    -map 0:v:0 -map 0:a? \
    -c:v libx264 -profile:v high -pix_fmt yuv420p \
    -crf 28 -preset medium -r 24 -movflags +faststart \
    -c:a aac -b:a 128k \
    "$DST_DIR/$name-optimized.mp4"

  # WebM (VP9, CRF 32, audio Opus)
  echo "Generating WebM..."
  "$FFMPEG" -y -i "$input" \
    -map 0:v:0 -map 0:a? \
    -c:v libvpx-vp9 -crf 32 -b:v 0 -pix_fmt yuv420p -r 24 \
    -row-mt 1 -deadline good -cpu-used 1 \
    -c:a libopus -b:a 96k \
    "$DST_DIR/$name.webm"

  # Poster (frame à 1 seconde, haute qualité Lanczos)
  echo "Generating poster..."
  "$FFMPEG" -y -ss 00:00:01 -i "$input" -vframes 1 \
    -vf "scale=1280:720:flags=lanczos" \
    "$DST_DIR/$name-poster.png"

  # Compression PNG avec pngquant si disponible
  if command -v pngquant >/dev/null 2>&1; then
    echo "Compressing poster with pngquant..."
    pngquant --force --quality=65-80 --speed 1 --output "$DST_DIR/$name-poster.png" -- "$DST_DIR/$name-poster.png" || true
  else
    echo "pngquant not found, skipping PNG compression."
  fi

  echo ""
  echo "Generated files sizes:"
  ls -lh "$DST_DIR/$name"* 2>/dev/null || true
  echo ""
}

echo ""
echo "🎬 Starting video optimization process..."
echo ""

optimize_one "fixie.run-home"
optimize_one "rhymechain"

echo ""
echo "✅ Video optimization complete!"
echo ""
echo "📊 Final summary:"
ls -lh "$DST_DIR" | grep -E "(fixie\.run-home|rhymechain)" || true
echo ""
