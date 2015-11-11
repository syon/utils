require 'ruby_identicon'
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
  RubyIdenticon.create_and_save(title, "results/#{title}.png")
end
