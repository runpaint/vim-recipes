
file 'output/all.html' => FileList['text/**/*.html'] do |t|
  File.open(t.name,'w') do |out|
    t.prerequisites.sort.each do |source|
      out.puts File.open(source).read
    end
  end  
end

file 'output/vim-recipes.pdf' => ['output/all.html'] do |t|
  system("prince #{t.prerequisites.first} #{t.name}")
end

task :pdf => ['output/vim-recipes.pdf'] do
end  
