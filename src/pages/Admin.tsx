import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Settings, Users, BookOpen, Upload, Plus, Edit, Trash2, Eye } from "lucide-react";

const Admin = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    file: null as File | null
  });

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "",
    institution: ""
  });

  const [newTopic, setNewTopic] = useState({
    module: "",
    title: "",
    description: "",
    content: "",
    difficulty: ""
  });

  // Mock data
  const books = [
    {
      id: 1,
      title: "Gray's Anatomy",
      author: "Susan Standring",
      category: "Medical",
      uploadDate: "2024-01-15",
      downloads: 1543
    },
    {
      id: 2,
      title: "Pharmacology Handbook",
      author: "Dr. Smith",
      category: "Pharmacy",
      uploadDate: "2024-01-20",
      downloads: 892
    }
  ];

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      type: "Medical Student",
      institution: "University of Ibadan",
      joinDate: "2024-01-10",
      progress: 68
    },
    {
      id: 2,
      name: "Jane Smith", 
      email: "jane@example.com",
      type: "Nursing Student",
      institution: "Lagos University",
      joinDate: "2024-01-12",
      progress: 45
    }
  ];

  const handleBookUpload = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Uploading book:", newBook);
    // Reset form
    setNewBook({
      title: "",
      author: "",
      category: "",
      description: "",
      file: null
    });
  };

  const handleUserAdd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding user:", newUser);
    // Reset form
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      type: "",
      institution: ""
    });
  };

  const handleTopicAdd = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding topic:", newTopic);
    // Reset form
    setNewTopic({
      module: "",
      title: "",
      description: "",
      content: "",
      difficulty: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header */}
      <section className="py-12 gradient-bg text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              ⚙️ Administration Panel
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Admin Dashboard
            </h1>
            <p className="text-xl text-blue-100">
              Manage books, users, content, and system settings
            </p>
          </div>
        </div>
      </section>

      {/* Admin Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="books" className="space-y-8">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
              <TabsTrigger value="books" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Books
              </TabsTrigger>
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="content" className="flex items-center gap-2">
                <Edit className="w-4 h-4" />
                Content
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Books Management */}
            <TabsContent value="books" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Add New Book */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="w-5 h-5" />
                      Upload New Book
                    </CardTitle>
                    <CardDescription>
                      Add new books and resources to the library
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleBookUpload} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="bookTitle">Title</Label>
                        <Input
                          id="bookTitle"
                          value={newBook.title}
                          onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                          placeholder="Book title"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bookAuthor">Author</Label>
                        <Input
                          id="bookAuthor"
                          value={newBook.author}
                          onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                          placeholder="Author name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bookCategory">Category</Label>
                        <Select value={newBook.category} onValueChange={(value) => setNewBook({...newBook, category: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="medical">Medical</SelectItem>
                            <SelectItem value="nursing">Nursing</SelectItem>
                            <SelectItem value="pharmacy">Pharmacy</SelectItem>
                            <SelectItem value="research">Research</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bookDescription">Description</Label>
                        <Textarea
                          id="bookDescription"
                          value={newBook.description}
                          onChange={(e) => setNewBook({...newBook, description: e.target.value})}
                          placeholder="Book description"
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bookFile">PDF File</Label>
                        <Input
                          id="bookFile"
                          type="file"
                          accept=".pdf"
                          onChange={(e) => setNewBook({...newBook, file: e.target.files?.[0] || null})}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Book
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Books List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Books</CardTitle>
                    <CardDescription>
                      View and manage existing books in the library
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {books.map((book) => (
                        <div key={book.id} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">{book.title}</h4>
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline">
                                <Eye className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">by {book.author}</p>
                          <div className="flex justify-between items-center text-xs">
                            <Badge variant="outline">{book.category}</Badge>
                            <span>{book.downloads} downloads</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Users Management */}
            <TabsContent value="users" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Add New User */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Plus className="w-5 h-5" />
                      Add New User
                    </CardTitle>
                    <CardDescription>
                      Create new user accounts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleUserAdd} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={newUser.firstName}
                            onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={newUser.lastName}
                            onChange={(e) => setNewUser({...newUser, lastName: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="userEmail">Email</Label>
                        <Input
                          id="userEmail"
                          type="email"
                          value={newUser.email}
                          onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="userType">User Type</Label>
                        <Select value={newUser.type} onValueChange={(value) => setNewUser({...newUser, type: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select user type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="medical">Medical Student</SelectItem>
                            <SelectItem value="nursing">Nursing Student</SelectItem>
                            <SelectItem value="pharmacy">Pharmacy Student</SelectItem>
                            <SelectItem value="masters">Masters Student</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution</Label>
                        <Input
                          id="institution"
                          value={newUser.institution}
                          onChange={(e) => setNewUser({...newUser, institution: e.target.value})}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add User
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Users Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>
                      View and manage user accounts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-xs text-muted-foreground">{user.email}</p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{user.type}</Badge>
                            </TableCell>
                            <TableCell>{user.progress}%</TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                <Button size="sm" variant="outline">
                                  <Edit className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Content Management */}
            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit className="w-5 h-5" />
                    Add Topic Content
                  </CardTitle>
                  <CardDescription>
                    Add new topics to existing modules
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleTopicAdd} className="space-y-4 max-w-2xl">
                    <div className="space-y-2">
                      <Label htmlFor="module">Module</Label>
                      <Select value={newTopic.module} onValueChange={(value) => setNewTopic({...newTopic, module: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select module" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="anatomy">Human Anatomy</SelectItem>
                          <SelectItem value="physiology">Human Physiology</SelectItem>
                          <SelectItem value="pathology">General Pathology</SelectItem>
                          <SelectItem value="pharmacology">Medical Pharmacology</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="topicTitle">Topic Title</Label>
                      <Input
                        id="topicTitle"
                        value={newTopic.title}
                        onChange={(e) => setNewTopic({...newTopic, title: e.target.value})}
                        placeholder="Topic title"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="topicDescription">Description</Label>
                      <Input
                        id="topicDescription"
                        value={newTopic.description}
                        onChange={(e) => setNewTopic({...newTopic, description: e.target.value})}
                        placeholder="Brief description"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="difficulty">Difficulty</Label>
                      <Select value={newTopic.difficulty} onValueChange={(value) => setNewTopic({...newTopic, difficulty: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="topicContent">Content</Label>
                      <Textarea
                        id="topicContent"
                        value={newTopic.content}
                        onChange={(e) => setNewTopic({...newTopic, content: e.target.value})}
                        placeholder="Topic content in markdown format"
                        rows={8}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Topic
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    System Settings
                  </CardTitle>
                  <CardDescription>
                    Configure system-wide settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Configure automatic email notifications for new uploads and user registrations
                      </p>
                      <Button variant="outline">Configure Email Settings</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">User Registration</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Control who can register and access the platform
                      </p>
                      <Button variant="outline">Manage Registration Settings</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Content Moderation</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Set guidelines for content approval and moderation
                      </p>
                      <Button variant="outline">Content Moderation Rules</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;