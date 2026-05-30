Add-Type -AssemblyName System.Drawing

$srcImage = "C:\Users\rushu\.gemini\antigravity\brain\36a27e75-7de7-4be8-80fe-bbe5b0f0ba88\naizo_app_icon_1780129296068.png"
$img = [System.Drawing.Image]::FromFile($srcImage)

function Resize-Image($width, $height, $outPath) {
    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $graph = [System.Drawing.Graphics]::FromImage($bmp)
    $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graph.DrawImage($img, 0, 0, $width, $height)
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    $graph.Dispose()
}

Resize-Image 32 32 "$pwd\favicon-32x32.png"
Resize-Image 16 16 "$pwd\favicon-16x16.png"
Resize-Image 180 180 "$pwd\apple-touch-icon.png"

# Save 32x32 as .ico
$bmp32 = New-Object System.Drawing.Bitmap(32, 32)
$graph32 = [System.Drawing.Graphics]::FromImage($bmp32)
$graph32.DrawImage($img, 0, 0, 32, 32)
$bmp32.Save("$pwd\favicon.ico", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp32.Dispose()
$graph32.Dispose()

$img.Dispose()
Write-Host "Favicons generated successfully."
