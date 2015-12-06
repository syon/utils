require 'geo_pattern'
require 'fileutils'

begin
  FileUtils.mkdir("results")
rescue Errno::EEXIST
  puts "Please remove 'results' directory."
  exit
end

buf = File.open("input.txt")
list = buf.read.split "\n"
buf.close

list.each do |title|
  pattern = GeoPattern.generate(title)
  File.open("results/#{title}.svg", "w") do |w|
    w.write(pattern.to_svg)
  end
end
