
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock reports data
const reports = [
  {
    id: 1,
    title: "Q2 2023 Market Analysis",
    description: "Comprehensive analysis of market trends and performance in Q2 2023",
    date: "June 30, 2023",
    type: "Quarterly",
    pages: 24,
    fileSize: "3.2 MB"
  },
  {
    id: 2,
    title: "Tech Sector Deep Dive",
    description: "In-depth analysis of technology sector stocks and future outlook",
    date: "July 15, 2023",
    type: "Sector",
    pages: 18,
    fileSize: "2.8 MB"
  },
  {
    id: 3,
    title: "ESG Investment Opportunities",
    description: "Analysis of emerging ESG investment opportunities and performance metrics",
    date: "August 2, 2023",
    type: "Thematic",
    pages: 32,
    fileSize: "4.5 MB"
  },
  {
    id: 4,
    title: "Cryptocurrency Market Update",
    description: "Latest trends and analysis in the cryptocurrency market",
    date: "August 10, 2023",
    type: "Special",
    pages: 15,
    fileSize: "2.1 MB"
  },
  {
    id: 5,
    title: "Global Economic Outlook",
    description: "Projections for global economic growth and market implications",
    date: "September 1, 2023",
    type: "Forecast",
    pages: 28,
    fileSize: "3.7 MB"
  },
];

const Reports = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="glass-input">
            <Calendar className="h-4 w-4 mr-2" />
            Filter by Date
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reports.map((report) => (
          <Card key={report.id} className="glass-card overflow-hidden">
            <div className="bg-primary/10 p-4 flex items-center justify-center">
              <FileText size={48} className="text-primary" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{report.title}</CardTitle>
                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                  {report.type}
                </span>
              </div>
              <CardDescription className="line-clamp-2">{report.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm text-muted-foreground mb-4">
                <span>{report.date}</span>
                <span>{report.pages} pages • {report.fileSize}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" /> View
                </Button>
                <Button size="sm" className="flex-1">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recently viewed reports */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Recently Viewed</CardTitle>
          <CardDescription>Reports you've viewed in the past 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-3 text-sm">Report Name</th>
                  <th className="text-left p-3 text-sm">Type</th>
                  <th className="text-left p-3 text-sm">Viewed On</th>
                  <th className="text-right p-3 text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.slice(0, 3).map((report) => (
                  <tr key={`viewed-${report.id}`} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-3 font-medium flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-primary" /> {report.title}
                    </td>
                    <td className="p-3 text-sm">{report.type}</td>
                    <td className="p-3 text-sm">{report.date}</td>
                    <td className="p-3 text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
