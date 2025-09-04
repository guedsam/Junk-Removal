# Create directories for Portland neighborhoods
$portlandNeighborhoods = @(
    'pearl-district',
    'downtown-portland',
    'northwest-district',
    'hawthorne',
    'alberta-arts-district',
    'sellwood-moreland',
    'woodstock',
    'richmond',
    'division-clinton',
    'belmont-district',
    'irvington',
    'laurelhurst',
    'kenton',
    'st-johns',
    'mississippi-district',
    'fremont',
    'beaumont-wilshire',
    'rose-city-park',
    'hollywood-district',
    'sandy-boulevard',
    'foster-powell',
    'jade-district',
    'montavilla',
    'mt-tabor',
    'sunnyside'
)

$appDir = "src\app"

foreach ($neighborhood in $portlandNeighborhoods) {
    $dirName = $neighborhood + "-junk-removal"
    $fullPath = Join-Path $appDir $dirName

    try {
        if (!(Test-Path $fullPath)) {
            New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
            Write-Host "Successfully created: $dirName"
        } else {
            Write-Host "Directory already exists: $dirName"
        }
    }
    catch {
        Write-Host "Error creating $dirName : $_"
    }
}

Write-Host "`nPortland neighborhood directories creation completed!"
Write-Host "Total directories: $($portlandNeighborhoods.Count)"
