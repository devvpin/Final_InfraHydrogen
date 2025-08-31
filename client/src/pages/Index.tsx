import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  Map, 
  Layers, 
  Settings, 
  Bot, 
  Calculator, 
  BookOpen, 
  Newspaper,
  TrendingUp,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  Users
} from 'lucide-react';
import Layout from '@/components/Layout';
import '../App.css';
import '../index.css';
import './Index.css';
import Logo from '@/components/Logo';

const Index = () => {
  const features = [
    {
      icon: Map,
      title: "Interactive Map",
      description: "View existing and planned hydrogen assets on a unified map interface",
      link: "/analysis"
    },
    {
      icon: Layers,
      title: "Layered Data",
      description: "Overlay renewable energy sources, demand centers, and policy zones",
      link: "/insights"
    },
    {
      icon: Settings,
      title: "Optimization Engine",
      description: "AI-powered recommendations for optimal project locations",
      link: "/analysis"
    },
    {
      icon: Bot,
      title: "AI Chatbot Assistant",
      description: "Conversational AI for site exploration and decision support",
      link: "/chatbot"
    },
    {
      icon: Calculator,
      title: "Carbon Savings Calculator",
      description: "Calculate CO₂ emissions avoided using green hydrogen",
      link: "/carbon-calculator"
    },
    {
      icon: BookOpen,
      title: "Hydrogen 101",
      description: "Complete introduction to green hydrogen and infrastructure planning",
      link: "/insights"
    }
  ];

  const stats = [
    { value: "680+", label: "Global Projects", icon: Globe },
    { value: "$240B", label: "Investment Pipeline", icon: TrendingUp },
    { value: "54", label: "Countries Active", icon: Users },
    { value: "95%", label: "CO₂ Reduction", icon: Leaf }
  ];

  return (
    <Layout>
      <div className="min-h-screen home-page">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-energy-green/10 via-background to-energy-accent/10" />
          <div className="container mx-auto text-center relative z-10">
            <Badge className="mb-6 bg-gradient-to-r from-energy-green to-energy-accent text-white bg-text-light">
              Leading Green Hydrogen Platform
            </Badge>
            <div className="flex items-center justify-center mb-6 gap-3">
              <Logo />
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">infrahydrogen</h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto bg-text-light">
              Revolutionary platform for green hydrogen infrastructure mapping, optimization, and planning. 
              Accelerate the clean energy transition with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/analysis">
                <Button size="lg" className="bg-gradient-to-r from-energy-green to-energy-accent">
                  Explore Platform
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/insights">
                <Button size="lg" variant="outline" className="hover:bg-energy-green/5">
                  Learn About H₂
                  <BookOpen className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* What is Green Hydrogen */}
        <section className="py-16 px-4 bg-gradient-to-r from-energy-green/5 to-energy-accent/5">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-energy-green to-energy-accent bg-clip-text text-transparent">
                What is Green Hydrogen?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Green hydrogen is produced through electrolysis using renewable energy sources like wind and solar power. 
                Unlike conventional hydrogen production methods, green hydrogen generates zero carbon emissions, making it a 
                crucial element in global decarbonization efforts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background/80 backdrop-blur border-energy-green/20">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-energy-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Clean Production</h3>
                  <p className="text-muted-foreground">
                    Produced using renewable electricity through water electrolysis, creating zero emissions at the source.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/80 backdrop-blur border-energy-accent/20">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 text-energy-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Versatile Applications</h3>
                  <p className="text-muted-foreground">
                    Powers steel production, chemical processes, transportation, and energy storage across industries.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background/80 backdrop-blur border-success/20">
                <CardContent className="p-6 text-center">
                  <Leaf className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Climate Impact</h3>
                  <p className="text-muted-foreground">
                    Reduces CO₂ emissions by up to 95% compared to fossil-based hydrogen production methods.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Platform Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to plan, analyze, and optimize green hydrogen infrastructure projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Link key={index} to={feature.link}>
                  <Card className="h-full bg-gradient-to-br from-background to-secondary/50 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-energy-green to-energy-accent rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="group-hover:text-energy-green transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Global Impact Stats */}
        <section className="py-16 px-4 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Global Hydrogen Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                Real-time data from the growing green hydrogen ecosystem
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center bg-gradient-to-br from-background to-secondary/50">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-energy-green mx-auto mb-3" />
                    <div className="text-3xl font-bold text-energy-green mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-energy-green to-energy-accent">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Shape the Hydrogen Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of developers, investors, and researchers using infrahydrogen to accelerate green hydrogen projects worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="bg-white text-energy-green hover:bg-white/90">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/chatbot">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Try AI Assistant
                  <Bot className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
