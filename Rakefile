SOURCE_HTML = FileList['text/**/*.html']
IMAGES = FileList['images/*']
OUTPUT_HTML = 'output/all.html'

directory "output"

task :images => :output
task :images => IMAGES do |t|
  IMAGES.each do |image|
    cp image, "output"
  end  
end

task OUTPUT_HTML => [:output, :images, :ilinks]
file OUTPUT_HTML => SOURCE_HTML do |t|
  File.open(t.name,'w') do |out|
    SOURCE_HTML.sort.each do |source|
      out.puts File.open(source).read
    end
  end  
end

file 'output/vim-recipes.pdf' => OUTPUT_HTML do |t|
  system("prince #{t.prerequisites.first} #{t.name}")
end

task :pdf => 'output/vim-recipes.pdf'

task :ilinks do |t|
  require 'hpricot'
  target = {}
  source = {}
  SOURCE_HTML.each do |file|
    doc = Hpricot(File.open(file, 'r'))
    doc.search("a[@href*='#']").each do |a|
      source[a['href'][/[^#]+/]] = file
    end
    doc.search("*[@id]").each do |e|
      target[e['id']] = 1
    end  
  end  
  source.keys.each do |s|
    $stderr.puts "Link #{s} from #{source[s]} is broken" unless target.key? s
  end  
end  
