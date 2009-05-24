require 'rake/clean'
require 'hpricot'
require 'erb'

WEB_OUT = 'output/www'
OFFLINE_OUT = 'output/offline'
SOURCE_HTML = FileList['text/**/*.html']
WWW_HTML = FileList["#{WEB_OUT}/**/**/*.html"]
IMAGES = FileList['images/*']
OUTPUT_HTML = "#{WEB_OUT}/all.html"
PDF = "#{WEB_OUT}/vim-recipes.pdf"
CLOBBER.include('output','deb')
TEMPLATES_DIR = 'templates/'
TEMPLATE_WRAPPER = 'page.html'
TEMPLATE_NO_WRAP = [TEMPLATE_WRAPPER, 'atom.atom']

def bind(obj)
  obj.send(:binding)
end  

def template(filename,hash)
  content = ERB.new(File.open(File.join(TEMPLATES_DIR,filename)).read).
    result(bind(OpenStruct.new(hash)))
  return content if TEMPLATE_NO_WRAP.include? filename
  template(TEMPLATE_WRAPPER, {:content => content}.merge(hash))  
end

directory WEB_OUT

desc "Copy images to output directory"
task :images => WEB_OUT
task :images => IMAGES do |t|
  IMAGES.each do |image|
    cp image, WEB_OUT
  end  
end

desc "Combine source HTML into single HTML file"
task OUTPUT_HTML => [WEB_OUT, :images]
file OUTPUT_HTML => SOURCE_HTML do |t|
  File.open(t.name,'w') do |out|
    SOURCE_HTML.sort.each do |source|
      out.puts File.open(source).read
    end
  end  
end

file PDF => [OUTPUT_HTML,WEB_OUT] do |t|
  system("prince #{t.prerequisites.first} #{t.name}")
end

desc "Generate the PDF"
task :pdf => PDF do
  rm OUTPUT_HTML
end  

desc "Generate the Sitemap"
task :sitemap do
  sh "sitemap_gen.py --config=sitemap_config.xml --testing"
end

desc "Notify search engines about Sitemap"
task :sitemap_notify do
  sh "sitemap_gen.py --config=sitemap_config.xml"
end

def commit_time(file)
  begin
    Time.at(`git log -r --name-only --no-color --pretty=raw -z #{file}`.
       to_a.grep(/^committer/).last.match(/ (\d+) /)[1].to_i)
  rescue
    $stderr.puts "Couldn't get commit time for #{file}"
    Time.now
  end 
end

def make_toc
  toc = []
  section = 'Preliminaries'
  section_id = 'preliminaries'
  SOURCE_HTML.sort.each do |f|
    source = File.open(f).read
    doc = Hpricot(source)
    recipe_id = nil
    doc.search('h1, h2, h3, h4, h5, h6').each do |h_tag|
      title = h_tag ? h_tag.inner_text : 'Untitled'
      id = h_tag['id'] if h_tag
      next unless id && h_tag
      type = :subsection
      if h_tag.name == 'h2'
        section = title
        section_id = h_tag['id']
        type = :section
      elsif h_tag.name == 'h3'
        type = :recipe
        recipe_id = h_tag['id']
      end  
      toc << { :id => h_tag['id'], :title => title, :file => f,
       :type => type, :section_name => section, :section_id => section_id,
       :recipe_id => recipe_id, :time => commit_time(f),
       :target_path => "#{WEB_OUT}/#{section_id}/#{h_tag['id']}/index.html" }
    end  
  end    
  toc
end

