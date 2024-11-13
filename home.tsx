'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Menu, X, ShoppingBag, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Collection {
  title: string
  subtitle: string
  image: string
  link: string
}

interface Product {
  name: string
  price: string
  image: string
}

export default function Component(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredCollections: Collection[] = [
    {
      title: "FW24 Collection",
      subtitle: "New Arrivals",
      image: "/placeholder.svg?height=600&width=1200",
      link: "#"
    },
    {
      title: "Accessories",
      subtitle: "Essential Pieces",
      image: "/placeholder.svg?height=600&width=1200",
      link: "#"
    }
  ]

  const popularProducts: Product[] = [
    { name: 'AX-001 Hoodie', price: '$89', image: '/placeholder.svg?height=400&width=300' },
    { name: 'AX-002 Tee', price: '$45', image: '/placeholder.svg?height=400&width=300' },
    { name: 'AX-003 Jacket', price: '$120', image: '/placeholder.svg?height=400&width=300' },
    { name: 'AX-004 Pants', price: '$95', image: '/placeholder.svg?height=400&width=300' },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 z-50 bg-white border-b border-gray-200"
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            AXONIUS
          </motion.div>

          <div className="hidden lg:flex space-x-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="text-sm hover:text-gray-600"
            >
              Collections
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="text-sm hover:text-gray-600"
            >
              About
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="text-sm hover:text-gray-600"
            >
              Contact
            </motion.a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5" />
            <ShoppingBag className="h-5 w-5" />
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-white z-50 lg:hidden"
          >
            <div className="p-4">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} className="mb-8">
                <X className="h-6 w-6" />
              </Button>
              <div className="space-y-6">
                <a href="#" className="block text-2xl">Collections</a>
                <a href="#" className="block text-2xl">About</a>
                <a href="#" className="block text-2xl">Contact</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-16 min-h-screen relative"
      >
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="bg-gray-100 p-12 flex items-center justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold"
            >
              新生活
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[url('/placeholder.svg?height=1080&width=1080')] bg-cover bg-center"
          />
        </div>
      </motion.section>

      {/* Featured Collections */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-12">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-[70vh] bg-gray-900"
            >
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white">
                  <motion.h2 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                  >
                    {collection.title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl mb-8"
                  >
                    {collection.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      View Collection
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-12 text-center"
          >
            Most Popular
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {popularProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
                  >
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      Quick View
                    </Button>
                  </motion.div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">About the brand</h2>
              <p className="text-gray-600">
                Axonius represents the convergence of street culture and sustainable fashion.
                Each piece is crafted with precision and purpose, embodying our commitment
                to quality and environmental consciousness.
              </p>
              <Button variant="outline" className="border-black hover:bg-black hover:text-white">
                Read more
              </Button>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="/placeholder.svg?height=300&width=300" alt="About 1" className="w-full aspect-square object-cover" />
              <img src="/placeholder.svg?height=300&width=300" alt="About 2" className="w-full aspect-square object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Nice newsletter</h2>
            <p className="text-gray-400">Subscribe to our newsletter and get a 10% discount on your first order</p>
            <div className="flex gap-4">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-white text-white placeholder:text-gray-400"
              />
              <Button className="bg-white text-black hover:bg-gray-200">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden"
              >
                <img 
                  src={`/placeholder.svg?height=400&width=400`} 
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">About</a></li>
                <li><a href="#" className="hover:text-black">Careers</a></li>
                <li><a href="#" className="hover:text-black">Stores</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Help</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">FAQ</a></li>
                <li><a href="#" className="hover:text-black">Returns</a></li>
                <li><a href="#" className="hover:text-black">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Privacy</a></li>
                <li><a href="#" className="hover:text-black">Terms</a></li>
                <li><a href="#" className="hover:text-black">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Social</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Instagram</a></li>
                <li><a href="#" className="hover:text-black">Twitter</a></li>
                <li><a href="#" className="hover:text-black">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-sm text-gray-600">
            <p>© 2024 Axonius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}