require_relative '../../lib/greeby/builder'

namespace :generate do

  desc "generate a new letter html file"
  task :letter do
    builder = Greeby::Builder.new
    builder.make_letter('grn.yml')
    builder.make_archives('grn.yml')
  end

  desc "re-generate all letters html file"
  task :all do
    builder = Greeby::Builder.new
    builder.make_all
  end

  desc "updates static website"
  task :web do
    builder = Greeby::Builder.new
    builder.make_web
  end

end