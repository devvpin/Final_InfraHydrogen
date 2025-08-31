import '../App.css';
import '../index.css';
import './News.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, TrendingUp, FileText, Globe } from 'lucide-react';
import Layout from '@/components/Layout';

const News = () => {
  const policies = [
    {
      title: "US Inflation Reduction Act - Hydrogen Tax Credits",
      description: "Up to $3/kg production tax credit for qualifying green hydrogen projects",
      region: "United States",
      status: "Active",
      link: "https://www.hydrogen.energy.gov/pdfs/clean-hydrogen-production-tax-credit.pdf"
    },
    {
      title: "REPowerEU Hydrogen Accelerator",
      description: "€5.4B investment program for hydrogen infrastructure in Europe",
      region: "European Union",
      status: "Active",
      link: "https://energy.ec.europa.eu/topics/energy-systems-integration/hydrogen_en"
    },
    {
      title: "China's Hydrogen Industry Development Plan",
      description: "Target of 50,000 fuel cell vehicles and 1,000 hydrogen stations by 2025",
      region: "China",
      status: "Active",
      link: "http://www.gov.cn/zhengce/zhengceku/2023-03/10/content_5745053.htm"
    }
  ];

  const missions = [
    {
      title: "Mission Innovation - Clean Hydrogen Mission",
      goal: "Reduce clean hydrogen costs to $2/kg by 2030",
      participants: "23 countries",
      funding: "$8.2B committed",
      link: "https://mission-innovation.net/missions/hydrogen/"
    },
    {
      title: "Hydrogen Council Global Roadmap",
      goal: "Deploy 650-680 hydrogen projects worldwide by 2030",
      participants: "140+ companies",
      funding: "$240B investment pipeline",
      link: "https://hydrogencouncil.com/wp-content/uploads/2023/09/Hydrogen-Insights-2023-Report.pdf"
    }
  ];

  const newsArticles = [
    {
      title: "World's Largest Green Hydrogen Plant Starts Construction in NEOM",
      summary: "Saudi Arabia begins construction of $8.4 billion green hydrogen facility in NEOM.",
      source: "Reuters",
      date: "2024-01-28",
      category: "Industry",
      urgent: true,
      link: "https://www.reuters.com/business/energy/air-products-completes-financing-44-bln-saudi-green-hydrogen-project-2023-12-20/"
    },
    {
      title: "EU Approves €7 Billion Hydrogen Infrastructure Package",
      summary: "European Commission authorizes major funding for hydrogen pipeline network.",
      source: "European Commission",
      date: "2024-01-25",
      category: "Policy",
      urgent: true,
      link: "https://ec.europa.eu/commission/presscorner/detail/en/IP_23_6086"
    },
    {
      title: "Plug Power Opens Largest Fuel Cell Manufacturing Factory",
      summary: "New gigafactory in New York becomes operational.",
      source: "BusinessWire",
      date: "2024-01-22",
      category: "Technology",
      urgent: false,
      link: "https://www.businesswire.com/news/home/20240122955459/en/"
    },
    {
      title: "Australia-Japan Complete First Liquid Hydrogen Shipment",
      summary: "Successful commercial-scale transport of liquid hydrogen completed.",
      source: "Reuters",
      date: "2024-01-20",
      category: "Trade",
      urgent: false,
      link: "https://www.reuters.com/markets/commodities/kawasaki-heavy-says-hydrogen-carrier-arrives-australia-2024-01-19/"
    },
    {
      title: "California Announces $300M Green Hydrogen Initiative",
      summary: "State launches comprehensive funding program for hydrogen infrastructure.",
      source: "California Energy Commission",
      date: "2024-01-18",
      category: "Policy",
      urgent: true,
      link: "https://www.energy.ca.gov/news/2023-12/cec-approves-300-million-renewable-hydrogen-production"
    },
    {
      title: "Air Products Unveils World's Largest PEM Electrolyzer",
      summary: "100MW PEM electrolyzer installation completed in Saudi Arabia.",
      source: "Air Products",
      date: "2024-01-15",
      category: "Technology",
      urgent: false,
      link: "https://www.airproducts.com/news/2023/12/1220-air-products-announces-44-billion-green-hydrogen-project"
    },
    {
      title: "Germany and Norway Sign Hydrogen Pipeline Agreement",
      summary: "Countries agree to develop undersea hydrogen pipeline.",
      source: "Reuters",
      date: "2024-01-12",
      category: "Infrastructure",
      urgent: false,
      link: "https://www.reuters.com/business/energy/germany-norway-agree-large-scale-hydrogen-pipeline-by-2030-2024-01-12/"
    },
    {
      title: "Toyota Launches Next-Gen Hydrogen Fuel Cell System",
      summary: "New fuel cell technology achieves 20% better efficiency.",
      source: "Toyota Newsroom",
      date: "2024-01-10",
      category: "Automotive",
      urgent: false,
      link: "https://global.toyota/en/newsroom/toyota/39406621.html"
    },
    {
      title: "UK Hydrogen Strategy Update Released",
      summary: "Government reveals enhanced targets and £400 million funding.",
      source: "UK Government",
      date: "2024-01-08",
      category: "Policy",
      urgent: true,
      link: "https://www.gov.uk/government/publications/uk-hydrogen-strategy-update-to-the-market-2023"
    },
    {
      title: "Siemens and Shell Partner for 200MW Electrolyzer Project",
      summary: "Major collaboration for green hydrogen production in Rotterdam.",
      source: "Siemens Energy",
      date: "2024-01-05",
      category: "Industry",
      urgent: false,
      link: "https://press.siemens-energy.com/global/en/pressrelease/siemens-energy-and-shell-sign-joint-development-agreement-scale-green-hydrogen"
    }
  ];

  const researchPapers = [
    {
      title: "Recent advances in green hydrogen production technologies",
      authors: "Nature Energy, 2024",
      image: "https://www.nature.com/articles/s41560-023-01397-3/figures/1",
      link: "https://www.nature.com/articles/s41560-023-01397-3",
      citation: "DOI: 10.1038/s41560-023-01397-3"
    },
    {
      title: "IEA Global Hydrogen Review 2023",
      authors: "International Energy Agency",
      image: "https://iea.blob.core.windows.net/assets/hydrogen2023.png",
      link: "https://www.iea.org/reports/global-hydrogen-review-2023",
      downloadPdf: "https://iea.blob.core.windows.net/assets/hydrogen2023.pdf"
    }
  ];

  const caseStudies = [
    {
      title: "HyNet North West Hydrogen Project",
      location: "United Kingdom",
      status: "In Development",
      capacity: "3.6 GW by 2030",
      image: "https://hynet.co.uk/wp-content/uploads/2023/09/HyNet-Overview.jpg",
      link: "https://hynet.co.uk/about/",
      keyFindings: [
        "£7 billion private investment",
        "2 million homes equivalent hydrogen supply",
        "CO2 reduction of 10 million tonnes per year"
      ]
    },
    {
      title: "NEOM Green Hydrogen Project",
      location: "Saudi Arabia",
      status: "Under Construction",
      capacity: "2.2 Million Tonnes/Year",
      image: "https://www.neom.com/content/dam/neom/hydrogen-plant.jpg",
      link: "https://www.neom.com/en-us/newsroom/neom-green-hydrogen",
      keyFindings: [
        "$8.4 billion investment",
        "World's largest green hydrogen plant",
        "100% powered by renewable energy"
      ]
    }
  ];

  const marketData = {
    currentStats: {
      globalCapacity: "1.2 GW",
      projectedCapacity2030: "134 GW",
      source: "Bloomberg NEF 2024",
      link: "https://about.bnef.com/blog/global-hydrogen-review-2024/"
    },
    investments: [
      {
        region: "Europe",
        amount: "€383 billion",
        timeline: "2025-2030",
        source: "Hydrogen Europe"
      },
      {
        region: "Asia Pacific",
        amount: "$265 billion",
        timeline: "2025-2030",
        source: "Wood Mackenzie"
      }
    ]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-energy-green to-energy-accent bg-clip-text text-transparent">
              Latest News & Missions
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with hydrogen policies, government incentives, and industry developments
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main News */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-energy-green" />
                Latest Hydrogen Industry News
              </h2>
              
              <div className="space-y-6">
                {newsArticles.map((article, index) => (
                  <Card key={index} className="bg-gradient-to-br from-background to-secondary/50 hover:shadow-lg transition-all duration-300 border border-energy-green/10">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex gap-2">
                          <Badge 
                            variant={article.urgent ? "destructive" : "secondary"}
                            className={`${
                              article.urgent 
                                ? "bg-gradient-to-r from-destructive to-destructive/80" 
                                : "bg-gradient-to-r from-energy-green/80 to-energy-accent/80"
                            } text-white`}
                          >
                            {article.category}
                          </Badge>
                          {article.urgent && (
                            <Badge variant="outline" className="text-destructive border-destructive animate-pulse">
                              Breaking News
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 hover:text-energy-green transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {article.summary}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Source: {article.source}
                        </span>
                        <a 
                          href={article.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="hover:bg-energy-green hover:text-white transition-all duration-300"
                          >
                            Read More
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Government Policies */}
              <Card className="bg-gradient-to-br from-energy-green/5 to-energy-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-energy-green" />
                    Active Policies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {policies.map((policy, index) => (
                    <div key={index} className="p-3 bg-background/80 rounded-lg border">
                      <h4 className="font-semibold text-sm mb-2">{policy.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{policy.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {policy.region}
                        </Badge>
                        <a 
                          href={policy.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-xs p-1 h-auto hover:text-energy-green"
                          >
                            View Details
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Global Missions */}
              <Card className="bg-gradient-to-br from-energy-accent/5 to-energy-green/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-energy-accent" />
                    Global Missions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {missions.map((mission, index) => (
                    <div key={index} className="p-3 bg-background/80 rounded-lg border">
                      <h4 className="font-semibold text-sm mb-2">{mission.title}</h4>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div>Goal: {mission.goal}</div>
                        <div>Participants: {mission.participants}</div>
                        <div>Funding: {mission.funding}</div>
                      </div>
                      <a 
                        href={mission.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs p-1 h-auto hover:text-energy-accent"
                        >
                          Learn More
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats - Corrected version */}
              <Card className="bg-gradient-to-br from-success/5 to-success/10">
                <CardHeader>
                  <CardTitle className="text-center">Global H₂ Progress</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-energy-green">680+</div>
                    <div className="text-sm text-muted-foreground">Active Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-energy-accent">$240B</div>
                    <div className="text-sm text-muted-foreground">Investment Pipeline</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">54</div>
                    <div className="text-sm text-muted-foreground">Countries Involved</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* New Sections for Research Papers, Case Studies, and Market Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Research Papers Section */}
            <section className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Latest Research</h2>
              {researchPapers.map((paper, index) => (
                <Card key={index} className="mb-4">
                  <CardHeader>
                    <img 
                      src={paper.image} 
                      alt={paper.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardTitle>{paper.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{paper.authors}</p>
                    <a 
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Read Paper
                    </a>
                  </CardContent>
                </Card>
              ))}
            </section>

            {/* Case Studies Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
              {caseStudies.map((study, index) => (
                <Card key={index} className="mb-4">
                  <CardHeader>
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardTitle>{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p><strong>Location:</strong> {study.location}</p>
                      <p><strong>Status:</strong> {study.status}</p>
                      <p><strong>Capacity:</strong> {study.capacity}</p>
                      <ul className="list-disc pl-5">
                        {study.keyFindings.map((finding, i) => (
                          <li key={i}>{finding}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>

            {/* Market Data Section */}
            <section className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Global Capacity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>Current: {marketData.currentStats.globalCapacity}</p>
                      <p>2030 Projection: {marketData.currentStats.projectedCapacity2030}</p>
                      <p className="text-sm text-gray-500">
                        Source: {marketData.currentStats.source}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {marketData.investments.map((investment, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{investment.region}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p>Investment: {investment.amount}</p>
                        <p>Timeline: {investment.timeline}</p>
                        <p className="text-sm text-gray-500">
                          Source: {investment.source}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;