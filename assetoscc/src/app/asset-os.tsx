import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileIcon, MoreHorizontal, Search, Upload } from "lucide-react"

export default function Component() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r p-4">
        <h1 className="text-2xl font-bold mb-6">AssetOS</h1>
        <Input type="search" placeholder="Suchen..." className="mb-4" />
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Portfolio & Assets
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Auswertungen
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Due Dilligence
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Aufgaben
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            Datenverarbeitung
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Integrationen
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Einstellungen
          </Button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="border-b p-4 flex justify-between items-center">
          <Tabs defaultValue="datei">
            <TabsList>
              <TabsTrigger value="datei">Datei Ansicht</TabsTrigger>
              <TabsTrigger value="ordner">Ordner Struktur</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center space-x-2">
            <Button variant="outline">Export</Button>
            <Button variant="outline">Einladen</Button>
            <Button>
              <Upload className="mr-2 h-4 w-4" /> Upload
            </Button>
          </div>
        </header>
        <ScrollArea className="flex-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Portfolio</TableHead>
                <TableHead>Asset</TableHead>
                <TableHead>Typ</TableHead>
                <TableHead>Dateiname</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Erstelldatum</TableHead>
                <TableHead>Checks</TableHead>
                <TableHead>Kommentare</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[...Array(12)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell>Gesundheit</TableCell>
                  <TableCell>A-12 Ravensburg</TableCell>
                  <TableCell>Einzugsermächtigung</TableCell>
                  <TableCell className="flex items-center">
                    <FileIcon className="mr-2 h-4 w-4" /> SEPA-geschwärzt.pdf
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      Processed
                    </span>
                  </TableCell>
                  <TableCell>04.12.2004</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
        <footer className="border-t p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span>Zeilen pro Seite</span>
            <Select defaultValue="12">
              <SelectTrigger className="w-[70px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12</SelectItem>
                <SelectItem value="24">24</SelectItem>
                <SelectItem value="36">36</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>Seite 1 von 8</div>
        </footer>
      </div>
    </div>
  )
}