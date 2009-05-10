SOURCE_HTML = FileList['text/**/*.html']
IMAGES = FileList['images/*']

directory "output"

task :images => :output
task :images => IMAGES do |t|
  IMAGES.each do |image|
    cp image, "output"
  end  
end

task 'output/all.html' => [:output, :images]
file 'output/all.html' => FileList['text/**/*.html'] do |t|
  File.open(t.name,'w') do |out|
    SOURCE_HTML.sort.each do |source|
      out.puts File.open(source).read
    end
  end  
end

file 'output/vim-recipes.pdf' => 'output/all.html' do |t|
  system("prince #{t.prerequisites.first} #{t.name}")
end

task :pdf => 'output/vim-recipes.pdf'

task :ilinks => ['output/all.html'] do |t|
  require 'hpricot'
  target = {}
  source = {}
  FileList['text/**/*.html'].each do |file|
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
