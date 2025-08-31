import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Leaf, TrendingDown } from 'lucide-react';
import Layout from '@/components/Layout';
import '../App.css';
import '../index.css';
import './CarbonCalculator.css';

const CarbonCalculator = () => {
  const [hydrogenAmount, setHydrogenAmount] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateSavings = () => {
    const amount = parseFloat(hydrogenAmount);
    if (!isNaN(amount)) {
      // Fossil hydrogen produces ~10.5 kg CO2 per kg H2
      // Green hydrogen produces ~0.5 kg CO2 per kg H2 (from renewable energy)
      const savings = amount * (10.5 - 0.5);
      setResult(savings);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-energy-green to-energy-accent bg-clip-text text-transparent">
              Carbon Savings Calculator
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate CO₂ emissions avoided by using green hydrogen instead of fossil-based hydrogen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Card */}
            <Card className="bg-gradient-to-br from-background to-secondary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-energy-green" />
                  Calculate Your Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="hydrogen">Hydrogen Amount (kg/year)</Label>
                  <Input
                    id="hydrogen"
                    type="number"
                    placeholder="Enter hydrogen amount in kg"
                    value={hydrogenAmount}
                    onChange={(e) => setHydrogenAmount(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={calculateSavings}
                  className="w-full bg-gradient-to-r from-energy-green to-energy-accent"
                  disabled={!hydrogenAmount}
                >
                  Calculate Savings
                </Button>

                {result !== null && (
                  <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="w-5 h-5 text-success" />
                      <span className="font-semibold text-success">CO₂ Savings</span>
                    </div>
                    <p className="text-2xl font-bold text-success">
                      {result.toFixed(2)} kg CO₂/year
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Equivalent to planting {Math.round(result / 21.77)} trees annually
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="bg-gradient-to-br from-background to-secondary/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-energy-green" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                    <h4 className="font-semibold text-destructive mb-1">Fossil Hydrogen</h4>
                    <p className="text-sm">Produces ~10.5 kg CO₂ per kg H₂</p>
                  </div>
                  
                  <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                    <h4 className="font-semibold text-success mb-1">Green Hydrogen</h4>
                    <p className="text-sm">Produces ~0.5 kg CO₂ per kg H₂</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Benefits of Green Hydrogen:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 95% reduction in CO₂ emissions</li>
                    <li>• Produced from renewable energy</li>
                    <li>• Zero emissions at point of use</li>
                    <li>• Supports decarbonization goals</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="mt-8 bg-gradient-to-r from-energy-green/5 to-energy-accent/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Why Green Hydrogen Matters</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-energy-green to-energy-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Emissions Reduction</h4>
                  <p className="text-sm text-muted-foreground">
                    Green hydrogen can reduce industrial emissions by up to 95% compared to fossil alternatives
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-energy-green to-energy-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Clean Energy</h4>
                  <p className="text-sm text-muted-foreground">
                    Produced using renewable energy sources like wind and solar power
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-energy-green to-energy-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">Scalable Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    Can be scaled to meet industrial demands while maintaining environmental benefits
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CarbonCalculator;