require 'rake/clean'
require 'hpricot'

SOURCE_HTML = FileList['text/**/*.html']
WWW_HTML = FileList['output/**/**/*.html']
IMAGES = FileList['images/*']
OUTPUT_HTML = 'output/all.html'
CLOBBER.include('output')

directory "output"

desc "Copy images to output directory"
task :images => :output
task :images => IMAGES do |t|
  IMAGES.each do |image|
    cp image, "output"
  end  
end

desc "Combine source HTML into single HTML file"
task OUTPUT_HTML => [:output, :images]
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

desc "Generate the PDF"
task :pdf => [:clobber, 'output/vim-recipes.pdf']

desc "Generate the Sitemap"
task :sitemap do
  sh "sitemap_gen.py --config=sitemap_config.xml --testing"
end

desc "Notify search engines about Sitemap"
task :sitemap_notify do
  sh "sitemap_gen.py --config=sitemap_config.xml"
end

def make_toc
  toc = []
  section = 'Preliminaries'
  section_id = 'preliminaries'
  SOURCE_HTML.sort.each do |f|
    #next if f =~ %r{/[0-9]+_p(re|ost)/}
    source = File.open(f).read
    doc = Hpricot(source)
    h_tag = doc.search('h1, h2, h3, h4').first
    title = h_tag ? h_tag.inner_html : 'Untitled'
    id = h_tag['id'] if h_tag
    next unless id && h_tag
    if h_tag.name == 'h2'
      section = title
      section_id = h_tag['id']
    end
    toc << { :id => h_tag['id'], :title => h_tag.inner_html, :file => f,
     :type => h_tag.name == 'h2' ? :section : :recipe, 
     :section_name => section, :section_id => section_id }
  end    
  toc
end

desc "Generate the HTML version"
task :html => SOURCE_HTML do |t|
  require 'erubis'
  require 'hpricot'
  template = File.open('templates/recipe.html').read
  toc = make_toc()
  toc.each_with_index do |entry,idx|
    source = File.open(entry[:file]).read
    doc = Hpricot(source)

    if (entry[:type] == :section) || (entry[:id] == 'introduction')
      page = Erubis::Eruby.new(File.open('templates/chapter.html').read).result(
        {:title => entry[:id] == 'introduction' ? 'Preliminaries' : entry[:title],
         :recipes => toc.select do |e| 
            (e[:section_id] == entry[:section_id]) &&
            (e[:type] == :recipe)
         end   
        }
      )
      path = "output/#{entry[:section_id]}/index.html"
      mkdir_p File.dirname(path)
      File.open(path,'w'){|f| f.puts page}
    else  
      doc.search('h1, h2, h3, h4, h5, h6').each do |tag|
        new_tag = tag.name.sub(/(\d)/) {|m| m.to_i - 2}
        tag.swap("<#{new_tag}>#{tag.inner_html}</#{new_tag}>")
      end  
        
      doc.search('a[@href*=#]').each do |a|
        id = a['href'].sub(/^#/,'')
        sections = toc.select {|e| e[:id] == id}
        next unless sections.size == 1
        a.swap("<a href='/#{sections.first[:section_id]}/#{id}/'>#{a.inner_html}</a>")
      end

      doc.search('img').each do |img|
        # FIXME: Awful hack: junks other attributes, assumes images to be in
        # root directory.
        img.swap("<img src='/#{img['src']}' />")
      end

      nxt = idx + 1 >= toc.size ? toc[0] : toc[(idx + 1)..-1].select{
        |e| e[:type] == :recipe}.first
      prv = idx == 0 ? toc[-1] : toc[0..(idx - 1)].select{
        |e| e[:type] == :recipe}[-1]
      page = Erubis::Eruby.new(template).result(
        {:body => doc.to_s, :title => entry[:title], :id => entry[:id], 
          :section_id => entry[:section_id], :section => entry[:section_name], 
          :next_e => nxt, :prev_e => prv})
        
       path = "output/#{entry[:section_id]}/#{entry[:id]}/index.html"
       mkdir_p File.dirname(path) 
       File.open(path,'w') {|file| file.puts page}
    end    
  end  
  page = Erubis::Eruby.new(File.open('templates/toc.html').read).
         result({:toc => toc.dup.reject{|e| e[:type] == :subsection}})
  mkdir_p 'output/toc'
  File.open('output/toc/index.html','w') {|file| file.puts page}
end

directory 'output/css'
desc "Generate the website"
task :www => ['output/vim-recipes.pdf',:html, 'output/css'] do
  FileList['www/*'].each {|f| cp f, 'output/'}
  File.open('output/css/style.css','w') do |merged|
    ['main','web'].each do |name| 
      merged.print File.open('templates/' + name + '.css').read
    end  
  end  
  cp_r 'js', 'output/'
end  

desc "Upload the website"
task :upload => [:www, :sitemap] do
  rm OUTPUT_HTML
  sh "rsync -vaz output/ vim.runpaint.org:/home/public/"
  Rake::Task['sitemap_notify'].invoke
end

