buf = ""
Dir::glob("./results/*").each { |f|
  buf << File.open(f).read
}
File.open("merged.txt", "w"){|w| w.write(buf)}

