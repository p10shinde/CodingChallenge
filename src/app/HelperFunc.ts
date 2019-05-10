export class HelperFunc {

  getDistanceInKm(lat1, lon1, lat2, lon2) {
    lat1 = Number(lat1); lon1 = Number(lon1);
    lat2 = Number(lat2); lon2 = Number(lon2);
    const R = 6371e3; // metres
    const lat1Rad = lat1 * 0.017453292519943;
    const lat2Rad = lat2 * 0.017453292519943;
    const latDiffRad = (lat2 - lat1) * 0.017453292519943;
    const lonDiffRad = (lon2 - lon1) * 0.017453292519943;

    const a = Math.sin(latDiffRad / 2) * Math.sin(latDiffRad / 2) +
            Math.cos(lat1Rad) * Math.cos(lat2Rad) *
            Math.sin(lonDiffRad / 2) * Math.sin(lonDiffRad / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    console.log((R * c) / 1000);
    return  (R * c) / 1000;
  }
}
