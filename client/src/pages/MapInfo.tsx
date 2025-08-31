import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InteractiveMap } from "@/components/map/interactive-map";
import { Sidebar } from "@/components/panels/sidebar";
import { AssetDetails } from "@/components/panels/asset-details";
import { useMap } from "@/hooks/use-map";
import { Download, MapPin } from "lucide-react";
import type { InfrastructureAsset } from "@shared/schema";

// ✅ Renewable project marker type (allow string or number for safety)
type RenewableMarker = {
  id: number | string;
  Station: string;
  Latitude: number | string;
  Longitude: number | string;
};

// ✅ Hydrogen plant marker type
type HydrogenPlantMarker = {
  id: number | string;
  Plant_Name: string;
  Latitude: number | string;
  Longitude: number | string;
};

export default function MapInfo() {
  const { currentCoordinates, filterState, layerState, toggleLayer } = useMap();
  const [selectedAsset, setSelectedAsset] = useState<InfrastructureAsset | null>(null);
  const [showAssetPanel, setShowAssetPanel] = useState(false);
  const [markers, setMarkers] = useState<RenewableMarker[]>([]);
  const [hydrogenMarkers, setHydrogenMarkers] = useState<HydrogenPlantMarker[]>([]);
  const navigate = useNavigate();

  // ✅ Fetch renewable markers
  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/renewables");
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();
        // Convert coordinates to numbers
        const parsedData = data.map((marker: RenewableMarker) => ({
          ...marker,
          Latitude: Number(marker.Latitude),
          Longitude: Number(marker.Longitude)
        }));
        setMarkers(parsedData || []);
      } catch (err) {
        console.error("Failed to fetch renewable markers:", err);
        setMarkers([]);
      }
    };
    fetchMarkers();
  }, []);

  // ✅ Fetch hydrogen markers
  useEffect(() => {
    const fetchHydrogenMarkers = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/existingH2Plants");
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        
        const data = await res.json();
        if (!Array.isArray(data)) {
          console.error('Expected array of markers, got:', typeof data);
          return;
        }

        const parsedData = data.map((marker: HydrogenPlantMarker) => ({
          ...marker,
          id: marker.id || Math.random().toString(),
          Latitude: Number(marker.Latitude),
          Longitude: Number(marker.Longitude)
        })).filter(marker => 
          !isNaN(marker.Latitude) && 
          !isNaN(marker.Longitude)
        );

        console.log('Parsed hydrogen markers:', parsedData); // Debug log
        setHydrogenMarkers(parsedData);
      } catch (err) {
        console.error("Failed to fetch hydrogen plant markers:", err);
        setHydrogenMarkers([]);
      }
    };

    fetchHydrogenMarkers();
  }, []);

  const handleAssetSelect = (asset: InfrastructureAsset | null) => {
    setSelectedAsset(asset);
    setShowAssetPanel(!!asset);
  };

  const handleExportData = () => {
    console.log("Export data triggered");
  };

  return (
    <>
      <Navbar />
      <div className="mapinfo-page flex h-screen bg-background text-foreground">
        <Sidebar
          onMLAnalysis={() => {}}
          onProximityAnalysis={() => {}}
          onDemandAnalysis={() => {}}
          layerState={layerState}
          onLayerToggle={toggleLayer}
        />
        <div className="flex-1 flex flex-col">
          {/* Top Toolbar */}
          <div className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-lg font-semibold text-foreground">
                Infrastructure Overview
              </h2>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>United States</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleExportData}
                data-testid="button-export"
              >
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button
                variant="default"
                size="sm"
                className="ml-2"
                onClick={() => navigate("/analysis")}
                data-testid="button-analysis"
              >
                Analysis
              </Button>
            </div>
          </div>

          {/* Map Container */}
          <div className="flex-1 relative">
            <InteractiveMap
              selectedAsset={selectedAsset}
              onAssetSelect={handleAssetSelect}
              className="w-full h-full"
              markers={markers}
              hydrogenMarkers={hydrogenMarkers}
              filterState={filterState}
              layerState={layerState}
            />

            {/* Asset details side panel */}
            <AssetDetails
              asset={selectedAsset}
              onClose={() => {
                setSelectedAsset(null);
                setShowAssetPanel(false);
              }}
            />

            {/* Scale Bar */}
            <div className="absolute bottom-4 left-4 bg-card border border-border rounded px-3 py-2">
              <div className="flex items-center space-x-2 text-xs text-foreground">
                <div className="w-16 h-1 bg-foreground"></div>
                <span>200 km</span>
              </div>
            </div>

            {/* Coordinate Display */}
            <div className="absolute bottom-4 right-4 bg-card border border-border rounded px-3 py-2 text-xs text-foreground">
              <span data-testid="current-coordinates">
                {currentCoordinates &&
                typeof currentCoordinates.lat === "number" &&
                typeof currentCoordinates.lng === "number" &&
                !isNaN(currentCoordinates.lat) &&
                !isNaN(currentCoordinates.lng)
                  ? `${currentCoordinates.lat.toFixed(4)}° N, ${Math.abs(
                      currentCoordinates.lng
                    ).toFixed(4)}° W`
                  : "Coordinates unavailable"}
              </span>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}