desc "Generate the HTML version"
task :html => SOURCE_HTML do |t|
  toc = make_toc()
  toc.each_with_index do |entry,idx|
    next if entry[:type] == :subsection
    source = File.open(entry[:file]).read
    doc = Hpricot(source)

    if (entry[:type] == :section) || (entry[:id] == 'introduction')
        page = template('chapter.html', 
          {:title => entry[:id] == 'introduction' ? 'Preliminaries' : entry[:title],
           :recipes => toc.select do |e| 
            (e[:section_id] == entry[:section_id]) &&
            (e[:type] == :recipe)
         end   
        })
      path = "#{WEB_OUT}/#{entry[:section_id]}/index.html"
      mkdir_p File.dirname(path)
      File.open(path,'w'){|f| f.puts page}
    end  
    if entry[:type] == :recipe 
      doc.search('h1, h2, h3, h4, h5, h6').each do |tag|
        new_tag = tag.name.sub(/(\d)/) {|m| m.to_i - 2}
        tag.swap("<#{new_tag} id='#{tag['id']}'>#{tag.inner_html}</#{new_tag}>")
      end  
        
      doc.search('a[@href*=#]').each do |a|
        id = a['href'].sub(/^#/,'')
        sections = toc.select {|e| e[:id] == id}
        raise "Broken link (#{a}) in #{entry[:file]}" if sections.empty?
        next unless sections.size == 1
        sec = sections.first
        target = sec[:section_id] + '/' + id + '/'
        if sec[:type] == :subsection
          target = sec[:section_id] + '/' + sec[:recipe_id] + '/#' + sec[:id]
        end
        a.swap("<a href='/#{target}'>#{a.inner_html}</a>")
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
      page = template('recipe.html', 
        {:body => doc.to_s, :title => entry[:title], :id => entry[:id], 
         :section_id => entry[:section_id], :section => entry[:section_name], 
         :next_e => nxt, :prev_e => prv})
       #FIXME: Use :target_path instead: 
       path = "#{WEB_OUT}/#{entry[:section_id]}/#{entry[:id]}/index.html"
       mkdir_p File.dirname(path) 
       File.open(path,'w') {|file| file.puts page}
       entry[:body] = doc.to_s
    end    
  end  
  page = template('toc.html', 
    {:toc => toc.dup.reject{|e| e[:type] == :subsection},
     :title => 'Table of Contents'})
  mkdir_p "#{WEB_OUT}/toc"
  File.open("#{WEB_OUT}/toc/index.html",'w') {|file| file.puts page}
  recipes_by_time = toc.reject{|e| e[:type] == :subsection}.
                        sort_by{|e| e[:time]}.reverse
  page = template('atom.atom', 
    {:toc => recipes_by_time, :updated => recipes_by_time.first[:time]})
  File.open("#{WEB_OUT}/index.atom",'w') {|file| file.puts page}
end

directory "#{WEB_OUT}/css"
desc "Generate the website"
multitask :www => ["#{WEB_OUT}/vim-recipes.pdf",:html, "#{WEB_OUT}/css", :offline] do
  FileList['www/*', 'www/.[a-z]*'].each {|f| cp f, WEB_OUT}
  File.open("#{WEB_OUT}/css/style.css",'w') do |merged|
    ['main','web'].each do |name| 
      merged.print File.open(File.join(TEMPLATES_DIR, name + '.css')).read
    end  
  end  
  cp_r 'js', WEB_OUT
end  

desc "Upload the website"
task :upload => [:www, :sitemap] do
  rm OUTPUT_HTML
  sh "rsync -vaz #{WEB_OUT}/ vim.runpaint.org:/home/public/"
  Rake::Task['sitemap_notify'].invoke
  sh 'git push'
end

desc "Generate the .deb"
task :deb => [:offline_html] do
  dir = 'deb/usr/share/doc/vimrecipes/html'
  mkdir_p dir
  cp_r OFFLINE_OUT, dir
end 

desc "Generate the offline HTML"
task :offline_html => [:html] do
  cp_r WEB_OUT, OFFLINE_OUT
  chdir OFFLINE_OUT do
    mv "toc/index.html", 'index.html'
    rmdir 'toc'
    rm 'index.atom'
    FileList["*.html", "*/*.html", "*/*/*.html"].each do |file|
      prefix = '../' * (file.count('/') + 1 - OFFLINE_OUT.count('/'))
      doc = Hpricot(File.open(file).read)
      doc.search('link[@rel=alternate]').remove
      doc.search('form, script, noscript').remove
      if doc.at('#disqus_thread')
        doc.at('#disqus_thread').after('<script src="/js/footnotes.js">')
      end
      %w{href src}.each do |attr|
        doc.search("*[@#{attr}]").each do |tag|
            next unless tag[attr].start_with? '/'
            tag[attr] = prefix + tag[attr][1..-1]
            tag[attr] += 'index.html' if tag[attr].end_with? '/'
            tag[attr] = tag[attr].sub('/toc','') || tag[attr]
        end
      end
      File.open(file,'w').puts doc
    end  
  end    
end

desc "Create offline archive"
task :offline => [:pdf, :offline_html] do
  cp File.join(WEB_OUT,'vim-recipes.pdf'), OFFLINE_OUT
  chdir 'output' do  
    cp_r("offline", 'vim-recipes')
    sh "tar cjf vim-recipes.tar.bz2 vim-recipes" 
    sh "zip -qr vim-recipes.zip vim-recipes"
    mv(FileList["vim-recipes.*"],'www/')
  end  
end
