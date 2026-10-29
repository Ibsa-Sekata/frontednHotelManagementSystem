$base = "http://localhost:5000/api/v1"

Write-Host "`n=== Register ===" -ForegroundColor Cyan
try {
  Invoke-RestMethod -Method POST -Uri "$base/auth/register" -ContentType "application/json" `
    -Body (@{ fullName = "Admin User"; email = "admin@royalpalace.example"; password = "Admin@1234" } | ConvertTo-Json) `
    | ConvertTo-Json -Depth 5
} catch {
  Write-Host "Register: $($_.Exception.Message)" -ForegroundColor Yellow
}

Write-Host "`n=== Login ===" -ForegroundColor Cyan
$response = Invoke-RestMethod -Method POST -Uri "$base/auth/login" -ContentType "application/json" `
  -Body (@{ email = "admin@royalpalace.example"; password = "Admin@1234" } | ConvertTo-Json)
$response | ConvertTo-Json -Depth 5

Write-Host "`n=== Me ===" -ForegroundColor Cyan
$token = $response.data.accessToken
Invoke-RestMethod -Method GET -Uri "$base/auth/me" -Headers @{ Authorization = "Bearer $token" } `
  | ConvertTo-Json -Depth 5