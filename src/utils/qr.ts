export function generateQr(payload: Record<string, any>): string {
  // Mock QR code SVG generator
  const dataStr = JSON.stringify(payload);
  const encodedData = btoa(dataStr);
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="white"/>
    <rect x="20" y="20" width="30" height="30" fill="black"/>
    <rect x="150" y="20" width="30" height="30" fill="black"/>
    <rect x="20" y="150" width="30" height="30" fill="black"/>
    <text x="100" y="100" text-anchor="middle" font-size="8" fill="gray">${encodedData.slice(0, 20)}...</text>
  </svg>`;
}
