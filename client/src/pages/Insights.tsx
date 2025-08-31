import './insights.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, ExternalLink, Star, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';

const Insights = () => {
  const resources = [
    {
      title: "Green Hydrogen Cost Reduction: Scaling up Electrolyzers",
      type: "Case Study",
      author: "IRENA",
      date: "2023-11",
      rating: 4.7,
      downloads: 12750,
      tags: ["Technology", "Economics", "Manufacturing"],
      summary: "Analysis of electrolyzer manufacturing scale-up and its impact on green hydrogen production costs.",
      // Using relevant hydrogen technology image
      imageUrl: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?q=80&w=800&auto=format&fit=crop",
      downloadUrl: "https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2020/Dec/IRENA_Green_hydrogen_cost_2020.pdf",
      onlineUrl: "https://www.irena.org/Publications/2020/Dec/Green-hydrogen-cost-reduction",
      featured: true
    },
    {
      title: "Hydrogen in North-Western Europe: A Vision Towards 2030",
      type: "Industry Report",
      author: "Shell & Gasunie",
      date: "2023-10",
      rating: 4.6,
      downloads: 9340,
      tags: ["Infrastructure", "Strategy", "Regional Analysis"],
      summary: "Strategic analysis of hydrogen infrastructure development in North-Western Europe.",
      imageUrl: "https://images.unsplash.com/photo-1515705576963-95cad62945b6?q=80&w=800&auto=format&fit=crop",
      downloadUrl: "https://www.shell.com/energy-and-innovation/new-energies/hydrogen/_jcr_content/par/textimage_1789866236.stream/1587655436405/45c9610c0124596bd987ba426b75a33c93783d5c/hydrogen-study-web.pdf",
      onlineUrl: "https://www.shell.com/energy-and-innovation/new-energies/hydrogen",
      featured: false
    },
    {
      title: "Hydrogen and Fuel Cell Technologies Market Report 2024",
      type: "Research Paper",
      author: "U.S. Department of Energy",
      date: "2024-01",
      rating: 4.8,
      downloads: 15420,
      tags: ["Market Analysis", "Technology", "Policy"],
      summary: "Comprehensive analysis of hydrogen production costs, demand projections, and technology advancement across different sectors.",
      // Using reliable placeholder image from Unsplash
      imageUrl: "https://images.unsplash.com/photo-1572333027650-833d768fce0d?q=80&w=800&auto=format&fit=crop",
      downloadUrl: "https://www.energy.gov/sites/default/files/2024-01/hydrogen-fuel-cell-technologies-market-report-2024.pdf",
      onlineUrl: "https://www.energy.gov/eere/fuelcells/articles/hydrogen-fuel-cell-technologies-office-market-analysis",
      featured: true
    },
    {
      title: "The Future of Hydrogen - IEA Report",
      type: "Technical Report",
      author: "International Energy Agency",
      date: "2023-12",
      rating: 4.9,
      downloads: 18930,
      tags: ["Policy", "Economics", "Technology"],
      summary: "Seizing today's opportunities for clean, reliable and secure energy future through hydrogen technologies.",
      imageUrl: "https://images.unsplash.com/photo-1599595344070-c456bea6ee82?q=80&w=800&auto=format&fit=crop",
      downloadUrl: "https://iea.blob.core.windows.net/assets/c5bc75b1-9e4d-460d-9056-6e8e626a11c4/GlobalHydrogenReview2023.pdf",
      onlineUrl: "https://www.iea.org/reports/global-hydrogen-review-2023",
      featured: true
    }
  ];

  const categories = [
    { name: "All", count: 156 },
    { name: "Policy & Regulation", count: 43 },
    { name: "Technology & Innovation", count: 67 },
    { name: "Market Analysis", count: 28 },
    { name: "Case Studies", count: 18 }
  ];

  // Update the Card component to include images
  const ResourceCard = ({ resource }: { resource: typeof resources[0] }) => (
    <Card className={`bg-gradient-to-br from-background to-secondary/50 hover:shadow-lg transition-all ${
      resource.featured ? 'ring-2 ring-energy-green/20' : ''
    }`}>
      <CardContent className="p-6">
        {/* Image Section */}
        {resource.imageUrl && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <img 
              src={resource.imageUrl} 
              alt={resource.title}
              className="w-full h-48 object-cover transition-transform hover:scale-105"
            />
          </div>
        )}

        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-2">
            {resource.featured && (
              <Badge className="bg-gradient-to-r from-energy-green to-energy-accent text-white">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
            <Badge variant="outline">
              {resource.type}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {resource.rating}
            </div>
            <div className="flex items-center gap-1">
              <Download className="w-4 h-4" />
              {resource.downloads.toLocaleString()}
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 hover:text-energy-green transition-colors cursor-pointer">
          {resource.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span>By {resource.author}</span>
          <span>•</span>
          <span>{new Date(resource.date).toLocaleDateString()}</span>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          {resource.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Updated buttons with actual links */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <a 
              href={resource.downloadUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-gradient-to-r from-energy-green to-energy-accent">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </a>
            <a 
              href={resource.onlineUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Online
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-energy-green to-energy-accent bg-clip-text text-transparent">
              Insights & Learning
            </h1>
            <p className="text-xl text-muted-foreground">
              Curated library of research, case studies, and best practices in green hydrogen
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search research papers, case studies, reports..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-energy-green/5 to-energy-accent/5">
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-2 hover:bg-background/50 rounded cursor-pointer transition-colors">
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="mt-6 bg-gradient-to-br from-success/5 to-success/10">
                <CardHeader>
                  <CardTitle className="text-lg">Featured Collection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-center">
                      <BookOpen className="w-8 h-8 text-success mx-auto mb-2" />
                      <h4 className="font-semibold text-sm">Hydrogen 101</h4>
                      <p className="text-xs text-muted-foreground">Essential guide for beginners</p>
                      <Button size="sm" variant="outline" className="mt-2 text-xs">
                        Start Learning
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Latest Resources</h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  Showing 156 resources
                </div>
              </div>

              <div className="space-y-6">
                {resources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Insights;