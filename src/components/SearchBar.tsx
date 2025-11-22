import { Search } from "lucide-react"
import { Input } from "./ui/Input"

const SearchBar = () => {
  return (
    <div className="flex-1 max-w-xl hidden md:block">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input 
          type="search"
          placeholder="Search for band tees..."
          className="w-full pl-10 bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-600 uppercase tracking-wide text-sm"
        />
      </div>
    </div>
  )
}

export default SearchBar