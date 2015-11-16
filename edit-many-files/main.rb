#
# Append front-matter text on all markdown files
#

files = []

Dir::glob("src/md/*.md").each do |path, idx|
  buf = File.open path
  files << buf
end

files.each do |file|
  id = File.basename(file, ".md")
  buf = file.read

  fm = <<-"EOS"
---
slug: #{id}
title: #{id}
layout: page.jade
---

  EOS

  path = "src/md/" + File.basename(file)
  open(path, "w") do |f|
    f.write(fm + buf)
  end
end
