import { useRef, useState, useMemo } from "react";
import { GoogleMap, Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import locatioIcon from "@/assets/locationIcon.svg"
type LatLng = { lat: number; lng: number };
type MapPickerProps = {
  defaultCenter?: LatLng;
  onConfirm: (coords: LatLng, address?: string) => void;
};

const QUICK_CITIES: { name: string; center: LatLng }[] = [
  { name: "مكة المكرمة", center: { lat: 21.3891, lng: 39.8579 } },
  { name: "الدمام", center: { lat: 26.3927, lng: 49.9777 } },
  { name: "جدة", center: { lat: 21.543333, lng: 39.172778 } },
  { name: "الرياض", center: { lat: 24.7136, lng: 46.6753 } },
];
export function MapPicker({ defaultCenter, onConfirm }: MapPickerProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"],
    language: "ar",
    region: "SA",
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const autoRef = useRef<google.maps.places.Autocomplete | null>(null);
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);

  const [center, setCenter] = useState<LatLng>(defaultCenter ?? QUICK_CITIES[3].center);
  const [address, setAddress] = useState<string>("");

  const containerStyle = useMemo(() => ({ width: "100%", height: "260px" }), []);
  const mapOptions = useMemo<google.maps.MapOptions>(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
    gestureHandling: "greedy",
    mapTypeId: "hybrid", // or 'satellite' | 'hybrid'
  }), []);

    const ensureGeocoder = () => {
      if (!geocoderRef.current) geocoderRef.current = new google.maps.Geocoder();
      return geocoderRef.current!;
    };

    const geocodeLatLng = async (coords: LatLng): Promise<string> => {
      try {
        const geocoder = ensureGeocoder();
        const { results } = await geocoder.geocode({ location: coords });
        return results?.[0]?.formatted_address ?? "";
      } catch (e: any) {
        console.warn("Geocode failed:", e?.message || e);
        return "";
      }
    };

    const onMapLoad = (m: google.maps.Map) => {
      mapRef.current = m;
      // get initial address once map is ready
      geocodeLatLng(center).then(setAddress);
      m.setMapTypeId("hybrid"); // or "satellite"
    };
    const onMapUnmount = () => { mapRef.current = null; };

    const handleDragEnd = async () => {
      const g = mapRef.current?.getCenter();
      if (!g) return;
      const next = { lat: g.lat(), lng: g.lng() };
      setCenter(next);
      setAddress(await geocodeLatLng(next));
    };

    const handlePlaceChanged = async () => {
      const place = autoRef.current?.getPlace();
      const loc = place?.geometry?.location;
      if (loc) {
        const next = { lat: loc.lat(), lng: loc.lng() };
        setCenter(next);
        mapRef.current?.panTo(next);
      }
      setAddress(place?.formatted_address ?? "");
    };

    const zoomBy = (delta: number) => {
      const z = mapRef.current?.getZoom() ?? 12;
      mapRef.current?.setZoom(z + delta);
    };

    const confirm = async () => {
      const addrText = address || (await geocodeLatLng(center));
      onConfirm(center, addrText);
      document.getElementById("confirm")?.click();
    };

    if(!isLoaded) return<div className = "w-full h-[260px] rounded-2xl border bg-gray-50 animate-pulse" />;

  return (
    <div dir="rtl" className="w-full space-y-4">
      <div className="flex items-center gap-2">
        <button type="button" className="w-10 h-10 shrink-0 rounded-lg border bg-white grid place-items-center text-gray-600">
          <img src={locatioIcon} alt="haddaf" />
        </button>

        <Autocomplete onLoad={(a) => (autoRef.current = a)} onPlaceChanged={handlePlaceChanged} className="w-full">
          <Input placeholder="ابحث عن مدينة..." className="flex-1 h-11 rounded-xl w-full bg-gray-100 focus-visible:ring-0 text-right" />
        </Autocomplete>
      </div>

      <div className="flex flex-wrap gap-2">
        {QUICK_CITIES.map((c) => (
          <button
            key={c.name}
            type="button"
            onClick={async () => {
              setCenter(c.center);
              mapRef.current?.panTo(c.center);
              setAddress(await geocodeLatLng(c.center)); // ✅ set address too
            }}
            className="px-4 py-1.5 rounded-full bg-white border text-gray-700 hover:bg-gray-50"
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="relative rounded-2xl border bg-white overflow-hidden">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onMapLoad}
          onUnmount={onMapUnmount}
          onDragEnd={handleDragEnd}
          options={mapOptions}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full z-10">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-red-600" fill="currentColor">
            <path d="M12 2a7 7 0 0 0-7 7c0 4.97 7 13 7 13s7-8.03 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
          </svg>
        </div>
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          <button type="button" onClick={() => zoomBy(1)} className="w-10 h-10 grid place-items-center rounded-lg bg-white border shadow">+</button>
          <button type="button" onClick={() => zoomBy(-1)} className="w-10 h-10 grid place-items-center rounded-lg bg-white border shadow">–</button>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-right text-sm " >
        <div className="font-semibold text-[#1C398E] mb-4">الموقع المحدد:</div>
        <a className="text-xs text-blue-600 "><span className="font-semibold">الإحداثيات:</span> {Number(center.lng.toFixed(6))} , {Number(center.lat.toFixed(6))} </a>
        {address && <div className="text-xs text-blue-700 mt-1">{address}</div>}
      </div>

      <Button onClick={confirm} className="w-full h-12 rounded-3xl bg-green-600 hover:bg-green-700 text-white text-base font-bold">
        تأكيد الموقع
      </Button>
    </div>
  );
}
