import { useState, useEffect } from 'react';

interface SearchResult {
  id: string;
  title: string;
  type: 'module' | 'topic' | 'drug' | 'book' | 'calculator';
  description: string;
  url: string;
  category?: string;
}

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock data for search functionality
  const searchData: SearchResult[] = [
    // Modules
    { id: 'anatomy', title: 'Human Anatomy', type: 'module', description: 'Complete study of human body systems', url: '/student/medical/anatomy', category: 'Medical' },
    { id: 'physiology', title: 'Human Physiology', type: 'module', description: 'Understanding body functions and processes', url: '/student/medical/physiology', category: 'Medical' },
    { id: 'pharmacology', title: 'Medical Pharmacology', type: 'module', description: 'Drug actions and therapeutic uses', url: '/student/medical/pharmacology', category: 'Medical' },
    
    // Topics
    { id: 'cardiovascular-system', title: 'Cardiovascular System', type: 'topic', description: 'Heart anatomy and circulation', url: '/student/medical/anatomy/cardiovascular-system', category: 'Anatomy' },
    { id: 'respiratory-system', title: 'Respiratory System', type: 'topic', description: 'Lungs and gas exchange', url: '/student/medical/anatomy/respiratory-system', category: 'Anatomy' },
    
    // Drugs
    { id: 'amoxicillin', title: 'Amoxicillin', type: 'drug', description: 'Beta-lactam antibiotic', url: '/pharmacology/amoxicillin', category: 'Antibiotics' },
    
    // Books
    { id: 'grays-anatomy', title: "Gray's Anatomy for Students", type: 'book', description: 'Comprehensive anatomy textbook', url: '/books', category: 'Anatomy' },
    
    // Calculators
    { id: 'bmi', title: 'BMI Calculator', type: 'calculator', description: 'Calculate Body Mass Index', url: '/calculators', category: 'General' },
    { id: 'dosage', title: 'Drug Dosage Calculator', type: 'calculator', description: 'Calculate medication dosages', url: '/calculators', category: 'Pharmacy' },
  ];

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);
    
    // Simulate API delay
    const timeoutId = setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category?.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filteredResults);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return {
    query,
    setQuery,
    results,
    loading
  };
};