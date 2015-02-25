require 'fileutils'

sch = "<REPLACE>"

buf = File.open("__copysrc.txt")
txt = buf.read
buf.close

begin
  FileUtils.mkdir("results")
rescue Errno::EEXIST
  puts "Error. Please remove 'results' directory."
  exit
end

open("__input.txt") { |file|
  while line = file.gets
    rep = line.chomp
    aft = txt.gsub(sch, rep)
    File.open("results/#{rep}.txt", "w"){|w| w.write(aft)}
  end
}

